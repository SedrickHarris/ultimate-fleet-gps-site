import { applyCta } from "@/data/jobs/ctas";
import { activeTechnicianJob, INSTALLER_NETWORK_PATH, JOBS_INDEX_PATH } from "@/data/jobs";
import { business } from "@/data/site/business";
import { AnalyticsEvent } from "@/lib/analytics/events";
import type { Cta } from "@/types/content";
import type { HubLink } from "@/types/service-content";

/**
 * Section copy for the `/careers/` recruitment landing page. The H1, intro,
 * metadata description, and FAQ live in `careersHubContent`
 * (careers-content.ts). Job facts come from the job record, never retyped.
 *
 * The page leads with the active opening and its application. The Installer
 * Network is a separate, later section for future opportunities and is never
 * the application. No em dash appears in this file.
 */
interface CareersOpeningContent {
  readonly h2: string;
  readonly summary: string;
  /** The two facts shown most prominently. */
  readonly highlights: readonly string[];
  /** Key facts, shown as a compact grid. */
  readonly facts: readonly string[];
  /** Remaining details, shown as a list. */
  readonly details: readonly string[];
  readonly disclaimer: string;
  readonly applyCta: Cta;
  readonly secondaryLinks: readonly HubLink[];
}

interface CareersNetworkContent {
  readonly eyebrow: string;
  readonly h2: string;
  readonly body: string;
  readonly link: HubLink;
}

interface CareersContactContent {
  readonly eyebrow: string;
  readonly h2: string;
  readonly body: string;
  readonly clarification: string;
  /** Confirmed business hours, as previously published on this page. */
  readonly hours: string;
  readonly pathsHeading: string;
  readonly paths: readonly (HubLink & { readonly note: string })[];
}

interface CareersLandingContent {
  readonly metaTitle: string;
  readonly hero: {
    readonly primaryCta: Cta;
    readonly secondaryLink: HubLink;
    readonly callLabel: string;
    readonly qualifier: string;
    readonly scopeItems: readonly string[];
  };
  readonly opening: CareersOpeningContent;
  readonly network: CareersNetworkContent;
  readonly faqEyebrow: string;
  readonly faqHeading: string;
  readonly faqIntro: string;
  readonly contact: CareersContactContent;
  readonly handoff: {
    readonly h2: string;
    readonly paragraphs: readonly string[];
    readonly services: readonly string[];
    readonly primaryCta: Cta;
    readonly secondaryLink: HubLink;
  };
}

/**
 * Opening facts are read from the job record by their leading words, so the
 * wording stays single-sourced. A missing fact fails the build loudly instead
 * of rendering a gap.
 */
function fact(prefix: string): string {
  const match = activeTechnicianJob.summaryFacts.find((item) =>
    item.startsWith(prefix),
  );
  if (!match) {
    throw new Error(`careers-landing-content: no summary fact starts with "${prefix}"`);
  }
  return match;
}

/** "No prior installation experience required, and training provided" as two facts. */
const [experienceFact, trainingFact] = fact(
  "No prior installation experience required",
).split(", and ");
if (!experienceFact || !trainingFact) {
  throw new Error("careers-landing-content: experience and training fact changed shape");
}

export const careersLandingContent: CareersLandingContent = {
  metaTitle: "Careers and Installer Opportunities",

  hero: {
    primaryCta: applyCta,
    secondaryLink: {
      label: "View the opening details",
      href: activeTechnicianJob.path,
    },
    callLabel: "Call",
    qualifier:
      "Applicants are accepted nationwide, and no closing date is currently published.",
    scopeItems: activeTechnicianJob.heroScopeItems,
  },

  opening: {
    h2: "Current Opening: Mobile GPS, ELD, and AOBRD Installation Technician",
    summary:
      "Ultimate Fleet GPS has current openings for this role. Applicants are accepted nationwide.",
    highlights: [
      experienceFact,
      trainingFact.charAt(0).toUpperCase() + trainingFact.slice(1),
    ],
    facts: [
      fact("Independent contractor"),
      fact("Applicants accepted"),
      fact("Starting rate"),
      fact("Approximately"),
    ],
    details: [
      fact("Contractors provide"),
      fact("Valid driver"),
      fact("No closing date"),
    ],
    disclaimer: activeTechnicianJob.disclaimer,
    applyCta,
    secondaryLinks: [
      { label: "View the Full Opening", href: activeTechnicianJob.path },
      { label: "See All Current Openings", href: JOBS_INDEX_PATH },
    ],
  },

  network: {
    eyebrow: "Installer Network",
    h2: "Interested in Future Installation Opportunities?",
    body: "The Installer Network is a separate registration for future installation opportunities. It is not an application for the current opening, and it does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    link: {
      label: "Learn About the Installer Network",
      href: INSTALLER_NETWORK_PATH,
    },
  },

  faqEyebrow: "Installer Careers",
  faqHeading: "Installer Careers Questions",
  faqIntro:
    "Answers about the current opening, the application process, and the Installer Network.",

  contact: {
    eyebrow: "Installer Careers",
    h2: "Have Questions About Installer Opportunities?",
    body: "Have questions about the current Mobile GPS, ELD, and AOBRD Installation Technician opening, the application process, or the Installer Network? Call Ultimate Fleet GPS during the listed business hours for general assistance.",
    clarification:
      "Phone support does not replace the application process, and calling does not guarantee contact, an interview, a contract, an assignment, a schedule, work volume, or pay.",
    hours: "Monday-Friday, 8:00 AM-6:00 PM",
    pathsHeading: "Choose the right path",
    paths: [
      {
        label: "Review and apply for the current opening",
        href: activeTechnicianJob.path,
        note: "The current opening has its own application page, separate from the Installer Network.",
      },
      {
        label: "Learn about the Installer Network",
        href: INSTALLER_NETWORK_PATH,
        note: "A separate registration for future opportunities. It is not an application for the current opening.",
      },
    ],
  },

  handoff: {
    h2: "Need Fleet Installation Services?",
    paragraphs: [
      "Ultimate Fleet GPS provides on-site installation of GPS tracking systems, ELD and AOBRD equipment, fleet dashcams, and other commercial vehicle electronics for fleet and commercial vehicle operators.",
      "We install fleet electronics on work vans, service vehicles, delivery vehicles, utility vehicles, and other vehicles managed as part of a commercial fleet. To begin, share the equipment, approximate vehicle count, project location or locations, and preferred timing in an installation quote request.",
    ],
    services: business.serviceTypes,
    primaryCta: {
      label: "Request an Installation Quote",
      href: "/contact/",
      journey: "commercial",
      event: AnalyticsEvent.ctaQuoteClick,
    },
    secondaryLink: {
      label: "Explore Fleet Installation Services",
      href: "/services/",
    },
  },
};
