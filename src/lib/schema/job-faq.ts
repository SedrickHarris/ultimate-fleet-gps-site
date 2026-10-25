import { business } from "@/data/site/business";
import type { JobFaqPart, JobRecord } from "@/types/jobs";

/** Answer text with visible-only links stripped. */
export function jobFaqAnswerText(parts: readonly JobFaqPart[]): string {
  return parts
    .map((part) => (typeof part === "string" ? part : part.text))
    .join("");
}

/**
 * The one FAQPage block on the active opening page. It reads the same
 * `job.faq` groups the visible accordion renders, so questions and answers
 * (links stripped) can never drift apart. The page emits no other FAQPage.
 */
export function jobFaqPageSchema(job: JobRecord) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${business.url}${job.path}#faq`,
    mainEntity: job.faq.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: jobFaqAnswerText(item.answer),
        },
      })),
    ),
  };
}
