import { LegalPage } from "@/components/content/LegalPage";
import { privacyPolicy } from "@/data/site/legal-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Ultimate Fleet GPS website. This page has not yet been reviewed by an attorney.",
  pathname: "/privacy-policy/",
});

export default function Page() {
  return <LegalPage content={privacyPolicy} />;
}
