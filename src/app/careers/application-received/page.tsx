import type { Metadata } from "next";

import { ApplicationConfirmation } from "@/components/forms/ApplicationConfirmation";
import { Section } from "@/components/layout/Section";
import { APPLICATION_RECEIVED_PATH } from "@/data/jobs";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

/**
 * Application confirmation page. Noindexed and excluded from the sitemap.
 * It is separate from the commercial thank-you page and the Installer Network
 * confirmation.
 *
 * The visible content comes from `ApplicationConfirmation`, which claims
 * receipt and fires `application_success` only when this browser session just
 * completed a submission the trusted endpoint confirmed. A direct visit shows a
 * neutral message. It promises no contact, interview, timing, or outcome.
 */
export const metadata: Metadata = buildPageMetadata({
  title: "Application Status",
  description: "Confirmation page for a submitted job application. This page is not indexed.",
  pathname: APPLICATION_RECEIVED_PATH,
  noIndex: true,
});

export default function ApplicationReceivedPage() {
  return (
    <Section tone="default" density="spacious" width="reading" center>
      <ApplicationConfirmation />
    </Section>
  );
}
