import type { Metadata } from "next";
import { TrackOnMount } from "@/components/analytics/TrackOnMount";
import { JobAboutSection } from "@/components/content/JobAbout";
import { JobClosingSection } from "@/components/content/JobClosing";
import { JobFaqSection } from "@/components/content/JobFaq";
import { JobApplySection } from "@/components/content/JobApply";
import { JobRateSection } from "@/components/content/JobRate";
import { JobRequirementsSection } from "@/components/content/JobRequirements";
import { JobWorkSection } from "@/components/content/JobWork";
import { ServicesHero } from "@/components/content/ServicesHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import {
  activeTechnicianJob as job,
  applyCta,
  JOBS_INDEX_PATH,
} from "@/data/jobs";
import { utilityBar } from "@/data/navigation/site-navigation";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { jobFaqPageSchema } from "@/lib/schema/job-faq";
import { jobPostingPageSchema } from "@/lib/schema/job-posting";

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers/" },
  { label: "Current Openings", href: JOBS_INDEX_PATH },
  { label: job.title },
];

export const metadata: Metadata = buildPageMetadata({
  title: job.metaTitle,
  description: job.metaDescription,
  pathname: job.path,
});

/**
 * The active opening page and the ONLY page that carries `JobPosting` schema.
 * Content comes from the job record (src/data/jobs), and the schema description
 * is built from that same record, so the two always match. No `validThrough`,
 * because no closing date is published.
 *
 * "Apply" points to the dedicated application page. The Installer Network is a
 * separate registration for future opportunities and is linked only as a
 * distinct option. The corporate office address is shown as a corporate
 * office, not a work location or walk-in facility.
 */
export default function ActiveOpeningPage() {
  return (
    <>
      <JsonLd schema={jobPostingPageSchema({ job, breadcrumbs: BREADCRUMBS })} />
      <JsonLd schema={jobFaqPageSchema(job)} />
      <TrackOnMount
        event={AnalyticsEvent.activeOpeningView}
        params={{ jobSlug: job.slug }}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <ServicesHero
        id="active-opening"
        h1={job.title}
        intro={job.intro}
        primaryCta={applyCta}
        qualifier="Applicants are accepted nationwide, and no closing date is currently published."
        phone={{
          href: job.closing.phoneHref,
          label: `Call ${utilityBar.phoneLabel}`,
        }}
        phoneLocation="careers-job-hero"
        phoneJourney="recruitment"
        phoneEvent={null}
        scopeItems={job.heroScopeItems}
        image={careersHubImages.hero}
      />

      <JobAboutSection
        id="about-opening"
        tone="default"
        content={job.about}
        cta={applyCta}
      />

      <JobRequirementsSection
        id="requirements"
        tone="subtle"
        content={job.requirements}
      />

      <JobWorkSection id="the-work" tone="default" content={job.work} />

      <JobRateSection
        id="starting-rate"
        tone="brandTint"
        content={job.rate}
        cta={applyCta}
      />

      <JobApplySection
        id="apply"
        tone="subtle"
        content={job.apply}
        disclaimer={job.disclaimer}
        cta={{ ...applyCta, label: job.apply.ctaLabel }}
      />

      <JobFaqSection id="opening-faq" job={job} />

      <JobClosingSection
        id="contact-apply"
        content={job.closing}
        cta={{ ...applyCta, label: job.closing.ctaLabel }}
      />
    </>
  );
}
