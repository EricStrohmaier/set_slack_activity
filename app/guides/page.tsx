import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import {
  SEOPageLayout,
  Section,
  CTAButton,
} from "@/components/seo/SEOPageLayout";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Guides - Slackactivity | How-To Tutorials",
  description:
    "Learn how to use Slackactivity with our comprehensive guides. Step-by-step tutorials for staying online on Slack and automating your status.",
  keywords: [
    "slack guides",
    "slack tutorials",
    "how to slack",
    "slack status guide",
  ],
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
];

const guides = [
  {
    title: "How to Stay Online on Slack During Work Hours",
    description:
      "Complete guide to maintaining an active Slack status throughout your workday. Learn manual methods, their limitations, and the automated solution that works 24/7.",
    href: "/guides/how-to-stay-online-on-slack",
    readTime: "8 min read",
    topics: ["Setup Guide", "Troubleshooting", "Best Practices"],
  },
  {
    title: "How to Manage Multiple Slack Workspaces Efficiently",
    description:
      "Master managing 3, 5, or 10+ Slack workspaces. Sync status across all workspaces, centralized control, and save hours weekly. Complete guide with step-by-step instructions.",
    href: "/guides/manage-multiple-slack-workspaces",
    readTime: "12 min read",
    topics: ["Setup Guide", "Troubleshooting", "Best Practices"],
  },
  {
    title: "How to Schedule Your Slack Availability",
    description:
      "Learn how to schedule your Slack availability automatically. Set work hours, manage time zones, and automate your status for perfect work-life balance.",
    href: "/guides/schedule-slack-availability",
    readTime: "12 min read",
    topics: ["Setup Guide", "Troubleshooting", "Best Practices"],
  },
  {
    title: "Why Does Slack Show Me as Away? (And How to Fix It)",
    description:
      "Slack marks you away after 30 minutes of inactivity - even mid-work. Understand exactly why it happens and see every fix ranked, from manual workarounds to full automation.",
    href: "/guides/why-does-slack-show-me-as-away",
    readTime: "6 min read",
    topics: ["Away Status", "Troubleshooting", "Fixes Ranked"],
  },
  {
    title: "Keep Slack Active When Your Computer Is Locked or Sleeping",
    description:
      "Stay online on Slack with your laptop closed, locked, or asleep. Why local tricks fail and how cloud-based status automation keeps your green dot on - in 4 steps.",
    href: "/guides/keep-slack-active-computer-locked",
    readTime: "5 min read",
    topics: ["Laptop Closed", "Sleep Mode", "Cloud Automation"],
  },
];

export default function GuidesPage() {
  return (
    <>
      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slackactivity Guides
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Step-by-step tutorials and guides to help you get the most out of
            Slackactivity. From setup to advanced usage, we&apos;ve got you
            covered.
          </p>
        </header>

        <Section>
          <div className="space-y-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group block bg-white border border-text-200 rounded-lg p-8 hover:shadow-lg hover:border-text-800 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <BookOpen className="w-6 h-6 text-text-800 mr-3" />
                      <span className="text-sm text-text-600">
                        {guide.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-text-900 group-hover:text-text-800 flex items-center">
                      {guide.title}
                      <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h2>
                    <p className="text-text-700 mb-4">{guide.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-3 py-1 bg-background-100 text-text-700 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section variant="subtle">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-text-900">
              More Guides Coming Soon
            </h2>
            <p className="text-lg text-text-700 mb-6">
              We&apos;re constantly adding new tutorials and guides. Check back
              regularly for updates, or get started with Slackactivity today.
            </p>
            <CTAButton href="/signin" variant="primary">
              Get Started - Free Forever
            </CTAButton>
          </div>
        </Section>
      </SEOPageLayout>
    </>
  );
}
