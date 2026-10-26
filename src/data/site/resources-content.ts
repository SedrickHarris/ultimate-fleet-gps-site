import type { ResourceArticleContent } from "@/types/service-content";

/**
 * `/resources/` hub + article content.
 *
 * General operational guidance for fleet managers and technicians planning
 * an installation project - not claims about Ultimate Fleet GPS's own
 * stats, history, or performance beyond what docs/01 already confirms
 * (in business since 2011, photo documentation, nationwide reach, project capacity range).
 * Every article carries `editorialNote`, rendered verbatim near the top of
 * the article body: "This is educational operational guidance, not legal,
 * regulatory, safety, compliance, device-manufacturer, or
 * fleet-management-system advice." ELD-related content specifically avoids
 * any statement that a process guarantees regulatory compliance, and does
 * not characterize Ultimate Fleet GPS as an ELD provider or compliance
 * consultant, consistent with src/data/site/services-content.ts.
 */

export const EDITORIAL_NOTE =
  "This is educational operational guidance, not legal, regulatory, safety, compliance, device-manufacturer, or fleet-management-system advice.";

export const resourcesHubContent = {
  h1: "Resources for Fleet Managers and Technicians",
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Fleet Installation Resources",
  metaDescription:
    "Guides for planning GPS, ELD, and fleet electronics installation, from preparing vehicles to scheduling rollouts and reducing downtime.",
  intro:
    "Operational guidance for planning an installation project. This is educational content, not legal, regulatory, safety, compliance, device-manufacturer, or fleet-management-system advice.",
};

export const resourceArticles: readonly ResourceArticleContent[] = [
  {
    slug: "planning-a-fleet-installation-rollout",
    h1: "Planning a Multi-Vehicle Installation Rollout",
    // Meta title: Oct 26 2026 metadata audit approval.
    metaTitle: "Planning a Fleet Installation Rollout",
    metaDescription:
      "Operational guidance for fleet managers planning a multi-vehicle or multi-location GPS, ELD, or dashcam installation rollout.",
    intro:
      "A multi-vehicle installation rollout involves more coordination than a single-vehicle install: scheduling, vehicle availability, and site logistics across locations all affect how smoothly the project runs.",
    editorialNote: EDITORIAL_NOTE,
    body: [
      "Start by confirming the full scope of the rollout: how many vehicles, which equipment categories (GPS tracking, ELD, AOBRD, TPMS, dashcam, or fleet management equipment), and which locations are involved. A clear scope makes scheduling easier to coordinate.",
      "Vehicle availability is often the biggest scheduling constraint in a rollout. Vehicles that are on the road, in service, or across multiple sites take more advance coordination than vehicles parked in one lot.",
      "Group vehicles by location and equipment type where practical. Rollouts that install the same equipment category across many vehicles at once are typically easier to schedule and track than rollouts that mix many different equipment types in the same window.",
      "Confirm how installation documentation will be organized across a multi-vehicle project, especially if the rollout spans multiple locations or scheduling windows, so records for each vehicle stay easy to find afterward.",
    ],
  },
  {
    slug: "reducing-installation-downtime",
    h1: "Reducing Vehicle Downtime During Installation",
    // Meta title: Oct 26 2026 metadata audit approval.
    metaTitle: "Reducing Installation Downtime",
    metaDescription:
      "Operational guidance for fleet managers on reducing vehicle downtime during GPS, ELD, dashcam, and fleet electronics installation.",
    intro:
      "Vehicle downtime during installation affects dispatch and delivery schedules, so planning ahead of the installation date is one of the most effective ways to reduce it.",
    editorialNote: EDITORIAL_NOTE,
    body: [
      "Schedule installation work during a vehicle's planned downtime where possible, such as a maintenance window or an already-scheduled out-of-service period, rather than pulling a vehicle out of active rotation solely for installation.",
      "Make sure the vehicle is accessible at the scheduled time and location: keys or fleet-management app access available, the vehicle parked in a location a technician can reach, and any required panels or compartments unlocked.",
      "Share known vehicle details in advance, such as make, model, year, and any prior installed equipment that may be relevant, so installation time at the vehicle itself stays focused on the work.",
      "For fleets installing across many vehicles, staggering installation across a planned window, rather than requiring the entire fleet to be down at once, keeps more of the fleet in active service throughout the project.",
    ],
  },
  {
    slug: "eld-installation-planning-checklist",
    h1: "ELD Installation Planning Checklist",
    metaDescription:
      "An operational planning checklist for scheduling ELD and AOBRD hardware installation across a fleet. Not compliance or regulatory guidance.",
    intro:
      "This checklist covers the operational steps involved in scheduling ELD or AOBRD hardware installation across a fleet. It does not address regulatory compliance requirements, which are outside its scope.",
    editorialNote: EDITORIAL_NOTE,
    body: [
      "Confirm which vehicles need ELD or AOBRD hardware installed or replaced, and whether any vehicles are being upgraded from one device type to another.",
      "Confirm vehicle access and electrical-system details relevant to installation, such as engine connector type, so installation scheduling accounts for any vehicle-specific requirements.",
      "Plan installation timing around vehicle availability, the same way any other fleet electronics installation is scheduled.",
      "After installation, confirm that the hardware is functioning and that any required data submission or documentation for the installation itself is complete. Regulatory compliance obligations for ELD use are a separate matter between the fleet and the applicable regulatory authority, and this checklist does not address them. Ultimate Fleet GPS installs and deploys ELD and AOBRD hardware; it is not an ELD provider or a compliance consultant.",
    ],
  },
  {
    slug: "preparing-your-fleet-for-gps-tracking-installation",
    h1: "Preparing Your Fleet for GPS Tracking Installation",
    // Meta title and description: Oct 26 2026 metadata audit approval.
    metaTitle: "Prepare Your Fleet for GPS Installation",
    metaDescription:
      "How to prepare vehicles, access, and documentation contacts before a GPS tracker installation. Operational guidance for fleet managers.",
    intro:
      "A little preparation before a GPS tracking installation date can reduce delays and keep the installation on schedule.",
    editorialNote: EDITORIAL_NOTE,
    body: [
      "Confirm which GPS tracking platform or hardware is being installed, since mounting location and wiring can vary by device.",
      "Make sure each vehicle is available and accessible at its scheduled installation time, including keys or app access and any panels a technician will need to reach.",
      "Note any prior tracking hardware already installed on the vehicle, including anything being replaced or removed as part of the project.",
      "Confirm where installation documentation should be sent so photo documentation, delivered automatically after each installation, reaches the right person on your team.",
    ],
  },
];
