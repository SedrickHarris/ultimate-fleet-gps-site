"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import type { AnalyticsEventName } from "@/lib/analytics/events";
import { trackEvent } from "@/lib/analytics/track";

interface TrackedLinkProps {
  readonly href: string;
  readonly event: AnalyticsEventName;
  /** Identifiers only. Never personal data. */
  readonly params?: Readonly<Record<string, string | number | boolean>>;
  readonly journey?: string;
  readonly className?: string;
  readonly children: ReactNode;
}

/**
 * A link that pushes one analytics event on click. The only client code needed
 * for a tracked link, so the page around it stays a server component. `tel:`
 * links render a plain anchor; everything else uses next/link.
 */
export function TrackedLink({
  href,
  event,
  params,
  journey,
  className,
  children,
}: TrackedLinkProps) {
  const props = {
    href,
    className,
    "data-journey": journey,
    "data-event": event,
    onClick: () => trackEvent(event, params),
  };

  return href.startsWith("tel:") ? (
    <a {...props}>{children}</a>
  ) : (
    <Link {...props}>{children}</Link>
  );
}
