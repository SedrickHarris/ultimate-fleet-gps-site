import { INSTALLER_NETWORK_PATH } from "@/data/jobs/routes";
import { PHOTO_DOCUMENTATION_SENTENCE } from "@/data/site/quality-content";
import type { FaqHubContent } from "@/types/service-content";

/**
 * `/faq/` commercial information hub content.
 *
 * Working brief: the stakeholder-supplied page brief pasted 2026-09-24. No page
 * brief exists in docs/briefs/. The stakeholder approved on 2026-09-24: the
 * quote-requester audience wording, the dashcam and video recorder wording, the
 * vehicle examples, the ELD physical-installation boundary, and the
 * photo-documentation sentence as the only documentation answer. The hedged
 * photo-documentation answers on other pages (docs/01 section 17.1) are not
 * reused here.
 *
 * The page emits WebPage and BreadcrumbList only. There is no FAQPage, QAPage,
 * or HowTo markup: Google removed FAQ rich results in Search on 2026-05-07 and
 * docs/13 section 35 does not deploy FAQPage.
 *
 * Deliberately absent: pricing, warranties, response times, scheduling, city or
 * state lists, local offices, certification, insurance, platform partnerships,
 * and any statement about how an installation is set up, tested, or verified.
 *
 * The Installer Network is a registration for future opportunities and is not
 * an application. An active opening exists (docs/01 section 33), so no answer
 * says openings do not exist. This page never uses "Apply" and never links to
 * the opening or the application page. Current openings are on /careers/.
 */

const NATIONWIDE_SENTENCE =
  "Ultimate Fleet GPS provides nationwide mobile installation service, delivered at the customer's location.";

const CLARIFICATION =
  "Vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type.";

