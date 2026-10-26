import { JOBS_INDEX_PATH } from "@/data/jobs";
import type { CareersHubPageContent } from "@/types/service-content";

/**
 * Section copy for the Installer Network page
 * (`/careers/mobile-installation-technician/`). The H1, intro, metadata
 * description, and FAQ live in `installerNetworkContent` (careers-content.ts).
 * The export keeps its original name for compatibility.
 *
 * The Installer Network is a registration for future opportunities, separate
 * from the application for the current opening. It is never an application and
 * never uses "Apply" as its own action. The `openings` section only points to
 * the current opening and its application page; the opening's facts live in
 * the job record, not here. Requirement groups come from the
 * stakeholder-supplied listing text (2026-09-18, docs/decisions/0004). Still
 * absent: MECP or other certification as a requirement, days, hours, shifts,
 * weekends, "shop locations", "position", "hiring", platform brand names,
 * trailers, state or city lists, and any promise of contact, review, timing,
 * or assignment. No em dash appears in this file; a spaced hyphen would be
 * used instead.
 */
/**
 * DRAFT, NOT RENDERED. Entry-level pathway block for "Is the Installer Network
 * a Fit for You?". Publication is blocked until stakeholder approval: the
 * transferable-experience wording (automotive, electrical, mechanical,
 * construction, technical) is not in docs/01 or decision 0004. Once approved,
 * add it to `fit` and add the matching FAQ item in careers-content.ts. Makes no
 * training, employment, assignment, pay, or contact promise, and never uses
 * "Apply".
 */
export const pendingEntryLevelFit = {
  approved: false,
  heading: "New to mobile fleet installation?",
  body: "You may still share your background if you have hands-on experience in automotive, electrical, mechanical, construction, technical, or related work. Your experience can help Ultimate Fleet GPS understand the skills you may bring to mobile installation work.",
} as const;

