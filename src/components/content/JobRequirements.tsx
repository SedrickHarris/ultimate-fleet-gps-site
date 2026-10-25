import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { JobRequirementItem, JobRequirements } from "@/types/jobs";

interface JobRequirementsSectionProps {
  readonly id: string;
  readonly content: JobRequirements;
  readonly tone?: "default" | "subtle";
}

/**
 * Requirements section of an active opening page.
 *
 * Two columns from lg (about 3/5 content, 2/5 media), single column below with
 * the media after the content. The media column is static: section media
 * scrolls with the content and is never pinned (CLAUDE.md section 8).
 */
export function JobRequirementsSection({
  id,
  content,
  tone = "default",
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

          <RequirementList heading={content.needHeading} items={content.need} />
          <RequirementList
            heading={content.notNeededHeading}
            items={content.notNeeded}
          />

          <h3 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
            {content.preferredHeading}
          </h3>
          <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
            {content.preferred}
          </p>
          <p className="mt-4">
            <Link
              href={content.moreLink.href}
              className="inline-flex min-h-11 items-center text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
            >
              {content.moreLink.label}
            </Link>
          </p>
        </div>

        {/*
          Image slot. Intended alt text: "Technician with a smartphone and hand
          tools beside a fleet truck". See ImagePlaceholder for the swap.
        */}
        <ImagePlaceholder slot="careers-technician-requirements" />
      </div>
    </Section>
  );
}

function RequirementList({
  heading,
  items,
}: {
  readonly heading: string;
  readonly items: readonly JobRequirementItem[];
}) {
  return (
    <>
      <h3 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
        {heading}
      </h3>
      <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-[length:var(--text-body)] leading-relaxed text-ink marker:text-ink">
        {items.map((item) => (
          <li key={item.lead}>
            <strong className="font-bold">{item.lead}</strong> {item.detail}
          </li>
        ))}
      </ul>
    </>
  );
}
