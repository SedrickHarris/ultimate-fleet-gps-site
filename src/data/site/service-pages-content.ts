import { utilityBar } from "@/data/navigation/site-navigation";
import { business } from "@/data/site/business";
import { homepageContent } from "@/data/site/homepage-content";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { careersLandingContent } from "@/data/site/careers-landing-content";
import {
  dashcamCameraInstallationContent,
  eldInstallationContent,
  fleetRolloutsContent,
  fleetTelematicsInstallationContent,
  gpsTrackingInstallationContent,
} from "@/data/site/services-content";
import {
  servicePagesImages,
  type ServiceSlug,
} from "@/data/site/service-pages-images";
import type {
  HubLink,
  HubRelatedCard,
  HubSplitSection,
  ServicePageBundle,
  ServiceTemplateContent,
  ServiceTemplateShared,
} from "@/types/service-content";

/**
 * Section copy for the five service pages, rendered by ServicePageTemplate.
 *
 * Every claim is gated against docs/_claims-inventory.md. Confirmed inputs:
 * the six equipment categories (rows 1 to 6), fleet, commercial, and
 * construction vehicles (row 16), vehicle examples work vans, service trucks,
 * utility vehicles, and heavy-duty trucks (rows 26 and 39), "one vehicle or
 * an entire fleet" (row 15), on-site work at the customer's location, and the
 * exact photo-documentation sentence (row 10). "Mounting, connection, and
 * routing" is stakeholder-supplied wording (decision 0005).
 *
 * Deliberately absent: setup, activation, calibration, configuration,
 * testing, validation, integration, verification, certification, quality
 * assurance, warranty, guarantee promises, pricing, response times,
 * same-day or emergency claims, "near me", any state or city, trailers,
 * pickups, buses, heavy equipment, "legacy", and any platform brand name in
 * new copy (existing FAQs keep their approved experience-only wording). No em
 * dash appears in this file; a spaced hyphen would be used instead.
 */

const SERVICES_ROUTE = "/services/";
const FORM_ANCHOR = "#request-quote";

const shared: ServiceTemplateShared = {
  callLabel: "Call",
  heroEyebrow: "Fleet Technology Installation Services",
  heroQualifier:
    "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
  vehicles: {
    h2: "Installation Context for Commercial Vehicles",
    listHeading: "Vehicle examples",
    examples: ["Work vans", "Service trucks", "Utility vehicles", "Heavy-duty trucks"],
    note: "Vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type.",
  },
  nationwide: {
    h2: "Mobile Installation at Your Project Location",
    lead: "Nationwide mobile installation service, delivered at the customer's location.",
    links: [
      {
        label: "Explore nationwide fleet installation coverage",
        href: "/coverage/",
      },
      {
        label: "How fleet installation projects are coordinated",
        href: "/our-process/",
      },
    ],
  },
  documentation: {
    h2: "Installation Documentation",
    sentence:
      "Every installation is photo documented, and you'll receive that documentation automatically.",
    links: [
      {
        label: "Learn about installation quality and safety",
        href: "/quality-safety/",
      },
    ],
  },
  related: {
    h2: "Related Fleet Installation Services",
    allCard: {
      title: "All installation services",
      description: "See every installation service in one place.",
      linkLabel: "Explore all fleet installation services",
      href: SERVICES_ROUTE,
    },
  },
  quote: {
    intro:
      "Tell us about the approved equipment, your vehicle count, project location or locations, and preferred timing.",
    phoneLead:
      "Prefer to talk it through? Call Monday through Friday, 8:00 AM to 6:00 PM.",
  },
  resources: {
    h2: "Related Resources",
    links: [
      {
        label: "Fleet installation planning resources",
        href: "/resources/",
        image: {
          src: "/images/coverage/b-mobile-installations-resources-fleet-installation-reference.webp",
          width: 3318,
          height: 1896,
          alt: "Fleet installation reference materials",
        },
      },
      {
        label: "Fleet installation FAQs",
        href: "/faq/",
        image: {
          src: "/images/coverage/ultimate-fleet-gps-frequently-asked-questions-fleet-electronics.webp",
          width: 3318,
          height: 1896,
          alt: "Fleet electronics components for commercial vehicles",
        },
      },
    ],
  },
};

/** Card copy for each service page, reused wherever a related link is shown. */
const serviceCards: Record<ServiceSlug, HubRelatedCard> = {
  "fleet-telematics-installation": {
    title: "Fleet Telematics Installation",
    description:
      "GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment.",
    linkLabel: "Explore fleet telematics installation",
    href: "/services/fleet-telematics-installation/",
  },
  "gps-tracking-installation": {
    title: "GPS Tracking Installation",
    description: "On-site installation of GPS tracking hardware.",
    linkLabel: "Explore GPS tracking installation",
    href: "/services/gps-tracking-installation/",
  },
  "eld-installation": {
    title: "ELD Installation",
    description: "Installation of ELD and AOBRD equipment.",
    linkLabel: "Explore ELD installation",
    href: "/services/eld-installation/",
  },
  "dashcam-camera-installation": {
    title: "Dashcam & Camera Installation",
    description:
      "Fleet dashcam and windshield-mounted video recorder installation.",
    linkLabel: "Explore dashcam and camera installation",
    href: "/services/dashcam-camera-installation/",
  },
  "fleet-rollouts": {
    title: "Fleet Rollout Services",
    description:
      "Coordinated multi-vehicle and multi-location installation projects.",
    linkLabel: "Explore fleet rollout services",
    href: "/services/fleet-rollouts/",
  },
};

