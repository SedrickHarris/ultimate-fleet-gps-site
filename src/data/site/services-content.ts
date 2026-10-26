import type { ServicePageContent } from "@/types/service-content";

/**
 * Services hub and four service-page content objects.
 *
 * Every claim below is gated against docs/_claims-inventory.md. No fifth
 * page exists for TPMS or "asset tracking" (not in the Sprint 1 route
 * table); TPMS stays folded into the telematics/fleet-management umbrella
 * copy where confirmed. No pricing, warranty, guarantee, or response-time
 * language appears anywhere in this file. No em dash appears anywhere in
 * this file; a spaced hyphen is used instead.
 */

/**
 * Hub h1, metadata, intro, and FAQ. Section copy for the rest of the page
 * lives in `servicesHubPageContent` (services-hub-content.ts). `body` is
 * unused on the hub: the answer block carries the body copy. The FAQ here is
 * distinct from the four service-page FAQs. `/faq/` does not import it.
 */
export const servicesHubContent: ServicePageContent = {
  h1: "Mobile Fleet Technology Installation Services",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Mobile Fleet Technology Installation",
  metaDescription:
    "On-site installation of GPS tracking, ELDs, dashcams, and fleet telematics, nationwide. Compare our services and request an installation quote.",
  intro:
    "Ultimate Fleet GPS provides on-site installation of GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment for fleet, commercial, and construction vehicles nationwide. Technicians travel directly to your location - one vehicle or an entire fleet.",
  body: [],
  faq: [
    {
      question:
        "What types of fleet technology installation services does Ultimate Fleet GPS provide?",
      answer:
        "Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles. Service pages cover fleet telematics, GPS tracking, ELD, dashcam and camera installation, and fleet rollouts.",
    },
    {
      question:
        "Is Ultimate Fleet GPS the platform vendor for the equipment it installs?",
      answer:
        "No. Ultimate Fleet GPS installs and deploys hardware for the platforms fleets already run on. We are an installation and deployment partner, not the platform vendor.",
    },
    {
      question: "Where does installation take place?",
      answer:
        "Installation is on-site. Technicians travel directly to your location, so include your project location in your request.",
    },
    {
      question:
        "What information should we provide when requesting an installation quote?",
      answer:
        "Share the equipment you need installed, your approximate vehicle count, your project locations, your preferred timeline, and any fleet, vehicle, or deployment details that affect the work.",
    },
    {
      question:
        "Can Ultimate Fleet GPS help with multi-vehicle installation projects?",
      answer:
        "Yes. Ultimate Fleet GPS coordinates installation projects of any size, from one vehicle to an entire fleet.",
    },
    {
      question: "Can installations be coordinated across multiple locations?",
      answer:
        "Yes. Ultimate Fleet GPS coordinates multi-location projects nationwide, with technicians traveling directly to each location.",
    },
    {
      question:
        "Which service page should we use for GPS tracking, ELD, or camera hardware?",
      answer:
        "Use the GPS Tracking Installation page for GPS tracking hardware, the ELD Installation page for ELD and AOBRD equipment, and the Dashcam & Camera Installation page for fleet dashcam and video recorder hardware. For a project that spans several equipment types, start with Fleet Telematics Installation, or describe the project in your quote request.",
    },
    {
      question: "How do we discuss a nationwide fleet installation project?",
      answer:
        "Submit an installation quote request with your equipment, vehicle count, and project locations, or call during business hours, Monday through Friday, 8:00 AM to 6:00 PM. Ultimate Fleet GPS will follow up to coordinate scheduling.",
    },
    {
      question: "How can installation technicians find installer openings?",
      answer:
        "Technicians can view the current installer opening and apply on the Careers pages. The Installer Network is a separate registration for future opportunities and is not an application. Neither guarantees contact, an interview, a contract, an assignment, a schedule, work volume, or pay.",
      link: {
        label: "View current installer openings",
        href: "/careers/jobs/",
      },
    },
  ],
};

