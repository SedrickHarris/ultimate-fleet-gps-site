import type { Metadata } from "next";
import Link from "next/link";

import { FaqGroup } from "@/components/content/FaqGroup";
import { ServicesHero } from "@/components/content/ServicesHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { careersRequirementsContent as content } from "@/data/site/careers-requirements-content";
import { careersRequirementsImages as images } from "@/data/site/careers-requirements-images";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { careersPageSchema } from "@/lib/schema/careers-page";

export const metadata: Metadata = buildPageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  pathname: content.pathname,
});

const h2Class =
  "text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink";
const h3Class = "text-[length:var(--text-h4)] font-bold text-ink";
const bulletList =
  "mt-4 flex list-disc flex-col gap-2 pl-5 text-[length:var(--text-body)] text-ink-muted marker:text-ink-muted";

/**
 * Shared baseline requirements page for mobile installers
 * (`/careers/installer-requirements/`).
 *
 * It is neither a job listing nor an application. It points to the current
 * opening and to the Installer Network registration, which stay separate
 * journeys, and carries no form. Requirement wording is reused from the
 * Installer Network page content, so nothing new is asserted here. The age
 * recommendation is omitted pending counsel review (decision 0004).
 *
 * Schema is WebPage + BreadcrumbList + Organization reference only: no
 * JobPosting, FAQPage, Occupation, or Offer. Images are placeholders, so
 * production shows the decorative fallback until approved photos exist.
 */
export default function InstallerRequirementsPage() {
  const { requirements, pathways, faq } = content;

  return (
    <>
      <JsonLd
        schema={careersPageSchema({
          pathname: content.pathname,
          h1: content.h1,
          description: content.metaDescription,
          breadcrumbs: content.breadcrumbs,
        })}
      />
      <Breadcrumbs items={content.breadcrumbs} />

      <ServicesHero
        id="installer-requirements"
        h1={content.h1}
        intro={content.intro}
        primaryCta={content.openingCta}
        image={images.hero}
      />

      <Section tone="default" width="site" labelledBy="requirements-heading">
        <h2 id="requirements-heading" className={h2Class}>
          {requirements.h2}
        </h2>

        <div className="mt-6 rounded-lg border border-border border-l-4 border-l-[var(--color-accent-blue-strong)] bg-surface-subtle p-6">
          <h3 className={h3Class}>{requirements.callout.title}</h3>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
            {requirements.callout.body}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-stretch">
          <Card tone="light" padding="default">
            <h3 className={h3Class}>{requirements.core.heading}</h3>
            <ul className={bulletList}>
              {requirements.core.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <ImageSlot slot={images.core} className="md:h-full" />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-6">
            <Card tone="light" padding="default">
              <h3 className={h3Class}>{requirements.preferred.heading}</h3>
              <p className="mt-2 text-[length:var(--text-label)] font-semibold tracking-wide text-ink uppercase">
                {requirements.preferred.label}
              </p>
              <ul className={bulletList}>
                {requirements.preferred.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card tone="light" padding="default">
              <h3 className={h3Class}>{requirements.asks.heading}</h3>
              <ul className={bulletList}>
                {requirements.asks.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
          <ImageSlot slot={images.asks} />
        </div>

        <p className="mt-6 max-w-[820px] text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted">
          {requirements.note}
        </p>
      </Section>

      <Section tone="subtle" width="site" labelledBy="pathways-heading">
        <h2 id="pathways-heading" className={h2Class}>
          {pathways.h2}
        </h2>
        <div className="mt-8">
          <CardGrid columns={2}>
            <Card tone="light" padding="default" className="flex h-full flex-col">
              <h3 className={h3Class}>{pathways.opening.title}</h3>
              <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {pathways.opening.body}
              </p>
              <div className="mt-6">
                <CtaButton cta={pathways.opening.cta} emphasis="primary" blockOnMobile />
              </div>
            </Card>
            <Card tone="light" padding="default" className="flex h-full flex-col">
              <h3 className={h3Class}>{pathways.network.title}</h3>
              <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {pathways.network.body}
              </p>
              <div className="mt-6">
                <CtaButton cta={pathways.network.cta} emphasis="secondary" blockOnMobile />
              </div>
            </Card>
          </CardGrid>
        </div>
      </Section>

      <FaqGroup
        id="requirements-faq"
        layout="columns"
        tone="default"
        accessibleHeading={faq.h2}
        content={{ h2: faq.h2, items: faq.items }}
      />

      <Section tone="default" width="site" density="compact">
        <p>
          <Link
            href={content.backLink.href}
            className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            <span aria-hidden="true">&larr;</span>
            {content.backLink.label}
          </Link>
        </p>
      </Section>
    </>
  );
}
