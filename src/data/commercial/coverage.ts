import { INSTALLER_NETWORK_PATH } from "@/data/jobs/routes";
import { careersHubPageContent } from "@/data/site/careers-hub-content";
import {
  getServiceCard,
  SERVICE_CARD_ORDER,
  vehicleContext,
} from "@/data/site/service-pages-content";
import type { CoverageData } from "@/types/content";

/**
 * Reusable data model for coverage content, current and future.
 *
 * `nationwide` is the only populated key in Sprint 2 - it is the single
 * canonical `/coverage/` page (Tier 0 of the roadmap in the approved plan).
 * `regions`, `states`, and `metros` stay empty objects until Sprint 3+ meets
 * the plan's evidence-gating rubric (existing work/relationships, technician
 * capacity, fleet density, search/lead demand, service relevance, unique
 * proof availability). Route generation reads only populated keys, so these
 * empty objects publish zero routes - see src/app/coverage/ (Sprint 3+ will
 * add src/app/coverage/[state]/ etc. reading from `states`).
 *
 * Every claim below is gated against docs/_claims-inventory.md and
 * docs/01-business-source-of-truth.md section 25 (approved factual wording).
 * No `Service.areaServed` state enumeration is derived from this data in
 * Sprint 2 - see src/lib/schema/webpage.ts, used (not servicePageSchema) for
 * `/coverage/`.
 *
 * Service names, descriptions, and routes are read from the approved service
 * cards (service-pages-content.ts), never retyped here, so they cannot drift
 * from the service pages. The vehicle examples and their clarification come
 * from the same shared source.
 */

/**
 * The two approved Installer Network disclosure sentences, read from the
 * Installer Network page content so they cannot drift. Fails the build if the
 * source changes shape.
 */
const [, expressionOfInterest, contractor] = careersHubPageContent.answer.body;
if (!expressionOfInterest || !contractor) {
  throw new Error("Installer Network disclosure source changed shape.");
}
const NETWORK_DISCLOSURE = { expressionOfInterest, contractor };

const SERVICE_CARDS = SERVICE_CARD_ORDER.map((slug) => getServiceCard(slug));
const FLEET_ROLLOUT_CARD = getServiceCard("fleet-rollouts");

const AVAILABILITY_SENTENCE =
  "Share your project details so Ultimate Fleet GPS can determine whether the request fits the available service context.";

/** "a, b, and c" for three or more items; "a and b" for two. */
function joinWithAnd(items: readonly string[]): string {
  const last = items[items.length - 1] ?? "";
  if (items.length < 2) return last;
  const head = items.slice(0, -1);
  return head.length === 1 ? `${head[0]} and ${last}` : `${head.join(", ")}, and ${last}`;
}

const SERVICE_TITLE_LIST = joinWithAnd(SERVICE_CARDS.map((card) => card.title));
const VEHICLE_EXAMPLE_LIST = joinWithAnd(
  vehicleContext.examples.map((example) => example.toLowerCase()),
);

