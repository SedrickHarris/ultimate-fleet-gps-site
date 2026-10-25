import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
import {
  inlineLinkOnDarkClass,
  LinkedText,
} from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Cta } from "@/types/content";
import type { JobClosing } from "@/types/jobs";

interface JobClosingSectionProps {
  readonly id: string;
  readonly content: JobClosing;
  /** The shared apply CTA. Carries the destination, journey, and click event. */
  readonly cta: Cta;
}

const cardClass =
  "rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)] p-5 md:p-6";
const h3Class = "text-[length:var(--text-h4)] font-bold text-[var(--color-text-on-dark)]";
const pClass =
  "mt-2 text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90";

/**
 * Closing call to action for an active opening: apply, call, or read the
 * answers, on the strong dark surface with light text. Two columns from lg
 * (about 3/5 content, 2/5 media). The three cards stack vertically in the
 * content column, Apply first, and the media sits after the content below lg.
 * The media is static (CLAUDE.md section 8). Every color here is a dark-surface
 * token: the strong blue and the brand red fail on navy, so links are white and
 * the eyebrow is light text.
 */
export function JobClosingSection({ id, content, cta }: JobClosingSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section id={id} tone="dark" width="site" labelledBy={headingId}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-16">
        <div>
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

          <div className="mt-6 flex flex-col gap-4">
            <div className={cardClass}>
              <h3 className={h3Class}>{content.applyHeading}</h3>
              <p className={pClass}>{content.applyText}</p>
              <div className="mt-4">
                <CtaButton cta={cta} emphasis="primary" blockOnMobile onDark />
              </div>
            </div>

            <div className={cardClass}>
              <h3 className={h3Class}>{content.callHeading}</h3>
              <p className="mt-2">
                <a
                  href={content.phoneHref}
                  className={`inline-flex min-h-11 w-full items-center text-[length:var(--text-h3)] leading-tight sm:w-auto ${inlineLinkOnDarkClass}`}
                >
                  {content.phoneLabel}
                </a>
              </p>
              {/* TODO confirm the time zone for these hours. None is shown. */}
              <p className={pClass}>{content.hours}</p>
              <p className="mt-1 text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
                {content.since}
              </p>
            </div>

            <div className={cardClass}>
              <h3 className={h3Class}>{content.readHeading}</h3>
              <ul className="mt-2 flex list-none flex-col p-0">
                <li>
                  <Link
                    href={content.faqHref}
                    className={`inline-flex min-h-11 items-center text-[length:var(--text-body)] ${inlineLinkOnDarkClass}`}
                  >
                    {content.faqLabel}
                  </Link>
                </li>
                <li>
                  <Link
                    href={content.jobsHref}
                    className={`inline-flex min-h-11 items-center text-[length:var(--text-body)] ${inlineLinkOnDarkClass}`}
                  >
                    {content.jobsLabel}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-on-dark)]">
            {content.disclaimerLine}
          </p>
          <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-on-dark)]/90">
            <LinkedText text={content.network} onDark />
          </p>
          {/* TODO confirm: this fleet-customer link is optional and can be
              removed if the page should stay careers-only. */}
          <p className="mt-4 text-[length:var(--text-small)] text-[var(--color-text-on-dark)]/90">
            <LinkedText text={content.fleet} onDark />
          </p>

          {/* TODO confirm whether applicants report to this office. Add
              nothing further. */}
          <CorporateOffice className="mt-6" tone="dark" />
        </div>

        {/*
          Image slot. Intended alt text: "Ultimate Fleet GPS technician
          finishing an installation on a commercial fleet vehicle". See
          ImagePlaceholder for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-closing-cta" onDark />
      </div>
    </Section>
  );
}