export const fleetTelematicsInstallationContent: ServicePageContent = {
  h1: "Fleet Telematics Installation",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Mobile Fleet Telematics Installation",
  metaDescription:
    "We install telematics hardware on commercial vehicles at your location, nationwide. See what we support and request an installation quote.",
  intro:
    "Ultimate Fleet GPS provides mobile installation support for approved connected fleet hardware, including GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment, on fleet, commercial, and construction vehicles. Technicians travel to your location. Share your equipment, vehicle count, project locations, and preferred timing to start an installation conversation.",
  body: [],
  faq: [
    {
      question:
        "Does this service cover ELD and AOBRD together?",
      answer:
        "Ultimate Fleet GPS can install approved ELD, AOBRD, and related fleet hardware included in a project. The appropriate equipment and installation scope depend on the approved hardware and project requirements.",
    },
    {
      question:
        "Are you the platform vendor for the equipment you install?",
      answer:
        "Ultimate Fleet GPS provides installation support for approved fleet hardware. The equipment platform, hardware selection, and software relationship remain separate from the installation service.",
    },
    {
      question:
        "What should I include when requesting fleet telematics installation?",
      answer:
        "Include the equipment or service needed, the number of vehicles or assets, the project location or locations, and your preferred installation timeline. Additional vehicle or deployment details may also help clarify the project.",
    },
    {
      question:
        "Which service page should I start with?",
      answer:
        "Start with the service page that best matches your equipment or project need, such as GPS tracking installation, ELD installation, dashcam and camera installation, or fleet rollout services.",
    },
    {
      question:
        "What vehicle types can be part of a telematics installation project?",
      answer:
        "Fleet telematics installation projects may involve work vans, service trucks, utility vehicles, heavy-duty trucks, and other commercial or construction vehicles. The appropriate equipment category depends on the vehicle and project requirements.",
    },
    {
      question:
        "Can I request installation at our project location?",
      answer:
        "Yes. Include the project location or locations, vehicle count, and preferred timeline when requesting an installation quote. Ultimate Fleet GPS provides mobile installation service at the customer’s project location when the project requirements are appropriate.",
    },
    {
      question:
        "What does fleet telematics installation include?",
      answer:
        "Fleet telematics installation may include physically mounting approved hardware, connecting the equipment to the vehicle, routing required cables, and coordinating on-site installation work.",
    },
    {
      question:
        "What types of equipment can be installed?",
      answer:
        "Approved project equipment may include GPS tracking hardware, ELD, AOBRD, TPMS, fleet dashcams, telematics hardware, and other fleet-management equipment.",
    },
    {
      question:
        "Can installation support involve multiple vehicles or locations?",
      answer:
        "A project may involve one vehicle, multiple vehicles, or more than one project location. Include the vehicle count, locations, equipment, and preferred timing so the installation request can be understood accurately.",
    },
    {
      question:
        "How do I request a fleet telematics installation quote?",
      answer:
        "Use the fleet telematics installation quote form to provide your contact information, equipment or service need, vehicle or asset count, project location or locations, preferred timeline, and project description.",
    },
  ],
};

