import { CAREERS_PATH } from "@/data/jobs";
import { applyCta } from "@/data/jobs/ctas";
import { whoWeServeImages } from "@/data/site/who-we-serve-images";
import type { Cta, HomepageContent } from "@/types/content";

/**
 * Locked homepage copy.
 *
 * Restructured 2026-09-18 for the commercial-first override recorded in
 * 01-business-source-of-truth.md section 32. Every claim here is gated
 * against docs/_claims-inventory.md; nothing marked "needs confirmation"
 * there appears below.
 *
 * Facts used here and their source-of-truth status:
 *   In business since 2011  Approved, section 4 and 25
 *   Nationwide service      Approved, section 8.2
 *   No walk-in facility     Approved, section 5.3. The Phoenix corporate office
 *                           (section 33.4) is not an approved homepage surface,
 *                           so the address is not published here.
 *   Mon-Fri 8:00 AM-6:00 PM Approved, section 5.4
 *   Equipment scope         Approved by stakeholder 2026-09-10, section 9.1
 *   Vehicle scope           Approved by stakeholder 2026-09-10, section 12.1
 *   Platform experience     Approved by stakeholder 2026-09-10, section 14
 *   Contractor engagement   Approved by stakeholder 2026-09-10, section 7.2
 *   Current installer       Approved by stakeholder 2026-09-19, section 33.1.
 *   openings, candidates    Homepage wording states only that openings exist,
 *   accepted nationwide     for independent contractors, with candidates accepted
 *                           nationwide. No pay figure and no claim that an
 *                           opening is in a named market. The banner's primary
 *                           button is Apply (/careers/apply/), and the
 *                           Installer Network stays a separate secondary link.
 *   Project capacity range  Approved by stakeholder 2026-09-10, section 11.1
 *   Photo documentation     Approved by stakeholder 2026-09-10, section 17.1
 *
 * Capacity and reach are separate confirmed facts. "one vehicle or an entire
 * fleet" rests on section 11.1, not on the nationwide reach in section 8.2.
 * Neither may be derived from the other. See the guardrail in section 25.
 *
 * The photo documentation sentence is the approved exact wording: "Every
 * installation is photo documented, and you'll receive that documentation
 * automatically." No timeframe, format, channel, or retention period is
 * added anywhere this sentence appears.
 *
 * Pricing, warranties, guarantees, and response times are omitted entirely
 * per docs/_claims-inventory.md item 21 (unconfirmed across the board).
 *
 * No em dash appears in any string in this file. Section 3.1 of CLAUDE.md is
 * project wide.
 */

const CONTACT_ROUTE = "/contact/";
const SERVICES_ROUTE = "/services/";
const ABOUT_ROUTE = "/about/";
const TECHNICIAN_ROLE_ROUTE = "/careers/mobile-installation-technician/";

const QUOTE_CTA: Cta = {
  label: "Request an Installation Quote",
  href: CONTACT_ROUTE,
  journey: "commercial",
  event: "cta_quote_click",
};

const JOIN_NETWORK_CTA: Cta = {
  label: "Join the Installer Network",
  href: TECHNICIAN_ROLE_ROUTE,
  journey: "recruitment",
  event: "cta_installer_network_click",
};

const EXPLORE_SERVICES_CTA: Cta = {
  label: "Explore Fleet Installation Services",
  labelBreakAfter: "Explore Fleet",
  href: SERVICES_ROUTE,
  journey: "commercial",
  event: "cta_request_service_click",
};

const CAREERS_PATHWAY_CTA: Cta = {
  label: "Learn About Installer Careers",
  labelBreakAfter: "Learn About",
  href: CAREERS_PATH,
  journey: "recruitment",
  event: "cta_careers_click",
};

