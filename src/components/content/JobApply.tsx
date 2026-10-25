import { CtaBand } from "@/components/content/CtaBand";
import { LinkedText } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import { CompactTile } from "@/components/ui/CompactTile";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { NoticeBar } from "@/components/ui/NoticeBar";
import type { Cta } from "@/types/content";
import type { JobApply } from "@/types/jobs";

interface JobApplySectionProps {
  readonly id: string;
  readonly content: JobApply;
  /** The no-guarantee disclosure. Shown once, in the notice bar, at body size. */
  readonly disclaimer: string;
  /** The shared apply CTA. Carries the destination, journey, and click event. */
  readonly cta: Cta;
  /** The secondary Installer Network CTA. Never the apply action. */
  readonly networkCta: Cta;
  readonly tone?: "default" | "subtle";
}

const h3Class = "mt-10 text-[length:var(--text-h3)] leading-tight font-bold text-ink";

/**
 * Closing apply section of an active opening page. The top row is the eyebrow,
 * H2, and answer beside the image placeholder (two columns from lg). Below, full
 * width: the "before you apply" checklist tiles, the disclosure notice bar, the
 * primary apply band, and a clearly lighter Installer Network card. The media
 * is static (CLAUDE.md section 8).
 */
export function JobApplySection({
  id,
  content,
  disclaimer,
  cta,
  networkCta,
  tone = "subtle",
}: JobApplySectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section id={id} tone={tone} width="site" labelledBy={headingId}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-16">
        <div>
          <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-brand-red)] uppercase">
            {content.eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>
          {/* TODO add post-application process block only after confirmed. */}
          <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed font-medium text-pretty text-ink">
            {content.answer}
          </p>
        </div>

        {/*
          Image slot. Intended alt text: "Installation technician with a
          smartphone ready to start a fleet installation". See ImagePlaceholder
          for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-apply" />
      </div>

      <h3 className={h3Class}>{content.beforeHeading}</h3>
      <ul className="mt-4 grid list-none grid-cols-1 gap-3 p-0 min-[640px]:grid-cols-2 lg:grid-cols-4">
        {content.before.map((item) => (
          <CompactTile key={item.text} icon={item.icon} check>
            {item.text}
          </CompactTile>
        ))}
      </ul>
      <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
        <LinkedText text={content.beforeClosing} />
      </p>

      <NoticeBar icon="info" className="mt-8">
        {disclaimer}
      </NoticeBar>

      <CtaBand
        className="mt-4"
        cta={cta}
        note={content.ctaNote}
        faqLink={content.faqLink}
        callLead={content.callLead}
        phoneLabel={content.phoneLabel}
        phoneHref={content.phoneHref}
      />

      <div className="mt-6 flex flex-col gap-4 rounded-[var(--radius-lg)] border border-border bg-surface-subtle p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <div>
          <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
            {content.futureHeading}
          </h3>
          <p className="mt-1 max-w-[620px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            {content.future}
          </p>
        </div>
        <div className="shrink-0">
          <CtaButton cta={networkCta} emphasis="secondary" blockOnMobile />
        </div>
      </div>
    </Section>
  );
}
