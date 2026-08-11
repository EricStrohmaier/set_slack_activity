import { Metadata } from "next";
import {
  Clock,
  Laptop,
  Monitor,
  Smartphone,
  Battery,
  Moon,
  Coffee,
  Settings,
  Server,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  XCircle,
  MousePointer,
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
  title: "How to Keep Slack Always Active on Desktop (and Mobile)",
  description:
    "How to keep Slack always active on desktop, Mac, Windows, iPhone and Android - what each device trick actually does, why most of them fail, and the free cloud fix.",
  keywords: [
    "how to keep slack always active on desktop",
    "how to keep slack always active on mobile",
    "how to keep slack active on phone",
    "how to keep slack active on mac",
    "how to keep slack always active on mac",
    "how to keep slack active on iphone",
    "how to keep slack active on android",
    "how long does slack stay active on phone",
  ],
  alternates: {
    canonical:
      "https://slackactivity.com/guides/keep-slack-active-on-desktop-and-mobile",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Keep Slack Active on Desktop and Mobile",
    url: "https://slackactivity.com/guides/keep-slack-active-on-desktop-and-mobile",
  },
];

const faqs = [
  {
    question: "How do I keep Slack always active on desktop?",
    answer:
      "You have three options. Manually click your avatar and choose Set yourself as active every 30 minutes, keep interacting with the Slack window itself so the idle timer never reaches 30 minutes, or use a cloud tool like Slackactivity that calls Slack's official users.setPresence API on a 5-minute cron during the hours you set. Only the third option survives a closed lid, and it is free forever with no card and no paid tier.",
  },
  {
    question: "How long does Slack stay active on a phone?",
    answer:
      "Only as long as the Slack app is in the foreground. Slack mobile reports you as active while the app is open and on screen; the moment you switch apps, press the home button, or lock the phone, the OS suspends Slack and your presence drops to away within moments. There is no 30-minute grace period on mobile the way there is on desktop.",
  },
  {
    question: "Does caffeinate or Amphetamine keep Slack active on a Mac?",
    answer:
      "No. caffeinate, Amphetamine, and KeepingYouAwake stop macOS from sleeping or dimming the display, but none of them generate interaction with the Slack app. Slack's 30-minute idle timer measures clicks, typing and scrolling inside Slack, not whether your Mac is awake, so you can sit at a fully awake machine and still turn gray on schedule.",
  },
  {
    question: "If I am active on my phone, does my desktop show active too?",
    answer:
      "Yes. Slack calculates one presence value across every client you are signed into. If any session reports activity, your dot is green everywhere. That is why people who close the laptop but leave Slack open on their phone stay green a little longer - until the phone locks and the last active session disappears.",
  },
  {
    question: "Is there a setting to change Slack's away timer?",
    answer:
      "No. The 30-minute desktop threshold and the mobile background behavior are not exposed anywhere in Slack preferences, and they are identical on Free, Pro, Business+ and Enterprise Grid. Workspace admins cannot change them either. Any guide promising a hidden toggle is describing something that does not exist.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "How to Keep Slack Always Active on Desktop (and Mobile)",
    "A device-by-device guide to keeping Slack always active: macOS caffeinate and Amphetamine, Windows power settings and PowerToys Awake, iPhone and Android foreground rules, the multi-device presence rule, and the free cloud method that works with the laptop closed.",
    "2026-08-11",
    "2026-08-11"
  ),
];

