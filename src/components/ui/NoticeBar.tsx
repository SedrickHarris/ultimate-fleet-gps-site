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
  navy = false,
}: {
  readonly icon: IconName;
  readonly children: ReactNode;
  readonly className?: string;
  readonly onDark?: boolean;
  /** Solid navy fill with light text, for a notice on a light section. */
  readonly navy?: boolean;
}) {
  return (
    <p
      data-tone={navy ? "dark" : undefined}
      className={`flex items-start gap-3 rounded-md px-4 py-3 text-[length:var(--text-body)] leading-relaxed ${
        navy
          ? "bg-[var(--color-surface-dark)] text-[var(--color-text-on-dark)]"
          : onDark
            ? "bg-white/10 text-[var(--color-text-on-dark)]"
            : "bg-[var(--color-accent-blue-strong)]/10 text-ink"
      } ${className}`.trim()}
    >
      <span
        className={`mt-0.5 ${
          onDark || navy
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
