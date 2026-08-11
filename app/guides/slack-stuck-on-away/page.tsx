import { Metadata } from "next";
import {
  MousePointer,
  Smartphone,
  Moon,
  Globe,
  Lock,
  Server,
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  Zap,
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
  title: "Slack Stuck on Away? How to Fix It (8 Steps)",
  description:
    "Slack stuck on away even though you're active? Work through 8 ordered fixes - sticky manual away, stale sessions, cache, outages - plus a permanent fix.",
  keywords: [
    "slack stuck on away",
    "slack shows away but i am active",
    "slack presence not updating",
    "slack won't show active",
    "slack status stuck away",
    "slack always away fix",
  ],
  alternates: {
    canonical: "https://slackactivity.com/guides/slack-stuck-on-away",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Slack Stuck on Away",
    url: "https://slackactivity.com/guides/slack-stuck-on-away",
  },
];

const faqs = [
  {
    question: "Why is Slack stuck on away when I am clearly active?",
    answer:
      "The most common cause is a manual away override: if you ever clicked 'Set yourself as away' in your profile menu, Slack keeps you gray forever until you explicitly clear it, no matter how much you type. The second most common cause is a stale desktop session that stopped reporting activity - quitting Slack completely and relaunching fixes it. After that, check whether a signed-in mobile device is reporting away.",
  },
  {
    question: "How do I clear a manual away status in Slack?",
    answer:
      "Click your profile picture in the top right of Slack and look at the top of the menu. If it says 'Set yourself as active', you are currently in manual away mode - click it. If it says 'Set yourself as away', you are already in automatic mode and the problem is elsewhere. Manual away persists across restarts and devices, which is why it is the first thing to check.",
  },
  {
    question: "Does Do Not Disturb make Slack show me as away?",
    answer:
      "No. Do Not Disturb pauses your notifications and adds a small 'z' badge to your avatar, but it does not change your green/gray presence dot. People often mistake the DND badge for away status. If your notification schedule is on, colleagues may see the 'z' and assume you are offline even though your dot is green.",
  },
  {
    question: "Why does Slack presence stop updating on a VPN?",
    answer:
      "Slack presence is maintained over a persistent WebSocket connection. Some corporate VPNs, proxies, and captive Wi-Fi portals interrupt or throttle long-lived connections, so the client stops sending heartbeats and the server falls back to away. Disconnecting the VPN, switching networks, or moving to a different Wi-Fi network usually restores presence within a minute.",
  },
  {
    question: "How do I stop Slack from going away permanently?",
    answer:
      "Troubleshooting fixes a stuck status once; it does not stop Slack's 30-minute desktop idle timer from firing again tomorrow. The durable fix is a server-side presence refresh like Slackactivity, which calls the official Slack API every 5 minutes during your configured work hours. It runs in the cloud, so it works with your laptop closed, and it is 100% free forever with no credit card.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slack Stuck on Away? 8 Fixes, In the Order to Try Them",
    "Slack showing away while you are active? Work through eight ordered fixes - from sticky manual away and stale sessions to cache and outages - then make it permanent.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function SlackStuckOnAwayPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack Stuck on Away? 8 Fixes, In the Order to Try Them
          </h1>
          <p className="text-xl text-text-600 mb-8">
            If Slack shows you as away while you&apos;re actively typing, the
            cause is almost always one of three things: a manual away override
            you set once and forgot, a stale desktop session that stopped
            reporting activity, or a signed-in mobile device telling Slack
            you&apos;re idle. Work through the list below in order - it&apos;s
            sorted by how often each cause is the real one - and then set up a
            server-side presence refresh so it never comes back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Fix It Permanently - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* How presence actually works */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How Slack Decides You&apos;re Away
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Before you troubleshoot, it helps to know what Slack is actually
            measuring. Presence is not a guess about whether you&apos;re working
            - it&apos;s a narrow signal with three inputs:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="A 30-minute desktop timer"
              description="The desktop client reports activity only when you interact with Slack itself. After 30 minutes with no clicks or keystrokes inside the app, it reports idle and your dot turns gray. Slack offers no setting to change that timeout on any plan, free or paid."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="An instant mobile timer"
              description="The mobile app flips to away almost immediately when you background it or lock your phone. If mobile is your only connected client, you go gray seconds after switching apps."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="A live connection"
              description="Presence rides on a persistent WebSocket. Sleep, a dropped VPN tunnel, or a captive Wi-Fi portal severs it, and the server marks you away because nothing is reporting in."
            />
            <FeatureCard
              icon={<MousePointer className="w-10 h-10" />}
              title="A manual override that wins"
              description="If you ever set yourself to away by hand, that choice beats every automatic signal. It sticks across restarts, reinstalls, and devices until you clear it - which is exactly why so many 'stuck' cases are this."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            Slack aggregates across all your signed-in clients, so one healthy
            connection is enough to show green. That&apos;s useful to know: it
            means a stuck away status usually points to an override or to zero
            healthy connections, not to a bug.
          </p>
        </Section>

        {/* The ordered fix list */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Fix List, In Order
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Do these in sequence. Most people are fixed by step 1 or 2, and
            steps 7 and 8 are genuinely rare.
          </p>
          <ol className="space-y-6 text-text-700">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">1.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Clear a manual away override
                </strong>
                <p>
                  Click your avatar in the top right. If the menu offers
                  &quot;Set yourself as active&quot;, you are in manual away
                  mode right now - click it. Manual away is sticky: it survives
                  quitting the app, restarting your machine, and signing in on a
                  new device. Slack will keep you gray indefinitely, which is
                  why this single click resolves more &quot;stuck on away&quot;
                  reports than everything else combined. If the menu already
                  says &quot;Set yourself as away&quot;, you&apos;re in
                  automatic mode - move on to step 2.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">2.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Fully quit and relaunch the desktop app
                </strong>
                <p>
                  Closing the window is not quitting. On macOS use Slack →
                  Quit Slack (Cmd+Q); on Windows right-click the tray icon and
                  choose Quit. A long-running client can end up with a
                  half-dead socket - it renders messages fine but stops sending
                  activity heartbeats, so the server keeps you gray. A clean
                  relaunch rebuilds the connection and usually turns your dot
                  green within seconds.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">3.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Check your other sessions and devices
                </strong>
                <p>
                  An old phone, a tablet in a drawer, or a second laptop that is
                  still signed in can keep reporting away. This bites hardest
                  when the desktop client is the one that&apos;s misbehaving,
                  because mobile then becomes your loudest signal. Open the
                  mobile app, let it connect, then background it deliberately -
                  or sign out of devices you don&apos;t use from your Slack
                  account settings. Also check whether you have the same
                  workspace open in a browser tab that has been suspended by the
                  browser&apos;s tab-sleep feature.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">4.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Rule out Do Not Disturb and your notification schedule
                </strong>
                <p>
                  DND does not change your presence dot - but it does add a
                  small &quot;z&quot; badge next to your name, and teammates
                  routinely read that as &quot;away&quot;. If you set a
                  notification schedule months ago and it starts at 5pm, people
                  will assume you&apos;ve logged off even while your dot is
                  green. Check Preferences → Notifications and confirm the
                  schedule matches the hours you actually work.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">5.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Test without the VPN, and on a different network
                </strong>
                <p>
                  Presence needs a stable long-lived connection. Corporate VPN
                  split-tunneling, aggressive proxies, and hotel or airport
                  captive portals all interrupt WebSockets, and the client
                  silently degrades to a polling mode that reports less. Try
                  disconnecting the VPN for two minutes, or tether to your phone
                  briefly. If your dot goes green off-VPN and gray on-VPN,
                  you&apos;ve found your culprit and it&apos;s a network problem,
                  not a Slack one.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">6.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Sign out of the workspace and back in
                </strong>
                <p>
                  This forces a fresh authentication token and a brand-new
                  presence session. It&apos;s a heavier hammer than a relaunch
                  and it clears state that a restart won&apos;t. Have your
                  workspace URL handy before you do it, and note that
                  you&apos;ll need to re-authenticate any SSO login.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">7.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Clear the app cache, then reinstall if needed
                </strong>
                <p>
                  In the desktop app use Help → Troubleshoot → Clear Cache and
                  Restart (the exact wording moves around between versions). A
                  corrupted local cache can wedge the client&apos;s idea of its
                  own state. If clearing the cache doesn&apos;t do it, a clean
                  reinstall of the desktop app is the last client-side step
                  worth taking - and make sure you&apos;re on a current version
                  while you&apos;re there, since presence bugs do get patched.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">8.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Check status.slack.com
                </strong>
                <p>
                  Before you spend another hour on it, load{" "}
                  <a
                    href="https://status.slack.com"
                    className="underline text-text-900"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    status.slack.com
                  </a>
                  . Slack publishes incidents by feature area, and presence
                  degradations are reported there. If an incident is open,
                  nothing you do locally will help - and if your whole team is
                  showing gray at once, an incident is the likeliest
                  explanation.
                </p>
              </div>
            </li>
          </ol>
        </Section>

        {/* Diagnose which one */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            A 30-Second Way to Narrow It Down
          </h2>
          <p className="text-lg text-text-700 mb-6">
            If you&apos;d rather not run all eight steps, three quick
            observations will usually tell you where to look:
          </p>
          <ul className="space-y-4 text-lg text-text-700 mb-6">
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 mr-3 mt-1 shrink-0 text-text-800" />
              <span>
                <strong className="text-text-900">
                  Gray even seconds after you type in Slack?
                </strong>{" "}
                That&apos;s a manual override (step 1) or a dead session (step
                2). Automatic away can never trigger that fast.
              </span>
            </li>
            <li className="flex items-start">
              <Moon className="w-5 h-5 mr-3 mt-1 shrink-0 text-text-800" />
              <span>
                <strong className="text-text-900">
                  Green for a while, then gray during deep work?
                </strong>{" "}
                That&apos;s the ordinary 30-minute idle timer doing its job -
                nothing is broken, and no amount of troubleshooting will change
                it. See{" "}
                <a
                  href="/guides/why-does-slack-show-me-as-away"
                  className="underline text-text-900"
                >
                  why Slack shows you as away
                </a>
                .
              </span>
            </li>
            <li className="flex items-start">
              <Lock className="w-5 h-5 mr-3 mt-1 shrink-0 text-text-800" />
              <span>
                <strong className="text-text-900">
                  Gray whenever your screen locks or your laptop lid closes?
                </strong>{" "}
                Expected behaviour. The client can&apos;t report activity from a
                sleeping machine - see{" "}
                <a
                  href="/guides/keep-slack-active-computer-locked"
                  className="underline text-text-900"
                >
                  keeping Slack active while your computer is locked
                </a>
                .
              </span>
            </li>
          </ul>
          <p className="text-lg text-text-700">
            The distinction matters. The first case is a genuine glitch you can
            fix. The second and third aren&apos;t glitches at all - they&apos;re
            Slack working as designed, and the only real answer is to stop
            depending on your laptop to report your presence.
          </p>
        </Section>

        {/* Permanent fix */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Permanent Fix: A Server-Side Presence Refresh
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Every step above fixes a stuck status once. None of them stop it
            recurring tomorrow, because the underlying design hasn&apos;t
            changed: your presence depends on a client that&apos;s awake,
            connected, and being clicked on. Move that responsibility off your
            laptop and the problem disappears for good.
          </p>
          <p className="text-lg text-text-700 mb-6">
            That&apos;s what Slackactivity does. You connect your workspace once
            with &quot;Continue with Slack&quot;, set your work hours, and a
            cloud cron job calls the official Slack Web API method{" "}
            <code className="px-1 py-0.5 rounded bg-background-100 border border-text-200 text-text-900">
              users.setPresence
            </code>{" "}
            every 5 minutes inside those hours. Nothing is installed on your
            machine. Nothing simulates input. It keeps working when your lid is
            closed, your machine is asleep, or your laptop is switched off
            entirely.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud"
              description="A 5-minute cron refreshes your presence server-side, so a sleeping laptop, a VPN drop, or a dead desktop session can no longer strand you on away."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Official API, minimal scopes"
              description="It requests users:write to set presence and users:read for your account name. It cannot read your messages, files, or channels - there is no scope granted that would allow it."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Unlimited workspaces, one dashboard"
              description="Connect as many Slack workspaces as you like, each with its own start hour, end hour, days of the week, and timezone. Vacation mode pauses everything with one switch."
            />
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="100% free forever"
              description="No credit card, no trial countdown, no paid tier waiting to upsell you. Every feature described on this page is free, permanently."
            />
          </div>
          <p className="text-lg text-text-700">
            Worth being clear about what this is not: it does not fake work, and
            it won&apos;t make you look busy to anyone paying attention to your
            actual output. What it does is stop a 30-minute idle timer from
            broadcasting &quot;offline&quot; while you&apos;re heads-down in an
            IDE, a design tool, or a two-hour call. If you&apos;ve been reaching
            for a jiggler instead, compare the two approaches in our{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternative guide
            </a>
            , or read the full breakdown of{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              Slack auto-away prevention
            </a>
            . Remote teams tend to land here fastest - here&apos;s{" "}
            <a
              href="/use-cases/remote-workers"
              className="underline text-text-900"
            >
              why it matters for remote workers
            </a>
            , and{" "}
            <a href="/guides" className="underline text-text-900">
              the rest of our guides
            </a>{" "}
            if you want to go deeper.
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

        {/* Checklist recap */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Short Version
          </h2>
          <ul className="space-y-3 text-lg text-text-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 mt-1 shrink-0 text-text-800" />
              <span>
                Clear manual away first - it overrides everything and it&apos;s
                the top cause.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 mt-1 shrink-0 text-text-800" />
              <span>
                Fully quit and relaunch, then rule out other signed-in devices.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 mt-1 shrink-0 text-text-800" />
              <span>
                Check DND, then your VPN or network, then sign out and back in.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 mt-1 shrink-0 text-text-800" />
              <span>
                Clear the cache, and check status.slack.com before assuming
                it&apos;s you.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-3 mt-1 shrink-0 text-text-800" />
              <span>
                Then stop it recurring with a cloud presence refresh - free
                forever, no credit card.
              </span>
            </li>
          </ul>
        </Section>

        <CTASection
          title="Stop Fixing Your Slack Status by Hand"
          description="Connect your workspace, set your hours once, and Slackactivity keeps your presence green through the official Slack API - free forever, no credit card."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Compare Alternatives", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
