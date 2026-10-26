import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Media for `/careers/installer-requirements/`. Files live in
 * public/images/careers/installer-requirements.
 *
 * Alt text describes only what each photo shows. Photography rules: authentic
 * photos only; no device-brand or competitor logos; no customer information
 * visible; no fake badges. Alt text contains no dashes or unverified claims.
 * `altGuidance` is a note for the supplier and is never rendered.
 */
const DIR = "/images/careers/installer-requirements";

/**
 * Decorative hero background video and its still poster. The poster is the
 * fallback for reduced motion, blocked autoplay, and load failure. The video
 * always plays muted and loops.
 */
export const careersRequirementsHeroVideo = {
  src: `${DIR}/ultimate-fleet-gps-mobile-installer-requirements-on-site-equipment-16x9.mp4`,
  poster: `${DIR}/ultimate-fleet-gps-mobile-installer-requirements-on-site-equipment-16x9.webp`,
} as const;

export const careersRequirementsImages = {
  core: {
    slotId: "req-core-4x3",
    role: "Commercial work van with tools and cable stored inside",
    aspectRatio: "4 / 3",
    width: 2528,
    height: 1696,
    fallback: "grid",
    src: `${DIR}/ultimate-fleet-gps-mobile-installer-core-requirements-tools-travel-4x3.webp`,
    alt: "Open work van with shelving, cable, and installation tools organized inside, parked at a commercial yard",
    altGuidance:
      "Describe only what is shown. No company names, plates, or customer information.",
  },
  preferred: {
    slotId: "req-preferred-4x3",
    role: "Vehicle electrical work in progress inside a truck cab",
    aspectRatio: "4 / 3",
    width: 2528,
    height: 1696,
    fallback: "grid",
    src: `${DIR}/ultimate-fleet-gps-mobile-installer-preferred-vehicle-electrical-experience-4x3.webp`,
    alt: "Truck cab with a dash panel removed, a GPS device and wiring exposed, and a multimeter and hand tools laid out nearby",
    altGuidance:
      "Describe only what is shown. No device-brand logos or customer information.",
  },
  asks: {
    slotId: "req-asks-4x3",
    role: "Installation tools, a device, and paperwork on a workbench beside a vehicle",
    aspectRatio: "4 / 3",
    width: 2528,
    height: 1696,
    fallback: "grid",
    src: `${DIR}/ultimate-fleet-gps-technician-installation-documentation-equipment-check-4x3.webp`,
    alt: "Workbench beside a van holding a tracking device with cable, hand tools, a tablet checklist, a paper form, and a phone",
    altGuidance:
      "Describe only what is shown. No device-brand logos, readable customer information, or fake badges.",
  },
} as const satisfies Record<string, HubImageSlot>;
