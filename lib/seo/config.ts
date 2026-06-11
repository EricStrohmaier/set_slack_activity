import { Metadata } from "next";

export interface SEOPageConfig {
  title: string;
  description: string;
  keywords: readonly string[] | string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: any;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://slackactivity.com";

export const seoPages = {
  home: {
    title: "Slackactivity - Stay Active on Slack Automatically",
    description:
      "Keep your Slack status active automatically. Never appear away again with our smart Slack status automation tool. Free to start, works 24/7.",
    keywords: [
      "slack status automation",
      "keep slack online",
      "slack auto away prevention",
      "automatic slack status",
      "slack presence management",
      "slack availability tool",
    ],
    canonical: baseUrl,
  },
  slackAutoAway: {
    title: "Slack Auto Away Prevention - Never Show Away on Slack Again",
    description:
      "Prevent Slack from showing you as away. Our tool keeps your status active automatically, ensuring you always appear online during work hours. Free trial available.",
    keywords: [
      "slack auto away prevention",
      "prevent slack away status",
      "slack always active",
      "disable slack away",
      "slack status active tool",
      "keep slack green",
    ],
    canonical: `${baseUrl}/solutions/slack-auto-away-prevention`,
  },
  statusAutomation: {
    title: "Slack Status Automation Tool - Automatic Status Management",
    description:
      "Automate your Slack status updates with smart scheduling. Set it once and let our tool manage your online presence automatically. Perfect for remote teams.",
    keywords: [
      "slack status automation tool",
      "automatic slack status",
      "slack status scheduler",
      "automated status updates",
      "slack automation software",
      "status management tool",
    ],
    canonical: `${baseUrl}/solutions/slack-status-automation`,
  },
  remoteWorkers: {
    title: "Slack Status Tool for Remote Workers - Stay Connected",
    description:
      "Essential Slack tool for remote workers. Manage your availability across time zones, automate status updates, and maintain professional presence effortlessly.",
    keywords: [
      "slack for remote workers",
      "remote work slack tool",
      "slack timezone management",
      "distributed team slack",
      "work from home slack",
      "remote availability tool",
    ],
    canonical: `${baseUrl}/use-cases/remote-workers`,
  },
  howToStayOnline: {
    title: "How to Stay Online on Slack During Work Hours - Complete Guide",
    description:
      "Learn how to maintain an active Slack status throughout your workday. Step-by-step guide to staying online on Slack without manual updates. 100% automated.",
    keywords: [
      "how to stay online on slack",
      "keep slack status active",
      "slack always online guide",
      "maintain slack presence",
      "slack active status tips",
    ],
    canonical: `${baseUrl}/guides/how-to-stay-online-on-slack`,
  },
  scheduleAvailability: {
    title: "How to Schedule Your Slack Availability - Automation Guide",
    description:
      "Schedule your Slack availability automatically. Set your work hours, define time zones, and let automation handle your status. Perfect for flexible schedules.",
    keywords: [
      "schedule slack availability",
      "slack availability scheduler",
      "automatic slack schedule",
      "slack working hours",
      "slack time management",
    ],
    canonical: `${baseUrl}/guides/schedule-slack-availability`,
  },
  multiWorkspace: {
    title: "Manage Multiple Slack Workspaces Efficiently - Multi-Workspace Tool",
    description:
      "Manage multiple Slack workspaces from one dashboard. Sync status across all workspaces, schedule availability, and stay organized. Built for professionals.",
    keywords: [
      "multiple slack workspaces",
      "manage slack workspaces",
      "multi workspace slack tool",
      "slack workspace management",
      "sync slack status",
    ],
    canonical: `${baseUrl}/guides/manage-multiple-slack-workspaces`,
  },
  mouseJigglerAlternative: {
    title: "Slack Mouse Jiggler Alternative - Stay Active Without Hacks",
    description:
      "Looking for a mouse jiggler to keep Slack active? There's a better way. Keep your Slack status green via the official Slack API - no hardware, no software running on your machine. Free to use.",
    keywords: [
      "slack mouse jiggler",
      "mouse jiggler alternative",
      "keep slack active without mouse jiggler",
      "slack mouse mover",
      "prevent slack idle",
      "keep slack green",
      "slack anti idle",
    ],
    canonical: `${baseUrl}/solutions/slack-mouse-jiggler-alternative`,
  },
  whyAmIAway: {
    title: "Why Does Slack Show Me as Away? (And How to Fix It)",
    description:
      "Slack marks you as away after 30 minutes of inactivity - even when you're still working. Learn why Slack changes your status to away and every way to stay online, ranked.",
    keywords: [
      "why does slack show me as away",
      "slack away status",
      "slack says i am away",
      "slack away after 30 minutes",
      "how to not go away on slack",
      "slack idle timeout",
      "slack active status not working",
    ],
    canonical: `${baseUrl}/guides/why-does-slack-show-me-as-away`,
  },
  computerLocked: {
    title: "Keep Slack Active When Your Computer Is Locked or Sleeping",
    description:
      "Stay online on Slack even when your laptop is closed, locked, or asleep. Cloud-based status automation keeps your Slack status green - no app running on your machine required.",
    keywords: [
      "keep slack active when computer locked",
      "slack active laptop closed",
      "stay online on slack when away from desk",
      "slack status when computer sleeps",
      "keep slack online without computer",
      "slack active on mobile",
    ],
    canonical: `${baseUrl}/guides/keep-slack-active-computer-locked`,
  },
  distributedTeams: {
    title: "Slack Status Tool for Distributed Teams - Sync Across Time Zones",
    description:
      "Help your distributed team show accurate Slack availability across time zones. Automatic status scheduling for global teams, async-friendly presence, and overlap-hour visibility.",
    keywords: [
      "slack for distributed teams",
      "distributed team slack tool",
      "slack across time zones",
      "global team slack status",
      "async team slack presence",
      "team availability slack",
    ],
    canonical: `${baseUrl}/use-cases/distributed-teams`,
  },
  digitalNomads: {
    title: "Slack Status Automation for Digital Nomads - Work From Anywhere",
    description:
      "Travel the world without your Slack status giving you away. Automatic timezone-aware status scheduling for digital nomads - stay green during your clients' work hours from anywhere.",
    keywords: [
      "slack for digital nomads",
      "digital nomad slack status",
      "slack timezone automation",
      "work from anywhere slack",
      "slack status while traveling",
      "remote work timezone tool",
    ],
    canonical: `${baseUrl}/use-cases/digital-nomads`,
  },
} as const;

export function generateMetadata(config: SEOPageConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: Array.isArray(config.keywords) ? config.keywords : undefined,
    alternates: {
      canonical: config.canonical,
    },
    robots: config.noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.canonical,
      siteName: "Slackactivity",
      images: [
        {
          url: config.ogImage || `${baseUrl}/icon.jpeg`,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [config.ogImage || `${baseUrl}/icon.jpeg`],
    },
  };
}

export function generateBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateSoftwareApplicationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Slackactivity",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
    description:
      "Automatic Slack status management tool that keeps you active on Slack 24/7. Perfect for remote workers and distributed teams.",
  };
}

export function generateFAQStructuredData(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToStructuredData(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateArticleStructuredData(
  headline: string,
  description: string,
  datePublished: string,
  dateModified: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Slackactivity",
    },
    publisher: {
      "@type": "Organization",
      name: "Slackactivity",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
  };
}
