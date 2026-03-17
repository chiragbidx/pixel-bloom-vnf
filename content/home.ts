// ─── All dynamic copies for the site are updated for StartwiseCRM (branding, hero, features, contact, testimonials, navbar, footer, etc.) ───
// Only keys and content that matter for the main page, sections, navbar, auth, and footer.
// Owner: Chirag Dodiya, chirag@bidx.ai

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

export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: { icon: string; title: string; description: string }[];
};

export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: { image: string; name: string; role: string; comment: string; rating: number }[];
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

export type FooterContent = {
  brandName: string;
  copyright: string;
  attribution: { label: string; href: string };
  // Only keys needed for footer structure.
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
  features: FeaturesContent;
  testimonials: TestimonialsContent;
  contact: ContactContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// Populates StartwiseCRM content.
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
  features: {
    eyebrow: "Everything Startup Teams Need",
    heading: "Features for Growth & Collaboration",
    subtitle:
      "StartwiseCRM brings together client records, collaborative deal pipelines, team activity tracking, and secure startup data isolation.",
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
  testimonials: {
    eyebrow: "Trusted by fast-moving teams",
    heading: "Startup teams love StartwiseCRM",
    reviews: [
      {
        name: "Michelle V.",
        role: "Founder, GrowthSpark",
        image: "/demo-img.jpg",
        comment:
          "With StartwiseCRM, our team got organized, closed more deals, and finally had a place where every client touchpoint was visible.",
        rating: 5.0,
      },
      {
        name: "Jay Y.",
        role: "COO, BoostBridge",
        image: "/demo-img.jpg",
        comment:
          "The pipeline and activity feed helped us prioritize work, and the simple onboarding had our team up and running in a single afternoon!",
        rating: 5.0,
      },
      {
        name: "Sana R.",
        role: "Head of Ops, QuickFund",
        image: "/demo-img.jpg",
        comment:
          "All of our startup’s client data is safely together, secure and accessible only to our team. Exactly what we needed to scale sales.",
        rating: 5.0,
      },
      {
        name: "Luca K.",
        role: "Revenue Lead, ScaleMVP",
        image: "/demo-img.jpg",
        comment:
          "As a founder wearing many hats, having deals, notes, and team timelines together in StartwiseCRM made following up with leads so much easier.",
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