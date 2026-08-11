import { Metadata } from "next";
import {
  DollarSign,
  Globe,
  Server,
  Shield,
  Moon,
  Users,
  Calendar,
  Briefcase,
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
  title: "Slackactivity vs Idle Pilot: Honest Comparison",
  description:
    "Slackactivity is free forever with unlimited Slack workspaces. Idle Pilot is a paid subscription that also covers Microsoft Teams. Here is the honest head-to-head comparison.",
  keywords: [
    "idle pilot alternative",
    "slackactivity vs idle pilot",
    "idle pilot review",
    "free idle pilot alternative",
    "slack presence tool comparison",
    "keep slack active free",
  ],
  alternates: {
    canonical: "https://slackactivity.com/compare/slackactivity-vs-idle-pilot",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Compare", url: "https://slackactivity.com/compare" },
  {
    name: "Slackactivity vs Idle Pilot",
    url: "https://slackactivity.com/compare/slackactivity-vs-idle-pilot",
  },
];

const faqs = [
  {
    question: "Is Slackactivity really free, or is there a paid tier later?",
    answer:
      "It is free forever. There is no paid plan, no trial countdown, no credit card at sign-up and no feature locked behind an upgrade. Unlimited workspaces, per-workspace schedules and vacation mode are all included at no cost.",
  },
  {
    question: "How much does Idle Pilot cost?",
    answer:
      "At the time of writing, Idle Pilot lists a single Freedom Pass plan at $9 per month billed monthly, or $60 per year (about $5 per month) billed annually, with a 7-day free trial that does not require a credit card. Check idlepilot.com for current pricing.",
  },
  {
    question: "Does Slackactivity work with Microsoft Teams?",
    answer:
      "No. Slackactivity is Slack-only by design. If you need Microsoft Teams presence, Idle Pilot supports Teams and is the better fit for you. If your work happens in Slack, Slackactivity covers it for free.",
  },
  {
    question: "Can I connect more than one Slack workspace?",
    answer:
      "With Slackactivity, yes - unlimited workspaces on one dashboard, each with its own work hours, days and timezone. Idle Pilot's Freedom Pass is documented as one connected platform at a time, so multiple Slack workspaces are not its use case.",
  },
  {
    question: "Do either of these tools read my Slack messages?",
    answer:
      "Slackactivity requests a minimal OAuth scope that only lets it set your presence - it cannot read messages, files or channels. Idle Pilot describes its access as presence-only but does not publish its OAuth scopes, so ask them directly if that matters to you.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slackactivity vs Idle Pilot: An Honest Head-to-Head Comparison",
    "Slackactivity is free forever with unlimited Slack workspaces. Idle Pilot is a paid subscription that also covers Microsoft Teams. Here is the honest comparison, feature by feature.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function SlackactivityVsIdlePilotPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slackactivity vs Idle Pilot: An Honest Comparison
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Slackactivity is free forever and supports unlimited Slack
            workspaces; Idle Pilot is a paid subscription that covers Slack{" "}
            <em>or</em> Microsoft Teams, one connected platform at a time. If
            Slack is where your team lives, Slackactivity does the job at zero
            cost. If you need Microsoft Teams presence, Idle Pilot is the right
            tool and we&apos;ll happily point you there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Start Free Forever - No Card
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
        </header>

        {/* Comparison table */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Feature Comparison at a Glance
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Idle Pilot pricing and feature details below were taken from their
            public pricing and features pages at the time of writing. Prices
            change - verify before you buy.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-text-200 text-left text-text-700">
              <thead>
                <tr className="bg-background-100">
                  <th className="p-3 border border-text-200 text-text-900">
                    Feature
                  </th>
                  <th className="p-3 border border-text-200 text-text-900">
                    Slackactivity
                  </th>
                  <th className="p-3 border border-text-200 text-text-900">
                    Idle Pilot
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-text-200 font-medium text-text-900">
                    Price
                  </td>
                  <td className="p-3 border border-text-200">
                    Free forever. No card, no trial clock, no paid tier.
                  </td>
                  <td className="p-3 border border-text-200">
                    $9/month, or $60/year (about $5/month) billed annually.
                    7-day free trial, no card required.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-text-200 font-medium text-text-900">
                    Slack support
                  </td>
                  <td className="p-3 border border-text-200">Yes</td>
                  <td className="p-3 border border-text-200">Yes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-text-200 font-medium text-text-900">
                    Microsoft Teams support
                  </td>
                  <td className="p-3 border border-text-200">
                    No - Slack only
                  </td>
                  <td className="p-3 border border-text-200">
                    Yes (one platform connected at a time)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-text-200 font-medium text-text-900">
                    Works with the laptop closed
                  </td>
                  <td className="p-3 border border-text-200">
                    Yes - cloud cron every 5 minutes
                  </td>
                  <td className="p-3 border border-text-200">
                    Yes - runs from their cloud servers
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-text-200 font-medium text-text-900">
                    Unlimited workspaces
                  </td>
                  <td className="p-3 border border-text-200">
                    Yes - unlimited, one dashboard
                  </td>
                  <td className="p-3 border border-text-200">
                    No - one connected platform at a time
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-text-200 font-medium text-text-900">
                    Per-workspace schedules
                  </td>
                  <td className="p-3 border border-text-200">
                    Yes - start hour, end hour, days and timezone per workspace
                  </td>
                  <td className="p-3 border border-text-200">
                    Per-day schedules and lunch breaks for the one connected
                    account
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-text-200 font-medium text-text-900">
                    Official Slack Web API
                  </td>
                  <td className="p-3 border border-text-200">
                    Yes - Slack OAuth and users.setPresence
                  </td>
                  <td className="p-3 border border-text-200">
                    Not documented publicly; setup is fastest via a Chrome
                    extension
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-text-200 font-medium text-text-900">
                    Install required
                  </td>
                  <td className="p-3 border border-text-200">
                    None - one OAuth click in the browser
                  </td>
                  <td className="p-3 border border-text-200">
                    Optional Chrome extension for the quick setup path; manual
                    flow for other browsers
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-text-200 font-medium text-text-900">
                    Vacation mode
                  </td>
                  <td className="p-3 border border-text-200">Yes</td>
                  <td className="p-3 border border-text-200">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Where they agree */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Both Tools Get Right
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Both products exist because of the same Slack behaviour: the desktop
            app flips your dot to gray after 30 minutes with no interaction
            inside Slack itself, and the mobile app goes away almost the instant
            you background it. Slack offers no setting to lengthen or disable
            that timeout on any plan - free, Pro, Business+ or Enterprise Grid.
            We explain the mechanics in{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>
            .
          </p>
          <p className="text-lg text-text-700 mb-6">
            Both Slackactivity and Idle Pilot solve it the same sensible way:
            server-side. Neither one is a mouse jiggler, and neither depends on
            your machine staying awake. That is the important part. A jiggler or
            a caffeinate script dies the moment your laptop lid closes or your
            battery runs out, and simulated input is detectable by endpoint
            monitoring software. Cloud presence refreshes are not. Both tools
            also handle timezones properly and both offer a vacation mode so
            your status does not sit green through a week in Portugal.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Cloud, not your device"
              description="Both run presence from their own servers, so closing the laptop, switching machines or going offline doesn't break your status."
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Timezone-aware schedules"
              description="Both let you define working hours and days rather than staying green 24/7, which is what makes the result look natural instead of suspicious."
            />
          </div>
        </Section>

        {/* Where Slackactivity wins */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Where Slackactivity Comes Out Ahead
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="Free forever, genuinely"
              description="No credit card, no trial that expires, no paid tier waiting behind a feature. Every capability on this page costs nothing, permanently. Idle Pilot is $9/month or $60/year at the time of writing."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Unlimited Slack workspaces"
              description="Connect your employer's workspace, a client's, a contractor community and a side project - all on one dashboard, each with its own hours. Idle Pilot documents one connected platform at a time."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Official Slack API, minimal scope"
              description="Slackactivity authorises through standard Slack OAuth and calls users.setPresence. The scope requested cannot read your messages, files or channels - it isn't technically able to."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Nothing to install"
              description="No desktop agent, no browser extension, no background process. Go to /signin, click Continue with Slack, set your hours. That's the whole setup."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            The multi-workspace difference is bigger than it sounds. Plenty of
            people are in three or four Slacks: the day job, a client, an
            alumni community, an open-source project. With a one-account tool
            you either pick a favourite or pay again. Slackactivity treats every
            workspace as its own row with its own start hour, end hour, days of
            the week and timezone - useful if you contract for a European client
            in the morning and a US team in the afternoon. See{" "}
            <a href="/use-cases/remote-workers" className="underline text-text-900">
              how remote workers use it
            </a>{" "}
            for real setups.
          </p>
          <p className="text-lg text-text-700">
            The transparency point matters too. Because Slackactivity uses
            Slack&apos;s own OAuth flow, you can see exactly which permissions
            you granted in Slack&apos;s app management screen, and revoke them
            there in one click without talking to us. There is no session token
            being captured, and nothing running on your machine to uninstall.
          </p>
        </Section>

        {/* Where Idle Pilot wins */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Where Idle Pilot Is the Better Choice
          </h2>
          <p className="text-lg text-text-700 mb-6">
            We are not going to pretend Idle Pilot has no advantages. It has a
            clear one, and for some readers it is decisive.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Briefcase className="w-10 h-10" />}
              title="Microsoft Teams support"
              description="Idle Pilot handles Teams presence as well as Slack. Slackactivity does not support Teams at all. If your company runs on Teams, Idle Pilot is the tool to use - go get it."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Lunch break windows"
              description="Idle Pilot lets you carve a lunch break out of the middle of the working day, so your presence dips and returns. It's a nice touch if your team watches that closely."
            />
          </div>
          <p className="text-lg text-text-700">
            Idle Pilot also advertises an activity history view and an instant
            off switch. If you are a Teams user, or you want a paid product with
            a support contract behind it, that is a perfectly reasonable
            purchase. Our pitch is narrower on purpose: Slack, done properly,
            for free, across as many workspaces as you have.
          </p>
        </Section>

        {/* How Slackactivity works */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How Slackactivity Actually Keeps You Green
          </h2>
          <p className="text-lg text-text-700 mb-6">
            A cron job on our servers wakes up every 5 minutes. For each
            workspace you have connected, it checks whether the current time
            falls inside the work hours and days you configured for that
            workspace, in that workspace&apos;s timezone. If it does, it calls
            Slack&apos;s <code>users.setPresence</code> endpoint to keep you
            active. If it does not - it is a Saturday, it is 9pm, you turned on
            vacation mode - it does nothing and Slack&apos;s normal behaviour
            takes over.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Because that loop lives in the cloud, none of it depends on your
            hardware. Lid closed, machine asleep, laptop in a bag on a train,
            corporate VPN dropped: your presence refresh still fires. That is
            the same architectural choice Idle Pilot made, and it is the right
            one - see our{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              auto-away prevention guide
            </a>{" "}
            for why device-side tricks keep failing.
          </p>
          <p className="text-lg text-text-700">
            Setup is one screen. Head to{" "}
            <a href="/signin" className="underline text-text-900">
              /signin
            </a>
            , click <strong>Continue with Slack</strong>, approve the scope, and
            pick your hours. Repeat for each additional workspace. No card is
            requested at any point, because there is nothing to charge for.
          </p>
        </Section>

        {/* Decision */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Which One Should You Pick?
          </h2>
          <ul className="space-y-4 text-lg text-text-700">
            <li>
              <strong className="text-text-900">
                You use Microsoft Teams:
              </strong>{" "}
              choose Idle Pilot. Slackactivity cannot help you.
            </li>
            <li>
              <strong className="text-text-900">
                You use Slack and one workspace:
              </strong>{" "}
              Slackactivity does everything you need and costs nothing, forever.
              Idle Pilot&apos;s lunch-break window is the main thing you would
              be paying for.
            </li>
            <li>
              <strong className="text-text-900">
                You use several Slack workspaces:
              </strong>{" "}
              Slackactivity, clearly. Unlimited workspaces with independent
              schedules is not something a one-account tool can match.
            </li>
            <li>
              <strong className="text-text-900">
                You care about OAuth scopes and auditability:
              </strong>{" "}
              Slackactivity uses the official Slack API with a minimal,
              presence-only scope you can review and revoke inside Slack.
            </li>
            <li>
              <strong className="text-text-900">
                You want to try both:
              </strong>{" "}
              start with the free one. Slackactivity takes about 60 seconds to
              set up and there is nothing to cancel if you move on. Browse other{" "}
              <a href="/compare" className="underline text-text-900">
                head-to-head comparisons
              </a>{" "}
              or the full{" "}
              <a href="/guides" className="underline text-text-900">
                guide library
              </a>
              .
            </li>
          </ul>
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
          title="Try the Free One First"
          description="Slackactivity keeps your Slack presence green during your work hours across unlimited workspaces - free forever, no credit card, nothing to install."
          primaryCTA={{ text: "Continue with Slack - Free", href: "/signin" }}
          secondaryCTA={{ text: "How It Works", href: "/how-it-works" }}
        />
      </SEOPageLayout>
    </>
  );
}
