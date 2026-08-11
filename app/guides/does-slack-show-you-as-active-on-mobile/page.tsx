import { Metadata } from "next";
import {
  Smartphone,
  Moon,
  Clock,
  Bell,
  Zap,
  Laptop,
  Server,
  Shield,
  Globe,
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
  title: "Does Slack Show You as Active on Mobile?",
  description:
    "Yes - Slack shows you active while the mobile app is open in the foreground, but you flip to away within moments of backgrounding it or locking your phone. Here's why.",
  keywords: [
    "does slack show you as active on mobile",
    "slack mobile presence",
    "keep slack active on phone",
    "slack active status mobile",
    "slack away on phone",
    "slack green dot mobile",
  ],
  alternates: {
    canonical:
      "https://slackactivity.com/guides/does-slack-show-you-as-active-on-mobile",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Slack Active Status on Mobile",
    url: "https://slackactivity.com/guides/does-slack-show-you-as-active-on-mobile",
  },
];

const faqs = [
  {
    question: "Does Slack show you as active on mobile?",
    answer:
      "Yes. When the Slack mobile app is open and in the foreground, Slack reports that session as active and your teammates see the green dot, usually within a few seconds. The moment you switch apps, press the home button, or lock your phone, that session stops reporting and you flip back to away.",
  },
  {
    question: "How long does Slack stay active after I close the app on my phone?",
    answer:
      "Not long - typically seconds to a minute or two, not the 30 minutes the desktop app gets. Mobile presence ends when the operating system suspends the backgrounded app and its live connection to Slack drops, so there is no meaningful idle grace period on a phone.",
  },
  {
    question:
      "If I'm active on my phone but idle on my laptop, what do teammates see?",
    answer:
      "Active. Slack combines every session you have signed in to a workspace and shows you as active if any one of them reports active. It is an OR, not an AND - one live session is enough to turn the dot green for everyone.",
  },
  {
    question: "Can I change Slack's mobile away timeout?",
    answer:
      "No. Slack offers no setting to extend or disable the auto-away behaviour on mobile or the 30-minute timeout on desktop, on any plan - free, Pro, Business+ or Enterprise Grid. The only supported way to control presence directly is the Slack API method users.setPresence.",
  },
  {
    question: "How do I keep Slack active on my phone without leaving it unlocked?",
    answer:
      "Use server-side presence instead of a device. Slackactivity runs in the cloud on a 5-minute cron and calls the official Slack Web API to keep you active during the work hours you choose, so your phone can be locked in your pocket and your laptop can be closed. It is 100% free forever - no credit card and no paid tier.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Does Slack Show You as Active on Mobile?",
    "Yes - Slack shows you active while the mobile app is in the foreground, but mobile presence is far stricter than desktop. Here's how Slack mobile presence works and how to stay green without babysitting your phone.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function DoesSlackShowYouAsActiveOnMobilePage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Does Slack Show You as Active on Mobile?
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Yes - Slack shows you as active whenever the mobile app is open and
            in the foreground on your phone, and the green dot usually appears
            within a few seconds. But mobile presence is far stricter than
            desktop: switch apps, background Slack, or lock your screen and you
            flip to away almost immediately, with none of the 30-minute grace
            period the desktop app gets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Stay Green Without Your Phone - Free
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* How mobile presence works */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How Slack Decides You&apos;re Active on Mobile
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack presence is per-session, not per-person. Every signed-in
            client - desktop app, browser tab, iPhone, Android - holds its own
            connection to Slack and reports whether it is currently active. On
            mobile, the rules are simple and unforgiving:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Foreground = green"
              description="Open the Slack app and hold it on screen and your mobile session reports active. Teammates typically see the green dot within a few seconds."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Locked or backgrounded = away"
              description="Press the home button, swipe to another app, or lock the phone and the session stops reporting. You go gray in moments, not minutes."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="No 30-minute timer"
              description="Desktop gets 30 minutes of idle time before Slack flips you to away. Mobile has no comparable grace period, because the connection ends with the app."
            />
            <FeatureCard
              icon={<Bell className="w-10 h-10" />}
              title="Notifications don't count"
              description="Receiving or even reading a Slack push notification does not make you active. Push arrives through Apple and Google's notification services, not your Slack session."
            />
          </div>
        </Section>

        {/* Why mobile is so strict */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why Mobile Flips to Away So Fast
          </h2>
          <p className="text-lg text-text-700 mb-4">
            This isn&apos;t Slack being harsh - it&apos;s how phones work. iOS
            and Android both suspend apps shortly after they leave the
            foreground so they stop burning CPU cycles and battery in your
            pocket. A suspended app can&apos;t hold an open connection, and
            Slack&apos;s presence depends on exactly that: a live socket between
            your device and Slack&apos;s servers. When the operating system
            freezes the app, the socket closes, Slack sees the session
            disconnect, and that device stops counting toward your active
            status.
          </p>
          <p className="text-lg text-text-700 mb-4">
            That&apos;s also why you can be pinged all day and still show gray.
            Notifications are delivered out-of-band through APNs on iOS and FCM
            on Android - they land on your lock screen without waking a Slack
            session at all. Reading a message from the notification shade tells
            Slack nothing about your presence. Only actually opening the app
            re-establishes the connection.
          </p>
          <p className="text-lg text-text-700">
            Low Power Mode on iOS and battery optimisation or Doze on Android
            make it stricter still, aggressively killing background work. And
            unlike the desktop timeout, there is no toggle anywhere in Slack to
            change any of this - not on the free plan, not on Pro, Business+ or
            Enterprise Grid. If you want to dig into the desktop side of the
            same problem, see{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>
            .
          </p>
        </Section>

        {/* Multi-device rule */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Multi-Device Rule: One Active Session Wins
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Here&apos;s the part most people get wrong. Slack doesn&apos;t track
            &quot;is this person active on their phone&quot; separately from
            &quot;is this person active on their laptop.&quot; It merges every
            session you have open for that workspace and applies a single rule:
            if <strong className="text-text-900">any</strong> session reports
            active, you show active. It&apos;s an OR, not an AND.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Laptop className="w-10 h-10" />}
              title="Laptop active, phone asleep"
              description="You show active. Your phone being backgrounded is irrelevant while the desktop app is awake and reporting."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Laptop closed, phone in hand"
              description="You show active. A single foreground mobile session is enough to turn the dot green for the whole team."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Both idle"
              description="You show away. Nothing is reporting, so Slack falls back to away - which is what happens over lunch, during a long meeting, or on the commute."
            />
            <FeatureCard
              icon={<Lock className="w-10 h-10" />}
              title="Manual away overrides everything"
              description="If you explicitly set yourself to away, Slack keeps you away no matter how many devices are live, until you set yourself back to active."
            />
          </div>
          <p className="text-lg text-text-700">
            Two useful consequences. First, you don&apos;t need every device
            green - you need one. Second, if you only touch Slack on your phone
            (say, on a train), your dot flickers green for the two minutes the
            app is open and drops the second you put the phone away, which is
            why colleagues so often think you&apos;ve gone offline mid-thread.
          </p>
        </Section>

        {/* Why the phone trick is a bad plan */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why Leaving Your Phone Unlocked All Day Is a Bad Plan
          </h2>
          <p className="text-lg text-text-700 mb-4">
            Once people learn the foreground rule, the obvious hack is to leave
            Slack open on a phone propped up next to the monitor with auto-lock
            disabled. It technically works. It&apos;s also a genuinely bad
            trade:
          </p>
          <ul className="space-y-4 text-lg text-text-700 mb-6 list-disc pl-6">
            <li>
              <strong className="text-text-900">Battery and heat.</strong> A
              screen held on for eight hours with a networked app in the
              foreground will flatten most phones in a few hours and keeps the
              battery warm and charging, which is the fastest way to degrade its
              capacity.
            </li>
            <li>
              <strong className="text-text-900">
                Your work phone may not let you.
              </strong>{" "}
              MDM profiles on company-managed iPhones and Android devices
              routinely enforce a maximum auto-lock timeout. If IT has set it to
              two minutes, &quot;Never&quot; simply isn&apos;t an option for you.
            </li>
            <li>
              <strong className="text-text-900">
                Anything you do breaks it.
              </strong>{" "}
              Taking a call, checking maps, scanning a QR code, replying to a
              text - every one of those backgrounds Slack and drops the session.
              The one device you use constantly is a poor choice for something
              that must never be interrupted.
            </li>
            <li>
              <strong className="text-text-900">Pocket accidents.</strong> A live
              Slack window with the keyboard one tap away produces a steady
              trickle of stray emoji reactions and half-typed messages.
            </li>
            <li>
              <strong className="text-text-900">It has no schedule.</strong> The
              trick keeps you green whenever the phone is on - including at 9pm
              when you&apos;d rather look offline.
            </li>
          </ul>
          <p className="text-lg text-text-700">
            Mouse jigglers and caffeinate-style utilities on the desktop have
            the same shape of problem: they need a powered-on, unlocked machine
            to work. We compared them side by side in our{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternative guide
            </a>{" "}
            and in{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              keeping Slack active with your computer locked
            </a>
            .
          </p>
        </Section>

        {/* Server side fix */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Fix: Set Your Presence Server-Side Instead
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Every device-based trick fails for the same reason - it needs a
            device that is awake. Slack&apos;s own API solves this properly.
            The <code className="text-text-900">users.setPresence</code> method
            lets an authorised app set your presence directly, without any
            client running anywhere. That&apos;s exactly what Slackactivity
            does: a cloud job runs every 5 minutes during the hours you choose
            and calls the official Slack Web API on your behalf.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud, not on your device"
              description="Nothing is installed on your phone or laptop. Your machine can be closed, asleep or switched off and your status stays exactly as you set it."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Your hours, your timezone"
              description="Set a start hour, end hour and days of the week per workspace. Outside those hours Slack goes back to normal behaviour, so evenings look like evenings."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Unlimited workspaces"
              description="Connect every workspace you're in - client, contractor, community - and manage them all from one dashboard. Vacation mode pauses everything at once."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Minimal OAuth scopes"
              description="Only users:write to set presence and users:read for your account name. It cannot read your messages, files or channels - the permission simply isn't granted."
            />
          </div>
          <p className="text-lg text-text-700 mb-4">
            Setup takes about a minute: go to{" "}
            <a href="/signin" className="underline text-text-900">
              /signin
            </a>
            , click &quot;Continue with Slack&quot;, approve the two scopes and
            set your hours. There is nothing to download and nothing to keep
            running on your phone.
          </p>
          <p className="text-lg text-text-700">
            And it is 100% free forever. No credit card, no trial that expires,
            no locked features - there is no paid tier to upgrade to. For more,
            read{" "}
            <a href="/how-it-works" className="underline text-text-900">
              how it works
            </a>
            , browse the{" "}
            <a href="/guides" className="underline text-text-900">
              guides
            </a>
            , or read the{" "}
            <a
              href="/use-cases/remote-workers"
              className="underline text-text-900"
            >
              guide for remote workers
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
          title="Keep Slack Green Without Babysitting Your Phone"
          description="Slackactivity refreshes your Slack presence from the cloud every 5 minutes during your work hours - across unlimited workspaces, 100% free forever."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "See How It Works", href: "/how-it-works" }}
        />
      </SEOPageLayout>
    </>
  );
}
