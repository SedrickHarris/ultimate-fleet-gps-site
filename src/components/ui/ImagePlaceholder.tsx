interface ImagePlaceholderProps {
  /** Visible label inside the box, e.g. "Image placeholder: installer working on a fleet vehicle". */
  readonly label: string;
  /** CSS aspect-ratio value, e.g. "4 / 3". Reserved now so a real image causes no layout shift. */
  readonly aspectRatio?: string;
  readonly className?: string;
  /** Optional stable slot id, rendered as `data-image-slot`. */
  readonly slot?: string;
  /** Dark-surface variant, for a placeholder on the navy closing section. */
  readonly onDark?: boolean;
}

/**
 * Image placeholder for a section media column. The aspect ratio reserves the
 * space, so swapping in the real photo causes no layout shift.
 *
 * TODO: Replace with a real, verified Ultimate Fleet GPS installation photo.
 * Add descriptive alt text when swapped in.
 *
 * To swap in a photo, render next/image (or the existing img pattern in
 * ImageSlot) with `src`, `alt`, `width`, and `height` inside this same
 * wrapper, using `fill` and `className="object-cover"` or the intrinsic
 * width/height, and drop `aria-hidden`. Do not use a generic stock-photo team.
 * The media scrolls with the content (CLAUDE.md section 8).
 */
export function ImagePlaceholder({
  label,
  aspectRatio = "4 / 3",
  className = "",
  slot,
  onDark = false,
}: ImagePlaceholderProps) {
  return (
    <div
      data-image-slot={slot}
      aria-hidden="true"
      style={{ aspectRatio }}
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border ${
        onDark
          ? "border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)]"
          : "border-border bg-surface-subtle"
      } ${className}`}
    >
      <span
        className={`px-4 text-center text-[length:var(--text-small)] ${
          onDark ? "text-[var(--color-text-on-dark)]/80" : "text-ink-muted"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
