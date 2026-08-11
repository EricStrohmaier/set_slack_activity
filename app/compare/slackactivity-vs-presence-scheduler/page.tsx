import { Metadata } from "next";
import {
  Clock,
  DollarSign,
  Globe,
  Laptop,
  Server,
  Users,
} from "lucide-react";
import {
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateArticleStructuredData,
} from "@/lib/seo/config";
import { MultipleStructuredData } from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  SEOPageLayout,
  CTAButton,
  Section,
  FeatureCard,
  CTASection,
  FAQItem,
} from "@/components/seo/SEOPageLayout";

export const metadata: Metadata = {
  title: "Slackactivity vs Presence Scheduler (Free Alternative)",
  description:
    "A free Presence Scheduler alternative. Compare refresh intervals, workspace limits, scheduling and price for keeping your Slack presence green — no trial, no card.",
  keywords: [
    "presence scheduler alternative",
    "presencescheduler.com alternative",
    "slackactivity vs presence scheduler",
    "free slack presence scheduler",
    "slack presence automation",
    "keep slack active free",
  ],
  alternates: {
    canonical:
      "https://slackactivity.com/compare/slackactivity-vs-presence-scheduler",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Compare", url: "https://slackactivity.com/compare" },
  {
    name: "Slackactivity vs Presence Scheduler",
    url: "https://slackactivity.com/compare/slackactivity-vs-presence-scheduler",
  },
];

const faqs = [
  {
    question: "Is there a free alternative to Presence Scheduler?",
    answer:
      "Yes — Slackactivity is free forever. There is no trial period, no credit card, and no paid tier to upgrade to. Presence Scheduler offers a 7-day free trial and then requires a paid plan, so the clearest difference between the two is that one keeps working at no cost indefinitely.",
  },
  {
    question: "How are the two tools actually different?",
    answer:
      "Both connect through Slack OAuth and refresh your presence on a schedule from a server. Slackactivity refreshes every 5 minutes; Presence Scheduler states it sets your presence every 15 minutes. Slackactivity also allows unlimited workspaces with a separate schedule for each, which matters if you sit in several client Slacks.",
  },
  {
    question: "Do I need a Chrome extension?",
    answer:
      "Not with Slackactivity. Presence Scheduler offers an optional Chrome extension that opens a hidden Slack tab for extra reliability. Slackactivity is purely server-side, so nothing runs on your machine and nothing needs your browser to be open.",
  },
  {
    question: "Does either one work when my laptop is closed?",
    answer:
      "The server-side portion of both tools works independently of your device, because the presence call is made by a server rather than your computer. Anything that relies on a browser extension, however, stops the moment the browser closes or the machine sleeps. Slackactivity has no browser component at all.",
  },
  {
    question: "Can I see history and stats?",
    answer:
      "Both do. Presence Scheduler advertises historical charts and graphs of your Slack status. Slackactivity's dashboard shows daily active and away hours per workspace, coverage against your configured hours, and a current streak, over 30, 90 or 365 days.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slackactivity vs Presence Scheduler: A Free Alternative Compared",
    "How Slackactivity and Presence Scheduler compare on refresh interval, workspace limits, scheduling, browser extensions and price.",
    "2026-08-10",
    "2026-08-10"
  ),
];

const rows: [string, string, string][] = [
  ["Price", "Free forever, no card", "Paid, after a 7-day free trial"],
  ["Presence refresh interval", "Every 5 minutes", "Every 15 minutes"],
  ["Slack workspaces", "Unlimited", "Depends on plan"],
  ["Schedule per workspace", "Yes — hours, days and timezone each", "Scheduling by hours and timezone"],
  ["Browser extension needed", "No — server-side only", "Optional Chrome extension offered"],
  ["Works with laptop closed", "Yes", "Yes, for the server-side portion"],
  ["Official Slack API", "Yes (users.setPresence)", "Yes (Slack API)"],
  ["Activity history", "Daily charts, coverage and streaks", "Historical charts and graphs"],
];

export default function SlackactivityVsPresenceSchedulerPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold text-text-900 md:text-5xl">
            Slackactivity vs Presence Scheduler
          </h1>
          <p className="mb-8 text-xl text-text-600">
            Both tools keep your Slack presence green on a schedule using the
            official Slack API, so the real decision comes down to price,
            refresh interval and how many workspaces you need. Slackactivity is
            free forever with unlimited workspaces; Presence Scheduler is a paid
            product with a 7-day trial that refreshes every 15 minutes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/signin" variant="primary">
              Get Started - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        <Section variant="subtle">
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-background-100">
                  <th className="border-b border-text-200 p-4 font-semibold text-text-900">
                    Feature
                  </th>
                  <th className="border-b border-text-200 p-4 font-semibold text-text-900">
                    Slackactivity
                  </th>
                  <th className="border-b border-text-200 p-4 font-semibold text-text-900">
                    Presence Scheduler
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([feature, ours, theirs]) => (
                  <tr key={feature}>
                    <td className="border-b border-text-200 p-4 font-medium text-text-900">
                      {feature}
                    </td>
                    <td className="border-b border-text-200 p-4 text-text-700">
                      {ours}
                    </td>
                    <td className="border-b border-text-200 p-4 text-text-700">
                      {theirs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-text-600">
            Presence Scheduler details are taken from its public marketing pages
            at the time of writing. Check their pricing page for the current
            plans, since paid tiers change more often than free ones do.
          </p>
        </Section>

        <Section>
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Why the refresh interval matters
          </h2>
          <p className="mb-6 text-lg text-text-700">
            Slack flips your desktop presence to away after 30 minutes without
            interaction inside the Slack app, and there is no setting on any
            plan — free or paid — to extend or disable that timer. A presence
            tool works by calling Slack before that 30-minute window closes.
          </p>
          <p className="mb-6 text-lg text-text-700">
            A 15-minute cadence clears that bar comfortably. A 5-minute cadence
            simply leaves more headroom: if one call fails because of a network
            blip or a brief Slack API hiccup, there are five more attempts
            before the timer could ever expire, instead of one. Neither will
            leave you grey in normal operation — the shorter interval is just
            more forgiving of the occasional failure.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<Clock className="h-10 w-10" />}
              title="5-minute refresh"
              description="Slackactivity ticks every 5 minutes during your configured hours, giving six chances to succeed inside Slack's 30-minute idle window."
            />
            <FeatureCard
              icon={<Server className="h-10 w-10" />}
              title="Runs on a server"
              description="The presence call comes from our infrastructure, not your laptop, so a closed lid, a sleeping machine or a dead battery changes nothing."
            />
          </div>
        </Section>

        <Section variant="subtle">
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Where each one fits
          </h2>
          <p className="mb-6 text-lg text-text-700">
            To be fair to Presence Scheduler: it is a focused, well-established
            tool that solves the same core problem, it distinguishes presence
            from status clearly on its own site, and its optional Chrome
            extension is a reasonable belt-and-braces option for people who want
            a second mechanism running in the browser as well.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<DollarSign className="h-10 w-10" />}
              title="Choose Slackactivity if price matters"
              description="It is free forever with no trial clock and no card on file. For a tool that quietly runs in the background all year, a recurring subscription is the thing most people end up cancelling."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Choose Slackactivity for many workspaces"
              description="Unlimited Slack workspaces, each with its own hours, days and timezone — built for freelancers and consultants living in several client Slacks."
            />
            <FeatureCard
              icon={<Laptop className="h-10 w-10" />}
              title="Choose Presence Scheduler for the extension"
              description="If you specifically want a browser-side fallback that opens a hidden Slack tab in addition to the API calls, that is something Slackactivity deliberately does not do."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10" />}
              title="Either way, use the official API"
              description="Both tools go through Slack OAuth rather than simulating input. That is the meaningful line between a scheduling tool and a mouse jiggler."
            />
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Switching over
          </h2>
          <ol className="space-y-4 text-lg text-text-700">
            <li>
              <strong className="text-text-900">1. Sign in with Slack.</strong>{" "}
              Go to <a href="/signin" className="underline text-text-900">the
              sign-in page</a> and click Continue with Slack. There is no
              separate account to create — connecting Slack is the sign-up.
            </li>
            <li>
              <strong className="text-text-900">2. Set your hours.</strong> Pick
              a start hour, an end hour, your working days and your timezone.
              Repeat per workspace if you have more than one. See{" "}
              <a
                href="/guides/schedule-slack-availability"
                className="underline text-text-900"
              >
                the scheduling guide
              </a>{" "}
              for the details.
            </li>
            <li>
              <strong className="text-text-900">
                3. Revoke the old app when you are happy.
              </strong>{" "}
              In Slack, open your workspace settings and remove the previous
              tool so only one service is managing your presence.
            </li>
          </ol>
          <p className="mt-6 text-lg text-text-700">
            If you are still weighing up options generally, the{" "}
            <a href="/compare" className="underline text-text-900">
              comparison hub
            </a>{" "}
            covers every tool in this category, and{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>{" "}
            explains the underlying behaviour all of them are working around.
          </p>
        </Section>

        <Section variant="highlight">
          <h2 className="mb-8 text-3xl font-bold text-text-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Section>

        <CTASection
          title="Same job, no subscription"
          description="Set your hours once and Slackactivity keeps your Slack presence green — unlimited workspaces, free forever."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Compare all tools", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
