import { LinkedText } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Cta } from "@/types/content";
import type { JobRate } from "@/types/jobs";

interface JobRateSectionProps {
  readonly id: string;
  readonly content: JobRate;
  readonly cta: Cta;
  readonly tone?: "default" | "subtle" | "brandTint";
}

const h3Class = "mt-8 text-[length:var(--text-h4)] font-bold text-ink";
const pClass =
  "mt-2 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted";

/**
 * Starting rate section of an active opening page. The figure is always
 * rendered with its "starting rate - not guaranteed income" label directly
 * beneath it. Two columns from lg (about 3/5 content, 2/5 media), single
 * column below with the media after the content. The media is static
 * (CLAUDE.md section 8).
 */
export function JobRateSection({
  id,
  content,
  cta,
  tone = "brandTint",
}: JobRateSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section id={id} tone={tone} width="site" labelledBy={headingId}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-16">
        <div>
          <h2
            id={headingId}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>

          <div className="mt-5 rounded-[var(--radius-lg)] border border-border border-l-4 border-l-[var(--color-accent-blue-strong)] bg-surface p-5 md:p-6">
            <p className="text-[length:var(--text-h3)] leading-tight font-bold text-ink">
              {content.figure}
            </p>
            <p className="mt-1 text-[length:var(--text-small)] font-semibold text-ink">
              {content.figureLabel}
            </p>
            <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed font-medium text-pretty text-ink">
              {content.answer}
            </p>
          </div>

          <h3 className={h3Class}>{content.howHeading}</h3>
          <p className={pClass}>{content.how}</p>

          <h3 className={h3Class}>{content.meansHeading}</h3>
          <p className={pClass}>{content.means}</p>

          <h3 className={h3Class}>{content.coverHeading}</h3>
          <p className={pClass}>{content.coverIntro}</p>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 text-[length:var(--text-body)] leading-relaxed text-ink marker:text-ink">
            {content.cover.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            <LinkedText text={content.coverClosing} />
          </p>

          <h3 className={h3Class}>{content.statusHeading}</h3>
          <p className={pClass}>
            <LinkedText text={content.status} />
          </p>

          <p className="mt-8 text-[length:var(--text-body)] font-semibold text-ink">
            {content.ctaLead}
          </p>
          <div className="mt-4">
            <CtaButton cta={cta} emphasis="primary" blockOnMobile />
          </div>
          <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            <LinkedText text={content.faqClosing} />
          </p>
        </div>

        {/*
          Image slot. Intended alt text: "Installation technician reviewing
          completed work on a smartphone beside a fleet truck". See
          ImagePlaceholder for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-starting-rate" />
      </div>
    </Section>
  );
}
