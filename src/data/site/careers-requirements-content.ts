import {
  activeTechnicianJob,
  APPLY_PATH,
  INSTALLER_NETWORK_PATH,
  JOBS_INDEX_PATH,
} from "@/data/jobs";
import { careersPageFaq } from "@/data/site/careers-content";
import { footerBrandLines } from "@/data/navigation/site-navigation";
import { business } from "@/data/site/business";
import { careersHubPageContent as hub } from "@/data/site/careers-hub-content";
import type { Cta, FaqItem, RichFaqItem } from "@/types/content";

/**
 * Copy for `/careers/installer-requirements/`, the shared baseline
 * requirements page.
 *
 * Requirement wording is imported from `careersHubPageContent`
 * (careers-hub-content.ts), never retyped, so this page and the Installer Network page cannot drift. Only the
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

const jobPath = activeTechnicianJob.path;
const hours = footerBrandLines.find((line) => line.startsWith("Monday")) ?? "";

/**
 * One source for the visible FAQ and its FAQPage JSON-LD. Answers are parts so
 * several links can sit in a sentence; the schema strips the links.
 */
const requirementsFaqItems: readonly RichFaqItem[] = [
  {
    question: "Is prior installation experience required?",
    answer: [
      "No. Prior installation experience is not required for the current Mobile GPS, ELD and AOBRD Installation Technician opening, and training is provided. Applicants who can follow a checklist, work carefully on commercial vehicles, and document each installation with photos are encouraged to apply.",
    ],
  },
  {
    question:
      "Are Installer Network technicians independent contractors or employees?",
    answer: [
      "Installer Network technicians work as independent contractors, not employees. Contractors provide their own vehicle, tools, smartphone, and travel resources, and complete installation assignments for Ultimate Fleet GPS customers. Review the ",
      { text: "current opening", href: jobPath },
      " for full details on the contractor arrangement.",
    ],
  },
  {
    question: "What are the requirements to become a GPS and ELD installer?",
    answer: [
      "Applicants need a valid driver's license, a successful background check, and a smartphone for submitting installation data and photos. As independent contractors, Installer Network technicians also supply their own personal vehicle, tools, and travel resources, and must be able to travel approximately 75% of the time.",
    ],
  },
  {
    question: "How much travel does an installer position require?",
    answer: [
      "Approximately 75% travel is required, including state-to-state travel. Installers travel to customer fleet locations to complete installations, and contractors cover their own travel resources, so plan for extended time away from home before applying. See ",
      { text: "current coverage areas", href: "/coverage/" },
      " and the ",
      { text: "full opening details", href: jobPath },
      ".",
    ],
  },
  {
    question: "What tools and equipment do I need to provide?",
    answer: [
      "Independent contractors provide their own reliable personal vehicle, installation tools, travel resources, and a smartphone. The smartphone is used to submit installation data and photos for each job. A valid driver's license is also required. The opening page lists the full requirements.",
    ],
  },
  {
    question: "What types of devices will I install?",
    answer: [
      "Installers work on commercial fleet technology, including ",
      { text: "GPS tracking", href: "/services/gps-tracking-installation/" },
      ", ",
      { text: "ELD", href: "/services/eld-installation/" },
      " and AOBRD devices, and ",
      {
        text: "dashcams and cameras",
        href: "/services/dashcam-camera-installation/",
      },
      ". Training is provided on the installation process, so prior experience with these specific devices is not required.",
    ],
  },
  {
    question: "How do I apply to become an installer?",
    // "Arizona time" and "before assignments begin" were left out: neither is
    // supported by the opening page or the footer. TODO restore the time zone
    // and background check timing once confirmed.
    answer: [
      "Submit an application through the ",
      { text: "Apply page", href: APPLY_PATH },
      " or review the ",
      { text: "current openings", href: JOBS_INDEX_PATH },
      ` first. Questions can go to ${business.telephone}, ${hours}. Applicants must pass a background check.`,
    ],
  },
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
