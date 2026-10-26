import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { TrustStrip } from "@/components/content/TrustStrip";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { fieldServiceFleetsContent } from "@/data/site/industries-content";
import { trustStripContent } from "@/data/site/trust-strip-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/industries/field-service-fleets/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries/" },
  { label: "Field Service Fleets" },
];

export const metadata: Metadata = buildPageMetadata({
  title: fieldServiceFleetsContent.metaTitle ?? fieldServiceFleetsContent.h1,
  description: fieldServiceFleetsContent.metaDescription,
  pathname: PATHNAME,
});

export default function FieldServiceFleetsPage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: fieldServiceFleetsContent.h1,
          description: fieldServiceFleetsContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="field-service-fleets" content={fieldServiceFleetsContent} afterHero={<TrustStrip content={trustStripContent} />}>
        <h2 className="text-[length:var(--text-h3)] font-bold text-ink">
          Request an Installation Quote
        </h2>
        <div className="mt-6">
          <CommercialInquiryForm />
        </div>
      </PageBody>
    </>
  );
}
