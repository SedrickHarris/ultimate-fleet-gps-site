"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import { PLATFORM_OPTIONS } from "@/components/forms/platform-options";
import { activeTechnicianJob, APPLICATION_RECEIVED_PATH } from "@/data/jobs";
import { business } from "@/data/site/business";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { trackEvent } from "@/lib/analytics/track";
import { markApplicationConfirmed } from "@/lib/forms/application-session";
import { buildAttribution } from "@/lib/forms/attribution";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";

const job = activeTechnicianJob;
const travelPercent = business.recruitment.travel.approximatePercent;
const startingRate = business.recruitment.startingRate.display;

type YesNo = "yes" | "no" | "";

interface Fields {
  name: string;
  email: string;
  phone: string;
  travelAvailability: string;
  skillsExperience: string;
  toolsOwned: string;
  platforms: string[];
  validLicense: YesNo;
  personalVehicle: YesNo;
  providesOwnTools: YesNo;
  smartphone: YesNo;
  backgroundCheck: YesNo;
  travelAcknowledged: YesNo;
  stateToStateAcknowledged: YesNo;
  trainingAcknowledged: YesNo;
  contractorAcknowledged: YesNo;
  privacyConsent: boolean;
  website: string;
}

type RequiredKey =
  | "name"
  | "email"
  | "phone"
  | "travelAvailability"
  | "validLicense"
  | "personalVehicle"
  | "providesOwnTools"
  | "smartphone"
  | "backgroundCheck"
  | "travelAcknowledged"
  | "stateToStateAcknowledged"
  | "trainingAcknowledged"
  | "contractorAcknowledged"
  | "privacyConsent";

type Errors = Partial<Record<RequiredKey, string>>;

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  travelAvailability: "",
  skillsExperience: "",
  toolsOwned: "",
  platforms: [],
  validLicense: "",
  personalVehicle: "",
  providesOwnTools: "",
  smartphone: "",
  backgroundCheck: "",
  travelAcknowledged: "",
  stateToStateAcknowledged: "",
  trainingAcknowledged: "",
  contractorAcknowledged: "",
  privacyConsent: false,
  website: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (fields.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a phone number with at least 10 digits.";
  }
  if (!fields.travelAvailability.trim()) {
    errors.travelAvailability = "Describe your travel availability.";
  }
  if (!fields.validLicense) {
    errors.validLicense = "Answer Yes or No: do you have a valid driver's license?";
  }
  if (!fields.personalVehicle) {
    errors.personalVehicle = "Answer Yes or No: do you have a personal vehicle?";
  }
  if (!fields.providesOwnTools) {
    errors.providesOwnTools =
      "Answer Yes or No: will you provide your own tools and travel resources?";
  }
  if (!fields.smartphone) {
    errors.smartphone = "Answer Yes or No: do you have a smartphone?";
  }
  if (!fields.backgroundCheck) {
    errors.backgroundCheck =
      "Answer Yes or No: do you consent to a background check?";
  }
  if (!fields.travelAcknowledged) {
    errors.travelAcknowledged = `Answer Yes or No: do you understand that approximately ${travelPercent}% travel is required?`;
  }
  if (!fields.stateToStateAcknowledged) {
    errors.stateToStateAcknowledged =
      "Answer Yes or No: do you understand that state-to-state travel is required?";
  }
  if (!fields.trainingAcknowledged) {
    errors.trainingAcknowledged =
      "Answer Yes or No: do you understand that training is provided?";
  }
  if (!fields.contractorAcknowledged) {
    errors.contractorAcknowledged =
      "Answer Yes or No: do you understand that this is independent contractor work?";
  }
  if (!fields.privacyConsent) {
    errors.privacyConsent =
      "Consent to the use of your information to consider your application.";
  }
  return errors;
}

/**
 * Job application form for the active technician opening.
 *
 * A dedicated form for the application journey. It is never rendered with,
 * and never shares a handler, route, payload type, or confirmation with the
 * commercial inquiry form or the Installer Network form (CLAUDE.md section 4).
 *
 * It collects contact details, Yes or No answers, travel availability,
 * acknowledgments, optional skills, platform and tool details, and consent. A
 * "No" is submitted and reviewed by a person; nothing here rejects or scores
 * an applicant (decisions 0022 and 0023). Only the privacy consent stays a
 * required checkbox. It
 * never asks for a driver's license number, a Social Security number, a date
 * of birth, or any government identifier. The background check is a
 * confirmation and consent only. Wording of the consent and privacy text needs
 * legal review before launch (docs/01 section 33.9).
 *
 * It claims no employment, guaranteed assignment, guaranteed hours, or
 * guaranteed income. Submission goes through the shared trusted endpoint hook,
 * which shows an accessible error and a click-to-call fallback if the endpoint
 * is absent or the request fails, and redirects only after a confirmed
 * success.
 *
 * Analytics events carry the job slug and counts only, never a field value.
 */
