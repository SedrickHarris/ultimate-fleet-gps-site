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
  label: "Join the Installer Network",
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
    question: "What are the requirements to become a GPS and ELD installer?",
    answer: [
      "To work as an installation technician with Ultimate Fleet GPS, you need a valid driver's license, the ability to pass a background check, a smartphone, your own vehicle and tools, and the ability to travel about 75% of the time. No prior installation experience is required, and training is provided.",
    ],
  },
  {
    question: "Is prior installation experience required?",
    answer: [
      "No. Prior installation experience is not required for the current Mobile GPS, ELD, and AOBRD Installation Technician opening, and training is provided. The work suits mechanics, auto electricians, car audio and accessory installers, and career changers who are comfortable with hands-on work and frequent travel.",
    ],
  },
  {
    question: "Are ELD and GPS installers independent contractors or employees?",
    answer: [
      "Installers for this opening work as independent contractors, not employees. This is independent contractor (1099-style) work. Review the ",
      { text: "current opening", href: jobPath },
      " for how the role is classified and what contractors provide.",
    ],
  },
  {
    question: "What vehicle, tools, and equipment do I need to provide?",
    answer: [
      "You provide your own personal vehicle, tools, smartphone, and travel resources. The smartphone is used to submit installation data and photos for each completed installation. A valid driver's license is also required.",
    ],
  },
  {
    question: "How much travel does an installer position require?",
    answer: [
      "Approximately 75% travel is required, including state-to-state travel. Installation is field work at customer locations, so technicians travel to the vehicles rather than working from a fixed shop. Some of that time is away from home. See ",
      { text: "current coverage areas", href: "/coverage/" },
      ".",
    ],
  },
  {
    question: "What types of devices will I install?",
    answer: [
      "Technicians install ",
      { text: "GPS tracking", href: "/services/gps-tracking-installation/" },
      ", ",
      { text: "ELD", href: "/services/eld-installation/" },
      ", and AOBRD equipment on fleet, commercial, and construction vehicles. A GPS tracker reports a vehicle's location, an ELD records a commercial driver's hours of service, and an AOBRD is an older logging device that ELDs replaced. Training is provided.",
    ],
  },
  {
    question: "Does applying guarantee a position?",
    answer: [
      "No. Applying does not guarantee contact, an interview, a contract, an assignment, a schedule, work volume, or pay. The starting rate is not guaranteed income.",
    ],
  },
  {
    question: "How do I apply to become an installer?",
    answer: [
      "Complete the online application on the ",
      { text: "Apply page", href: APPLY_PATH },
      " or review the ",
      { text: "current openings", href: JOBS_INDEX_PATH },
      ` first. Applicants are accepted nationwide, and no closing date is currently published. Questions can go to ${business.telephone}, ${hours}. The background check is completed if you move forward.`,
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
      badge: "Accepting applications",
      label: "Current Opening",
      question: "Is Ultimate Fleet GPS hiring ELD and GPS installers?",
      ariaLabel:
        "View the Current Opening: job details for the Mobile GPS, ELD, and AOBRD installation technician opening",
      body: approvedFaq(careersPageFaq, "Are there current installer openings?").answer,
      cta: openingCta,
    },
    network: {
      badge: "Not an application",
      label: "Installer Network",
      question: "What is the Installer Network?",
      ariaLabel:
        "Join the Installer Network: registration for future opportunities, not an application for the current opening",
      body: approvedFaq(careersPageFaq, "What is the Installer Network?").answer,
      cta: networkCta,
    },
  },

  faq: {
    h2: "ELD and GPS Installer Requirements: Frequently Asked Questions",
    items: requirementsFaqItems,
  },

  backLink: { label: "Back to Careers", href: "/careers/" },
} as const;
