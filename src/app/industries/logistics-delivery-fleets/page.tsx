import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { TrustStrip } from "@/components/content/TrustStrip";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { logisticsDeliveryFleetsContent } from "@/data/site/industries-content";
import { trustStripContent } from "@/data/site/trust-strip-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/industries/logistics-delivery-fleets/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries/" },
  { label: "Logistics & Delivery Fleets" },
];

export const metadata: Metadata = buildPageMetadata({
  title: logisticsDeliveryFleetsContent.metaTitle ?? logisticsDeliveryFleetsContent.h1,
  description: logisticsDeliveryFleetsContent.metaDescription,
  pathname: PATHNAME,
});

export default function LogisticsDeliveryFleetsPage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: logisticsDeliveryFleetsContent.h1,
          description: logisticsDeliveryFleetsContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="logistics-delivery-fleets" content={logisticsDeliveryFleetsContent} afterHero={<TrustStrip content={trustStripContent} />}>
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
