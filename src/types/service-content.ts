import type { CommercialInquiryFormCopy } from "@/components/forms/CommercialInquiryForm";
import type { careersLandingContent } from "@/data/site/careers-landing-content";
import type { HubImageSlot } from "@/data/site/services-hub-images";
import type { Cta, FaqItem, WhatWeInstallContent } from "@/types/content";

/** Shared content shape for the services hub and each service detail page. */
export interface ServicePageContent {
  readonly h1: string;
  /** Meta title without the brand suffix. Falls back to `h1` when absent. */
  readonly metaTitle?: string;
  readonly metaDescription: string;
  readonly intro: string;
  /** Body paragraphs, confirmed facts only. */
  readonly body: readonly string[];
  readonly faq?: readonly FaqItem[];
}

/** One card in the services hub navigation grid. */
export interface HubServiceCard {
  readonly category: string;
  readonly title: string;
  readonly scope: string;
  readonly commonUse: string;
  /** Optional decision-support sentence shown after the scope. */
  readonly choose?: string;
  readonly linkLabel: string;
  readonly href: string;
  /** Decorative SB red top rule. Use on one or two cards at most. */
  readonly accent?: boolean;
  /** Optional thumbnail. Rendered only once an approved image exists. */
  readonly slot?: HubImageSlot;
}

/** Secondary note under the decision guide cards, with one inline link. */
export interface HubDecisionNote {
  readonly before: string;
  readonly linkText: string;
  readonly href: string;
  readonly after: string;
}

/** One row of the "which service do I need" decision guide. */
export interface HubDecisionRow {
  readonly situation: string;
  /** Optional supporting sentence under the situation. */
  readonly supporting?: string;
  readonly destination: string;
  readonly linkLabel: string;
  readonly href: string;
}

export interface HubList {
  readonly heading?: string;
  readonly items: readonly string[];
  /** "labeled": each item is "Label: description", shown with a bold label. */
  readonly style?: "bullets" | "checklist" | "labeled";
  /** Optional decorative icon per item, in item order. Replaces the marker. */
  readonly icons?: readonly ("mounting" | "connection" | "routing")[];
}

export interface HubLink {
  readonly label: string;
  readonly href: string;
}

/** Heading, paragraphs, optional lists and links, rendered by SplitFeature. */
export interface HubSplitSection {
  readonly h2: string;
  readonly body: readonly string[];
  readonly lists?: readonly HubList[];
  /** Render the lists inside a bordered panel, to set soft guidance apart from facts. */
  readonly listPanel?: boolean;
  /** Small muted notes shown after the lists and before the links. */
  readonly footnotes?: readonly string[];
  /** Render the footnotes as a visually distinct callout with a left rule. */
  readonly footnoteCallout?: boolean;
  readonly links?: readonly HubLink[];
  /** Render the links as full-width outlined buttons instead of text links. */
  readonly linksAsButtons?: boolean;
  /** Paragraphs shown after the links. */
  readonly closing?: readonly string[];
  /** Style the first link as primary and any others as secondary (lighter weight). */
  readonly primaryLink?: boolean;
}

/**
 * Per-service content for `ServicePageTemplate`. The H1, metadata
 * description, answer-first intro, and FAQ live in the matching
 * `ServicePageContent` (services-content.ts); everything below is the section
 * copy that differs per service. Shared blocks live in
 * `ServiceTemplateShared`.
 */
