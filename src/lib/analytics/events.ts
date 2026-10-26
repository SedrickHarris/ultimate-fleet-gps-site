/**
 * Event taxonomy, extending the existing `data-event`/`data-journey`
 * attribute pattern already on `CtaButton`.
 *
 * Three journeys, never mixed: `commercial_form_*`, `installer_network_*`,
 * and the job application journey (`active_opening_view`, `cta_apply_click`,
 * and `application_*`). A referral journey has no events yet. See CLAUDE.md
 * section 4 and docs/_claims-inventory.md rows 23 and 51.
 *
 * Application events never carry a name, email, phone, or any answer. They
 * carry only the job slug and counts (see `trackEvent`).
 */
export const AnalyticsEvent = {
  // Commercial inquiry form lifecycle.
  commercialFormStart: "commercial_form_start",
  commercialFormError: "commercial_form_error",
  commercialFormSubmit: "commercial_form_submit",

  // Installer Network form lifecycle.
  installerNetworkStart: "installer_network_start",
  installerNetworkError: "installer_network_error",
  installerNetworkSubmit: "installer_network_submit",

  // Job application journey. `active_opening_view` fires when the active
  // opening page is viewed; the others cover the application form lifecycle.
  activeOpeningView: "active_opening_view",
  applicationStart: "application_start",
  applicationError: "application_error",
  applicationSubmit: "application_submit",
  applicationSuccess: "application_success",
  applicationFailure: "application_failure",

  // Apply page final CTA group. Submit has no click event of its own:
  // `application_submit` already fires once per valid submit, so a click
  // event would double count and would also count invalid attempts.
  applyPhoneClick: "apply_phone_click",
  applyInstallerNetworkClick: "apply_installer_network_click",

  // CTA click events, referenced by data-event on CtaButton/Link instances.
  ctaApplyClick: "cta_apply_click",
  ctaCareersClick: "cta_careers_click",
  ctaQuoteClick: "cta_quote_click",
  ctaRequestServiceClick: "cta_request_service_click",
  ctaInstallerNetworkClick: "cta_installer_network_click",
  ctaCallClick: "cta_call_click",
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];
