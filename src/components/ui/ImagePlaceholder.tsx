interface ImagePlaceholderProps {
  /** Stable slot id, rendered as `data-image-slot`. */
  readonly slot: string;
  /** Dark-surface variant, for a placeholder on the navy closing section. */
  readonly onDark?: boolean;
}

/**
 * 4:3 image placeholder for a section media column. The aspect ratio reserves
 * the space, so swapping in the real photo causes no layout shift.
 *
 * To swap in a photo, replace the span with next/image (1600x1200) using `fill`
 * and `className="object-cover"` inside this wrapper, with the alt text noted
 * where the placeholder is used. TODO replace each use with an approved photo
 * before launch. The media scrolls with the content (CLAUDE.md section 8).
 */
export function ImagePlaceholder({
  slot,
  onDark = false,
}: ImagePlaceholderProps) {
  return (
    <div
      data-image-slot={slot}
      aria-hidden="true"
      className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border ${
        onDark
          ? "border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)]"
          : "border-border bg-surface-subtle"
      }`}
    >
      <span
        className={`px-4 text-center text-[length:var(--text-small)] ${
          onDark ? "text-[var(--color-text-on-dark)]/80" : "text-ink-muted"
        }`}
      >
        Image placeholder - 4:3
      </span>
    </div>
  );
}
