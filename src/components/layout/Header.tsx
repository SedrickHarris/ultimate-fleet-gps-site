import Link from "next/link";

import { HeaderMobileMenu } from "@/components/layout/HeaderMobileMenu";
import { MainNavigation } from "@/components/layout/MainNavigation";
import { PhoneButton } from "@/components/layout/PhoneButton";
import {
  headerCta,
  mainNavigation,
  utilityBar,
} from "@/data/navigation/site-navigation";

/**
 * Global site header.
 *
 * Brand mark is the full-color red logo on the light header row (the navy
 * utility bar carries no logo). Source: ultimate-fleet-gps-primary-logo.svg,
 * viewBox 1540x779, 14 KB, fill #b50202, shown at 120-150 px wide. Plain img
 * because static export does not use Next image optimization. The thin red top border is decorative only.
 *
 * Utility bar (desktop only, 1024px and up): the confirmed nationwide-reach
 * statement and the current openings link, so the secondary journey stays reachable without competing with the
 * primary commercial CTA in the row below.
 *
 * Primary nav is commercial-first per the 2026-09-18 override: Services,
 * Careers, Contact. Neither "Industries" nor "Coverage" is linked, because
 * neither route exists yet (Sprint 2). See the build report's judgment-call
 * note on this.
 *
 * Breakpoint: the full desktop header (utility bar, main navigation, phone
 * button) starts at lg (1024px). The row needs more than 720px, so it cannot
 * fit at md (768px) without horizontal overflow. Below lg the header shows the
 * logo and the disclosure menu on one row, plus the Request Service CTA from
 * md up. Below md (phones) the CTA is omitted from the header because
 * MobileNavigation keeps one-tap phone and Request Service actions visible,
 * and the header stays a single compact row. Keep HeaderMobileMenu,
 * MainNavigation, and MobileNavigation on this same breakpoint.
 *
 * Not sticky: a fixed header costs mobile viewport height and can cover
 * anchor targets, which section 16 of 20-component-inventory.md warns
 * against. The persistent mobile conversion surface is MobileNavigation, a
 * fixed bottom bar, not this header.
 */
export function Header() {
  return (
    <header className="border-t-4 border-t-[var(--color-brand-red)] border-b border-border bg-surface">
      <div
        data-tone="dark"
        className="hidden border-b border-border bg-[var(--color-surface-dark)] text-[var(--color-text-on-dark)] lg:block"
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-2 text-[length:var(--text-small)]">
          <div className="flex items-center gap-6">
            <span>{utilityBar.reachLabel}</span>
          </div>

          <Link
            href={utilityBar.openings.href}
            data-journey="recruitment"
            data-event="cta_careers_click"
            data-cta-location="utility-bar"
            className="text-[var(--color-text-on-dark)] no-underline hover:underline"
          >
            {utilityBar.openings.label}
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-4 px-5 py-2 md:gap-x-8 md:px-6">
        <Link
          href="/"
          aria-label="Ultimate Fleet GPS"
          className="inline-flex items-center rounded-sm p-1"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logos/ultimate-fleet-gps-primary-logo.svg"
            alt="Ultimate Fleet GPS"
            width={1200}
            height={360}
            className="h-auto w-[140px] max-w-full sm:w-[160px] lg:w-[190px]"
          />
        </Link>

        <div className="ms-auto hidden items-center gap-4 md:flex">
          <MainNavigation items={mainNavigation} />

          {/*
            Wrapper, not a `hidden` class on the button: PhoneButton's own
            `inline-flex` overrides `hidden`, which left the phone button visible
            on small screens. Hiding the wrapper hides the whole button below lg.
          */}
          <div className="hidden lg:block">
            <PhoneButton
              href={utilityBar.phoneHref}
              label={utilityBar.phoneLabel}
              location="header"
              className="border-transparent bg-[var(--color-brand-red)] text-white hover:bg-[var(--color-brand-red-strong)]"
            />
          </div>

          <Link
            href={headerCta.href}
            data-journey="commercial"
            data-event="cta_request_service_click"
            data-cta-location="header"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-transparent bg-[var(--color-accent-blue-strong)] px-4 py-2 font-semibold text-white no-underline transition-[filter,box-shadow,transform] duration-[var(--duration-fast)] ease-[var(--ease-out-soft)] hover:-translate-y-px hover:brightness-110 hover:shadow-card active:translate-y-0"
          >
            {headerCta.label}
          </Link>
        </div>

        <HeaderMobileMenu
          items={[...mainNavigation, utilityBar.openings]}
          phone={{ href: utilityBar.phoneHref, label: utilityBar.phoneLabel }}
        />
      </div>
    </header>
  );
}
