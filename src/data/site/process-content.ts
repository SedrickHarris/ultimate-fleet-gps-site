import { PHOTO_DOCUMENTATION_SENTENCE } from "@/data/site/quality-content";

/**
 * `/our-process/` content.
 *
 * Working brief: the stakeholder-supplied page brief pasted 2026-09-24. No page
 * brief exists in docs/briefs/. Approved by the user that day: keep the H1
 * "Our Process" (no doc records approval of that label, so it is flagged in
 * docs/stakeholder-confirmation-questions.md), and add the confirmed business
 * hours and "in business since 2011" as approved facts.
 *
 * SOURCE-OF-TRUTH FLAG: docs/01-business-source-of-truth.md section 17 lists a
 * ten-step workflow marked "Inferred from recruiting duties". None of it is
 * confirmed for customer-facing copy. Section 17.1 confirms exactly one
 * process fact: automatic photo documentation delivery. This page is therefore
 * a commercial intake guide, not a workflow. It makes no claim about quote
 * response time, scheduling, dispatch, staging, testing, validation, QA,
 * completion reporting, compliance, or certification, and it presents no
 * numbered steps. The four inquiry items are information categories, not a
 * sequence.
 *
 * Statements reused word for word: the photo documentation sentence
 * (section 25, claims inventory row 10), the nationwide statement (section
 * 8.2), and the vehicle-context clarification (claims rows 26 and 39). Hours
 * and founding year: sections 5.4 and 25.
 */

const NATIONWIDE_SENTENCE =
  "Nationwide mobile installation service, delivered at the customer's location.";

const CLARIFICATION =
  "Vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type.";

export const ourProcessContent = {
  h1: "Our Nationwide Fleet Installation Process",
  // The layout title template appends " | Ultimate Fleet GPS".
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "How Mobile Installation Works",
  metaDescription:
    "See what to include in a quote request and how nationwide mobile installation works at your location, with automatic photo documentation.",

  hero: {
    eyebrow: "NATIONWIDE MOBILE FLEET INSTALLATION",
    support: [
      "Start by telling us about your equipment, vehicle count, project locations, and preferred timing. Ultimate Fleet GPS reviews that information so the request can be understood and next steps can be discussed.",
      "Ultimate Fleet GPS provides nationwide mobile installation service, delivered at the customer's location, for one vehicle or an entire fleet.",
    ],
    cta: {
      label: "Request an Installation Quote",
      href: "#request-quote",
      journey: "commercial",
      event: "cta_quote_click",
    },
    anchor: {
      label: "What to include in your quote request",
      href: "#quote-request-context",
    },
  },

  inquiry: {
    h2: "What to Include in Your Installation Quote Request",
    // Information categories only. Never numbered, never labeled as steps.
    items: [
      {
        key: "equipment",
        title: "Equipment",
        body: "Tell us about the equipment involved in your project.",
      },
      {
        key: "vehicle-count",
        title: "Vehicle count",
        body: "Share the number of vehicles in your request.",
      },
      {
        key: "project-locations",
        title: "Project locations",
        body: "Describe the relevant project locations.",
      },
      {
        key: "preferred-timing",
        title: "Preferred timing",
        body: "Let us know your preferred timing.",
      },
    ],
    support:
      "This information helps describe the commercial installation context for your request.",
  },

  scope: {
    h2: "Commercial Fleet Installation Context",
  },

  vehicles: {
    h2: "Installation Context for Commercial Vehicles",
    lead: "Common project contexts include work vans, service trucks, utility vehicles, heavy-duty trucks, fleet vehicles, commercial vehicles, and construction vehicles.",
    clarification: CLARIFICATION,
    nationwide: {
      heading: "Mobile Installation at Your Project Location",
      sentence: NATIONWIDE_SENTENCE,
      // Confirmed facts (docs/01 sections 5.4 and 25). Text only, no map.
      facts: [
        "Monday through Friday, 8:00 AM to 6:00 PM",
        "In business since 2011",
      ],
    },
  },

  documentation: {
    h2: "Installation Documentation",
    sentence: PHOTO_DOCUMENTATION_SENTENCE,
    // Static labels that repeat approved language only. Not a portal or report.
    panelLabels: [
      "Installation documentation",
      "Photo documented",
      "Provided automatically",
    ],
  },

  questions: {
    h2: "Questions About the Quote Request",
    items: [
      {
        question:
          "What information should I include when requesting an installation quote?",
        answer:
          "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
      },
      {
        question:
          "Where does Ultimate Fleet GPS provide installation service?",
        answer:
          "Ultimate Fleet GPS provides nationwide mobile installation service, delivered at the customer's location.",
      },
      {
        question:
          "What types of commercial installation contexts can be discussed?",
        answer:
          "Approved service contexts include fleet telematics installation, GPS tracking installation, ELD installation, fleet dashcam and video recorder installation, and fleet rollout installation services.",
      },
      {
        question:
          "Can Ultimate Fleet GPS support one vehicle or an entire fleet?",
        answer:
          "Fleet rollout installation services can be discussed for one vehicle or an entire fleet, including multiple project locations.",
      },
      {
        question: "What documentation is provided after installation?",
        answer: PHOTO_DOCUMENTATION_SENTENCE,
      },
      {
        question: "Does ELD installation include compliance or legal advice?",
        answer:
          "No. ELD content describes physical installation context and does not represent compliance or legal advice.",
      },
      {
        question:
          "Do vehicle examples guarantee every hardware and vehicle combination?",
        answer: `No. ${CLARIFICATION}`,
      },
    ],
  },

  quote: {
    h2: "Request an Installation Quote",
    intro:
      "Tell us about your equipment or service needs, vehicle count, project locations, and preferred timing. These details help our team review your installation request and discuss next steps.",
    // Field labels, payload, validation, and analytics are unchanged.
    formCopy: {
      serviceNeed: "Equipment or service needed",
      submit: "Submit Installation Request",
    },
  },

  related: {
    h2: "Related Resources",
    links: [
      { label: "Nationwide fleet installation coverage", href: "/coverage/" },
      { label: "All installation services", href: "/services/" },
    ],
  },
} as const;
