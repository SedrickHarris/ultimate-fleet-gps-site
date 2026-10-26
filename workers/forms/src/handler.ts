import { forwardToGhl } from "./ghl.ts";
import type { Env } from "./types.ts";
import { validateSubmission } from "./validate.ts";

const MAX_BODY_BYTES = 32 * 1024;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export interface Deps {
  readonly fetch: typeof fetch;
  readonly now: () => Date;
  readonly uuid: () => string;
  readonly log: (entry: Record<string, unknown>) => void;
}

const defaultDeps: Deps = {
  fetch: (...args) => fetch(...args),
  now: () => new Date(),
  uuid: () => crypto.randomUUID(),
  log: (entry) => console.log(JSON.stringify(entry)),
};

function splitList(value: string | undefined): string[] {
  return (value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

/** Exact match, or `https://*.example.com` matching any subdomain. */
export function originAllowed(origin: string, allowList: readonly string[]) {
  return allowList.some((entry) => {
    if (!entry.includes("*")) return entry === origin;
    const [scheme, host] = entry.split("://");
    try {
      const url = new URL(origin);
      const suffix = (host ?? "").replace(/^\*/, "");
      return (
        `${url.protocol}//` === `${scheme}://` &&
        url.hostname.endsWith(suffix) &&
        url.hostname.length > suffix.length
      );
    } catch {
      return false;
    }
  });
}

function json(
  status: number,
  body: Record<string, unknown>,
  cors: Record<string, string>,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...cors,
    },
  });
}

async function turnstilePasses(
  token: string,
  secret: string,
  fetchImpl: typeof fetch,
): Promise<boolean> {
  if (!token) return false;
  try {
    const response = await fetchImpl(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch {
    return false;
  }
}

/**
 * The trusted forms endpoint. Static export cannot hold secrets, so the three
 * site forms POST here, and this Worker validates the submission and forwards
 * it to the correct GoHighLevel workflow.
 *
 * Success is returned only after GHL has accepted the record, so the site
 * never shows a confirmation for a submission that was lost (docs/16 section
 * 20, "Do not show success until the record is durably accepted").
 */
export async function handleRequest(
  request: Request,
  env: Env,
  deps: Deps = defaultDeps,
): Promise<Response> {
  const origin = request.headers.get("Origin") ?? "";
  const allowedOrigins = splitList(env.ALLOWED_ORIGINS);
  const originOk = originAllowed(origin, allowedOrigins);

  const cors: Record<string, string> = originOk
    ? {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
        Vary: "Origin",
      }
    : { Vary: "Origin" };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: originOk ? 204 : 403, headers: cors });
  }
  if (request.method !== "POST") {
    return json(405, { ok: false, error: "method_not_allowed" }, cors);
  }

  const correlationId = deps.uuid();
  const fail = (status: number, error: string, extra: Record<string, unknown> = {}) => {
    // Log a safe category and a correlation ID. Never the request body.
    deps.log({ event: "form_rejected", correlationId, status, error, ...extra });
    return json(status, { ok: false, error }, cors);
  };

  // Origin is a defense-in-depth signal, not authentication (docs/16 section 20).
  if (!originOk) return fail(403, "origin_not_allowed");

  if (!(request.headers.get("Content-Type") ?? "").includes("application/json")) {
    return fail(415, "unsupported_media_type");
  }
  const declared = Number(request.headers.get("Content-Length") ?? 0);
  if (declared > MAX_BODY_BYTES) return fail(413, "payload_too_large");

  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
    return fail(413, "payload_too_large");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return fail(400, "invalid_json");
  }

  const result = validateSubmission(parsed, {
    activeJobSlugs: splitList(env.ACTIVE_JOB_SLUGS),
  });
  if (!result.ok) {
    return fail(400, "invalid_submission", { invalidFields: result.invalidFields });
  }
  const submission = result.value;

  if (env.TURNSTILE_SECRET_KEY) {
    const passed = await turnstilePasses(
      submission.turnstileToken,
      env.TURNSTILE_SECRET_KEY,
      deps.fetch,
    );
    if (!passed) return fail(403, "challenge_failed", { formType: submission.formType });
  }

  const forwarded = await forwardToGhl(
    submission,
    env,
    { submissionId: correlationId, receivedAt: deps.now().toISOString() },
    deps.fetch,
  );

  if (!forwarded.ok) {
    // Never reveal destinations or secrets. The site shows its own fallback.
    // The log carries the failing step and GHL's status code, never a body.
    return fail(502, "temporarily_unavailable", {
      formType: submission.formType,
      reason: forwarded.reason,
      step: forwarded.step,
      ghlStatus: forwarded.status,
    });
  }

  deps.log({
    event: "form_accepted",
    correlationId,
    formType: submission.formType,
  });
  return json(200, { ok: true }, cors);
}
