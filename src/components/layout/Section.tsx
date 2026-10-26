import type { ReactNode } from "react";

/**
 * Background rhythm. Sections alternate to separate without hard dividers.
 *
 * `default` and `subtle` are both light surfaces; `dark` is the new navy
 * surface used for components such as LargeRolloutCallout. `brandSoft` is
 * removed along with the brand-soft token it depended on; a section that
 * previously used it now uses `subtle` or `dark` depending on intent.
 */
type Tone = "default" | "subtle" | "brandTint" | "dark";

/**
 * The data-tone marker this tone renders. Used by the focus-ring CSS in
 * globals.css to resolve the correct outline color from the nearest local
 * surface. See 21-design-system.md section 27a.
 */
const dataTone: Record<Tone, "light" | "subtle" | "dark"> = {
  default: "light",
  subtle: "subtle",
  brandTint: "subtle",
  dark: "dark",
};

/** Vertical density. Conversion sections breathe; closing statements do not. */
type Density = "tight" | "compact" | "standard" | "spacious";

/** Measure. See 21-design-system.md section 5.2. */
type Width = "reading" | "wide" | "site" | "siteWide";

interface SectionProps {
  readonly children: ReactNode;
  readonly tone?: Tone;
  readonly density?: Density;
  readonly width?: Width;
  readonly id?: string;
  readonly labelledBy?: string;
  /**
   * Decorative background image under the content (empty alt, hidden from
   * assistive tech, scrolls with the section). The tone's surface color stays
   * as the fallback. Use only for light, text-free artwork.
   */
  readonly backgroundImage?: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
  };
  /** 55% black overlay over `backgroundImage`, under the content. */
  readonly backgroundOverlay?: boolean;
  /** Overlay darkness: 55% black by default, 65% black on bright photos. */
  readonly backgroundOverlayStrength?: "default" | "strong";
  /** Crop anchor for `backgroundImage`. Defaults to `left-bottom`. */
  readonly backgroundPosition?: "left-bottom" | "center" | "bottom";
  /**
   * Taller section for a background photo: a minimum height with the content
   * vertically centered, so more of the photo shows. Off by default.
   */
  readonly tallMedia?: boolean;
  readonly center?: boolean;
}

const toneClasses: Record<Tone, string> = {
  default: "bg-surface text-ink",
  subtle: "bg-surface-subtle text-ink",
  brandTint: "bg-[var(--color-surface-brand-tint)] text-ink",
  dark: "bg-[var(--color-surface-dark)] text-[var(--color-text-on-dark)]",
};

/**
 * Horizontal padding is constant at 20px mobile and 24px from medium up.
 * Vertical padding varies by density, drawn from the 4px scale in section 4.4.
 */
const densityClasses: Record<Density, string> = {
  tight: "py-8 md:py-10",
  compact: "py-10 md:py-14",
  standard: "py-12 md:py-20",
  spacious: "py-16 md:py-24",
};

const widthClasses: Record<Width, string> = {
  reading: "max-w-[720px]",
  wide: "max-w-[780px]",
  site: "max-w-[1280px]",
  /**
   * Stakeholder-approved exception to the 1200-1280px standard page ceiling
   * in 21-design-system.md section 5.2 (approved 2026-09-20), scoped to the
   * homepage direct-answer section only. Do not reuse without the same
   * approval; every other section stays on "site".
   */
  siteWide: "max-w-[1360px]",
};

/**
 * Section shell.
 *
 * Renders a stable `data-tone="dark" | "light" | "subtle"` marker on its own
 * root element, resolved by CSS in globals.css so keyboard focus rings and
 * any other tone-aware styling pick the correct local context rather than
 * inheriting an incorrect value from an outer page section.
 */
export function Section({
  children,
  tone = "default",
  density = "standard",
  width = "reading",
  id,
  labelledBy,
  backgroundImage,
  backgroundOverlay = false,
  backgroundOverlayStrength = "default",
  backgroundPosition = "left-bottom",
  tallMedia = false,
  center = false,
}: SectionProps) {
  return (
    <section
      id={id}
      data-tone={dataTone[tone]}
      aria-labelledby={labelledBy}
      className={`${id ? "scroll-mt-6 " : ""}px-5 md:px-6 ${toneClasses[tone]} ${densityClasses[density]}${
        backgroundImage ? " relative isolate overflow-hidden" : ""
      }${tallMedia ? " flex min-h-[440px] items-center md:min-h-[560px]" : ""}`}
    >
      {backgroundImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={backgroundImage.src}
          alt=""
          aria-hidden="true"
          width={backgroundImage.width}
          height={backgroundImage.height}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 -z-10 h-full w-full object-cover ${
            { center: "object-center", bottom: "object-bottom", "left-bottom": "object-left-bottom" }[backgroundPosition]
          }`}
        />
      ) : null}
      {backgroundImage && backgroundOverlay ? (
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 ${
            backgroundOverlayStrength === "strong" ? "bg-black/65" : "bg-black/55"
          }`}
        />
      ) : null}
      <div
        data-reveal-group
        className={`mx-auto ${tallMedia ? "w-full " : ""}${widthClasses[width]} ${center ? "text-center" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
