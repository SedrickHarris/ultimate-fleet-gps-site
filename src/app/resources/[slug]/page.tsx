import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqGroup } from "@/components/content/FaqGroup";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { resourceArticles } from "@/data/site/resources-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { articleSchema } from "@/lib/schema/article";

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  readonly params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = resourceArticles.find((item) => item.slug === slug);
  if (!article) return {};

  return buildPageMetadata({
    title: article.metaTitle ?? article.h1,
    description: article.metaDescription,
    pathname: `/resources/${article.slug}/`,
    type: "article",
  });
}

export default async function ResourceArticlePage({
  params,
}: {
  readonly params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = resourceArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const pathname = `/resources/${article.slug}/`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources/" },
    { label: article.h1 },
  ];

  return (
    <>
      <JsonLd
        schema={articleSchema({
          pathname,
          name: article.h1,
          description: article.metaDescription,
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />

      <Section tone="default" density="spacious" width="reading" labelledBy="article-heading">
        <h1
          id="article-heading"
          className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink"
        >
          {article.h1}
        </h1>
        <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {article.intro}
        </p>
        <p className="mt-6 border-l-4 border-border pl-4 text-[length:var(--text-small)] italic text-ink-muted">
          {article.editorialNote}
        </p>
      </Section>

      <Section tone="subtle" width="reading">
        <div className="flex flex-col gap-5">
          {article.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-[length:var(--text-body)] leading-relaxed text-pretty text-ink"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {article.faq && article.faq.length > 0 ? (
        <FaqGroup
          id={`${article.slug}-faq`}
          accessibleHeading={`${article.h1} frequently asked questions`}
          content={{ items: article.faq }}
        />
      ) : null}
    </>
  );
}
