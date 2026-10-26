import type { InformationalPageContent } from "@/types/service-content";

/**
 * Industries hub and industry page content.
 *
 * SOURCE-OF-TRUTH FLAG (see CLAUDE.md section 1 conflict rule): the plan's
 * Sprint 2 route table lists five industry pages, but
 * docs/01-business-source-of-truth.md section 13 confirms only "Commercial
 * fleets" and "Construction" (as a vehicle category, section 13.1). Section
 * 13.2 marks "Transportation and logistics", "Field service",
 * "Telecommunications", "Delivery and distribution", and every other named
 * vertical as "Proposed... requires confirmation of actual experience,
 * desired business development, or operational capability before
 * publication." docs/01 outranks the plan under CLAUDE.md section 1's
 * priority order.
 *
 * Resolution applied here, pending stakeholder confirmation: every page
 * below is built using ONLY facts already confirmed elsewhere (the
 * "commercial fleets" customer/vehicle category in section 13.1, the
 * confirmed vehicle scope in section 12.1/25, and the confirmed
 * platform-installation-experience wording in section 14/25). No page
 * asserts new, industry-specific proof, experience, or business development
 * beyond those confirmed facts. `logistics-delivery-fleets` and
 * `field-service-fleets` are framed as use cases within the already-confirmed
 * commercial-fleets category, not as separately proven verticals.
 * `telematics-technology-providers` is framed as installation-partner
 * positioning built entirely from the confirmed platform-experience wording,
 * never as a new industry-served claim or a partnership/authorization claim.
 * `construction-heavy-equipment` is scoped strictly to the confirmed
 * "construction vehicles" category; it explicitly does not claim non-vehicle
 * heavy-equipment installation (docs/_claims-inventory.md item 9).
 *
 * If the stakeholder intends a stronger, vertical-specific claim for
 * logistics, field service, or telecom customers, that requires its own
 * confirmation before this content is strengthened.
 */

/**
 * Hub h1, metadata description, intro, and FAQ. Section copy for the rest of
 * the page lives in `industriesHubPageContent` (industries-hub-content.ts);
 * `body` is unused on the hub. Technology providers are deliberately absent
 * from the H1, description, and intro: that audience is unconfirmed (docs/01
 * questions 29 and 30). The FAQ is distinct from the services hub FAQ.
 */
export const industriesHubContent: InformationalPageContent = {
  h1: "Fleet Technology Installation for Commercial Operations",
  metaDescription:
    "Mobile GPS, ELD, and fleet electronics installation for commercial, field service, logistics, and construction fleets. Find your industry.",
  intro:
    "Ultimate Fleet GPS provides on-site fleet technology installation for fleet, commercial, and construction vehicles nationwide. Explore the fleet environments our installation services support, then choose a starting point for your project.",
  body: [],
  faq: [
    {
      question:
        "What types of commercial operations can request fleet installation support?",
      answer:
        "Ultimate Fleet GPS provides installation support for commercial fleets, logistics and delivery vehicles, field-service vehicles, construction vehicles, work vans, utility vehicles, and other approved commercial vehicle environments.",
    },
    {
      question: "What types of fleet technology can Ultimate Fleet GPS install?",
      answer:
        "Installation support may include GPS tracking, ELD and AOBRD systems, TPMS, fleet dashcams, and fleet-management equipment. The appropriate installation path depends on the equipment, vehicle type, project scope, and deployment requirements.",
    },
    {
      question: "How do I choose between an industry page and a service page?",
      answer:
        "Choose an industry page when you need information based on your vehicle environment or type of operation. Choose a service page when you already know the equipment or installation service you need, such as GPS tracking, ELD, dashcam, or fleet rollout support.",
    },
    {
      question: "Which industry page fits delivery vehicles or service trucks?",
      answer:
        "Delivery vehicles typically fit the Logistics & Delivery Fleets page. Service trucks, utility vehicles, and work vans typically fit the Field-Service Fleets page. Projects involving multiple vehicle types or locations may be better suited to the Commercial Fleets or Fleet Rollout Services page.",
      links: [
        {
          label: "Logistics & Delivery Fleets",
          href: "/industries/logistics-delivery-fleets/",
        },
        { label: "Field-Service Fleets", href: "/industries/field-service-fleets/" },
        { label: "Commercial Fleets", href: "/industries/commercial-fleets/" },
        { label: "Fleet Rollout Services", href: "/services/fleet-rollouts/" },
      ],
    },
    {
      question: "What information should I include in a fleet installation request?",
      answer:
        "Include the vehicle type, equipment type, number of vehicles, project locations, operating schedule, and preferred timeline. You do not need to have every detail finalized before contacting Ultimate Fleet GPS. Share the information available so the project scope can be discussed.",
    },
    {
      question: "Can Ultimate Fleet GPS support a single vehicle installation?",
      answer:
        "Single-vehicle installation requests may be reviewed alongside larger fleet projects. Include the vehicle type, equipment, project location, and preferred timeline so the appropriate installation path can be determined.",
    },
    {
      question: "Can installation support be planned for multiple vehicles or locations?",
      answer:
        "Yes. Multi-vehicle and multi-location projects can be reviewed as fleet rollout or deployment projects. Include the number of vehicles, locations, vehicle types, equipment, and preferred timeline so the project requirements can be evaluated.",
      link: { label: "Fleet Rollout Services", href: "/services/fleet-rollouts/" },
    },
    {
      question: "Can a technology provider discuss a hardware deployment program?",
      answer:
        "Yes. Technology providers can use the Technology Provider Deployment Support page to describe a commercial vehicle hardware deployment project. Ultimate Fleet GPS provides physical installation and deployment support; it is not the underlying technology platform, hardware manufacturer, or compliance consultant.",
      link: {
        label: "Technology Provider Deployment Support",
        href: "/industries/telematics-technology-providers/",
      },
    },
    {
      question: "Does Ultimate Fleet GPS provide nationwide mobile installation support?",
      answer:
        "Ultimate Fleet GPS provides nationwide mobile fleet installation support for qualified commercial vehicle projects. Project coordination depends on the vehicle types, equipment, locations, access requirements, timeline, and other details included in the installation request.",
    },
  ],
};

