/**
 * `/quality-safety/` content.
 *
 * Working brief: the stakeholder-supplied page brief pasted 2026-09-24. No
 * page brief exists in docs/briefs/. Approved by the user that day: the
 * "Quality & Safety" H1 (matches the route and footer label), the replaced
 * meta description, the exact photo-documentation sentence, and the nationwide
 * statement (docs/01 line 1017).
 *
 * SOURCE-OF-TRUTH FLAG: docs/01 section 21 says no company-wide safety
 * program, regulatory compliance statement, insurance coverage, bonding
 * status, or formal installation standard is approved, and section 16.1 is a
 * hard client decision against certifications, licenses, insurance, and
 * placeholders for them. This page is therefore a controlled scope and
 * documentation page. It makes no claim about quality assurance, safety
 * protocols, training, inspection, testing, validation, warranties, or
 * outcomes. The only proof-oriented statement is the approved
 * photo-documentation sentence (docs/01 section 25, claims inventory row 10),
 * used word for word.
 *
 * Service cards and vehicle examples are read from service-pages-content.ts so
 * they cannot drift from the service pages. Q&A answers are user-supplied and
 * kept as written.
 */

export const PHOTO_DOCUMENTATION_SENTENCE =
  "Every installation is photo documented, and you'll receive that documentation automatically.";

const NATIONWIDE_SENTENCE =
  "Nationwide mobile installation service, delivered at the customer's location.";

