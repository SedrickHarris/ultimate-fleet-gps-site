import { LinkedText } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Cta } from "@/types/content";
import type { JobApply } from "@/types/jobs";

interface JobApplySectionProps {
  readonly id: string;
  readonly content: JobApply;
  /** The no-guarantee disclosure, shown unabridged directly above the button. */
  readonly disclaimer: string;
  /** The shared apply CTA. Carries the destination, journey, and click event. */
  readonly cta: Cta;
  readonly tone?: "default" | "subtle";
}

/**
 * Closing apply section of an active opening page. The disclaimer sits in a
 * visible callout directly above the primary button. Two columns from lg
 * (about 3/5 content, 2/5 media), single column below with the media after the
 * content. The media is static (CLAUDE.md section 8).
 */
export function JobApplySection({
  id,
  content,
  disclaimer,
  cta,
  tone = "default",
}: JobApplySectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section id={id} tone={tone} width="site" labelledBy={headingId}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-16">
        <div>
          <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide uppercase text-[var(--color-brand-red)]">
            {content.eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>
          <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed font-medium text-pretty text-ink">
            {content.answer}
          </p>

          <h3 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
            {content.beforeHeading}
          </h3>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 text-[length:var(--text-body)] leading-relaxed text-ink marker:text-ink">
            {content.before.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            <LinkedText text={content.beforeClosing} />
          </p>

          <p className="mt-8 rounded-md border border-border bg-surface p-4 text-[length:var(--text-small)] leading-relaxed text-ink">
            {disclaimer}
          </p>
          <div className="mt-4">
            <CtaButton cta={cta} emphasis="primary" blockOnMobile />
          </div>
          <p className="mt-3 text-[length:var(--text-small)] text-ink-muted">
            {content.ctaNote}
          </p>

          <h3 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
            {content.futureHeading}
          </h3>
          <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
            <LinkedText text={content.future} />
          </p>
          <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            <LinkedText text={content.faqClosing} />
          </p>
        </div>

        {/*
          Image slot. Intended alt text: "Installation technician with a
          smartphone ready to start a fleet installation". See ImagePlaceholder
          for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-apply" />
      </div>
    </Section>
  );
}
