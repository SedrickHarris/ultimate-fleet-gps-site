import { formatAddressLines } from "@/data/site/business";

interface CorporateOfficeProps {
  /** Spacing or layout classes from the caller, for example "mt-6". */
  readonly className?: string;
  /** Text colors for a dark surface. Defaults to light. */
  readonly tone?: "light" | "dark";
}

/**
 * The corporate office address, as plain text.
 *
 * The single place the address is rendered in page markup. It reads
 * `business.address` through `formatAddressLines`, so no page or component carries its own copy. Approved
 * surfaces are the footer, contact page, careers pages, and legal pages
 * (01-business-source-of-truth.md sections 5.3 and 33.4).
 *
 * The "Corporate office" label keeps it from being read as a walk-in
 * installation facility. No map, no directions link, no hours, and no
 * local-service wording belong here.
 */
export function CorporateOffice({
  className = "",
  tone = "light",
}: CorporateOfficeProps) {
  const dark = tone === "dark";
  const [streetLine, cityLine] = formatAddressLines();

  return (
    <address
      className={`text-[length:var(--text-small)] not-italic ${
        dark ? "text-[var(--color-text-on-dark)]/90" : "text-ink-muted"
      } ${className}`.trim()}
    >
      <span
        className={`block font-semibold ${
          dark ? "text-[var(--color-text-on-dark)]" : "text-ink"
        }`}
      >
        Corporate office
      </span>
      <span className="block">{streetLine}</span>
      <span className="block">{cityLine}</span>
    </address>
  );
}