export const qualitySafetyContent = {
  h1: "Quality & Safety",
  // The layout title template appends " | Ultimate Fleet GPS".
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Installation Quality and Safety",
  metaDescription:
    "How we approach installation quality and safety on commercial vehicles. Every installation is photo documented. Request a quote.",

  hero: {
    eyebrow: "INSTALLATION QUALITY & SAFETY",
    paragraphs: [
      "Ultimate Fleet GPS provides on-site fleet-electronics installation for commercial and fleet vehicles across the United States. Before work begins, project details help define the approved equipment, vehicle types, installation scope, locations, and schedule.",
      "Installers follow the approved project requirements and document completed work. Photo documentation gives fleet teams a record of the installation for review and project coordination.",
    ],
    cta: {
      label: "Request an Installation Quote",
      href: "#request-quote",
      journey: "commercial",
      event: "cta_quote_click",
    },
    qualifier:
      "Tell us which equipment needs to be installed, how many vehicles are involved, where the vehicles will be available, and your preferred timing.",
    documentationLine:
      "Installation documentation is provided as part of the project closeout.",
  },

  scope: {
    // Accessible heading only; the strip shows three short static cards.
    accessibleHeading: "Scope of this page",
    cards: [
      {
        title: "Commercial installation focus",
        body: "Information on this page is intended for commercial vehicle installation projects.",
      },
      {
        title: "Mobile project location",
        body: NATIONWIDE_SENTENCE,
      },
      {
        title: "Installation documentation",
        body: PHOTO_DOCUMENTATION_SENTENCE,
      },
    ],
  },

  documentation: {
    h2: "Installation Documentation",
    sentence: PHOTO_DOCUMENTATION_SENTENCE,
    link: { label: "Request an Installation Quote", href: "#request-quote" },
    // Static labels that repeat approved language only. Not a portal mockup.
    panelLabels: [
      "Installation documentation",
      "Photo documented",
      "Provided automatically",
    ],
  },

  services: {
    h2: "Commercial Installation Context",
    intro:
      "These pages describe the physical installation context for each approved service. ELD content does not represent compliance or legal advice.",
    // Cards come from the homepage whatWeInstall data (business.serviceTypes).
  },

  vehicles: {
    h2: "Installation Context for Commercial Vehicles",
    lead: "Ultimate Fleet GPS provides mobile installation service for approved fleet-technology projects involving commercial vehicles. Common project contexts include work vans, service trucks, utility vehicles, heavy-duty trucks, fleet vehicles, and construction vehicles.",
    body: "The vehicle type and approved equipment help define the installation scope for each project. Share the vehicle details and equipment requirements when requesting a quote so the project can be reviewed in context.",
    note: "These vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type.",
  },

  projectLocation: {
    h2: "Mobile Installation at Your Project Location",
    body: [
      "Mobile installation lets fleet teams coordinate equipment installation at a customer-designated location. Ultimate Fleet GPS provides nationwide on-site installation service for commercial vehicles.",
      "Before scheduling, share the equipment being installed, the vehicle types and number of vehicles, the project locations, and your preferred timing. These details help define the installation scope and support coordination for your project.",
    ],
  },

  projectInfo: {
    h2: "Installation Scope and Project Information",
    body: "Ultimate Fleet GPS provides mobile installation service for approved commercial fleet-technology installation contexts. Details about equipment, vehicle count, project locations, and preferred timing can be shared when requesting an installation quote.",
    discussHeading: "What we can discuss",
    discussItems: [
      "Equipment",
      "Vehicle count",
      "Project locations",
      "Preferred timing",
    ],
  },

  questions: {
    h2: "Questions About Installation Documentation and Scope",
    items: [
      {
        question:
          "What information should I include when requesting a fleet installation quote?",
        answer:
          "Share the equipment to be installed, the number and types of vehicles, project locations, and your preferred timing. These details help Ultimate Fleet GPS understand the requested project scope.",
      },
      {
        question: "Where does Ultimate Fleet GPS provide service?",
        answer:
          "Ultimate Fleet GPS provides nationwide mobile installation service at customer locations. Share the project locations when requesting a quote so the service requirements can be reviewed.",
      },
      {
        question:
          "What types of fleet equipment can Ultimate Fleet GPS install?",
        answer:
          "Installation services include GPS tracking, ELD, AOBRD, TPMS, fleet dashcams, and fleet management equipment. The equipment requested and vehicle details help define the installation scope for each project.",
      },
      {
        question:
          "Can the same equipment be installed in every type of commercial vehicle?",
        answer:
          "Not necessarily. Work vans, service trucks, utility vehicles, heavy-duty trucks, fleet vehicles, and construction vehicles are examples of common project contexts. Compatibility depends on the equipment and vehicle; not every hardware category is installed in every vehicle type.",
      },
      {
        question: "What happens during an on-site fleet installation project?",
        answer:
          "Installation work takes place at a customer-designated location. When requesting a quote, provide the equipment, vehicle count and types, project locations, and preferred timing so the project can be reviewed and coordinated.",
      },
      {
        question: "What installation documentation is provided after the work?",
        answer:
          "Documentation practices may depend on the project. Ask about documentation when requesting a quote so the expected records can be confirmed for your installation.",
      },
      {
        question: "Does Ultimate Fleet GPS provide ELD compliance or legal advice?",
        answer:
          "No. Information about ELD installation describes the physical installation context. It does not provide compliance guidance or legal advice. For compliance questions, consult the relevant regulator or a qualified advisor.",
      },
      {
        question: "How do I request an installation quote?",
        answer:
          "Use the installation quote form and include the equipment, vehicle count and types, project locations, and preferred timing. Ultimate Fleet GPS can review those details to understand the project request.",
      },
    ],
  },

  quote: {
    h2: "Request an Installation Quote",
    intro:
      "Tell us about your equipment or service needs, the number of vehicles or assets, project locations, and preferred timing. These details help us understand the installation request and review its scope.",
    detail:
      "Use the project description field to share additional context, such as vehicle types or other details that may help us assess your request.",
    // Field labels, payload, validation, and analytics are unchanged.
    formCopy: {
      serviceNeed: "Equipment or service needed",
      submit: "Submit Installation Request",
    },
  },

  related: {
    h2: "Related Resources",
    // The six service cards come from the homepage whatWeInstall data
    // (business.serviceTypes); only the remaining text links live here.
    links: [
      { label: "Nationwide fleet installation coverage", href: "/coverage/" },
      { label: "Contact Ultimate Fleet GPS", href: "/contact/" },
    ],
  },
} as const;
