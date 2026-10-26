import Link from "next/link";

import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { business } from "@/data/site/business";
import {
  installCardLinkLabels,
  installCardLinks,
} from "@/data/site/service-pages-content";
import { serviceImages } from "@/data/site/service-images";
import type { WhatWeInstallContent } from "@/types/content";

interface WhatWeInstallGridProps {
  readonly content: WhatWeInstallContent;
  readonly id: string;
}

/**
 * Equipment-category grid.
 *
 * Sourced from `business.serviceTypes` directly, never a hardcoded list. No
 * service card may exist here unless it is explicitly present in the
 * approved business-facts source. See plan section 7 and
 * docs/_claims-inventory.md.
 *
 * Each card carries a description, an optional "Use cases" list, and an
 * optional qualification note, all server-rendered HTML text keyed by
 * service name. Cards are equal height. The images are decorative; the h3
 * names the category. A card with a specific service page gets one visible
 * "Learn more" link at the bottom (`installCardLinks`); cards without a page
 * of their own stay unlinked rather than sharing another card's destination.
 */
function slug(service: string): string {
  return service.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/**
 * One equipment-category card. Shared by this grid and by the GPS service
 * page's related-services section, so both render the same approved card.
 * `id` prefixes the use-case label id and must be unique per page.
 */
export function InstallCategoryCard({
  service,
  content,
  id,
}: {
  readonly service: (typeof business.serviceTypes)[number];
  readonly content: WhatWeInstallContent;
  readonly id: string;
}) {
  return (
    <Card tone="light" padding="none" hover className="flex h-full flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={serviceImages[service].src}
        alt=""
        width={serviceImages[service].width}
        height={serviceImages[service].height}
        loading="lazy"
        decoding="async"
        className="card-image-zoom aspect-[4/3] h-auto w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
          {service}
        </h3>
        <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
          {content.cards[service].description}
        </p>

        {content.cards[service].note ? (
          <p className="mt-3 border-l-2 border-border pl-3 italic text-[length:var(--text-small)] leading-relaxed text-ink-muted">
            {content.cards[service].note}
          </p>
        ) : null}

        {content.cards[service].useCases ? (
          <div className="mt-4">
            <p
              id={`${id}-${slug(service)}-label`}
              className="text-[length:var(--text-label)] font-semibold tracking-wide text-ink uppercase"
            >
              Use cases
            </p>
            <ul
              aria-labelledby={`${id}-${slug(service)}-label`}
              className="mt-2 flex list-disc flex-col gap-1 pl-5 text-[length:var(--text-small)] text-ink-muted marker:text-ink-muted"
            >
              {content.cards[service].useCases.map((useCase) => (
                <li key={useCase}>{useCase}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {installCardLinks[service] ? (
          <p className="mt-auto pt-5">
            <Link
              href={installCardLinks[service]}
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
            >
              Learn more about {installCardLinkLabels[service] ?? service}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        ) : null}
      </div>
    </Card>
  );
}

export function WhatWeInstallGrid({ content, id }: WhatWeInstallGridProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="subtle" width="site" labelledBy={headingId}>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {content.h2}
      </h2>

      {content.intro ? (
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
          {content.intro}
        </p>
      ) : null}

      <div className="mt-10">
        <CardGrid columns={3}>
          {business.serviceTypes.map((service) => (
            <InstallCategoryCard
              key={service}
              service={service}
              content={content}
              id={id}
            />
          ))}
        </CardGrid>
      </div>
    </Section>
  );
}
