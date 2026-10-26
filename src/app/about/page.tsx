import type { Metadata } from "next";
import Link from "next/link";

import { InstallCategoryCard } from "@/components/content/WhatWeInstallGrid";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { aboutContent as page } from "@/data/site/about-content";
import { business } from "@/data/site/business";
import { homepageContent } from "@/data/site/homepage-content";
import { processHeroBackground } from "@/data/site/process-images";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/about/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "About" }];

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  pathname: PATHNAME,
});

const h2Class =
  "text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink";
const bodyClass =
  "text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink";
const textLink =
  "inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4";

/**
 * Lean, factual About page (docs/briefs/about-page-brief.md, decision 0016).
 * Commercial-first. Schema is AboutPage plus BreadcrumbList only, matching
 * visible content: no Person, FAQPage, LocalBusiness, Review, or founding-date
 * markup, because none has an approved source. No leadership, history, values,
 * or proof sections until approved facts exist. The Phoenix address is not an
 * approved surface for this page. The hero reuses the approved decorative
 * photo from /our-process/ (empty alt, black overlay only, scrolls with the
 * section). No new images and no client JavaScript.
 */
export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          type: "AboutPage",
          pathname: PATHNAME,
          name: page.h1,
          description: page.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      {/* Hero: single text column over a decorative background photo. */}
      <section
        data-tone="dark"
        aria-labelledby="about-hero-heading"
        className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-14 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={processHeroBackground.src}
          alt=""
          aria-hidden="true"
          width={processHeroBackground.width}
          height={processHeroBackground.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] md:object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[720px]">
            <p className="mb-3 flex items-center gap-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-text-on-dark)]/90 uppercase">
              <span
                aria-hidden="true"
                className="inline-block h-0.5 w-8 shrink-0 bg-[var(--color-brand-red)]"
              />
              {page.hero.eyebrow}
            </p>
            <h1
              id="about-hero-heading"
              className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance"
            >
              {page.h1}
            </h1>
            <p className="mt-5 max-w-[640px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
              {page.hero.lead}
            </p>
            <p className="mt-6 max-w-[640px] border-l-4 border-[var(--color-brand-red)] pl-4 text-[length:var(--text-body-lg)] leading-relaxed font-semibold text-pretty">
              {page.hero.support}
            </p>
            <div className="mt-8">
              <CtaButton cta={page.hero.cta} emphasis="primary" blockOnMobile />
            </div>
          </div>
        </div>
      </section>

      {/* Who we are: direct answer, text only. */}
      <Section tone="default" width="site" labelledBy="about-who-heading">
        <div className="max-w-[720px]">
          <h2 id="about-who-heading" className={h2Class}>
            {page.whoWeAre.h2}
          </h2>
          {page.whoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph} className={`mt-5 ${bodyClass}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* What we install: the shared approved equipment cards. */}
      <Section tone="subtle" width="site" labelledBy="about-install-heading">
        <h2 id="about-install-heading" className={h2Class}>
          {page.whatWeInstall.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {page.whatWeInstall.intro}
        </p>
        <div className="mt-8">
          <CardGrid columns={3}>
            {business.serviceTypes.map((service) => (
              <InstallCategoryCard
                key={service}
                service={service}
                content={homepageContent.whatWeInstall}
                id="about-install"
              />
            ))}
          </CardGrid>
        </div>
        <p className="mt-8">
          <Link href={page.whatWeInstall.link.href} className={textLink}>
            {page.whatWeInstall.link.label}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Section>

      {/* How we work: approved facts plus the photo documentation callout. */}
      <Section tone="default" width="site" labelledBy="about-work-heading">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 id="about-work-heading" className={h2Class}>
              {page.howWeWork.h2}
            </h2>
            {page.howWeWork.paragraphs.map((paragraph) => (
              <p key={paragraph} className={`mt-5 ${bodyClass}`}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="border-l-4 border-[var(--color-brand-red)] pl-4 text-[length:var(--text-body-lg)] leading-relaxed font-semibold text-pretty text-ink">
              {page.howWeWork.callout}
            </p>
            <ul className="m-0 flex list-none flex-col p-0">
              {page.howWeWork.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={textLink}>
                    {link.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Next steps: two separate journeys, commercial first. */}
      <Section tone="dark" width="site" labelledBy="about-paths-heading">
        <h2
          id="about-paths-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
        >
          {page.pathways.h2}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[page.pathways.fleet, page.pathways.installer].map((pathway, index) => (
            <Card key={pathway.label} tone="dark" padding="default" className="flex flex-col">
              <h3 className="text-[length:var(--text-h4)] leading-tight font-bold text-[var(--color-text-on-dark)]">
                {pathway.label}
              </h3>
              <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
                {pathway.body}
              </p>
              <div className="mt-6">
                <CtaButton
                  cta={pathway.cta}
                  emphasis={index === 0 ? "primary" : "secondary"}
                  onDark={index === 0}
                  blockOnMobile
                />
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
