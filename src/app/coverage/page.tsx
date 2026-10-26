import type { Metadata } from "next";
import Link from "next/link";

import { CoverageHero } from "@/components/content/CoverageHero";
import { FaqGroup } from "@/components/content/FaqGroup";
import { SplitFeature } from "@/components/content/SplitFeature";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { coverage } from "@/data/commercial/coverage";
import { utilityBar } from "@/data/navigation/site-navigation";
import {
  coverageHeroVideo,
  coverageImages,
  quoteBackground,
  vehicleContextBackground,
} from "@/data/site/coverage-images";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";
import { TrustStrip } from "@/components/content/TrustStrip";
import { trustStripContent } from "@/data/site/trust-strip-content";

const PATHNAME = "/coverage/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Coverage" }];

const page = coverage.nationwide;

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle ?? page.h1,
  description: page.metaDescription,
  pathname: PATHNAME,
});

/**
 * The single canonical nationwide coverage page (Tier 0 of the future geo
 * roadmap). No `/coverage/nationwide/` is created - see
 * src/data/commercial/coverage.ts. No region/state/metro links render here;
 * `coverage.regions`/`states`/`metros` are empty in Sprint 2, so nothing is
 * read from them. Uses `webPageSchema`, not `servicePageSchema`: no
 * `Service.areaServed` state enumeration is emitted for this page, and
 * FAQPage is not emitted (the FAQ is visible, server-rendered content only).
 *
 * Commercial-first: the quote form follows the explanation. The Installer
 * Network handoff is a separate recruitment band right after the
 * introduction (decision 0007 item 10). Reuses
 * `CommercialInquiryForm` as-is: its existing "project location(s)" free-text
 * field already captures multi-location detail.
 */