export const commercialFleetsContent: InformationalPageContent = {
  h1: "Mobile Installation for Commercial Fleets",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Commercial Fleet GPS Installation",
  metaDescription:
    "On-site GPS, ELD, and dashcam installation for commercial fleets, nationwide. Technicians come to you. Request a fleet quote.",
  intro:
    "Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on commercial fleet vehicles, with technicians traveling directly to your location nationwide.",
  body: [
    "Commercial fleet customers are a core, confirmed part of Ultimate Fleet GPS's vehicle scope, alongside fleet and construction vehicles.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for projects of any size, one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
  faq: [
    {
      question: "What equipment can you install on our commercial fleet?",
      answer:
        "Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on commercial fleet vehicles.",
    },
  ],
};

/**
 * Structured section copy for the redesigned `/industries/commercial-fleets/`
 * page. H1, description, intro, and body stay in `commercialFleetsContent`
 * (approved by the stakeholder). Claim sources:
 * - Service titles and links: services-hub-content.ts.
 * - Vehicle categories and examples: docs/01 sections 12.1 and 13.1, decision
 *   0007. The clarification sentence is the required approved wording.
 * - Quote information items and CTA qualifier: FAQ hub hero qualifier.
 * - Nationwide statement: docs/01 section 8.2, exact wording.
 * - Installer Network prompt and link label: the page brief, approved.
 * Section H2s are from the page brief. No card summaries are approved, so
 * service cards carry a title and a link only.
 */
export const commercialFleetsPage = {
  cta: {
    label: "Request an Installation Quote",
    href: "#request-quote",
    journey: "commercial",
    event: "cta_quote_click",
  },
  qualifier:
    "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
  services: {
    h2: "Installation services for commercial fleet contexts",
    items: [
      {
        title: "Fleet Telematics Installation",
        href: "/services/fleet-telematics-installation/",
        linkLabel: "View Fleet Telematics Installation",
      },
      {
        title: "GPS Tracking Installation",
        href: "/services/gps-tracking-installation/",
        linkLabel: "View GPS Tracking Installation",
      },
      {
        title: "ELD Installation",
        href: "/services/eld-installation/",
        linkLabel: "View ELD Installation",
      },
      {
        title: "Dashcam & Camera Installation",
        href: "/services/dashcam-camera-installation/",
        linkLabel: "View Dashcam & Camera Installation",
      },
      {
        title: "Fleet Rollout Services",
        href: "/services/fleet-rollouts/",
        linkLabel: "View Fleet Rollout Services",
      },
    ],
  },
  vehicles: {
    h2: "Installation context for commercial vehicles",
    categories: ["Fleet vehicles", "Commercial vehicles", "Construction vehicles"],
    examples:
      "Examples may include work vans, service trucks, utility vehicles, and heavy-duty trucks.",
    clarification:
      "Vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type.",
  },
  quoteInfo: {
    h2: "Information to share with your quote request",
    items: ["Equipment", "Vehicle count", "Project locations", "Preferred timing"],
  },
  rollout: {
    h2: "One vehicle or an entire fleet",
    nationwide: "Nationwide mobile installation service, delivered at the customer's location.",
    coverageLabel: "See nationwide coverage",
    linkLabel: "View Fleet Rollout Services",
  },
  documentation: {
    h2: "Installation documentation",
  },
  installerNetwork: {
    prompt: "Are you an experienced mobile fleet installation technician?",
    label: "Learn about the Ultimate Fleet GPS Installer Network",
    href: "/careers/mobile-installation-technician/",
  },
} as const;

export const constructionHeavyEquipmentContent: InformationalPageContent = {
  h1: "Mobile Installation for Construction Vehicle Fleets",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Construction Equipment GPS Installation",
  metaDescription:
    "GPS and ELD installation on construction vehicles and heavy equipment, done at your location, nationwide. Request an installation quote.",
  intro:
    "Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on construction vehicles, with technicians traveling directly to your location nationwide.",
  body: [
    "Construction vehicles are one of Ultimate Fleet GPS's three confirmed vehicle categories, alongside fleet and commercial vehicles.",
    "This page describes installation on construction vehicles. It does not describe installation on non-vehicle heavy equipment; that broader scope is not a confirmed Ultimate Fleet GPS service.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for projects of any size, one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
  faq: [
    {
      question: "Do you install equipment on heavy equipment, not just vehicles?",
      answer:
        "Ultimate Fleet GPS's confirmed construction scope covers construction vehicles. Installation on non-vehicle heavy equipment is not a confirmed service.",
    },
  ],
};

export const logisticsDeliveryFleetsContent: InformationalPageContent = {
  h1: "Mobile Installation for Logistics and Delivery Fleets",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Logistics & Delivery Fleet Installation",
  metaDescription:
    "On-site GPS and ELD installation for delivery and logistics fleets, done at your location. Nationwide. Request an installation quote.",
  intro:
    "Logistics and delivery operations that run commercial fleet vehicles are supported under Ultimate Fleet GPS's confirmed commercial fleet vehicle scope, with technicians traveling directly to your location nationwide.",
  body: [
    "Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on commercial fleet vehicles used in logistics and delivery operations.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for projects of any size, one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
};

export const fieldServiceFleetsContent: InformationalPageContent = {
  h1: "Mobile Installation for Field Service Fleets",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Field Service Fleet GPS Installation",
  metaDescription:
    "On-site GPS and ELD installation for field service vans and trucks, nationwide. Technicians travel to your location. Request a quote.",
  intro:
    "Field service operations that run commercial fleet vehicles are supported under Ultimate Fleet GPS's confirmed commercial fleet vehicle scope, with technicians traveling directly to your location nationwide.",
  body: [
    "Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on commercial fleet vehicles used in field service operations.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for projects of any size, one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
};

export const telematicsTechnologyProvidersContent: InformationalPageContent = {
  h1: "Field Installation Partner for Telematics and Technology Providers",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Installation for Telematics Providers",
  metaDescription:
    "Field installation support for telematics and fleet-technology hardware providers, nationwide. Tell us your hardware, vehicle count, and locations.",
  intro:
    "Ultimate Fleet GPS provides field installation support for telematics and fleet-technology hardware providers, working with the platforms fleets already run on.",
  body: [
    "We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, and others our technicians already know. This describes installation experience with that equipment. It does not state or imply an official partnership, authorization, certification, reseller, or dealer relationship with any platform.",
    "Ultimate Fleet GPS installs and deploys hardware on-site at the customer's location nationwide, one vehicle or an entire fleet, for GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment.",
    "Every installation is photo documented, and that documentation is delivered automatically.",
  ],
  faq: [
    {
      question: "Are you an authorized or certified installer for a specific platform?",
      answer:
        "No. Ultimate Fleet GPS installs and deploys hardware for the platforms fleets already run on. This describes installation experience, not an official partnership, authorization, certification, reseller, or dealer relationship.",
    },
  ],
};
