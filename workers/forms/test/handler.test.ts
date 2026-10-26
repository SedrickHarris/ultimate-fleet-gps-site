import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { handleRequest, originAllowed, type Deps } from "../src/handler.ts";
import type { Env } from "../src/types.ts";

const ORIGIN = "https://ultimatefleetgps.net";
const JOB = "mobile-gps-eld-aobrd-installation-technician";

const CONFIG = JSON.stringify({
  locationId: "LOC1",
  pipelines: {
    commercial_inquiry: { pipelineId: "P-COM", stageId: "S-COM" },
    installer_network: { pipelineId: "P-NET", stageId: "S-NET" },
    job_application: { pipelineId: "P-APP", stageId: "S-APP" },
  },
  customFields: {
    serviceNeed: "CF-service",
    platforms: "CF-platforms",
    utmSource: "CF-utm",
    submissionId: "CF-sub",
    receivedAt: "CF-recv",
    validDriversLicense: "CF-license",
    smartphone: "CF-smartphone",
    providesOwnTools: "CF-tools",
    providesOwnTravelResources: "CF-travel",
    privacyConsent: "CF-privacy",
    unusedKey: "CF-unused",
  },
});

const env: Env = {
  ALLOWED_ORIGINS:
    "https://ultimatefleetgps.net,https://*.ultimate-fleet-gps-site.pages.dev",
  ACTIVE_JOB_SLUGS: JOB,
  GHL_API_TOKEN: "test-token",
  GHL_CONFIG: CONFIG,
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
  providesOwnTools: true,
  providesOwnTravelResources: true,
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
  path: string;
  headers: Record<string, string>;
  body: Record<string, unknown>;
}

/**
 * Fake GHL. `failures` maps a path fragment to the statuses to return for
 * calls matching it, in order. Everything else succeeds.
 */