export function ApplicationForm() {
  const formId = useId();
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [attempt, setAttempt] = useState(0);
  const started = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const { status, errorMessage, endpointConfigured, submit } =
    useFormSubmission({
      thankYouRoute: APPLICATION_RECEIVED_PATH,
      onConfirmed: markApplicationConfirmed,
    });

  const errorKeys = Object.keys(errors) as RequiredKey[];

  useEffect(() => {
    if (attempt > 0 && errorKeys.length > 0) {
      summaryRef.current?.focus();
    }
    // Move focus to the summary only after a failed submit attempt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (key in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as RequiredKey];
        return next;
      });
    }
  }

  function togglePlatform(platform: string) {
    setFields((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  }

  function handleFirstInteraction() {
    if (started.current) return;
    started.current = true;
    trackEvent(AnalyticsEvent.applicationStart, { jobSlug: job.slug });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (fields.website) {
      return;
    }

    const found = validate(fields);
    setErrors(found);

    const count = Object.keys(found).length;
    if (count > 0) {
      setAttempt((n) => n + 1);
      trackEvent(AnalyticsEvent.applicationError, {
        jobSlug: job.slug,
        errorCount: count,
      });
      return;
    }

    trackEvent(AnalyticsEvent.applicationSubmit, { jobSlug: job.slug });

    const ok = await submit({
      ...buildAttribution("job_application"),
      jobSlug: job.slug,
      jobTitle: job.title,
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      travelAvailability: fields.travelAvailability.trim(),
      skillsExperience: fields.skillsExperience.trim(),
      platforms: fields.platforms,
      toolsOwned: fields.toolsOwned.trim(),
      validDriversLicense: fields.validLicense === "yes",
      personalVehicle: fields.personalVehicle === "yes",
      providesOwnToolsAndTravel: fields.providesOwnTools === "yes",
      smartphone: fields.smartphone === "yes",
      backgroundCheckConsent: fields.backgroundCheck === "yes",
      travelPercentAcknowledged: fields.travelAcknowledged === "yes",
      travelPercent,
      stateToStateTravelAcknowledged: fields.stateToStateAcknowledged === "yes",
      trainingAcknowledged: fields.trainingAcknowledged === "yes",
      independentContractorAcknowledged: fields.contractorAcknowledged === "yes",
      privacyConsent: fields.privacyConsent,
    });

    if (!ok) {
      trackEvent(AnalyticsEvent.applicationFailure, {
        jobSlug: job.slug,
        reason: endpointConfigured ? "request_failed" : "endpoint_not_configured",
      });
    }
  }

  const submitting = status === "submitting";
  const fieldId = (key: string) => `${formId}-${key}`;
  const errorId = (key: string) => `${formId}-${key}-error`;
  const describe = (key: RequiredKey) =>
    errors[key] ? errorId(key) : undefined;

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={handleFirstInteraction}
      data-journey="recruitment"
      data-event={AnalyticsEvent.applicationSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      <div aria-hidden="true" className="sr-only">
        <label htmlFor={fieldId("website")}>Leave this field blank</label>
        <input
          id={fieldId("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {errorKeys.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-md border border-error bg-surface-subtle p-4 text-[length:var(--text-small)] text-ink"
        >
          <h2 className="font-semibold text-error">
            Please fix {errorKeys.length === 1 ? "this item" : "these items"}{" "}
            before submitting
          </h2>
          <ul className="mt-2 list-disc pl-5">
            {errorKeys.map((key) => (
              <li key={key}>
                <a href={`#${fieldId(key)}`} className="underline">
                  {errors[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <fieldset className="flex flex-col gap-5">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Your contact information
        </legend>

        <Field label="Full name" id={fieldId("name")} error={errors.name} errorId={errorId("name")} required>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describe("name")}
            className={inputClass}
          />
        </Field>

        <Field label="Email" id={fieldId("email")} error={errors.email} errorId={errorId("email")} required>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describe("email")}
            className={inputClass}
          />
        </Field>

        <Field label="Phone" id={fieldId("phone")} error={errors.phone} errorId={errorId("phone")} required>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describe("phone")}
            className={inputClass}
          />
        </Field>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Requirements
        </legend>
        <p className="text-[length:var(--text-small)] text-ink-muted">
          Do not enter a license number or any other identification number in
          this form.
        </p>
        <YesNoQuestion
          id={fieldId("validLicense")}
          errorId={errorId("validLicense")}
          error={errors.validLicense}
          value={fields.validLicense}
          onChange={(v) => update("validLicense", v)}
        >
          Do you have a valid driver&apos;s license?
        </YesNoQuestion>
        <YesNoQuestion
          id={fieldId("personalVehicle")}
          errorId={errorId("personalVehicle")}
          error={errors.personalVehicle}
          value={fields.personalVehicle}
          onChange={(v) => update("personalVehicle", v)}
        >
          Do you have a personal vehicle?
        </YesNoQuestion>
        <YesNoQuestion
          id={fieldId("providesOwnTools")}
          errorId={errorId("providesOwnTools")}
          error={errors.providesOwnTools}
          value={fields.providesOwnTools}
          onChange={(v) => update("providesOwnTools", v)}
        >
          Will you provide your own tools and travel resources?
        </YesNoQuestion>
        <YesNoQuestion
          id={fieldId("smartphone")}
          errorId={errorId("smartphone")}
          error={errors.smartphone}
          value={fields.smartphone}
          onChange={(v) => update("smartphone", v)}
        >
          Do you have a smartphone for submitting installation data and
          installation photos?
        </YesNoQuestion>
        <YesNoQuestion
          id={fieldId("backgroundCheck")}
          errorId={errorId("backgroundCheck")}
          error={errors.backgroundCheck}
          value={fields.backgroundCheck}
          onChange={(v) => update("backgroundCheck", v)}
        >
          A background check is required. Do you consent to a background check
          as part of the application process?
        </YesNoQuestion>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Travel
        </legend>
        <Field
          label="Travel availability"
          id={fieldId("travelAvailability")}
          error={errors.travelAvailability}
          errorId={errorId("travelAvailability")}
          required
        >
          <textarea
            id={fieldId("travelAvailability")}
            name="travelAvailability"
            rows={3}
            value={fields.travelAvailability}
            onChange={(e) => update("travelAvailability", e.target.value)}
            aria-invalid={Boolean(errors.travelAvailability)}
            aria-describedby={describe("travelAvailability")}
            className={inputClass}
          />
        </Field>
        <YesNoQuestion
          id={fieldId("travelAcknowledged")}
          errorId={errorId("travelAcknowledged")}
          error={errors.travelAcknowledged}
          value={fields.travelAcknowledged}
          onChange={(v) => update("travelAcknowledged", v)}
        >
          Do you understand that approximately {travelPercent}% travel is
          required?
        </YesNoQuestion>
        <YesNoQuestion
          id={fieldId("stateToStateAcknowledged")}
          errorId={errorId("stateToStateAcknowledged")}
          error={errors.stateToStateAcknowledged}
          value={fields.stateToStateAcknowledged}
          onChange={(v) => update("stateToStateAcknowledged", v)}
        >
          Do you understand that state-to-state travel is required?
        </YesNoQuestion>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Skills and experience (optional)
        </legend>
        <p className="text-[length:var(--text-small)] text-ink-muted">
          No prior installation experience is required. Share anything you
          think is relevant.
        </p>
        <Field label="Relevant skills and experience" id={fieldId("skillsExperience")}>
          <textarea
            id={fieldId("skillsExperience")}
            name="skillsExperience"
            rows={4}
            value={fields.skillsExperience}
            onChange={(e) => update("skillsExperience", e.target.value)}
            className={inputClass}
          />
        </Field>

        <fieldset className="flex flex-col gap-2">
          <legend className="text-[length:var(--text-small)] font-semibold text-ink">
            Platform experience with (optional)
          </legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {PLATFORM_OPTIONS.map((platform) => (
              <label
                key={platform}
                className="flex min-h-11 items-center gap-2 text-[length:var(--text-small)] text-ink-muted"
              >
                <input
                  type="checkbox"
                  checked={fields.platforms.includes(platform)}
                  onChange={() => togglePlatform(platform)}
                  className="size-5 shrink-0"
                />
                {platform}
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="Tools you currently own" id={fieldId("toolsOwned")}>
          <textarea
            id={fieldId("toolsOwned")}
            name="toolsOwned"
            rows={3}
            value={fields.toolsOwned}
            onChange={(e) => update("toolsOwned", e.target.value)}
            className={inputClass}
          />
        </Field>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Acknowledgments and consent
        </legend>
        <YesNoQuestion
          id={fieldId("trainingAcknowledged")}
          errorId={errorId("trainingAcknowledged")}
          error={errors.trainingAcknowledged}
          value={fields.trainingAcknowledged}
          onChange={(v) => update("trainingAcknowledged", v)}
        >
          Do you understand that training is provided and that no prior
          installation experience is required?
        </YesNoQuestion>
        <YesNoQuestion
          id={fieldId("contractorAcknowledged")}
          errorId={errorId("contractorAcknowledged")}
          error={errors.contractorAcknowledged}
          value={fields.contractorAcknowledged}
          onChange={(v) => update("contractorAcknowledged", v)}
        >
          Do you understand that this is independent contractor work, not
          employee employment, and that the starting rate of {startingRate} is
          not guaranteed income?
        </YesNoQuestion>
        <Check
          id={fieldId("privacyConsent")}
          errorId={errorId("privacyConsent")}
          error={errors.privacyConsent}
          checked={fields.privacyConsent}
          onChange={(v) => update("privacyConsent", v)}
        >
          I consent to Ultimate Fleet GPS using the information in this
          form to consider my application. See the{" "}
          <Link href="/privacy-policy/" className="font-semibold underline">
            Privacy Policy
          </Link>
          .
        </Check>
      </fieldset>

      <p className="rounded-md border border-border bg-surface-subtle p-4 text-[length:var(--text-small)] leading-relaxed text-ink">
        {job.disclaimer}
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--color-accent-blue-strong)] px-6 py-3 text-base font-semibold text-white transition-[filter] duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Submit Application"}
      </button>

      <div role="status" aria-live="polite" className="text-[length:var(--text-small)]">
        {status === "error" && errorMessage ? (
          <p className="rounded-md border border-error bg-surface-subtle p-4 text-error">
            {errorMessage}{" "}
            <a
              href={`tel:${business.telephone.replace(/[^0-9+]/g, "")}`}
              className="font-semibold underline"
            >
              Call {business.telephone}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}

const inputClass =
  "min-h-11 w-full rounded-md border border-border bg-surface px-3 py-2 text-ink aria-[invalid=true]:border-error";

function Field({
  label,
  id,
  error,
  errorId,
  required = false,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  errorId?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[length:var(--text-small)] font-semibold text-ink">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {error && errorId ? (
        <p id={errorId} className="text-[length:var(--text-small)] text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * A required Yes or No question. Either answer can be submitted (decision
 * 0022). The first radio carries the field id so the error summary link lands
 * on a focusable control.
 */
function YesNoQuestion({
  id,
  errorId,
  error,
  value,
  onChange,
  children,
}: {
  id: string;
  errorId: string;
  error?: string;
  value: YesNo;
  onChange: (value: "yes" | "no") => void;
  children: ReactNode;
}) {
  return (
    <fieldset
      className="flex flex-col gap-1"
      aria-describedby={error ? errorId : undefined}
    >
      <legend className="text-[length:var(--text-small)] text-ink-muted">
        {children}
      </legend>
      <div className="mt-1 flex gap-6">
        {(["yes", "no"] as const).map((option) => (
          <label
            key={option}
            className="flex min-h-11 items-center gap-2 text-[length:var(--text-small)] text-ink"
          >
            <input
              id={option === "yes" ? id : `${id}-no`}
              type="radio"
              name={id}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="size-5 shrink-0"
            />
            {option === "yes" ? "Yes" : "No"}
          </label>
        ))}
      </div>
      {error ? (
        <p id={errorId} className="text-[length:var(--text-small)] text-error">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

function Check({
  id,
  errorId,
  error,
  checked,
  onChange,
  children,
}: {
  id: string;
  errorId: string;
  error?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="flex items-start gap-3 text-[length:var(--text-small)] text-ink-muted">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="mt-1 size-5 shrink-0"
        />
        <span>{children}</span>
      </label>
      {error ? (
        <p id={errorId} className="ml-8 text-[length:var(--text-small)] text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