export default function CoveragePage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: page.h1,
          description: page.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <CoverageHero
        id="coverage"
        eyebrow={page.hero.eyebrow}
        h1={page.h1}
        paragraphs={page.hero.paragraphs}
        primaryCta={page.hero.primaryCta}
        phone={{ href: utilityBar.phoneHref, label: page.hero.callLabel }}
        backgroundVideo={coverageHeroVideo}
        image={coverageImages.hero}
      />

      <TrustStrip content={trustStripContent} />

      <SplitFeature
        id="coverage-intro"
        eyebrow="NATIONWIDE COVERAGE"
        density="compact"
        content={page.introSection}
        slot={coverageImages.intro}
        mediaSide="left"
        mediaShare="narrow"
        mediaFirstOnMobile
      />

      {/*
        Installer Network handoff: a separate recruitment journey, placed right
        after the introduction. It has its own link, journey, and event and never
        leads into the commercial form. The pattern and illustration are decorative.
      */}
      <section
        data-tone="dark"
        aria-labelledby="coverage-installer-network-heading"
        className="relative isolate overflow-hidden border-t-4 border-t-[var(--color-brand-red)] bg-gradient-to-br from-[var(--color-surface-dark-raised)] to-[var(--color-surface-dark)] px-5 py-10 text-[var(--color-text-on-dark)] md:px-6 md:py-12"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_18px)]"
        />
        {/*
          Two columns from md: a distinct 7:4 illustration slot on the left
          (about 40%) and the content on the right (about 60%), vertically
          centered. On mobile the illustration stacks above the content. The
          slot is decorative and renders its fallback until an approved asset
          is set in coverage-images.ts.
        */}
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center md:gap-12">
          <ImageSlot
            slot={coverageImages.installerNetwork}
            className="border border-[var(--color-border-dark)]"
          />
          <div>
            <p className="flex items-center gap-3 text-[length:var(--text-small)] font-semibold tracking-widest uppercase">
              <span
                aria-hidden="true"
                className="h-0.5 w-8 shrink-0 bg-[var(--color-brand-red)]"
              />
              {page.handoff.eyebrow}
            </p>
            <h2
              id="coverage-installer-network-heading"
              className="mt-3 text-[length:var(--text-h2)] leading-tight font-bold text-balance"
            >
              {page.handoff.h2}
            </h2>
            <p className="mt-3 max-w-[640px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
              {page.handoff.body}
            </p>
            <p className="mt-4 max-w-[640px] text-[length:var(--text-small)] leading-relaxed text-[var(--color-text-on-dark)]/85">
              {page.handoff.disclosure}
            </p>
            <Link
              href={page.handoff.link.href}
              data-journey={page.handoff.link.journey}
              data-event={page.handoff.link.event}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-center text-base font-semibold text-white no-underline transition-colors duration-[var(--duration-fast)] hover:bg-white/10 sm:w-auto"
            >
              {page.handoff.link.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <Section
        tone="subtle"
        width="site"
        density="compact"
        labelledBy="coverage-request-heading"
      >
        <h2
          id="coverage-request-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.requestStart.h2}
        </h2>
        <ul className="mt-6 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {page.requestStart.items.map((item) => (
            <li
              key={item.label}
              className="h-full rounded-lg border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface p-5"
            >
              <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                {item.label}
              </h3>
              <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
          {page.requestStart.note}
        </p>
        <p className="mt-1">
          <Link
            href={page.requestStart.link.href}
            data-journey="commercial"
            data-event={AnalyticsEvent.ctaQuoteClick}
            className="inline-flex min-h-11 items-center font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {page.requestStart.link.label}
          </Link>
        </p>
      </Section>

      <Section tone="default" width="site" labelledBy="coverage-services-heading">
        <h2
          id="coverage-services-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.services.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {page.services.intro}
        </p>
        {/*
          Six-column grid on desktop: each card spans two columns, so three fit
          in the first row and the fourth starts at column two, which centers
          the last two cards. Tablet is two columns, with the lone fifth card
          centered. Items in a row stretch to equal height.
        */}
        <ul
          data-reveal-group
          className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-6"
        >
          {page.services.cards.map((card, index) => (
            <li
              key={card.href}
              className={`lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              } ${
                index === page.services.cards.length - 1 && index % 2 === 0
                  ? "sm:max-lg:col-span-2 sm:max-lg:w-[calc(50%-0.75rem)] sm:max-lg:justify-self-center"
                  : ""
              }`}
            >
              <Card
                as="div"
                hover
                padding="compact"
                className="relative flex h-full flex-col"
              >
                <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 grow text-[length:var(--text-body)] text-ink-muted">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                >
                  {card.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link
            href={page.services.allLink.href}
            className="inline-flex min-h-11 items-center font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {page.services.allLink.label}
          </Link>
        </p>
      </Section>

      {/*
        Decorative background image. The artwork sits on the right, so from lg
        the content is held to the left ~48%. Below lg a white wash keeps the
        text and cards legible over the artwork. The image scrolls with the
        section and is never pinned.
      */}
      <section
        data-tone="subtle"
        aria-labelledby="coverage-vehicles-heading"
        className="relative isolate overflow-hidden bg-surface-subtle px-5 py-12 text-ink md:px-6 md:py-20"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vehicleContextBackground.src}
          alt=""
          aria-hidden="true"
          width={vehicleContextBackground.width}
          height={vehicleContextBackground.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/75 lg:hidden" />
        <div data-reveal-group className="mx-auto max-w-[1280px]">
          <div className="lg:max-w-[48%]">
        <h2
          id="coverage-vehicles-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.vehicles.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {page.vehicles.intro}
        </p>
        <div data-reveal-group className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card as="div" padding="default" className="h-full">
            <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
              {page.vehicles.examplesHeading}
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[length:var(--text-body)] leading-relaxed text-ink marker:text-ink-muted">
              {page.vehicles.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </Card>
          <Card as="div" padding="default" className="h-full">
            <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
              {page.vehicles.categoriesHeading}
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[length:var(--text-body)] leading-relaxed text-ink marker:text-ink-muted">
              {page.vehicles.categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </Card>
        </div>
        <p className="mt-6 max-w-[720px] text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted">
          {page.vehicles.note}
        </p>
          </div>
        </div>
      </section>

      <Section tone="default" width="site" labelledBy="coverage-explore-heading">
        <h2
          id="coverage-explore-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.explore.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {page.explore.intro}
        </p>
        <ul
          data-reveal-group
          className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {page.explore.cards.map((card) => (
            <li key={card.href}>
              <Card as="div" hover padding="none" className="relative flex h-full flex-col">
                {/* Decorative: the title and description carry the meaning. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image.src}
                  alt=""
                  width={card.image.width}
                  height={card.image.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3318/1896] w-full object-cover"
                />
                <div className="flex grow flex-col p-5">
                  <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 grow text-[length:var(--text-body)] text-ink-muted">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                  >
                    {card.linkLabel}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <FaqGroup
        id="coverage-faq"
        accessibleHeading={page.faqHeading}
        layout="columns"
        content={{ h2: page.faqHeading, items: page.faq }}
      />

      <div id="request-quote" className="scroll-mt-24">
        <section
          data-tone="dark"
          aria-labelledby="coverage-quote-heading"
          className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={quoteBackground.src}
            alt=""
            aria-hidden="true"
            width={quoteBackground.width}
            height={quoteBackground.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-black/55"
          />
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-14">
              <div>
                <h2
                  id="coverage-quote-heading"
                  className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
                >
                  {page.quote.h2}
                </h2>
                <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
                  {page.quote.intro}
                </p>
                <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
                  {page.quote.support}
                </p>
                <h3 className="mt-6 text-[length:var(--text-h4)] font-bold text-[var(--color-text-on-dark)]">
                  {page.quote.nextHeading}
                </h3>
                <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
                  {page.quote.nextBody}
                </p>
                <div className="mt-8 flex flex-col items-start gap-3">
                  <p className="text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
                    {page.quote.phoneLead}
                  </p>
                  <PhoneButton
                    href={utilityBar.phoneHref}
                    label={`Call Ultimate Fleet GPS at ${utilityBar.phoneLabel}`}
                    location="coverage-quote"
                    className="border-white/60 bg-transparent text-white hover:bg-white/10"
                  />
                </div>
              </div>

              <div
                data-tone="light"
                className="rounded-lg border border-border bg-surface p-6 text-ink md:p-8"
              >
                <CommercialInquiryForm copy={page.quote.formCopy} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
