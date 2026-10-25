import type { ReactNode } from "react";

import { RichParts } from "@/components/content/LinkedText";
import { Section } from "@/components/layout/Section";
import type { RichFaqItem } from "@/types/content";

interface RichFaqSectionProps {
  readonly id: string;
  readonly h2: string;
  readonly items: readonly RichFaqItem[];
  readonly tone?: "default" | "subtle";
  /** Optional content shown under the questions, such as a short CTA line. */
  readonly children?: ReactNode;
}

/**
 * FAQ accordion whose answers can carry several in-sentence links. Native
 * details/summary, closed on load, with every answer in the HTML. The same
 * `items` array generates the FAQPage JSON-LD (links stripped), so the visible
 * text and the schema cannot drift. Two columns from md, one below, with
 * `items-start` so opening one item never stretches its neighbor.
 */
export function RichFaqSection({
  id,
  h2,
  items,
  tone = "default",
  children,
}: RichFaqSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section id={id} tone={tone} width="site" labelledBy={headingId}>
      <h2
        id={headingId}
        className="mb-6 text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {h2}
      </h2>
      <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 md:gap-4">
        {items.map((item, index) => {
          const answerId = `${id}-answer-${index + 1}`;
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
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-sm border border-border bg-surface text-ink"
                >
                  <svg
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
                  >
                    <path d="M8 2v12M2 8h12" />
                  </svg>
                </span>
              </summary>
              <p
                id={answerId}
                className="px-4 pb-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted md:px-4.5"
              >
                <RichParts parts={item.answer} />
              </p>
            </details>
          );
        })}
      </div>
      {children}
    </Section>
  );
}
