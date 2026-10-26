import type { Env, FormType, ValidSubmission } from "./types.ts";

/**
 * GoHighLevel (GHL) API client for the forms Worker.
 *
 * Each accepted submission makes three calls, in this order:
 *
 *   1. upsert the contact (matched by GHL's duplicate-contact setting)
 *   2. add the journey's tags to the contact
 *   3. create an opportunity in that journey's own pipeline
 *
 * The opportunity goes last on purpose. A visitor who retries after a failure
 * re-runs the idempotent steps (contact, tags) and creates the opportunity
 * once. Each journey has its own pipeline, so commercial inquiries, Installer
 * Network registrations, and job applications never mix (CLAUDE.md section 4,
 * docs/16 sections 24 and 25).
 *
 * Notifications and acknowledgement emails are GHL workflows triggered by
 * "Opportunity Created" on each pipeline (docs/32).
 *
 * The token is a Worker secret and is never logged.
 */

export const GHL_API_BASE = "https://services.leadconnectorhq.com";
/** The endpoints this Worker calls document `v3` as the only allowed Version. */
export const GHL_API_VERSION = "v3";
export const GHL_TIMEOUT_MS = 10_000;

export interface GhlConfig {
  readonly locationId: string;
  readonly pipeline: { readonly pipelineId: string; readonly stageId: string };
  /** Payload key -> GHL custom field ID. A key with no entry is not sent. */
  readonly customFields: Readonly<Record<string, string>>;
}

export type Step = "contact" | "tags" | "opportunity";

export type ForwardResult =
  | { readonly ok: true }
  | {
      readonly ok: false;
      readonly reason: "not_configured" | "rejected" | "unreachable" | "bad_response";
      readonly step?: Step;
      readonly status?: number;
    };

const JOURNEYS: Record<
  FormType,
  {
    readonly source: string;
    readonly tags: readonly string[];
    readonly opportunityName: (fields: ValidSubmission["fields"]) => string;
  }
> = {
  commercial_inquiry: {
    source: "Website - Commercial Inquiry",
    tags: ["website-lead", "commercial-inquiry"],
    opportunityName: (f) => `${text(f.company)} - ${text(f.serviceNeed)}`,
  },
  installer_network: {
    source: "Website - Installer Network",
    tags: ["website-lead", "installer-network"],
    opportunityName: (f) => `${text(f.name)} - Installer Network`,
  },
  job_application: {
    source: "Website - Job Application",
    tags: ["website-lead", "job-application"],
    opportunityName: (f) => `${text(f.name)} - ${text(f.jobTitle)}`,
  },
};

function text(value: unknown): string {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "string") return value;
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (typeof value === "number") return String(value);
  return "";
}

/** Reads GHL_CONFIG and returns the part this journey needs. */
export function parseConfig(
  raw: string | undefined,
  formType: FormType,
): GhlConfig | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as {
      locationId?: unknown;
      pipelines?: Record<string, { pipelineId?: unknown; stageId?: unknown }>;
      customFields?: Record<string, unknown>;
    };
    const pipeline = parsed.pipelines?.[formType];
    if (
      typeof parsed.locationId !== "string" ||
      !parsed.locationId ||
      typeof pipeline?.pipelineId !== "string" ||
      !pipeline.pipelineId ||
      typeof pipeline.stageId !== "string" ||
      !pipeline.stageId
    ) {
      return null;
    }
    const customFields: Record<string, string> = {};
    for (const [key, id] of Object.entries(parsed.customFields ?? {})) {
      if (typeof id === "string" && id) customFields[key] = id;
    }
    return {
      locationId: parsed.locationId,
      pipeline: { pipelineId: pipeline.pipelineId, stageId: pipeline.stageId },
      customFields,
    };
  } catch {
    return null;
  }
}

interface Meta {
  readonly submissionId: string;
  readonly receivedAt: string;
}

