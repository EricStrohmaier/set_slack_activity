import { Metadata } from "next";
import {
  CheckCircle,
  XCircle,
  DollarSign,
  Server,
  Shield,
  Laptop,
  Code,
  Globe,
  Clock,
  Lock,
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
  title: "Slack.green Alternative: Slackactivity vs Slack.green",
  description:
    "A fair Slackactivity vs Slack.green comparison: install-free cloud OAuth on a 5-minute cron versus a hosted service plus self-hosted CLI. Slackactivity is free forever.",
  keywords: [
    "slack.green alternative",
    "slack green vs",
    "slack green alternative",
    "slackactivity vs slack green",
    "free slack presence tool",
    "keep slack green without install",
    "slack presence cloud cron",
  ],
  alternates: {
    canonical: "https://slackactivity.com/compare/slackactivity-vs-slack-green",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Compare", url: "https://slackactivity.com/compare" },
  {
    name: "Slackactivity vs Slack.green",
    url: "https://slackactivity.com/compare/slackactivity-vs-slack-green",
  },
];

type Mark = "yes" | "no" | "info";

const comparisonRows: {
  feature: string;
  sa: string;
  saMark: Mark;
  sg: string;
  sgMark: Mark;
}[] = [
  {
    feature: "Price",
    sa: "Free forever. No credit card, no trial, no paid tier.",
    saMark: "yes",
    sg: "No public price list on the pages we checked at the time of writing. Sign-up buttons read “Stay Green for Free” and the pricing area says “Cancel anytime”.",
    sgMark: "info",
  },
  {
    feature: "Anything to install",
    sa: "Nothing. Sign in with Slack in a browser and you are done.",
    saMark: "yes",
    sg: "Nothing for the hosted service. The self-hosted CLI is installed and run on your own machine.",
    sgMark: "info",
  },
  {
    feature: "Works with the laptop closed or off",
    sa: "Yes. A server-side cron fires every 5 minutes regardless of your device.",
    saMark: "yes",
    sg: "Hosted service: yes, it advertises running on their servers 24/7. Self-hosted CLI: only while that machine is awake and the process is running.",
    sgMark: "info",
  },
  {
    feature: "How it connects to Slack",
    sa: "Official Slack OAuth app. You approve it from Slack, and you can revoke it from Slack.",
    saMark: "yes",
    sg: "Its homepage describes the hosted service as running “in the cloud using browser tokens”. The CLI keeps tokens on your machine.",
    sgMark: "info",
  },
  {
    feature: "Permissions requested",
    sa: "users:write to set presence and users:read for your display name. It cannot read messages, files, or channels.",
    saMark: "yes",
    sg: "Not published as a scope list on the pages we reviewed.",
    sgMark: "info",
  },
  {
    feature: "Number of Slack workspaces",
    sa: "Unlimited, all in one dashboard.",
    saMark: "yes",
    sg: "Multi-workspace support is advertised. No published cap either way.",
    sgMark: "info",
  },
  {
    feature: "Working hours control",
    sa: "Per workspace: start hour, end hour, days of the week, and timezone.",
    saMark: "yes",
    sg: "Custom schedules and a continuous mode are advertised.",
    sgMark: "yes",
  },
  {
    feature: "Vacation mode",
    sa: "Yes, pause a workspace without disconnecting it.",
    saMark: "yes",
    sg: "Not documented on the pages we reviewed.",
    sgMark: "info",
  },
  {
    feature: "Self-hosting",
    sa: "No. Slackactivity is a hosted service only.",
    saMark: "no",
    sg: "Yes. A self-hosted CLI is offered for people who want to hold their own token.",
    sgMark: "yes",
  },
];

const faqs = [
  {
    question: "What is the best free Slack.green alternative?",
    answer:
      "Slackactivity. It keeps your Slack presence green during your configured work hours by calling the official Slack Web API (users.setPresence) from a cloud cron every 5 minutes, it supports unlimited workspaces, and it is 100% free forever - no credit card, no trial, and no paid tier to upgrade to.",
  },
  {
    question: "Does Slackactivity require a browser extension or a CLI?",
    answer:
      "Neither. There is nothing to install. You go to slackactivity.com/signin, click Continue with Slack, approve the OAuth screen, and set your hours. Everything after that runs on our servers, so your laptop can be closed, asleep, or switched off.",
  },
  {
    question: "Why does a browser extension or a local CLI stop working?",
    answer:
      "Because it lives on your device. A browser extension only executes while that browser profile is open and the machine is awake, and a CLI only runs while its process is alive. Close the lid, reboot, or lose Wi-Fi and the loop stops. Slack then applies its normal 30-minute desktop idle timeout and flips you to away.",
  },
  {
    question: "Is a self-hosted CLI ever the better choice?",
    answer:
      "Yes, for some people. If your rule is that your Slack token must never leave hardware you control, a self-hosted CLI like the one Slack.green offers is a legitimately better fit than any hosted service, including ours. The trade-off is that you own the uptime: the machine has to stay awake and online for the whole workday.",
  },
  {
    question: "Can Slackactivity read my Slack messages?",
    answer:
      "No. The OAuth scopes it requests are users:write, which sets your presence, and users:read, which reads your account name so the dashboard can label the workspace. Those scopes give no access to messages, files, or channels, and you can revoke the app from your Slack settings at any time.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slack.green Alternative: Slackactivity vs Slack.green",
    "A fair, fact-checked comparison of Slackactivity and Slack.green - install-free cloud OAuth on a 5-minute cron versus a hosted service plus a self-hosted CLI.",
    "2026-08-10",
    "2026-08-10"
  ),
];

function MarkIcon({ mark }: { mark: Mark }) {
  if (mark === "yes") {
    return <CheckCircle className="w-5 h-5 inline-block mr-2 align-text-bottom" />;
  }
  if (mark === "no") {
    return <XCircle className="w-5 h-5 inline-block mr-2 align-text-bottom" />;
  }
  return null;
}

export default function SlackactivityVsSlackGreenPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack.green Alternative: Slackactivity vs Slack.green
          </h1>
          <p className="text-xl text-text-600 mb-6">
            Slackactivity is a free-forever Slack.green alternative that needs
            zero install: you connect with Slack&apos;s official OAuth flow and a
            cloud cron refreshes your presence every 5 minutes during your work
            hours. Slack.green offers a hosted service plus a self-hosted CLI, so
            the real decision is whether you want a pure cloud service you never
            install, or a command-line tool you run and maintain yourself.
          </p>
          <p className="text-lg text-text-700 mb-8">
            Below is a fair, fact-checked look at both, including the one thing
            Slack.green does that Slackactivity does not.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Try Slackactivity - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* At a glance */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Slackactivity Does Differently
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Both products solve the same annoyance: Slack&apos;s desktop client
            marks you away after 30 minutes of no interaction inside the Slack
            app, and Slack offers no setting on any plan - free or paid - to
            change that timeout. Where the two differ is in how the presence
            refresh is delivered, and what it costs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="Free Forever, Not Free For Now"
              description="Slackactivity has no paid tier. There is no trial clock, no card on file, and nothing to upgrade to. Unlimited workspaces are included because there is no plan to gate them behind."
            />
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs On A 5-Minute Cloud Cron"
              description="Your presence is refreshed server-side every five minutes inside your configured hours. Nothing runs on your laptop, so a closed lid, a reboot, or hotel Wi-Fi changes nothing."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Official Slack API, Minimal Scopes"
              description="It calls users.setPresence on the official Slack Web API through a Slack OAuth app, asking only for users:write and users:read. It cannot read messages, files, or channels."
            />
            <FeatureCard
              icon={<Laptop className="w-10 h-10" />}
              title="Nothing To Install Or Maintain"
              description="No extension, no daemon, no CLI, no Python environment, no config file. Sign in with Slack, pick your hours and days, close the tab."
            />
          </div>
        </Section>

        {/* Comparison table */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Slackactivity vs Slack.green: Side by Side
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Everything in the Slack.green column comes from its own public
            homepage and FAQ as they read at the time of writing. Where the site
            does not publish something, we say so rather than guessing.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border border-text-200 rounded-lg text-left">
              <thead>
                <tr className="bg-background-100">
                  <th className="p-4 font-semibold text-text-900 border-b border-text-200">
                    &nbsp;
                  </th>
                  <th className="p-4 font-semibold text-text-900 border-b border-text-200">
                    Slackactivity
                  </th>
                  <th className="p-4 font-semibold text-text-900 border-b border-text-200">
                    Slack.green
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="align-top">
                    <td className="p-4 font-medium text-text-900 border-b border-text-200">
                      {row.feature}
                    </td>
                    <td className="p-4 text-text-700 border-b border-text-200">
                      <MarkIcon mark={row.saMark} />
                      {row.sa}
                    </td>
                    <td className="p-4 text-text-700 border-b border-text-200">
                      <MarkIcon mark={row.sgMark} />
                      {row.sg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-600 mt-4">
            Pricing and feature details for Slack.green are described as they
            appeared on its public pages at the time of writing and may have
            changed since. Check its site before deciding.
          </p>
        </Section>

        {/* Device-resident vs server-side */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why Anything On Your Device Eventually Stops
          </h2>
          <p className="text-lg text-text-700 mb-6">
            This is the core architectural split, and it applies to every tool in
            this category - browser extensions, mouse jigglers, menu-bar apps,
            and self-hosted CLIs alike. If the thing that keeps you green lives on
            your machine, it inherits every interruption your machine has.
          </p>
          <ul className="space-y-4 text-text-700 mb-6">
            <li>
              <strong className="text-text-900">
                A browser extension only runs while the browser runs.
              </strong>{" "}
              Quit Chrome at 6pm, restart after an OS update, or let the profile
              go to sleep during a long meeting and the loop stops with it. Many
              extensions are also throttled by the browser once a tab has been
              backgrounded for a while, which is precisely when you needed it.
            </li>
            <li>
              <strong className="text-text-900">
                A CLI only runs while its process is alive.
              </strong>{" "}
              A self-hosted script is genuinely more robust than an extension,
              but it still needs a machine that is powered on, awake, online, and
              not mid-reboot. Suspend the laptop and the loop suspends too.
            </li>
            <li>
              <strong className="text-text-900">
                Slack&apos;s timers are unforgiving.
              </strong>{" "}
              The desktop client flips you to away after 30 idle minutes, and the
              mobile app flips you to away almost immediately once it is
              backgrounded. A gap of a single lunch break is enough to show a
              gray dot to your whole team.
            </li>
            <li>
              <strong className="text-text-900">A cron has no such gaps.</strong>{" "}
              Slackactivity&apos;s job runs every 5 minutes on a server whether
              your laptop is closed, asleep, in a bag, or switched off entirely.
              There is no local process to babysit.
            </li>
          </ul>
          <p className="text-lg text-text-700 mb-6">
            It is worth being precise about the numbers, because they decide how
            much slack you actually have. Slack&apos;s desktop client waits 30
            minutes of no interaction before switching your dot to away, and
            there is no preference, admin control, or paid-plan setting anywhere
            in Slack that changes it. The mobile app is stricter still: background
            it and you are typically away within seconds. That means a
            device-resident tool has to survive every gap in your day - not most
            of them - to look convincing. A 5-minute server-side interval clears
            that bar by a wide margin, and it clears it identically at 9am, at
            lunch, and at 4pm on a Friday when the laptop is already shut. The
            full mechanics are in our{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              Slack auto-away prevention guide
            </a>
            .
          </p>
          <p className="text-lg text-text-700">
            If you have already tried a jiggler or a keep-awake utility, the same
            logic is spelled out in our{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternative
            </a>{" "}
            comparison and our guide to{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              keeping Slack active while your computer is locked
            </a>
            .
          </p>
        </Section>

        {/* OAuth and access */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            OAuth Scopes, And What Slackactivity Can Actually See
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slackactivity connects through a Slack OAuth app. You see the consent
            screen inside Slack, you approve it there, and you can revoke it from
            your Slack settings whenever you like - no email to support, no
            account deletion required. The app requests two scopes and no more:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="users:write"
              description="The scope that lets the cron call users.setPresence and mark you as active. This is the entire mechanism - a documented, official Slack Web API method."
            />
            <FeatureCard
              icon={<Lock className="w-10 h-10" />}
              title="users:read"
              description="Reads your account name so the dashboard can label each connected workspace. It carries no ability to read messages, files, channels, or DMs."
            />
          </div>
          <p className="text-lg text-text-700">
            Slack.green&apos;s homepage describes its hosted service as running
            &quot;in the cloud using browser tokens,&quot; and its self-hosted CLI
            as keeping tokens on your own machine. Those are different trust
            models from an OAuth app, and which one you prefer is a genuine
            judgement call rather than a right answer - the practical difference
            is that a Slack OAuth grant appears in your Slack app settings with a
            visible scope list and a revoke button.
          </p>
        </Section>

        {/* Fair credit */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Where Slack.green Is The Better Pick
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Being honest about this is more useful than pretending otherwise:
            there is one real capability Slack.green has that Slackactivity does
            not, and it matters to a specific kind of user.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Code className="w-10 h-10" />}
              title="A Self-Hosted CLI"
              description="Slack.green publishes a command-line tool that runs on your own machine with tokens stored locally. Slackactivity has no self-hosted option at all - it is a hosted service, full stop."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Full Control Of Your Token"
              description="If your policy is that a Slack credential must never sit on someone else's infrastructure, self-hosting is the right architecture and you should pick it, even though it means you own the uptime."
            />
          </div>
          <p className="text-lg text-text-700">
            Pick the CLI if you are comfortable on a terminal, you have a machine
            or small server that genuinely stays awake all day, and you want the
            token under your own roof. Pick Slackactivity if you want the thing to
            work in two minutes, from any browser, with nothing installed and
            nothing to maintain - and you would rather not think about a hosting
            bill or a subscription, because there is neither.
          </p>
          <p className="text-lg text-text-700 mt-6">
            One more thing worth saying plainly, because it is unusual in this
            category: Slackactivity is not free as an acquisition tactic with a
            paywall waiting behind it. There is no paid tier, no seat count, no
            usage meter, and no feature held back for a plan that does not exist.
            Unlimited workspaces, per-workspace hours, timezones, and vacation
            mode are all simply included, and they stay included.
          </p>
        </Section>

        {/* Switching */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Switching Takes About Two Minutes
          </h2>
          <ol className="space-y-4 text-text-700 mb-6">
            <li>
              <strong className="text-text-900">1.</strong> Go to{" "}
              <a href="/signin" className="underline text-text-900">
                slackactivity.com/signin
              </a>{" "}
              and click Continue with Slack.
            </li>
            <li>
              <strong className="text-text-900">2.</strong> Approve the OAuth
              screen. You will see exactly two scopes listed.
            </li>
            <li>
              <strong className="text-text-900">3.</strong> Set the start hour,
              end hour, days of the week, and timezone for that workspace.
            </li>
            <li>
              <strong className="text-text-900">4.</strong> Repeat for as many
              workspaces as you have. There is no limit and no per-seat charge.
            </li>
            <li>
              <strong className="text-text-900">5.</strong> Uninstall whatever was
              running on your laptop. You will not need it again.
            </li>
          </ol>
          <p className="text-lg text-text-700">
            Going on leave? Flip vacation mode on for a workspace instead of
            disconnecting it. More background is in{" "}
            <a href="/how-it-works" className="underline text-text-900">
              how it works
            </a>
            , our{" "}
            <a href="/guides" className="underline text-text-900">
              guides library
            </a>
            , and the explainer on{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>
            . Remote teams in particular tend to hit this daily -{" "}
            <a href="/use-cases/remote-workers" className="underline text-text-900">
              see the remote worker use case
            </a>
            .
          </p>
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

        <CTASection
          title="Free Forever, With Nothing To Install"
          description="Connect Slack, set your hours, and stay green during your workday - unlimited workspaces, no credit card, no paid tier."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Compare All Tools", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
