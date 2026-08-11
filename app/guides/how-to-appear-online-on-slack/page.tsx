import { Metadata } from "next";
import {
  Clock,
  Smartphone,
  Laptop,
  MousePointer,
  Moon,
  Zap,
  Shield,
  Globe,
  Calendar,
  CheckCircle,
  XCircle,
  DollarSign,
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
  title: "How to Appear Online on Slack (Every Method, Ranked)",
  description:
    "Set yourself active manually, use a keep-awake tool, or automate it. A practical guide to appearing online on Slack, including Slack's 30-minute auto-away rule and the free fix.",
  keywords: [
    "how to appear online on slack",
    "how to stay active on slack",
    "appear active slack",
    "slack always active",
    "set yourself as active slack",
    "slack presence",
    "slack green dot",
  ],
  alternates: {
    canonical: "https://slackactivity.com/guides/how-to-appear-online-on-slack",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "How to Appear Online on Slack",
    url: "https://slackactivity.com/guides/how-to-appear-online-on-slack",
  },
];

const faqs = [
  {
    question: "How do I appear online on Slack?",
    answer:
      "Click your profile picture in the top-right of Slack and choose 'Set yourself as active'. That turns your dot green immediately, but it is not permanent: after 30 minutes with no interaction inside the Slack app, Slack sets you back to away. To stay green all day without clicking, use a cloud tool like Slackactivity, which refreshes your presence through Slack's official API every 5 minutes during your work hours - free forever.",
  },
  {
    question: "How long does 'set yourself as active' last on Slack?",
    answer:
      "Until your next 30 idle minutes. Slack's desktop auto-away timer is 30 minutes of no clicks or keystrokes inside the Slack app itself, and setting yourself active manually just resets that timer. Over an 8-hour day that is roughly 16 manual resets.",
  },
  {
    question: "Can I change Slack's 30-minute away timeout?",
    answer:
      "No. Slack does not expose any setting to lengthen or disable the auto-away timer - not on the free plan, not on Pro, Business+, or Enterprise Grid. The only supported control is manually flipping yourself between active and away.",
  },
  {
    question: "Why does Slack show me away on mobile so fast?",
    answer:
      "Mobile presence is far stricter than desktop. Slack's mobile apps report you as away almost immediately after you background the app or lock your phone, rather than waiting 30 minutes. If your phone is your only signed-in device, you will show away most of the day.",
  },
  {
    question: "Is there a free way to stay active on Slack all day?",
    answer:
      "Yes. Slackactivity is 100% free forever - no credit card, no trial, no paid tier. You sign in with Slack, set your work hours and timezone, and a cloud cron job refreshes your presence every 5 minutes using the official Slack Web API. It works with the laptop closed and supports unlimited workspaces.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "How to Appear Online on Slack (Every Method, Ranked)",
    "Set yourself active manually, use a keep-awake tool, or automate it. A practical guide to appearing online on Slack, including Slack's 30-minute auto-away rule and the free fix.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function HowToAppearOnlineOnSlackPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            How to Appear Online on Slack (Every Method, Ranked)
          </h1>
          <p className="text-xl text-text-600 mb-6">
            To appear online on Slack right now, click your profile picture in
            the top-right corner and choose &quot;Set yourself as active&quot; -
            your dot turns green instantly. The catch: that only lasts until
            your next 30 idle minutes, because Slack&apos;s desktop apps
            automatically flip you to away after 30 minutes without any clicks
            or keystrokes inside Slack itself.
          </p>
          <p className="text-lg text-text-600 mb-8">
            Below is every method that actually works - manual toggling,
            keep-awake utilities, mouse jigglers, and cloud automation - with
            honest notes on where each one breaks. Skip to the 3-step setup if
            you just want your status handled for you, free, forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Stay Green Automatically - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
        </header>

        {/* How Slack presence works */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            First, How Slack Decides You Are &quot;Online&quot;
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack&apos;s green dot is called <em>presence</em>, and it is not a
            measure of whether you are working. It is a measure of whether you
            have touched the Slack app recently. Four rules govern it:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="30 minutes on desktop"
              description="No clicks or keystrokes inside the Slack desktop or web app for 30 minutes and your dot turns gray. Working in your IDE, Figma, or a Zoom call does not count - Slack cannot see it."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Seconds on mobile"
              description="The mobile apps flip you to away almost immediately after you background Slack or lock your phone. There is no 30-minute grace period on a phone."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Sleep, lock, or disconnect = away"
              description="Close the laptop lid, let it sleep, or lose Wi-Fi and the desktop client stops reporting activity entirely. Your presence goes gray shortly after."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="No setting to change it"
              description="Slack offers no preference, admin control, or paid upgrade that lengthens or disables the 30-minute timeout. Free plan or Enterprise Grid, the behavior is identical."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            That last point is the one people get stuck on. If you have searched
            Slack&apos;s settings for an away-timer option, you did not miss it -
            it does not exist. For the full breakdown, see{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>
            .
          </p>
        </Section>

        {/* Method 1: manual */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Method 1: Set Yourself as Active Manually
          </h2>
          <p className="text-lg text-text-700 mb-6">
            This is Slack&apos;s only built-in control, and it takes about three
            seconds:
          </p>
          <ol className="space-y-4 text-text-700 mb-6">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">1.</span>
              <div>
                Click your <strong className="text-text-900">profile
                picture</strong> in the top-right corner of Slack (desktop, web,
                or mobile).
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">2.</span>
              <div>
                Choose{" "}
                <strong className="text-text-900">
                  &quot;Set yourself as active&quot;
                </strong>
                . If it already says &quot;Set yourself as away&quot;, you are
                currently showing as active.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">3.</span>
              <div>
                Your dot turns green immediately for everyone in the workspace.
              </div>
            </li>
          </ol>
          <p className="text-lg text-text-700 mb-4">
            <strong className="text-text-900">Where it breaks:</strong> the
            manual toggle does not pin you to active - it resets the 30-minute
            idle timer. Stop touching Slack for half an hour and you are gray
            again. Across a normal 9-to-5 that means roughly{" "}
            <strong className="text-text-900">16 manual resets a day</strong>,
            and you have to be at your machine to do every one of them. Miss the
            one during a long meeting and that is exactly when your manager
            checks.
          </p>
          <p className="text-lg text-text-700">
            It is also per-device and per-workspace. Signed into four
            workspaces? That is four menus, four clicks, sixteen times a day.
          </p>
        </Section>

        {/* Method 2: keep-awake and jigglers */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Method 2: Keep-Awake Tools, Mouse Jigglers, and Auto-Clickers
          </h2>
          <p className="text-lg text-text-700 mb-6">
            The popular DIY answers all try to fake human input on your machine.
            They are worth understanding, because two of the three do not do
            what people think they do.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Laptop className="w-10 h-10" />}
              title="Keep-awake utilities"
              description="caffeinate on macOS, Amphetamine, Caffeine on Windows, or a 'never sleep' power plan. These stop your display and disk from sleeping - but they generate zero input events, so Slack's idle timer keeps counting and you still go away."
            />
            <FeatureCard
              icon={<MousePointer className="w-10 h-10" />}
              title="Mouse jigglers and auto-clickers"
              description="Software jigglers, AutoHotkey scripts, or a USB dongle that nudges the cursor. These do reset the idle timer, but only while the machine is powered on, unlocked, and running - and a moving cursor blocks you from using the computer for anything else."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="The company-device problem"
              description="Managed laptops often restrict USB devices and unapproved software. Endpoint management can flag or block installed jigglers, which turns a status problem into an IT conversation you did not want."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="The closed-lid problem"
              description="Every local method dies the moment the laptop sleeps, shuts down, or the battery runs out. Step away for lunch with the lid closed and your green dot goes with you."
            />
          </div>
          <p className="text-lg text-text-700">
            To be fair: a jiggler is genuinely simple, works offline, and needs
            no account. If you only need to cover a 20-minute gap at your desk,
            it is fine. It just is not a solution for a whole workday. We
            compared the tradeoffs in detail on our{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternative
            </a>{" "}
            page, and covered the locked-screen case in{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              keeping Slack active with your computer locked
            </a>
            .
          </p>
        </Section>

        {/* Method 3: automation, 3 steps */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Method 3: Automate It - Set It Up in 3 Steps
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slackactivity solves the problem one layer up. Instead of faking
            input on your laptop, it runs in the cloud and calls Slack&apos;s
            official Web API (<code>users.setPresence</code>) on a 5-minute
            cron. Nothing is installed on your machine, so it does not care
            whether your laptop is open, closed, asleep, or switched off.
          </p>
          <ol className="space-y-6 text-text-700 mb-6">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3 text-lg">1.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Sign in with Slack
                </strong>
                <p>
                  Go to{" "}
                  <a href="/signin" className="underline text-text-900">
                    /signin
                  </a>{" "}
                  and click <strong>Continue with Slack</strong>. Standard
                  OAuth, no password to create. The scopes requested are minimal
                  - Slackactivity cannot read your messages, files, or channels.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3 text-lg">2.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Set your work hours, days, and timezone
                </strong>
                <p>
                  Pick a start hour, an end hour, and the days of the week you
                  want to appear online - per workspace, in your own timezone.
                  Outside those hours nothing runs, so you are not
                  suspiciously green at 3am.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3 text-lg">3.</span>
              <div>
                <strong className="text-lg text-text-900">
                  That is it - it refreshes every 5 minutes
                </strong>
                <p>
                  A cron job pings Slack every 5 minutes during your schedule,
                  well inside the 30-minute idle window, so the timer never
                  reaches zero. Add as many workspaces as you like and manage
                  them from one dashboard. Flip on vacation mode when you are
                  off.
                </p>
              </div>
            </li>
          </ol>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Official Slack API"
              description="Uses users.setPresence through Slack OAuth - no browser extension, no simulated input, nothing to install on a managed device."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Unlimited workspaces"
              description="Contractors and consultants can connect every workspace they belong to, each with its own hours and timezone, from a single dashboard."
            />
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="Free forever"
              description="No credit card, no trial countdown, no paid tier waiting behind a feature. Every feature described on this page costs nothing."
            />
          </div>
        </Section>

        {/* Comparison / which to pick */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Which Method Should You Use?
          </h2>
          <div className="space-y-5 text-lg text-text-700">
            <p>
              <strong className="text-text-900">
                Covering a 20-minute gap at your desk?
              </strong>{" "}
              Just click &quot;Set yourself as active&quot;. It is free,
              instant, and built in.
            </p>
            <p>
              <strong className="text-text-900">
                On a long call or deep-work block, machine on and unlocked?
              </strong>{" "}
              A jiggler will hold the line, as long as you do not need the
              cursor.
            </p>
            <p>
              <strong className="text-text-900">
                Want your status to reflect your actual working hours, every
                day, without thinking about it?
              </strong>{" "}
              Automation is the only option that survives a closed lid, a dead
              battery, a phone-only day, or four workspaces at once. That is
              what Slackactivity does - and it is free forever, so there is no
              cost calculation to run.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-text-700">
            <span className="inline-flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" /> Works with the laptop
              closed
            </span>
            <span className="inline-flex items-center">
              <Calendar className="w-5 h-5 mr-2" /> Respects your schedule and
              timezone
            </span>
            <span className="inline-flex items-center">
              <Shield className="w-5 h-5 mr-2" /> Cannot read your messages
            </span>
          </div>
          <p className="text-lg text-text-700 mt-6">
            More reading:{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              Slack auto-away prevention
            </a>
            ,{" "}
            <a
              href="/use-cases/remote-workers"
              className="underline text-text-900"
            >
              presence for remote workers
            </a>
            , or browse{" "}
            <a href="/guides" className="underline text-text-900">
              all our guides
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

        {/* CTA */}
        <CTASection
          title="Appear Online on Slack Without Thinking About It"
          description="Connect Slack, pick your hours, and stay green every workday. Unlimited workspaces, official Slack API, free forever - no credit card, ever."
          primaryCTA={{ text: "Continue with Slack - Free", href: "/signin" }}
          secondaryCTA={{ text: "Compare Alternatives", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
