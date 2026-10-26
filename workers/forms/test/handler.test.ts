import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { handleRequest, originAllowed, type Deps } from "../src/handler.ts";
import type { Env } from "../src/types.ts";

const ORIGIN = "https://ultimatefleetgps.net";
const JOB = "mobile-gps-eld-aobrd-installation-technician";

const env: Env = {
  ALLOWED_ORIGINS:
    "https://ultimatefleetgps.net,https://*.ultimate-fleet-gps-site.pages.dev",
  ACTIVE_JOB_SLUGS: JOB,
  GHL_WEBHOOK_COMMERCIAL: "https://services.leadconnectorhq.com/hooks/LOC/webhook-trigger/commercial",
  GHL_WEBHOOK_APPLICATION: "https://services.leadconnectorhq.com/hooks/LOC/webhook-trigger/application",
  GHL_WEBHOOK_INSTALLER_NETWORK: "https://services.leadconnectorhq.com/hooks/LOC/webhook-trigger/network",
};

const attribution = {
  sourcePage: "/contact/",
  sourceTitle: "Contact",
  referrer: "",
  utmSource: "google",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  utmTerm: "",
  submittedAt: "2026-10-26T20:00:00.000Z",
};

const commercial = {
  ...attribution,
  formType: "commercial_inquiry",
  name: "Pat Example",
  email: "pat@example.com",
  phone: "(555) 010-0199",
  company: "Example Fleet Co",
  serviceNeed: "GPS tracking",
  vehicleCount: "12",
  projectLocations: "Phoenix, AZ",
  timeline: "",
  description: "",
  consent: true,
};

const network = {
  ...attribution,
  formType: "installer_network",
  name: "Sam Example",
  email: "sam@example.com",
  phone: "5550100199",
  homeMarket: "Dallas, TX",
  experienceSummary: "Some experience.",
  platforms: ["Samsara"],
  toolsOwned: "",
  travelAvailability: "Texas",
  consent: true,
  noGuaranteeAcknowledged: true,
};

const application = {
  ...attribution,
  formType: "job_application",
  jobSlug: JOB,
  jobTitle: "Mobile GPS Installation Technician",
  name: "Alex Example",
  email: "alex@example.com",
  phone: "5550100199",
  travelAvailability: "Nationwide",
  skillsExperience: "",
  toolsOwned: "",
  platforms: [],
  validDriversLicense: true,
  personalVehicle: true,
  smartphone: true,
  backgroundCheckConsent: true,
  travelPercentAcknowledged: true,
  travelPercent: 75,
  stateToStateTravelAcknowledged: true,
  trainingAcknowledged: true,
  independentContractorAcknowledged: true,
  privacyConsent: true,
};

interface Call {
  url: string;
  body: Record<string, unknown>;
}

function setup(ghlStatuses: number[] = [200]) {
  const calls: Call[] = [];
  const logs: Record<string, unknown>[] = [];
  let i = 0;
  const deps: Deps = {
    fetch: (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      calls.push({ url, body: JSON.parse(String(init?.body ?? "{}")) });
      const status = ghlStatuses[Math.min(i++, ghlStatuses.length - 1)] ?? 200;
      return new Response("{}", { status });
    }) as typeof fetch,
    now: () => new Date("2026-10-26T20:00:01.000Z"),
    uuid: () => "11111111-2222-3333-4444-555555555555",
    log: (entry) => logs.push(entry),
  };
  return { calls, logs, deps };
}

