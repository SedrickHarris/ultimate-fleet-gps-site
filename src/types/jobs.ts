
/** A paragraph with one in-sentence link. */
export interface JobLinkedText {
  readonly before: string;
  readonly linkText: string;
  readonly href: string;
  readonly after: string;
}

/** One equipment term. `linkText` is a prefix of `term` and is the linked part. */
export interface JobEquipmentItem {
  readonly term: string;
  readonly definition: string;
  readonly linkText?: string;
  readonly href?: string;
}

/** The "what the technician does" section of an active opening page. */
export interface JobWork {
  readonly h2: string;
  readonly answer: string;
  readonly vehiclesHeading: string;
  readonly vehicles: string;
  readonly equipmentHeading: string;
  readonly equipment: readonly JobEquipmentItem[];
  readonly whereHeading: string;
  readonly where: JobLinkedText;
  readonly stepsHeading: string;
  readonly steps: readonly string[];
  readonly photoHeading: string;
  readonly photo: string;
  readonly expectHeading: string;
  readonly expect: JobLinkedText;
  /** Schema-only. Restates the visible content in one plain-text line. */
  readonly responsibilities: string;
}

/** The starting rate section of an active opening page. */
export interface JobRate {
  readonly h2: string;
  /** Prominent figure. Always shown with `figureLabel` directly beneath. */
  readonly figure: string;
  readonly figureLabel: string;
  readonly answer: string;
  readonly howHeading: string;
  readonly how: string;
  readonly meansHeading: string;
  readonly means: string;
  readonly coverHeading: string;
  readonly coverIntro: string;
  readonly cover: readonly string[];
  readonly coverClosing: JobLinkedText;
  readonly statusHeading: string;
  readonly status: JobLinkedText;
  readonly ctaLead: string;
  readonly faqClosing: JobLinkedText;
}

/** The opening overview section of an active opening page. */
export interface JobAbout {
  readonly h2: string;
  readonly answer: string;
  readonly detailsHeading: string;
  readonly details: readonly { readonly term: string; readonly definition: string }[];
  readonly fitHeading: string;
  readonly fit: string;
  readonly statusHeading: string;
  readonly status: string;
  readonly howHeading: string;
  readonly steps: readonly (readonly JobFaqPart[])[];
  readonly applyNote: string;
}

/** The closing call to action: apply, call, or read the answers. */
export interface JobClosing {
  readonly eyebrow: string;
  readonly h2: string;
  readonly answer: string;
  readonly applyHeading: string;
  readonly applyText: string;
  readonly ctaLabel: string;
  readonly callHeading: string;
  readonly phoneLabel: string;
  readonly phoneHref: string;
  readonly hours: string;
  readonly since: string;
  readonly readHeading: string;
  readonly faqLabel: string;
  readonly faqHref: string;
  readonly jobsLabel: string;
  readonly jobsHref: string;
  readonly disclaimerLine: string;
  readonly network: JobLinkedText;
  readonly fleet: JobLinkedText;
}

/** A run of FAQ answer text: plain text, or text with a visible-only link. */
export type JobFaqPart =
  | string
  | { readonly text: string; readonly href: string };

export interface JobFaqItem {
  readonly question: string;
  /** Answer parts in order. Schema text is these parts joined, links stripped. */
  readonly answer: readonly JobFaqPart[];
}

export interface JobFaqGroup {
  readonly heading: string;
  readonly items: readonly JobFaqItem[];
}

/** The closing apply section of an active opening page. */
export interface JobApply {
  readonly eyebrow: string;
  readonly h2: string;
  readonly answer: string;
  readonly beforeHeading: string;
  readonly before: readonly string[];
  readonly beforeClosing: JobLinkedText;
  readonly ctaLabel: string;
  readonly ctaNote: string;
  readonly futureHeading: string;
  readonly future: JobLinkedText;
  readonly faqClosing: JobLinkedText;
}

/** One requirement line: a bold lead phrase plus a short explanation. */
export interface JobRequirementItem {
  readonly lead: string;
  readonly detail: string;
}

/** The Requirements section of an active opening page. */
export interface JobRequirements {
  readonly h2: string;
  /** Answer-first paragraph, shown emphasized under the H2. */
  readonly answer: string;
  readonly needHeading: string;
  readonly need: readonly JobRequirementItem[];
  readonly notNeededHeading: string;
  readonly notNeeded: readonly JobRequirementItem[];
  readonly preferredHeading: string;
  readonly preferred: string;
  readonly moreLink: { readonly label: string; readonly href: string };
  /** Schema-only values. Each restates the visible lists above. */
  readonly experienceRequirements: string;
  readonly qualifications: string;
}

/**
 * One active job record. Each active opening has its own stable record, slug,
 * and canonical path (docs/30-job-content-schema-specification.md sections 3
 * and 16). The visible job page, the jobs index, the careers landing page, the
 * sitemap, and the JobPosting schema all read from this one record, so the
 * schema description can never drift from the visible content.
 *
 * There is deliberately no closing date field. No closing date is published,
 * so `validThrough` is never emitted (docs/13-schema-markup-plan.md section 14).
 */
export interface JobRecord {
  readonly slug: string;
  /** Canonical path with leading and trailing slash. */
  readonly path: string;
  readonly title: string;
  readonly status: "active";
  /**
   * ISO date the opening was first posted, as the owner gave it. It must be
   * the real first-publication date (docs/13 section 14), never the date the
   * page was built.
   */
  readonly datePosted: string;
  /** Page title. The site template appends the brand name. */
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly heroScopeItems: readonly string[];
  /** Short fact lines reused on the landing page, index card, and job page. */
  readonly summaryFacts: readonly string[];
  /** Opening overview, rendered first. Also the start of the schema description. */
  readonly about: JobAbout;
  /** Closing call to action, rendered after the FAQ section. */
  readonly closing: JobClosing;
  /** Closing apply section, rendered after the Starting rate section. */
  readonly apply: JobApply;
  /** Starting rate section, rendered after the Work section. */
  readonly rate: JobRate;
  /** Work section, rendered directly after the Requirements section. */
  readonly work: JobWork;
  /** Requirements section, rendered directly after the first section. */
  readonly requirements: JobRequirements;
  /** No-guarantee disclosure shown beside every Apply action. */
  readonly disclaimer: string;
  readonly faqH2: string;
  readonly faqIntro: string;
  /** Single source for the visible accordion and the FAQPage JSON-LD. */
  readonly faq: readonly JobFaqGroup[];
}
