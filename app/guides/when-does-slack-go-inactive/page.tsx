import { Metadata } from "next";
import {
  Clock,
  Smartphone,
  Moon,
  Laptop,
  MousePointer,
  CheckCircle,
  XCircle,
  Eye,
  Server,
  Calendar,
  Globe,
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
  title: "When Does Slack Go Inactive? The Exact Away Timers",
  description:
    "Slack goes inactive after 30 minutes of no interaction with the desktop app, and almost instantly on mobile once you background it. The exact rules, explained.",
  keywords: [
    "when does slack go inactive",
    "slack away timer",
    "how long until slack shows away",
    "slack idle time",
    "slack auto away",
    "slack presence rules",
    "slack 30 minute timeout",
  ],
  alternates: {
    canonical: "https://slackactivity.com/guides/when-does-slack-go-inactive",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "When Does Slack Go Inactive?",
    url: "https://slackactivity.com/guides/when-does-slack-go-inactive",
  },
];

const faqs = [
  {
    question: "How long until Slack shows you as away?",
    answer:
      "On desktop, 30 minutes. Slack flips your presence from active to away after 30 consecutive minutes with no mouse, keyboard, or window interaction inside the Slack app itself. On mobile, the timer is effectively zero: once you background the Slack app or lock your phone, Slack stops treating you as connected and you go away almost immediately.",
  },
  {
    question: "Can I change or disable Slack's away timer?",
    answer:
      "No. Slack does not expose the 30-minute auto-away threshold as a setting anywhere in preferences, and it is not configurable on any plan - Free, Pro, Business+, or Enterprise Grid. Workspace admins cannot change it either. The only manual control you get is Set yourself as active, which resets the clock but does not remove it.",
  },
  {
    question: "What actually counts as activity in Slack?",
    answer:
      "Direct interaction with the Slack client: typing a message, clicking a channel or thread, scrolling the message list, reacting with an emoji, searching, or joining a Slack huddle. Working in other applications does not count, no matter how busy you are. Slack has no idea you are in an IDE, a Zoom call, or a Google Doc.",
  },
  {
    question: "Does Slack go inactive when my laptop sleeps or locks?",
    answer:
      "Yes. Sleep, lock, hibernate, closing the lid, and losing your network connection all end the client session. Slack stops receiving activity signals and your dot turns gray shortly after - often faster than the full 30 minutes, because the connection drop is an explicit signal rather than a slow timeout.",
  },
  {
    question: "How do I stay green without touching my computer?",
    answer:
      "Use a cloud-based presence tool like Slackactivity. It calls the official Slack Web API on a 5-minute cron during the work hours you configure, so your presence refreshes from Slack's own servers rather than your laptop. It works with the lid closed, supports unlimited workspaces, and is 100% free forever - no credit card and no paid tier.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "When Does Slack Go Inactive? The Exact Away Timers",
    "Slack goes inactive after 30 minutes of no interaction with the desktop app, and almost instantly on mobile once backgrounded. A precise breakdown of Slack presence rules, what counts as activity, and why the timer cannot be changed.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function WhenDoesSlackGoInactivePage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            When Does Slack Go Inactive?
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Slack goes inactive after <strong>30 minutes</strong> without any
            interaction with the Slack desktop app, and{" "}
            <strong>almost immediately</strong> on mobile once you background
            the app or lock your phone. Sleeping, locking, or disconnecting your
            computer ends the session too - and Slack offers no setting on any
            plan, free or paid, to change or disable that timer.
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

        {/* The exact timers */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Exact Slack Away Timers
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack calls the green dot &quot;presence&quot;, and it has exactly
            two values: <strong>active</strong> and <strong>away</strong>. Every
            connected Slack client reports whether you are interacting with it.
            When no client reports activity, presence flips to away. Here is
            what triggers it, per surface:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Laptop className="w-10 h-10" />}
              title="Desktop app: 30 minutes"
              description="Thirty consecutive minutes with no mouse, keyboard, or window interaction inside Slack itself flips you to away. The clock resets to zero on any interaction, then starts again."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Mobile app: near-instant"
              description="Mobile presence is far stricter. Background the Slack app, switch to another app, or lock the phone, and Slack stops counting you as present within moments - there is no 30-minute grace period."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Sleep, lock, or lid closed"
              description="Sleep, hibernate, screen lock, and closing the laptop lid all end the client session. Your dot goes gray shortly after, usually faster than the full 30 minutes."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Network loss"
              description="Losing Wi-Fi, switching networks, or a VPN drop disconnects the client. A dropped connection is an explicit signal to Slack, so presence changes quickly rather than waiting out the idle timer."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            One important nuance: presence is calculated across{" "}
            <em>all</em> your connected clients. If your desktop app has been
            idle for 40 minutes but you just tapped a notification on your
            phone, you are active. You only go away when every client is idle or
            disconnected. That is why people who close the laptop at 5pm but
            leave Slack on their phone sometimes stay green far longer than they
            expect - until the phone locks.
          </p>
        </Section>

        {/* What counts as activity */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Counts as Activity (and What Does Not)
          </h2>
          <p className="text-lg text-text-700 mb-6">
            This is the part that surprises people. Slack measures interaction
            with <strong>the Slack app</strong>, not with your computer. Being
            hard at work in another window is, to Slack, indistinguishable from
            being at lunch.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Counts as activity
              </h3>
              <ul className="space-y-3 text-text-700">
                <li>Typing a message or a thread reply</li>
                <li>Clicking into a channel, DM, or thread</li>
                <li>Scrolling the message list</li>
                <li>Adding an emoji reaction</li>
                <li>Running a search or a slash command</li>
                <li>Joining or being in a Slack huddle</li>
                <li>Focusing the Slack window and moving the cursor in it</li>
                <li>Opening the mobile app to the foreground</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Does not count
              </h3>
              <ul className="space-y-3 text-text-700">
                <li>Writing code in your editor for two hours</li>
                <li>A long Zoom, Meet, or Teams call</li>
                <li>Editing a doc, spreadsheet, or design file</li>
                <li>Reading a Slack desktop notification without clicking it</li>
                <li>Moving your mouse anywhere outside the Slack window</li>
                <li>Music playing, downloads running, builds compiling</li>
                <li>A screen-awake utility keeping the display on</li>
                <li>Having Slack open but untouched in a background window</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-text-700 mt-8">
            The last two are the ones that cost people the most. A screen-awake
            tool prevents sleep but generates zero Slack interaction, so you can
            sit at a fully awake machine and still turn gray at the 30-minute
            mark. Similarly, leaving Slack open in a background window does
            nothing at all - open is not the same as interacted with. If this
            keeps catching you out, our guide on{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>{" "}
            walks through every fix, ranked.
          </p>
        </Section>

        {/* Presence vs custom status */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Presence vs. Custom Status: Two Different Things
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Half the confusion around Slack idle time comes from conflating two
            separate systems that both live next to your name.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Eye className="w-10 h-10" />}
              title="Presence (the dot)"
              description="Automatic. A filled green dot means active, a hollow gray one means away. Slack sets it from client activity. You can force away manually, but you cannot force active for longer than the next 30 idle minutes."
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Custom status (the emoji)"
              description="Manual. The emoji and text you set yourself - in a meeting, on a call, PTO. It never changes on its own unless you give it an expiry, and it has zero effect on the green dot."
            />
          </div>
          <p className="text-lg text-text-700">
            So setting a custom status of 🟢 &quot;Working&quot; does not keep
            your presence dot green, and clearing your status does not turn it
            gray. They are independent. When a colleague says &quot;you looked
            offline all afternoon&quot;, they mean presence - the automatic one
            you cannot configure. Setting yourself to away manually is sticky
            until you undo it; setting yourself to active is not sticky at all,
            because the 30-minute idle timer immediately starts running again.
          </p>
        </Section>

        {/* Why you cannot change it */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why You Cannot Change the Timeout
          </h2>
          <p className="text-lg text-text-700 mb-6">
            There is no preference for this. Not in Slack&apos;s desktop
            settings, not in your profile, not in workspace admin settings, and
            not gated behind a paid tier. The 30-minute desktop threshold is
            fixed for Free, Pro, Business+, and Enterprise Grid alike, and
            mobile&apos;s background behavior is fixed too. People search for a
            hidden flag every day; it does not exist.
          </p>
          <p className="text-lg text-text-700 mb-6">
            What you get instead is a manual override: click your avatar and
            choose &quot;Set yourself as active&quot;. That resets the idle
            clock, but it does not stop it. Thirty idle minutes later you are
            gray again. Across an eight-hour day that is roughly sixteen manual
            resets - which is exactly the kind of chore worth automating.
          </p>
          <p className="text-lg text-text-700 mb-6">
            The workarounds people reach for next are mouse jigglers, auto
            clickers, and caffeinate-style utilities. They share one structural
            flaw: they only work while your machine is powered on, unlocked, and
            running the software. Close the lid, and every one of them stops.
            Company-managed devices may also flag simulated-input tools. We
            compare the tradeoffs in detail on our{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternative
            </a>{" "}
            page and in the guide to{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              keeping Slack active with your computer locked
            </a>
            .
          </p>
        </Section>

        {/* The cloud approach */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Approach That Survives a Closed Laptop
          </h2>
          <p className="text-lg text-text-700 mb-6">
            If the timer cannot be changed and local tricks die with your
            machine, the remaining option is to update presence from somewhere
            that never sleeps. That is what Slackactivity does: it runs in the
            cloud on a 5-minute cron and calls the official Slack Web API method{" "}
            <code className="px-1 border border-text-200 rounded">
              users.setPresence
            </code>{" "}
            during the work hours you configure. Nothing is installed on your
            machine, so nothing depends on your machine being awake.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud"
              description="A 5-minute cron refreshes your presence from Slack's own API. Laptop closed, asleep, or off - it makes no difference to the green dot."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Your hours, your timezone"
              description="Set a start hour, end hour, and days of the week per workspace. Outside those hours you go away like a normal human. Vacation mode pauses everything."
            />
            <FeatureCard
              icon={<MousePointer className="w-10 h-10" />}
              title="No simulated input"
              description="No fake mouse movement, no background process, no browser tab you have to leave open. It is the documented Slack API doing what it is designed to do."
            />
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="Free forever"
              description="Unlimited Slack workspaces on one dashboard, at no cost. No credit card, no trial countdown, no paid tier waiting behind a feature you need."
            />
          </div>
          <p className="text-lg text-text-700">
            The OAuth scope requested is deliberately minimal - enough to update
            your own presence and profile, and nothing that can read your
            messages, files, or channels. Setup is one screen: go to{" "}
            <a href="/signin" className="underline text-text-900">
              /signin
            </a>
            , click &quot;Continue with Slack&quot;, pick your hours. If you
            want the mechanics first, read{" "}
            <a href="/how-it-works" className="underline text-text-900">
              how it works
            </a>
            , browse the rest of the{" "}
            <a href="/guides" className="underline text-text-900">
              guides
            </a>
            , or see why{" "}
            <a
              href="/use-cases/remote-workers"
              className="underline text-text-900"
            >
              remote workers
            </a>{" "}
            hit this problem hardest.
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
          title="Stop Watching the 30-Minute Clock"
          description="Set your work hours once and Slackactivity keeps your presence green through the official Slack API - even with the lid closed. Unlimited workspaces, free forever."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Compare Alternatives", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
