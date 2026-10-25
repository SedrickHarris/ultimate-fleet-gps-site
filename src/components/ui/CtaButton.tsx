import Link from "next/link";

import type { Cta } from "@/types/content";

type Emphasis = "primary" | "secondary" | "dark" | "installerRed";

interface CtaButtonProps {
  readonly cta: Cta;
  readonly emphasis: Emphasis;
  /** Full width below the sm breakpoint, for stacked CTA pairs. */
  readonly blockOnMobile?: boolean;
  /** Primary only: white border so the fill reads against a navy surface. */
  readonly onDark?: boolean;
}

/**
 * A call-to-action link styled as a button.
 *
 * Emphasis is page-context-determined, not journey-hardcoded: a commercial
 * page uses `primary` for its commercial CTA, a careers page uses `primary`
 * for its Installer Network CTA. Do not assume `primary` always means one
 * journey. See 21-design-system.md section 27a (approved 2026-09-18 override
 * of the prior "primary is always recruitment" rule).
 *
 * State changes never rely on color alone. Hover and active shift the shadow
 * and translate the button, so the change is visible without color
 * perception. See 21-design-system.md section 11.
 */
const emphasisClasses: Record<Emphasis, string> = {
  primary: [
    /*
      --color-accent-blue-strong (#00688a) with white text is the single
      verified default primary-action pair, applied consistently across every
      primary-action surface. No other value is used for a primary CTA fill.
    */
    "bg-[var(--color-accent-blue-strong)] text-white border border-transparent",
    "hover:brightness-110 active:brightness-95",
    "shadow-none hover:shadow-card",
  ].join(" "),
  secondary: [
    /*
      The border is this button's visual boundary, so it must meet the 3:1
      non-text contrast requirement in WCAG 1.4.11. --color-ink on --color-
      surface and on --color-surface-subtle both clear that bar by a wide
      margin, so ink is used for both border and label on the secondary
      variant rather than an accent color, per the accent-on-light
      restriction in 21-design-system.md section 27a.
    */
    "bg-surface text-ink border border-ink",
    "hover:bg-surface-subtle",
    "shadow-none hover:shadow-card",
  ].join(" "),
  dark: [
    /*
      --color-ink (#111827) with white text, for a solid dark button on light
      surfaces. Used for the Installer Network button so it stays distinct from
      the blue commercial primary. Hover lifts the fill slightly and moves the
      button, so the change is not color-only.
    */
    "bg-ink text-white border border-transparent",
    "hover:brightness-125 active:brightness-100",
    "shadow-none hover:shadow-card",
  ].join(" "),
  installerRed: [
    /*
      --color-brand-red (#B40000) fill with white text (7.14:1, passes WCAG
      AA). 21-design-system.md section 27b prohibits red as any button fill;
      this is a stakeholder-approved exception granted 2026-09-20, scoped to
      the homepage direct-answer section's installer pathway CTA only. Do not
      reuse this emphasis elsewhere without the same approval. The focus ring
      is red too, per that approval, rather than the default accent ring.
    */
    "bg-[var(--color-brand-red)] text-white border border-transparent",
    "hover:bg-[var(--color-brand-red-strong)] active:bg-[var(--color-brand-red-strong)]",
    "focus-visible:outline-[var(--color-brand-red-strong)]",
    "shadow-none hover:shadow-card",
  ].join(" "),
};

export function CtaButton({
  cta,
  emphasis,
  blockOnMobile = false,
  onDark = false,
}: CtaButtonProps) {
  return (
    <Link
      href={cta.href}
      data-journey={cta.journey}
      data-event={cta.event}
      className={[
        "inline-flex min-h-12 items-center justify-center text-center",
        "rounded-md px-6 py-3",
        "text-base font-semibold no-underline",
        "transition-[background-color,box-shadow,transform,border-color,filter] duration-[var(--duration-fast)] ease-[var(--ease-out-soft)]",
        "hover:-translate-y-px active:translate-y-0",
        blockOnMobile ? "w-full sm:w-auto" : "",
        onDark
          ? emphasisClasses[emphasis].replace(
              "border-transparent",
              "border-white",
            )
          : emphasisClasses[emphasis],
      ].join(" ")}
    >
      {cta.labelBreakAfter && cta.label.startsWith(cta.labelBreakAfter) ? (
        <>
          {cta.labelBreakAfter}
          <br />
          {cta.label.slice(cta.labelBreakAfter.length).trimStart()}
        </>
      ) : (
        cta.label
      )}
    </Link>
  );
}