export interface ServiceTemplateContent {
  readonly slug: string;
  readonly pathname: string;
  /** Last breadcrumb label. */
  readonly breadcrumbLabel: string;
  /**
   * Schema `serviceType` values that directly match this page's visible
   * purpose. Empty means the key is omitted (no approved label exists).
   */
  readonly serviceTypes: readonly string[];
  /** Hero scope strip: a service-specific first item plus two shared items. */
  readonly scopeItems: readonly string[];
  /**
   * Optional hero-only copy. Each field replaces the shared or page-level
   * value in the hero alone. The page `h1` still drives metadata and schema,
   * and the primary CTA keeps its destination, journey, and event.
   */
  readonly hero?: {
    readonly eyebrow?: string;
    readonly h1?: string;
    readonly intro?: string;
    readonly ctaLabel?: string;
    readonly qualifier?: string;
  };
  /** Optional page-specific paragraphs and links for the project-location section. */
  readonly nationwideContext?: {
    /** Optional heading replacing the shared project-location heading. */
    readonly h2?: string;
    readonly body: readonly string[];
    readonly links: readonly HubLink[];
    /** Render the links as full-width outlined buttons instead of text links. */
    readonly linksAsButtons?: boolean;
  };
  /** Optional page-specific list heading and note for the vehicle-context section. */
  readonly vehicleContext?: {
    readonly h2?: string;
    readonly listHeading?: string;
    readonly note?: string;
  };
  readonly definition: HubSplitSection;
  readonly scope: HubSplitSection;
  /** Page-specific sentence; the vehicle examples and disclaimer are shared. */
  readonly vehiclesBody: string;
  readonly fit: HubSplitSection;
  /**
   * Optional full-width photo behind the fit section. When set, the section
   * renders as a centered solid card over the photo (fit.h2, fit.lists[0],
   * `fitRelated`, and fit.footnotes) instead of the split layout.
   */
  readonly fitBackground?: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
  };
  /** Right column of the `fitBackground` card: request contexts with internal links. */
  readonly fitRelated?: {
    readonly heading: string;
    readonly items: readonly {
      readonly context: string;
      readonly link: HubLink;
    }[];
  };
  /** Page-specific request-detail sentence added to the nationwide section. */
  readonly nationwideExtra: string;
  /** Slugs of related service pages, in display order. */
  readonly related: readonly string[];
  readonly faqHeading: string;
  /** "columns" shows the FAQ as a two-column accordion from md up. Defaults to the list. */
  readonly faqLayout?: "list" | "columns";
  readonly quoteH2: string;
  /**
   * Optional commercial CTA band after the fit section. Renders only when set,
   * so pages that do not opt in keep their current layout. The button reuses
   * the bundle's primary CTA and its analytics event; the supporting line is
   * the shared hero qualifier.
   */
  readonly midCtaHeading?: string;
  /** Button label for the mid-page CTA. Falls back to the bundle's primary CTA label. */
  readonly midCtaLabel?: string;
  /** Supporting copy for the mid-page CTA. A blank line starts a new paragraph. Falls back to the shared hero qualifier. */
  readonly midCtaBody?: string;
  /**
   * Render the homepage "What We Install" cards, unchanged, in the
   * related-services section, followed by a row of related service links.
   */
  readonly relatedInstallCatalog?: boolean;
  /**
   * Optional image-card layout for the related-services section, using the
   * homepage service-card structure. Replaces the shared text cards.
   */
  readonly relatedSection?: {
    readonly h2: string;
    readonly intro: string;
    readonly cards: readonly {
      readonly title: string;
      readonly description: string;
      readonly linkLabel: string;
      readonly href: string;
      readonly image: {
        readonly src: string;
        readonly width: number;
        readonly height: number;
        readonly alt: string;
      };
    }[];
  };
  /** Optional page-specific sentence replacing the shared documentation sentence. */
  readonly documentationText?: string;
  /**
   * Optional card layout for the documentation band. When present it replaces
   * the shared single-sentence band; the shared link still renders below.
   */
  readonly documentationCards?: {
    readonly intro: string;
    readonly cards: readonly { readonly title: string; readonly body: string }[];
  };
  /**
   * Optional two-column quote section: guidance on the left, the form on the
   * right. When absent the shared single-column intro and form render.
   */
  /**
   * Optional decorative hero background video. When set it replaces the
   * hero's right-column image slot. The poster shows while the video loads and
   * for reduced-motion visitors.
   */
  readonly heroVideo?: { readonly src: string; readonly poster: string };
  /** Optional unshaded full-width hero photo. Copy sits on a solid panel. */
  readonly heroBackgroundImage?: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
  };
  /** Optional page-specific supporting paragraph for the quote section. */
  readonly quoteIntro?: string;
  /** Optional decorative background image for the quote section. */
  readonly quoteBackground?: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
  };
  readonly quoteGuide?: {
    readonly intro: string;
    readonly support: string;
    readonly includeHeading: string;
    readonly includeItems: readonly string[];
    /** Optional "what happens next" block. Omit it to end the guide after the list. */
    readonly nextHeading?: string;
    readonly nextSteps?: readonly string[];
  };
  /** Top-align the two-column quote layout instead of centering it. */
  readonly quoteAlignTop?: boolean;
  /** Visible label for the form's equipment field. The field name and payload are unchanged. */
  readonly quoteServiceNeedLabel?: string;
}

