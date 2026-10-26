import type { CommercialInquiryFormCopy } from "@/components/forms/CommercialInquiryForm";
import type { HubLink, HubRelatedCard, HubSplitSection } from "@/types/service-content";
/**
 * Content types for the homepage.
 *
 * Components receive verified, typed data. Copy never appears as literal
 * strings inside JSX. See 20-component-inventory.md section 5.
 */

import type { business } from "@/data/site/business";

type ServiceType = (typeof business.serviceTypes)[number];

/** A call to action. `href` is the destination route. */
export interface Cta {
  readonly label: string;
  /**
   * Optional leading part of `label` after which the button shows a line
   * break, so the label wraps at a chosen point. The full label is unchanged.
   */
  readonly labelBreakAfter?: string;
  readonly href: string;
  /**
   * Which journey this CTA belongs to. Recruitment and commercial journeys
   * stay separate in routing, analytics, and confirmation language.
   * See 19-claude-project-instructions.md section 17.
   */
  readonly journey: "recruitment" | "commercial";
  /** Analytics event name. Journeys never share an event. */
  readonly event: string;
}

export interface HeroContent {
  readonly h1: string;
  readonly subhead: string;
  readonly primaryCta: Cta;
  readonly secondaryCta: Cta;
}

/** One button within an audience pathway, paired with its visual weight. */
export interface PathwayCta {
  readonly cta: Cta;
  readonly emphasis: "primary" | "secondary" | "installerRed";
}

/**
 * One audience's route through the direct-answer section: who it's for, what
 * to do next, and the button(s) that do it. `variant` drives the installer
 * pathway's accent styling; it is never the only signal distinguishing the
 * pathways, since each also carries its own heading and body text.
 */
export interface AudiencePathway {
  readonly variant: "fleet" | "installer";
  readonly label: string;
  readonly body: string;
  readonly ctas: readonly PathwayCta[];
}

/**
 * Self-contained answer paragraph(s) answering who the company is, with an
 * optional eyebrow/heading and audience pathways beneath. A body supplied as
 * an array renders one paragraph per entry.
 */
export interface DirectAnswerContent {
  readonly eyebrow?: string;
  readonly heading?: string;
  readonly body: string | readonly string[];
  /** Optional text link under the body paragraphs, above the pathways. */
  readonly link?: { readonly label: string; readonly href: string };
  readonly pathwaysHeading?: string;
  readonly pathways?: readonly AudiencePathway[];
}

export interface SectionContent {
  readonly h2: string;
  /**
   * Section body copy. An array renders as one paragraph per entry, in order.
   * A single string renders as one paragraph. Paragraph breaks are structure,
   * not copy, so the strings themselves stay verbatim.
   */
  readonly body: string | readonly string[];
  readonly cta?: Cta;
}

/** A run of FAQ answer text: plain text, or text with a visible-only link. */
export type RichFaqPart =
  | string
  | { readonly text: string; readonly href: string };

/** A FAQ item whose answer can carry several in-sentence links. */
export interface RichFaqItem {
  readonly question: string;
  readonly answer: readonly RichFaqPart[];
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
  /**
   * Optional restrained link shown under the answer. The answer text stays
   * complete without it, so the visible text and any FAQ markup still match.
   */
  readonly link?: { readonly label: string; readonly href: string };
  /**
   * Optional related pages shown under the answer when it points to more than
   * one destination. The answer text stays complete without them.
   */
  readonly links?: readonly { readonly label: string; readonly href: string }[];
}

export interface FaqContent {
  /** Visible section heading. When absent, the FAQ shows no visible heading. */
  readonly h2?: string;
  readonly items: readonly FaqItem[];
}

export interface FinalCtaContent {
  readonly h2: string;
  readonly primaryCta: Cta;
  readonly secondaryCta: Cta;
}

/**
 * WhatWeInstallGrid content. The list of services itself is never here: the
 * component sources it from `business.serviceTypes` directly, so a service
 * can never be added to the grid without also being added to the verified
 * business-facts source. See plan section 7's WhatWeInstallGrid constraint.
 */
