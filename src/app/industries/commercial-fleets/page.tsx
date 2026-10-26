import type { Metadata } from "next";
import Link from "next/link";

import { TrustStrip } from "@/components/content/TrustStrip";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import {
  commercialFleetsImages,
  commercialFleetsQuoteBackground,
} from "@/data/site/commercial-fleets-images";
import {
  commercialFleetsContent,
  commercialFleetsPage as page,
} from "@/data/site/industries-content";
import { trustStripContent } from "@/data/site/trust-strip-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/industries/commercial-fleets/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries/" },
  { label: "Commercial Fleets" },
];

export const metadata: Metadata = buildPageMetadata({
  title: commercialFleetsContent.metaTitle ?? commercialFleetsContent.h1,
  description: commercialFleetsContent.metaDescription,
  pathname: PATHNAME,
});

const h2Class =
  "text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink";
const textLink =
  "inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4";

/**
 * Commercial-context page for fleets. Schema is WebPage plus BreadcrumbList
 * only. The only form is CommercialInquiryForm. Every string comes from
 * `commercialFleetsPage` and `commercialFleetsContent`, so nothing here adds a
 * claim. Image slots stay decorative until approved photography is supplied.
 */
export default function CommercialFleetsPage() {
  const [locationParagraph, scope, documentation] = commercialFleetsContent.body;

  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: commercialFleetsContent.h1,
          description: commercialFleetsContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      {/* Hero: text first in the DOM, decorative slot after it. Black overlay rule does not apply: no photo. */}
      <section
        data-tone="dark"
        aria-labelledby="commercial-fleets-heading"
        className="bg-[var(--color-surface-dark)] px-5 py-14 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-14">
          <div>
            <h1
              id="commercial-fleets-heading"
              className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance"
            >
              {commercialFleetsContent.h1}
            </h1>
            <p className="mt-5 max-w-[640px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
              {commercialFleetsContent.intro}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <CtaButton cta={page.cta} emphasis="primary" blockOnMobile />
              <p className="max-w-[560px] text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
                {page.qualifier}
              </p>
            </div>
          </div>
          <ImageSlot slot={commercialFleetsImages.hero} priority />
        </div>
      </section>

      <TrustStrip content={trustStripContent} />

      {/* Approved installation categories: title and link only. No card summaries until approved. */}
      <Section tone="default" width="site" labelledBy="cf-services-heading">
        <h2 id="cf-services-heading" className={h2Class}>
          {page.services.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
          {locationParagraph}
        </p>
        <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-6">
          {page.services.items.map((service, index) => (
            <li
              key={service.href}
              className={`lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <Link
                href={service.href}
                className="group flex h-full min-h-24 flex-col justify-between rounded-lg border border-border border-t-4 border-t-[var(--color-brand-red)] bg-surface p-5 text-ink"
              >
                <span className="text-[length:var(--text-h4)] leading-snug font-bold">
                  {service.title}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4">
                  {service.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Vehicle context: typographic only, clarification directly below the examples. */}
      <Section tone="subtle" width="site" labelledBy="cf-vehicles-heading">
        <h2 id="cf-vehicles-heading" className={h2Class}>
          {page.vehicles.h2}
        </h2>
        <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
          {page.vehicles.categories.map((category) => (
            <li
              key={category}
              className="rounded-lg border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface p-5 text-[length:var(--text-h4)] font-bold"
            >
              {category}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink">
          {page.vehicles.examples}
        </p>
        <p className="mt-3 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
          {page.vehicles.clarification}
        </p>
      </Section>

      {/* Quote information: four equal, unnumbered blocks. Not a workflow. */}
      <Section tone="default" width="site" labelledBy="cf-info-heading">
        <h2 id="cf-info-heading" className={h2Class}>
          {page.quoteInfo.h2}
        </h2>
        <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {page.quoteInfo.items.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border border-t-4 border-t-[var(--color-brand-red)] bg-surface-subtle p-5 text-[length:var(--text-h4)] font-bold"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Rollout context: light split card, optional slot, text link to the real page. */}
      <Section tone="subtle" width="site" labelledBy="cf-rollout-heading">
        <div className="grid gap-8 md:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] md:items-center md:gap-12">
          <div className="border-l-4 border-l-[var(--color-brand-red)] pl-5">
            <h2 id="cf-rollout-heading" className={h2Class}>
              {page.rollout.h2}
            </h2>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink">
              {scope}
            </p>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
              {page.rollout.nationwide}{" "}
              <Link href="/coverage/" className={textLink}>
                {page.rollout.coverageLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
            <p className="mt-4">
              <Link href="/services/fleet-rollouts/" className={textLink}>
                {page.rollout.linkLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
          <ImageSlot slot={commercialFleetsImages.rollout} omitFallback />
        </div>
      </Section>

      {/* Documentation: exact approved statement, no document-like visual. */}
      <Section tone="default" width="site" labelledBy="cf-docs-heading">
        <div className="max-w-[760px] border-l-4 border-l-[var(--color-brand-red)] pl-5">
          <h2 id="cf-docs-heading" className={h2Class}>
            {page.documentation.h2}
          </h2>
          <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
            {documentation}
          </p>
        </div>
      </Section>

      {/* Commercial conversion: the primary form. Black overlay only if a photo is supplied. */}
      <div id="request-quote" className="scroll-mt-24">
        <section
          data-tone="dark"
          aria-labelledby="cf-quote-heading"
          className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
          {commercialFleetsQuoteBackground.src ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={commercialFleetsQuoteBackground.src}
                alt=""
                aria-hidden="true"
                width={commercialFleetsQuoteBackground.width}
                height={commercialFleetsQuoteBackground.height}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
            </>
          ) : null}
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-14">
              <div>
                <h2
                  id="cf-quote-heading"
                  className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance"
                >
                  {page.cta.label}
                </h2>
                <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
                  {page.qualifier}
                </p>
              </div>
              <div
                data-tone="light"
                className="rounded-lg border border-border bg-surface p-6 text-ink md:p-8"
              >
                <CommercialInquiryForm />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Installer Network handoff: separate journey, visually subordinate, link only. */}
      <Section tone="default" width="site" density="compact" labelledBy="cf-network-heading">
        <h2
          id="cf-network-heading"
          className="text-[length:var(--text-h3)] leading-snug font-bold text-balance text-ink"
        >
          {page.installerNetwork.prompt}
        </h2>
        <p className="mt-3">
          <Link
            href={page.installerNetwork.href}
            data-journey="recruitment"
            data-event="cta_installer_network_click"
            className={textLink}
          >
            {page.installerNetwork.label}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Section>
    </>
  );
}
