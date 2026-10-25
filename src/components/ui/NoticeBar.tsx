import type { ReactNode } from "react";

import { Icon, type IconName } from "@/components/ui/Icon";

/**
 * Slim full-width notice: icon and one body-size line on a muted tint. No
 * heading element. Text stays at body size so a disclosure is never smaller
 * than the copy around it. `onDark` swaps to light-on-dark colors for the
 * closing surface.
 */
export function NoticeBar({
  icon,
  children,
  className = "",
  onDark = false,
}: {
  readonly icon: IconName;
  readonly children: ReactNode;
  readonly className?: string;
  readonly onDark?: boolean;
}) {
  return (
    <p
      className={`flex items-start gap-3 rounded-md px-4 py-3 text-[length:var(--text-body)] leading-relaxed ${
        onDark
          ? "bg-white/10 text-[var(--color-text-on-dark)]"
          : "bg-[var(--color-accent-blue-strong)]/10 text-ink"
      } ${className}`.trim()}
    >
      <span
        className={`mt-0.5 ${
          onDark
            ? "text-[var(--color-text-on-dark)]"
            : "text-[var(--color-accent-blue-strong)]"
        }`}
      >
        <Icon name={icon} size={22} />
      </span>
      <span>{children}</span>
    </p>
  );
}
