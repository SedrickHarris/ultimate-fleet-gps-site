import { PhoneButton } from "@/components/layout/PhoneButton";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import type { HubImageSlot } from "@/data/site/services-hub-images";
import type { Cta } from "@/types/content";

interface CoverageHeroProps {
  readonly id: string;
  readonly eyebrow: string;
  readonly h1: string;
  /** Direct answer first, then the request-framing sentence. */
  readonly paragraphs: readonly string[];
  readonly primaryCta: Cta;
  /** Verified phone details from the utility bar, never embedded here. */
  readonly phone: { readonly href: string; readonly label: string };
  readonly phoneLocation?: string;
  /** The row renders only when two or more items exist. */
  readonly trustItems?: readonly string[];
  /**
   * Decorative background video with a static poster. When set, the hero is
   * a single navy column over the video and no image slot renders.
   */
  readonly backgroundVideo?: {
    readonly src: string;
    readonly poster: string;
    readonly posterWidth: number;
    readonly posterHeight: number;
  };
  /** Used only when there is no background video. */
  readonly image?: HubImageSlot;
}

/**
 * Coverage hero. With a background video it is a navy surface under a 55%
 * black overlay; without one it is a light surface with the image slot on the
 * right from md up.
 *
 * Video rules: muted, looping, inline, no preload, decorative (hidden from
 * assistive tech, not focusable). The poster image always renders beneath it
 * and is what reduced-motion users, blocked-autoplay browsers, and failed
 * loads see. Media is absolutely positioned inside the section, so it never
 * shifts layout; the section height comes from the text and padding alone.
 *
 * Text comes first in the DOM. The commercial CTA leads and the phone button
 * is the fallback. Journey separation: both actions are commercial and no
 * recruitment link appears here. All copy and routes arrive as props.
 */
export function CoverageHero({
  id,
  eyebrow,
  h1,
  paragraphs,
  primaryCta,
  phone,
  phoneLocation = "coverage-hero",
  trustItems,
  backgroundVideo,
  image,
}: CoverageHeroProps) {
  const headingId = `${id}-heading`;
  const dark = Boolean(backgroundVideo);
  const showTrust = (trustItems?.length ?? 0) >= 2;
  const showImage = !dark && image !== undefined;

  const bodyText = dark
    ? "text-[var(--color-text-on-dark)]/90"
    : "text-ink-muted";

  return (
    <section
      data-tone={dark ? "dark" : "light"}
      aria-labelledby={headingId}
      className={
        dark
          ? "relative isolate flex min-h-[560px] flex-col justify-center overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:min-h-[680px] md:px-6 md:py-24"
          : "bg-surface px-5 py-10 text-ink md:px-6 md:py-14"
      }
    >
      {backgroundVideo ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={backgroundVideo.poster}
            alt=""
            aria-hidden="true"
            width={backgroundVideo.posterWidth}
            height={backgroundVideo.posterHeight}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <video
            aria-hidden="true"
            tabIndex={-1}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={backgroundVideo.poster}
            className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
          >
            <source src={backgroundVideo.src} type="video/mp4" />
          </video>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
        </>
      ) : null}

      <div
        className={`mx-auto w-full max-w-[1280px] ${
          showImage ? "grid gap-8 md:grid-cols-2 md:items-center md:gap-14" : ""
        }`}
      >
        <div className={showImage ? "" : "max-w-[780px]"}>
          <p
            className={`mb-3 flex items-center gap-3 text-[length:var(--text-label)] font-semibold tracking-wide uppercase ${
              dark
                ? "text-[var(--color-text-on-dark)]/80"
                : "text-[var(--color-brand-red)]"
            }`}
          >
            {dark ? (
              <span
                aria-hidden="true"
                className="inline-block h-0.5 w-8 shrink-0 bg-[var(--color-brand-red)]"
              />
            ) : null}
            {eyebrow}
          </p>
          <h1
            id={headingId}
            className={`text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance ${
              dark ? "text-[var(--color-text-on-dark)]" : "text-ink"
            }`}
          >
            {h1}
          </h1>
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`text-pretty ${bodyText} ${
                index === 0
                  ? "mt-5 text-[length:var(--text-body-lg)] leading-relaxed font-semibold"
                  : "mt-4 text-[length:var(--text-body)] leading-relaxed"
              }`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <CtaButton cta={primaryCta} emphasis="primary" blockOnMobile />
            <PhoneButton
              href={phone.href}
              label={phone.label}
              location={phoneLocation}
              className={
                dark
                  ? "border-white/60 bg-transparent text-white hover:bg-white/10"
                  : "border-ink bg-surface text-ink"
              }
            />
          </div>

          {showTrust ? (
            <ul
              className={`mt-7 flex list-none flex-wrap gap-x-6 gap-y-2 border-t p-0 pt-5 text-[length:var(--text-small)] font-semibold ${
                dark
                  ? "border-white/30 text-[var(--color-text-on-dark)]"
                  : "border-border text-ink"
              }`}
            >
              {trustItems?.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="font-bold">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {showImage && image ? <ImageSlot slot={image} priority /> : null}
      </div>
    </section>
  );
}
