import { APPLY_PATH, INSTALLER_NETWORK_PATH, JOBS_INDEX_PATH } from "@/data/jobs/routes";
import { business } from "@/data/site/business";
import type { FooterColumn, NavItem } from "@/types/navigation";

/**
 * Site navigation.
 *
 * Launch-scoped deliberately. Only routes that exist may appear here. A link
 * to an unbuilt route is a dead link, which the project documentation treats
 * as worse than a sparse navigation.
 *
 * Commercial-first per the 2026-09-18 override (01-business-source-of-truth.md
 * section 32): Services and Contact lead, Careers stays a real top-level
 * destination.
 *
 * "Industries" and "Coverage" are added here in Sprint 2 now that both
 * routes exist (src/app/industries/, src/app/coverage/). `/case-studies/`
 * and `/resources/` are deliberately still not in this primary nav per the
 * plan; `/case-studies/` is additionally empty (structural only) and must
 * never appear in any navigation while empty. `/resources/` has real,
 * published content but stays a secondary destination, linked from the
 * footer only, to keep the primary nav focused on conversion routes.
 */
export const mainNavigation: readonly NavItem[] = [
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Coverage", href: "/coverage/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

/**
 * Header utility bar, above the primary nav. Phone number and hours are
 * confirmed facts; the current openings link keeps the recruitment journey
 * visible without competing with the primary commercial CTA. The Installer
 * Network is a separate, later path linked from the careers pages and footer.
 */
export const utilityBar = {
  phoneLabel: business.telephone,
  phoneHref: `tel:${business.telephone.replace(/[^0-9+]/g, "")}`,
  reachLabel: "Nationwide Mobile Service",
  openings: {
    label: "Current Openings",
    href: JOBS_INDEX_PATH,
  } satisfies NavItem,
};

/**
 * Header primary CTA. Commercial, per the commercial-first override.
 */
export const headerCta: NavItem = {
  label: "Request Installation Service",
  href: "/contact/",
};

/**
 * Persistent mobile bottom-bar CTA. Same destination as the header CTA; a
 * shorter label fits the fixed-width mobile bar.
 */
export const mobileNavigationCta: NavItem = {
  label: "Request Service",
  href: "/contact/",
};

/**
 * Footer brand block. Plain text lines shown under the logo, above the phone
 * button. Hours and founding year are confirmed facts.
 *
 * The corporate office address renders separately from `business.address`
 * (section 5.3 and 33.4), not from this list. No email, because none is
 * verified for display. No social profiles, because none are verified. See
 * 01-business-source-of-truth.md sections 5.2 and 5.3.
 */
export const footerBrandLines: readonly string[] = [
  "In business since 2011",
  "Monday-Friday, 8:00 AM-6:00 PM",
];

/**
 * Footer navigation groups, rendered as four horizontal columns beside the
 * brand block on desktop. Only built routes appear. Company holds About, Our
 * Process, Quality & Safety, and Resources (About is footer-only, not in the
 * primary nav, to keep the primary nav on conversion routes). The careers
 * column keeps the journeys separate: the current openings and the Apply link
 * (the active opening's own application page) come first, then the Installer
 * Network, a registration for future opportunities, then the commercial
 * contact route.
 */
export const footerColumns: readonly FooterColumn[] = [
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about/" },
      { label: "Our Process", href: "/our-process/" },
      { label: "Quality & Safety", href: "/quality-safety/" },
      { label: "Resources", href: "/resources/" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "All Services", href: "/services/" },
      {
        label: "Fleet Telematics Installation",
        href: "/services/fleet-telematics-installation/",
      },
      {
        label: "GPS Tracking Installation",
        href: "/services/gps-tracking-installation/",
      },
      { label: "ELD Installation", href: "/services/eld-installation/" },
      {
        label: "Dashcam & Camera Installation",
        href: "/services/dashcam-camera-installation/",
      },
      { label: "Fleet Rollouts", href: "/services/fleet-rollouts/" },
    ],
  },
  {
    heading: "Industries & Coverage",
    items: [
      { label: "All Industries", href: "/industries/" },
      { label: "Coverage", href: "/coverage/" },
    ],
  },
  {
    heading: "Careers & Legal",
    items: [
      { label: "Careers Overview", href: "/careers/" },
      { label: "Current Openings", href: JOBS_INDEX_PATH },
      { label: "Apply", href: APPLY_PATH },
      { label: "Installer Network", href: INSTALLER_NETWORK_PATH },
      { label: "Contact", href: "/contact/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms of Use", href: "/terms/" },
      { label: "Accessibility", href: "/accessibility/" },
    ],
  },
];