export const faqHubContent: FaqHubContent = {
  h1: "Frequently Asked Questions",
  // The layout title template appends " | Ultimate Fleet GPS".
  // Meta title and description: Oct 26 2026 metadata audit approval.
  metaTitle: "Mobile GPS & ELD Installation FAQ",
  metaDescription:
    "Answers on how mobile installation works, what we install, coverage, scheduling, and quotes. Find your question, or contact us.",

  hero: {
    support:
      "Find answers about commercial mobile fleet installation, approved service contexts, installation documentation, and requesting an installation quote.",
    cta: {
      label: "Request an Installation Quote",
      href: "#request-quote",
      journey: "commercial",
      event: "cta_quote_click",
    },
    qualifier:
      "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
    secondary: { label: "Explore Fleet Installation Services", href: "/services/" },
  },

  topicNav: {
    label: "Jump to a topic",
  },

  bands: [
    {
      id: "installation-services",
      navLabel: "Installation Services",
      h2: "Installation Services",
      tone: "default",
      items: [
        {
          question: "What types of fleet installation services can be discussed?",
          answer:
            "Approved service contexts include Fleet Telematics Installation, GPS Tracking Installation, ELD Installation, Dashcam & Camera Installation, and Fleet Rollout Installation Services.",
          link: { label: "All installation services", href: "/services/" },
        },
        {
          question: "What does Fleet Telematics Installation refer to?",
          answer:
            "Fleet Telematics Installation is an approved commercial installation service category for Ultimate Fleet GPS.",
          link: {
            label: "Fleet Telematics Installation",
            href: "/services/fleet-telematics-installation/",
          },
        },
        {
          question: "What does GPS Tracking Installation refer to?",
          answer:
            "GPS Tracking Installation is an approved commercial installation service category for Ultimate Fleet GPS.",
          link: {
            label: "GPS Tracking Installation",
            href: "/services/gps-tracking-installation/",
          },
        },
        {
          question: "What does ELD Installation refer to?",
          answer:
            "ELD content describes physical installation context. Ultimate Fleet GPS is not described as an ELD provider or compliance consultant.",
          link: { label: "ELD Installation", href: "/services/eld-installation/" },
        },
        {
          question: "What does Dashcam & Camera Installation refer to?",
          answer:
            "Dashcam & Camera Installation refers to fleet dashcam and windshield-mounted video recorder installation context.",
          link: {
            label: "Dashcam & Camera Installation",
            href: "/services/dashcam-camera-installation/",
          },
        },
        {
          question: "What are Fleet Rollout Installation Services?",
          answer:
            "Fleet Rollout Installation Services provide request-scope context for one vehicle or an entire fleet, including multiple project locations.",
          link: { label: "Fleet Rollout Installation Services", href: "/services/fleet-rollouts/" },
        },
      ],
    },
    {
      id: "quote-requests",
      navLabel: "Quote Requests",
      h2: "Quote Requests",
      tone: "subtle",
      items: [
        {
          question: "What should I include in an installation quote request?",
          answer:
            "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
          link: { label: "Go to the quote request form", href: "#request-quote" },
        },
        {
          question: "Who can request an installation quote?",
          answer:
            "The Ultimate Fleet GPS commercial quote path is designed for fleet managers, commercial operators, project coordinators, and approved hardware or deployment contacts.",
        },
        {
          question: "Can I ask about one vehicle or an entire fleet?",
          answer: "You can discuss installation support for one vehicle or an entire fleet.",
        },
        {
          question: "Can I include multiple project locations in my quote request?",
          answer:
            "You can share multiple project locations when describing your installation request.",
        },
      ],
    },
    {
      id: "vehicle-context",
      navLabel: "Vehicle Context",
      h2: "Vehicle Context",
      tone: "default",
      items: [
        {
          question: "What types of vehicles are referenced on the site?",
          answer:
            "Common project contexts include work vans, service trucks, utility vehicles, heavy-duty trucks, fleet vehicles, commercial vehicles, and construction vehicles.",
        },
        {
          question:
            "Do these vehicle examples mean every hardware category is installed in every vehicle type?",
          answer: `No. ${CLARIFICATION}`,
        },
      ],
    },
    {
      id: "nationwide-service",
      navLabel: "Nationwide Service",
      h2: "Nationwide Service",
      tone: "default",
      items: [
        {
          question: "Where does Ultimate Fleet GPS provide mobile installation service?",
          answer: NATIONWIDE_SENTENCE,
        },
        {
          question: "Where can I learn more about service coverage context?",
          answer:
            "Visit the Coverage page for approved nationwide mobile installation service context.",
          link: { label: "Coverage", href: "/coverage/" },
        },
      ],
    },
  ],

  documentation: {
    id: "installation-documentation",
    navLabel: "Installation Documentation",
    h2: "Installation Documentation",
    question: "Is installation documentation provided?",
    answer: PHOTO_DOCUMENTATION_SENTENCE,
  },

  installerNetwork: {
    id: "installer-network",
    navLabel: "Installer Network",
    h2: "Installer Network",
    intro:
      "These answers are for technicians. They are separate from commercial quote requests.",
    items: [
      {
        question: "What is the Ultimate Fleet GPS Installer Network?",
        answer:
          "The Installer Network is an opt-in path for experienced mobile fleet-installation technicians to share their information and installation background with Ultimate Fleet GPS.",
      },
      {
        question: "Is the Installer Network an application for a job?",
        answer:
          "No. The Installer Network is a registration for future opportunities, and joining it is not an application. Current openings are listed separately on the Careers page.",
        link: { label: "Careers", href: "/careers/" },
      },
      {
        question: "How can an experienced technician express interest?",
        answer: "Learn about the Ultimate Fleet GPS Installer Network.",
        link: {
          label: "Ultimate Fleet GPS Installer Network",
          href: INSTALLER_NETWORK_PATH,
        },
      },
    ],
  },

  quote: {
    h2: "Request an Installation Quote",
    intro:
      "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
    formCopy: {
      serviceNeed: "Equipment or service needed",
      submit: "Submit Installation Request",
    },
  },

  related: {
    h2: "Related Resources",
    links: [
      { label: "All installation services", href: "/services/" },
      { label: "Nationwide mobile installation coverage", href: "/coverage/" },
    ],
  },
};
