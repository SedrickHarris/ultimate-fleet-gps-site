import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Image slots for `/careers/installer-requirements/`.
 *
 * Placeholders only. No slot has a `src`, so production renders the decorative
 * navy fallback (no `img`, no preload, no label) and local development shows
 * the labelled placeholder. The existing `*-4x3.webp` files are deliberately
 * not reused.
 *
 * To fill a slot: set `src` and re-check `alt` against the real photo. The
 * `alt` text here is drafted for the intended subject and must describe only
 * what the supplied photo shows. Photography rules: authentic photos only; no
 * device-brand or competitor logos; no customer information visible; no fake
 * badges. Photos of identifiable technicians need a recorded release. Alt text
 * contains no dashes or unverified claims. `altGuidance` is a note for the
 * supplier and is never rendered.
 */
export const careersRequirementsImages = {
  hero: {
    slotId: "req-hero-4x3",
    role: "Installer vehicle with tools staged",
    aspectRatio: "4 / 3",
    width: 1600,
    height: 1200,
    fallback: "grid",
    alt: "Installer's vehicle with installation tools staged beside it",
    altGuidance:
      "Show a personal or work vehicle with installation tools laid out or staged nearby. Describe only what is shown. No logos, plates, or customer information.",
  },
  core: {
    slotId: "req-core-4x3",
    role: "Commercial work vehicle",
    aspectRatio: "4 / 3",
    width: 1600,
    height: 1200,
    fallback: "grid",
    alt: "Commercial work vehicle parked at a fleet location",
    altGuidance:
      "Show a commercial work van or truck. Describe only what is shown. No company names, plates, or customer information.",
  },
  asks: {
    slotId: "req-asks-4x3",
    role: "Tool case or installation workspace",
    aspectRatio: "4 / 3",
    width: 1600,
    height: 1200,
    fallback: "grid",
    alt: "Open tool case with installation tools organized inside",
    altGuidance:
      "Show a tool case or an organized installation workspace. Describe only what is shown. No device-brand logos or customer information.",
  },
} as const satisfies Record<string, HubImageSlot>;
