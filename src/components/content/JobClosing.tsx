import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
import {
  inlineLinkOnDarkClass,
  LinkedText,
} from "@/components/content/LinkedText";
import { CtaButton } from "@/components/ui/CtaButton";
import { Icon, type IconName } from "@/components/ui/Icon";
import { NoticeBar } from "@/components/ui/NoticeBar";
import type { Cta } from "@/types/content";
import type { JobClosing } from "@/types/jobs";

interface JobClosingSectionProps {
  readonly id: string;
  readonly content: JobClosing;
  /** The shared apply CTA. Carries the destination, journey, and click event. */
  readonly cta: Cta;
}

/** Quiet card: semi-opaque dark fill with a solid fallback, light border. */
const quietCard =
  "flex h-full flex-col gap-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)] p-5 supports-[backdrop-filter]:bg-[var(--color-surface-dark-raised)]/80 supports-[backdrop-filter]:backdrop-blur-sm md:p-6";
/** Focal card: brighter accent border on a solid fill, so it reads as primary. */
const focalCard =
  "flex h-full flex-col gap-3 rounded-lg border-2 border-[var(--color-accent-blue)] bg-[var(--color-surface-dark-raised)] p-5 md:p-6";
const h3Class = "text-[length:var(--text-h4)] font-bold text-[var(--color-text-on-dark)]";
const bodyOnDark =
  "text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90";
const smallLink = `inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] ${inlineLinkOnDarkClass}`;

function CardIcon({ name, focal = false }: { name: IconName; focal?: boolean }) {
  return (
    <span
      className={`grid size-11 shrink-0 place-items-center rounded-full text-[var(--color-text-on-dark)] ${
        focal ? "bg-[var(--color-accent-blue-strong)]" : "bg-white/10"
      }`}
    >
      <Icon name={name} size={22} />
    </span>
  );
}

/**
 * Closing call to action for an active opening, in two zones on the dark
 * surface.
 *
 * Zone A is the media-backed hero: an optional full-bleed background photo
 * under a black gradient overlay (heavier on the text side), a left-aligned
 * reading-width intro, and three action cards (Apply is the focal card). With
 * no photo set it is a solid dark surface and no overlay renders.
 *
 * Zone B is a solid strip: the disclosure, secondary links, the fleet-customer
 * bar, and the corporate office address. Small text never sits on the photo.
 *
 * The photo is decorative and scrolls with the content (CLAUDE.md section 8).
 * Overlays are black only (CLAUDE.md section 8).
 */
export function JobClosingSection({ id, content, cta }: JobClosingSectionProps) {
  const headingId = `${id}-heading`;
  const image = content.heroImage;

  return (
    <section
      id={id}
      data-tone="dark"
      aria-labelledby={headingId}
      className="scroll-mt-6 bg-[var(--color-surface-dark)] text-[var(--color-text-on-dark)]"
    >
      {/* ZONE A */}
      <div className="relative isolate overflow-hidden px-5 py-16 md:px-6 md:py-24">
        {image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt=""
              aria-hidden="true"
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-center md:object-[70%_center]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-black/75 md:bg-gradient-to-r md:from-black/85 md:via-black/70 md:to-black/45"
            />
          </>
        ) : null}

        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[660px]">
            <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-text-on-dark)]/80 uppercase">
              {content.eyebrow}
            </p>
            <h2
              id={headingId}
              className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
            >
              {content.h2}
            </h2>
            <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed font-medium text-pretty text-[var(--color-text-on-dark)]">
              {content.answer}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            <div className={focalCard}>
              <CardIcon name="send" focal />
              <h3 className={h3Class}>{content.applyHeading}</h3>
              <p className={bodyOnDark}>{content.applyText}</p>
              <div className="mt-auto pt-2">
                <CtaButton cta={cta} emphasis="primary" blockOnMobile onDark />
              </div>
            </div>

            <div className={quietCard}>
              <CardIcon name="phone" />
              <h3 className={h3Class}>{content.callHeading}</h3>
              <a
                href={content.phoneHref}
                className={`inline-flex min-h-11 w-full items-center text-[length:var(--text-h3)] leading-tight sm:w-auto ${inlineLinkOnDarkClass}`}
              >
                {content.phoneLabel}
              </a>
              {/* TODO confirm the time zone for these hours. None is shown. */}
              <p className={bodyOnDark}>{content.hours}</p>
              <p className={bodyOnDark}>{content.since}</p>
            </div>

            <div className={quietCard}>
              <CardIcon name="help-circle" />
              <h3 className={h3Class}>{content.readHeading}</h3>
              <Link href={content.faqHref} className={smallLink}>
                {content.faqLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ZONE B: solid strip, no image behind it. */}
      <div className="border-t border-[var(--color-border-dark)] px-5 py-10 md:px-6 md:py-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
          <NoticeBar icon="info" onDark>
            {content.disclaimerLine}
          </NoticeBar>

          <ul className="flex list-none flex-col gap-1 p-0 md:flex-row md:flex-wrap md:items-center md:gap-x-8">
            <li>
              <Link href={content.jobsHref} className={smallLink}>
                {content.jobsLabel}
                <Icon name="arrow-right" size={16} />
              </Link>
            </li>
            <li className={`${bodyOnDark} md:flex md:items-center md:gap-2`}>
              <LinkedText text={content.network} onDark />
              <span aria-hidden="true" className="hidden md:inline">
                <Icon name="arrow-right" size={16} />
              </span>
            </li>
          </ul>

          {/* TODO confirm: this fleet-customer link is optional and can be
              removed if the page should stay careers-only. */}
          <p className="flex items-center gap-3 rounded-md border border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)] px-4 py-3 text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
            <Icon name="truck" size={22} />
            <span>
              <LinkedText text={content.fleet} onDark />
            </span>
          </p>

          {/* TODO confirm whether applicants report to this office. Add
              nothing further. */}
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-[var(--color-text-on-dark)]/90">
              <Icon name="map-pin" size={22} />
            </span>
            <CorporateOffice tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
