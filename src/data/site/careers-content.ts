import { activeTechnicianJob, APPLY_PATH, INSTALLER_NETWORK_PATH } from "@/data/jobs";
import { business } from "@/data/site/business";
import type { FaqItem } from "@/types/content";
import type { CareersPageContent } from "@/types/service-content";

/**
 * Careers landing page and Installer Network page content.
 *
 * Two separate journeys:
 * - The active opening and its application (`careersHubContent`, and the job
 *   record in src/data/jobs). "Apply" belongs only here, because the opening
 *   has its own application page and form.
 * - The Installer Network (`installerNetworkContent`), a registration for
 *   future opportunities. It is never an application, and it never uses
 *   "Apply".
 *
 * The approved current-openings facts (docs/01 section 33) live in
 * `business.recruitment` and the job record, not retyped here. No MECP or
 * other certification claim appears as a requirement. No em dash appears in
 * this file.
 */

/**
 * Careers landing page h1, metadata description, intro, and FAQ. Section copy
 * for the page lives in `careersLandingContent` (careers-landing-content.ts).
 * `/faq/` no longer imports this FAQ.
 */
export const careersHubContent: CareersPageContent = {
  // Meta title and description: Oct 26 2026 metadata audit approval.
  h1: "Installer Careers at Ultimate Fleet GPS",
  metaDescription:
    "Independent contractor installation work, nationwide applicants accepted. Training provided. See current openings and requirements.",
  intro:
    "Ultimate Fleet GPS has current openings for Mobile GPS, ELD, and AOBRD installation technicians. This is independent contractor field work, applicants are accepted nationwide, and no prior installation experience is required. Training is provided.",
  body: [],
  faq: [
    {
      question: "Are there current installer openings?",
      answer:
        "Yes. Ultimate Fleet GPS has current openings for Mobile GPS, ELD, and AOBRD installation technicians. Applicants are accepted nationwide, and no closing date is currently published.",
      link: {
        label: "View the current opening",
        href: activeTechnicianJob.path,
      },
    },
    {
      question: "How do I apply for the current opening?",
      answer:
        "Use the application page. It is a dedicated form for the current opening and is separate from the Installer Network.",
      link: { label: "Go to the application page", href: APPLY_PATH },
    },
    {
      question:
        "What is the difference between applying and joining the Installer Network?",
      answer:
        "Applying is for the current opening. The Installer Network is a separate registration for future opportunities. Joining it is not an application, and it does not guarantee contact, an interview, a contract, an assignment, a schedule, work volume, or pay.",
      link: { label: "About the Installer Network", href: INSTALLER_NETWORK_PATH },
    },
    {
      question: "Is this employee employment?",
      answer:
        "No. This is independent contractor work, not employee employment.",
    },
    {
      question: "How can a business request fleet installation services?",
      answer:
        "Businesses request fleet installation services separately from installer careers. Visit the contact page to request an installation quote.",
      link: { label: "Contact Ultimate Fleet GPS", href: "/contact/" },
    },
  ],
};

const { recruitment } = business;

/**
 * FAQ shown on `/careers/` only. `careersHubContent.faq` above is left as is
 * for historical reasons; this list is separate so expanding the Careers
 * page does not change it. `/faq/` no longer imports either list.
 *
 * Wording is taken from the approved job record and business data. Rate and
 * travel come from `business.recruitment`, never retyped. Order matters: the
 * two-column layout flows row by row, so odd items sit left, even items right.
 * No em dash appears here.
 */
export const careersPageFaq: readonly FaqItem[] = [
  {
    question: "Are there current installer openings?",
    answer:
      "Yes. Ultimate Fleet GPS has current openings for Mobile GPS, ELD, and AOBRD installation technicians. Applicants are accepted nationwide, and no closing date is currently published.",
    link: { label: "View the current opening", href: activeTechnicianJob.path },
  },
  {
    question: "How do I apply for the current opening?",
    answer:
      "Use the application page. It is a dedicated form for the current opening and is separate from the Installer Network.",
    link: { label: "Go to the application page", href: APPLY_PATH },
  },
  {
    question: "What does a mobile GPS, ELD, and AOBRD installer do?",
    answer:
      "Technicians install GPS, ELD, and AOBRD equipment on fleet, commercial, and construction vehicles at customer locations. It is field work, and every installation is photo documented.",
    link: { label: "Read the full opening details", href: activeTechnicianJob.path },
  },
  {
    question: "Is prior installation experience required?",
    answer:
      "No. No prior installation experience is required for the current opening, and training is provided.",
  },
  {
    question: "Can someone with no fleet installation experience apply?",
    answer:
      "Yes. The current opening does not require prior installation experience. Review the full opening details and give accurate information about your background and availability.",
    link: { label: "View the current opening", href: activeTechnicianJob.path },
  },
  {
    question: "What type of work arrangement is offered?",
    answer:
      "The current opening is independent contractor work, not employee employment. Contractors provide their own vehicle, tools, smartphone, and travel resources.",
  },
  {
    question: "How much travel is required?",
    answer: `Approximately ${recruitment.travel.approximatePercent}% travel is required, including state-to-state travel. Review the full opening details before applying.`,
    link: { label: "View the current opening", href: activeTechnicianJob.path },
  },
  {
    question: "Are applicants accepted nationwide?",
    answer:
      "Yes. Applicants are accepted nationwide. That does not mean every applicant will receive an assignment, a schedule, work volume, a contract, or pay.",
  },
  {
    question: "What requirements must applicants meet?",
    answer:
      "A valid driver's license and a background check are required. Contractors also provide their own vehicle, tools, smartphone, and travel resources.",
    link: {
      label: "See all installer requirements",
      href: "/careers/installer-requirements/",
    },
  },
  {
    question: "Is the starting rate guaranteed?",
    answer: `No. The starting rate of ${recruitment.startingRate.display} is not guaranteed income. Applying does not guarantee contact, an interview, a contract, an assignment, a schedule, work volume, or pay.`,
  },
  {
    question: "What is the Installer Network?",
    answer:
      "The Installer Network is a separate registration for future installation opportunities. It is not an application for the current opening, and it does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    link: {
      label: "Learn About the Installer Network",
      href: INSTALLER_NETWORK_PATH,
    },
  },
  {
    question: "How can a business request fleet installation services?",
    answer:
      "Businesses request fleet installation services separately from installer careers. Visit the contact page to request an installation quote.",
    link: { label: "Contact Ultimate Fleet GPS", href: "/contact/" },
  },
];

