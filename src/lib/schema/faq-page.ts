import type { RichFaqItem, RichFaqPart } from "@/types/content";

/** Answer text with visible-only links stripped. */
export function richFaqAnswerText(parts: readonly RichFaqPart[]): string {
  return parts
    .map((part) => (typeof part === "string" ? part : part.text))
    .join("");
}

/**
 * A FAQPage node built from the same items the visible accordion renders, so
 * the schema text equals the visible text (links stripped) by construction.
 */
export function richFaqPageNode(url: string, items: readonly RichFaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: richFaqAnswerText(item.answer),
      },
    })),
  };
}
