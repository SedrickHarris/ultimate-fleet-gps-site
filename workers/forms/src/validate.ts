import type {
  Attribution,
  FormType,
  ValidationResult,
  ValidSubmission,
} from "./types.ts";

/**
 * Server-side validation. The browser forms validate for the visitor's
 * benefit, but browser input is untrusted (docs/16 section 20), so every
 * required field, length, type, and consent is checked again here.
 *
 * Errors name fields only. They never echo a submitted value.
 */

const SHORT = 200;
const LONG = 4000;

type Fields = Record<string, string | number | boolean | string[]>;

class Collector {
  readonly fields: Fields = {};
  readonly invalid: string[] = [];
  private readonly input: Record<string, unknown>;

  constructor(input: Record<string, unknown>) {
    this.input = input;
  }

  text(key: string, opts: { required: boolean; max?: number }) {
    const raw = this.input[key];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (raw !== undefined && typeof raw !== "string") return this.fail(key);
    if (opts.required && !value) return this.fail(key);
    if (value.length > (opts.max ?? SHORT)) return this.fail(key);
    this.fields[key] = value;
  }

  email(key: string) {
    this.text(key, { required: true });
    const value = this.fields[key];
    if (typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      this.fail(key);
    }
  }

  phone(key: string) {
    this.text(key, { required: true });
    const value = this.fields[key];
    if (typeof value === "string" && value.replace(/\D/g, "").length < 10) {
      this.fail(key);
    }
  }

  /** A checkbox the visitor must have ticked. */
  mustBeTrue(key: string) {
    if (this.input[key] !== true) this.fail(key);
    else this.fields[key] = true;
  }

  /**
   * A Yes or No question. The visitor must answer, and either answer is
   * accepted. Anything other than a real boolean, including a missing value,
   * is rejected, so a "No" is a recorded answer and never a skipped question.
   */
  yesNo(key: string) {
    const raw = this.input[key];
    if (typeof raw !== "boolean") this.fail(key);
    else this.fields[key] = raw;
  }

  stringList(key: string) {
    const raw = this.input[key];
    if (raw === undefined) {
      this.fields[key] = [];
      return;
    }
    if (
      !Array.isArray(raw) ||
      raw.length > 30 ||
      raw.some((item) => typeof item !== "string" || item.length > 80)
    ) {
      return this.fail(key);
    }
    this.fields[key] = raw.map((item: string) => item.trim()).filter(Boolean);
  }

  private fail(key: string) {
    if (!this.invalid.includes(key)) this.invalid.push(key);
  }
}

function readAttribution(input: Record<string, unknown>): Attribution {
  const s = (key: string, max = 500) => {
    const value = input[key];
    return typeof value === "string" ? value.slice(0, max) : "";
  };
  return {
    sourcePage: s("sourcePage"),
    sourceTitle: s("sourceTitle"),
    referrer: s("referrer"),
    utmSource: s("utmSource", SHORT),
    utmMedium: s("utmMedium", SHORT),
    utmCampaign: s("utmCampaign", SHORT),
    utmContent: s("utmContent", SHORT),
    utmTerm: s("utmTerm", SHORT),
    clientSubmittedAt: s("submittedAt", 40),
  };
}

export function validateSubmission(
  input: unknown,
  opts: { activeJobSlugs: readonly string[] },
): ValidationResult {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { ok: false, invalidFields: ["body"] };
  }
  const body = input as Record<string, unknown>;
  const formType = body.formType;

  if (
    formType !== "commercial_inquiry" &&
    formType !== "installer_network" &&
    formType !== "job_application"
  ) {
    return { ok: false, invalidFields: ["formType"] };
  }

  const c = new Collector(body);

  switch (formType) {
    case "commercial_inquiry":
      c.text("name", { required: true });
      c.email("email");
      c.phone("phone");
      c.text("company", { required: true });
      c.text("serviceNeed", { required: true });
      c.text("vehicleCount", { required: false });
      c.text("projectLocations", { required: true });
      c.text("timeline", { required: false });
      c.text("description", { required: false, max: LONG });
      c.mustBeTrue("consent");
      break;

    case "installer_network":
      c.text("name", { required: true });
      c.email("email");
      c.phone("phone");
      c.text("homeMarket", { required: true });
      c.text("experienceSummary", { required: true, max: LONG });
      c.stringList("platforms");
      c.text("toolsOwned", { required: false, max: LONG });
      c.text("travelAvailability", { required: true });
      c.mustBeTrue("consent");
      c.mustBeTrue("noGuaranteeAcknowledged");
      break;

    case "job_application": {
      c.text("name", { required: true });
      c.email("email");
      c.phone("phone");
      c.text("jobSlug", { required: true });
      c.text("jobTitle", { required: true });
      c.text("travelAvailability", { required: true, max: LONG });
      c.text("skillsExperience", { required: false, max: LONG });
      c.text("toolsOwned", { required: false, max: LONG });
      c.stringList("platforms");
      // Yes or No questions (decisions 0022 and 0023). A "No" is accepted and reaches the
      // recruiter, who reviews it. Nothing here rejects or scores an applicant.
      for (const key of [
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
      ]) {
        c.yesNo(key);
      }
      // This one stays required. Without it there is no consent to use the
      // information to consider the application.
      c.mustBeTrue("privacyConsent");
      const travelPercent = body.travelPercent;
      if (typeof travelPercent === "number" && Number.isFinite(travelPercent)) {
        c.fields.travelPercent = travelPercent;
      }
      // A closed or unknown opening must never create an application.
      const slug = c.fields.jobSlug;
      if (typeof slug === "string" && !opts.activeJobSlugs.includes(slug)) {
        c.invalid.push("jobSlug");
      }
      break;
    }
  }

  if (c.invalid.length > 0) return { ok: false, invalidFields: c.invalid };

  const value: ValidSubmission = {
    formType: formType as FormType,
    fields: c.fields,
    attribution: readAttribution(body),
    turnstileToken:
      typeof body.turnstileToken === "string" ? body.turnstileToken : "",
  };
  return { ok: true, value };
}