export const coverage = {
  nationwide: {
    h1: "Nationwide Mobile Fleet Installation Coverage",
    // Meta title and description: Oct 26 2026 metadata audit approval.
    metaTitle: "Nationwide Installation Coverage",
    metaDescription:
      "We travel to fleets across the United States. Check coverage, then share your locations, vehicle count, and timing to request a quote.",
    hero: {
      eyebrow: "Nationwide Mobile Installation Context",
      paragraphs: [
        "Nationwide mobile installation service, delivered at the customer's location.",
        "Tell us about your equipment, vehicle count, project locations, and preferred timing to discuss your installation request.",
      ],
      primaryCta: {
        label: "Request an Installation Quote",
        href: "#request-quote",
        journey: "commercial",
        event: "cta_quote_click",
      },
      callLabel: "Call Ultimate Fleet GPS",
      // "In business since 2011" is confirmed (docs/_claims-inventory.md row 11),
      // but a one-item trust row reads as isolated, so no trust row renders.
    },
    // Stakeholder-supplied copy (2026-09-19, decision 0007 item 9). It restores
    // the scheduling and review wording that docs/01 sections 8.3 and 17 still
    // list as unconfirmed, so keep this text exactly as supplied.
    introSection: {
      h2: "Nationwide Mobile Installation Support for Fleet and Commercial Vehicles",
      body: [
        "Ultimate Fleet GPS provides nationwide mobile fleet installation services for fleet operators, commercial vehicle owners, and construction companies. Installation support is coordinated at the customer's approved location, including fleet yards, commercial vehicle sites, construction operations, and other project locations.",
        "Our installation scope includes GPS tracking systems, ELD and AOBRD equipment, fleet dashcams, TPMS, and other commercial vehicle electronics. Projects can range from a single vehicle to a larger fleet deployment, depending on the equipment, vehicle types, site conditions, and project requirements.",
        "Mobile coordination helps reduce the need to move vehicles to a walk-in facility. Project details, equipment requirements, scheduling, and site logistics are reviewed before installation so the work can be organized around the customer's operational needs.",
      ],
      lists: [
        {
          style: "checklist",
          items: [
            "Single-vehicle and fleet deployment support",
            "Installation at approved customer locations",
            "GPS, ELD, AOBRD, dashcam, and TPMS installation",
            "Support for fleet, commercial, and construction vehicles",
          ],
        },
      ],
      footnotes: [
        "Service availability, scheduling, and project logistics are confirmed for each request based on the vehicle type, equipment, project scope, and installation location.",
      ],
      links: [
        { label: "Explore fleet installation services", href: "/services/" },
        {
          label: "Explore industry-specific installation support",
          href: "/industries/",
        },
        { label: "Request an Installation Quote", href: "#request-quote" },
      ],
    },
    requestStart: {
      h2: "Start With Your Installation Request",
      items: [
        {
          label: "Equipment",
          description: "Share the approved hardware context for the request.",
        },
        {
          label: "Vehicle count",
          description: "Describe the number of vehicles involved.",
        },
        {
          label: "Project locations",
          description: "Share the locations relevant to the request.",
        },
        {
          label: "Preferred timing",
          description: "Include your preferred timing.",
        },
      ],
      note: "Share these details so Ultimate Fleet GPS can understand the equipment, vehicles, locations, and timing connected to your installation request.",
      link: { label: "Request an Installation Quote", href: "#request-quote" },
    },
    services: {
      h2: "Fleet Installation Services We Can Discuss",
      intro:
        "Explore the installation services available for fleet, commercial, and construction vehicle projects. Each service page provides more detail about the equipment category and installation context.",
      // Titles, descriptions, link labels, and routes come from the service cards.
      cards: SERVICE_CARDS,
      allLink: { label: "Explore all installation services", href: "/services/" },
    },
    vehicles: {
      h2: "Vehicle Context for Installation Projects",
      intro:
        "Mobile installation projects may involve different commercial vehicle contexts. The vehicle type, equipment category, and project requirements should be included when framing an installation request.",
      examplesHeading: vehicleContext.listHeading,
      examples: vehicleContext.examples,
      categoriesHeading: "Vehicle categories",
      // docs/01 section 12.1: fleet, commercial, and construction vehicles.
      categories: ["Fleet vehicles", "Commercial vehicles", "Construction vehicles"],
      note: vehicleContext.note,
    },
    explore: {
      h2: "Explore How Ultimate Fleet GPS Works",
      intro:
        "Learn more about Ultimate Fleet GPS, the services available for fleet and commercial vehicle projects, and the information that can help you evaluate an installation request.",
      // Routes verified against src/app. Images are in public/images/coverage.
      cards: [
        {
          title: "Our Process",
          description:
            "Learn how to prepare for and understand a mobile installation request.",
          linkLabel: "Explore our process",
          href: "/our-process/",
          image: {
            src: "/images/coverage/ultimate-fleet-gps-our-process-fleet-installation-request-pathway.webp",
            width: 3318,
            height: 1896,
          },
        },
        {
          title: "Quality & Safety",
          description:
            "Review the quality and safety information available from Ultimate Fleet GPS.",
          linkLabel: "Explore quality and safety",
          href: "/quality-safety/",
          image: {
            src: "/images/coverage/ultimate-fleet-gps-quality-safety-fleet-installation-components.webp",
            width: 1659,
            height: 948,
          },
        },
        {
          title: "Fleet Installation Services",
          description:
            "Explore approved installation categories for fleet and commercial vehicle projects.",
          linkLabel: "Explore fleet installation services",
          href: "/services/",
          image: {
            src: "/images/coverage/ultimate-fleet-gps-fleet-installation-services-commercial-vehicle-electronics.webp",
            width: 3318,
            height: 1896,
          },
        },
        {
          title: "Industries",
          description:
            "Explore installation information organized around approved commercial vehicle contexts.",
          linkLabel: "Explore industries",
          href: "/industries/",
          image: {
            src: "/images/coverage/ultimate-fleet-gps-industries-commercial-vehicle-contexts.webp",
            width: 3318,
            height: 1896,
          },
        },
        {
          title: "Frequently Asked Questions",
          description:
            "Find answers to common questions about services, requests, and installation context.",
          linkLabel: "Explore frequently asked questions",
          href: "/faq/",
          image: {
            src: "/images/coverage/ultimate-fleet-gps-frequently-asked-questions-fleet-electronics.webp",
            width: 3318,
            height: 1896,
          },
        },
        {
          title: "Resources",
          description:
            "Browse additional information related to fleet installation and commercial vehicle electronics.",
          linkLabel: "Explore resources",
          href: "/resources/",
          // The supplied file name is missing the leading "s" ("b-mobile-...").
          // Referenced as it exists on disk; assets are not renamed here.
          image: {
            src: "/images/coverage/b-mobile-installations-resources-fleet-installation-reference.webp",
            width: 3318,
            height: 1896,
          },
        },
      ],
    },
    faqHeading: "Coverage FAQ",
    faq: [
      {
        question:
          "Does Ultimate Fleet GPS provide mobile installation service nationwide?",
        answer: `Nationwide mobile installation service is delivered at the customer's location. Share your equipment, vehicle count, project locations, and preferred timing to discuss an installation request. ${AVAILABILITY_SENTENCE}`,
      },
      {
        question: "What information should I include in an installation request?",
        answer:
          "Include the equipment involved, the number of vehicles or assets, the project location or locations, and your preferred timing. Additional project details can be included in the request form so the installation context is clear.",
      },
      {
        question:
          "Can I request fleet installation support for multiple project locations?",
        answer: `${FLEET_ROLLOUT_CARD.title} is the approved starting point for requests involving one vehicle or an entire fleet and multiple project locations. Share the equipment, vehicle count, locations, and preferred timing. ${AVAILABILITY_SENTENCE}`,
        link: { label: FLEET_ROLLOUT_CARD.title, href: FLEET_ROLLOUT_CARD.href },
      },
      {
        question: "What fleet installation services can I ask about?",
        answer: `You can explore ${SERVICE_TITLE_LIST}. Each service page provides more specific information about the approved service category.`,
        links: SERVICE_CARDS.map((card) => ({ label: card.title, href: card.href })),
      },
      {
        question: "What vehicle types can be part of an installation project?",
        answer: `Common project contexts include ${VEHICLE_EXAMPLE_LIST}. ${vehicleContext.note}`,
      },
      {
        question: "What equipment can Ultimate Fleet GPS install?",
        // Stakeholder-supplied wording. The category names follow the service
        // taxonomy (service-pages-content.ts); AOBRD is part of the ELD card.
        answer:
          "Available service categories include fleet telematics, GPS tracking, ELD, AOBRD, dashcam and camera, and fleet rollout services. Review the individual service pages for more information about each approved installation category.",
      },
      {
        question: "Can mobile installation be discussed for one vehicle?",
        answer:
          "Yes. Installation requests may involve one vehicle or an entire fleet. Include the equipment, vehicle type, project location, and preferred timing so Ultimate Fleet GPS can determine whether the request fits the available service context.",
      },
      {
        question: "Do technicians travel to the customer's location?",
        answer:
          "Nationwide mobile installation service is delivered at the customer's location. Share the project location, equipment context, vehicle count, and preferred timing through the installation request form.",
      },
    ],
    // Stakeholder-supplied quote-section copy (2026-09-19). "Will review ... to
    // determine whether your request fits" and the follow-up sentence describe
    // a review step that docs/01 sections 8.3 and 17 still list as unconfirmed.
    quote: {
      h2: "Request a Mobile Installation Quote",
      intro:
        "Tell us about your equipment, vehicle count, project locations, and preferred timing. Ultimate Fleet GPS will review the details to determine whether your request fits the available installation service context.",
      support:
        "Include the equipment or service needed, the number of vehicles or assets, relevant project locations, and any scheduling details that may help us understand the request.",
      nextHeading: "What happens next?",
      nextBody:
        "After you submit the request, the team can review the project information and follow up using the contact details you provide.",
      phoneLead:
        "Prefer to talk it through? Call Monday through Friday, 8:00 AM to 6:00 PM.",
      // Field labels, payload, validation, and analytics are unchanged; only
      // visible copy is overridden for this page.
      formCopy: {
        serviceNeed: "Equipment or service needed",
        descriptionPlaceholder:
          "Tell us about the vehicle types, equipment, locations, and installation requirements.",
        submit: "Submit Installation Request",
      },
    },
    // Installer Network handoff band (stakeholder-supplied copy, 2026-09-19,
    // decision 0007 item 10). Same journey and event as the existing Installer
    // Network links (homepage-content.ts, careers-hub-content.ts). The
    // disclosure is the approved wording already on the Installer Network page.
    handoff: {
      eyebrow: "INSTALLER NETWORK",
      h2: "Interested in Mobile Installation Work?",
      body: "Experience with mobile fleet installation is helpful, but it is not required to learn about the Ultimate Fleet GPS Installer Network. Review the network information, expectations, and available next steps to determine whether it may be a fit for you.",
      disclosure: `${NETWORK_DISCLOSURE.expressionOfInterest} ${NETWORK_DISCLOSURE.contractor}`,
      link: {
        label: "Learn About the Installer Network",
        href: INSTALLER_NETWORK_PATH,
        journey: "recruitment",
        event: "cta_installer_network_click",
      },
    },
  },
  // Sprint 3+, gated on the plan's per-state scoring rubric (existing
  // work/relationships 30%, technician/network availability 20%, fleet
  // density 15%, search/lead demand 15%, service relevance 10%, unique
  // proof availability 10%; publish only at >= 70/100). Empty until then.
  regions: {},
  states: {},
  // Sprint 4+, gated on a proven customer/job footprint and technician
  // capacity in that metro. Empty until then.
  metros: {},
} satisfies CoverageData;