export default function KeepSlackActiveOnDesktopAndMobilePage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            How to Keep Slack Always Active on Desktop and Mobile
          </h1>
          <p className="text-xl text-text-600 mb-8">
            To keep Slack always active on desktop you have to stop the
            30-minute idle timer from ever finishing - either by interacting
            with the Slack window itself, or by updating your presence from
            outside your computer entirely. Keep-awake tools like caffeinate,
            Amphetamine and PowerToys Awake do <strong>not</strong> work on
            their own, because Slack measures interaction with the Slack app,
            not whether your machine is awake. On mobile it is stricter still:
            Slack reports you active only while the app is in the foreground, so
            locking your phone turns you gray within moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Stay Active on Every Device - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
        </header>

        {/* Mechanics */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            First, What Slack Is Actually Measuring
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack calls the green dot <strong>presence</strong>, and it has two
            values: active and away. Presence is not your custom status - the
            emoji and text you type in yourself. Presence is set automatically
            from client activity; custom status never changes on its own. This
            page is entirely about presence, the dot.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Laptop className="w-10 h-10" />}
              title="Desktop: 30 minutes of idle"
              description="Thirty consecutive minutes with no mouse, keyboard or window interaction inside the Slack app flips you to away. Interacting anywhere else on your computer does nothing at all."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Mobile: foreground only"
              description="Slack mobile reports active while the app is open on screen. Background it, switch apps, or lock the phone and mobile operating systems suspend it - you go away almost immediately."
            />
          </div>
          <p className="text-lg text-text-700">
            There is <strong>no setting on any Slack plan</strong> to change or
            disable that 30-minute timer. It is identical on Free, Pro,
            Business+ and Enterprise Grid, workspace admins cannot adjust it,
            and it is not hidden behind a paid tier. If you want the full
            breakdown of the thresholds, we cover them in{" "}
            <a
              href="/guides/when-does-slack-go-inactive"
              className="underline text-text-900"
            >
              when does Slack go inactive
            </a>
            . Everything below is about working with that fixed timer rather
            than pretending you can turn it off.
          </p>
        </Section>

        {/* Desktop */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How to Keep Slack Always Active on Desktop
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Every desktop method falls into one of two buckets: things that keep
            your <em>computer</em> awake, and things that keep <em>Slack</em>{" "}
            interacted with. Only the second bucket affects your dot, and that is
            the single most misunderstood point in this whole topic.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-text-900">
            How to keep Slack active on Mac (macOS)
          </h3>
          <p className="text-lg text-text-700 mb-6">
            macOS ships with a built-in command for this. Open Terminal and run{" "}
            <code className="px-1 border border-text-200 rounded">
              caffeinate -d
            </code>{" "}
            to prevent the display from sleeping, or{" "}
            <code className="px-1 border border-text-200 rounded">
              caffeinate -dimsu -t 28800
            </code>{" "}
            to hold the whole system awake for eight hours. The GUI equivalents
            are Amphetamine from the Mac App Store and the open-source
            KeepingYouAwake, both of which sit in the menu bar and toggle the
            same underlying power assertions. You can also set{" "}
            <strong>System Settings &rarr; Lock Screen</strong> and{" "}
            <strong>Displays &rarr; Advanced</strong> so the screen never turns
            off on power adapter.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Here is the catch, and it applies to all three: they keep the
            machine awake but generate zero Slack interaction. Your Mac stays
            on, the display stays lit, and Slack still turns gray at the
            30-minute mark because nobody clicked anything in Slack. They are a
            useful foundation, not a complete answer to how to keep Slack always
            active on Mac.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-text-900">
            How to keep Slack active on Windows
          </h3>
          <p className="text-lg text-text-700 mb-6">
            On Windows, open{" "}
            <strong>Settings &rarr; System &rarr; Power &amp; battery</strong>{" "}
            (Power &amp; sleep on Windows 10) and set both{" "}
            <em>Screen and sleep</em> timers to Never while plugged in. For a
            toggle you can flip per meeting, Microsoft PowerToys includes an{" "}
            <strong>Awake</strong> module that keeps the PC awake indefinitely
            or for a fixed interval, with an option to keep the screen on.
            Group-policy-managed laptops often lock the built-in timers, leaving
            PowerToys Awake as the only lever you still have.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Same structural limitation as macOS: preventing sleep is not
            interaction. Windows stays on; Slack&apos;s idle counter keeps
            running. On a corporate machine the screen lock policy also fires
            after a fixed number of idle minutes and ends your Slack session
            regardless of the power settings. We go deeper on that scenario in{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              keeping Slack active with your computer locked
            </a>
            .
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-text-900">
            The desktop methods that do move the dot
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Works
              </h4>
              <ul className="space-y-3 text-text-700">
                <li>Typing, clicking or scrolling inside the Slack window</li>
                <li>Clicking your avatar and choosing Set yourself as active</li>
                <li>Being in a Slack huddle</li>
                <li>
                  A cloud service calling users.setPresence on a schedule for
                  you
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Does not work
              </h4>
              <ul className="space-y-3 text-text-700">
                <li>caffeinate, Amphetamine, KeepingYouAwake</li>
                <li>PowerToys Awake and Never-sleep power plans</li>
                <li>Leaving Slack open but untouched in a background window</li>
                <li>Working hard in your editor, browser or on a video call</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-text-700">
            Mouse jigglers - hardware dongles or software that nudges the cursor
            - sit awkwardly in between. They can register as interaction if the
            Slack window happens to have focus, but they stop the moment your
            machine sleeps, and managed devices increasingly flag simulated
            input. We compare the tradeoffs on our{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternative
            </a>{" "}
            page.
          </p>
        </Section>

        {/* Mobile */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How to Keep Slack Always Active on Mobile
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Mobile plays by completely different rules. There is no 30-minute
            idle timer to run out, because Slack mobile only claims a live
            session while the app is in the foreground. iOS and Android
            aggressively suspend background apps to save battery, so the moment
            Slack is not the app on screen, its connection is torn down and
            Slack&apos;s servers stop counting you as present.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="How long does Slack stay active on your phone?"
              description="Only while the app is open and on screen. Switch apps, press home, or let the screen lock and you are away within moments - typically seconds, not minutes."
            />
            <FeatureCard
              icon={<Battery className="w-10 h-10" />}
              title="The battery cost of staying green"
              description="Keeping the Slack app foregrounded with the screen on is the only way to stay active on a phone, and it drains a full charge in a few hours while heating the device."
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-text-900">
            How to keep Slack active on iPhone
          </h3>
          <p className="text-lg text-text-700 mb-6">
            The only reliable iPhone method is brute force: open Slack, then set{" "}
            <strong>
              Settings &rarr; Display &amp; Brightness &rarr; Auto-Lock
            </strong>{" "}
            to Never, and leave the app on screen. Turn brightness down and plug
            the phone in, because Never means never - iOS will happily keep the
            display lit until the battery is flat. Low Power Mode works against
            you here; it re-enables aggressive suspension. Guided Access can pin
            Slack to the foreground if you want to stop yourself from swiping
            away by accident. None of this is a real solution - it is a phone
            held hostage as a presence beacon.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-text-900">
            How to keep Slack active on Android
          </h3>
          <p className="text-lg text-text-700 mb-6">
            Android gives you slightly more control and the same bad tradeoff.
            Go to <strong>Settings &rarr; Display &rarr; Screen timeout</strong>{" "}
            and pick the longest option, then open{" "}
            <strong>Settings &rarr; Apps &rarr; Slack &rarr; Battery</strong>{" "}
            and set it to Unrestricted so Doze and adaptive battery stop putting
            Slack to sleep. On Samsung, also remove Slack from{" "}
            <em>Sleeping apps</em> and <em>Deep sleeping apps</em> in Device
            care. Even with all of that, backgrounding the app still drops your
            presence - unrestricted battery keeps notifications flowing, it does
            not keep a foreground presence session alive.
          </p>
          <p className="text-lg text-text-700">
            If your team judges availability from the phone dot, it is worth
            reading{" "}
            <a
              href="/guides/how-to-appear-online-on-slack"
              className="underline text-text-900"
            >
              how to appear online on Slack
            </a>{" "}
            for the presence-vs-status distinction that trips most people up.
          </p>
        </Section>

        {/* Multi-device rule */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Multi-Device Rule: One Active Session Is Enough
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack does not keep a separate dot per device. It computes one
            presence value across every client you are signed into, and the rule
            is simple: <strong>if any session reports active, you are active</strong>{" "}
            everywhere. Your desktop app can be idle for two hours, but tap a
            notification on your phone and you turn green instantly on every
            surface your colleagues look at.
          </p>
          <p className="text-lg text-text-700 mb-6">
            The inverse is what catches people out. You only go away when{" "}
            <em>every</em> client is idle or disconnected. Close the laptop at
            5pm with Slack still open on your phone and you may stay green a
            while longer - right up until the phone locks and the last live
            session vanishes. That is the whole mechanic behind the classic
            complaint of being{" "}
            <a
              href="/guides/slack-stuck-on-away"
              className="underline text-text-900"
            >
              stuck on away
            </a>{" "}
            with no idea which device caused it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Monitor className="w-10 h-10" />}
              title="Desktop plus phone does not add up"
              description="Two half-idle devices are still idle. Both have to be interacting for the safety net people imagine to actually exist."
            />
            <FeatureCard
              icon={<Lock className="w-10 h-10" />}
              title="One manual override is sticky, one is not"
              description="Setting yourself to away manually persists until you undo it. Setting yourself back to active only resets the 30-minute clock - it does not stop it."
            />
          </div>
        </Section>

        {/* Server-side */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Device-Independent Fix (and It Is Free Forever)
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Every method above shares one flaw: it depends on a physical device
            being awake, unlocked and running something. Close the lid, let the
            phone lock, or hand the laptop to IT and it all stops. The way out
            is to update your presence from somewhere that never sleeps.
          </p>
          <p className="text-lg text-text-700 mb-6">
            That is what Slackactivity does. It runs in the cloud on a
            5-minute cron and calls the official Slack Web API method{" "}
            <code className="px-1 border border-text-200 rounded">
              users.setPresence
            </code>{" "}
            during the working hours you configure. Nothing installs on your Mac,
            PC, iPhone or Android device, so nothing breaks when any of them
            sleeps. There is no terminal command to remember, no menu bar app to
            re-enable, and no phone burning through its battery on a desk.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Works with the laptop closed"
              description="Presence refreshes from Slack's own servers, not from your machine. Lid closed, phone in your pocket, device off - the dot stays green."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Your hours, your timezone"
              description="Set a start hour, end hour and days of the week per workspace, with the right timezone. Outside those hours you go away like a normal human, and vacation mode pauses everything."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Unlimited workspaces"
              description="Connect every Slack workspace you are in - clients, contractors, side projects - and manage them all from one dashboard with independent schedules."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Minimal OAuth scopes"
              description="It requests only what it needs to update your own presence. It cannot read your messages, files or channels - that access is never granted."
            />
            <FeatureCard
              icon={<MousePointer className="w-10 h-10" />}
              title="No simulated input"
              description="No fake mouse movement, no auto-clicker, no background process for IT to flag. It is the documented Slack API doing exactly what it was designed to do."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="100% free forever"
              description="No trial, no credit card, no paid tier and nothing to upgrade to. Every feature on this page costs nothing, permanently."
            />
          </div>
          <p className="text-lg text-text-700">
            Setup takes about a minute: go to{" "}
            <a href="/signin" className="underline text-text-900">
              /signin
            </a>
            , click &quot;Continue with Slack&quot;, and pick your hours. If you
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
            run into this constantly. Curious how it stacks up against jigglers
            and scripts? The{" "}
            <a href="/compare" className="underline text-text-900">
              comparison page
            </a>{" "}
            lays it out side by side.
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
          title="Stop Babysitting Your Devices"
          description="Set your work hours once and Slackactivity keeps your Slack presence active through the official API - laptop closed, phone in your pocket. Unlimited workspaces, free forever."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Compare Alternatives", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
