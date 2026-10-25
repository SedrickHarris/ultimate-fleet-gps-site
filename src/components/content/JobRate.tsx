import { CtaBand } from "@/components/content/CtaBand";
import { LinkedText } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { CompactTile } from "@/components/ui/CompactTile";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { NoticeBar } from "@/components/ui/NoticeBar";
import { iconCircle } from "@/components/ui/StepCard";
import type { Cta } from "@/types/content";
import type { JobRate } from "@/types/jobs";

interface JobRateSectionProps {
  readonly id: string;
  readonly content: JobRate;
  readonly cta: Cta;
  readonly tone?: "default" | "subtle" | "brandTint";
}

const h3Class = "text-[length:var(--text-h4)] font-bold text-ink";
const h3SectionClass =
  "mt-10 text-[length:var(--text-h3)] leading-tight font-bold text-ink";

/**
 * Starting rate section. The top row is the H2 and answer beside the image
 * placeholder (two columns from lg). Below, full width: the rate stat card
 * (figure, unit, "Starting rate" badge, and the disclosure at body size), two
 * explanation cards, compact "what you provide" tiles, a contractor-status
 * notice bar, and the apply band. The figure always travels with its
 * disclosure. The media is static (CLAUDE.md section 8).
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
          <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed font-medium text-pretty text-ink">
            {content.answer}
          </p>
        </div>

        {/*
          Image slot. Intended alt text: "Installation technician reviewing
          completed work on a smartphone beside a fleet truck". See
          ImagePlaceholder for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-starting-rate" />
      </div>

      <div className="mt-10 flex flex-col gap-6 rounded-[var(--radius-lg)] border border-border border-l-4 border-l-[var(--color-accent-blue-strong)] bg-surface p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <p className="inline-block rounded-full bg-[var(--color-accent-blue-strong)] px-3 py-1 text-[length:var(--text-label)] font-semibold tracking-wide text-white uppercase">
            {content.figureBadge}
          </p>
          <p className="mt-3 text-[length:var(--text-display)] leading-none font-bold text-ink">
            {content.figure}
          </p>
          <p className="mt-1 text-[length:var(--text-body-lg)] font-semibold text-ink-muted">
            {content.figureUnit}
          </p>
        </div>
        <p className="flex items-start gap-3 text-[length:var(--text-body-lg)] leading-snug font-semibold text-ink md:max-w-md">
          <span className={iconCircle}>
            <Icon name="info" size={22} />
          </span>
          <span className="pt-2">{content.disclosure}</span>
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <ExplainCard
          icon="banknote"
          heading={content.howHeading}
          body={content.how}
        />
        <ExplainCard
          icon="info"
          heading={content.meansHeading}
          body={content.means}
        />
      </div>

      <h3 className={h3SectionClass}>{content.coverHeading}</h3>
      <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
        {content.coverIntro}
      </p>
      <ul className="mt-4 grid list-none grid-cols-1 gap-3 p-0 min-[640px]:grid-cols-2 lg:grid-cols-4">
        {content.cover.map((item) => (
          <CompactTile key={item.text} icon={item.icon}>
            {item.text}
          </CompactTile>
        ))}
      </ul>
      <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
        <LinkedText text={content.coverClosing} />
      </p>

      <NoticeBar icon="briefcase" className="mt-8">
        <LinkedText text={content.status} />
      </NoticeBar>

      <CtaBand
        className="mt-8"
        cta={cta}
        note={content.ctaNote}
        faqLink={content.faqLink}
        callLead={content.callLead}
        phoneLabel={content.phoneLabel}
        phoneHref={content.phoneHref}
        hours={content.hours}
      />
    </Section>
  );
}

function ExplainCard({
  icon,
  heading,
  body,
}: {
  readonly icon: IconName;
  readonly heading: string;
  readonly body: string;
}) {
  return (
    <Card as="div" padding="compact" className="flex h-full flex-col gap-3">
      <span className={iconCircle}>
        <Icon name={icon} size={22} />
      </span>
      <h3 className={h3Class}>{heading}</h3>
      <p className="text-[length:var(--text-body)] leading-relaxed text-ink-muted">
        {body}
      </p>
    </Card>
  );
}
