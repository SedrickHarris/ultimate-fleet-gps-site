import type { Metadata } from "next";
import Link from "next/link";

import { FaqGroup } from "@/components/content/FaqGroup";
import { ServicesHero } from "@/components/content/ServicesHero";
import { InstallerNetworkForm } from "@/components/forms/InstallerNetworkForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { InstallCategoryCard } from "@/components/content/WhatWeInstallGrid";
import { InstallerQuestions } from "@/components/content/InstallerQuestions";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { CtaButton } from "@/components/ui/CtaButton";
import { Card } from "@/components/ui/Card";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { INSTALLER_NETWORK_PATH } from "@/data/jobs";
import { utilityBar } from "@/data/navigation/site-navigation";
import { business } from "@/data/site/business";
import { installerNetworkContent } from "@/data/site/careers-content";
import { careersLandingContent } from "@/data/site/careers-landing-content";
import { careersHubPageContent as hub } from "@/data/site/careers-hub-content";
import {
  careersHubImages,
  networkFitBackground,
  networkInformationBackground,
  networkHeroBackground as heroBackgroundImage,
} from "@/data/site/careers-hub-images";
import { homepageContent } from "@/data/site/homepage-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { careersPageSchema } from "@/lib/schema/careers-page";

const PATHNAME = INSTALLER_NETWORK_PATH;
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers/" },
  { label: "Mobile Installation Technician" },
];

export const metadata: Metadata = buildPageMetadata({
  title: hub.metaTitle,
  description: installerNetworkContent.metaDescription,
  pathname: PATHNAME,
});

const CONTEXT_ICON_PATHS: Record<
  NonNullable<(typeof hub.contextStrip.cards)[number]["icon"]>,
  string[]
