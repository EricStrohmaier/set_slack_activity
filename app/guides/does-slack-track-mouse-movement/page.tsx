import { Metadata } from "next";
import {
  MousePointer,
  Eye,
  EyeOff,
  Clock,
  Server,
  Shield,
  Smartphone,
  Laptop,
  Moon,
  Lock,
  Code,
  CheckCircle,
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
  title: "Does Slack Track Mouse Movement? The Technical Answer",
  description:
    "No - Slack does not record or transmit your mouse movements. Here is what the desktop app actually detects, how it decides you are away, and what leaves your machine.",
  keywords: [
    "does slack track mouse movement",
    "does slack track activity",
    "how does slack know i am away",
    "slack idle detection",
    "slack presence tracking",
    "does slack monitor keystrokes",
    "slack away status explained",
  ],
  alternates: {
    canonical: "https://slackactivity.com/guides/does-slack-track-mouse-movement",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Does Slack Track Mouse Movement?",
    url: "https://slackactivity.com/guides/does-slack-track-mouse-movement",
  },
];

const faqs = [
  {
    question: "Does Slack track my mouse movement?",
    answer:
      "No. Slack does not record, store, or transmit mouse coordinates, movement paths, or click targets outside its own app. The desktop client reads a single number from your operating system - seconds since the last input event - and uses it to decide whether your session is idle. Only the resulting active/away flag is sent to Slack's servers.",
  },
  {
    question: "Does Slack log my keystrokes?",
    answer:
      "No. Slack does not act as a keylogger. Typing anywhere on your machine resets the operating system's idle counter, which Slack reads, but the content of what you type outside Slack never reaches the app. Inside Slack, obviously, your messages are what you send - that is the product, not surveillance.",
  },
  {
    question: "How does Slack know I am away?",
    answer:
      "Two mechanisms. On desktop, the app polls the OS idle timer and marks you away after 30 minutes with no input anywhere on the machine. On mobile, Slack flips you to away almost immediately once the app is backgrounded or the phone is locked. Closing the app, sleeping the laptop, or losing connectivity all end the presence heartbeat and drop you to away.",
  },
  {
    question: "Can my manager see how long my mouse was still?",
    answer:
      "Not from Slack. Slack exposes presence as a binary active/away dot in real time, and admin analytics report aggregate usage like messages posted and days active. There is no Slack report that shows idle duration or input frequency. Separate corporate monitoring software, if your employer installs it, is a different system entirely.",
  },
  {
    question: "Is there a way to stay active without any input simulation?",
    answer:
      "Yes. Slackactivity calls the official Slack Web API method users.setPresence from the cloud every 5 minutes during your configured work hours, so idle detection on your laptop never enters the picture. Nothing is installed on your machine and it works with the lid closed. It is 100% free forever - no credit card, no trial, no paid tier.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Does Slack Track Mouse Movement? What Slack Actually Detects",
    "Slack does not record or transmit your mouse movements. It reads a system idle timer locally and reports a binary active/away flag. Here is the full mechanic, and why a server-side API approach sidesteps it.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function DoesSlackTrackMouseMovementPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Does Slack Track Mouse Movement?
          </h1>
          <p className="text-xl text-text-600 mb-6">
            No. Slack does not record, store, or transmit your mouse movements.
            The desktop app asks your operating system one narrow question -
            how many seconds since the last input event - and reports a single
            binary flag to Slack&apos;s servers: active or away. No
            coordinates, no movement paths, no keystrokes, no screen contents.
          </p>
          <p className="text-lg text-text-600 mb-8">
            That distinction - detecting idleness locally versus tracking
            behaviour remotely - is the whole answer, and it explains almost
            everything else people find confusing about the green dot. Below is
            the actual mechanic, what leaves your machine, why mouse jigglers
            work at all, and why a server-side approach makes the question moot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Stay Green Without Input Simulation - Free
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* Detecting vs tracking */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Detecting Idleness Is Not the Same as Tracking You
          </h2>
          <p className="text-lg text-text-700 mb-6">
            &quot;Tracking&quot; implies a stream of behavioural data leaving
            your machine and being stored somewhere. That is not what happens.
            Idle detection is a local computation that produces one bit of
            output. Here is the split:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<MousePointer className="w-10 h-10" />}
              title="What happens on your machine"
              description="The desktop client asks the OS for a system idle time - a single integer, seconds since the last mouse, keyboard, or trackpad event anywhere on the computer. This value is computed by the operating system, not by Slack watching your cursor."
            />
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="What crosses the network"
              description="One presence value: active or away. When it changes, Slack broadcasts a presence_change event to clients that subscribe to your presence. That is the entire payload - a user ID and a string."
            />
            <FeatureCard
              icon={<EyeOff className="w-10 h-10" />}
              title="What Slack never receives"
              description="Cursor coordinates, movement paths, click positions outside Slack, keystrokes typed in other applications, window titles, or how long you sat still. None of it is collected, so none of it can be reported on."
            />
            <FeatureCard
              icon={<Eye className="w-10 h-10" />}
              title="Why the distinction matters"
              description="Because it tells you where the leverage is. You are not fighting a surveillance pipeline - you are fighting a countdown timer with a hard-coded 30-minute limit that Slack gives you no setting to change."
            />
          </div>
        </Section>

        {/* The mechanic */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How Slack Actually Decides You Are Away
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack has never published its exact client implementation, but the
            observable behaviour is consistent across macOS, Windows, and Linux
            and maps cleanly onto the standard desktop idle-detection APIs. The
            sequence works like this:
          </p>
          <ol className="space-y-6 text-text-700 mb-6">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">1.</span>
              <div>
                <strong className="text-lg text-text-900">
                  The client polls a system idle timer
                </strong>
                <p>
                  Every desktop OS exposes a &quot;seconds since last user
                  input&quot; value - the same one screensavers and lock screens
                  use. It counts input to the machine as a whole, not input to
                  a specific window. Slack reads it; it does not build it.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">2.</span>
              <div>
                <strong className="text-lg text-text-900">
                  30 idle minutes flips the flag
                </strong>
                <p>
                  Once that counter passes roughly 30 minutes, the client sets
                  your presence to away. Slack offers no setting to lengthen,
                  shorten, or disable this timeout - not on the free plan, not
                  on Pro, not on Business+, not on Enterprise Grid. Manually
                  choosing &quot;Set yourself as active&quot; only buys you
                  until the next 30 idle minutes elapse.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">3.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Mobile plays by stricter rules
                </strong>
                <p>
                  The phone app does not use a 30-minute timer. Background the
                  app or lock the screen and you flip to away almost
                  immediately, because mobile operating systems suspend
                  background apps aggressively and the presence heartbeat stops.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">4.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Losing the connection ends the story early
                </strong>
                <p>
                  Sleep the laptop, quit the app, close the browser tab, or drop
                  off Wi-Fi and the presence connection closes. You go away
                  regardless of what the idle counter said a second earlier.
                  This is why{" "}
                  <a
                    href="/guides/keep-slack-active-computer-locked"
                    className="underline text-text-900"
                  >
                    locking your computer
                  </a>{" "}
                  drops you to gray no matter how much you were typing before.
                </p>
              </div>
            </li>
          </ol>
          <p className="text-lg text-text-700">
            The browser version behaves similarly but scoped to the tab: it
            watches focus, visibility, and input events inside the Slack tab.
            Nothing about any of these paths involves recording where your
            cursor went. For the full breakdown of every trigger, see{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>
            .
          </p>
        </Section>

        {/* Why jigglers work */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why Mouse Jigglers Work At All - And Where They Stop
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Because the counter Slack reads is system-wide, any input anywhere
            resets it. A keystroke in your terminal, a scroll in a PDF, a
            trackpad twitch on the desktop - all identical to the timer. That is
            the entire reason a $12 USB dongle that nudges your cursor one pixel
            can keep a Slack dot green: it is not fooling Slack&apos;s
            intelligence, it is resetting an integer.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="What input simulation does solve"
              description="It keeps the OS idle counter near zero, so the desktop client never crosses the 30-minute threshold while the machine is awake and unlocked."
            />
            <FeatureCard
              icon={<Lock className="w-10 h-10" />}
              title="What it cannot solve"
              description="A locked screen, a closed lid, a sleeping machine, or a powered-off laptop. No input event reaches the OS, and in most lock states the presence connection is already gone."
            />
            <FeatureCard
              icon={<Laptop className="w-10 h-10" />}
              title="The hardware tax"
              description="Software jigglers and hardware dongles both need the machine on and awake, which means battery drain, a spinning fan, and a laptop you cannot close between meetings."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="The policy question"
              description="Endpoint management software on a company-issued device can flag unapproved USB HID devices or background input utilities. Whether that matters depends on your employer's policy, and it is worth knowing before you plug something in."
            />
          </div>
          <p className="text-lg text-text-700">
            Detailed comparison here:{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternatives for Slack
            </a>
            .
          </p>
        </Section>

        {/* What admins can see */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Your Workspace Admin Can Actually See
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Worth being precise here, because this is where speculation usually
            fills the gap. Presence in Slack is real-time and binary: other
            members see a green dot or a gray one, right now. Slack&apos;s admin
            analytics dashboard reports aggregate usage - things like messages
            posted, channels joined, and which days a member was active - not
            input telemetry, not idle duration, and not a minute-by-minute
            presence timeline.
          </p>
          <p className="text-lg text-text-700 mb-6">
            To be fair to the paranoid: some employers do install separate
            endpoint monitoring software that genuinely does capture keystrokes,
            screenshots, or active-window logs. That is a different product
            operating at a different layer. It has nothing to do with Slack, and
            no Slack setting turns it on or off. If your device is managed,
            assume your IT policy - not this article - is the authority on
            what&apos;s acceptable.
          </p>
          <div className="border border-text-200 rounded-lg p-6 bg-background-50">
            <div className="flex items-start gap-4">
              <Code className="w-8 h-8 text-text-700 shrink-0" />
              <div>
                <strong className="text-lg text-text-900">
                  The shape of the data
                </strong>
                <p className="text-text-700 mt-2">
                  A presence update is roughly a user ID plus a string that is
                  either &quot;active&quot; or &quot;away&quot;. That is the
                  whole vocabulary of the system. There is no field for
                  &quot;pixels moved&quot;, &quot;keys pressed&quot;, or
                  &quot;minutes idle&quot; - which is why no report can show
                  them.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Server-side approach */}
        <Section variant="highlight">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Server-Side Approach Sidesteps the Question Entirely
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Every local trick - jigglers, caffeinate, auto-clickers, a fan
            blowing on an optical mouse - is playing the same game: keep the OS
            idle counter low so Slack&apos;s client reports active. There is a
            second, cleaner path. Slack&apos;s own Web API exposes{" "}
            <span className="font-mono text-text-900">users.setPresence</span>,
            a method that sets your presence directly on Slack&apos;s servers.
            No idle timer involved, because no desktop client is involved.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud, not on your laptop"
              description="Slackactivity refreshes your presence from a 5-minute cron job on our servers. Nothing is installed on your machine, so there is no software to detect, no dongle to plug in, and no battery to drain."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Works with the lid closed"
              description="Laptop asleep, shut down, or in a bag between offices - your presence still reflects your configured work hours, because the API call originates from a server, not your keyboard."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Your hours, your timezone"
              description="Set a start hour, end hour, and days of the week per workspace, in your own timezone. Vacation mode switches everything off while you're actually away."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Unlimited workspaces, one dashboard"
              description="Connect every Slack workspace you belong to - client, contractor, side project - and manage all of their schedules from a single screen."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            The permission story is the mirror image of the fear this page
            started with. Slackactivity requests two minimal OAuth scopes:{" "}
            <span className="font-mono text-text-900">users:write</span> to set
            your presence and{" "}
            <span className="font-mono text-text-900">users:read</span> to show
            your account name in the dashboard. It cannot read your messages,
            your files, or your channels - the scopes to do so were never
            requested, so the tokens simply do not permit it.
          </p>
          <p className="text-lg text-text-700">
            And the price is the easy part: Slackactivity is 100% free forever.
            No credit card, no trial countdown, no paid tier waiting to
            upsell you once you rely on it. Sign in at{" "}
            <a href="/signin" className="underline text-text-900">
              /signin
            </a>{" "}
            and click &quot;Continue with Slack&quot;. Setup takes about a
            minute. If you want the fuller picture first, read{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              auto-away prevention
            </a>
            , the{" "}
            <a
              href="/use-cases/remote-workers"
              className="underline text-text-900"
            >
              remote worker use case
            </a>
            , or browse all{" "}
            <a href="/guides" className="underline text-text-900">
              guides
            </a>
            .
          </p>
        </Section>

        {/* FAQ */}
        <Section>
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
          title="Skip the Idle Timer Altogether"
          description="Slackactivity sets your Slack presence from the cloud through the official API, on your schedule, across unlimited workspaces. Free forever - no credit card, ever."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "See How It Works", href: "/how-it-works" }}
        />
      </SEOPageLayout>
    </>
  );
}
