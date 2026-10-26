import type { Metadata } from "next";

import { InstallerQuestions } from "@/components/content/InstallerQuestions";
import { RichFaqSection } from "@/components/content/RichFaqSection";
import { ServicesHero } from "@/components/content/ServicesHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { careersLandingContent } from "@/data/site/careers-landing-content";
import { careersRequirementsContent as content } from "@/data/site/careers-requirements-content";
import {
  careersRequirementsHeroVideo,
  careersRequirementsImages as images,
} from "@/data/site/careers-requirements-images";
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
 * Schema is WebPage + BreadcrumbList + Organization reference + FAQPage (built
 * from the same items the accordion renders). No JobPosting, Occupation, or
 * Offer.
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
          faq: faq.items,
        })}
      />
      <Breadcrumbs items={content.breadcrumbs} />

      <ServicesHero
        id="installer-requirements"
        h1={content.h1}
        intro={content.intro}
        primaryCta={content.openingCta}
        backgroundVideo={careersRequirementsHeroVideo}
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

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-stretch">
          <ImageSlot slot={images.preferred} className="md:h-full" />
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
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-stretch">
          <Card tone="light" padding="default">
            <h3 className={h3Class}>{requirements.asks.heading}</h3>
            <ul className={bulletList}>
              {requirements.asks.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <ImageSlot slot={images.asks} className="md:h-full" />
        </div>

        <p className="mt-6 max-w-[820px] text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted">
          {requirements.note}
        </p>
      </Section>

      <Section tone="subtle" width="site" labelledBy="pathways-heading">
        <h2 id="pathways-heading" className={h2Class}>
          {pathways.h2}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-stretch">
          <article
            data-tone="dark"
            className="flex h-full flex-col rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-surface-dark)] p-6 text-[var(--color-text-on-dark)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/10 text-[var(--color-text-on-dark)]">
                <Icon name="briefcase" size={24} />
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[length:var(--text-label)] font-semibold tracking-wide text-ink uppercase">
                {pathways.opening.badge}
              </span>
            </div>
            <p className="mt-5 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-text-on-dark)]/80 uppercase">
              {pathways.opening.label}
            </p>
            <h3
              className={`${h3Class} mt-1 !text-[var(--color-text-on-dark)]`}
            >
              {pathways.opening.question}
            </h3>
            <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-on-dark)]/90">
              {pathways.opening.body}
            </p>
            <div className="mt-auto pt-6">
              <CtaButton
                cta={pathways.opening.cta}
                ariaLabel={pathways.opening.ariaLabel}
                emphasis="primary"
                onDark
                blockOnMobile
              />
            </div>
          </article>
          <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink/5 text-ink">
                <Icon name="users" size={24} />
              </span>
              <span className="rounded-full border border-ink px-3 py-1 text-[length:var(--text-label)] font-semibold tracking-wide text-ink uppercase">
                {pathways.network.badge}
              </span>
            </div>
            <p className="mt-5 text-[length:var(--text-label)] font-semibold tracking-wide text-ink-muted uppercase">
              {pathways.network.label}
            </p>
            <h3 className={`${h3Class} mt-1`}>{pathways.network.question}</h3>
            <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
              {pathways.network.body}
            </p>
            <div className="mt-auto pt-6">
              <CtaButton
                cta={pathways.network.cta}
                ariaLabel={pathways.network.ariaLabel}
                emphasis="secondary"
                blockOnMobile
              />
            </div>
          </article>
        </div>
      </Section>

      <RichFaqSection id="requirements-faq" h2={faq.h2} items={faq.items} />

      <InstallerQuestions
        content={careersLandingContent.contact}
        image={careersHubImages.contact}
        headingId="requirements-contact-heading"
        phoneLocation="installer-requirements-contact"
        trackPaths
      />
    </>
  );
}
