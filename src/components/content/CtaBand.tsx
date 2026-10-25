import Link from "next/link";

import { inlineLinkClass } from "@/components/content/LinkedText";
import { CtaButton } from "@/components/ui/CtaButton";
import type { Cta } from "@/types/content";

interface CtaBandProps {
  readonly cta: Cta;
  /** Short line beside the primary button. */
  readonly note: string;
  /** Optional outline button beside the primary one. */
  readonly secondaryCta?: Cta;
  readonly faqLink?: { readonly label: string; readonly href: string };
  readonly callLead: string;
  readonly phoneLabel: string;
  readonly phoneHref: string;
  /** Optional hours line under the phone link. */
  readonly hours?: string;
  readonly className?: string;
}

/**
 * Full-width apply band: the one primary button with a short note beside it,
 * a text link to the FAQs, and the phone as a tel: link. Shared by the
 * Starting Rate and Apply sections so the two bands match.
 */
export function CtaBand({
  cta,
  note,
  secondaryCta,
  faqLink,
  callLead,
  phoneLabel,
  phoneHref,
  hours,
  className = "",
}: CtaBandProps) {
  return (
    <div
      data-tone="light"
      className={`flex flex-col gap-5 rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between ${className}`.trim()}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <CtaButton cta={cta} emphasis="primary" blockOnMobile />
        {secondaryCta ? (
          <CtaButton cta={secondaryCta} emphasis="secondary" blockOnMobile />
        ) : null}
        <p className="text-[length:var(--text-body)] font-semibold text-ink">
          {note}
        </p>
      </div>
      <div className="flex flex-col gap-1 text-[length:var(--text-body)] text-ink-muted lg:items-end">
        {faqLink ? (
          <Link
            href={faqLink.href}
            className={`inline-flex min-h-11 items-center ${inlineLinkClass}`}
          >
            {faqLink.label}
          </Link>
        ) : null}
        <p>
          {callLead}{" "}
          <a href={phoneHref} className={inlineLinkClass}>
            {phoneLabel}
          </a>
          {hours ? <span className="block">{hours}</span> : null}
        </p>
      </div>
    </div>
  );
}
