import { RichParts } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { Icon } from "@/components/ui/Icon";
import { iconCircle, StepCard } from "@/components/ui/StepCard";
import type { Cta } from "@/types/content";
import type { JobAbout } from "@/types/jobs";

interface JobAboutSectionProps {
  readonly id: string;
  readonly content: JobAbout;
  /** The shared apply CTA. Carries the destination, journey, and click event. */
  readonly cta: Cta;
  readonly tone?: "default" | "subtle";
}

const h2Class =
  "text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink";
const h3Class = "mt-10 text-[length:var(--text-h3)] leading-tight font-bold text-ink";
const pClass =
  "mt-2 max-w-[820px] text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted";

/**
 * Opening overview, with no image. The H2 and answer paragraph sit above
 * everything else, which spans the full container: opening details as a grid of icon cards (4 / 2 / 1 columns), fit,
 * contractor status, and how to apply as connected step cards. The media is
 * static (CLAUDE.md section 8).
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
      <div className="max-w-[820px]">
        <h2 id={headingId} className={h2Class}>
          {content.h2}
        </h2>
        <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed font-medium text-pretty text-ink">
          {content.answer}
        </p>
      </div>

      <h3 id="opening-details" className={`${h3Class} scroll-mt-6`}>
        {content.detailsHeading}
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.details.map((row) => (
          <Card
            key={row.term}
            as="div"
            padding="compact"
            className="flex h-full flex-col gap-3"
          >
            <span className={iconCircle}>
              <Icon name={row.icon} size={22} />
            </span>
            <dt className="text-[length:var(--text-body)] font-bold text-ink">
              {row.term}
            </dt>
            <dd className="text-[length:var(--text-body)] leading-relaxed text-ink-muted">
              {row.definition}
            </dd>
          </Card>
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
      <ol className="mt-5 grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-3 md:gap-12">
        {content.steps.map((step, index) => (
          <li key={index} className="relative">
            <StepCard icon={step.icon}>
              <RichParts parts={step.parts} />
            </StepCard>
            {index < content.steps.length - 1 ? (
              <>
                <span
                  aria-hidden="true"
                  className="absolute top-full left-1/2 grid h-10 -translate-x-1/2 place-items-center text-[var(--color-accent-blue-strong)]/60 md:hidden"
                >
                  <Icon name="arrow-down" size={24} />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 left-full hidden w-12 -translate-y-1/2 place-items-center text-[var(--color-accent-blue-strong)]/60 md:grid"
                >
                  <Icon name="arrow-right" size={24} />
                </span>
              </>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <CtaButton cta={cta} emphasis="primary" blockOnMobile />
      </div>
      <p className="mt-3 text-[length:var(--text-small)] text-ink-muted">
        {content.applyNote}
      </p>
    </Section>
  );
}