/**
 * Installer Network page h1, metadata description, intro, and FAQ. Section
 * copy lives in `careersHubPageContent` (careers-hub-content.ts). `/faq/`
 * does not import this FAQ. The Installer Network is a registration for future
 * opportunities, separate from the application for the current opening.
 */
export const installerNetworkContent: CareersPageContent = {
  // Meta title and description: Oct 26 2026 metadata audit approval.
  h1: "Mobile Installation Technician",
  metaDescription:
    "Register interest in our Installer Network for future mobile installation work. Not a current opening. No work or pay is guaranteed.",
  intro:
    "Ultimate Fleet GPS is building an Installer Network for experienced mobile fleet-installation technicians. Share your information to express interest and help us understand your installation background.",
  body: [],
  faq: [
    {
      question: "Is the Installer Network an active job opening?",
      answer:
        "No. The Installer Network is an opt-in, no-guarantee registration for future opportunities, and joining it is not an application for a specific opening. The current opening has its own page.",
      link: { label: "View the current opening", href: activeTechnicianJob.path },
    },
    {
      question: "Are Installer Network technicians employees?",
      answer:
        "No. Technicians engaged through the Installer Network are independent contractors, not employees.",
    },
    {
      question: "What is the Ultimate Fleet GPS Installer Network?",
      answer:
        "The Ultimate Fleet GPS Installer Network is a way for technicians to share their mobile installation experience, tools, home market, and travel availability for future installation opportunities. It is a registration, not an application for a job.",
    },
    {
      question: "What information should I include in my Installer Network form?",
      answer:
        "The form asks for your name, email, phone number, home market or region, an experience summary, and your travel and coverage-region availability. Platform experience and tools currently owned are optional.",
    },
    {
      question: "What are the requirements to join the Installer Network?",
      answer:
        "Installer Network technicians are asked to have a valid driver's license, their own personal vehicle, tools, and travel resources, the ability to travel state to state, and a smartphone for submitting installation data and installation photos, and to pass a background check. No prior installation experience is required, and training is provided. See the Installer Network page for the full list of requirements and helpful experience.",
    },
    {
      question: "Do I need prior installation experience to join?",
      answer:
        "No. No prior installation experience is required for current openings, and training is provided. Registering for the Installer Network is an expression of interest, not an application for an active opening or an employment offer.",
    },
    {
      question: "Do I need my own vehicle and tools?",
      answer:
        "Yes. Installer Network technicians are asked to have their own personal vehicle, tools, and travel resources, along with a valid driver's license and a smartphone for submitting installation data and photos. See the requirements section on this page for the full list.",
    },
    {
      question: "How much travel is involved?",
      answer:
        "Current openings involve approximately 75% travel, including state-to-state travel. Joining the Installer Network does not guarantee an assignment, a travel schedule, or work.",
    },
    {
      question: "What installation experience is relevant?",
      answer:
        "Experience installing GPS tracking, ELD, AOBRD, dashcam, and other fleet equipment in vehicles is helpful. Experience with 12 and 24 volt electrical systems or removing vehicle panels is also welcome. None of it is required, and you can share whatever related background you have.",
    },
    {
      question: "What tools should I tell Ultimate Fleet GPS about?",
      answer:
        "The form asks which tools you currently own. This question is optional. List the tools you use for installation work.",
    },
    {
      question: "Can I share a specific market or region?",
      answer:
        "Yes. The form asks for your home market or region and your travel and coverage-region availability. Listing a market or region does not mean Ultimate Fleet GPS has active work there, and joining does not guarantee an assignment.",
    },
    {
      question: "What platform experience should I include?",
      answer:
        "You may share experience with fleet technology platforms or device ecosystems that you have worked with. This information is optional and does not indicate certification, authorization, partnership, or a guarantee of assignment.",
    },
    {
      question: "What happens after I submit my information?",
      answer:
        "Information submitted through the form is collected for Installer Network consideration. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    },
    {
      question: "How can a business request fleet installation services?",
      answer:
        "Businesses request fleet installation services separately from the Installer Network. Visit the contact page to request an installation quote.",
      link: { label: "Contact Ultimate Fleet GPS", href: "/contact/" },
    },
  ],
};
