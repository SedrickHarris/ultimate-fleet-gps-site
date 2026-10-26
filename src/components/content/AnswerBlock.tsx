import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import type { ServiceImage } from "@/data/site/service-images";
import type { AudiencePathway, DirectAnswerContent } from "@/types/content";

interface AnswerBlockProps {
  readonly content: DirectAnswerContent;
  /** Decorative image for the image column. Omit for a text-only block. */
  readonly image?: ServiceImage;
}

/**
 * Direct answer block, directly under the hero.
 *
 * The image comes first in the DOM (left on desktop, above the content on
 * mobile), then the content column: eyebrow, heading, body paragraphs, and
 * the optional audience pathways. Vertical centering beside the image comes
 * from `md:items-center` on the grid.
 *
 * The body is self-contained so an answer engine can lift it whole. See
 * 12-aeo-geo-llm-optimization.md.
 */
export function AnswerBlock({ content, image }: AnswerBlockProps) {
  const paragraphs =
    typeof content.body === "string" ? [content.body] : content.body;

  const text = (
    <div>
      {content.eyebrow ? (
        <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide uppercase text-[var(--color-brand-red)]">
          {content.eyebrow}
        </p>
      ) : null}

      {content.heading ? (
        <h2 className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink">
          {content.heading}
        </h2>
      ) : null}

      {paragraphs.map((paragraph, index) => (
        <p
          key={paragraph}
          className={`${index === 0 && !content.heading ? "" : "mt-5"} text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink`}
        >
          {paragraph}
        </p>
      ))}

      {content.link ? (
        <p className="mt-6">
          <Link
            href={content.link.href}
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {content.link.label}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      ) : null}

      {content.pathwaysHeading && content.pathways && content.pathways.length > 0 ? (
        <>
          <h3 className="mt-8 text-[length:var(--text-body)] font-bold text-ink">
            {content.pathwaysHeading}
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {content.pathways.map((pathway) => (
              <PathwayCard key={pathway.label} pathway={pathway} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );

  if (!image) {
    return <Section tone="default">{text}</Section>;
  }

  return (
    <Section tone="default" width="siteWide">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] h-auto w-full rounded-[var(--radius-lg)] object-cover object-[35%_50%]"
        />
        {text}
      </div>
    </Section>
  );
}

/**
 * One audience pathway card. The installer variant gets a red left border as
 * a secondary accent; the heading text and body copy are the primary way
 * each pathway is told apart, so nothing here depends on color alone.
 */
function PathwayCard({ pathway }: { readonly pathway: AudiencePathway }) {
  const isInstaller = pathway.variant === "installer";

  return (
    <div
      className={`rounded-[var(--radius-lg)] border p-5 ${
        isInstaller
          ? "border-border border-l-4 border-l-[var(--color-brand-red)]"
          : "border-border"
      }`}
    >
      <h4 className="text-[length:var(--text-body)] font-bold text-ink">
        {pathway.label}
      </h4>
      <p className="mt-2 text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted">
        {pathway.body}
      </p>
      <div className="mt-4 flex flex-col items-stretch gap-3">
        {pathway.ctas.map(({ cta, emphasis }) => (
          <CtaButton key={cta.label} cta={cta} emphasis={emphasis} />
        ))}
      </div>
    </div>
  );
}
