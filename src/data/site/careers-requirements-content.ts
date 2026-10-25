import { activeTechnicianJob, INSTALLER_NETWORK_PATH } from "@/data/jobs";
import {
  careersPageFaq,
  installerNetworkContent,
} from "@/data/site/careers-content";
import { careersHubPageContent as hub } from "@/data/site/careers-hub-content";
import type { Cta, FaqItem } from "@/types/content";

/**
 * Copy for `/careers/installer-requirements/`, the shared baseline
 * requirements page.
 *
 * Requirement wording is imported from `careersHubPageContent`
 * (careers-hub-content.ts) and the FAQ lists in careers-content.ts, never
 * retyped, so this page and the Installer Network page cannot drift. Only the
 * strings defined in this file are new wording: the intro, the "What We Ask of
 * Technicians" heading, the page and section labels, and the two card titles.
 * No new requirement is added (no tools list, insurance, schedule,
 * certification, or MECP). The age recommendation (`requirements.notes[0]` in
 * careers-hub-content.ts) is omitted pending counsel review (decision 0004).
 * No em dash appears in this file.
 */

/** Looks an approved FAQ item up by its question. Throws on drift at build time. */
function approvedFaq(
  list: readonly FaqItem[] | undefined,
  question: string,
): FaqItem {
  const item = list?.find((entry) => entry.question === question);
  if (!item) {
    throw new Error(`Approved FAQ item not found: "${question}"`);
  }
  return item;
}

/** Same question and answer, minus any link (the link would point at this page). */
function withoutLink({ question, answer }: FaqItem): FaqItem {
  return { question, answer };
}

const NO_GUARANTEE_NOTE = hub.requirements.notes.find((note) =>
  note.startsWith("Meeting these qualifications"),
);
if (!NO_GUARANTEE_NOTE) {
  throw new Error("Approved no-guarantee note not found in careers-hub-content.ts");
}

const openingCta: Cta = {
  label: "View the Current Opening",
  href: activeTechnicianJob.path,
  journey: "recruitment",
  event: "cta_careers_click",
};

const networkCta: Cta = {
  label: "Share Your Interest",
  href: INSTALLER_NETWORK_PATH,
  journey: "recruitment",
  event: "cta_installer_network_click",
};

const requirementsFaqItems: readonly FaqItem[] = [
  approvedFaq(careersPageFaq, "Is prior installation experience required?"),
  approvedFaq(careersPageFaq, "How much travel is required?"),
  withoutLink(approvedFaq(careersPageFaq, "What requirements must applicants meet?")),
  approvedFaq(installerNetworkContent.faq, "Do I need my own vehicle and tools?"),
];

export const careersRequirementsContent = {
  pathname: "/careers/installer-requirements/",
  metaTitle: "Mobile Installer Requirements",
  metaDescription:
    "Baseline requirements for Ultimate Fleet GPS mobile installers: license, vehicle, travel, smartphone, and background check. No guarantee of work or pay.",
  h1: "Mobile Installer Requirements",
  intro:
    "These are the baseline requirements for Ultimate Fleet GPS mobile installers, and they cover both the current openings and Installer Network registration. The current opening page lists its own exact requirements.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/careers/" },
    { label: "Installer Requirements" },
  ],
  openingCta,
  networkCta,

  requirements: {
    h2: hub.requirements.h2,
    callout: hub.requirements.callout,
    core: hub.requirements.core,
    preferred: hub.requirements.preferred,
    asks: {
      heading: "What We Ask of Technicians",
      items: hub.requirements.asks.items,
    },
    note: NO_GUARANTEE_NOTE,
  },

  pathways: {
    h2: "Current Opening or Installer Network",
    opening: {
      title: "Current Opening",
      body: approvedFaq(careersPageFaq, "Are there current installer openings?").answer,
      cta: openingCta,
    },
    network: {
      title: "Installer Network",
      body: approvedFaq(careersPageFaq, "What is the Installer Network?").answer,
      cta: networkCta,
    },
  },

  faq: {
    h2: "Installer Requirements Questions",
    items: requirementsFaqItems,
  },

  backLink: { label: "Back to Careers", href: "/careers/" },
} as const;
