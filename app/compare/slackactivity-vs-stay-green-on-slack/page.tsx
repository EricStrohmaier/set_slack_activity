import { Metadata } from "next";
import {
  DollarSign,
  Users,
  Server,
  Shield,
  Clock,
  Calendar,
  Briefcase,
  Moon,
  CheckCircle,
  XCircle,
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
  title: "Stay Green on Slack Alternative | Slackactivity",
  description:
    "Looking for a Stay Green on Slack alternative? Slackactivity is a free-forever cloud tool that keeps your Slack presence green across unlimited workspaces. Full comparison.",
  keywords: [
    "stay green on slack alternative",
    "slackactivity vs stay green on slack",
    "free slack presence tool",
    "keep slack status green",
    "slack active status automation",
    "unlimited slack workspaces presence",
  ],
  alternates: {
    canonical:
      "https://slackactivity.com/compare/slackactivity-vs-stay-green-on-slack",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Compare", url: "https://slackactivity.com/compare" },
  {
    name: "Slackactivity vs Stay Green on Slack",
    url: "https://slackactivity.com/compare/slackactivity-vs-stay-green-on-slack",
  },
];

const faqs = [
  {
    question: "What is the best free Stay Green on Slack alternative?",
    answer:
      "Slackactivity. It is a cloud-hosted Slack presence tool that refreshes your status every 5 minutes through the official Slack Web API during your configured work hours, and it is 100% free forever - no credit card, no trial period, no paid tier. Stay Green on Slack is a paid subscription at $3.99 per month or $29.99 per year at the time of writing, after a 14-day trial.",
  },
  {
    question: "How much does Stay Green on Slack cost?",
    answer:
      "At the time of writing, Stay Green on Slack lists one plan billed either monthly at $3.99 or yearly at $29.99 (about $2.49 per month), with a 14-day free trial that does not require a credit card. Check their pricing page for current numbers. Slackactivity has no paid plan at any price - it is free forever.",
  },
  {
    question: "Do I need a Chrome extension to use Slackactivity?",
    answer:
      "No. Slackactivity connects entirely through Slack's own OAuth screen in your browser. You click Continue with Slack, approve a minimal set of scopes, and you are done. Stay Green on Slack sets up through a Chrome extension that reads your workspace automatically, which is fast but ties the connection step to Chrome.",
  },
  {
    question: "How many Slack workspaces can I connect?",
    answer:
      "Slackactivity supports unlimited Slack workspaces on the free plan, each with its own start hour, end hour, days of week and timezone. Stay Green on Slack does not publish a workspace limit on its pricing page at the time of writing, so ask them directly if you are in many client Slacks.",
  },
  {
    question: "Can Slackactivity read my Slack messages?",
    answer:
      "No. Slackactivity requests a minimal OAuth scope set that covers presence and profile writes only. It cannot read messages, files, or channels, and it never sees your Slack password. Everything runs server-side against the documented Slack Web API, so there is nothing installed on your laptop for IT to flag.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slackactivity vs Stay Green on Slack: Free Forever vs Subscription",
    "Both keep your Slack dot green from the cloud. The deciding factors are price and workspace limits - here is an honest, feature-by-feature comparison.",
    "2026-08-10",
    "2026-08-10"
  ),
];

const tableRows: { label: string; sa: string; sg: string }[] = [
  { label: "Price", sa: "Free forever - $0", sg: "$3.99/mo or $29.99/yr*" },
  { label: "Free trial", sa: "Not needed - it is just free", sg: "14 days, no card required*" },
  { label: "Credit card to start", sa: "Never", sg: "Not for the trial*" },
  { label: "Where it runs", sa: "Cloud, 5-minute cron", sg: "Cloud, their servers" },
  { label: "Works with laptop closed", sa: "Yes", sg: "Yes" },
  { label: "How you connect", sa: "Slack OAuth in your browser", sg: "Chrome extension" },
  { label: "Slack workspaces", sa: "Unlimited", sg: "No published limit*" },
  { label: "Per-workspace schedules", sa: "Yes - hours, days, timezone each", sg: "Scheduling with timezone support" },
  { label: "Vacation mode", sa: "Yes, one toggle", sg: "Not documented publicly*" },
  { label: "Reads your messages", sa: "No - minimal scopes", sg: "Not documented publicly*" },
  { label: "Software on your machine", sa: "None", sg: "Chrome extension for setup" },
];

export default function SlackactivityVsStayGreenOnSlackPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slackactivity vs Stay Green on Slack
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Both tools keep your Slack dot green from the cloud, so neither one
            needs software running on your laptop. The deciding factors are
            price and workspace count: Slackactivity is 100% free forever with
            unlimited Slack workspaces, while Stay Green on Slack is a paid
            subscription - $3.99 per month or $29.99 per year at the time of
            writing - after a 14-day trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Start Free - No Card Ever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
        </header>

        {/* Common ground */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Both Tools Get Right
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack&apos;s presence rules are the reason either product exists.
            The desktop app flips you to away after 30 minutes with no clicks or
            keystrokes inside Slack itself - a long code review, a Zoom call, or
            a document in another window all look like idling. Mobile is
            stricter still: background the app and you go gray almost
            immediately. Slack offers no setting to change that timeout on any
            plan, free or paid. That is documented in more detail in our guide
            on{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>
            .
          </p>
          <p className="text-lg text-text-700 mb-6">
            Slackactivity and Stay Green on Slack both answer that the same
            sensible way - server-side. Neither is a mouse jiggler, neither
            needs your machine awake, and neither burns your battery keeping a
            script alive. Both let you define working hours with day-of-week and
            timezone control so you are not showing green at 3am.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Cloud, not your laptop"
              description="Both products run on remote servers. Close the lid, kill the tab, board a flight - your presence keeps refreshing without a local process for IT to notice."
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Schedules and timezones"
              description="Both let you pick the hours and days you should look online, in your own timezone, and go quiet outside that window instead of running 24/7."
            />
          </div>
        </Section>

        {/* Comparison table */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Side-by-Side Comparison
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Rows marked with an asterisk come from Stay Green on Slack&apos;s
            public homepage and pricing page at the time of writing. Where they
            do not publish a detail, we say so rather than guess.
          </p>
          <div className="overflow-x-auto border border-text-200 rounded-lg">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-background-100">
                  <th className="p-4 font-semibold text-text-900 border-b border-text-200">
                    Feature
                  </th>
                  <th className="p-4 font-semibold text-text-900 border-b border-text-200">
                    Slackactivity
                  </th>
                  <th className="p-4 font-semibold text-text-900 border-b border-text-200">
                    Stay Green on Slack
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.label} className="align-top">
                    <td className="p-4 border-b border-text-200 font-medium text-text-900">
                      {row.label}
                    </td>
                    <td className="p-4 border-b border-text-200 text-text-700">
                      {row.sa}
                    </td>
                    <td className="p-4 border-b border-text-200 text-text-700">
                      {row.sg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-base text-text-600 mt-4">
            Pricing and feature claims for Stay Green on Slack were read from
            staygreenonslack.com on 10 August 2026 and may have changed since.
            Verify on their site before you decide.
          </p>
        </Section>

        {/* The real differences */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Three Differences That Actually Decide It
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="1. Price: $0 vs a subscription"
              description="Slackactivity is free forever. There is no paid tier to graduate into, no trial clock, and no card on file. Stay Green on Slack costs $3.99 monthly or $29.99 yearly at the time of writing after a 14-day trial."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="2. Unlimited workspaces"
              description="Slackactivity states plainly that you can connect as many Slack workspaces as you want, at no cost, each with its own schedule. Stay Green on Slack does not publish a workspace limit either way."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="3. How you connect"
              description="Slackactivity uses Slack's own OAuth consent screen and a minimal scope set that cannot read messages, files, or channels. Stay Green on Slack connects through a Chrome extension that detects your workspace for you."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Bonus: vacation mode"
              description="Slackactivity has a single toggle that pauses everything while you are off - no editing schedules, no disconnecting workspaces, no forgetting to turn it back on afterwards."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            On the connection step, credit where it is due: a Chrome extension
            that reads your workspace automatically is a genuinely slick
            30-second onboarding, and Stay Green on Slack publishes its price
            openly instead of hiding behind a &quot;contact us&quot; form. If
            you live in Chrome and one workspace is all you need, it is a
            perfectly reasonable product.
          </p>
          <p className="text-lg text-text-700">
            The trade-off is that an extension is a browser-tied setup step and
            a paid subscription is a recurring line item. Slackactivity&apos;s
            OAuth flow works from any browser, on any machine, and the answer to
            &quot;what does it cost after the trial?&quot; is that there is no
            trial and it costs nothing - free forever, permanently.
          </p>
        </Section>

        {/* Freelancers angle */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why Unlimited Workspaces Matters More Than You Think
          </h2>
          <p className="text-lg text-text-700 mb-6">
            If you have exactly one job and one Slack, workspace limits are an
            abstraction. If you are a freelancer, contractor, agency lead, or
            fractional operator, they are the whole ballgame. It is completely
            normal to sit in four to eight client Slacks at once - and every one
            of those clients judges responsiveness partly by a colored dot they
            glance at before deciding whether to message you.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Those workspaces rarely share a schedule. A client in Berlin expects
            you 09:00-13:00 CET on Tuesdays and Thursdays; a client in Austin
            expects afternoons CST; your own agency Slack should look alive
            Monday to Friday. Slackactivity stores start hour, end hour, days of
            week, and timezone per workspace, so each client sees a green dot
            during the hours you actually sold them and a gray one outside it -
            which is more honest than blanket 24/7 green, and far more useful
            than one global schedule stretched across every timezone you serve.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Briefcase className="w-10 h-10" />}
              title="Per-client hours"
              description="Each workspace gets its own days, hours, and timezone - so a Tuesday/Thursday retainer does not glow green on a Friday you never billed for."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="One dashboard, one login"
              description="Every connected workspace sits on a single screen with its schedule and current state, instead of one browser profile or one subscription per client."
            />
          </div>
          <p className="text-lg text-text-700">
            Read the full breakdown on our{" "}
            <a
              href="/use-cases/freelancers-consultants"
              className="underline text-text-900"
            >
              freelancers and consultants page
            </a>
            , or see the same problem from an employee&apos;s angle on the{" "}
            <a href="/use-cases/remote-workers" className="underline text-text-900">
              remote workers page
            </a>
            . On a per-workspace subscription model, eight clients could mean
            eight recurring charges. On Slackactivity, eight clients means $0
            per month, because every plan is the free plan.
          </p>
        </Section>

        {/* How it works / switching */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How Slackactivity Works, In Plain Terms
          </h2>
          <ol className="space-y-6 text-text-700">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">1.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Sign in with Slack
                </strong>
                <p>
                  Go to{" "}
                  <a href="/signin" className="underline text-text-900">
                    /signin
                  </a>{" "}
                  and click &quot;Continue with Slack&quot;. Slack&apos;s own
                  consent screen shows you the exact scopes requested - presence
                  and profile writes, nothing that can read messages, files, or
                  channels.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">2.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Set hours per workspace
                </strong>
                <p>
                  Choose a start hour, end hour, days of the week, and timezone
                  for each workspace you connect. Repeat for as many workspaces
                  as you have - there is no cap and no upsell at workspace two.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">3.</span>
              <div>
                <strong className="text-lg text-text-900">
                  A cron job does the rest
                </strong>
                <p>
                  Every 5 minutes our servers call the official Slack Web API
                  method{" "}
                  <code className="text-text-900">users.setPresence</code> for
                  each workspace inside its window. Your laptop can be closed,
                  asleep, in a bag, or switched off entirely. See{" "}
                  <a href="/how-it-works" className="underline text-text-900">
                    how it works
                  </a>{" "}
                  or the{" "}
                  <a
                    href="/solutions/slack-auto-away-prevention"
                    className="underline text-text-900"
                  >
                    auto-away prevention overview
                  </a>
                  .
                </p>
              </div>
            </li>
          </ol>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="What it does"
              description="Sets your presence to active on a 5-minute cadence during your hours, across unlimited workspaces, with a vacation toggle for time off."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="What it cannot do"
              description="Read messages, open files, browse channels, post on your behalf, or see your password. The OAuth scopes simply do not allow it."
            />
          </div>
        </Section>

        {/* FAQ */}
        <Section variant="highlight">
          <h2 className="text-3xl font-bold mb-8 text-text-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Section>

        {/* Closing */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Which One Should You Pick?
          </h2>
          <p className="text-lg text-text-700 mb-6">
            If you want a polished single-workspace setup inside Chrome and a
            subscription does not bother you, Stay Green on Slack does the job
            and prices itself openly. If you would rather not pay for presence
            at all, or you juggle several Slacks with different hours,
            Slackactivity is the straightforward pick: the same cloud approach,
            the official Slack API, unlimited workspaces, per-workspace
            schedules, vacation mode - and free forever, with no card, no trial
            countdown, and no paid tier waiting at the end.
          </p>
          <p className="text-lg text-text-700">
            Comparing other options too? Browse the rest of our{" "}
            <a href="/compare" className="underline text-text-900">
              comparison pages
            </a>{" "}
            or the{" "}
            <a href="/guides" className="underline text-text-900">
              guides library
            </a>{" "}
            for the mechanics behind Slack presence.
          </p>
        </Section>

        <CTASection
          title="Free Forever. Unlimited Workspaces."
          description="Connect Slack, set your hours, and stop thinking about the green dot. No credit card, no trial, no paid plan - ever."
          primaryCTA={{ text: "Continue with Slack - Free", href: "/signin" }}
          secondaryCTA={{ text: "How It Works", href: "/how-it-works" }}
        />
      </SEOPageLayout>
    </>
  );
}
