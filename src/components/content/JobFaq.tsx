import Link from "next/link";

import { inlineLinkClass } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import type { JobFaqPart, JobRecord } from "@/types/jobs";

/**
 * FAQ groups for an active opening.
 *
 * Each group renders its questions in a CSS grid (one column below md, two
 * from md) with `items-start`, so opening one item never stretches its
 * neighbor. Order is row by row, which keeps keyboard and reading order. Items
 * are native details/summary, closed on load, with every answer in the HTML.
 * The expand indicator is an aria-hidden SVG, not typed text.
 */
export function JobFaqSection({
  id,
  job,
}: {
  readonly id: string;
  readonly job: JobRecord;
}) {
  const headingId = `${id}-heading`;

  return (
    <Section id={id} tone="default" width="site" labelledBy={headingId}>
      <div>
        <h2
          id={headingId}
          className="mb-3 text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {job.faqH2}
        </h2>
        <p className="mb-6 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {job.faqIntro}
        </p>

        {job.faq.map((group, groupIndex) => (
          <div key={group.heading} className="mt-3 md:mt-4">
            <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 md:gap-4">
              {group.items.map((item, index) => {
                const answerId = `${id}-g${groupIndex + 1}-answer-${index + 1}`;
                return (
                  <details
                    key={item.question}
                    className="group rounded-md border border-border bg-surface"
                  >
                    <summary
                      aria-controls={answerId}
                      className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-md px-4 py-4 marker:hidden hover:bg-surface-subtle md:px-4.5"
                    >
                      <span className="text-[length:var(--text-body-lg)] leading-snug font-semibold text-balance text-ink">
                        {item.question}
                      </span>
                      <ExpandIcon />
                    </summary>
                    <p
                      id={answerId}
                      className="px-4 pb-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted md:px-4.5"
                    >
                      <AnswerParts parts={item.answer} />
                    </p>
                  </details>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function AnswerParts({ parts }: { readonly parts: readonly JobFaqPart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          part
        ) : (
          <Link key={index} href={part.href} className={inlineLinkClass}>
            {part.text}
          </Link>
        ),
      )}
    </>
  );
}

/** Plus that turns to a cross when open. Only the glyph rotates, not its box. */
function ExpandIcon() {
  return (
    <span
      aria-hidden="true"
      className="grid size-8 shrink-0 place-items-center rounded-sm border border-border bg-surface text-ink "
    >
      <svg
        className="transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
        viewBox="0 0 16 16"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M8 2v12M2 8h12" />
      </svg>
    </span>
  );
}