export const homepageContent: HomepageContent = {
  hero: {
    h1: "Mobile Installation of GPS, ELD, and Fleet Electronics, Nationwide",
    subhead:
      "Ultimate Fleet GPS sends technicians directly to your location to install GPS, ELD, and fleet electronics on fleet, commercial, and construction vehicles - one vehicle or an entire fleet. In business since 2011, nationwide.",
    primaryCta: QUOTE_CTA,
    secondaryCta: JOIN_NETWORK_CTA,
  },

  directAnswer: {
    eyebrow: "About Ultimate Fleet GPS",
    heading: "Mobile Fleet Installation Services for Commercial Vehicles",
    body: [
      "Ultimate Fleet GPS provides on-site fleet electronics installation for commercial, construction, transportation, and service vehicles nationwide. Our field technicians install GPS tracking devices, electronic logging devices, AOBRD equipment, fleet cameras, tire-pressure monitoring systems, and related vehicle electronics at the customer's location.",
      "Mobile installation helps fleet operators coordinate equipment deployment where vehicles are parked, staged, or operating, while reducing unnecessary vehicle downtime. Our services can support individual vehicles, mixed fleets, and larger installation projects that require consistent procedures and installation documentation.",
      "In business since 2011, Ultimate Fleet GPS connects commercial customers with field installation resources for fleet technology deployments. We work on-site at customer locations rather than operating as a walk-in installation facility.",
    ],
    link: {
      label: "Learn more about Ultimate Fleet GPS",
      href: ABOUT_ROUTE,
    },
    pathwaysHeading: "Choose the right path",
    pathways: [
      {
        variant: "fleet",
        label: "Fleet operators",
        body: "Request an installation quote or explore fleet installation services for your commercial vehicles or fleet deployment.",
        ctas: [
          { cta: QUOTE_CTA, emphasis: "primary" },
          { cta: EXPLORE_SERVICES_CTA, emphasis: "secondary" },
        ],
      },
      {
        variant: "installer",
        label: "Installers",
        body: "Learn about current installer openings and the Installer Network. Training may be available for qualified applicants, including people who do not have previous installation experience.",
        ctas: [{ cta: CAREERS_PATHWAY_CTA, emphasis: "installerRed" }],
      },
    ],
  },

  whatWeInstall: {
    h2: "What We Install: Fleet Electronics for Commercial Vehicles",
    intro:
      "Ultimate Fleet GPS provides on-site installation of GPS tracking, electronic logging, tire-pressure monitoring, dashcams, and other fleet electronics for commercial and construction vehicles nationwide. Our technicians travel directly to your location, helping fleet operators equip individual vehicles, groups of vehicles, or entire fleets with professionally installed technology.",
    // Card copy supplied and approved by the client in session 2026-09-18.
    // "Vocational", "professional installation", and the AOBRD qualifier are
    // pending a written record. See docs/_claims-inventory.md item 28. No
    // savings, accident-reduction, legal, or compliance claims appear here.
    cards: {
      "GPS tracking installation": {
        description:
          "Professional installation of GPS tracking equipment for commercial vehicles, work trucks, service vans, and fleet vehicles. Proper placement and cable routing help support reliable vehicle visibility while maintaining a clean, professional installation.",
        useCases: [
          "Vehicle location tracking",
          "Fleet visibility",
          "Service-vehicle monitoring",
          "Construction equipment oversight",
          "Mileage and route documentation",
        ],
      },
      "ELD installation": {
        description:
          "On-site installation of electronic logging devices in commercial trucks and fleet vehicles. Equipment is positioned and connected for practical driver access while maintaining a clean and secure vehicle installation.",
        useCases: [
          "Electronic logging equipment",
          "Commercial trucking operations",
          "Driver workflow support",
          "Fleet technology upgrades",
          "Multi-vehicle deployments",
        ],
      },
      "AOBRD installation": {
        description:
          "Ultimate Fleet GPS also supports installation work involving AOBRD equipment and legacy fleet-recording systems when requested by an approved fleet or equipment provider.",
        note: "Equipment availability and regulatory use should be confirmed with the fleet operator and applicable provider.",
      },
      "TPMS installation": {
        description:
          "Installation of tire-pressure monitoring equipment for commercial trucks, fleet vehicles, and vocational equipment. Proper sensor placement and system setup can help fleet operators monitor tire-pressure information across their vehicles.",
        useCases: [
          "Commercial truck fleets",
          "Construction vehicles",
          "Trailer and vocational equipment",
          "Preventive fleet maintenance",
          "Tire-pressure monitoring systems",
        ],
      },
      "Fleet dashcam installation": {
        description:
          "Professional installation of fleet dashcams and vehicle cameras in commercial vehicles. Devices are mounted carefully with clean cable routing and positioned to support the intended fleet-technology setup without unnecessarily obstructing the driver's view.",
        useCases: [
          "Forward-facing vehicle cameras",
          "Fleet safety programs",
          "Incident documentation",
          "Driver coaching systems",
          "Commercial vehicle monitoring",
        ],
      },
      "Fleet management equipment installation": {
        description:
          "Installation of additional fleet-management hardware, vehicle electronics, and connected equipment based on the requirements of the fleet, equipment provider, or deployment project.",
        useCases: [
          "Fleet telematics hardware",
          "Connected vehicle equipment",
          "Auxiliary vehicle electronics",
          "Multi-vehicle deployments",
          "Platform-specific installation projects",
        ],
      },
    },
  },

  whoWeServe: {
    eyebrow: "Who We Serve",
    h2: "Fleet, Commercial, and Construction Vehicles",
    intro:
      "Ultimate Fleet GPS provides mobile GPS, ELD, dashcam, TPMS, and fleet-electronics installation for commercial vehicles throughout the United States. Our technicians travel directly to fleet yards, service facilities, construction operations, and other customer locations to support individual vehicles, multi-vehicle deployments, and larger fleet projects.",
    cards: [
      {
        title: "Fleet Vehicles",
        description:
          "We install fleet electronics on work vans, service vehicles, delivery vehicles, utility vehicles, and other vehicles managed as part of a commercial fleet. On-site installation helps fleet operators coordinate equipment deployments at their own location.",
        useCases: [
          "GPS tracking installation",
          "ELD installation",
          "Fleet dashcam installation",
          "TPMS equipment",
          "Multi-vehicle deployments",
          "Fleet technology upgrades",
        ],
        link: {
          label: "Explore Fleet Installation Services",
          href: SERVICES_ROUTE,
        },
        image: whoWeServeImages.fleet,
      },
      {
        title: "Commercial Vehicles",
        description:
          "Our mobile installation services support delivery vehicles, work trucks, utility vehicles, and other commercial vehicles that depend on connected fleet technology. Equipment can be installed on-site to help fleet operators coordinate vehicle technology projects at their own location.",
        useCases: [
          "Delivery and service fleets",
          "Commercial truck electronics",
          "Vehicle cameras and dashcams",
          "Telematics equipment",
          "Driver-accessible device installation",
          "Commercial fleet rollouts",
        ],
        link: {
          label: "Discuss a Commercial Installation Project",
          href: CONTACT_ROUTE,
          event: "cta_quote_click",
        },
        image: whoWeServeImages.commercial,
      },
      {
        title: "Construction Vehicles",
        description:
          "Ultimate Fleet GPS supports GPS, telematics, tracking, and other fleet-electronics installation for construction and vocational vehicles. Mobile service allows equipment and vehicles to be addressed at a construction yard, equipment facility, or approved customer location.",
        useCases: [
          "Construction fleet tracking",
          "Heavy-duty truck electronics",
          "Construction and vocational equipment installation support",
          "Vocational vehicle installations",
          "Jobsite fleet coordination",
          "Equipment deployment projects",
        ],
        link: {
          label: "Request a Construction Fleet Quote",
          href: CONTACT_ROUTE,
          event: "cta_quote_click",
        },
        image: whoWeServeImages.construction,
      },
    ],
    support: {
      heading: "Installation Support at Your Location",
      body: "Because Ultimate Fleet GPS works on-site, fleet operators do not have to send every vehicle to a separate installation facility. Project details, equipment requirements, vehicle types, and location logistics can be reviewed before scheduling.",
      cta: QUOTE_CTA,
    },
  },

  // Compact proof strip. Distinct from the "Why Ultimate Fleet GPS"
  // section (`trust`), which owns the benefit headings. Each item restates a
  // confirmed fact only. See docs/_claims-inventory.md items 10, 11, 12, 16.
  whyChooseUs: {
    heading: "Ultimate Fleet GPS at a glance",
    items: [
      "In business since 2011",
      "Every installation photo documented",
      "Fleet, commercial, and construction vehicles",
      "Independent contractor technicians",
    ],
  },

  // Narrowly factual, non-promissory summary. This is deliberately not a
  // claimed multi-step company process - the fuller process description
  // (any additional stages beyond what is confirmed here) is pending
  // stakeholder confirmation. See docs/_claims-inventory.md.
  process: {
    h2: "How a Deployment Works",
    body: "We coordinate project details, schedule on-site installation, and document completed installation work. An independent contractor technician travels directly to your location to complete the installation, one vehicle or an entire fleet, Monday through Friday, 8:00 AM to 6:00 PM.",
  },

  largeRollout: {
    h2: "One Vehicle or an Entire Fleet",
    body: "Ultimate Fleet GPS coordinates installation projects of any size nationwide, from a single vehicle to a full fleet rollout, with technicians traveling directly to each location.",
    cta: QUOTE_CTA,
  },

  commercial: {
    h2: "Installation Services for Fleet and Commercial Vehicles",
    body: "Ultimate Fleet GPS provides mobile GPS, ELD, and fleet electronics installation for fleet, commercial, and construction vehicles nationwide, coordinated on-site at your location. We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, and others our technicians already know. In business since 2011, with technicians who travel directly to you.",
    cta: QUOTE_CTA,
  },

  recruitingBanner: {
    eyebrow: "INSTALLER OPPORTUNITIES",
    // Current openings and nationwide candidates are approved (docs/01 section
    // 33.1 and 33.2, claims inventory rows 27, 48, and 50). The body's final
    // sentence uses "apply" on the owner's instruction, so the primary button
    // is the Apply link to /careers/apply/ (row 51). The Installer Network is
    // the secondary link, a separate registration for future opportunities,
    // never the application. No pay figure appears on the homepage.
    h2: "Current Openings for Mobile Installation Technicians",
    body: "Ultimate Fleet GPS has current openings for Mobile GPS, ELD, and AOBRD installation technicians. The work is independent contractor work, and candidates are accepted nationwide. No prior installation experience is required, and training is provided. Candidates with related vehicle electrical, telematics, automotive, audio, mechanical, or mobile installation experience are also encouraged to apply.",
    highlights: [
      "GPS, ELD, and AOBRD installation work",
      "On-site work at fleet, commercial, and construction locations",
      "Independent contractor engagement",
      "Candidates accepted nationwide",
    ],
    cta: applyCta,
    secondaryLink: {
      label: "Learn about the Installer Network",
      href: TECHNICIAN_ROLE_ROUTE,
    },
    disclosure:
      "Applying for the current opening, or joining the Installer Network, does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay. The Installer Network is a separate registration and is not an application.",
  },

  /**
   * Stakeholder-content-pending slot. Empty until real, approved proof
   * content (metrics, not testimonials or ratings, since none of those are
   * ever published per docs/_claims-inventory.md item 20) exists.
   */
  proof: {
    items: [],
  },

  trust: {
    h2: "Why Ultimate Fleet GPS",
    intro:
      "Ultimate Fleet GPS provides on-site GPS, ELD, dashcam, TPMS, and fleet-electronics installation for fleet, commercial, and construction vehicles nationwide. Ultimate Fleet GPS provides mobile fleet installation and commercial vehicle electronics installation for GPS, ELD, dashcam, TPMS, and other fleet equipment. In business since 2011, the company is built around the practical needs of distributed fleets: vehicles operate across multiple locations, installation work must be coordinated carefully, and equipment needs to be installed where the vehicles are located.",
    benefits: [
      {
        title: "Nationwide mobile service",
        body: "Technicians travel directly to fleet yards, commercial facilities, construction locations, and other approved installation sites across the United States.",
      },
      {
        title: "Experience with fleet electronics",
        body: "Ultimate Fleet GPS supports installation projects involving GPS tracking, ELDs, AOBRD equipment, fleet dashcams, TPMS, and other connected vehicle electronics.",
      },
      {
        title: "On-site installation coordination",
        body: "Customers can coordinate installation at their own location instead of moving every vehicle to a separate installation facility. Projects may involve one vehicle, several vehicles, or a larger fleet deployment.",
      },
      {
        title: "Direct project communication",
        body: "Installation requirements are coordinated around the vehicle type, equipment, location, fleet needs, and deployment plan. Every installation is photo documented, and you'll receive that documentation automatically.",
      },
    ],
    fleetManagers: {
      heading: "What this means for fleet managers",
      items: [
        "Coordinate installations at your location",
        "Support individual vehicles or multi-vehicle deployments",
        "Plan around vehicle types, equipment, and site logistics",
        "Technicians may work with platforms and equipment the fleet already uses, based on the requirements of the equipment provider and deployment project",
        "Coordinate GPS, ELD, dashcam, TPMS, and fleet-electronics projects",
        "Every installation is photo documented, and you'll receive that documentation automatically",
      ],
    },
    cta: {
      heading: "Planning a fleet-electronics installation project?",
      body: "Share your vehicle types, equipment requirements, fleet size, and service location to begin the conversation.",
      primary: QUOTE_CTA,
      servicesLink: {
        label: "Explore mobile fleet installation services",
        href: SERVICES_ROUTE,
      },
    },
    installerNetwork: {
      prompt: "Are you an experienced vehicle-electronics installer? Learn how to join the independent installer network.",
      link: {
        label: "Join the Installer Network",
        href: TECHNICIAN_ROLE_ROUTE,
        journey: "recruitment",
        event: "cta_installer_network_click",
      },
    },
  },

  faq: {
    h2: "Frequently Asked Questions",
    items: [
      {
        question: "What equipment do you install?",
        answer:
          "Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment on fleet, commercial, and construction vehicles, working with platforms including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, Zonar, LoJack, and dashcam systems.",
      },
      {
        question: "What areas does Ultimate Fleet GPS serve?",
        answer:
          "Ultimate Fleet GPS serves fleet and commercial vehicle customers nationwide, with technicians traveling directly to each project location.",
      },
      {
        question: "Do you document completed installations?",
        answer:
          "Every installation is photo documented, and you'll receive that documentation automatically.",
      },
      {
        question: "Can you handle one vehicle, or does it have to be a full fleet?",
        answer:
          "Ultimate Fleet GPS coordinates projects of any size nationwide, one vehicle or an entire fleet.",
      },
      {
        question: "What are your hours?",
        answer:
          "Ultimate Fleet GPS operates Monday through Friday, 8:00 AM to 6:00 PM.",
      },
      {
        question: "Does Ultimate Fleet GPS hire independent contractors?",
        answer:
          "Yes. Ultimate Fleet GPS has current openings for independent contractor technicians, and candidates are accepted nationwide. These are independent contractor roles, not W-2 employment positions. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      },
      {
        question: "What experience is useful for mobile installation work?",
        answer:
          "Experience with vehicle electrical systems, telematics equipment, or mobile installation work is relevant to the Installer Network. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      },
      {
        question: "Is this an employee position or an independent contractor opportunity?",
        answer:
          "Technicians are engaged as independent contractors, not employees. The Installer Network is not a W-2 employment position.",
      },
      {
        question: "Does joining the Installer Network guarantee an assignment?",
        answer:
          "No. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      },
      {
        question: "What types of vehicle electronics are installed?",
        answer:
          "Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment, plus dashcam and windshield-mounted video recorder systems, on fleet, commercial, and construction vehicles.",
      },
      {
        question: "Do you have a walk-in installation location?",
        answer:
          "No. Ultimate Fleet GPS technicians travel directly to the customer's location. There is no walk-in installation facility.",
      },
    ],
  },

  finalCta: {
    h2: "Ready to Get Started?",
    primaryCta: QUOTE_CTA,
    secondaryCta: JOIN_NETWORK_CTA,
  },
};