/** Blocks that are the same on every service page. */
export interface ServiceTemplateShared {
  readonly callLabel: string;
  readonly heroQualifier: string;
  readonly vehicles: {
    readonly h2: string;
    readonly listHeading: string;
    readonly examples: readonly string[];
    readonly note: string;
  };
  readonly nationwide: {
    readonly h2: string;
    readonly lead: string;
    readonly links: readonly HubLink[];
  };
  readonly documentation: {
    readonly h2: string;
    readonly sentence: string;
    readonly links: readonly HubLink[];
  };
  readonly related: { readonly h2: string; readonly allCard: HubRelatedCard };
  readonly quote: { readonly intro: string; readonly phoneLead: string };
  /** Related Resources cards, shared by every service page: link, title, and image. */
  readonly resources: {
    readonly h2: string;
    readonly links: readonly (HubLink & {
      readonly image: {
        readonly src: string;
        readonly width: number;
        readonly height: number;
        readonly alt: string;
      };
    })[];
  };
  /** Small label above the H1, shared by the five service pages. */
  readonly heroEyebrow: string;
}

/** Everything `ServicePageTemplate` needs to render one service page. */
export interface ServicePageBundle {
  readonly page: ServicePageContent;
  readonly content: ServiceTemplateContent;
  readonly shared: ServiceTemplateShared;
  readonly primaryCta: Cta;
  /** `label` is the hero button text ("Call ..."); `numberLabel` is the bare number. */
  readonly phone: {
    readonly href: string;
    readonly label: string;
    readonly numberLabel: string;
  };
  readonly heroImage: HubImageSlot;
  readonly contextImage: HubImageSlot;
  /** Optional media beside the definition and scope sections. */
  readonly definitionImage?: HubImageSlot;
  readonly scopeImage?: HubImageSlot;
  readonly fitImage?: HubImageSlot;
  readonly nationwideImage?: HubImageSlot;
  /** "Have Questions About Installer Opportunities?" block, from the Careers page data. */
  readonly installerQuestions: {
    readonly content: (typeof careersLandingContent)["contact"];
    readonly image: HubImageSlot;
  };
  /** Homepage "What We Install" content, when the page opts in via `relatedInstallCatalog`. */
  readonly installCatalog?: WhatWeInstallContent;
  readonly relatedCards: readonly HubRelatedCard[];
}

export interface InformationItem {
  readonly text: string;
  /** Decorative icon shown before the text. */
  readonly icon: "contact" | "location" | "experience" | "travel" | "platform" | "tools";
}

export interface CareersEquipmentCard {
  readonly title: string;
  readonly description: string;
  /** Optional decorative icon shown above the title. */
  readonly icon?: "technician" | "vehicle" | "location";
}

/**
 * Section content for the Installer Network page, beside
 * `installerNetworkContent` (h1, intro, metadata description, FAQ). The
 * Installer Network is a registration for future opportunities, separate from
 * the application for the current opening. `openings` only points to that
 * opening; its facts live in the job record. No schedule, hours,
 * certification, or platform-brand language.
 */
