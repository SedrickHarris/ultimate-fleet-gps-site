import { Icon, type IconName } from "@/components/ui/Icon";

/**
 * A light, compact tile: small tinted icon circle and one line of text, with an
 * optional check mark for qualification checklists. Deliberately smaller and
 * flatter than `Card`, so rows of tiles do not repeat the heavier card style.
 * Render inside a `<ul>`; this returns the `<li>`.
 */
export function CompactTile({
  icon,
  children,
  check = false,
}: {
  readonly icon: IconName;
  readonly children: string;
  readonly check?: boolean;
}) {
  return (
    <li className="flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3">
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--color-accent-blue-strong)]/10 text-[var(--color-accent-blue-strong)]">
        <Icon name={icon} size={18} />
      </span>
      <span className="flex-1 text-[length:var(--text-body)] text-ink">
        {children}
      </span>
      {check ? (
        <span className="text-[var(--color-accent-blue-strong)]">
          <Icon name="check" size={18} />
        </span>
      ) : null}
    </li>
  );
}
