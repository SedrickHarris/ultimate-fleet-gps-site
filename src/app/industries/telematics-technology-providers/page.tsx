import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { TrustStrip } from "@/components/content/TrustStrip";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { telematicsTechnologyProvidersContent } from "@/data/site/industries-content";
import { trustStripContent } from "@/data/site/trust-strip-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/industries/telematics-technology-providers/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries/" },
  { label: "Telematics & Technology Providers" },
];

export const metadata: Metadata = buildPageMetadata({
  title: telematicsTechnologyProvidersContent.metaTitle ?? telematicsTechnologyProvidersContent.h1,
  description: telematicsTechnologyProvidersContent.metaDescription,
  pathname: PATHNAME,
});

export default function TelematicsTechnologyProvidersPage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: telematicsTechnologyProvidersContent.h1,
          description: telematicsTechnologyProvidersContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="telematics-technology-providers" content={telematicsTechnologyProvidersContent} afterHero={<TrustStrip content={trustStripContent} />}>
        <h2 className="text-[length:var(--text-h3)] font-bold text-ink">
          Talk to Us About Field Installation Support
        </h2>
        <div className="mt-6">
          <CommercialInquiryForm />
        </div>
      </PageBody>
    </>
  );
}