export interface CareersHubPageContent {
  /** Document title, without the site-name suffix the layout appends. */
  readonly metaTitle: string;
  readonly hero: {
    readonly eyebrow: string;
    readonly h1: string;
    readonly intro: string;
    readonly primaryCta: Cta;
    readonly callLabel: string;
    readonly qualifier: string;
    readonly scopeItems: readonly string[];
  };
  /** Small chapter labels shown above each chapter's first section. */
  readonly chapters: {
    readonly network: string;
    readonly work: string;
    readonly prepare: string;
    readonly join: string;
  };
  /** Three editorial cards directly under the hero. */
  readonly contextStrip: {
    readonly h2: string;
    readonly cards: readonly CareersEquipmentCard[];
  };
  /** "What this page is" and "What this page is not" panel. */
  readonly boundary: {
    readonly isHeading: string;
    readonly isItems: readonly string[];
    readonly isNotHeading: string;
    readonly isNotItems: readonly string[];
  };
  readonly answer: HubSplitSection;
  readonly fit: HubSplitSection;
  /** Card beside the fit list: the no-experience option for current openings. */
  readonly noExperience: {
    readonly title: string;
    readonly body: string;
    readonly link: HubLink;
  };
  /** Requirements and experience: callout, three grouped lists, and supporting notes. */
  readonly requirements: {
    readonly h2: string;
    readonly callout: { readonly title: string; readonly body: string };
    readonly core: { readonly heading: string; readonly items: readonly string[] };
    readonly preferred: {
      readonly heading: string;
      readonly label: string;
      readonly items: readonly string[];
    };
    readonly asks: { readonly heading: string; readonly items: readonly string[] };
    /** Age recommendation and no-guarantee statement, in reading order. */
    readonly notes: readonly string[];
  };
  /** Heading and intro only. The cards are the homepage service cards, reused as-is. */
  readonly equipment: {
    readonly h2: string;
    readonly intro: string;
  };
  /** On-site installation environments: heading, intro, four vehicle image cards, and a note. */
  readonly fieldWork: {
    readonly h2: string;
    readonly intro: string;
    readonly cards: readonly {
      readonly title: string;
      readonly description: string;
      readonly image: {
        readonly src: string;
        readonly width: number;
        readonly height: number;
        readonly alt: string;
      };
    }[];
    readonly note: string;
  };
  /** Requested and optional form details, shown as two grouped icon lists. */
  readonly information: {
    readonly h2: string;
    readonly intro: readonly string[];
    readonly requested: {
      readonly heading: string;
      readonly items: readonly InformationItem[];
    };
    readonly optional: {
      readonly heading: string;
      readonly label: string;
      readonly items: readonly InformationItem[];
    };
    readonly note: string;
  };
  /** Shown directly under the form's submit button. */
  readonly join: {
    readonly expectation: string;
  };
  readonly faqHeading: string;
  /** Business installation inquiry, kept separate from the Installer Network form. */
  readonly commercial: {
    readonly h2: string;
    readonly body: readonly string[];
    readonly cta: Cta;
  };
  /** Heading for the related-services card grid. */
  readonly relatedLinks: {
    readonly h2: string;
  };
}

export interface HubRelatedCard {
  readonly title: string;
  readonly description: string;
  readonly linkLabel: string;
  readonly href: string;
}

/**
 * Section content for the `/industries/` hub, beside `industriesHubContent`
 * (h1, metadata, intro, FAQ). Cards reuse `HubServiceCard`: `category` is the
 * industry label and `commonUse` the installation context.
 */
export interface IndustriesHubPageContent {
  /** Document title, without the site-name suffix the layout appends. */
  readonly metaTitle: string;
  readonly hero: {
    readonly primaryCta: Cta;
    readonly callLabel: string;
    readonly qualifier: string;
    readonly secondaryLink: HubLink;
    readonly scopeItems: readonly string[];
  };
  readonly answer: HubSplitSection;
  readonly industries: {
    readonly eyebrow?: string;
    readonly h2: string;
    readonly intro: string;
    readonly cards: readonly HubServiceCard[];
  };
  readonly decisionGuide: {
    readonly eyebrow?: string;
    readonly h2: string;
    readonly intro: string;
    readonly rows: readonly HubDecisionRow[];
    readonly note?: HubDecisionNote;
  };
  readonly capability: HubSplitSection;
  readonly intake: HubSplitSection;
  readonly nationwide: HubSplitSection;
  readonly services: {
    readonly eyebrow?: string;
    readonly h2: string;
    /** Introduction paragraphs directly under the heading. */
    readonly intro?: readonly string[];
    readonly cards: readonly HubRelatedCard[];
  };
  readonly faqHeading: string;
  readonly faqIntro: string;
  readonly quote: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly paragraphs: readonly string[];
    readonly listHeading: string;
    readonly list: readonly string[];
    readonly reassurance: string;
    readonly formHeading: string;
    readonly formIntro: string;
    readonly phoneLead: string;
    readonly formCopy: CommercialInquiryFormCopy;
  };
}