/** Copy for one What We Install card, keyed by `business.serviceTypes`. */
export interface WhatWeInstallCardContent {
  readonly description: string;
  /** Visible "Use cases" list. Omitted where no approved list exists. */
  readonly useCases?: readonly string[];
  /** Visible qualification shown under the description. */
  readonly note?: string;
}

export interface WhatWeInstallContent {
  readonly h2: string;
  readonly intro?: string;
  readonly cards: Readonly<Record<ServiceType, WhatWeInstallCardContent>>;
}

/**
 * Optional card link. `event` is omitted for plain navigation links that have
 * no approved analytics event; a new event name is never invented here.
 */
export interface WhoWeServeCardLink {
  readonly label: string;
  readonly href: string;
  readonly event?: string;
}

export interface WhoWeServeCard {
  readonly title: string;
  readonly description: string;
  readonly useCases: readonly string[];
  readonly link?: WhoWeServeCardLink;
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
}

/**
 * Audience block: label, heading, intro paragraph, three vehicle-type cards
 * (image, description, use cases, optional link), and a closing support
 * paragraph with one commercial CTA.
 */
export interface WhoWeServeContent {
  readonly eyebrow: string;
  readonly h2: string;
  readonly intro: string;
  readonly cards: readonly WhoWeServeCard[];
  readonly support: {
    readonly heading: string;
    readonly body: string;
    readonly cta: Cta;
  };
}

/**
 * "Why Ultimate Fleet GPS" block: h2, intro, four benefit blocks, a
 * fleet-manager list, a commercial CTA panel, and one visually secondary
 * Installer Network link. Customer and technician journeys never share a
 * route or analytics event.
 */
export interface TrustContent {
  readonly h2: string;
  readonly intro: string;
  readonly benefits: readonly DifferentiatorItem[];
  readonly fleetManagers: {
    readonly heading: string;
    readonly items: readonly string[];
  };
  readonly cta: {
    readonly heading: string;
    readonly body: string;
    readonly primary: Cta;
    readonly servicesLink: { readonly label: string; readonly href: string };
  };
  readonly installerNetwork: {
    readonly prompt: string;
    readonly link: Cta;
  };
}

export interface DifferentiatorItem {
  readonly title: string;
  readonly body: string;
}

/**
 * Compact proof strip of confirmed facts. The benefit headings live in the
 * "Why Ultimate Fleet GPS" section (`TrustContent`), so they appear once
 * on the homepage.
 */
export interface WhyChooseUsContent {
  /** Visually hidden h2 that names the strip for assistive technology. */
  readonly heading: string;
  /** Short fact labels. Confirmed facts only; no benefit headings. */
  readonly items: readonly string[];
}

export interface ProcessStep {
  readonly title: string;
  readonly body: string;
}

/**
 * Narrowly factual, non-promissory process summary. This is intentionally
 * NOT a claimed multi-step company process (scope/schedule/install/QA/
 * closeout) - that fuller description is pending stakeholder confirmation.
 * See docs/_claims-inventory.md and CLAUDE.md section 3 (never invent).
 */
export interface DeploymentProcessContent {
  readonly h2: string;
  readonly body: string;
}

export interface LargeRolloutContent {
  readonly h2: string;
  readonly body: string;
  readonly cta?: Cta;
}

export interface RecruitingBannerContent {
  readonly eyebrow: string;
  readonly h2: string;
  readonly body: string;
  readonly highlights: readonly string[];
  readonly cta: Cta;
  readonly secondaryLink: { readonly label: string; readonly href: string };
  readonly disclosure: string;
}

export interface ProofMetricItem {
  readonly label: string;
  readonly value: string;
}

/**
 * Stakeholder-content-pending slot. `items` is empty until real, approved
 * proof content exists. `ProofMetrics` returns `null` while it is empty; see
 * that component for the no-placeholder rule.
 */
export interface ProofMetricsContent {
  readonly items: readonly ProofMetricItem[];
}

