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
  {
    title: "How to Appear Online on Slack (Every Method, Ranked)",
    description:
      "Set yourself active manually, use a keep-awake tool, or automate it. Every way to appear online on Slack, ranked by how long it actually lasts.",
    href: "/guides/how-to-appear-online-on-slack",
    readTime: "8 min read",
    topics: ["Appear Online", "Methods Ranked", "Setup"],
  },
  {
    title: "When Does Slack Go Inactive?",
    description:
      "Slack goes inactive after 30 minutes of no interaction with the desktop app, and almost instantly on mobile once you background it. The exact rules, explained.",
    href: "/guides/when-does-slack-go-inactive",
    readTime: "6 min read",
    topics: ["Away Timer", "Presence Rules", "Mobile"],
  },
  {
    title: "Slack Stuck on Away? 8 Fixes, In the Order to Try Them",
    description:
      "Slack stuck on away even though you're active? Work through 8 ordered fixes - sticky manual away, stale sessions, DND, cache - and the permanent cure.",
    href: "/guides/slack-stuck-on-away",
    readTime: "7 min read",
    topics: ["Troubleshooting", "Stuck Away", "Fixes"],
  },
  {
    title: "What Does the Z Mean on Slack? (zZ Icon Explained)",
    description:
      "The zZ icon means notifications are paused - Do Not Disturb - not that someone is away. What every Slack presence symbol actually signals.",
    href: "/guides/what-does-z-mean-on-slack",
    readTime: "4 min read",
    topics: ["Icons", "Do Not Disturb", "Presence"],
  },
  {
    title: "Slack Statuses Explained: Every Icon, Dot and Symbol",
    description:
      "What every Slack status icon means — the green dot, hollow grey circle, zZ moon, phone icon and custom emoji — plus how to set your own status in seconds.",
    href: "/guides/slack-status-icons-explained",
    readTime: "8 min read",
    topics: ["Icons", "Reference", "Presence"],
  },
  {
    title: "How to Keep Slack Active (5 Methods, Ranked)",
    description:
      "Every method for keeping Slack active, ranked from least to most reliable — manual active, keep-awake apps, mouse jigglers, extensions and cloud automation — with the exact failure mode of each.",
    href: "/guides/how-to-keep-slack-active",
    readTime: "8 min read",
    topics: ["Methods Ranked", "Mouse Jigglers", "Setup"],
  },
  {
    title: "Keep Slack Active on Desktop and Mobile",
    description:
      "How to keep Slack always active on desktop, Mac, Windows, iPhone and Android — what each device trick actually does, why most of them fail, and the free cloud fix.",
    href: "/guides/keep-slack-active-on-desktop-and-mobile",
    readTime: "8 min read",
    topics: ["macOS", "Windows", "iPhone & Android"],
  },
  {
    title: "Slack Working Hours: How to Set Them",
    description:
      "The native notification schedule, profile working hours, and the one thing Slack cannot schedule — your presence dot. With a free forever fix.",
    href: "/guides/slack-working-hours",
    readTime: "8 min read",
    topics: ["Scheduling", "Timezones", "Night Shifts"],
  },
  {
    title: "90+ Slack Status Ideas and Examples",
    description:
      "Copy-paste Slack status examples with emoji — funny lines for work, focus blocks, meetings, lunch, PTO, remote work and seasons, plus how to auto-clear one.",
    href: "/guides/slack-status-ideas",
    readTime: "7 min read",
    topics: ["Status Ideas", "Emoji", "Examples"],
  },
  {
    title: "Slack Invisible Mode vs Away vs Offline",
    description:
      "Slack has no true invisible or appear-offline mode. What away, offline, Do Not Disturb and deactivated actually look like to your teammates.",
    href: "/guides/slack-invisible-mode-vs-away-vs-offline",
    readTime: "6 min read",
    topics: ["Invisible Mode", "Away vs Offline", "Privacy"],
  },
  {
    title: "Does Slack Show You as Active on Mobile?",
    description:
      "Yes - Slack shows you active while the mobile app is in the foreground, but you flip to away within moments of backgrounding it. Why, and what to do.",
    href: "/guides/does-slack-show-you-as-active-on-mobile",
    readTime: "6 min read",
    topics: ["Mobile", "Presence", "Multi-Device"],
  },
  {
    title: "How Your Employer Sees Your Slack Status",
    description:
      "Your presence dot and custom status are visible to everyone. But Slack does not track mouse movement, keystrokes, or which apps you use. The full picture.",
    href: "/guides/how-your-employer-sees-your-slack-status",
    readTime: "8 min read",
    topics: ["Privacy", "Employer Visibility", "Analytics"],
  },
  {
    title: "Does Slack Track Mouse Movement?",
    description:
      "No - Slack does not record or transmit your mouse movements. What the desktop app actually detects, and how it decides you have gone idle.",
    href: "/guides/does-slack-track-mouse-movement",
    readTime: "6 min read",
    topics: ["Privacy", "Idle Detection", "How It Works"],
  },
  {
    title: "How to Sync Your Slack Status with Google Calendar",
    description:
      "Slack's official Google Calendar app sets your custom status during meetings - but never your green dot. How to cover both at once.",
    href: "/guides/sync-slack-status-with-google-calendar",
    readTime: "7 min read",
    topics: ["Calendar Sync", "Meetings", "Custom Status"],
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
