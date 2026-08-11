import { Metadata } from "next";
import {
  BarChart3,
  CheckCircle,
  Clock,
  Globe,
  Lock,
  Moon,
  Server,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import {
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateSoftwareApplicationStructuredData,
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
  title: "Features — Slack Presence Scheduling, Free Forever",
  description:
    "Everything Slackactivity does: per-workspace work hours, unlimited Slack workspaces, a 5-minute cloud refresh on the official Slack API, activity history, and instant pause. Free forever.",
  keywords: [
    "slack status automation features",
    "slack presence scheduler",
    "slack working hours scheduler",
    "slack status tool features",
    "unlimited slack workspaces",
    "slack presence api",
  ],
  alternates: { canonical: "https://slackactivity.com/features" },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Features", url: "https://slackactivity.com/features" },
];

const faqs = [
  {
    question: "How many Slack workspaces can I connect?",
    answer:
      "As many as you like. There is no per-workspace charge and no cap, because there is no paid tier at all. Each workspace gets its own start hour, end hour, working days and timezone, so an employer Slack and three client Slacks can run on four completely different schedules.",
  },
  {
    question: "How often does Slackactivity refresh my presence?",
    answer:
      "Every 5 minutes during the hours you configured. Slack marks you away after 30 minutes without interaction, so a 5-minute cycle leaves six chances to succeed inside every idle window — a single failed call never costs you the green dot.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. There is no desktop app, no browser extension and no script to run. You authorise Slackactivity once through Slack's own OAuth screen and the scheduler runs on our servers from then on. That also means it keeps working when your laptop is closed, asleep or out of battery.",
  },
  {
    question: "Can I set different hours for different days?",
    answer:
      "You choose which days of the week are working days, and a start and end hour that applies to them. Overnight windows work too — set 22:00 to 06:00 for a night shift and the post-midnight hours are correctly treated as part of the shift that began the previous evening.",
  },
  {
    question: "How do I pause it?",
    answer:
      "Each workspace has an Active toggle in the dashboard. Switch it off and that workspace stops being scheduled immediately, without disconnecting Slack or losing your settings. Switch it back on whenever you want. You can also delete a workspace entirely in one click.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateSoftwareApplicationStructuredData(),
];

export default function FeaturesPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold text-text-900 md:text-5xl">
            Set your hours once. Slackactivity keeps the dot green.
          </h1>
          <p className="mb-8 text-xl text-text-600">
            Slackactivity schedules your Slack presence: you define the hours
            you actually work, and a cloud scheduler keeps your availability dot
            green inside them and lets it go grey outside them. It runs on the
            official Slack API, installs nothing on your machine, supports
            unlimited workspaces, and is free forever.
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
            Work hours scheduling
          </h2>
          <p className="mb-6 text-lg text-text-700">
            The core of the product. Each connected workspace carries its own
            schedule, so your availability follows your real week rather than
            your keyboard.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Start and end hours"
              description="Pick the hour your day starts and the hour it ends. Inside that window your presence is refreshed; outside it, Slackactivity actively sets you away rather than just leaving you alone."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Working days"
              description="Toggle each day of the week independently. A Tuesday-and-Thursday retainer client gets a Tuesday-and-Thursday schedule, and nothing runs at the weekend unless you say so."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Timezone aware"
              description="Every schedule is anchored to a full IANA timezone, detected from your Slack profile when you connect. Daylight saving shifts are handled for you, and travel does not change your client-facing hours."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Overnight and night shifts"
              description="Set an end hour earlier than the start hour — 22:00 to 06:00 — and the post-midnight portion is correctly treated as part of the shift that started the night before."
            />
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Unlimited workspaces, one dashboard
          </h2>
          <p className="mb-6 text-lg text-text-700">
            Most people are in more than one Slack. Slackactivity treats that as
            the normal case rather than an upsell: connect an employer, three
            clients and a community, each with a different schedule, and manage
            them from a single page. There is no per-workspace fee because there
            is no fee.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="No workspace cap"
              description="Add as many as you use. Connecting a second workspace works exactly like the first — sign in with Slack from that workspace and it joins your dashboard."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Independent schedules"
              description="Hours, days and timezone are stored per workspace, so a Berlin employer and a San Francisco client never fight over one global setting."
            />
          </div>
          <p className="mt-6 text-lg text-text-700">
            Consultants juggling several client Slacks may want{" "}
            <a
              href="/guides/manage-multiple-slack-workspaces"
              className="underline text-text-900"
            >
              the multi-workspace guide
            </a>{" "}
            and{" "}
            <a
              href="/use-cases/agencies"
              className="underline text-text-900"
            >
              the agency use case
            </a>
            .
          </p>
        </Section>

        <Section variant="subtle">
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Cloud scheduling on the official Slack API
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs on our servers, not your device"
              description="A scheduler calls Slack every 5 minutes. Because the call originates server-side, a closed lid, a sleeping machine, a flat battery or a flight changes nothing."
            />
            <FeatureCard
              icon={<Lock className="w-10 h-10" />}
              title="Official users.setPresence"
              description="Slackactivity uses the endpoint Slack publishes for exactly this purpose, authorised by you through Slack's own OAuth screen. No input simulation, no automation of the Slack UI."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="5-minute refresh"
              description="Comfortably inside Slack's 30-minute idle window, so a single failed call — a network blip, a brief Slack incident — never costs you the green dot."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="Nothing to install"
              description="No desktop app, no browser extension, no script. That matters on managed work laptops where you may not be able to install software at all."
            />
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Activity history
          </h2>
          <p className="mb-6 text-lg text-text-700">
            Every scheduler run is recorded, so the dashboard can show you what
            actually happened rather than asking you to trust it.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<BarChart3 className="w-10 h-10" />}
              title="Daily active and away hours"
              description="A per-day breakdown of how long you were kept active versus away, charted over the last 30 days, 90 days or full year, in your workspace's own timezone."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Coverage and streaks"
              description="How much of your configured schedule was actually covered, plus a running streak of consecutive working days with activity — a quick way to spot a workspace whose token has quietly expired."
            />
          </div>
        </Section>

        <Section variant="subtle">
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Instant off
          </h2>
          <p className="text-lg text-text-700">
            Every workspace has an Active toggle. Switch it off and scheduling
            stops for that workspace immediately — your Slack connection and all
            your settings stay exactly as they were, so switching it back on is
            one click. If you would rather cut the connection entirely, deleting
            a workspace removes its token and its history in one action, and you
            can revoke Slackactivity from Slack&apos;s own app settings at any
            time.
          </p>
        </Section>

        <Section variant="highlight">
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            What Slackactivity does not do
          </h2>
          <p className="mb-6 text-lg text-text-700">
            Worth being straight about, because for some people one of these is
            the deciding factor:
          </p>
          <ul className="mb-6 space-y-3 text-lg text-text-700">
            <li className="flex items-start">
              <XCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
              <span>
                <strong className="text-text-900">Microsoft Teams.</strong>{" "}
                Slackactivity is Slack only. If you need Teams presence too,{" "}
                <a
                  href="/compare/slackactivity-vs-idle-pilot"
                  className="underline text-text-900"
                >
                  Idle Pilot covers both
                </a>{" "}
                and is the better fit.
              </span>
            </li>
            <li className="flex items-start">
              <XCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
              <span>
                <strong className="text-text-900">
                  Calendar-driven status text.
                </strong>{" "}
                Slackactivity manages your presence dot, not your emoji and
                status text. For &quot;In a meeting until 3pm&quot; pulled from
                your calendar, see{" "}
                <a
                  href="/compare/slackactivity-vs-status-calendar"
                  className="underline text-text-900"
                >
                  the Status Calendar comparison
                </a>{" "}
                — the two run happily side by side.
              </span>
            </li>
            <li className="flex items-start">
              <XCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
              <span>
                <strong className="text-text-900">
                  Mid-day breaks in a schedule.
                </strong>{" "}
                A schedule is one continuous window per day. There is no
                built-in lunch carve-out that drops you to away between 12:00
                and 13:00.
              </span>
            </li>
            <li className="flex items-start">
              <XCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
              <span>
                <strong className="text-text-900">
                  Date-range holiday scheduling.
                </strong>{" "}
                Pausing is the Active toggle, which you flip yourself. You
                cannot yet tell it &quot;I am away from the 3rd to the
                14th&quot; in advance.
              </span>
            </li>
          </ul>
          <p className="text-lg text-text-700">
            The full landscape, including where rivals genuinely do more, is on{" "}
            <a href="/compare" className="underline text-text-900">
              the comparison hub
            </a>
            .
          </p>
        </Section>

        <Section>
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Frequently asked questions
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
          title="Every feature, no paid tier"
          description="There is nothing locked behind an upgrade — unlimited workspaces, per-workspace schedules, activity history and all of it, free forever."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Security & privacy", href: "/security" }}
        />
      </SEOPageLayout>
    </>
  );
}
