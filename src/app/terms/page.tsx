import { LegalPage } from "@/components/content/LegalPage";
import { termsOfUse } from "@/data/site/legal-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "Terms of Use for the Ultimate Fleet GPS website. This page has not yet been reviewed by an attorney.",
  pathname: "/terms/",
});

export default function Page() {
  return <LegalPage content={termsOfUse} />;
}