function setup(failures: Record<string, number[]> = {}) {
  const calls: Call[] = [];
  const logs: Record<string, unknown>[] = [];
  const seen: Record<string, number> = {};
  const deps: Deps = {
    fetch: (async (input: RequestInfo | URL, init?: RequestInit) => {
      const path = String(input).replace("https://services.leadconnectorhq.com", "");
      calls.push({
        path,
        headers: init?.headers as Record<string, string>,
        body: JSON.parse(String(init?.body ?? "{}")),
      });
      const key = Object.keys(failures).find((k) => path.includes(k));
      if (key) {
        const n = seen[key] ?? 0;
        seen[key] = n + 1;
        const status = failures[key]![Math.min(n, failures[key]!.length - 1)]!;
        if (status !== 200) return new Response("{}", { status });
      }
      if (path === "/contacts/upsert") {
        return Response.json({ new: true, contact: { id: "C123" } });
      }
      return Response.json({});
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

describe("GHL API calls", () => {
  it("upserts the contact, adds tags, then creates the opportunity, in that order", async () => {
    const { calls, deps } = setup();
    const res = await handleRequest(post(commercial), env, deps);
    assert.equal(res.status, 200);
    assert.deepEqual(
      calls.map((c) => c.path),
      ["/contacts/upsert", "/contacts/C123/tags", "/opportunities/"],
    );
  });

  it("authenticates every call with the bearer token and API version", async () => {
    const { calls, deps } = setup();
    await handleRequest(post(commercial), env, deps);
    for (const call of calls) {
      assert.equal(call.headers.Authorization, "Bearer test-token");
      assert.equal(call.headers.Version, "v3");
    }
  });

  it("sends the Version override when one is configured", async () => {
    const { calls, deps } = setup();
    await handleRequest(post(commercial), { ...env, GHL_API_VERSION: "2021-07-28" }, deps);
    assert.ok(calls.every((c) => c.headers.Version === "2021-07-28"));
  });

  it("sends no source on the opportunity, which its schema does not define", async () => {
    const { calls, deps } = setup();
    await handleRequest(post(commercial), env, deps);
    assert.ok(!("source" in calls[2]!.body));
  });

  it("maps the contact and only the configured custom fields", async () => {
    const { calls, deps } = setup();
    await handleRequest(post(commercial), env, deps);
    const body = calls[0]!.body;
    assert.equal(body.locationId, "LOC1");
    assert.equal(body.firstName, "Pat");
    assert.equal(body.lastName, "Example");
    assert.equal(body.companyName, "Example Fleet Co");
    assert.equal(body.source, "Website - Commercial Inquiry");
    assert.deepEqual(body.customFields, [
      { id: "CF-service", fieldValue: "GPS tracking" },
      { id: "CF-utm", fieldValue: "google" },
      { id: "CF-sub", fieldValue: "11111111-2222-3333-4444-555555555555" },
      { id: "CF-recv", fieldValue: "2026-10-26T20:00:01.000Z" },
    ]);
  });

  it("joins a platform list into text and skips empty values", async () => {
    const { calls, deps } = setup();
    await handleRequest(
      post({ ...network, platforms: ["Samsara", "Geotab"] }),
      env,
      deps,
    );
    const fields = calls[0]!.body.customFields as { id: string; fieldValue: string }[];
    assert.ok(fields.some((f) => f.id === "CF-platforms" && f.fieldValue === "Samsara, Geotab"));
    const noPlatforms = setup();
    await handleRequest(post({ ...network, platforms: [] }), env, noPlatforms.deps);
    const empty = noPlatforms.calls[0]!.body.customFields as { id: string }[];
    assert.ok(!empty.some((f) => f.id === "CF-platforms"));
  });

  it("stores application confirmations as Yes", async () => {
    const { calls, deps } = setup();
    await handleRequest(post(application), env, deps);
    const fields = calls[0]!.body.customFields as { id: string; fieldValue: string }[];
    assert.ok(fields.some((f) => f.id === "CF-license" && f.fieldValue === "Yes"));
    assert.ok(fields.some((f) => f.id === "CF-privacy" && f.fieldValue === "Yes"));
  });

  it("puts each journey in its own pipeline and stage", async () => {
    for (const [payload, pipelineId, stageId] of [
      [commercial, "P-COM", "S-COM"],
      [network, "P-NET", "S-NET"],
      [application, "P-APP", "S-APP"],
    ] as const) {
      const { calls, deps } = setup();
      const res = await handleRequest(post(payload), env, deps);
      assert.equal(res.status, 200);
      const opportunity = calls[2]!.body;
      assert.equal(opportunity.pipelineId, pipelineId);
      assert.equal(opportunity.pipelineStageId, stageId);
      assert.equal(opportunity.contactId, "C123");
      assert.equal(opportunity.status, "open");
    }
  });

  it("names opportunities and tags by journey, and tags the job", async () => {
    const com = setup();
    await handleRequest(post(commercial), env, com.deps);
    assert.equal(com.calls[2]!.body.name, "Example Fleet Co - GPS tracking");
    assert.deepEqual(com.calls[1]!.body.tags, ["website-lead", "commercial-inquiry"]);

    const app = setup();
    await handleRequest(post(application), env, app.deps);
    assert.equal(app.calls[2]!.body.name, "Alex Example - Mobile GPS Installation Technician");
    assert.ok((app.calls[1]!.body.tags as string[]).includes(`job-${JOB}`));
    assert.ok(!(app.calls[1]!.body.tags as string[]).includes("commercial-inquiry"));
  });

  it("never puts the token or a submitted value in the log", async () => {
    const { logs, deps } = setup({ "/opportunities/": [400] });
    await handleRequest(post(commercial), env, deps);
    const text = JSON.stringify(logs);
    assert.ok(!text.includes("test-token"));
    assert.ok(!text.includes("pat@example.com"));
  });
});

describe("no false success", () => {
  for (const [step, fragment] of [
    ["contact", "/contacts/upsert"],
    ["tags", "/tags"],
    ["opportunity", "/opportunities/"],
  ] as const) {
    it(`returns 502 when GHL rejects the ${step} step`, async () => {
      const { logs, deps } = setup({ [fragment]: [422] });
      const res = await handleRequest(post(commercial), env, deps);
      assert.equal(res.status, 502);
      const entry = logs.find((l) => l.event === "form_rejected")!;
      assert.equal(entry.step, step);
      assert.equal(entry.ghlStatus, 422);
    });
  }

  it("stops after a failed step and does not create the opportunity", async () => {
    const { calls, deps } = setup({ "/tags": [400] });
    await handleRequest(post(commercial), env, deps);
    assert.ok(!calls.some((c) => c.path === "/opportunities/"));
  });

  it("retries once on a 5xx and then succeeds", async () => {
    const { calls, deps } = setup({ "/contacts/upsert": [503, 200] });
    const res = await handleRequest(post(commercial), env, deps);
    assert.equal(res.status, 200);
    assert.equal(calls.filter((c) => c.path === "/contacts/upsert").length, 2);
  });

  it("retries once on a 429", async () => {
    const { calls, deps } = setup({ "/opportunities/": [429, 200] });
    const res = await handleRequest(post(commercial), env, deps);
    assert.equal(res.status, 200);
    assert.equal(calls.filter((c) => c.path === "/opportunities/").length, 2);
  });

  it("gives up after the retry", async () => {
    const { deps } = setup({ "/contacts/upsert": [503, 503] });
    const res = await handleRequest(post(commercial), env, deps);
    assert.equal(res.status, 502);
  });

  it("does not retry a 4xx", async () => {
    const { calls, deps } = setup({ "/contacts/upsert": [422, 200] });
    await handleRequest(post(commercial), env, deps);
    assert.equal(calls.filter((c) => c.path === "/contacts/upsert").length, 1);
  });

  it("returns 502 when the token or config is missing", async () => {
    for (const broken of [
      { ...env, GHL_API_TOKEN: undefined },
      { ...env, GHL_CONFIG: undefined },
      { ...env, GHL_CONFIG: "not json" },
    ]) {
      const { calls, deps } = setup();
      const res = await handleRequest(post(commercial), broken, deps);
      assert.equal(res.status, 502);
      assert.equal(calls.length, 0);
    }
  });

  it("returns 502 when this journey has no pipeline configured", async () => {
    const partial = JSON.stringify({
      locationId: "LOC1",
      pipelines: { commercial_inquiry: { pipelineId: "P", stageId: "S" } },
    });
    const { calls, deps } = setup();
    const res = await handleRequest(post(network), { ...env, GHL_CONFIG: partial }, deps);
    assert.equal(res.status, 502);
    assert.equal(calls.length, 0);
  });

  it("returns 502 when upsert succeeds without a contact ID", async () => {
    const { calls, deps } = setup();
    const noId: Deps = {
      ...deps,
      fetch: (async () => Response.json({ new: true })) as typeof fetch,
    };
    const res = await handleRequest(post(commercial), env, noId);
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

  it("still requires the privacy consent", async () => {
    for (const bad of [false, undefined]) {
      const { calls, deps } = setup();
      const payload: Record<string, unknown> = { ...application, privacyConsent: bad };
      if (bad === undefined) delete payload.privacyConsent;
      const res = await handleRequest(post(payload), env, deps);
      assert.equal(res.status, 400);
      assert.equal(calls.length, 0);
    }
  });

  const YES_NO_KEYS = [
    "validDriversLicense",
    "personalVehicle",
    "providesOwnTools",
    "providesOwnTravelResources",
    "smartphone",
    "backgroundCheckConsent",
    "travelPercentAcknowledged",
    "stateToStateTravelAcknowledged",
    "trainingAcknowledged",
    "independentContractorAcknowledged",
  ];

  it("accepts a No on each Yes or No application question", async () => {
    for (const key of YES_NO_KEYS) {
      const { calls, deps } = setup();
      const res = await handleRequest(
        post({ ...application, [key]: false }),
        env,
        deps,
      );
      assert.equal(res.status, 200, key);
      assert.equal(calls.filter((c) => c.path === "/opportunities/").length, 1, key);
    }
  });

  it("rejects an unanswered or non-boolean Yes or No question", async () => {
    for (const key of YES_NO_KEYS) {
      for (const bad of [undefined, "no", "yes", null, 0]) {
        const { calls, deps } = setup();
        const payload: Record<string, unknown> = { ...application, [key]: bad };
        if (bad === undefined) delete payload[key];
        const res = await handleRequest(post(payload), env, deps);
        assert.equal(res.status, 400, `${key} = ${String(bad)}`);
        assert.equal(calls.length, 0, key);
      }
    }
  });

  it("stores a No answer as No", async () => {
    const { calls, deps } = setup();
    await handleRequest(post({ ...application, smartphone: false }), env, deps);
    const fields = calls[0]!.body.customFields as { id: string; fieldValue: string }[];
    assert.ok(fields.some((f) => f.id === "CF-license" && f.fieldValue === "Yes"));
    assert.ok(fields.some((f) => f.id === "CF-smartphone" && f.fieldValue === "No"));
  });

  it("keeps the vehicle, tools, and travel resources answers separate", async () => {
    const { calls, deps } = setup();
    await handleRequest(
      post({
        ...application,
        personalVehicle: true,
        providesOwnTools: false,
        providesOwnTravelResources: true,
      }),
      env,
      deps,
    );
    const fields = calls[0]!.body.customFields as { id: string; fieldValue: string }[];
    assert.ok(fields.some((f) => f.id === "CF-tools" && f.fieldValue === "No"));
    assert.ok(fields.some((f) => f.id === "CF-travel" && f.fieldValue === "Yes"));
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