/**
 * Section content for the `/services/` hub, beside the shared
 * `ServicePageContent` (h1, intro, metadata, FAQ) in `servicesHubContent`.
 */
export interface ServicesHubPageContent {
  readonly hero: {
    readonly primaryCta: Cta;
    readonly callLabel: string;
    readonly qualifier: string;
  };
  readonly answer: HubSplitSection;
  readonly services: {
    readonly h2: string;
    readonly intro: string;
    readonly cards: readonly HubServiceCard[];
  };
  readonly decisionGuide: {
    readonly h2: string;
    readonly intro: string;
    readonly rows: readonly HubDecisionRow[];
  };
  readonly capability: HubSplitSection;
  readonly nationwide: HubSplitSection;
  readonly intake: HubSplitSection;
  readonly faqHeading: string;
  readonly related: {
    readonly h2: string;
    readonly cards: readonly HubRelatedCard[];
  };
  readonly quote: {
    readonly h2: string;
    /** First paragraph beside the form. */
    readonly intro: string;
    /** Second paragraph beside the form. */
    readonly detail: string;
    readonly phoneLead: string;
  };
}

export interface CareersPageContent {
  readonly h1: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly body: readonly string[];
  readonly faq?: readonly FaqItem[];
}

/**
 * Shared shape for Sprint 2 informational pages: the industries hub and each
 * industry page, `/our-process/`, and `/quality-safety/`. Structurally
 * identical to `ServicePageContent` (h1/metaDescription/intro/body/faq); a
 * separate type name keeps each page family's content object readable at
 * its call site without implying a service-schema relationship it doesn't
 * have (these pages emit `WebPage`/`BreadcrumbList` only, never `Service`).
 */
export interface InformationalPageContent {
  readonly h1: string;
  /** Meta title without the brand suffix. Falls back to `h1` when absent. */
  readonly metaTitle?: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly body: readonly string[];
  readonly faq?: readonly FaqItem[];
}

/**
 * `/faq/` commercial information hub content. Topic bands of approved
 * questions, a documentation band, a separate Installer Network band, the
 * commercial quote block, and related links. No FAQPage markup.
 */
export interface FaqHubBand {
  readonly id: string;
  readonly navLabel: string;
  readonly h2: string;
  readonly tone: "default" | "subtle";
  readonly items: readonly FaqItem[];
}

export interface FaqHubContent {
  readonly h1: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly hero: {
    readonly support: string;
    readonly cta: {
      readonly label: string;
      readonly href: string;
      readonly journey: "commercial";
      readonly event: string;
    };
    readonly qualifier: string;
    readonly secondary: HubLink;
  };
  readonly topicNav: { readonly label: string };
  readonly bands: readonly FaqHubBand[];
  readonly documentation: {
    readonly id: string;
    readonly navLabel: string;
    readonly h2: string;
    readonly question: string;
    readonly answer: string;
  };
  readonly installerNetwork: {
    readonly id: string;
    readonly navLabel: string;
    readonly h2: string;
    readonly intro: string;
    readonly items: readonly FaqItem[];
  };
  readonly quote: {
    readonly h2: string;
    readonly intro: string;
    readonly formCopy: { readonly serviceNeed: string; readonly submit: string };
  };
  readonly related: { readonly h2: string; readonly links: readonly HubLink[] };
}

/**
 * `/resources/` hub + article content. Educational operational guidance
 * only, never a claim about Ultimate Fleet GPS's own stats, history, or performance.
 * Every article carries `editorialNote` verbatim in its rendered body - see
 * plan section "Sprint 2 - Credibility pages" for the required wording.
 */
export interface ResourceArticleContent {
  readonly slug: string;
  readonly h1: string;
  /** Meta title without the brand suffix. Falls back to `h1` when absent. */
  readonly metaTitle?: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly body: readonly string[];
  readonly editorialNote: string;
  readonly faq?: readonly FaqItem[];
}

/**
 * `/case-studies/` registry entry type. The registry itself
 * (`src/data/site/case-studies.ts`) is an empty array in Sprint 2 - no real,
 * approved case study exists yet. See CLAUDE.md section 3 and the plan's
 * "structural only" scoping for this route.
 */
export interface CaseStudyContent {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly body: readonly string[];
}
