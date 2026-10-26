import type { IndustriesHubPageContent } from "@/types/service-content";

/**
 * Section copy for the `/industries/` hub. The H1, metadata description,
 * intro, and FAQ live in `industriesHubContent` (industries-content.ts).
 *
 * Every claim is gated against docs/_claims-inventory.md. Only commercial
 * fleets and construction (vehicles only) are confirmed verticals. Logistics
 * and delivery and field service are framed as use cases inside commercial
 * fleets, using vehicle types confirmed in row 26. Technology providers is
 * routing copy only: no partnership, authorization, certification, or
 * audience claim (docs/01 questions 29 and 30 are open). No pricing,
 * response-time, availability, state, city, office, platform-name, trailer,
 * or non-vehicle-equipment language appears. No em dash appears in this
 * file; a spaced hyphen is used instead.
 */
export const industriesHubPageContent: IndustriesHubPageContent = {
  metaTitle: "Industries We Install For",

  hero: {
    primaryCta: {
      label: "Request an Installation Quote",
      href: "#request-quote",
      journey: "commercial",
      event: "cta_quote_click",
    },
    callLabel: "Call",
    qualifier:
      "Tell us about your industry, equipment, vehicle count, locations, and preferred timeline.",
    secondaryLink: {
      label: "Discuss a Fleet Rollout",
      href: "/services/fleet-rollouts/",
    },
    scopeItems: [
      "Commercial fleet projects",
      "On-site installation",
      "Nationwide",
    ],
  },

  answer: {
    h2: "Fleet Installation Support Built Around Your Industry",
    body: [
      "Fleet technology installation is not the same for every operation. Vehicle types, equipment, operating environments, scheduling requirements, and deployment locations can all affect how an installation project is planned and completed.",
      "Ultimate Fleet GPS provides on-site commercial vehicle electronics installation support for fleet, commercial, logistics, delivery, service, and construction vehicles. We install approved hardware such as GPS tracking, ELD and AOBRD systems, TPMS, fleet dashcams, and fleet-management equipment.",
      "Our role is to help coordinate and complete the physical installation work around your vehicles and project requirements. That may include single-vehicle installations, multi-vehicle deployments, scheduled fleet projects, or installation support across multiple locations.",
      "The right starting point depends on your vehicle types, equipment, installation volume, locations, and timeline. Share the details of your project so the installation requirements can be reviewed clearly before work begins.",
    ],
    lists: [
      {
        style: "checklist",
        items: [
          "On-site installation for commercial and fleet vehicles",
          "Support for GPS, ELD, AOBRD, TPMS, dashcam, and fleet-management equipment",
          "Installation planning based on vehicle type and project requirements",
          "Support for single vehicles and larger commercial deployments",
          "Nationwide mobile installation network",
        ],
      },
    ],
    footnotes: [
      "Ultimate Fleet GPS provides installation support. We install and deploy the hardware; we are not the platform vendor or a compliance consultant.",
    ],
    footnoteCallout: true,
  },

  industries: {
    eyebrow: "INDUSTRY-SPECIFIC FLEET SUPPORT",
    h2: "Explore Industry-Specific Installation Support",
    intro:
      "Choose the page that best matches your fleet, vehicle type, or deployment environment. Each page explains the installation support available for that type of operation, including common vehicle applications, equipment considerations, and how to request project information.",
    cards: [
      {
        category: "Commercial fleets",
        title: "Commercial Fleets",
        scope:
          "Installation support for commercial fleets, including delivery vehicles, service trucks, work vans, and other fleet vehicles.",
        commonUse:
          "Support for GPS tracking, ELD, dashcam, TPMS, and fleet-management equipment across single-vehicle and multi-vehicle projects.",
        linkLabel: "Explore commercial fleet installation support",
        href: "/industries/commercial-fleets/",
        accent: true,
      },
      {
        category: "Construction vehicle fleets",
        title: "Construction Vehicle Fleets",
        scope:
          "Installation support for construction vehicles and equipment used in field-based commercial operations.",
        commonUse:
          "On-site installation support coordinated around vehicle access, equipment type, project schedule, and jobsite requirements.",
        linkLabel: "Explore construction vehicle installation support",
        href: "/industries/construction-heavy-equipment/",
      },
      {
        category: "Logistics and delivery",
        title: "Logistics & Delivery Fleets",
        scope:
          "Installation support for delivery vehicles, box trucks, service vehicles, and heavy-duty trucks used in logistics and distribution operations.",
        commonUse:
          "On-site installation for individual vehicles, scheduled fleet deployments, or broader commercial vehicle projects.",
        linkLabel: "Explore logistics and delivery fleet support",
        href: "/industries/logistics-delivery-fleets/",
      },
      {
        category: "Field-service fleets",
        title: "Field-Service Fleets",
        scope:
          "Installation support for service trucks, work vans, utility vehicles, and other vehicles used by mobile field-service teams.",
        commonUse:
          "Support for fleet technology installations completed around vehicle availability, service schedules, and operational requirements.",
        linkLabel: "Explore field-service fleet support",
        href: "/industries/field-service-fleets/",
      },
      {
        category: "Technology provider deployment",
        title: "Technology Provider Deployment Support",
        scope:
          "Installation and deployment support for technology providers coordinating hardware installations across commercial vehicles and fleet environments.",
        commonUse:
          "Ultimate Fleet GPS provides the physical installation support. We are not the underlying technology platform, hardware manufacturer, or compliance consultant.",
        linkLabel: "Explore technology provider deployment support",
        href: "/industries/telematics-technology-providers/",
      },
    ],
  },

  decisionGuide: {
    eyebrow: "PROJECT ROUTING",
    h2: "Find the Right Starting Point for Your Installation Project",
    intro:
      "Not sure which page fits your project? Choose the situation closest to yours. Each route leads to information about the installation support, vehicle types, equipment, or deployment requirements most relevant to your request.",
    rows: [
      {
        situation: "Your project involves commercial vehicles across a fleet",
        destination: "Commercial Fleets",
        linkLabel: "Explore commercial fleet installation support",
        href: "/industries/commercial-fleets/",
      },
      {
        situation: "Your project involves construction vehicles or equipment",
        destination: "Construction Vehicle Fleets",
        linkLabel: "Explore construction vehicle installation support",
        href: "/industries/construction-heavy-equipment/",
      },
      {
        situation:
          "You know the fleet technology or vehicle hardware you need installed",
        destination: "Installation Services",
        linkLabel: "Explore fleet installation services",
        href: "/services/",
      },
      {
        situation:
          "You are coordinating installations for multiple vehicles or locations",
        destination: "Fleet Rollout Services",
        linkLabel: "Discuss a fleet rollout",
        href: "/services/fleet-rollouts/",
      },
      {
        situation: "You are coordinating a hardware deployment program",
        destination: "Technology Provider Deployment Support",
        linkLabel: "Explore technology provider deployment support",
        href: "/industries/telematics-technology-providers/",
      },
    ],
    note: {
      before: "If you are unsure which route fits your project, start with the ",
      linkText: "installation request page",
      href: "#request-quote",
      after:
        " and include your vehicle types, equipment, number of vehicles, locations, and preferred timeline.",
    },
  },

  capability: {
    h2: "Planning Commercial Fleet Installation Projects",
    body: [
      "Installation planning begins with the vehicles, equipment, project locations, and timeline involved. Ultimate Fleet GPS provides on-site installation support for fleet, commercial, logistics, delivery, service, and construction vehicles.",
      "Project details may include the number and types of vehicles, the equipment being installed, vehicle access, installation locations, scheduling requirements, and whether the work involves one vehicle, a fleet, or multiple locations.",
      "Before requesting a project review, gather the information available about your vehicles, equipment, locations, and preferred timeline. This helps clarify the installation requirements and determine the appropriate starting point.",
    ],
    lists: [
      {
        items: [
          "On-site installation at an approved project location",
          "Support for one vehicle, multiple vehicles, or an entire fleet",
          "Installation planning based on vehicle type and equipment",
          "Project location, access, and scheduling considerations",
          "Support for commercial and nationwide deployment discussions",
        ],
      },
    ],
    links: [{ label: "Explore fleet installation services", href: "/services/" }],
  },

  intake: {
    h2: "Project Details That Help Shape Installation Planning",
    body: [
      "Providing a few project details helps Ultimate Fleet GPS understand the installation environment, identify the appropriate service path, and determine what planning may be required before work begins.",
      "The most useful information includes the vehicles involved, the equipment being installed, the number of vehicles and locations, operating requirements, and the preferred project timeline. You do not need to have every detail finalized before reaching out. Share what you know, and the project scope can be discussed from there.",
    ],
    lists: [
      {
        style: "labeled",
        items: [
          "Vehicle type: Helps identify the fleet environment and installation requirements.",
          "Equipment type: Helps connect your request with the relevant installation service.",
          "Vehicle count: Helps distinguish a single-vehicle installation from a larger fleet rollout.",
          "Number of locations: Helps determine whether the project requires coordination across multiple sites.",
          "Operating schedule: Helps account for vehicle availability and access requirements.",
          "Preferred timeline: Helps begin the project-scope and scheduling discussion.",
        ],
      },
    ],
  },

  nationwide: {
    h2: "Nationwide Mobile Installation Support",
    body: [
      "Ultimate Fleet GPS provides mobile fleet installation support for commercial, logistics, delivery, service, and construction vehicles. Projects are coordinated around the vehicle types, equipment, locations, access requirements, and timeline provided in the installation request.",
      "Share your industry, equipment, vehicle count, and project locations so the inquiry can be routed appropriately and the installation requirements can be discussed.",
    ],
    primaryLink: true,
    links: [
      {
        label: "Discuss a nationwide installation project",
        href: "#request-quote",
      },
      {
        label: "How fleet installation projects are coordinated",
        href: "/services/fleet-rollouts/",
      },
    ],
  },

  services: {
    eyebrow: "FLEET INSTALLATION SERVICES",
    h2: "Explore Fleet Installation Services",
    intro: [
      "Ultimate Fleet GPS provides on-site installation support for fleet technology and commercial vehicle electronics, including GPS tracking, ELD and AOBRD systems, fleet dashcams, TPMS, and coordinated fleet rollout projects.",
      "Choose the service that best matches your equipment or deployment requirements.",
    ],
    cards: [
      {
        title: "Fleet Telematics Installation",
        description:
          "Installation support for GPS tracking, ELD, AOBRD, TPMS, dashcam, and fleet-management equipment used across commercial vehicles.",
        linkLabel: "Explore fleet telematics installation",
        href: "/services/fleet-telematics-installation/",
      },
      {
        title: "GPS Tracking Installation",
        description:
          "On-site installation support for GPS tracking hardware in commercial vehicles, work vans, service vehicles, and fleet vehicles.",
        linkLabel: "Explore GPS tracking installation",
        href: "/services/gps-tracking-installation/",
      },
      {
        title: "ELD Installation",
        description:
          "Installation support for ELD and AOBRD equipment used in commercial and fleet vehicle environments.",
        linkLabel: "Explore ELD installation",
        href: "/services/eld-installation/",
      },
      {
        title: "Dashcam & Camera Installation",
        description:
          "Fleet dashcam and windshield-mounted camera installation support for commercial vehicles and fleet deployment projects.",
        linkLabel: "Explore dashcam and camera installation",
        href: "/services/dashcam-camera-installation/",
      },
      {
        title: "Fleet Rollout Services",
        description:
          "Coordinated installation support for multi-vehicle and multi-location fleet technology deployments.",
        linkLabel: "Explore fleet rollout services",
        href: "/services/fleet-rollouts/",
      },
      {
        title: "Complete Fleet Installation Services",
        description:
          "Review the full range of approved fleet technology and commercial vehicle installation services in one place.",
        linkLabel: "Explore all fleet installation services",
        href: "/services/",
      },
    ],
  },

  faqHeading: "Industry Support FAQs",
  faqIntro:
    "Have questions about choosing an industry page, selecting an installation service, or preparing a commercial fleet installation request? These answers explain where to begin and what information is useful to include.",

  quote: {
    eyebrow: "COMMERCIAL FLEET INSTALLATION SUPPORT",
    h2: "Discuss Your Fleet Installation Project",
    paragraphs: [
      "Tell us about your vehicles, equipment, project locations, and preferred timeline. Ultimate Fleet GPS uses these details to understand the installation environment and route your inquiry to the appropriate service or project path.",
      "Installation requests may involve one commercial vehicle, a larger fleet, multiple locations, or a technology deployment program. You do not need to have every detail finalized before reaching out. Share what you know, and the project scope can be discussed from there.",
    ],
    listHeading: "A useful project request may include:",
    list: [
      "Vehicle type and operating environment",
      "Equipment or service needed",
      "Number of vehicles or assets",
      "Project location or locations",
      "Preferred installation timeline",
      "Any access, scheduling, or deployment requirements",
    ],
    reassurance:
      "The more project information you can provide, the easier it is to determine the appropriate installation path. If your requirements are still being defined, provide the available details and explain what you are planning.",
    formHeading: "Tell Us About Your Installation Needs",
    formIntro:
      "Complete the form with the project details currently available. A representative can review the information and determine the appropriate next step.",
    phoneLead:
      "Prefer to talk it through? Call Monday through Friday, 8:00 AM to 6:00 PM.",
    formCopy: {
      serviceNeed: "Equipment or installation service needed",
      projectLocations: "Project location or locations",
      timeline: "Preferred installation timeline",
      description: "Tell us about your project",
      descriptionPlaceholder:
        "Include vehicle types, equipment, number of locations, access requirements, or other project details.",
      consent: "I agree to be contacted about this installation project.",
      submit: "Submit Installation Request",
    },
  },
};