/**
 * Destination for each "What We Install" card, from the approved service-page
 * routes above. A service appears here only when a page covers it specifically:
 * GPS, ELD, and dashcam have their own pages, and fleet management equipment
 * points to the fleet telematics umbrella page that covers it
 * (docs/_claims-inventory.md, "Four Sprint 1 service pages").
 *
 * Deliberately absent: AOBRD (covered on the ELD page, no page of its own, so
 * it is not sent to the ELD card's destination) and TPMS (folded into the
 * telematics umbrella, no page of its own). Those cards stay unlinked until a
 * specific page exists.
 */
export const installCardLinks: Readonly<
  Partial<Record<(typeof business.serviceTypes)[number], string>>
> = {
  "GPS tracking installation": serviceCards["gps-tracking-installation"].href,
  "ELD installation": serviceCards["eld-installation"].href,
  "Fleet dashcam installation": serviceCards["dashcam-camera-installation"].href,
  "Fleet management equipment installation":
    serviceCards["fleet-telematics-installation"].href,
};

/**
 * Link wording for a "What We Install" card whose destination page is named
 * differently from the category. "Fleet management equipment" is the confirmed
 * umbrella category (docs/01 section 9.1); "Fleet Telematics Installation" is
 * the page name and the link label (docs/decisions/0016). A card absent here
 * uses its category name.
 */
export const installCardLinkLabels: Readonly<
  Partial<Record<(typeof business.serviceTypes)[number], string>>
> = {
  "Fleet management equipment installation": "fleet telematics installation",
};

const FIT_NOTE = "These are general signals, not compliance or technical advice.";

/** A related-service link built from the approved card taxonomy above. */
function cardLink(slug: ServiceSlug): HubLink {
  const card = serviceCards[slug];
  return { label: card.linkLabel, href: card.href };
}

/** The four scope items, worded for one hardware description. */
function installScope(hardware: string): HubSplitSection {
  return {
    h2: "",
    body: [],
    lists: [
      {
        style: "checklist",
        items: [
          `Mounting: physically mounting the ${hardware} in the vehicle`,
          `Connection: connecting the ${hardware} to the vehicle`,
          `Routing: routing the cables the ${hardware} needs`,
          "Installation coordination: arranging on-site work at your location, for one vehicle or an entire fleet",
        ],
      },
    ],
  };
}

/** Documentation band shared by the telematics and GPS pages (stakeholder-supplied copy). */
const DOCUMENTATION_CARDS: NonNullable<
  ServiceTemplateContent["documentationCards"]
> = {
  intro:
    "Documentation can help fleet teams keep installation details organized and easier to review throughout a commercial vehicle project.",
  cards: [
    {
      title: "Photo Documentation",
      body: "Project photos can help show installation context, equipment placement, and visible work completed on a commercial vehicle when photo documentation is included in the project process.",
    },
    {
      title: "Installation Records",
      body: "Installation records can help organize project details for fleet coordination, internal review, and future reference.",
    },
    {
      title: "Quality and Safety",
      body: "Installation quality and safety information can help fleet teams understand vehicle-specific considerations, approved equipment requirements, and important project details.",
    },
  ],
};

