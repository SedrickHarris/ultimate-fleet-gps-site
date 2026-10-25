import Link from "next/link";

import type { JobFaqPart, JobLinkedText } from "@/types/jobs";

export const inlineLinkClass =
  "font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4";

/**
 * Link style for dark surfaces. The strong blue fails on navy, so links turn
 * white and stay distinguishable by the underline.
 */
export const inlineLinkOnDarkClass =
  "font-semibold text-[var(--color-text-on-dark)] underline underline-offset-4";

/** A sentence with one descriptive in-sentence link. */
export function LinkedText({
  text,
  onDark = false,
}: {
  readonly text: JobLinkedText;
  readonly onDark?: boolean;
}) {
  return (
    <>
      {text.before}
      <Link
        href={text.href}
        className={onDark ? inlineLinkOnDarkClass : inlineLinkClass}
      >
        {text.linkText}
      </Link>
      {text.after}
    </>
  );
}

/** Text parts in order: plain strings, or text with a link. */
export function RichParts({ parts }: { readonly parts: readonly JobFaqPart[] }) {
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
