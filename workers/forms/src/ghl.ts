import type { Env, FormType, ValidSubmission } from "./types.ts";

/**
 * GoHighLevel (GHL) forwarding.
 *
 * Each journey has its own inbound webhook URL, so commercial inquiries,
 * installer-network registrations, and job applications land in separate GHL
 * workflows and pipelines and can never mix (CLAUDE.md section 4, docs/16
 * sections 20, 24, and 25). The webhook URLs grant write access, so they live
 * only in Worker secrets.
 */

export const GHL_TIMEOUT_MS = 10_000;
const DEFAULT_HOST_SUFFIXES = ["leadconnectorhq.com"];

interface Journey {
  readonly secret: keyof Env;
  readonly pipeline: "commercial" | "recruitment";
  readonly source: string;
  readonly tags: readonly string[];
}

const JOURNEYS: Record<FormType, Journey> = {
  commercial_inquiry: {
    secret: "GHL_WEBHOOK_COMMERCIAL",
    pipeline: "commercial",
    source: "Website - Commercial Inquiry",
    tags: ["website-lead", "commercial-inquiry"],
  },
  installer_network: {
    secret: "GHL_WEBHOOK_INSTALLER_NETWORK",
    pipeline: "recruitment",
    source: "Website - Installer Network",
    tags: ["website-lead", "installer-network"],
  },
  job_application: {
    secret: "GHL_WEBHOOK_APPLICATION",
    pipeline: "recruitment",
    source: "Website - Job Application",
    tags: ["website-lead", "job-application"],
  },
};

export type ForwardResult =
  | { readonly ok: true }
  | {
      readonly ok: false;
      readonly reason: "not_configured" | "bad_destination" | "rejected" | "unreachable";
    };

/** Flat JSON a GHL inbound webhook workflow can map field by field. */
export function buildGhlPayload(
  submission: ValidSubmission,
  meta: { submissionId: string; receivedAt: string },
): Record<string, unknown> {
  const journey = JOURNEYS[submission.formType];
  const { fields, attribution } = submission;

  const fullName = typeof fields.name === "string" ? fields.name : "";
  const [firstName = "", ...rest] = fullName.split(/\s+/);

  const tags = [...journey.tags];
  if (submission.formType === "job_application" && typeof fields.jobSlug === "string") {
    tags.push(`job-${fields.jobSlug}`);
  }

  return {
    submissionId: meta.submissionId,
    receivedAt: meta.receivedAt,
    formType: submission.formType,
    pipeline: journey.pipeline,
    source: journey.source,
    tags,

    // Standard GHL contact fields.
    first_name: firstName,
    last_name: rest.join(" "),
    full_name: fullName,
    email: fields.email,
    phone: fields.phone,
    company_name: fields.company ?? "",

    // Everything else the visitor submitted, under the form's own field names.
    ...fields,

    // Attribution, so the first touch survives into the CRM.
    ...attribution,
  };
}

export function resolveDestination(
  formType: FormType,
  env: Env,
): { url: URL } | { error: "not_configured" | "bad_destination" } {
  const raw = env[JOURNEYS[formType].secret];
  if (typeof raw !== "string" || !raw) return { error: "not_configured" };

  const suffixes = (env.GHL_WEBHOOK_HOST_SUFFIXES ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const allowed = suffixes.length > 0 ? suffixes : DEFAULT_HOST_SUFFIXES;

  try {
    const url = new URL(raw);
    const host = url.hostname.toLowerCase();
    const hostOk = allowed.some((s) => host === s || host.endsWith(`.${s}`));
    if (url.protocol !== "https:" || !hostOk) return { error: "bad_destination" };
    return { url };
  } catch {
    return { error: "bad_destination" };
  }
}

export async function forwardToGhl(
  submission: ValidSubmission,
  env: Env,
  meta: { submissionId: string; receivedAt: string },
  fetchImpl: typeof fetch,
): Promise<ForwardResult> {
  const destination = resolveDestination(submission.formType, env);
  if ("error" in destination) return { ok: false, reason: destination.error };

  const body = JSON.stringify(buildGhlPayload(submission, meta));

  // One retry, only for a network failure or a 5xx. A 4xx means GHL rejected
  // the request, and repeating it would not help or could duplicate a contact.
  for (let attempt = 0; attempt < 2; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), GHL_TIMEOUT_MS);
    try {
      const response = await fetchImpl(destination.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        signal: controller.signal,
      });
      if (response.ok) return { ok: true };
      if (response.status < 500) return { ok: false, reason: "rejected" };
    } catch {
      // Network error or timeout. Fall through to the retry.
    } finally {
      clearTimeout(timer);
    }
  }
  return { ok: false, reason: "unreachable" };
}
