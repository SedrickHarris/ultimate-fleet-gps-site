import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Media for `/careers/apply/`. The file lives in public/images/careers.
 *
 * The source photo is 2752x1536 (16:9). It is shown in a 4:3 frame with
 * `object-cover`, anchored right so the items on the seat stay in view.
 * Alt text describes only what the photo shows and contains no dashes or
 * unverified claims. `altGuidance` is never rendered.
 */
export const applyImages = {
  opening: {
    slotId: "careers-apply-opening",
    role: "View from inside a truck cab of an open roadway, with a folder, a phone, and a handheld device on the seat",
    aspectRatio: "4 / 3",
    width: 2752,
    height: 1536,
    fallback: "grid",
    src: "/images/careers/ultimate-fleet-gps-current-technician-opening-roadside-cab-4x3.webp",
    objectPosition: "80% 50%",
    alt: "View through the windshield of a truck cab parked beside an empty highway, with a closed folder, a phone, and a handheld device resting on the seat",
    altGuidance:
      "Describe only what is shown. No vehicle or device-brand logos, plates, or customer information.",
  },
} as const satisfies Record<string, HubImageSlot>;