const contents: Record<ServiceSlug, ServiceTemplateContent> = {
  "fleet-telematics-installation": {
    slug: "fleet-telematics-installation",
    pathname: "/services/fleet-telematics-installation/",
    breadcrumbLabel: "Fleet Telematics Installation",
    serviceTypes: ["Fleet telematics installation"],
    scopeItems: [
      "Connected fleet hardware installation",
      "On-site installation",
      "Nationwide service context",
    ],
    definition: {
      h2: "What Is Fleet Telematics Installation?",
      body: [
        "Fleet telematics installation is the physical mounting, connection, and routing work required to place approved connected fleet hardware into commercial vehicles. Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment. To scope a project, we need to know the equipment, the vehicle count, the project locations, and your preferred timing.",
      ],
    },
    scope: {
      ...installScope("approved hardware"),
      h2: "What Fleet Telematics Installation Can Include",
      body: [
        "Installation work covers the approved equipment categories for your project.",
        "Depending on the project, installation may support approved GPS, ELD, AOBRD, TPMS, dashcam, telematics, and fleet-management equipment.",
      ],
    },
    vehiclesBody:
      "Because this service spans several equipment categories, a project may involve more than one type of hardware across your fleet, commercial, and construction vehicles.",
    fit: {
      h2: "When Fleet Telematics Installation May Be a Fit",
      body: [
        "Use these related service pages to find the most relevant starting point for your installation request.",
      ],
      links: [
        cardLink("gps-tracking-installation"),
        cardLink("eld-installation"),
        cardLink("dashcam-camera-installation"),
        cardLink("fleet-rollouts"),
      ],
    },
    midCtaHeading: "Need installation support for a fleet telematics project?",
    midCtaBody:
      "Tell us about your equipment, vehicle count, project locations, and preferred timing so we can understand your installation request.",
    nationwideExtra:
      "Include your project location or locations, vehicle count, and preferred timeline when requesting an installation quote.",
    related: [
      "gps-tracking-installation",
      "eld-installation",
      "dashcam-camera-installation",
      "fleet-rollouts",
    ],
    faqHeading: "Fleet Telematics Installation FAQs",
    faqLayout: "columns",
    quoteH2: "Request a Fleet Telematics Installation Quote",
    documentationCards: DOCUMENTATION_CARDS,
    heroVideo: {
      src: "/images/services/fleet-telematics-installation/hero/ultimate-fleet-gps-fleet-telematics-installation-hero.mp4",
      poster:
        "/images/services/fleet-telematics-installation/hero/ultimate-fleet-gps-fleet-telematics-installation-hero.webp",
    },
    quoteBackground: {
      src: "/images/services/fleet-telematics-installation/ultimate-fleet-gps-fleet-telematics-quote-light-background.webp",
      width: 3344,
      height: 1882,
    },
    quoteGuide: {
      intro:
        "Tell us about your fleet telematics installation project so we can better understand the equipment, vehicle count, project location or locations, and preferred timing.",
      support:
        "Use this form to request installation support for approved GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, or fleet management equipment. Providing complete project details helps the team understand your installation request.",
      includeHeading: "What to Include in Your Request",
      includeItems: [
        "Equipment or service needed",
        "Number of vehicles or assets",
        "Project location or locations",
        "Preferred installation timeline",
        "Relevant fleet, vehicle, or deployment details",
      ],
      nextHeading: "What Happens Next",
      nextSteps: [
        "Submit your project details through the form.",
        "Ultimate Fleet GPS reviews the information provided.",
        "The team follows up to discuss project scope, installation needs, and coordination details.",
      ],
    },
  },

  "gps-tracking-installation": {
    slug: "gps-tracking-installation",
    pathname: "/services/gps-tracking-installation/",
    breadcrumbLabel: "GPS Tracking Installation",
    serviceTypes: ["GPS tracking installation"],
    scopeItems: [
      "On-site GPS device installation for commercial vehicles and equipment",
    ],
    heroBackgroundImage: {
      src: "/images/services/gps-tracking-installation/hero/ultimate-fleet-gps-gps-tracking-installation-commercial-vehicle.webp",
      width: 3344,
      height: 1882,
    },
    hero: {
      eyebrow: "Mobile GPS Tracking Installation for Commercial Fleets",
      h1: "GPS Tracking Installation for Commercial Fleets",
      intro:
        "Ultimate Fleet GPS provides on-site GPS tracking device installation for commercial fleets, work vehicles, trucks, equipment, and other business assets. Our mobile installation teams support multi-vehicle deployments at your location.",
      ctaLabel: "Request a GPS Installation Quote",
      qualifier:
        "Share your device type, vehicle or equipment count, project locations, and preferred installation timing.",
    },
    definition: {
      h2: "What Is GPS Tracking Installation?",
      body: [
        "GPS tracking installation is the professional installation of a GPS tracking device and related wiring in a commercial vehicle. Ultimate Fleet GPS helps fleet operators and businesses install the GPS tracking hardware selected for the project, including mounting, connection, and routing, at the project location. This page covers physical installation only.",
        "Installation requests may involve one vehicle, multiple fleet vehicles, or an entire fleet, including commercial and construction vehicles. When requesting service, provide the device type, vehicle count, project locations, and preferred installation timing so Ultimate Fleet GPS can understand the installation request.",
      ],
    },
    scope: {
      h2: "What GPS Tracking Installation Can Include",
      body: [
        "GPS tracking installation requirements vary by device, vehicle type, equipment, and project scope. Depending on the deployment, installation may include the following work:",
      ],
      lists: [
        {
          style: "checklist",
          items: [
            "Device mounting: Secure placement of the GPS tracking device in an appropriate location within the vehicle.",
            "Power and electrical connections: Connection of the device to the appropriate vehicle power source.",
            "Wire routing and protection: Organized routing and securing of associated wiring to support a clean installation.",
            "Installation documentation: Every installation is photo documented, and you'll receive that documentation automatically.",
          ],
        },
      ],
    },
    vehiclesBody:
      "GPS tracking installation projects may involve different types of commercial vehicles. The appropriate installation approach depends on the vehicle, device, available power connections, and project requirements.",
    vehicleContext: {
      listHeading: "Common vehicle applications",
      note: "Vehicle applications vary by project. Include the device, vehicle type, equipment, project location, and installation requirements with your request so Ultimate Fleet GPS can understand the installation request.",
    },
    fit: {
      h2: "Explore Related Fleet Installation Services",
      body: [
        "GPS tracking may be one part of a larger fleet technology deployment. Explore related installation services to identify the right starting point for your vehicle, device, or multi-vehicle project.",
      ],
      links: [
        {
          label: "Explore Fleet Telematics Installation",
          href: serviceCards["fleet-telematics-installation"].href,
        },
        {
          label: "Explore ELD Installation",
          href: serviceCards["eld-installation"].href,
        },
        {
          label: "Explore Dashcam and Camera Installation",
          href: serviceCards["dashcam-camera-installation"].href,
        },
        {
          label: "Explore Fleet Rollout Services",
          href: serviceCards["fleet-rollouts"].href,
        },
      ],
    },
    midCtaHeading: "Ready to Plan Your GPS Tracking Installation?",
    midCtaBody:
      "Share your device type, vehicle or equipment count, project locations, and preferred installation timing. We'll use those details to understand your project requirements.",
    midCtaLabel: "Request a GPS Installation Quote",
    documentationCards: DOCUMENTATION_CARDS,
    nationwideExtra:
      "Include your project locations in the installation request.",
    nationwideContext: {
      body: [
        "Ultimate Fleet GPS provides mobile installation support at customer-designated project locations for commercial vehicles and multi-vehicle deployments.",
        "Include each project location, vehicle or equipment count, device type, and preferred timing in your request so Ultimate Fleet GPS can understand the installation requirements.",
      ],
      links: [
        {
          label: "Explore Nationwide Fleet Installation Coverage",
          href: "/coverage/",
        },
        {
          label: "Learn How Fleet Installation Projects Are Coordinated",
          href: "/our-process/",
        },
      ],
    },
    relatedInstallCatalog: true,
    related: [
      "fleet-telematics-installation",
      "eld-installation",
      "dashcam-camera-installation",
      "fleet-rollouts",
    ],
    faqHeading: "GPS Tracking Installation FAQs",
    faqLayout: "columns",
    quoteH2: "Request GPS Tracking Installation Support",
    quoteAlignTop: true,
    quoteBackground: {
      src: "/images/services/gps-tracking-installation/ultimate-fleet-gps-gps-tracking-quote-request-fleet-yard-background.webp",
      width: 3344,
      height: 1882,
    },
    quoteServiceNeedLabel: "Device or equipment type",
    quoteGuide: {
      intro:
        "Planning a GPS tracking installation for commercial vehicles? Share your project details so Ultimate Fleet GPS can understand the equipment, vehicle count, locations, and timing involved.",
      support:
        "The more information you provide, the easier it is to understand the installation requirements.",
      includeHeading: "Include the following details when available:",
      includeItems: [
        "GPS device or equipment type",
        "Number and type of vehicles or assets",
        "Project location or locations",
        "Preferred installation timing",
        "Known deployment details",
      ],
    },
  },

  "eld-installation": {
    slug: "eld-installation",
    pathname: "/services/eld-installation/",
    breadcrumbLabel: "ELD Installation",
    serviceTypes: ["ELD installation"],
    scopeItems: [
      "ELD and AOBRD hardware",
      "On-site installation",
      "Nationwide service context",
    ],
    hero: {
      eyebrow: "On-Site ELD Installation",
      h1: "Mobile ELD Installation for Commercial Fleets",
      intro:
        "Ultimate Fleet GPS provides on-site installation support for ELD and AOBRD hardware in commercial vehicles. We work with fleet operators coordinating installations for one vehicle or a larger fleet project at their location.\n\nWhen requesting a quote, share the equipment being installed, vehicle count, installation locations, and preferred timing. This information helps us understand your project and discuss the next steps.",
      ctaLabel: "Request an Installation Quote",
      qualifier:
        "Tell us about your ELD or AOBRD equipment, fleet size, installation locations, and preferred schedule.",
    },
    heroBackgroundImage: {
      src: "/images/services/eld-installation/hero/ultimate-fleet-gps-eld-installation-commercial-truck-cab-hero-16x9.webp",
      width: 3344,
      height: 1882,
    },
    definition: {
      h2: "What Is ELD Installation?",
      body: [
        "ELD installation is the physical installation of electronic logging device (ELD) hardware in a commercial vehicle. Depending on the equipment and project, installation may also involve AOBRD hardware. Ultimate Fleet GPS provides on-site installation support for fleet projects. To discuss a request, share the equipment type, number of vehicles, installation locations, and preferred timing.",
      ],
      footnoteCallout: true,
      footnotes: [
        "Ultimate Fleet GPS provides physical installation support. We do not provide ELD service, compliance consulting, or regulatory advice.",
      ],
    },
    scope: {
      h2: "What ELD Installation Can Include",
      body: [],
      lists: [
        {
          style: "labeled",
          icons: ["mounting", "connection", "routing"],
          items: [
            "Mounting: Physical placement of approved ELD or AOBRD hardware in the vehicle cab.",
            "Connection: Physical connection of the approved hardware as part of the installation.",
            "Cable routing: Routing installation-related cables within the vehicle.",
          ],
        },
      ],
    },
    vehiclesBody:
      "ELD and AOBRD hardware installation projects can involve different types of commercial vehicles. The vehicle, equipment, and installation requirements depend on the project, so fleet operators should confirm the details for their specific vehicles and devices when requesting a quote.",
    vehicleContext: {
      h2: "ELD Installation Across Commercial Vehicle Types",
      listHeading: "Common vehicle types:",
      note: "These are examples of common project contexts. They do not mean every ELD or AOBRD device can be installed in every vehicle. Share your vehicle types, equipment, fleet size, installation locations, and preferred timing so Ultimate Fleet GPS can discuss your project.",
    },
    fit: {
      h2: "Explore Related Fleet Installation Services",
      body: [
        "If your project includes equipment beyond ELD or AOBRD hardware, explore these related fleet installation services. Each page explains a different type of installation support, so you can find a useful starting point for your request.",
      ],
      linksAsButtons: true,
      links: [
        {
          label: "Fleet telematics installation",
          href: serviceCards["fleet-telematics-installation"].href,
        },
        {
          label: "GPS tracking installation",
          href: serviceCards["gps-tracking-installation"].href,
        },
        {
          label: "Dashcam and camera installation",
          href: serviceCards["dashcam-camera-installation"].href,
        },
        {
          label: "Fleet rollout services",
          href: serviceCards["fleet-rollouts"].href,
        },
      ],
      closing: [
        "Tell us which equipment you need installed, how many vehicles are involved, and where the vehicles will be available. Ultimate Fleet GPS can discuss your project requirements and next steps.",
      ],
    },
    midCtaHeading: "Need ELD or AOBRD Hardware Installation Support?",
    midCtaBody:
      "Ultimate Fleet GPS provides on-site installation support for approved ELD and AOBRD hardware at commercial vehicle project locations nationwide. Whether your project involves one vehicle or a larger fleet, share a few details so we can understand the scope and discuss next steps.\n\nInclude the equipment being installed, vehicle types and count, project location or locations, and your preferred timing when you request a quote.",
    midCtaLabel: "Request an Installation Quote",
    documentationText:
      "After an ELD or AOBRD hardware installation, photo documentation can provide a visual record of the work completed on each vehicle. Fleet operators can ask about the documentation available for their project when requesting a quote.",
    nationwideExtra: "Include project locations in the installation request.",
    nationwideContext: {
      body: [
        "Ultimate Fleet GPS provides mobile ELD and AOBRD hardware installation support at customer project locations nationwide. Fleet operators can request service for one vehicle or coordinate a larger installation project.",
        "To help discuss your project, share the vehicle types and number of vehicles, the ELD or AOBRD equipment involved, where the vehicles will be available, and your preferred timing.",
      ],
      links: [{ label: "View installation coverage", href: "/coverage/" }],
    },
    relatedSection: {
      h2: "Related Fleet Installation Services",
      intro:
        "Explore related fleet technology installation services from Ultimate Fleet GPS. Choose a service to learn more about the equipment and project support it covers.",
      cards: [
        {
          title: "Fleet Telematics Installation",
          description:
            "On-site installation support for fleet telematics equipment, including GPS tracking, ELD and AOBRD hardware, TPMS, dashcams, and other fleet technology.",
          linkLabel: "Explore fleet telematics installation",
          href: serviceCards["fleet-telematics-installation"].href,
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-fleet-management-equipment-installation-commercial-vehicle.webp",
            width: 2896,
            height: 2172,
            alt: "Fleet technology cables and hardware inside a commercial vehicle",
          },
        },
        {
          title: "GPS Tracking Installation",
          description:
            "On-site installation of GPS tracking hardware in commercial fleet vehicles.",
          linkLabel: "Explore GPS tracking installation",
          href: serviceCards["gps-tracking-installation"].href,
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-gps-tracking-installation-commercial-vehicle.webp",
            width: 2896,
            height: 2172,
            alt: "GPS tracking hardware being mounted under a commercial vehicle dashboard",
          },
        },
        {
          title: "Dashcam & Camera Installation",
          description:
            "Fleet dashcam and windshield-mounted video recorder installation.",
          linkLabel: "Explore dashcam and camera installation",
          href: serviceCards["dashcam-camera-installation"].href,
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-fleet-dashcam-installation-commercial-truck.webp",
            width: 2896,
            height: 2172,
            alt: "Dashcam mounted on the windshield of a commercial truck",
          },
        },
        {
          title: "Fleet Rollout Services",
          description:
            "Installation coordination for projects involving multiple vehicles or locations.",
          linkLabel: "Explore fleet rollout services",
          href: serviceCards["fleet-rollouts"].href,
          image: {
            src: "/images/services/services-hub/ultimate-fleet-gps-on-site-fleet-projects-nationwide-commercial-vehicles.webp",
            width: 3318,
            height: 1896,
            alt: "Several commercial fleet vehicles at a project location",
          },
        },
        {
          title: "All Fleet Installation Services",
          description:
            "Browse the full range of fleet technology installation services.",
          linkLabel: "Explore all fleet installation services",
          href: shared.related.allCard.href,
          image: {
            src: "/images/services/services-hub/ultimate-fleet-gps-services-hub-commercial-vehicle-installation-support.webp",
            width: 2896,
            height: 2172,
            alt: "Commercial vehicles staged outside a fleet facility",
          },
        },
      ],
    },
    related: [
      "fleet-telematics-installation",
      "gps-tracking-installation",
      "dashcam-camera-installation",
      "fleet-rollouts",
    ],
    faqHeading: "ELD Installation Questions and Answers",
    faqLayout: "columns",
    quoteH2: "Request an ELD or AOBRD Installation Quote",
    quoteIntro:
      "Tell us which approved ELD or AOBRD equipment you need installed, the vehicle types and number of vehicles, where they’ll be available, and your preferred timing. Ultimate Fleet GPS provides mobile installation support at customer project locations nationwide. Share your project details so the team can understand the request and discuss next steps.",
    quoteBackground: {
      src: "/images/services/eld-installation/ultimate-fleet-gps-eld-installation-quote-cta-background-commercial-fleet-16x9.webp",
      width: 3344,
      height: 1882,
    },
  },

  "dashcam-camera-installation": {
    slug: "dashcam-camera-installation",
    pathname: "/services/dashcam-camera-installation/",
    breadcrumbLabel: "Dashcam & Camera Installation",
    serviceTypes: ["Fleet dashcam and video recorder installation"],
    scopeItems: [
      "Dashcam and video recorder hardware",
      "On-site installation",
      "Nationwide installation service",
    ],
    heroBackgroundImage: {
      src: "/images/services/dashcam-camera-installation/hero/ultimate-fleet-gps-commercial-dashcam-truck-cab-hero-background-16x9.webp",
      width: 3344,
      height: 1882,
    },
    hero: {
      h1: "Commercial Dashcam and Camera Installation",
      intro:
        "Ultimate Fleet GPS provides on-site installation of dashcams and windshield-mounted video recorder hardware for commercial and fleet vehicles. We install the hardware; we are not the video platform vendor.",
      ctaLabel: "Request an Installation Quote",
    },
    definition: {
      h2: "What Is Dashcam and Camera Installation?",
      body: [
        "Dashcam and camera installation is the physical mounting, connection, and routing work required to place approved fleet dashcam and windshield-mounted video recorder hardware into commercial vehicles.",
        "Ultimate Fleet GPS installs and deploys this hardware. We are not the video platform vendor.",
        "This page covers physical installation. It does not describe camera features, monitoring, video storage, coaching, platform services, or safety outcomes.",
        "To scope a project, share your equipment, vehicle count, project locations, and preferred timing.",
      ],
    },
    scope: {
      h2: "What Dashcam and Camera Installation Can Include",
      body: [],
      lists: [
        {
          style: "checklist",
          items: [
            "Mounting: Physically mounting a dashcam or windshield-mounted video recorder in the vehicle.",
            "Connection and cable routing: Connecting the hardware and routing its cables within the vehicle.",
            "On-site coordination: Coordinating installation at the customer’s location for one vehicle or a fleet.",
          ],
        },
      ],
    },
    vehiclesBody:
      "Fleet dashcam and windshield-mounted video recorder hardware is installed on fleet, commercial, and construction vehicles.",
    fit: {
      h2: "When Dashcam and Camera Installation May Be a Fit",
      body: [],
      lists: [
        {
          heading: "This service may be a fit when",
          items: [
            "You have approved dashcam or windshield-mounted video recorder hardware that needs physical installation.",
            "Your project involves commercial fleet vehicles.",
            "You can share the vehicle count and project locations.",
          ],
        },
      ],
      footnotes: [FIT_NOTE],
    },
    fitBackground: {
      src: "/images/services/dashcam-camera-installation/ultimate-fleet-gps-commercial-fleet-vehicles-service-fit-background-16x9.webp",
      width: 3344,
      height: 1882,
    },
    fitRelated: {
      heading: "Other request contexts",
      items: [
        {
          context: "Connected fleet hardware",
          link: {
            label: serviceCards["fleet-telematics-installation"].title,
            href: serviceCards["fleet-telematics-installation"].href,
          },
        },
        {
          context: "GPS tracking hardware",
          link: {
            label: serviceCards["gps-tracking-installation"].title,
            href: serviceCards["gps-tracking-installation"].href,
          },
        },
        {
          context: "ELD or AOBRD hardware",
          link: {
            label: serviceCards["eld-installation"].title,
            href: serviceCards["eld-installation"].href,
          },
        },
        {
          context: "A vehicle or fleet project across multiple locations",
          link: {
            label: serviceCards["fleet-rollouts"].title,
            href: serviceCards["fleet-rollouts"].href,
          },
        },
      ],
    },
    midCtaHeading:
      "Need fleet dashcam or video recorder hardware installation support?",
    midCtaBody:
      "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
    midCtaLabel: "Request an Installation Quote",
    nationwideExtra:
      "Include the number of vehicles receiving dashcam or video recorder hardware and each project location.",
    nationwideContext: {
      body: [
        "Ultimate Fleet GPS provides nationwide mobile installation at the customer's location.",
        "Include the number of vehicles receiving dashcam or video recorder hardware and the project location or locations in your installation request.",
      ],
      links: shared.nationwide.links,
    },
    relatedSection: {
      h2: "Related Fleet Installation Services",
      intro:
        "Explore related fleet technology installation services from Ultimate Fleet GPS. Choose a service to learn more about the equipment and project support it covers.",
      cards: [
        {
          title: "Fleet Telematics Installation",
          description:
            "On-site installation support for fleet telematics equipment, including GPS tracking, ELD and AOBRD hardware, TPMS, dashcams, and other fleet technology.",
          linkLabel: "Explore fleet telematics installation",
          href: serviceCards["fleet-telematics-installation"].href,
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-fleet-management-equipment-installation-commercial-vehicle.webp",
            width: 2896,
            height: 2172,
            alt: "Fleet technology cables and hardware inside a commercial vehicle",
          },
        },
        {
          title: "GPS Tracking Installation",
          description:
            "On-site installation of GPS tracking hardware in commercial fleet vehicles.",
          linkLabel: "Explore GPS tracking installation",
          href: serviceCards["gps-tracking-installation"].href,
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-gps-tracking-installation-commercial-vehicle.webp",
            width: 2896,
            height: 2172,
            alt: "GPS tracking hardware being mounted under a commercial vehicle dashboard",
          },
        },
        {
          title: "ELD Installation",
          description: serviceCards["eld-installation"].description,
          linkLabel: "Explore ELD installation",
          href: serviceCards["eld-installation"].href,
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-eld-installation-commercial-truck-cab.webp",
            width: 2896,
            height: 2172,
            alt: "Technician mounting an in-cab device on the dashboard of a commercial truck",
          },
        },
        {
          title: "Fleet Rollout Services",
          description:
            "Installation coordination for projects involving multiple vehicles or locations.",
          linkLabel: "Explore fleet rollout services",
          href: serviceCards["fleet-rollouts"].href,
          image: {
            src: "/images/services/services-hub/ultimate-fleet-gps-on-site-fleet-projects-nationwide-commercial-vehicles.webp",
            width: 3318,
            height: 1896,
            alt: "Several commercial fleet vehicles at a project location",
          },
        },
        {
          title: "All Fleet Installation Services",
          description:
            "Browse the full range of fleet technology installation services.",
          linkLabel: "Explore all fleet installation services",
          href: shared.related.allCard.href,
          image: {
            src: "/images/services/services-hub/ultimate-fleet-gps-services-hub-commercial-vehicle-installation-support.webp",
            width: 2896,
            height: 2172,
            alt: "Commercial vehicles staged outside a fleet facility",
          },
        },
      ],
    },
    related: [
      "fleet-telematics-installation",
      "gps-tracking-installation",
      "eld-installation",
      "fleet-rollouts",
    ],
    faqHeading: "Dashcam and Camera Installation FAQs",
    faqLayout: "columns",
    quoteH2: "Request a Dashcam and Camera Installation Quote",
    quoteBackground: {
      src: "/images/services/dashcam-camera-installation/ultimate-fleet-gps-dashcam-camera-quote-commercial-fleet-background-16x9.webp",
      width: 3344,
      height: 1882,
    },
  },

  "fleet-rollouts": {
    slug: "fleet-rollouts",
    pathname: "/services/fleet-rollouts/",
    breadcrumbLabel: "Fleet Rollouts",
    serviceTypes: [],
    scopeItems: [
      "One vehicle or an entire fleet",
      "Multiple project locations",
    ],
    heroBackgroundImage: {
      src: "/images/services/fleet-rollouts/hero/ultimate-fleet-gps-fleet-rollout-commercial-vehicles-hero-background-16x9.webp",
      width: 3344,
      height: 1882,
    },
    hero: {
      intro:
        "Ultimate Fleet GPS provides on-site installation support for fleet technology deployments, from a single vehicle to multiple vehicles across project locations.",
      ctaLabel: "Request an Installation Quote",
      qualifier:
        "Tell us your equipment, vehicle count, project locations, and preferred timing so we can understand your installation request.",
    },
    definition: {
      h2: "What Are Fleet Rollout Installation Services?",
      body: [
        "Fleet Rollout Installation Services provide a starting point for installation requests involving one vehicle or an entire fleet, including multiple project locations.",
        "Share your equipment, vehicle count, project locations, and preferred timing to describe the context of your request.",
      ],
    },
    scope: {
      h2: "Installation Context for Commercial Fleet Projects",
      body: [
        "These details help us understand your installation request and prepare a relevant quote.",
      ],
      lists: [
        {
          style: "labeled",
          items: [
            "Equipment: Identify the fleet technology or hardware to be installed.",
            "Vehicle count: Share how many vehicles are included.",
            "Project locations: List the location or locations relevant to the request.",
            "Preferred timing: Share the requested timing or deployment phases, if applicable.",
          ],
        },
      ],
    },
    vehicleContext: {
      h2: "Installation Support for One Vehicle or an Entire Fleet",
    },
    vehiclesBody:
      "One vehicle: Describe the equipment and vehicle context for an individual installation request. An entire fleet: Describe the vehicle count and installation context for a broader fleet request.",
    fit: {
      h2: "When Fleet Rollout Installation Services May Be a Fit",
      body: [
        "Use these related service pages to find the most relevant starting point for your installation request. For one vehicle or an entire fleet, including multiple project locations, this page is the starting point.",
      ],
      linksAsButtons: true,
      links: [
        {
          label: serviceCards["fleet-telematics-installation"].title,
          href: serviceCards["fleet-telematics-installation"].href,
        },
        {
          label: serviceCards["gps-tracking-installation"].title,
          href: serviceCards["gps-tracking-installation"].href,
        },
        {
          label: serviceCards["eld-installation"].title,
          href: serviceCards["eld-installation"].href,
        },
        {
          label: serviceCards["dashcam-camera-installation"].title,
          href: serviceCards["dashcam-camera-installation"].href,
        },
      ],
      footnotes: [FIT_NOTE],
    },
    midCtaHeading:
      "Discuss Installation Support for One Vehicle or an Entire Fleet",
    midCtaBody:
      "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
    midCtaLabel: "Request an Installation Quote",
    nationwideExtra:
      "Include the locations relevant to the request along with your equipment, vehicle count, and preferred timing.",
    nationwideContext: {
      h2: "Multiple Project Locations",
      body: [
        "For requests involving multiple project locations, include the locations relevant to the installation request, along with your equipment, vehicle count, and preferred timing. These details help describe the project request; they do not guarantee that every location or schedule can be accommodated.",
        shared.nationwide.lead,
      ],
      linksAsButtons: true,
      links: shared.nationwide.links.filter((link) => link.href === "/coverage/"),
    },
    relatedSection: {
      h2: "Related Fleet Installation Services",
      intro:
        "Explore related fleet technology installation services from Ultimate Fleet GPS.",
      cards: [
        {
          ...serviceCards["fleet-telematics-installation"],
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-fleet-management-equipment-installation-commercial-vehicle.webp",
            width: 2896,
            height: 2172,
            alt: "Fleet technology cables and hardware inside a commercial vehicle",
          },
        },
        {
          ...serviceCards["gps-tracking-installation"],
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-gps-tracking-installation-commercial-vehicle.webp",
            width: 2896,
            height: 2172,
            alt: "GPS tracking hardware being mounted under a commercial vehicle dashboard",
          },
        },
        {
          ...serviceCards["eld-installation"],
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-eld-installation-commercial-truck-cab.webp",
            width: 2896,
            height: 2172,
            alt: "Technician mounting an in-cab device on the dashboard of a commercial truck",
          },
        },
        {
          ...serviceCards["dashcam-camera-installation"],
          image: {
            src: "/images/services/service-cards/ultimate-fleet-gps-fleet-dashcam-installation-commercial-truck.webp",
            width: 2896,
            height: 2172,
            alt: "Fleet dashcam mounted in a commercial truck",
          },
        },
      ],
    },
    related: [
      "fleet-telematics-installation",
      "gps-tracking-installation",
      "eld-installation",
      "dashcam-camera-installation",
    ],
    faqHeading: "Fleet Rollout Installation Services FAQ",
    faqLayout: "columns",
    quoteH2: "Request an Installation Quote",
    quoteBackground: {
      src: "/images/services/fleet-rollouts/ultimate-fleet-gps-fleet-rollout-quote-background-commercial-fleet-vehicles-16x9.webp",
      width: 3344,
      height: 1882,
    },
  },
};

