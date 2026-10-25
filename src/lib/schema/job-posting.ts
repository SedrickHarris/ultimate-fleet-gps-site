import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { APPLY_PATH } from "@/data/jobs/routes";
import { business } from "@/data/site/business";
import { breadcrumbList } from "@/lib/schema/breadcrumbs";
import { organizationNode, organizationRef } from "@/lib/schema/organization";
import type { JobRecord } from "@/types/jobs";

/**
 * Structured data for one individual active-opening page.
 *
 * This is the ONLY place `JobPosting` is emitted. It belongs on the job page
 * alone, never on the homepage, the careers landing page, the jobs index, the
 * Installer Network page, or the application page (CLAUDE.md section 5,
 * docs/13-schema-markup-plan.md section 14).
 *
 * The description is built from the same `JobRecord` sections the page
 * renders, so the schema always matches the visible content.
 *
 * Deliberately absent:
 * - `validThrough`: no closing date is published, and none is invented.
 * - `jobLocation`: the work is nationwide field work with no single location,
 *   and the Phoenix corporate office is not a work location. Nationwide
 *   applicants are expressed with `applicantLocationRequirements`. Google may
 *   report a missing `jobLocation` for this posting type. Whether to add one
 *   is an open decision (docs/01 section 33.9), not something to guess.
 * - `identifier`, `directApply`, and any salary guarantee. The starting rate
 *   is expressed as a minimum only, matching the visible "starting rate".
 *
 * The hiring organization is the shared `Organization` node (public name, no
 * "LLC", corporate office address), never `legalEntityName`.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Simple HTML description built from the visible job content. */
export function jobDescriptionHtml(job: JobRecord): string {
  const parts: string[] = [`<p>${escapeHtml(job.intro)}</p>`];

  const list = (items: readonly string[]) =>
    `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  const bold = (text: string) => `<p><strong>${escapeHtml(text)}</strong></p>`;

  const about = job.about;
  parts.push(`<h3>${escapeHtml(about.h2)}</h3>`, `<p>${escapeHtml(about.answer)}</p>`);
  parts.push(bold(about.detailsHeading));
  parts.push(list(about.details.map((row) => `${row.term}: ${row.definition}`)));
  parts.push(`<p>${escapeHtml(about.status)}</p>`);

  const req = job.requirements;
  parts.push(`<h3>${escapeHtml(req.h2)}</h3>`, `<p>${escapeHtml(req.answer)}</p>`);
  parts.push(bold(req.needHeading));
  parts.push(list(req.need.map((item) => `${item.lead}. ${item.detail}`)));
  parts.push(bold(req.notNeededHeading));
  parts.push(list(req.notNeeded.map((item) => `${item.lead}. ${item.detail}`)));
  parts.push(
    `<p>${escapeHtml(`${req.preferredItems.join(" ")} ${req.preferredClosing}`)}</p>`,
  );

  const work = job.work;
  parts.push(`<h3>${escapeHtml(work.h2)}</h3>`, `<p>${escapeHtml(work.answer)}</p>`);
  parts.push(`<p>${escapeHtml(work.vehicles)}</p>`);
  parts.push(list(work.equipment.map((item) => `${item.term}: ${item.definition}`)));
  parts.push(`<p>${escapeHtml(work.photo)}</p>`);

  parts.push(
    `<h3>${escapeHtml(job.rate.h2)}</h3>`,
    `<p>${escapeHtml(job.rate.answer)}</p>`,
  );

  parts.push(`<p>${escapeHtml(job.disclaimer)}</p>`);
  return parts.join("");
}

export function jobPostingPageSchema({
  job,
  breadcrumbs,
}: {
  readonly job: JobRecord;
  readonly breadcrumbs: readonly BreadcrumbItem[];
}) {
  const url = `${business.url}${job.path}`;
  const rate = business.recruitment.startingRate;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: job.title,
        description: job.metaDescription,
        about: organizationRef(),
      },
      breadcrumbList(breadcrumbs),
      {
        "@type": "JobPosting",
        "@id": `${url}#jobposting`,
        url,
        title: job.title,
        description: jobDescriptionHtml(job),
        datePosted: job.datePosted,
        employmentType: "CONTRACTOR",
        hiringOrganization: organizationNode(),
        baseSalary: {
          "@type": "MonetaryAmount",
          currency: rate.currency,
          value: {
            "@type": "QuantitativeValue",
            minValue: rate.amount,
            unitText: rate.unit,
          },
        },
        responsibilities: job.work.responsibilities,
        experienceRequirements: job.requirements.experienceRequirements,
        qualifications: job.requirements.qualifications,
        applicantLocationRequirements: {
          "@type": "Country",
          name: business.address.addressCountry,
        },
        applicationContact: {
          "@type": "ContactPoint",
          url: `${business.url}${APPLY_PATH}`,
        },
        mainEntityOfPage: { "@id": `${url}#webpage` },
      },
    ],
  };
}