function post(body: unknown, headers: Record<string, string> = {}) {
  return new Request("https://forms.example.test/", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: ORIGIN, ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

describe("routing to GHL", () => {
  it("sends a commercial inquiry only to the commercial webhook", async () => {
    const { calls, deps } = setup();
    const res = await handleRequest(post(commercial), env, deps);
    assert.equal(res.status, 200);
    assert.equal(calls.length, 1);
    assert.ok(calls[0]!.url.endsWith("/commercial"));
    assert.equal(calls[0]!.body.pipeline, "commercial");
    assert.equal(calls[0]!.body.first_name, "Pat");
    assert.equal(calls[0]!.body.last_name, "Example");
    assert.equal(calls[0]!.body.company_name, "Example Fleet Co");
    assert.equal(calls[0]!.body.utmSource, "google");
    assert.equal(calls[0]!.body.submissionId, "11111111-2222-3333-4444-555555555555");
  });

  it("sends an installer network registration only to the network webhook", async () => {
    const { calls, deps } = setup();
    const res = await handleRequest(post(network), env, deps);
    assert.equal(res.status, 200);
    assert.ok(calls[0]!.url.endsWith("/network"));
    assert.equal(calls[0]!.body.pipeline, "recruitment");
    assert.deepEqual(calls[0]!.body.tags, ["website-lead", "installer-network"]);
  });

  it("sends an application only to the application webhook and tags the job", async () => {
    const { calls, deps } = setup();
    const res = await handleRequest(post(application), env, deps);
    assert.equal(res.status, 200);
    assert.ok(calls[0]!.url.endsWith("/application"));
    assert.ok((calls[0]!.body.tags as string[]).includes(`job-${JOB}`));
  });
});

describe("no false success", () => {
  it("returns 502 when GHL rejects the record", async () => {
    const { deps } = setup([400]);
    const res = await handleRequest(post(commercial), env, deps);
    assert.equal(res.status, 502);
  });

  it("retries once on a 5xx and succeeds", async () => {
    const { calls, deps } = setup([503, 200]);
    const res = await handleRequest(post(commercial), env, deps);
    assert.equal(res.status, 200);
    assert.equal(calls.length, 2);
  });

  it("does not retry a 4xx", async () => {
    const { calls, deps } = setup([422, 200]);
    await handleRequest(post(commercial), env, deps);
    assert.equal(calls.length, 1);
  });

  it("returns 502 when the webhook secret is missing", async () => {
    const { calls, deps } = setup();
    const res = await handleRequest(
      post(commercial),
      { ...env, GHL_WEBHOOK_COMMERCIAL: undefined },
      deps,
    );
    assert.equal(res.status, 502);
    assert.equal(calls.length, 0);
  });

  it("refuses a webhook URL outside the allowed GHL hosts", async () => {
    const { calls, deps } = setup();
    const res = await handleRequest(
      post(commercial),
      { ...env, GHL_WEBHOOK_COMMERCIAL: "https://evil.example.com/hook" },
      deps,
    );
    assert.equal(res.status, 502);
    assert.equal(calls.length, 0);
  });
});

describe("validation", () => {
  it("rejects a missing required field without echoing values", async () => {
    const { logs, deps } = setup();
    const res = await handleRequest(post({ ...commercial, email: "nope" }), env, deps);
    assert.equal(res.status, 400);
    const text = JSON.stringify(logs) + (await res.text());
    assert.ok(!text.includes("nope"));
    assert.ok(!text.includes("pat@example.com"));
  });

  it("requires consent", async () => {
    const { deps } = setup();
    const res = await handleRequest(post({ ...commercial, consent: false }), env, deps);
    assert.equal(res.status, 400);
  });

  it("rejects an application for a closed or unknown opening", async () => {
    const { calls, deps } = setup();
    const res = await handleRequest(
      post({ ...application, jobSlug: "closed-role" }),
      env,
      deps,
    );
    assert.equal(res.status, 400);
    assert.equal(calls.length, 0);
  });

  it("requires every application acknowledgment", async () => {
    const { deps } = setup();
    const res = await handleRequest(
      post({ ...application, backgroundCheckConsent: false }),
      env,
      deps,
    );
    assert.equal(res.status, 400);
  });

  it("rejects an unknown form type", async () => {
    const { deps } = setup();
    const res = await handleRequest(post({ ...commercial, formType: "referral" }), env, deps);
    assert.equal(res.status, 400);
  });

  it("rejects malformed JSON and oversized bodies", async () => {
    const { deps } = setup();
    assert.equal((await handleRequest(post("{"), env, deps)).status, 400);
    const big = { ...commercial, description: "x".repeat(40_000) };
    assert.equal((await handleRequest(post(big), env, deps)).status, 413);
  });
});

describe("origin and method", () => {
  it("rejects an origin that is not allowed", async () => {
    const { calls, deps } = setup();
    const res = await handleRequest(
      post(commercial, { Origin: "https://attacker.example" }),
      env,
      deps,
    );
    assert.equal(res.status, 403);
    assert.equal(calls.length, 0);
  });

  it("answers a preflight for an allowed origin", async () => {
    const { deps } = setup();
    const res = await handleRequest(
      new Request("https://forms.example.test/", {
        method: "OPTIONS",
        headers: { Origin: ORIGIN },
      }),
      env,
      deps,
    );
    assert.equal(res.status, 204);
    assert.equal(res.headers.get("Access-Control-Allow-Origin"), ORIGIN);
  });

  it("rejects GET", async () => {
    const { deps } = setup();
    const res = await handleRequest(
      new Request("https://forms.example.test/", { headers: { Origin: ORIGIN } }),
      env,
      deps,
    );
    assert.equal(res.status, 405);
  });

  it("matches wildcard preview origins but not the bare suffix", () => {
    const list = ["https://*.ultimate-fleet-gps-site.pages.dev"];
    assert.ok(originAllowed("https://abc123.ultimate-fleet-gps-site.pages.dev", list));
    assert.ok(!originAllowed("https://ultimate-fleet-gps-site.pages.dev", list));
    assert.ok(!originAllowed("http://abc.ultimate-fleet-gps-site.pages.dev", list));
    assert.ok(!originAllowed("https://x.ultimate-fleet-gps-site.pages.dev.evil.com", list));
  });
});

describe("Turnstile", () => {
  it("is not required until a secret is configured", async () => {
    const { deps } = setup();
    assert.equal((await handleRequest(post(commercial), env, deps)).status, 200);
  });

  it("rejects a missing token when a secret is configured", async () => {
    const { calls, deps } = setup();
    const res = await handleRequest(
      post(commercial),
      { ...env, TURNSTILE_SECRET_KEY: "secret" },
      deps,
    );
    assert.equal(res.status, 403);
    assert.equal(calls.length, 0);
  });
});