export interface HomepageContent {
  readonly hero: HeroContent;
  readonly directAnswer: DirectAnswerContent;
  readonly whatWeInstall: WhatWeInstallContent;
  readonly whoWeServe: WhoWeServeContent;
  readonly whyChooseUs: WhyChooseUsContent;
  readonly process: DeploymentProcessContent;
  readonly largeRollout: LargeRolloutContent;
  readonly commercial: SectionContent;
  readonly recruitingBanner: RecruitingBannerContent;
  readonly proof: ProofMetricsContent;
  readonly trust: TrustContent;
  readonly faq: FaqContent;
  readonly finalCta: FinalCtaContent;
}

/**
 * One internal-navigation card on the coverage page. The image is decorative:
 * the card title and description carry the meaning, so it renders with an
 * empty alt.
 */
export interface CoverageExploreCard {
  readonly title: string;
  readonly description: string;
  readonly linkLabel: string;
  readonly href: string;
  readonly image: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
  };
}

/** Confirmed-facts content for the single nationwide coverage page (Sprint 2). */
export interface NationwideCoverageContent {
  readonly h1: string;
  /** Meta title without the brand suffix. Falls back to `h1` when absent. */
  readonly metaTitle?: string;
  readonly metaDescription: string;
  /** Hero copy and the commercial CTA. The secondary action is the phone button. */
  readonly hero: {
    readonly eyebrow: string;
    /** Direct answer first, then the request-framing sentence. */
    readonly paragraphs: readonly string[];
    readonly primaryCta: Cta;
    /** Prefix for the phone button label, e.g. "Call Ultimate Fleet GPS". */
    readonly callLabel: string;
    /** Optional. The row renders only when two or more items exist. */
    readonly trustItems?: readonly string[];
  };
  /** "What does nationwide mean" answer section that follows the hero. */
  readonly introSection: HubSplitSection;
  /** Four-item information strip, with a quiet link to the quote form. */
  readonly requestStart: {
    readonly h2: string;
    readonly items: readonly { readonly label: string; readonly description: string }[];
    readonly note: string;
    readonly link: HubLink;
  };
  /** Service cards, built from the approved service taxonomy. */
  readonly services: {
    readonly h2: string;
    readonly intro: string;
    readonly cards: readonly HubRelatedCard[];
    readonly allLink: HubLink;
  };
  readonly vehicles: {
    readonly h2: string;
    readonly intro: string;
    readonly examplesHeading: string;
    readonly examples: readonly string[];
    readonly categoriesHeading: string;
    readonly categories: readonly string[];
    readonly note: string;
  };
  readonly explore: {
    readonly h2: string;
    readonly intro: string;
    readonly cards: readonly CoverageExploreCard[];
  };
  readonly faqHeading: string;
  readonly faq: readonly FaqItem[];
  readonly quote: {
    readonly h2: string;
    readonly intro: string;
    /** Second short paragraph: what to include in the request. */
    readonly support: string;
    readonly nextHeading: string;
    readonly nextBody: string;
    readonly phoneLead: string;
    /** Visible-copy overrides for this page's commercial form only. */
    readonly formCopy: Partial<CommercialInquiryFormCopy>;
  };
  /**
   * Installer Network handoff band, shown right after the introduction. A
   * separate recruitment journey: its own link, journey, and event, never the
   * commercial form.
   */
  readonly handoff: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly body: string;
    /** Approved independent-contractor and no-guarantee disclosure. */
    readonly disclosure: string;
    readonly link: Cta;
  };
}

/**
 * Reusable data model for future geo expansion (Sprint 2+), added to the
 * shared content types now per plan section "Reusable data model for future
 * geo expansion", so Sprint 3+ is additive data entry against an existing
 * schema rather than a new architecture.
 *
 * `regions`, `states`, and `metros` stay empty objects until their evidence
 * gates (docs/_claims-inventory.md, the plan's Sprint 3+ scoring rubric) are
 * met. Route generation reads only populated keys, so an empty object
 * publishes nothing - see src/app/coverage/ for how this is consumed.
 */
export interface CoverageData {
  readonly nationwide: NationwideCoverageContent;
  readonly regions: Record<string, unknown>;
  readonly states: Record<string, unknown>;
  readonly metros: Record<string, unknown>;
}