> = {
  technician: ["M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M4 20a8 8 0 0 1 16 0"],
  vehicle: [
    "M3 7h11v9H3z",
    "M14 10h4l3 3v3h-7",
    "M7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
    "M17 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  ],
  location: [
    "M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11z",
    "M12 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  ],
};

const REQUIREMENT_ICON_PATHS = {
  training: ["M2 9l10-5 10 5-10 5z", "M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5", "M22 9v6"],
  checklist: [
    "M9 6h11",
    "M9 12h11",
    "M9 18h11",
    "M3.5 6l1.5 1.5L7.5 5",
    "M3.5 12l1.5 1.5L7.5 11",
    "M3.5 18l1.5 1.5L7.5 17",
  ],
  tools: [
    "M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-4-4 8-8z",
    "M4 20l4-4",
    "M6 4l3 3-2 2-3-3z",
  ],
  clipboard: [
    "M9 4h6v3H9z",
    "M8 5.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1h-2",
    "M9 14l2 2 4-4",
  ],
} as const;

/** Decorative inline icon. The heading beside it stays the accessible label. */
function SvgIcon({
  paths,
  size,
  className,
}: {
  readonly paths: readonly string[];
  readonly size: number;
  readonly className: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

function ContextIcon({ name }: { readonly name: keyof typeof CONTEXT_ICON_PATHS }) {
  return (
    <SvgIcon
      paths={CONTEXT_ICON_PATHS[name]}
      size={32}
      className="mb-3 block shrink-0 text-[var(--color-accent-blue-strong)]"
    />
  );
}

function HeadingWithIcon({
  icon,
  children,
}: {
  readonly icon: keyof typeof REQUIREMENT_ICON_PATHS;
  readonly children: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <SvgIcon
        paths={REQUIREMENT_ICON_PATHS[icon]}
        size={26}
        className="shrink-0 text-[var(--color-accent-blue-strong)]"
      />
      <h3 className="text-[length:var(--text-h4)] font-bold text-ink">{children}</h3>
    </div>
  );
}

const INFORMATION_ICON_PATHS: Record<
  (typeof hub.information.requested.items)[number]["icon"],
  readonly string[]
> = {
  contact: ["M3 6h18v12H3z", "M3 7l9 6 9-6"],
  location: CONTEXT_ICON_PATHS.location,
  experience: REQUIREMENT_ICON_PATHS.tools,
  travel: ["M5 6h3a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4h3", "M3 6h2", "M19 18h2"],
  platform: ["M4 8l8-4 8 4-8 4z", "M4 12l8 4 8-4", "M4 16l8 4 8-4"],
  tools: ["M4 9h16v10H4z", "M9 9V6h6v3", "M4 14h16"],
};

/** Icon list on a dark surface. The item text stays the accessible label. */
function InformationList({
  items,
}: {
  readonly items: typeof hub.information.requested.items;
}) {
  return (
    <ul className="mt-4 flex list-none flex-col gap-3 p-0 text-[length:var(--text-body)] text-[var(--color-text-on-dark)]">
      {items.map((item) => (
        <li key={item.text} className="flex gap-3">
          <SvgIcon
            paths={INFORMATION_ICON_PATHS[item.icon]}
            size={22}
            className="mt-[0.1rem] shrink-0 text-[var(--color-text-on-dark)]"
          />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

const bulletList =
  "mt-4 flex list-disc flex-col gap-2 pl-5 text-[length:var(--text-body)] text-ink-muted marker:text-ink-muted";

/**
 * Technician-interest landing page for the Installer Network
 * (`/careers/mobile-installation-technician/`).
 *
 * This is an interest page, not a job listing and not an application. The
 * Installer Network is a registration for future opportunities, separate from
 * the application for the current opening. The route keeps its original path
 * because the homepage and other pages already link here.
 *
 * Order: hero, context strip, who it is for, what the page is and is not,
 * service context, requirements and field-work context, the form, FAQ, then
 * low-emphasis links (current opening, commercial quote, related services).
 * The commercial form never renders here.
 *
 * Schema is WebPage + BreadcrumbList only. This is not an individual opening
 * page, so it never carries JobPosting (13-schema-markup-plan.md section 14).
 * No FAQPage. The hero uses the supplied background photo under a 55% black overlay.
 * The corporate office address appears once, near the
 * form, from `business.address`.
 */
export default function InstallerNetworkPage() {
  return (
    <>
      <JsonLd
        schema={careersPageSchema({
          pathname: PATHNAME,
          h1: installerNetworkContent.h1,
          description: installerNetworkContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <ServicesHero
        id="installer-network"
        eyebrow={hub.hero.eyebrow}
        h1={hub.hero.h1}
        intro={hub.hero.intro}
        primaryCta={hub.hero.primaryCta}
        secondaryLink={{
          label: "Learn how the Installer Network works",
          href: "#network-answer-heading",
        }}
        qualifier={hub.hero.qualifier}
        phone={{
          href: utilityBar.phoneHref,
          label: `${hub.hero.callLabel} ${utilityBar.phoneLabel}`,
        }}
        phoneLocation="careers-hero"
        phoneJourney="recruitment"
        phoneEvent={null}
        scopeItems={hub.hero.scopeItems}
        backgroundImage={heroBackgroundImage}
        backgroundOverlayStrength={55}
        backgroundFocus="top"
      />

      {/* Context strip */}
      <Section tone="subtle" width="site" labelledBy="network-context-heading">
        <h2
          id="network-context-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.contextStrip.h2}
        </h2>
        <div className="mt-8">
          <CardGrid columns={3}>
            {hub.contextStrip.cards.map((card) => (
              <Card key={card.title} padding="compact">
                {card.icon ? <ContextIcon name={card.icon} /> : null}
                <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
                  {card.description}
                </p>
              </Card>
            ))}
          </CardGrid>
        </div>
      </Section>

      <Section
        tone="dark"
        width="site"
        labelledBy="network-fit-heading"
        backgroundImage={networkFitBackground}
        backgroundOverlay
        backgroundPosition="center"
      >
        <h2
          id="network-fit-heading"
          className="max-w-[720px] text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
        >
          {hub.fit.h2}
        </h2>
        {hub.fit.body.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-5 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90"
          >
            {paragraph}
          </p>
        ))}

        <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-stretch">
          {hub.fit.lists?.map((list) => (
            <div
              key={list.heading}
              className="rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)] p-6"
            >
              <h3 className="text-[length:var(--text-h4)] font-bold text-[var(--color-text-on-dark)]">
                {list.heading}
              </h3>
              <ul className="mt-4 flex list-none flex-col gap-2 p-0 text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
                {list.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.15rem] shrink-0 font-bold">
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col rounded-lg border border-[var(--color-border-dark)] border-l-4 border-l-[var(--color-text-on-dark)] bg-[var(--color-surface-dark-raised)] p-6">
            <h3 className="text-[length:var(--text-h4)] font-bold text-[var(--color-text-on-dark)]">
              {hub.noExperience.title}
            </h3>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
              {hub.noExperience.body}
            </p>
            <Link
              href={hub.noExperience.link.href}
              data-journey="recruitment"
              className="mt-auto flex min-h-12 items-center justify-between gap-3 self-start rounded-lg border-2 border-[var(--color-text-on-dark)]/70 px-5 py-3 text-[length:var(--text-body)] font-semibold text-[var(--color-text-on-dark)] hover:bg-white/10"
            >
              {hub.noExperience.link.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* What the network is, and is not */}
      <Section tone="subtle" width="site" labelledBy="network-answer-heading">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2
              id="network-answer-heading"
              className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
            >
              {hub.answer.h2}
            </h2>
            {hub.answer.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-5 grid gap-4 xl:grid-cols-2">
              <div className="rounded-md border border-border bg-surface p-5">
                <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                  {hub.boundary.isHeading}
                </h3>
                <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[length:var(--text-body)] text-ink-muted">
                  {hub.boundary.isItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-border bg-surface p-5">
                <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                  {hub.boundary.isNotHeading}
                </h3>
                <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[length:var(--text-body)] text-ink-muted">
                  {hub.boundary.isNotItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ImageSlot slot={careersHubImages.networkAbout} />
        </div>
      </Section>

      {/* Approved service context */}
      <Section tone="default" width="site" labelledBy="network-equipment-heading">
        <h2
          id="network-equipment-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.equipment.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {hub.equipment.intro}
        </p>
        <div className="mt-8">
          <CardGrid columns={3}>
            {business.serviceTypes.map((service) => (
              <InstallCategoryCard
                key={service}
                service={service}
                content={homepageContent.whatWeInstall}
                id="network-services"
              />
            ))}
          </CardGrid>
        </div>
      </Section>

      <Section tone="subtle" width="site" labelledBy="network-field-work-heading">
        <h2
          id="network-field-work-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.fieldWork.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {hub.fieldWork.intro}
        </p>
        <div className="mt-8">
          <CardGrid columns={4}>
            {hub.fieldWork.cards.map((card) => (
              <Card key={card.title} tone="light" padding="none" className="flex h-full flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                    {card.description}
                  </p>
                </div>
              </Card>
            ))}
          </CardGrid>
        </div>
        <p className="mt-6 max-w-[720px] border-l-4 border-[var(--color-accent-blue-strong)] py-1 pl-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink">
          {hub.fieldWork.note}
        </p>
      </Section>

      {/* Stakeholder-approved requirements and form guidance (decision 0004) */}
      <Section tone="default" width="site" labelledBy="network-requirements-heading">
        <h2
          id="network-requirements-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.requirements.h2}
        </h2>

        <div className="mt-6 rounded-lg border border-border border-l-4 border-l-[var(--color-accent-blue-strong)] bg-surface-subtle p-6">
          <HeadingWithIcon icon="training">{hub.requirements.callout.title}</HeadingWithIcon>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
            {hub.requirements.callout.body}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card tone="light" padding="default">
            <HeadingWithIcon icon="checklist">{hub.requirements.core.heading}</HeadingWithIcon>
            <ul className={bulletList}>
              {hub.requirements.core.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card tone="light" padding="default">
            <HeadingWithIcon icon="tools">{hub.requirements.preferred.heading}</HeadingWithIcon>
            <p className="mt-2 text-[length:var(--text-label)] font-semibold tracking-wide text-ink uppercase">
              {hub.requirements.preferred.label}
            </p>
            <ul className={bulletList}>
              {hub.requirements.preferred.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>

        <Card tone="light" padding="default" className="mt-6">
          <HeadingWithIcon icon="clipboard">{hub.requirements.asks.heading}</HeadingWithIcon>
          <ul className={`${bulletList} md:grid md:grid-cols-2 md:gap-x-8`}>
            {hub.requirements.asks.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <div className="mt-6 flex max-w-[820px] flex-col gap-3">
          {hub.requirements.notes.map((note) => (
            <p
              key={note}
              className="text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted"
            >
              {note}
            </p>
          ))}
          <p>
            <Link
              href="/careers/installer-requirements/"
              className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
            >
              See all installer requirements
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </Section>
      <Section
        tone="dark"
        width="site"
        labelledBy="network-information-heading"
        backgroundImage={networkInformationBackground}
        backgroundOverlay
        backgroundPosition="center"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <h2
              id="network-information-heading"
              className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
            >
              {hub.information.h2}
            </h2>
            {hub.information.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 flex flex-col gap-6">
              <div className="rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)] p-6">
                <h3 className="text-[length:var(--text-h4)] font-bold text-[var(--color-text-on-dark)]">
                  {hub.information.requested.heading}
                </h3>
                <InformationList items={hub.information.requested.items} />
              </div>
              <div className="rounded-lg border border-dashed border-[var(--color-text-on-dark)]/60 bg-black/30 p-6">
                <h3 className="text-[length:var(--text-h4)] font-bold text-[var(--color-text-on-dark)]">
                  {hub.information.optional.heading}
                </h3>
                <p className="mt-1 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-text-on-dark)]/80 uppercase">
                  {hub.information.optional.label}
                </p>
                <InformationList items={hub.information.optional.items} />
              </div>
            </div>

            <p className="mt-6 text-[length:var(--text-small)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/85">
              {hub.information.note}
            </p>
          </div>

          {/* Interest form. Focusable target for the hero CTA anchor. */}
          <div
            id="installer-network-form"
            tabIndex={-1}
            data-tone="light"
            className="scroll-mt-24 rounded-lg bg-surface p-6 text-ink md:p-8"
          >
            <InstallerNetworkForm expectation={hub.join.expectation} twoColumnAt="lg" />
          </div>
        </div>
      </Section>

      <FaqGroup
        id="network-faq"
        layout="columns"
        accessibleHeading={hub.faqHeading}
        content={{ h2: hub.faqHeading, items: installerNetworkContent.faq ?? [] }}
      />

      {/* 1. Business installation inquiry: a separate journey with its own form */}
      <Section
        tone="dark"
        width="site"
        labelledBy="network-commercial-heading"
        backgroundImage={careersHubImages.commercialHandoff}
        backgroundOverlay
        backgroundPosition="center"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <h2
              id="network-commercial-heading"
              className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
            >
              {hub.commercial.h2}
            </h2>
            {hub.commercial.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <CtaButton cta={hub.commercial.cta} emphasis="primary" blockOnMobile />
            </div>
          </div>
          <div
            id="business-inquiry-form"
            tabIndex={-1}
            data-tone="light"
            className="scroll-mt-24 rounded-lg bg-surface p-6 text-ink md:p-8"
          >
            <CommercialInquiryForm />
          </div>
        </div>
      </Section>

      {/* 2. Installer opportunities: the shared questions block */}
      <InstallerQuestions
        content={careersLandingContent.contact}
        image={careersHubImages.contact}
        headingId="network-installer-questions-heading"
        phoneLocation="network-installer-questions"
      />

      {/* 3. Related services: the same six approved cards as the homepage */}
      <Section tone="default" width="site" labelledBy="network-related-heading">
        <h2
          id="network-related-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.relatedLinks.h2}
        </h2>
        <div className="mt-8">
          <CardGrid columns={3}>
            {business.serviceTypes.map((service) => (
              <InstallCategoryCard
                key={service}
                service={service}
                content={homepageContent.whatWeInstall}
                id="network-related"
              />
            ))}
          </CardGrid>
        </div>
      </Section>
    </>
  );
}