export const careersHubPageContent: CareersHubPageContent = {
  metaTitle: "Mobile Installation Technician Network",

  hero: {
    eyebrow: "Installer Network",
    h1: "Join the Mobile Fleet Installation Technician Network",
    intro:
      "Ultimate Fleet GPS connects independent mobile installation technicians with potential fleet-electronics installation opportunities. If you have experience installing GPS tracking, ELDs, dashcams, TPMS, or related equipment in commercial vehicles, share your background and the areas where you’re available to work.",
    primaryCta: {
      label: "Share Your Interest",
      href: "#installer-network-form",
      journey: "recruitment",
      event: "cta_installer_network_click",
    },
    callLabel: "Call",
    qualifier:
      "Submitting your information is not a job application and does not guarantee work or future opportunities. Work is offered only when projects are available and a technician’s experience and location are a fit.",
    scopeItems: [
      "Independent contractor opportunities",
      "Nationwide project interest",
      "Opt-in installer network",
    ],
  },

  chapters: {
    network: "Understand the network",
    work: "Understand the work context",
    prepare: "Prepare your information",
    join: "Join the network",
  },

  contextStrip: {
    h2: "Installer Network at a Glance",
    cards: [
      {
        icon: "technician",
        title: "Who is the network for?",
        description:
          "Experienced mobile fleet-installation technicians who want to share their background and availability with Ultimate Fleet GPS.",
      },
      {
        icon: "vehicle",
        title: "What work may be involved?",
        description:
          "Projects may involve fleet, commercial, or construction vehicles. Installation work can include GPS tracking, ELD, dashcam, and other fleet equipment.",
      },
      {
        icon: "location",
        title: "Where may projects take place?",
        description:
          "Ultimate Fleet GPS provides nationwide mobile installation service at the customer's location. Opportunities depend on project needs and technician fit, and are not guaranteed.",
      },
    ],
  },

  fit: {
    h2: "Who the Installer Network Is For",
    body: [
      "This page is for experienced mobile fleet-installation technicians who want to introduce themselves to Ultimate Fleet GPS and share relevant installation experience. It is not a list of current openings or a promise of future work.",
    ],
    listPanel: true,
    lists: [
      {
        heading: "A good fit if you are",
        items: [
          "You have experience with mobile installation work.",
          "You are familiar with commercial vehicles or fleet-equipment installation.",
          "You are willing to share your relevant experience and work availability.",
          "You want to be considered if a suitable project becomes available.",
        ],
      },
    ],
  },

  noExperience: {
    title: "No Experience Required",
    body: "Some current Ultimate Fleet GPS openings accept applicants with no prior installation experience, and training is provided. Check each opening's requirements and apply through the Current Openings page. Installer Network registration is separate and does not apply for a job.",
    link: { label: "View Current Openings", href: JOBS_INDEX_PATH },
  },

  boundary: {
    isHeading: "What this page is",
    isItems: [
      "A way to express interest in the Installer Network",
      "A place to share relevant technician background",
      "Information for experienced mobile installation technicians",
    ],
    isNotHeading: "What this page is not",
    isNotItems: [
      "A list of active job openings",
      "An employment offer",
      "A guarantee of future projects",
    ],
  },

  answer: {
    h2: "About the Ultimate Fleet GPS Installer Network",
    body: [
      "The Ultimate Fleet GPS Installer Network is an opt-in way for experienced mobile fleet-installation technicians to share their information and installation background. Submitting the form below does not create an employment offer.",
      "Joining the network is an expression of interest. It is not an application for an active job opening, and it does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      "Technicians engaged through the Installer Network are independent contractors, not employees.",
    ],
  },

  requirements: {
    h2: "Requirements and Experience",
    callout: {
      title: "No Installation Experience Required",
      body: "Previous mobile installation experience is not required. Training is provided. Experience listed below is helpful, but not required.",
    },
    core: {
      heading: "Core Requirements",
      items: [
        "Valid driver's license",
        "Personal vehicle, tools, and resources for travel",
        "Ability to travel between states; approximately 75% travel applies to current openings",
        "Smartphone for submitting installation data and photos",
        "Ability to pass a background check",
      ],
    },
    preferred: {
      heading: "Preferred Experience",
      label: "Helpful, not required",
      items: [
        "Familiarity with vehicle installation practices, including electrical systems and basic mechanical work",
        "Experience with 12- and 24-volt electrical systems, including using a multimeter to diagnose electrical connections",
        "Experience removing interior or exterior vehicle panels",
        "Experience installing GPS or fleet-management equipment in vehicles",
      ],
    },
    asks: {
      heading: "What We Ask of Installer Network Technicians",
      items: [
        "Follow installation guidelines and approved connection procedures",
        "Submit installation data and required photos for each installation",
        "Account for and track equipment",
        "Confirm installed equipment is functioning before leaving the customer's location",
        "Work independently and keep paperwork organized",
        "Communicate professionally with customers and scheduling managers",
      ],
    },
    notes: [
      "We recommend being over the age of 21 because some travel arrangements may be subject to minimum-age requirements set by rental car companies and hotels. This is a travel-related recommendation, not an automated eligibility screen.",
      "Meeting these qualifications does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    ],
  },

  equipment: {
    h2: "Mobile Fleet Installation Context",
    intro:
      "These service areas show the types of commercial vehicle installation work Ultimate Fleet GPS provides. They may help technicians identify experience that is relevant when sharing their background with the Installer Network. Inclusion here does not indicate that work is currently available or guarantee future projects.",
  },

  fieldWork: {
    h2: "On-Site Installation Environments for Commercial Fleets",
    intro:
      "Ultimate Fleet GPS provides nationwide mobile installation services at customer locations where fleet vehicles are based or scheduled for service. Installation work is completed on-site, and each installation is documented with photos.",
    cards: [
      {
        title: "Work Vans",
        description:
          "Commercial work vans may be scheduled for mobile fleet-electronics installation at a customer location.",
        image: {
          src: "/images/careers/mobile-installation-technician/ultimate-fleet-gps-commercial-work-van-fleet-vehicle-4x3.webp",
          width: 2896,
          height: 2172,
          alt: "White commercial cargo work van parked in a fleet lot beside a warehouse building",
        },
      },
      {
        title: "Service Trucks",
        description:
          "Service trucks are another common commercial-vehicle context for on-site installation work.",
        image: {
          src: "/images/careers/mobile-installation-technician/ultimate-fleet-gps-commercial-service-truck-fleet-vehicle-4x3.webp",
          width: 2896,
          height: 2172,
          alt: "White commercial service truck with an enclosed utility body parked in front of a garage building",
        },
      },
      {
        title: "Utility Vehicles",
        description:
          "Utility fleet vehicles may require installation work based on the vehicle, equipment, and project requirements.",
        image: {
          src: "/images/careers/mobile-installation-technician/ultimate-fleet-gps-commercial-utility-fleet-vehicle-4x3.webp",
          width: 2896,
          height: 2172,
          alt: "White commercial utility truck with a side-access storage body parked in a fleet yard",
        },
      },
      {
        title: "Heavy-Duty Trucks",
        description:
          "Heavy-duty trucks may be included in commercial installation projects, depending on the equipment and vehicle configuration.",
        image: {
          src: "/images/careers/mobile-installation-technician/ultimate-fleet-gps-heavy-duty-commercial-truck-fleet-vehicle-4x3.webp",
          width: 2896,
          height: 2172,
          alt: "White heavy-duty commercial truck tractor parked at a distribution facility with loading docks",
        },
      },
    ],
    note: "These examples describe the types of vehicles Ultimate Fleet GPS may service. They do not indicate that a particular project is available to Installer Network technicians or guarantee an assignment.",
  },

  information: {
    h2: "Share Your Experience and Availability",
    intro: [
      "The form collects the details below. Optional items are marked optional.",
      "If you do not have installation experience, you can say so and share any related background.",
    ],
    requested: {
      heading: "Requested information",
      items: [
        { icon: "contact", text: "Name, email, and phone number" },
        { icon: "location", text: "Home market or region" },
        {
          icon: "experience",
          text: "A summary of installation experience, or a note that you are new to installation work",
        },
        { icon: "travel", text: "Travel and coverage-region availability" },
      ],
    },
    optional: {
      heading: "Optional details",
      label: "Optional",
      items: [
        { icon: "platform", text: "Platform experience" },
        { icon: "tools", text: "Tools currently owned" },
      ],
    },
    note: "You may share experience with fleet technology platforms or device ecosystems that you have worked with. This information is optional and does not indicate certification, authorization, partnership, or a guarantee of assignment.",
  },

  join: {
    expectation:
      "This form is for Installer Network interest. It does not indicate a current opening or guarantee future work.",
  },

  faqHeading: "Installer Network Questions",

  commercial: {
    h2: "Need Mobile Fleet Installation Services for Your Business?",
    body: [
      "Ultimate Fleet GPS provides on-site installation of fleet technology and electronic equipment for commercial vehicles. Businesses can request service for GPS tracking, ELDs, dashcams, fleet telematics, TPMS, and related fleet equipment.",
      "Share your equipment needs, vehicle or asset count, project locations, and preferred timing. Our team will review the project details to understand the installation scope and service fit. Use this form for business installation requests. Technicians interested in joining the Installer Network should use the separate Installer Network interest form.",
    ],
    cta: {
      label: "Request an Installation Quote",
      href: "#business-inquiry-form",
      journey: "commercial",
      event: "cta_quote_click",
    },
  },

  relatedLinks: {
    h2: "Related Services and Coverage",
  },
};
