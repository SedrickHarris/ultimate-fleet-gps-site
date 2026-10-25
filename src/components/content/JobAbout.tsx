import { RichParts } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Cta } from "@/types/content";
import type { JobAbout } from "@/types/jobs";

interface JobAboutSectionProps {
  readonly id: string;
  readonly content: JobAbout;
  /** The shared apply CTA. Carries the destination, journey, and click event. */
  readonly cta: Cta;
  readonly tone?: "default" | "subtle";
}

const h3Class = "mt-8 text-[length:var(--text-h4)] font-bold text-ink";
const pClass =
  "mt-2 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted";

/**
 * Opening overview: answer-first paragraph, opening details as a definition
 * list, fit, contractor status, and how to apply. Two columns from lg (about
 * 3/5 content, 2/5 media), single column below with the media after the
 * content. The media is static (CLAUDE.md section 8).
 */
export function JobAboutSection({
  id,
  content,
  cta,
  tone = "default",
}: JobAboutSectionProps) {
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
          <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed font-medium text-pretty text-ink">
            {content.answer}
          </p>

          <h3 className={h3Class}>{content.detailsHeading}</h3>
          <dl className="mt-3 grid gap-x-6 gap-y-1 text-[length:var(--text-body)] leading-relaxed md:grid-cols-[9rem_minmax(0,1fr)] md:gap-y-3">
            {content.details.map((row) => (
              <div key={row.term} className="contents">
                <dt className="font-bold text-ink">{row.term}</dt>
                <dd className="mb-3 text-ink-muted md:mb-0">{row.definition}</dd>
              </div>
            ))}
          </dl>

          <h3 className={h3Class}>{content.fitHeading}</h3>
          <p className={pClass}>{content.fit}</p>

          <h3 id="contractor-status" className={`${h3Class} scroll-mt-6`}>
            {content.statusHeading}
          </h3>
          {/* TODO confirm tax and benefits wording. Add nothing beyond this
              sentence. */}
          <p className={pClass}>{content.status}</p>

          <h3 className={h3Class}>{content.howHeading}</h3>
          {/* TODO confirm the background check timing in step 3. */}
          <ol className="mt-3 flex list-decimal flex-col gap-2 pl-6 text-[length:var(--text-body)] leading-relaxed text-ink marker:font-bold">
            {content.steps.map((step, index) => (
              <li key={index}>
                <RichParts parts={step} />
              </li>
            ))}
          </ol>
          <div className="mt-5">
            <CtaButton cta={cta} emphasis="primary" blockOnMobile />
          </div>
          <p className="mt-3 text-[length:var(--text-small)] text-ink-muted">
            {content.applyNote}
          </p>
        </div>

        {/*
          Image slot. Intended alt text: "Technician installing an ELD device
          in a commercial truck cab". See ImagePlaceholder for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-about" />
      </div>
    </Section>
  );
}
