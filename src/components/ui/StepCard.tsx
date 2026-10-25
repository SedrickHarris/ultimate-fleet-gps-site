import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";

/** Tinted circle behind a card icon. Brand blue on a 10% tint of itself. */
export const iconCircle =
  "grid size-11 shrink-0 place-items-center rounded-full bg-[var(--color-accent-blue-strong)]/10 text-[var(--color-accent-blue-strong)]";

/**
 * One step card: icon in a tinted circle, a numbered badge, and the step text.
 * The badge is decorative (`aria-hidden`); the surrounding `<ol>` carries the
 * order. Shared by the "How to apply" and "What a typical installation looks
 * like" steps so the two match.
 */
export function StepCard({
  number,
  icon,
  children,
}: {
  readonly number: number;
  readonly icon: IconName;
  readonly children: ReactNode;
}) {
  return (
    <Card as="div" padding="compact" className="flex h-full flex-col gap-3">
      <span className="flex items-center gap-3">
        <span className={iconCircle}>
          <Icon name={icon} size={22} />
        </span>
        <span
          aria-hidden="true"
          className="grid size-7 place-items-center rounded-full bg-[var(--color-accent-blue-strong)] text-[length:var(--text-small)] font-bold text-white"
        >
          {number}
        </span>
      </span>
      <span className="text-[length:var(--text-body)] leading-relaxed text-ink">
        {children}
      </span>
    </Card>
  );
}