export const gpsTrackingInstallationContent: ServicePageContent = {
  h1: "GPS Tracking Installation",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Mobile GPS Tracking Installation",
  metaDescription:
    "On-site GPS tracker installation for trucks, vans, and equipment. Technicians come to your location. Request a fleet installation quote.",
  intro:
    "Ultimate Fleet GPS provides mobile GPS tracking hardware installation support for commercial vehicle projects.",
  body: [],
  faq: [
    {
      question: "What is GPS tracking installation?",
      answer:
        "GPS tracking installation is the physical installation of a GPS tracking device and related wiring in a commercial vehicle. The work may include device mounting, power or electrical connections, and organized wire routing, based on the device, vehicle, and project requirements. This page covers physical installation only.",
    },
    {
      question: "What can GPS tracking installation include?",
      answer:
        "Depending on the project, installation may include secure device mounting, connection to an appropriate vehicle power source, and organized routing and securing of associated wiring. Every installation is photo documented, and you'll receive that documentation automatically. The exact requirements depend on the device, vehicle, and project scope.",
    },
    {
      question:
        "What vehicle types can be part of a GPS tracking installation project?",
      answer:
        "Common project contexts include work vans, service trucks, utility vehicles, and heavy-duty trucks. Vehicle applications vary by project. Include the device, vehicle type, project location, and installation requirements with your request so Ultimate Fleet GPS can understand the installation request.",
    },
    {
      question: "Can I request installation at our project location?",
      answer:
        "Nationwide mobile installation service, delivered at the customer's location. Include each project location, vehicle or equipment count, device type, and preferred timing in your request so Ultimate Fleet GPS can understand the installation requirements.",
    },
    {
      question:
        "Is GPS tracking installation different from telematics or ELD installation?",
      answer:
        "GPS Tracking Installation, Fleet Telematics Installation, and ELD Installation are separate service categories on this site, and the equipment involved can differ by device and project. This page covers GPS tracking hardware installation. Use the related service links to find the most relevant starting point for your request.",
      links: [
        {
          label: "Fleet Telematics Installation",
          href: "/services/fleet-telematics-installation/",
        },
        { label: "ELD Installation", href: "/services/eld-installation/" },
      ],
    },
    {
      question: "What should I include in a GPS tracking installation request?",
      answer:
        "Include the GPS device or hardware type, the number and type of vehicles, project locations, and preferred installation timing. Additional details about the vehicle configuration can also help clarify the installation request.",
    },
    {
      question: "Can GPS tracking devices be installed across multiple vehicles?",
      answer:
        "Yes. A project can involve one vehicle, multiple vehicles, or an entire fleet, across more than one project location. Include the total vehicle count, vehicle types, project locations, device information, and preferred timing so Ultimate Fleet GPS can understand the project.",
      link: {
        label: "Fleet Rollout Services",
        href: "/services/fleet-rollouts/",
      },
    },
    {
      question: "Does Ultimate Fleet GPS provide the GPS tracking software?",
      answer:
        "Ultimate Fleet GPS provides physical installation support for GPS tracking hardware. This page covers installation only and does not describe GPS software, monitoring platforms, or data plans.",
    },
    {
      question: "Is installation documentation available after the installation?",
      answer:
        "Yes. Every installation is photo documented, and you'll receive that documentation automatically.",
    },
    {
      question: "How do I request GPS tracking installation support?",
      answer:
        "Use the GPS installation quote form on this page to share the device type, vehicle or equipment count, project locations, and preferred installation timing. You can also use the call option on this page.",
    },
  ],
};

export const eldInstallationContent: ServicePageContent = {
  h1: "ELD Installation",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Mobile ELD Installation, Nationwide",
  metaDescription:
    "We install electronic logging devices (ELDs) on commercial vehicles at your location, nationwide. See how it works and request a quote.",
  intro:
    "Ultimate Fleet GPS provides mobile installation support for ELD and AOBRD hardware in commercial vehicle project contexts.",
  body: [],
  faq: [
    {
      question: "What is ELD installation?",
      answer:
        "ELD installation is the physical installation of approved electronic logging device hardware in a commercial vehicle. The work may include mounting, connection, and cable routing, depending on the equipment and project requirements.",
    },
    {
      question: "Does Ultimate Fleet GPS provide ELD compliance advice?",
      answer:
        "No. Ultimate Fleet GPS provides physical installation support for approved ELD and AOBRD hardware. The company does not provide ELD compliance or regulatory advice.",
    },
    {
      question: "What can ELD installation include?",
      answer:
        "Depending on the approved equipment and project requirements, installation may include mounting the hardware, connecting it, and routing associated cables.",
    },
    {
      question: "What vehicle types can be part of an ELD installation project?",
      answer:
        "Projects may involve commercial vehicles such as work vans, service trucks, utility vehicles, and heavy-duty trucks. Equipment compatibility should be confirmed for the specific vehicle and device.",
    },
    {
      question: "Can I request ELD installation at our project location?",
      answer:
        "Yes. Ultimate Fleet GPS provides mobile installation support at customer project locations nationwide. Share where the vehicles will be available when you request a quote.",
    },
    {
      question: "What should I include in an ELD installation quote request?",
      answer:
        "Include the equipment being installed, vehicle types and count, project location or locations, and preferred timing. These details help clarify the scope of the request.",
    },
    {
      question: "Can you install ELD hardware across multiple vehicles or locations?",
      answer:
        "Fleet projects can involve one vehicle or a larger multi-vehicle project. Share the vehicle count and locations so the project requirements can be discussed.",
    },
    {
      question: "Will I receive documentation after installation?",
      answer:
        "Photo documentation may be available for completed installation work. Ask about the documentation available for your project when requesting a quote.",
    },
  ],
};

