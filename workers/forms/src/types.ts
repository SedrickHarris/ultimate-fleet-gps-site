/**
 * Worker environment. Everything secret is a Cloudflare secret, never a
 * wrangler.toml var and never committed. See workers/forms/README.md.
 */
export interface Env {
  /** Comma-separated origins allowed to submit. `*` is allowed as a subdomain wildcard. */
  readonly ALLOWED_ORIGINS: string;
  /** Comma-separated slugs of job openings that currently accept applications. */
  readonly ACTIVE_JOB_SLUGS: string;

  /** Secret. GHL Private Integration token. */
  readonly GHL_API_TOKEN?: string;
  /**
   * Secret. JSON with the GHL location ID, the pipeline and stage per form,
   * and the custom field ID per payload key. See ghl-config.example.json.
   */
  readonly GHL_CONFIG?: string;

  /** Secret. When set, every submission must carry a valid Turnstile token. */
  readonly TURNSTILE_SECRET_KEY?: string;
}

export type FormType =
  | "commercial_inquiry"
  | "installer_network"
  | "job_application";

/** Attribution fields the site attaches to every submission. */
export interface Attribution {
  readonly sourcePage: string;
  readonly sourceTitle: string;
  readonly referrer: string;
  readonly utmSource: string;
  readonly utmMedium: string;
  readonly utmCampaign: string;
  readonly utmContent: string;
  readonly utmTerm: string;
  readonly clientSubmittedAt: string;
}

export interface ValidSubmission {
  readonly formType: FormType;
  readonly fields: Readonly<Record<string, string | number | boolean | string[]>>;
  readonly attribution: Attribution;
  readonly turnstileToken: string;
}

export type ValidationResult =
  | { readonly ok: true; readonly value: ValidSubmission }
  | { readonly ok: false; readonly invalidFields: readonly string[] };
