import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/Section";

/**
 * Site-wide 404. Renders inside the root layout, so it adds no header, nav, or
 * footer. Noindexed, with no canonical, schema, or analytics, and absent from
 * the sitemap by design (decision 0012). It deliberately does not use
 * `buildPageMetadata`, which always emits a canonical.
 *
 * The buttons copy the `CtaButton` primary and secondary classes locally,
 * without `data-journey` or `data-event`, so a 404 click is never labelled as a
 * recruitment or commercial event, and without the hover motion (no motion on
 * this page).
 */
export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested could not be found.",
  robots: { index: false, follow: false },
};

const buttonBase =
  "inline-flex min-h-12 w-full items-center justify-center rounded-md px-6 py-3 text-center text-base font-semibold no-underline sm:w-auto";

const primaryButton = `${buttonBase} border border-transparent bg-[var(--color-accent-blue-strong)] text-white hover:brightness-110 active:brightness-95`;

const secondaryButton = `${buttonBase} border border-ink bg-surface text-ink hover:bg-surface-subtle`;

export default function NotFound() {
  return (
    <Section tone="default" density="standard" width="reading">
      <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
        Error 404
      </p>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">
        We can&apos;t find that page
      </h1>
      <p className="mt-4 text-lg text-ink-muted">
        The link may be out of date or the address may have a typo. If
        you&apos;re looking for installer work or a fleet project, start here.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/careers/" className={primaryButton}>
          View Careers
        </Link>
        <Link href="/contact/" className={secondaryButton}>
          Contact Us
        </Link>
      </div>
      <p className="mt-6">
        <Link href="/" className="font-semibold text-ink underline">
          Back to the homepage
        </Link>
      </p>
    </Section>
  );
}