export const dashcamCameraInstallationContent: ServicePageContent = {
  h1: "Dashcam & Camera Installation Services",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Mobile Dashcam Installation",
  metaDescription:
    "Dashcam and fleet camera installation for commercial fleets, done on-site by our technicians. See what we install and request a quote.",
  intro:
    "Ultimate Fleet GPS provides mobile installation support for fleet dashcam and windshield-mounted video recorder hardware in commercial vehicle project contexts. We install the hardware; we are not the video platform vendor.",
  body: [],
  faq: [
    {
      question: "What is commercial dashcam installation?",
      answer:
        "Commercial dashcam installation is the physical installation of fleet dashcam or windshield-mounted video recorder hardware in a commercial vehicle. Ultimate Fleet GPS installs the hardware; the work does not include providing the camera’s video platform.",
    },
    {
      question: "What can dashcam installation include?",
      answer:
        "Depending on the approved hardware and vehicle, installation may include mounting the camera, connecting it, and routing its cables within the vehicle. The exact work depends on the equipment and project requirements.",
    },
    {
      question: "Does Ultimate Fleet GPS provide camera monitoring or video platform services?",
      answer:
        "No. Ultimate Fleet GPS installs dashcam and video recorder hardware. We are not the video platform vendor and do not provide camera monitoring, video storage, coaching, or platform services.",
    },
    {
      question: "What types of vehicles can be included in a dashcam installation project?",
      answer:
        "Projects may involve work vans, service trucks, utility vehicles, or heavy-duty trucks. Vehicle examples describe common project contexts; they do not guarantee that every hardware category fits every vehicle. Share your vehicle types and equipment details so the project can be scoped.",
    },
    {
      question: "Can dashcams be installed at my project location?",
      answer:
        "Ultimate Fleet GPS provides nationwide mobile installation at the customer’s location. For a project inquiry, share the project location, vehicle count, equipment, and preferred timing.",
    },
    {
      question: "What installation documentation will I receive?",
      answer:
        "Ultimate Fleet GPS’s current service information states that installations are photo documented and that documentation is sent automatically. Confirm that this process applies to your project when requesting a quote.",
    },
    {
      question: "What should I include in a dashcam installation quote request?",
      answer:
        "Include the equipment type or model, the number and types of vehicles, each project location, and your preferred timing. These details help Ultimate Fleet GPS understand the installation request.",
    },
  ],
};

/**
 * SOURCE-OF-TRUTH FLAG: the plan describes fleet rollouts with a staged
 * "scoping, staging, install, verification, reporting, closeout" process.
 * docs/01 section 17 confirms only automatic photo documentation as a
 * customer-facing process fact (section 17.1); the rest of that staged
 * workflow is "inferred from recruiting duties," not confirmed for
 * publication. This content states only confirmed facts: multi-vehicle/
 * multi-location project capacity ("one vehicle or an entire fleet",
 * section 11.1/25), scheduling hours, nationwide reach, and photo
 * documentation. It does not use "verification," "reporting," "quality
 * assurance," "testing," or "closeout" as claimed process stages, matching
 * the same constraint applied to DeploymentProcessSteps on the homepage.
 */
export const fleetRolloutsContent: ServicePageContent = {
  h1: "Fleet Rollout Installation Services",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Nationwide Fleet Installation Rollouts",
  metaDescription:
    "Multi-vehicle, multi-location GPS and ELD rollouts, scheduled and installed on-site. Share your vehicle count and timeline for a quote.",
  intro:
    "Discuss installation support for one vehicle or an entire fleet, including multiple project locations.",
  body: [],
  faq: [
    {
      question: "What are Fleet Rollout Installation Services?",
      answer:
        "Fleet Rollout Installation Services provide a starting point for installation requests involving one vehicle or an entire fleet, including multiple project locations.",
    },
    {
      question: "Can I submit a request for one vehicle or an entire fleet?",
      answer:
        "Yes. Use the request form to share the equipment, vehicle count, project locations, and preferred timing for the installation request.",
    },
    {
      question:
        "Can I include multiple project locations in an installation request?",
      answer:
        "Yes. Include the project locations relevant to the request along with equipment, vehicle count, and preferred timing.",
    },
    {
      question:
        "What types of installation requests can be discussed through Fleet Rollouts?",
      answer:
        "Use Fleet Rollouts as a starting point for a broader installation request. You can also explore Fleet Telematics Installation, GPS Tracking Installation, ELD Installation, and Dashcam & Camera Installation for hardware-specific context.",
    },
    {
      question: "What should I include in a Fleet Rollout Installation request?",
      answer:
        "Include equipment, vehicle count, project locations, and preferred timing.",
    },
  ],
};
