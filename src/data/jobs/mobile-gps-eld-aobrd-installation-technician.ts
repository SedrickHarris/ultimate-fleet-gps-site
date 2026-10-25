import {
  APPLY_PATH,
  INSTALLER_NETWORK_PATH,
  JOBS_INDEX_PATH,
} from "@/data/jobs/routes";
import { footerBrandLines } from "@/data/navigation/site-navigation";
import { business, formatAddressInline } from "@/data/site/business";
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
// Hours and founding line are single-sourced from the footer brand lines.
const hours = footerBrandLines.find((line) => line.startsWith("Monday")) ?? "";
const since =
  footerBrandLines.find((line) => line.startsWith("In business")) ?? "";
const telephone = business.telephone;
const phoneHref = `tel:+1${telephone.replace(/\D/g, "")}`;
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
  datePosted: "2026-07-01",
  h1: "Mobile GPS, ELD, and AOBRD Installation Technician Opening (Nationwide, Independent Contractor)",
  metaTitle: "ELD & GPS Installation Technician Jobs | Ultimate Fleet GPS",
  metaDescription:
    "Contract ELD, GPS and AOBRD installer opening. Nationwide, no experience needed, training provided. $1,600/week starting rate, not guaranteed income.",
  intro:
    "Ultimate Fleet GPS has current openings for Mobile GPS, ELD, and AOBRD installation technicians. This is independent contractor field work, and applicants are accepted nationwide.",
  heroScopeItems: [
    "Independent contractor work",
    "Nationwide applicants accepted",
    "No prior experience required",
    "Training provided",
  ],
  summaryFacts,
  about: {
    h2: "Is This ELD and GPS Installer Opening Right for You?",
    answer: `Ultimate Fleet GPS is hiring independent contractor installation technicians to install and service GPS tracking, ELD, and AOBRD devices on commercial fleet vehicles. Applicants are accepted nationwide. No prior installation experience is required, and training is provided. The starting rate is ${rate}, which is not guaranteed income, and the role involves about ${travel}% travel.`,
    detailsHeading: "Opening details",
    details: [
      { term: "Work type", definition: "Independent contractor work, not employee employment", icon: "briefcase" },
      { term: "Location", definition: "Applicants accepted nationwide", icon: "map-pin" },
      { term: "Starting rate", definition: `${rate}, not guaranteed income`, icon: "banknote" },
      { term: "Travel", definition: `Approximately ${travel}% travel required, including state-to-state travel`, icon: "route" },
      { term: "Experience", definition: "No prior installation experience required, and training provided", icon: "graduation-cap" },
      { term: "You provide", definition: "Your own vehicle, tools, smartphone, and travel resources", icon: "wrench" },
      { term: "Requirements", definition: "Valid driver's license and background check", icon: "clipboard-check" },
      { term: "Closing date", definition: "No closing date currently published", icon: "calendar" },
    ],
    fitHeading: "Who this is a good fit for",
    fit: "This work suits mechanics, auto electricians, car audio and accessory installers, and career changers who are comfortable with hands-on work and frequent travel. Prior installation experience is not required because training is provided.",
    statusHeading: "Is this W-2 or 1099 work?",
    status: "This is independent contractor (1099-style) work, not employee employment.",
    howHeading: "How to apply",
    steps: [
      {
        parts: ["Review the ", { text: "requirements", href: "#requirements" }, "."],
        icon: "clipboard-list",
      },
      {
        parts: ["Submit your application using the apply button."],
        icon: "send",
      },
      {
        parts: ["Complete the background check if you move forward."],
        icon: "shield-check",
      },
    ],
    applyNote: "No closing date is currently published.",
  },
  work: {
    h2: "What an ELD and GPS Installation Technician Does",
    answer: `Ultimate Fleet GPS installation technicians install GPS tracking, ELD, and AOBRD equipment on fleet, commercial, and construction vehicles at customer locations. The work is field-based with approximately ${travel}% travel, including state-to-state. Every installation is photo documented, and contractors submit installation data and photos from a smartphone.`,
    vehiclesHeading: "Vehicles you will work on",
    // TODO confirm. Do not name specific vehicle types.
    vehicles:
      "You install equipment on fleet vehicles, commercial vehicles, and construction vehicles.",
    equipmentHeading: "Equipment you will install",
    equipment: [
      {
        term: "GPS tracker",
        definition: "A device that reports a vehicle's location.",
        icon: "map-pin",
        href: "/services/gps-tracking-installation/",
        linkLabel: "GPS tracking installation service",
      },
      {
        term: "ELD (electronic logging device)",
        definition:
          "A device that records a commercial driver's hours of service.",
        icon: "clock",
        href: "/services/eld-installation/",
        linkLabel: "ELD installation service",
      },
      {
        term: "AOBRD (automatic on-board recording device)",
        // TODO confirm scope of AOBRD work. Describe it only as equipment
        // technicians install and service. Do not claim new AOBRD installs
        // are required for compliance. No link: there is no AOBRD service page.
        definition: "An older type of logging device that ELDs replaced.",
        icon: "archive",
      },
    ],
    whereHeading: "Where the work happens",
    where: {
      before: `Installation is field work performed at customer locations. Technicians travel to the vehicles rather than working from a fixed shop. The role requires approximately ${travel}% `,
      linkText: "travel",
      href: "/coverage/",
      after: ", including state-to-state travel.",
    },
    stepsHeading: "What a typical installation looks like",
    // TODO confirm: steps 1-3 are inferred from the role and must be checked
    // against the real workflow before publishing. Add no timing, volume, or
    // tool details.
    steps: [
      {
        text: "Arrive at the customer location and confirm which vehicles and devices are being installed.",
        icon: "truck",
      },
      { text: "Install the GPS, ELD, or AOBRD equipment.", icon: "wrench" },
      {
        text: "Verify the device powers on, connects, and reports data.",
        icon: "activity",
      },
      { text: "Photograph the completed installation.", icon: "camera" },
      {
        text: "Submit the installation data and photos from your smartphone.",
        icon: "smartphone",
      },
    ],
    photoHeading: "Photo documentation",
    // TODO confirm. Do not tie photos to pay, deadlines, or quality standards.
    photo:
      "Every installation is photo documented. Contractors submit installation data and installation photos from a smartphone, which gives the customer a record of each completed installation.",
    expectHeading: "What to expect",
    expect: {
      before:
        "This is hands-on field work with a lot of time on the road, and some of it is away from home. Review the ",
      linkText: "requirements above",
      href: "#requirements",
      after: " to see whether the role fits your situation.",
    },
    responsibilities:
      "Install GPS tracking, ELD, and AOBRD equipment on fleet, commercial, and construction vehicles at customer locations; verify each device powers on, connects, and reports data; photograph every installation; submit installation data and photos from a smartphone.",
  },
  closing: {
    eyebrow: "Still have questions?",
    h2: "Apply or Call About the Installation Technician Opening",
    answer:
      "Ready to join Ultimate Fleet GPS as an installation technician? Complete the online application or call us with questions. Applicants are accepted nationwide, and no closing date is currently published.",
    applyHeading: "Apply online",
    applyText:
      "Complete the application for this ELD and GPS installation technician opening. Applicants are accepted nationwide.",
    // REPLACE: add final hero image here (WebP, about 1920px wide, under 250 KB).
    // Set to { src: "/images/careers/<file>.webp", width: 1920, height: 1080 }.
    // It is decorative (alt text is empty). Suggested alt if it ever carries
    // meaning: "Ultimate Fleet GPS technician installing a GPS and ELD device
    // in a commercial vehicle". While null the section is a solid dark surface.
    heroImage: null,
    callHeading: "Call with questions",
    phoneLabel: telephone,
    phoneHref,
    // TODO confirm the time zone for the hours. None is shown.
    hours,
    since,
    readHeading: "Read the answers first",
    faqLabel: "Read the opening FAQs",
    faqHref: "#opening-faq",
    jobsLabel: "See other current openings",
    jobsHref: JOBS_INDEX_PATH,
    disclaimerLine:
      "Applying does not guarantee contact, an interview, a contract, an assignment, a schedule, work volume, or pay.",
    network: {
      before: "Looking for future opportunities? ",
      linkText: "Join the Installer Network",
      href: INSTALLER_NETWORK_PATH,
      after: " (a separate registration, not an application).",
    },
    fleet: {
      before: "Need installation for your fleet? See our ",
      linkText: "ELD installation services",
      href: "/services/eld-installation/",
      after: ".",
    },
  },
  apply: {
    eyebrow: "Ready to Apply?",
    h2: "Apply for the ELD and GPS Installation Technician Opening",
    answer:
      "To apply for the Ultimate Fleet GPS installation technician opening, complete the online application. Applicants are accepted nationwide, and no closing date is currently published.",
    beforeHeading: "Before you apply",
    before: [
      { text: "A valid driver's license", icon: "id-card" },
      { text: "A smartphone", icon: "smartphone" },
      { text: "Your own vehicle, tools, and travel resources", icon: "truck" },
      {
        text: `Willingness to travel approximately ${travel}% of the time`,
        icon: "map-pin",
      },
    ],
    beforeClosing: {
      before: "See the full ",
      linkText: "requirements",
      href: "#requirements",
      after: " above.",
    },
    ctaNote: "No closing date is currently published.",
    faqLink: {
      label: "Read common questions about this role.",
      href: "/careers/#careers-faq-heading",
    },
    callLead: "Questions? Call",
    phoneLabel: telephone,
    phoneHref,
    futureHeading: "Looking for future opportunities?",
    future:
      "The Installer Network is a separate registration for future opportunities. It is not an application for this opening.",
    networkLabel: "Join the Installer Network",
  },
  rate: {
    h2: `Starting Rate for ELD and GPS Installation Technicians: ${rate.replace(" per week", "")} Per Week`,
    figure: rate.replace(" per week", ""),
    figureUnit: "per week",
    figureBadge: "Starting rate",
    disclosure: "Starting rate, not guaranteed income.",
    answer: `Ultimate Fleet GPS installation technicians start at ${rate} as independent contractors. This is a starting rate, not guaranteed income.`,
    howHeading: "How the starting rate works",
    // TODO confirm what the $1,600 per week is based on. Add nothing further
    // until confirmed.
    how: `The starting rate for this opening is ${rate}. It is a starting rate and not guaranteed income.`,
    meansHeading: 'What "not guaranteed income" means',
    // TODO confirm what actual payments depend on. Add nothing further until
    // confirmed.
    means:
      "A starting rate is not a promise of earnings. Your actual pay is not guaranteed, and the starting rate should not be read as a guarantee of income.",
    coverHeading: "What you provide as a contractor",
    coverIntro: "Contractors provide their own resources for this work.",
    // TODO confirm whether travel costs such as fuel, lodging, and meals are
    // reimbursed. Say nothing about reimbursement until confirmed.
    cover: [
      { text: "Your own personal vehicle", icon: "car" },
      { text: "Your own tools", icon: "wrench" },
      { text: "Your own smartphone", icon: "smartphone" },
      { text: "Your own travel resources", icon: "route" },
    ],
    coverClosing: {
      before: "Review the ",
      linkText: "requirements",
      href: "#requirements",
      after: " above for more detail.",
    },
    // Notice bar. Links to the Opening details heading in the About section.
    status: {
      before:
        "This is independent contractor work, not employee employment. See the ",
      linkText: "opening details above",
      href: "#opening-details",
      after: " for how this role is classified.",
    },
    // TODO add pay frequency and method block only after confirmed.
    ctaNote: "No closing date is currently published.",
    faqLink: {
      label: "Read common questions about this role.",
      href: "/careers/#careers-faq-heading",
    },
    callLead: "Questions? Call",
    phoneLabel: telephone,
    phoneHref,
    hours,
  },
  requirements: {
    h2: "Requirements for ELD and GPS Installation Technicians",
    answer: `To work as an installation technician with Ultimate Fleet GPS, you need a valid driver's license, the ability to pass a background check, a smartphone, your own vehicle and tools, and the ability to travel about ${travel}% of the time. No prior installation experience is required, and training is provided.`,
    needHeading: "What are the requirements to become an ELD and GPS installer?",
    need: [
      {
        lead: "A valid driver's license",
        // TODO confirm license and driving-record specifics. Add nothing further.
        detail:
          "You will drive to installation locations, including across state lines.",
        icon: "id-card",
      },
      {
        lead: "Passing a background check",
        // TODO confirm what the check covers and when it happens. Add nothing further.
        detail:
          "A background check is required to work with Ultimate Fleet GPS.",
        icon: "shield-check",
      },
      {
        lead: "A smartphone",
        // TODO confirm any OS or camera requirements. Add nothing further.
        detail:
          "You use it to submit installation data and installation photos for each completed installation.",
        icon: "smartphone",
      },
      {
        lead: "Your own personal vehicle, tools, and travel resources",
        // TODO confirm vehicle type and condition, tool list, and what counts
        // as travel resources. Add nothing further.
        detail:
          "Contractors provide their own vehicle, tools, and travel resources.",
        icon: "truck",
      },
      {
        lead: `Ability to travel approximately ${travel}% of the time`,
        // TODO confirm what a typical trip looks like. Add nothing further.
        detail: "The role includes state-to-state travel.",
        icon: "map-pin",
      },
    ],
    notNeededHeading: "Do I need experience to be an ELD installer?",
    notNeeded: [
      {
        lead: "No prior installation experience",
        detail: "You can apply without any installation experience.",
        icon: "wrench",
      },
      {
        lead: "Training is provided",
        // TODO confirm training format and length. Add nothing further.
        // /careers/installer-training/ has no page yet, so "We train you on
        // the work" is not linked. TODO link it when that page is built.
        detail: "We train you on the work.",
        icon: "graduation-cap",
      },
    ],
    preferredHeading: "Preferred qualifications (not required)",
    preferredBadge: "Optional",
    preferredItems: [
      "Related vehicle electrical, telematics, or mobile installation experience is welcome.",
      "MECP (Mobile Electronics Certification Program) certification is preferred.",
    ],
    preferredClosing: "Neither is required to apply.",
    ctaNote: "No closing date is currently published.",
    secondary: {
      label: "View full installer requirements",
      href: "/careers/installer-requirements/",
    },
    callLead: "Questions? Call",
    phoneLabel: telephone,
    phoneHref,
    hours,
    experienceRequirements: "No prior installation experience required",
    qualifications: `Valid driver's license; ability to pass a background check; smartphone for submitting installation data and photos; own vehicle, tools, and travel resources; ability to travel approximately ${travel}% of the time`,
  },
  disclaimer:
    "Applying does not guarantee contact, an interview, a contract, an assignment, a schedule, work volume, or pay. The starting rate is not guaranteed income.",
  faqH2: "ELD and GPS Installation Technician Opening: Frequently Asked Questions",
  faqIntro: `Answers to common questions about the Ultimate Fleet GPS installation technician opening: independent contractor work, approximately ${travel}% travel, and applicants accepted nationwide.`,
  faq: [
    {
      heading: "About the work",
      items: [
        {
          question: "What does an ELD and GPS installation technician do?",
          answer: [
            "Technicians install ",
            { text: "GPS", href: "/services/gps-tracking-installation/" },
            ", ",
            { text: "ELD", href: "/services/eld-installation/" },
            ", and AOBRD equipment on fleet, commercial, and construction vehicles at customer locations. Every installation is photo documented, and contractors submit installation data and installation photos from a smartphone.",
          ],
        },
        {
          question: "What is an ELD?",
          answer: [
            "An ",
            { text: "ELD", href: "/services/eld-installation/" },
            " is an electronic logging device. It records a commercial driver's hours of service. Ultimate Fleet GPS technicians install ELDs on fleet and commercial vehicles.",
          ],
        },
        {
          question: "What is an AOBRD?",
          // TODO confirm scope of AOBRD work. Do not claim new AOBRD installs
          // are required for compliance.
          answer: [
            "An AOBRD is an automatic on-board recording device, an older type of logging device that ELDs replaced. Technicians install and service AOBRD equipment as part of this opening.",
          ],
        },
        {
          question: "Is this a remote or work-from-home job?",
          answer: [
            `No. This is field work performed at customer locations, with approximately ${travel}% travel required, including state-to-state travel.`,
          ],
        },
        {
          question: "How much travel is required?",
          answer: [
            `Approximately ${travel}% `,
            { text: "travel", href: "/coverage/" },
            " is required, including state-to-state travel.",
          ],
        },
        {
          question: "Where is Ultimate Fleet GPS based?",
          // TODO confirm whether applicants report to this office. Add nothing
          // further.
          answer: [
            `Ultimate Fleet GPS has been in business since 2011. The corporate office is at ${formatAddressInline()}.`,
          ],
        },
      ],
    },
    {
      heading: "Pay and contractor status",
      items: [
        {
          question: "What is the starting rate?",
          answer: [
            `The starting rate is ${rate}. It is a starting rate, not guaranteed income.`,
          ],
        },
        {
          question: "Is this a 1099 or W-2 job?",
          // TODO confirm. Add nothing about taxes or benefits.
          answer: [
            "This is independent contractor work, not employee employment.",
          ],
        },
        {
          question: "Do I need my own vehicle and tools?",
          // TODO confirm tool list and vehicle details. Add nothing further.
          answer: [
            "Yes. Contractors provide their own vehicle, tools, smartphone, and travel resources.",
          ],
        },
        {
          question: "Does applying guarantee an interview, a contract, or pay?",
          answer: [
            "No. Applying does not guarantee contact, an interview, a contract, an assignment, a schedule, work volume, or pay. The starting rate is not guaranteed income.",
          ],
        },
      ],
    },
    {
      heading: "Requirements and applying",
      items: [
        {
          question: "Is prior installation experience required?",
          // /careers/installer-training/ has no page yet, so "training" is not
          // linked. TODO link it when that page is built.
          answer: [
            "No. No prior installation experience is required, and training is provided.",
          ],
        },
        {
          question: "Do I need a certification to install ELDs or GPS trackers?",
          answer: [
            "No. MECP (Mobile Electronics Certification Program) certification is preferred, but it is not required. Training is provided.",
          ],
        },
        {
          question: "Is a background check required?",
          // TODO confirm what the check covers and when it happens. Add nothing
          // further.
          answer: [
            "Yes. A valid driver's license and a background check are required for this opening.",
          ],
        },
        {
          question: "Are applicants accepted from every state?",
          answer: [
            "Yes. Applicants are accepted nationwide. That does not mean an opening is located in any particular market.",
          ],
        },
        {
          question: "Is there a closing date?",
          answer: ["No closing date is currently published."],
        },
        {
          question:
            "How do I apply, and how is that different from the Installer Network?",
          answer: [
            "Use the ",
            { text: "application page", href: APPLY_PATH },
            " to apply for this opening. The ",
            { text: "Installer Network", href: INSTALLER_NETWORK_PATH },
            " is a separate registration for future opportunities and is not an application.",
          ],
        },
      ],
    },
  ],
};