const pages = {
  "fleet-telematics-installation": fleetTelematicsInstallationContent,
  "gps-tracking-installation": gpsTrackingInstallationContent,
  "eld-installation": eldInstallationContent,
  "dashcam-camera-installation": dashcamCameraInstallationContent,
  "fleet-rollouts": fleetRolloutsContent,
} as const;

/**
 * The five service cards in display order, for pages outside the service
 * template (the coverage hub). Titles, descriptions, and routes come from
 * `serviceCards`, so they cannot drift from the service pages.
 */
export const SERVICE_CARD_ORDER = [
  "fleet-telematics-installation",
  "gps-tracking-installation",
  "eld-installation",
  "dashcam-camera-installation",
  "fleet-rollouts",
] as const satisfies readonly ServiceSlug[];

export function getServiceCard(slug: ServiceSlug): HubRelatedCard {
  return serviceCards[slug];
}

/** Approved vehicle-context examples and their clarification (claims rows 26 and 39). */
export const vehicleContext = shared.vehicles;

/** Assemble everything ServicePageTemplate needs for one service page. */
export function getServicePage(slug: ServiceSlug): ServicePageBundle {
  const content = contents[slug];
  return {
    page: pages[slug],
    content,
    shared,
    primaryCta: {
      label: "Request an Installation Quote",
      href: FORM_ANCHOR,
      journey: "commercial",
      event: "cta_quote_click",
    },
    phone: {
      href: utilityBar.phoneHref,
      label: `${shared.callLabel} ${utilityBar.phoneLabel}`,
      numberLabel: utilityBar.phoneLabel,
    },
    heroImage: servicePagesImages[slug].hero,
    contextImage: servicePagesImages[slug].context,
    definitionImage: servicePagesImages[slug].definition,
    scopeImage: servicePagesImages[slug].scope,
    fitImage: servicePagesImages[slug].fit,
    nationwideImage: servicePagesImages[slug].nationwide,
    installerQuestions: {
      content: careersLandingContent.contact,
      image: careersHubImages.contact,
    },
    installCatalog: content.relatedInstallCatalog
      ? homepageContent.whatWeInstall
      : undefined,
    relatedCards: content.related.map((related) => serviceCards[related as ServiceSlug]),
  };
}
