import type { Metadata } from "next";
import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
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
import { applyImages } from "@/data/site/careers-apply-images";
import { utilityBar } from "@/data/navigation/site-navigation";
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

      <Section tone="subtle" width="reading" labelledBy="application-form-heading">
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
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-[length:var(--text-body)] text-ink-muted">
            Prefer to talk it through? Call
          </p>
          <a
            href={utilityBar.phoneHref}
            className="inline-flex min-h-11 items-center font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {utilityBar.phoneLabel}
          </a>
        </div>
      </Section>

      <Section tone="default" density="compact" width="reading" labelledBy="apply-network-heading">
        <h2
          id="apply-network-heading"
          className="text-[length:var(--text-h4)] font-bold text-ink"
        >
          Looking for future opportunities?
        </h2>
        <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
          The Installer Network is a separate registration and is not an
          application for this opening.
        </p>
        <p className="mt-3">
          <Link
            href={INSTALLER_NETWORK_PATH}
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            Learn about the Installer Network
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
        <CorporateOffice className="mt-6" />
      </Section>
    </>
  );
}
