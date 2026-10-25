import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { business } from "@/data/site/business";
import { breadcrumbList } from "@/lib/schema/breadcrumbs";
import { richFaqPageNode } from "@/lib/schema/faq-page";
import type { RichFaqItem } from "@/types/content";
import { organizationRef } from "@/lib/schema/organization";

/**
 * Structured data for the careers pages that are not an individual opening:
 * `/careers/`, `/careers/jobs/`, the Installer Network page, and
 * `/careers/apply/`.
 *
 * Organization reference, WebPage (or CollectionPage for the jobs index), and
 * BreadcrumbList, plus a FAQPage only where a page passes `faq` (the installer
 * requirements page).
 *
 * JobPosting is deliberately absent and is never added here. These pages are
 * not individual opening pages, so they never carry generic JobPosting even
 * though a current opening exists. JobPosting belongs only on the individual
 * opening page, in `job-posting.ts`. See CLAUDE.md section 5 and
 * 13-schema-markup-plan.md sections 14 and 58a.
 */
export function careersPageSchema({
  pathname,
  h1,
  description,
  breadcrumbs,
  type = "WebPage",
  faq,
}: {
  readonly type?: "WebPage" | "CollectionPage";
  readonly pathname: string;
  readonly h1: string;
  readonly description: string;
  readonly breadcrumbs: readonly BreadcrumbItem[];
  /** Adds a FAQPage built from the same items the page renders. */
  readonly faq?: readonly RichFaqItem[];
}) {
  const url = `${business.url}${pathname}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name: h1,
        description,
        about: organizationRef(),
      },
      breadcrumbList(breadcrumbs),
      ...(faq ? [richFaqPageNode(url, faq)] : []),
    ],
  };
}
