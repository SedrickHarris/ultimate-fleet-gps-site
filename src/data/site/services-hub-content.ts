import type { ServicesHubPageContent } from "@/types/service-content";

/**
 * Section copy for the `/services/` hub.
 *
 * Every claim is gated against docs/_claims-inventory.md. Service cards cover
 * only the five existing service pages. No pricing, warranty, guarantee,
 * response-time, state, city, or certification language appears here.
 *
 * Vehicle scope: the confirmed categories are fleet, commercial, and
 * construction vehicles. The example list below uses only terms confirmed in
 * the claims inventory (rows 26 and 39). Trailers stay out of the vehicle
 * list (row 42 conflicts with row 16 until reconciled in writing). "Setup"
 * is not used: only installation, mounting, connection, and routing are
 * confirmed. No em dash appears in this file; a spaced hyphen is used.
 */
export const servicesHubPageContent: ServicesHubPageContent = {
  hero: {
    primaryCta: {
      label: "Request an Installation Quote",
      href: "#request-quote",
      journey: "commercial",
      event: "cta_quote_click",
    },
    callLabel: "Call",
    qualifier:
      "Tell us about your equipment, vehicle count, locations, and preferred timeline.",
  },

  answer: {
    h2: "What Is Fleet Technology Installation for Commercial Vehicles?",
    body: [
      "Fleet technology installation is the physical mounting, wiring, connection, and placement of approved electronic equipment on a commercial, fleet, or construction vehicle. The installation helps prepare the equipment for use with the platform or fleet system selected by the vehicle owner or operator.",
      "Ultimate Fleet GPS provides on-site installation for GPS tracking, ELD, AOBRD, TPMS, fleet dashcams, and fleet management equipment. The company installs and deploys hardware for the platforms fleets already use. Ultimate Fleet GPS is an installation and deployment provider, not the platform vendor.",
      "Technicians travel directly to the project location for one vehicle, a larger fleet, or a multi-location deployment. Installation planning can include work vans, service trucks, utility vehicles, heavy-duty trucks, commercial vehicles, and construction vehicles, depending on the approved equipment and project scope.",
      "To begin, share the equipment, approximate vehicle count, project location or locations, and preferred timing in an installation quote request.",
    ],
  },

  services: {
    h2: "Explore Installation Services",
    intro:
      "Choose the service that matches your equipment, or start with Fleet Rollout Services when your project spans multiple vehicles, locations, or deployment requirements.",
    cards: [
      {
        category: "Equipment umbrella",
        title: "Fleet Telematics Installation",
        scope:
          "Installation of GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles.",
        commonUse:
          "Common use: a project that spans more than one equipment type.",
        choose:
          "Choose this service when your project includes more than one type of connected fleet equipment or requires coordinated installation planning.",
        linkLabel: "Explore fleet telematics installation",
        href: "/services/fleet-telematics-installation/",
        accent: true,
      },
      {
        category: "GPS hardware",
        title: "GPS Tracking Installation",
        scope:
          "On-site installation of GPS tracking hardware on fleet, commercial, and construction vehicles.",
        commonUse:
          "Common use: adding GPS tracking hardware to vehicles.",
        choose:
          "Choose this service when vehicles need GPS tracking hardware installed and connected for fleet visibility or asset monitoring.",
        linkLabel: "Explore GPS tracking installation",
        href: "/services/gps-tracking-installation/",
      },
      {
        category: "ELD and AOBRD hardware",
        title: "ELD Installation",
        scope:
          "On-site installation of ELD and AOBRD equipment on fleet, commercial, and construction vehicles.",
        commonUse:
          "Common use: deploying ELD or AOBRD hardware across vehicles.",
        choose:
          "Choose this service when your fleet is deploying ELD or AOBRD equipment across commercial or heavy-duty vehicles.",
        linkLabel: "Explore ELD installation",
        href: "/services/eld-installation/",
      },
      {
        category: "Video hardware",
        title: "Dashcam & Camera Installation",
        scope:
          "On-site installation of fleet dashcam and windshield-mounted video recorder equipment.",
        commonUse:
          "Common use: adding in-vehicle video hardware to a fleet.",
        choose:
          "Choose this service when your fleet is adding windshield-mounted dashcams or in-vehicle video recorder equipment.",
        linkLabel: "Explore dashcam and camera installation",
        href: "/services/dashcam-camera-installation/",
      },
      {
        category: "Project coordination",
        title: "Fleet Rollout Services",
        scope:
          "Coordinated multi-vehicle and multi-location installation projects nationwide, from one vehicle to an entire fleet.",
        commonUse:
          "Common use: equipment going into many vehicles or across several locations.",
        choose:
          "Choose this service when equipment must be installed across multiple vehicles, project locations, or a larger deployment schedule.",
        linkLabel: "Explore fleet rollout services",
        href: "/services/fleet-rollouts/",
        accent: true,
      },
    ],
  },

  decisionGuide: {
    h2: "Not Sure Which Installation Service You Need?",
    intro:
      "Find the situation closest to yours. Each route leads to the service page that best matches your equipment, vehicle count, or installation project.",
    rows: [
      {
        situation: "You need GPS tracking hardware installed",
        supporting:
          "Start here when your vehicles need GPS tracking equipment installed for fleet visibility or asset monitoring.",
        destination: "GPS Tracking Installation",
        linkLabel: "Explore GPS installation",
        href: "/services/gps-tracking-installation/",
      },
      {
        situation: "You are deploying ELD or AOBRD hardware",
        supporting:
          "Start here when your fleet is adding ELD or AOBRD equipment across commercial or heavy-duty vehicles.",
        destination: "ELD Installation",
        linkLabel: "Explore ELD installation",
        href: "/services/eld-installation/",
      },
      {
        situation: "You are adding in-vehicle video or camera hardware",
        supporting:
          "Start here when your vehicles need fleet dashcams or windshield-mounted video recorder equipment.",
        destination: "Dashcam & Camera Installation",
        linkLabel: "Explore camera installation",
        href: "/services/dashcam-camera-installation/",
      },
      {
        situation: "Your project includes several types of equipment",
        supporting:
          "Start here when the project combines GPS tracking, ELD, dashcam, TPMS, or other fleet-management equipment.",
        destination: "Fleet Telematics Installation",
        linkLabel: "Explore fleet telematics installation",
        href: "/services/fleet-telematics-installation/",
      },
      {
        situation:
          "You are coordinating equipment across many vehicles or locations",
        supporting:
          "Start here when equipment must be installed across multiple vehicles, project locations, or a larger deployment schedule.",
        destination: "Fleet Rollout Services",
        linkLabel: "Discuss a rollout",
        href: "/services/fleet-rollouts/",
      },
      {
        situation: "You need help sorting out a mixed equipment project",
        supporting:
          "Start here when you are still defining the equipment, vehicle count, locations, or installation scope.",
        destination: "Request an installation quote",
        linkLabel: "Request project guidance",
        href: "#request-quote",
      },
    ],
  },

  capability: {
    h2: "Fleet Technology Installation Support for Commercial Vehicles",
    body: [
      "Installation planning starts with the vehicle, the equipment, the work location, and the project scope. Ultimate Fleet GPS installs fleet technology on fleet, commercial, and construction vehicles.",
      "Fleet technology installation can involve mounting equipment, routing connections, and positioning hardware for the vehicle and deployment requirements. The appropriate installation approach depends on the equipment, vehicle type, number of vehicles, project locations, and timing.",
      "This planning context helps fleets, commercial operators, and construction teams identify the right service path before requesting an installation quote. Projects may involve one vehicle, multiple vehicles, or coordinated work across more than one location.",
    ],
    lists: [
      {
        heading: "Vehicle examples",
        items: [
          "Work vans",
          "Service trucks",
          "Utility vehicles",
          "Heavy-duty trucks",
        ],
      },
      {
        heading: "Vehicle categories",
        items: ["Fleet vehicles", "Commercial vehicles", "Construction vehicles"],
      },
    ],
    links: [
      { label: "Fleet rollout services", href: "/services/fleet-rollouts/" },
      {
        label: "Installation quality and safety approach",
        href: "/quality-safety/",
      },
    ],
  },

  nationwide: {
    h2: "On-Site Installation for Fleet Projects Nationwide",
    body: [
      "Ultimate Fleet GPS provides nationwide mobile installation service, delivered at the customer's location. Technicians travel directly to each project location.",
      "Ultimate Fleet GPS provides nationwide mobile installation support at the customer's location. Technicians travel directly to fleet yards, commercial facilities, job sites, and other approved project locations for single-vehicle installations, multi-vehicle deployments, and coordinated fleet projects.",
      "Project scope is easier to plan when your request includes the equipment, the vehicle count, the project locations, and your timing.",
    ],
    links: [
      { label: "Explore Nationwide Coverage", href: "/coverage/" },
      {
        label: "How fleet installation projects are coordinated",
        href: "/our-process/",
      },
    ],
  },

  intake: {
    h2: "What to Include in Your Installation Request",
    body: [
      "A complete request helps Ultimate Fleet GPS follow up on your project.",
    ],
    lists: [
      {
        style: "checklist",
        items: [
          "The type of equipment you need installed",
          "Your approximate vehicle count",
          "The project location or locations",
          "Your preferred schedule or rollout window",
          "Any fleet, vehicle, or deployment details that affect the work",
        ],
      },
    ],
  },

  faqHeading: "Fleet Technology Installation FAQs for Commercial Vehicle Projects",

  related: {
    h2: "Related Pages",
    cards: [
      {
        title: "Fleet installation FAQs",
        description:
          "Answers about installation services, nationwide coverage, and the Installer Network.",
        linkLabel: "Read the fleet installation FAQs",
        href: "/faq/",
      },
      {
        title: "Planning resources",
        description:
          "Educational guides for planning fleet technology installation.",
        linkLabel: "Browse fleet installation planning resources",
        href: "/resources/",
      },
    ],
  },

  quote: {
    h2: "Plan Your Fleet Technology Installation Project",
    intro:
      "Tell us what you need installed, how many vehicles are involved, where the project will take place, and your preferred timing. Ultimate Fleet GPS provides on-site installation support for GPS tracking, ELD, AOBRD, TPMS, fleet dashcams, and fleet management equipment.",
    detail:
      "Whether you are planning a single-vehicle installation, a multi-vehicle deployment, or a project across multiple locations, the information you provide helps us understand the scope and follow up appropriately.",
    phoneLead:
      "Prefer to discuss your project directly? Call Monday through Friday, 8:00 AM to 6:00 PM.",
  },
};
