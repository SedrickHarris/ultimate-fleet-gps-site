import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";

/** Tinted circle behind a card icon. Brand blue on a 10% tint of itself. */
export const iconCircle =
  "grid size-11 shrink-0 place-items-center rounded-full bg-[var(--color-accent-blue-strong)]/10 text-[var(--color-accent-blue-strong)]";

/**
 * One step card: an icon in a tinted circle above the step text. Order is
 * carried by the surrounding `<ol>`, the arrows or connectors between cards,
 * and left-to-right reading order, not by a visible number. Shared by the
 * "How to apply" and "What a typical installation looks like" steps so the two
 * match.
 */
export function StepCard({
  icon,
  children,
}: {
  readonly icon: IconName;
  readonly children: ReactNode;
}) {
  return (
    <Card as="div" padding="compact" className="flex h-full flex-col gap-4">
      <span className={iconCircle}>
        <Icon name={icon} size={22} />
      </span>
      <span className="text-[length:var(--text-body)] leading-relaxed text-ink">
        {children}
      </span>
    </Card>
  );
}
