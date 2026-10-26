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
  INSTALLER_NETWORK_PATH,
  JOBS_INDEX_PATH,
} from "@/data/jobs";
import { utilityBar } from "@/data/navigation/site-navigation";
import {
  technicianHeroVideo,
  technicianImages,
  technicianRateBackground,
} from "@/data/site/careers-technician-images";
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

const baseMetadata = buildPageMetadata({
  title: job.metaTitle,
  description: job.metaDescription,
  pathname: job.path,
});

/**
 * The title carries the brand already, so it is set as `absolute` to skip the
 * site template, and Open Graph and Twitter use the same full string. Robots
 * adds the large-preview and unlimited-snippet directives.
 * REPLACE: add a 1200x630 social photo here (pass `image` to buildPageMetadata
 * above). Until then the site's default social image is used.
 */
export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: job.metaTitle },
  openGraph: { ...baseMetadata.openGraph, title: job.metaTitle },
  twitter: {
    ...baseMetadata.twitter,
    card: "summary_large_image",
    title: job.metaTitle,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

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
        h1={job.h1}
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
        backgroundVideo={technicianHeroVideo}
      />

      <JobAboutSection
        id="about-opening"
        tone="default"
        image={technicianImages.about}
        content={job.about}
        cta={applyCta}
      />

      <JobRequirementsSection
        id="requirements"
        tone="subtle"
        image={technicianImages.requirements}
        content={job.requirements}
        cta={applyCta}
        secondaryCta={{
          label: job.requirements.secondary.label,
          href: job.requirements.secondary.href,
          journey: "recruitment",
          event: AnalyticsEvent.ctaCareersClick,
        }}
      />

      <JobWorkSection
        id="the-work"
        tone="default"
        image={technicianImages.work}
        content={job.work}
      />

      <JobRateSection
        id="starting-rate"
        tone="dark"
        backgroundImage={technicianRateBackground}
        content={job.rate}
        cta={applyCta}
      />

      <JobApplySection
        id="apply"
        tone="subtle"
        image={technicianImages.apply}
        content={job.apply}
        disclaimer={job.disclaimer}
        cta={applyCta}
        networkCta={{
          label: job.apply.networkLabel,
          href: INSTALLER_NETWORK_PATH,
          journey: "recruitment",
          event: AnalyticsEvent.ctaInstallerNetworkClick,
        }}
      />

      <JobFaqSection id="opening-faq" job={job} />

      <JobClosingSection
        id="contact-apply"
        content={job.closing}
        cta={applyCta}
      />
    </>
  );
}