export function buildContactBody(
  submission: ValidSubmission,
  config: GhlConfig,
  meta: Meta,
): Record<string, unknown> {
  const { fields, attribution, formType } = submission;
  const fullName = text(fields.name);
  const [firstName = "", ...rest] = fullName.split(/\s+/);

  // Everything a custom field can be mapped from.
  const values: Record<string, unknown> = {
    ...fields,
    ...attribution,
    submissionId: meta.submissionId,
    receivedAt: meta.receivedAt,
  };
  const customFields = Object.entries(config.customFields).flatMap(
    ([key, id]) => {
      const value = text(values[key]);
      return value ? [{ id, fieldValue: value }] : [];
    },
  );

  const body: Record<string, unknown> = {
    locationId: config.locationId,
    firstName,
    lastName: rest.join(" "),
    name: fullName,
    email: text(fields.email),
    phone: text(fields.phone),
    source: JOURNEYS[formType].source,
    customFields,
  };
  if (text(fields.company)) body.companyName = text(fields.company);
  return body;
}

export function buildTags(submission: ValidSubmission): string[] {
  const tags = [...JOURNEYS[submission.formType].tags];
  if (
    submission.formType === "job_application" &&
    typeof submission.fields.jobSlug === "string"
  ) {
    tags.push(`job-${submission.fields.jobSlug}`);
  }
  return tags;
}

export function buildOpportunityBody(
  submission: ValidSubmission,
  config: GhlConfig,
  contactId: string,
): Record<string, unknown> {
  const journey = JOURNEYS[submission.formType];
  return {
    locationId: config.locationId,
    pipelineId: config.pipeline.pipelineId,
    pipelineStageId: config.pipeline.stageId,
    contactId,
    name: journey.opportunityName(submission.fields).trim(),
    status: "open",
  };
}

type CallResult =
  | { readonly ok: true; readonly json: unknown }
  | {
      readonly ok: false;
      readonly reason: "rejected" | "unreachable";
      readonly status?: number;
    };

/**
 * One GHL call. One retry on a network error, a timeout, a 429, or a 5xx. No
 * retry on any other 4xx: GHL rejected the request, and repeating it would not
 * help.
 */
async function call(
  path: string,
  body: Record<string, unknown>,
  token: string,
  version: string,
  fetchImpl: typeof fetch,
): Promise<CallResult> {
  let lastStatus: number | undefined;
  for (let attempt = 0; attempt < 2; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), GHL_TIMEOUT_MS);
    try {
      const response = await fetchImpl(`${GHL_API_BASE}${path}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Version: version,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      if (response.ok) {
        let json: unknown = null;
        try {
          json = await response.json();
        } catch {
          // Some endpoints return an empty body. Callers that need data check for it.
        }
        return { ok: true, json };
      }
      lastStatus = response.status;
      if (response.status < 500 && response.status !== 429) {
        return { ok: false, reason: "rejected", status: response.status };
      }
    } catch {
      // Network error or timeout. Fall through to the retry.
    } finally {
      clearTimeout(timer);
    }
  }
  return { ok: false, reason: "unreachable", status: lastStatus };
}

function contactIdFrom(json: unknown): string | null {
  const contact = (json as { contact?: { id?: unknown } } | null)?.contact;
  return typeof contact?.id === "string" && contact.id ? contact.id : null;
}

export async function forwardToGhl(
  submission: ValidSubmission,
  env: Env,
  meta: Meta,
  fetchImpl: typeof fetch,
): Promise<ForwardResult> {
  const config = parseConfig(env.GHL_CONFIG, submission.formType);
  const token = env.GHL_API_TOKEN;
  if (!config || !token) return { ok: false, reason: "not_configured" };
  const version = env.GHL_API_VERSION || GHL_API_VERSION;

  const contact = await call(
    "/contacts/upsert",
    buildContactBody(submission, config, meta),
    token,
    version,
    fetchImpl,
  );
  if (!contact.ok) return { ...contact, step: "contact" };
  const contactId = contactIdFrom(contact.json);
  if (!contactId) return { ok: false, reason: "bad_response", step: "contact" };

  const tags = await call(
    `/contacts/${encodeURIComponent(contactId)}/tags`,
    { tags: buildTags(submission) },
    token,
    version,
    fetchImpl,
  );
  if (!tags.ok) return { ...tags, step: "tags" };

  const opportunity = await call(
    "/opportunities/",
    buildOpportunityBody(submission, config, contactId),
    token,
    version,
    fetchImpl,
  );
  if (!opportunity.ok) return { ...opportunity, step: "opportunity" };

  return { ok: true };
}
