import type { MetadataRoute } from "next";

import { activeJobs, JOBS_INDEX_PATH } from "@/data/jobs";
import { business } from "@/data/site/business";
import { resourceArticles } from "@/data/site/resources-content";

// Required for output: export. See next.config.ts.
export const dynamic = "force-static";

/**
 * Static sitemap generator. Includes only routes that exist at build time;
 * append new routes as future sprints land. Thank-you/confirmation routes
 * are noindexed and deliberately excluded here, including the application
 * confirmation page. `/careers/apply/` is noindexed (decision 0018) and also
 * excluded. Each active opening is included through the job records.
 *
 * `/case-studies/` and `/case-studies/*` are deliberately excluded: the
 * case-study registry is empty (see src/data/site/case-studies.ts), the hub
 * route calls `notFound()` while empty, and an empty/404 route must never
 * appear in the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services/",
    "/services/fleet-telematics-installation/",
    "/services/gps-tracking-installation/",
    "/services/eld-installation/",
    "/services/dashcam-camera-installation/",
    "/services/fleet-rollouts/",
    "/industries/",
    "/industries/commercial-fleets/",
    "/industries/construction-heavy-equipment/",
    "/industries/logistics-delivery-fleets/",
    "/industries/field-service-fleets/",
    "/industries/telematics-technology-providers/",
    "/coverage/",
    "/about/",
    "/our-process/",
    "/quality-safety/",
    "/faq/",
    "/resources/",
    ...resourceArticles.map((article) => `/resources/${article.slug}/`),
    "/contact/",
    "/careers/",
    JOBS_INDEX_PATH,
    ...activeJobs.map((job) => job.path),
    "/careers/mobile-installation-technician/",
    "/careers/installer-requirements/",
    "/privacy-policy/",
    "/terms/",
    "/accessibility/",
  ];

  // No `lastModified`: lastmod will be added only from real content-change
  // dates (docs/08 "lastmod", docs/10), never the build or deploy time.
  return routes.map((route) => ({
    url: `${business.url}${route}`,
  }));
}
