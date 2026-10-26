import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/schema/JsonLd";
import { resourceArticles, resourcesHubContent } from "@/data/site/resources-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/resources/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Resources" }];

export const metadata: Metadata = buildPageMetadata({
  title: resourcesHubContent.metaTitle ?? resourcesHubContent.h1,
  description: resourcesHubContent.metaDescription,
  pathname: PATHNAME,
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: resourcesHubContent.h1,
          description: resourcesHubContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <Section tone="default" density="spacious" width="reading" labelledBy="resources-heading">
        <h1
          id="resources-heading"
          className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink"
        >
          {resourcesHubContent.h1}
        </h1>
        <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {resourcesHubContent.intro}
        </p>
      </Section>

      <Section tone="subtle" width="site">
        <CardGrid columns={2}>
          {resourceArticles.map((article) => (
            <Card key={article.slug} tone="light" hover>
              <a
                href={`/resources/${article.slug}/`}
                className="block min-h-11 text-[length:var(--text-h4)] font-semibold text-ink no-underline hover:underline"
              >
                {article.h1}
              </a>
              <p className="mt-3 text-[length:var(--text-small)] leading-relaxed text-ink-muted">
                {article.intro}
              </p>
            </Card>
          ))}
        </CardGrid>
      </Section>
    </>
  );
}
