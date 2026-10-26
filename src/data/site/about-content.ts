import { CAREERS_PATH } from "@/data/jobs/routes";
import { PHOTO_DOCUMENTATION_SENTENCE } from "@/data/site/quality-content";
import type { Cta } from "@/types/content";

/**
 * `/about/` content: the lean launch version.
 *
 * Scope decision: the project owner approved a short, factual About page for
 * launch on 2026-10-26 (docs/briefs/about-page-brief.md, decision 0016).
 * Leadership, history beyond the founding year, values, and proof are left out
 * on purpose because docs/01 section 4 lists founder, owner, and leadership as
 * "Unknown, do not publish", and sections 16.1 and 22 approve no credentials,
 * statistics, customers, or reviews. Add each back as its own section when an
 * approved fact exists.
 *
 * Every sentence below is approved wording, reused word for word where the
 * source marks it verbatim. Sources:
 *   Company description        docs/01 section 25 (verbatim)
 *   In business since 2011     docs/01 sections 4 and 25, claims row 11
 *   Technicians travel to the  docs/01 sections 5.3, 7.1, and 25 "Mobile-only
 *   customer, no walk-in       model"
 *   Serves customers           docs/01 section 8.2 (reach only)
 *   nationwide
 *   One vehicle to an entire   docs/01 section 11.1, claims row 15 (capacity,
 *   fleet                      a separate fact from reach, so its own sentence)
 *   Equipment and vehicle      docs/01 section 25 "Equipment and service
 *   scope                      scope" (verbatim)
 *   Independent contractors    docs/01 section 7.2, claims row 12 (general
 *                              terms only: no hours, pay, or work guarantee)
 *   Platform experience        docs/01 sections 14 and 25 (verbatim, experience
 *                              only, never a partnership)
 *   Photo documentation        docs/01 sections 17.1 and 25 (verbatim, imported
 *                              from quality-content.ts so it cannot drift)
 *   Pathway sentences          homepage-content.ts and /our-process/ (approved
 *                              wording reused)
 *
 * Not used on purpose: the Phoenix address (About is not an approved address
 * surface, docs/01 section 5.3), business hours (time zone unconfirmed,
 * section 5.4), the registered entity name or "LLC" (section 4.2), any
 * statistic, credential, review, guarantee, or response time. The shared
 * TrustStrip is not used here because it carries a claim flagged for review
 * (its "Coordinated across sites" item, claims row 34).
 *
 * No em dash appears in any string in this file. CLAUDE.md section 3.1 is
 * project wide.
 */

const QUOTE_CTA: Cta = {
  label: "Request an Installation Quote",
  href: "/contact/",
  journey: "commercial",
  event: "cta_quote_click",
};

const CAREERS_CTA: Cta = {
  label: "Learn About Installer Careers",
  href: CAREERS_PATH,
  journey: "recruitment",
  event: "cta_careers_click",
};

export const aboutContent = {
  h1: "About Ultimate Fleet GPS",
  // Rendered as an absolute title (no brand suffix) because it already names the brand.
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "About Ultimate Fleet GPS",
  metaDescription:
    "Ultimate Fleet GPS provides mobile fleet technology installation nationwide, in business since 2011. Learn who we serve and how we work.",

  hero: {
    eyebrow: "ABOUT US",
    lead: "Ultimate Fleet GPS provides mobile electronic equipment installation services for fleet and construction vehicles.",
    support: "In business since 2011, nationwide.",
    cta: QUOTE_CTA,
  },

  whoWeAre: {
    h2: "Mobile installation, delivered where your vehicles are",
    paragraphs: [
      "Ultimate Fleet GPS has been in business since 2011. Technicians travel to the customer's location, and there is no walk-in facility.",
      "Ultimate Fleet GPS serves customers nationwide. Projects range from one vehicle to an entire fleet.",
    ],
  },

  whatWeInstall: {
    h2: "What we install",
    intro:
      "Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment on fleet, commercial, and construction vehicles.",
    link: { label: "Explore all fleet installation services", href: "/services/" },
  },

  howWeWork: {
    h2: "How we work",
    paragraphs: [
      "Our technicians are independent contractors who travel directly to the customer's location to complete each installation.",
      "We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, and others our technicians already know.",
    ],
    callout: PHOTO_DOCUMENTATION_SENTENCE,
    links: [
      { label: "See our process", href: "/our-process/" },
      { label: "View coverage", href: "/coverage/" },
      { label: "Industries we support", href: "/industries/" },
    ],
  },

  pathways: {
    h2: "Choose the right path",
    fleet: {
      label: "Fleet operators",
      body: "Tell us about your equipment, vehicles, and project locations to request an installation quote.",
      cta: QUOTE_CTA,
    },
    installer: {
      label: "Installers",
      body: "Learn about current installer openings and the Installer Network.",
      cta: CAREERS_CTA,
    },
  },
} as const;
