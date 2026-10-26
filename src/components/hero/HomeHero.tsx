import { CtaPair } from "@/components/ui/CtaPair";
import type { HeroContent } from "@/types/content";

const HERO_VIDEO =
  "/images/home/ultimate-fleet-gps-commercial-fleet-technology-installation-hero.mp4";
const HERO_POSTER =
  "/images/home/ultimate-fleet-gps-commercial-fleet-technology-installation-hero.webp";

interface HomeHeroProps {
  readonly content: HeroContent;
}

/**
 * Homepage hero.
 *
 * Centered column capped at 780px, the upper bound of the long-form reading
 * range in 21-design-system.md section 5.2, over a full-bleed looping
 * background video with a 55% black overlay. The video is decorative:
 * muted, hidden from assistive tech, and replaced by its still frame when
 * the user prefers reduced motion. Text and CTAs use the dark-tone tokens.
 *
 * The section has a minimum height (560px, 760px from md up) and the media is
 * anchored to its top edge and right of centre, so the extra height reveals the equipment
 * installation at the top of the frame instead of cropping it away.
 *
 * The H1 uses the h1 scale rather than display. The headline runs eleven
 * words, and display would break it across four lines at desktop widths.
 */
export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section
      data-tone="dark"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:min-h-[680px] md:px-6 md:py-24"
    >
      {/* Still frame: shown while the video loads and, for users who prefer
          reduced motion, in place of the video. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_POSTER}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[75%_0%]"
      />
      <video
        aria-hidden="true"
        tabIndex={-1}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[75%_0%] motion-reduce:hidden"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto w-full max-w-[780px] text-center">
        <h1 className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-[var(--color-text-on-dark)]">
          {content.h1}
        </h1>

        <p className="mx-auto mt-6 max-w-[62ch] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]">
          {content.subhead}
        </p>

        <div className="mt-10">
          <CtaPair
            primary={content.primaryCta}
            secondary={content.secondaryCta}
            center
          />
        </div>

      </div>
    </section>
  );
}
