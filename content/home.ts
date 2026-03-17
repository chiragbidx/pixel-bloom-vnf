// StartwiseCRM HomeContent — now includes all required sections to ensure no undefined errors

export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: { icon: string; title: string; description: string }[];
};

export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: { label: string; value: string | string[] };
    phone: { label: string; value: string | string[] };
    email: { label: string; value: string | string[] };
    hours: { label: string; value: string | string[] };
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

export type FooterContent = {
  brandName: string;
  copyright: string;
  attribution: { label: string; href: string };
};

export type NavbarContent = {
  brandName: string;
  routes: { href: string; label: string }[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: { title: string; description: string }[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

export type HomeContent = {
  hero: HeroContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

export const defaultHomeContent: HomeContent = {
  hero: {
    badgeInner: "Empower",
    badgeOuter: "Startup Efficiency",
    titleBefore: "Manage Clients,",
    titleHighlight: "Deals & Growth",
    titleAfter: "in One Place",
    subtitle: "StartwiseCRM helps startup teams collaborate, manage clients, close more deals, and track progress—all in a secure, internal CRM.",
    primaryCta: { label: "Get Started", href: "#contact" },
    secondaryCta: { label: "See Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "StartwiseCRM dashboard preview",
  },
  benefits: {
    eyebrow: "Why StartwiseCRM",
    heading: "A CRM Made for Startup Teams",
    description: "Built for agile teams that want efficient, collaborative, and secure client management with zero bloat.",
    items: [
      {
        icon: "Users",
        title: "Collaborative Client Management",
        description: "Share live client records and deal data across your team. Get out of spreadsheets and sync as you grow.",
      },
      {
        icon: "Pipeline",
        title: "Visual, Actionable Pipeline",
        description: "Track deals from new lead through close; stay on top of each stage for clear revenue forecasts.",
      },
      {
        icon: "Key",
        title: "Private, Multi-Tenant Isolation",
        description: "Each startup’s data is siloed, with robust role-based permissions—your client information is always secure.",
      },
      {
        icon: "Activity",
        title: "Real-Time Activity Timeline",
        description: "See every note, call, or task in a shared, filterable feed for each client or deal.",
      },
    ],
  },
  features: {
    eyebrow: "Everything Startup Teams Need",
    heading: "Features for Growth & Collaboration",
    subtitle: "StartwiseCRM brings together client records, collaborative deal pipelines, team activity tracking, and secure startup data isolation.",
    items: [
      {
        icon: "Group",
        title: "Secure Multi-Tenant CRM",
        description: "Each startup’s data is isolated, with role-based access for internal teams.",
      },
      {
        icon: "Users2",
        title: "Client & Contact Management",
        description: "Track clients, assign contacts, and manage company details—all in a central, intuitive workspace.",
      },
      {
        icon: "Briefcase",
        title: "Deal Pipeline & Opportunities",
        description: "Move deals through lead-to-win stages, assign owners, and project sales with customizable pipelines.",
      },
      {
        icon: "ActivitySquare",
        title: "Activity Timeline & Notes",
        description: "Log calls, meetings, and add notes to clients or deals. See everything in an actionable timeline.",
      },
      {
        icon: "FileText",
        title: "Built-In Reports & Dashboards",
        description: "Stay on top of your active pipeline and team performance with real-time overviews and reporting.",
      },
      {
        icon: "KeyIcon",
        title: "Role-Based Permissions",
        description: "Admins have full control, members see only their records—data is safe, private, and compliant.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "Core CRM Capabilities",
    subtitle: "All the essentials to help your startup team run client operations, close deals, and track notes securely.",
    items: [
      {
        title: "Client/Contact CRUD",
        description: "Create, update, archive, and collaborate on all your client and contact records—never lose important info as you grow.",
        pro: true,
      },
      {
        title: "Deal Lifecycle Management",
        description: "Move deals through fixed pipeline stages, relate deals to clients & contacts, assign owners, and log expected revenue.",
        pro: true,
      },
      {
        title: "Team Collaboration",
        description: "Multi-user role-based controls, secure invite flow, and real-time updates as your team works deals in parallel.",
        pro: true,
      },
      {
        title: "Activity Log & Notes",
        description: "All calls, meetings, and notes are attached to records and visible in timeline feeds—never drop the ball again.",
        pro: false,
      },
      {
        title: "Secure Data Isolation",
        description: "Each startup’s CRM and activity data is fully tenant-isolated, with role-based field-level gating.",
        pro: false,
      },
    ],
  },
  testimonials: {
    eyebrow: "Trusted by fast-moving teams",
    heading: "Startup teams love StartwiseCRM",
    reviews: [
      {
        name: "Michelle V.",
        role: "Founder, GrowthSpark",
        image: "/demo-img.jpg",
        comment: "With StartwiseCRM, our team got organized, closed more deals, and finally had a place where every client touchpoint was visible.",
        rating: 5.0,
      },
      {
        name: "Jay Y.",
        role: "COO, BoostBridge",
        image: "/demo-img.jpg",
        comment: "The pipeline and activity feed helped us prioritize work, and the simple onboarding had our team up and running in a single afternoon!",
        rating: 5.0,
      },
      {
        name: "Sana R.",
        role: "Head of Ops, QuickFund",
        image: "/demo-img.jpg",
        comment: "All of our startup’s client data is safely together, secure and accessible only to our team. Exactly what we needed to scale sales.",
        rating: 5.0,
      },
      {
        name: "Luca K.",
        role: "Revenue Lead, ScaleMVP",
        image: "/demo-img.jpg",
        comment: "As a founder wearing many hats, having deals, notes, and team timelines together in StartwiseCRM made following up with leads so much easier.",
        rating: 5.0,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Questions about StartwiseCRM?",
    description: "Reach out for support, custom onboarding, or to learn more about how StartwiseCRM can help your internal team.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Headquarters", value: "Remote • Global Team" },
      phone: { label: "Phone", value: "" },
      email: { label: "Contact Email", value: "chirag@bidx.ai" },
      hours: { label: "Availability", value: ["Monday - Friday", "9AM - 6PM local time"] },
    },
    formSubjects: ["Support", "Onboarding", "CRM Features", "Demo Request", "Other"],
    formSubmitLabel: "Reach Out",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      {
        question: "Is StartwiseCRM free to use?",
        answer: "Yes! For startup teams, the core platform is available for internal use at zero cost. Advanced support or whiteglove onboarding are available on request.",
      },
      {
        question: "Can I invite my whole team?",
        answer: "Absolutely. StartwiseCRM is built for startup teams—invite as many internal users as your workflow requires.",
      },
      {
        question: "Are my clients’ data secure and private?",
        answer: "100%. Each startup is a tenant, and your CRM data is isolated with role-based access for admins and members. Only your team can see your client information.",
      },
      {
        question: "Can I export or migrate my CRM data?",
        answer: "Yes. We’re working on CSV exports and API hooks. Inquire via support for early access.",
      },
      {
        question: "Can I customize pipeline stages?",
        answer: "At present, pipeline stages are fixed (Lead, Qualified, Proposal, Won, Lost) for consistency and reporting. Customization is on our roadmap.",
      },
    ],
  },
  footer: {
    brandName: "StartwiseCRM",
    copyright: `© ${new Date().getFullYear()} StartwiseCRM. All rights reserved.`,
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },
  navbar: {
    brandName: "StartwiseCRM",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Key Features",
    featureImage: { src: "/demo-img.jpg", alt: "StartwiseCRM CRM preview" },
    features: [
      {
        title: "Clients & Contacts",
        description: "Keep all your client details, contacts, and team notes in one place.",
      },
      {
        title: "Deal Pipeline",
        description: "Visualize and manage sales opportunities at every stage.",
      },
      {
        title: "Activity Tracking",
        description: "Attach calls, meetings, and logs to every record for true context.",
      },
      {
        title: "Secure Collaboration",
        description: "Startup teams only. Role-based permissions and tenant data isolation.",
      },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}