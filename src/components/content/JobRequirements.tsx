import { CtaBand } from "@/components/content/CtaBand";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Cta } from "@/types/content";
import type { JobRequirements } from "@/types/jobs";

interface JobRequirementsSectionProps {
  readonly id: string;
  readonly content: JobRequirements;
  /** The shared apply CTA. Carries the destination, journey, and click event. */
  readonly cta: Cta;
  /** Outline button to the full installer requirements page. */
  readonly secondaryCta: Cta;
  readonly tone?: "default" | "subtle";
}

const h3Class = "mt-10 text-[length:var(--text-h3)] leading-tight font-bold text-ink";

/** Larger icon circle than the compact tiles, so these read as the richer block. */
const bigCircle =
  "grid size-14 shrink-0 place-items-center rounded-full bg-[var(--color-accent-blue-strong)]/10 text-[var(--color-accent-blue-strong)]";

/**
 * Requirements section. The top row is the H2 and answer beside the image
 * placeholder (two columns from lg). Below, full width: the five requirement
 * cards (6-column grid: three over two from lg, two columns from 640px, one
 * below), a "no experience needed" reassurance band, the preferred
 * qualifications card, and the apply band. The section id is the anchor target
 * for several links on the page. The media is static (CLAUDE.md section 8).
 *
 * Card titles are styled text (`<strong>`), not headings, so the outline stays
 * H2 then H3.
 */
export function JobRequirementsSection({
  id,
  content,
  cta,
  secondaryCta,
  tone = "subtle",
}: JobRequirementsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section id={id} tone={tone} width="site" labelledBy={headingId}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-16">
        <div>
          <h2
            id={headingId}
            className="scroll-mt-24 text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>
          <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed font-medium text-pretty text-ink">
            {content.answer}
          </p>
        </div>

        {/*
          Image slot. Intended alt text: "Technician with a smartphone and hand
          tools beside a fleet truck". See ImagePlaceholder for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-requirements" />
      </div>

      <h3 className={h3Class}>{content.needHeading}</h3>
      <ul className="mt-5 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
        {content.need.map((item, index) => (
          <li
            key={item.lead}
            className={`${
              index < 3 ? "lg:col-span-2" : "lg:col-span-3"
            } ${index === content.need.length - 1 ? "sm:max-lg:col-span-2" : ""}`}
          >
            <Card
              as="div"
              padding="default"
              className="flex h-full flex-col gap-4"
            >
              <span className={bigCircle}>
                <Icon name={item.icon} size={28} />
              </span>
              <strong className="text-[length:var(--text-h4)] leading-snug font-bold text-ink">
                {item.lead}
              </strong>
              <span className="text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {item.detail}
              </span>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-[var(--radius-lg)] border border-[var(--color-accent-blue-strong)]/30 bg-[var(--color-accent-blue-strong)]/10 p-6 md:p-8">
        <h3 className="text-[length:var(--text-h3)] leading-tight font-bold text-ink">
          {content.notNeededHeading}
        </h3>
        <ul className="mt-5 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-8">
          {content.notNeeded.map((item) => (
            <li key={item.lead} className="flex items-start gap-4">
              <span className={bigCircle}>
                <Icon name={item.icon} size={28} />
              </span>
              <span className="flex flex-col gap-1">
                <strong className="text-[length:var(--text-h4)] leading-snug font-bold text-ink">
                  {item.lead}
                </strong>
                <span className="text-[length:var(--text-body)] leading-relaxed text-ink">
                  {item.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className={h3Class}>{content.preferredHeading}</h3>
      <Card as="div" padding="default" className="mt-5">
        <p className="inline-block rounded-full border border-ink px-3 py-1 text-[length:var(--text-label)] font-semibold tracking-wide text-ink uppercase">
          {content.preferredBadge}
        </p>
        <ul className="mt-4 flex list-disc flex-col gap-2 pl-6 text-[length:var(--text-body)] leading-relaxed text-ink marker:text-ink">
          {content.preferredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-[length:var(--text-body)] leading-relaxed font-semibold text-ink">
          {content.preferredClosing}
        </p>
      </Card>

      <CtaBand
        className="mt-10"
        cta={cta}
        secondaryCta={secondaryCta}
        note={content.ctaNote}
        callLead={content.callLead}
        phoneLabel={content.phoneLabel}
        phoneHref={content.phoneHref}
        hours={content.hours}
      />
    </Section>
  );
}
