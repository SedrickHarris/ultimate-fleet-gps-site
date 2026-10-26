import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Media for `/careers/mobile-gps-eld-aobrd-installation-technician/`. Files
 * live in public/images/careers/mobile-gps-eld-aobrd-installation-technician.
 *
 * Alt text describes only what each photo shows. Photography rules: authentic
 * photos only; no device-brand or competitor logos; no customer information
 * visible; no fake badges. Alt text contains no dashes or unverified claims.
 * `altGuidance` is a note for the supplier and is never rendered.
 */
const DIR = "/images/careers/mobile-gps-eld-aobrd-installation-technician";

/**
 * Decorative hero background video and its still poster. The poster is the
 * fallback for reduced motion, blocked autoplay, and load failure. The video
 * always plays muted and loops.
 */
export const technicianHeroVideo = {
  src: `${DIR}/ultimate-fleet-gps-mobile-gps-eld-aobrd-installation-technician-hero-16x9.mp4`,
  poster: `${DIR}/ultimate-fleet-gps-mobile-gps-eld-aobrd-installation-technician-hero-16x9.webp`,
} as const;

/**
 * Decorative text-free background for the Starting Rate section. Shown under a
 * 55% black overlay with light text. The matching `.mp4` in the same folder is
 * not wired.
 */
export const technicianRateBackground = {
  src: `${DIR}/ultimate-fleet-gps-contractor-starting-rate-equipment-fleet-yard-16x9.webp`,
  width: 2528,
  height: 1696,
} as const;

export const technicianImages = {
  about: {
    slotId: "careers-technician-about",
    role: "Open work van with a tool case, a tablet checklist, and a tracking device on a workbench",
    aspectRatio: "4 / 3",
    width: 2528,
    height: 1696,
    fallback: "grid",
    src: `${DIR}/ultimate-fleet-gps-technician-opening-details-mobile-installation-workstation-4x3.webp`,
    alt: "Open work van with a tool case, a tablet showing a checklist, a tracking device with a cable, and a removed dashboard panel on a workbench, parked beside a roadway",
    altGuidance:
      "Describe only what is shown. No company names, plates, or customer information.",
  },
  requirements: {
    slotId: "careers-technician-requirements",
    role: "Tool cart with a meter, phone, and hand tools beside a van with exposed dash wiring",
    aspectRatio: "4 / 3",
    width: 2528,
    height: 1696,
    fallback: "grid",
    src: `${DIR}/ultimate-fleet-gps-eld-gps-installer-requirements-equipment-4x3.webp`,
    alt: "Tool cart beside an open van door holding a multimeter, a phone showing a checklist, wire strippers, screwdrivers, a tracking device with a cable, and bins of connectors",
    altGuidance:
      "Describe only what is shown. No device-brand logos or customer information.",
  },
  work: {
    slotId: "careers-technician-the-work",
    role: "Truck cab with the dash opened and wiring exposed, a tablet, a phone, and hand tools",
    aspectRatio: "4 / 3",
    width: 2528,
    height: 1696,
    fallback: "grid",
    src: `${DIR}/ultimate-fleet-gps-technician-eld-gps-installation-field-work-4x3.webp`,
    alt: "Pickup truck cab with the lower dash open and wiring exposed, a tablet and a phone on the seat, a tool bag, and hand tools on the floor mat",
    altGuidance:
      "Describe only what is shown. No vehicle or device-brand logos, plates, or customer information.",
  },
  apply: {
    slotId: "careers-technician-apply",
    role: "Truck seat with a hard case, work gloves, a phone showing a form, and a charging cable",
    aspectRatio: "4 / 3",
    width: 2528,
    height: 1696,
    fallback: "grid",
    src: `${DIR}/ultimate-fleet-gps-technician-application-ready-mobile-tools-4x3.webp`,
    alt: "Truck cab seat holding a hard case, work gloves, a phone showing a form, a charging cable, and a pen, with a dump truck visible through the window",
    altGuidance:
      "Describe only what is shown. No company names, plates, or customer information.",
  },
} as const satisfies Record<string, HubImageSlot>;
