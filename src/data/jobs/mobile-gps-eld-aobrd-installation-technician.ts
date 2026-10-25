import { APPLY_PATH } from "@/data/jobs/routes";
import { business } from "@/data/site/business";
import type { JobRecord } from "@/types/jobs";

/**
 * The active Mobile GPS, ELD, and AOBRD installation technician opening.
 *
 * Every fact comes from `business.recruitment` (docs/01 section 33, approved
 * 2026-09-19). Deliberately absent: a closing date, a count of openings, a
 * named market or job location, MECP or a platform as a requirement, shifts,
 * days, hours, benefits, expense reimbursement, and any claim of employment,
 * guaranteed income, guaranteed hours, or a guaranteed assignment. The
 * corporate office is not described here as a work location.
 *
 * No em dash appears in this file.
 */
const { recruitment } = business;
const rate = recruitment.startingRate.display;
const travel = recruitment.travel.approximatePercent;

const summaryFacts = [
  "Independent contractor work, not employee employment",
  "Applicants accepted nationwide",
  `Starting rate of ${rate}, not guaranteed income`,
  `Approximately ${travel}% travel required, including state-to-state travel`,
  "No prior installation experience required, and training provided",
  "Contractors provide their own vehicle, tools, smartphone, and travel resources",
  "Valid driver's license and background check required",
  "No closing date currently published",
] as const;

export const activeTechnicianJob: JobRecord = {
  slug: "mobile-gps-eld-aobrd-installation-technician",
  path: "/careers/mobile-gps-eld-aobrd-installation-technician/",
  title: recruitment.roleTitle,
  status: "active",
  // Provided by the owner as 07/01/2026, read as US format (July 1, 2026).
  // Confirm it is not 7 January 2026 (day first) before launch.
  datePosted: "2026-07-01",
  metaDescription: `Current opening for Mobile GPS, ELD, and AOBRD installation technicians. Independent contractor work, nationwide applicants accepted, no prior installation experience required, and training provided. Starting rate ${rate}.`,
  intro:
    "Ultimate Fleet GPS has current openings for Mobile GPS, ELD, and AOBRD installation technicians. This is independent contractor field work, and applicants are accepted nationwide.",
  heroScopeItems: [
    "Independent contractor work",
    "Nationwide applicants accepted",
    "No prior experience required",
    "Training provided",
  ],
  summaryFacts,
  sections: [
    {
      h2: "About This Opening",
      body: [
        "Ultimate Fleet GPS has current openings for Mobile GPS, ELD, and AOBRD installation technicians. Applicants are accepted nationwide, and no closing date is currently published.",
        "This is independent contractor work, not employee employment.",
      ],
      lists: [{ heading: "Opening details", items: summaryFacts }],
    },
    {
      h2: "Requirements",
      body: [],
      lists: [
        {
          heading: "What you need",
          items: [
            "A valid driver's license",
            "Passing a background check",
            "A smartphone for submitting installation data and installation photos",
            "Your own personal vehicle, tools, and travel resources",
            `Ability to travel approximately ${travel}% of the time, including state-to-state travel`,
          ],
        },
        {
          heading: "What you do not need",
          items: [
            "No prior installation experience is required",
            "Training is provided",
          ],
        },
      ],
      footnotes: [
        "Related vehicle electrical, telematics, or mobile installation experience is welcome, and MECP certification is preferred, but neither is required.",
      ],
      links: [
        {
          label: "See all installer requirements",
          href: "/careers/installer-requirements/",
        },
      ],
    },
    {
      h2: "The Work",
      body: [
        `Technicians install GPS, ELD, and AOBRD equipment on fleet, commercial, and construction vehicles at customer locations. Installation is field work, and approximately ${travel}% travel is required, including state-to-state travel.`,
        "Every installation is photo documented. Contractors submit installation data and installation photos from a smartphone.",
      ],
    },
    {
      h2: "Starting Rate",
      body: [
        `The starting rate for this opening is ${rate}. This is a starting rate, not guaranteed income.`,
      ],
    },
  ],
  disclaimer:
    "Applying does not guarantee contact, an interview, a contract, an assignment, a schedule, work volume, or pay. The starting rate is not guaranteed income.",
  faq: [
    {
      question: "Is prior installation experience required?",
      answer:
        "No. No prior installation experience is required, and training is provided.",
    },
    {
      question: "Is this employee employment?",
      answer:
        "No. This is independent contractor work, not employee employment.",
    },
    {
      question: "What is the starting rate?",
      answer: `The starting rate is ${rate}. It is a starting rate, not guaranteed income.`,
    },
    {
      question: "How much travel is required?",
      answer: `Approximately ${travel}% travel is required, including state-to-state travel.`,
    },
    {
      question: "What do I need to provide?",
      answer:
        "Contractors provide their own vehicle, tools, smartphone, and travel resources. A valid driver's license and a background check are required.",
    },
    {
      question: "Are applicants accepted from every state?",
      answer:
        "Applicants are accepted nationwide. That does not mean an opening is located in any particular market.",
    },
    {
      question: "Is there a closing date?",
      answer: "No closing date is currently published.",
    },
    {
      question:
        "How do I apply, and how is that different from the Installer Network?",
      answer:
        "Use the application page to apply for this opening. The Installer Network is a separate registration for future opportunities and is not an application.",
      link: { label: "Go to the application page", href: APPLY_PATH },
    },
  ],
};
