import type { Metadata } from "next";
import Link from "next/link";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { ImageSlot } from "@/components/ui/ImageSlot";
import {
  activeTechnicianJob as job,
  APPLY_PATH,
  INSTALLER_NETWORK_PATH,
  JOBS_INDEX_PATH,
} from "@/data/jobs";
import { applyFinalCtaBackground, applyImages } from "@/data/site/careers-apply-images";
import { footerBrandLines } from "@/data/navigation/site-navigation";
import { business } from "@/data/site/business";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { careersPageSchema } from "@/lib/schema/careers-page";

const H1 = "Apply for the Current Opening";
const DESCRIPTION =
  "Apply for the current Mobile GPS, ELD, and AOBRD installation technician opening at Ultimate Fleet GPS. Applicants are accepted nationwide.";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers/" },
  { label: "Current Openings", href: JOBS_INDEX_PATH },
  { label: "Apply" },
];

const PHONE_HREF = `tel:+1${business.telephone.replace(/\D/g, "")}`;
const PHONE_LABEL = `Call ${business.telephone}`;
const HOURS = footerBrandLines.find((line) => line.startsWith("Monday")) ?? "";
const TRACK_PARAMS = {
  page_path: APPLY_PATH,
  cta_location: "apply_final_cta",
} as const;

export const metadata: Metadata = buildPageMetadata({
  title: H1,
  description: DESCRIPTION,
  pathname: APPLY_PATH,
  // Form step that overlaps /careers/jobs/. Crawlable so the noindex is seen;
  // not in the sitemap or robots disallow. Decision 0018.
  noIndex: true,
  followLinks: true,
});

/**
 * Application page for the active opening. It hosts the dedicated
 * `ApplicationForm`, which is separate from the commercial inquiry form and
 * the Installer Network form. Schema is WebPage + BreadcrumbList only: the
 * application page never carries `JobPosting`, which belongs on the opening
 * page alone (13-schema-markup-plan.md section 14).
 */
export default function ApplyPage() {
  return (
    <>
      <JsonLd
        schema={careersPageSchema({
          pathname: APPLY_PATH,
          h1: H1,
          description: DESCRIPTION,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <Section tone="default" density="spacious" width="site" labelledBy="apply-heading">
        {/* Single column below lg: intro, image, opening details. From lg the
            image takes the right column across both rows, top-aligned with the
            H1. Static, not sticky: section media scrolls with content
            (CLAUDE.md section 8). */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:gap-x-14">
          <div className="lg:col-start-1 lg:row-start-1">
            <h1
              id="apply-heading"
              className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink"
            >
              {H1}
            </h1>
            <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
              {DESCRIPTION}
            </p>
          </div>
          <ImageSlot
            slot={applyImages.opening}
            priority
            className="mt-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-start"
          />
          <div className="lg:col-start-1 lg:row-start-2">
            <h2 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
              {job.title}
            </h2>
            <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-[length:var(--text-body)] text-ink-muted">
              {job.summaryFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <p className="mt-4">
              <Link
                href={job.path}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
              >
                Read the full opening
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section tone="subtle" density="compact" width="reading" labelledBy="application-form-heading">
        <h2
          id="application-form-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          Application
        </h2>
        <p className="mt-3 text-[length:var(--text-small)] text-ink-muted">
          Fields marked * are required. Optional fields are marked optional.
        </p>
        <div className="mt-6">
          <ApplicationForm />
        </div>
        {/* Reassurance, Submit button (inside the form), and this phone block
            are one compact action group. The submit event is the form's own
            `application_submit`, not a click event. */}
        <div className="mt-5">
          <p className="text-[length:var(--text-small)] text-ink-muted">
            Prefer to talk it through?
          </p>
          <TrackedLink
            href={PHONE_HREF}
            event={AnalyticsEvent.applyPhoneClick}
            params={TRACK_PARAMS}
            journey="recruitment"
            className="inline-flex min-h-11 items-center text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {PHONE_LABEL}
          </TrackedLink>
          <p className="text-[length:var(--text-small)] text-ink-muted">
            {HOURS}
          </p>
        </div>
      </Section>

      <Section
        tone="default"
        density="compact"
        width="reading"
        labelledBy="apply-network-heading"
        backgroundImage={applyFinalCtaBackground}
        backgroundOverlay
        backgroundPosition="bottom"
        tallMedia
      >
        <div
          data-tone="dark"
          className="rounded-[var(--radius-lg)] border border-[var(--color-border-dark)] bg-[var(--color-surface-dark)] p-6 text-[var(--color-text-on-dark)] md:p-8"
        >
          <h2
            id="apply-network-heading"
            className="text-[length:var(--text-h4)] font-bold text-[var(--color-text-on-dark)]"
          >
            Looking for future opportunities?
          </h2>
          <p className="mt-2 text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
            The Installer Network is a separate registration and is not an
            application for this opening.
          </p>
          <TrackedLink
            href={INSTALLER_NETWORK_PATH}
            event={AnalyticsEvent.applyInstallerNetworkClick}
            params={TRACK_PARAMS}
            journey="recruitment"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white bg-transparent px-6 py-3 text-center text-base font-semibold text-white no-underline transition-[background-color] duration-[var(--duration-fast)] hover:bg-white/10 sm:w-auto"
          >
            Learn about the Installer Network
            <span aria-hidden="true">&rarr;</span>
          </TrackedLink>
        </div>
      </Section>
    </>
  );
}
