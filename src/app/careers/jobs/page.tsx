import type { Metadata } from "next";
import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { activeJobs, applyCta, INSTALLER_NETWORK_PATH, JOBS_INDEX_PATH } from "@/data/jobs";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { careersPageSchema } from "@/lib/schema/careers-page";

const H1 = "Current Installer Openings";
// Meta title and description: Oct 26 2026 metadata audit approval.
const META_TITLE = "GPS & ELD Installer Jobs";
const DESCRIPTION =
  "See current openings for mobile GPS and ELD installers. Independent contractor work, training provided. Read the details and apply.";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers/" },
  { label: "Current Openings" },
];

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLE,
  description: DESCRIPTION,
  pathname: JOBS_INDEX_PATH,
});

/**
 * Current openings index. It lists every active opening from the job records
 * (src/data/jobs). It is a `CollectionPage`, so it never carries `JobPosting`;
 * that belongs only on each opening's own page (13-schema-markup-plan.md
 * section 14). The Installer Network is mentioned only as a separate path.
 */
export default function CurrentOpeningsPage() {
  return (
    <>
      <JsonLd
        schema={careersPageSchema({
          type: "CollectionPage",
          pathname: JOBS_INDEX_PATH,
          h1: H1,
          description: DESCRIPTION,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <Section tone="default" density="spacious" width="reading" labelledBy="jobs-heading">
        <h1
          id="jobs-heading"
          className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink"
        >
          {H1}
        </h1>
        <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {DESCRIPTION}
        </p>
      </Section>

      <Section tone="subtle" width="reading" labelledBy="jobs-list-heading">
        <h2 id="jobs-list-heading" className="sr-only">
          Openings
        </h2>
        <ul className="flex list-none flex-col gap-6 p-0">
          {activeJobs.map((job) => (
            <li key={job.slug}>
              <Card as="div" padding="compact" className="flex flex-col">
                <h3 className="text-[length:var(--text-h3)] font-bold text-ink">
                  {job.title}
                </h3>
                <ul className="mt-4 flex list-disc flex-col gap-1 pl-5 text-[length:var(--text-body)] text-ink-muted">
                  {job.summaryFacts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <CtaButton cta={applyCta} emphasis="primary" blockOnMobile />
                  <Link
                    href={job.path}
                    className="inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
                  >
                    View the full opening
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
                <p className="mt-4 text-[length:var(--text-small)] text-ink-muted">
                  {job.disclaimer}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="default" density="compact" width="reading" labelledBy="jobs-network-heading">
        <h2
          id="jobs-network-heading"
          className="text-[length:var(--text-h4)] font-bold text-ink"
        >
          Looking for future opportunities?
        </h2>
        <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
          The Installer Network is a separate registration for future
          opportunities. It is not an application for a current opening.
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
