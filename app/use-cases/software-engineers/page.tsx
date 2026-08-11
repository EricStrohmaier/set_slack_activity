import { Metadata } from "next";
import {
  Code,
  Terminal,
  Clock,
  Server,
  GitPullRequest,
  Headphones,
  BellOff,
  Moon,
  Shield,
  Zap,
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
  title: "Slack Status for Developers: Stay Green While Coding",
  description:
    "Slack marks developers away after 30 minutes in your IDE. See why deep work reads as idle time, and how to keep your Slack status accurate for free, forever.",
  keywords: [
    "slack status for developers",
    "deep work slack away",
    "slack status while coding",
    "slack away while programming",
    "developer slack presence",
    "slack shows away during deep work",
    "keep slack active while coding",
  ],
  alternates: {
    canonical: "https://slackactivity.com/use-cases/software-engineers",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Use Cases", url: "https://slackactivity.com/use-cases" },
  {
    name: "Software Engineers",
    url: "https://slackactivity.com/use-cases/software-engineers",
  },
];

const faqs = [
  {
    question: "Why does Slack show me as away while I'm coding?",
    answer:
      "Slack only counts input inside the Slack app as activity. Typing in your IDE, running a build in the terminal, or reviewing a pull request in the browser generates zero Slack activity, so after 30 idle minutes the desktop client flips your dot to grey. Slack has no setting to change that 30-minute timeout on any plan, free or paid.",
  },
  {
    question: "Is presence automation the same as faking work?",
    answer:
      "No. Presence automation only affects the green dot, which is an availability signal, not an output metric. It says you are at your desk during your configured work hours. It does not write code, answer messages, or produce commits, and your actual work is still judged on shipped code, reviews, and incident response. If you are genuinely away, use vacation mode or turn the schedule off.",
  },
  {
    question: "Should I use Do Not Disturb instead for deep work?",
    answer:
      "Use both, for different jobs. DND suppresses notifications during a focus block and tells people you are heads-down on purpose. Presence automation keeps the green dot accurate the rest of the day so a 90-minute design call or a long CI run does not read as you being offline. DND is intentional silence; auto-away is an accidental wrong signal.",
  },
  {
    question: "Does it work when my laptop is closed or asleep?",
    answer:
      "Yes. Slackactivity runs in the cloud on a 5-minute cron and calls the official Slack Web API (users.setPresence). Nothing is installed on your machine, so a sleeping laptop, a locked screen, a reboot after a kernel update, or an SSH session on a remote box makes no difference to your presence.",
  },
  {
    question: "What Slack permissions does it need, and what does it cost?",
    answer:
      "It requests two minimal OAuth scopes: users:write to set your presence and users:read to show your account name in the dashboard. It cannot read messages, files, or channels. It is 100% free forever with unlimited workspaces, no credit card, no trial, and no paid tier.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slack Status for Developers: Stay Green While You Code",
    "Engineers get hit hardest by Slack auto-away because the work happens in an IDE, a terminal, or a long call. Here is why it happens and how to keep your presence accurate.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function SoftwareEngineersPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack Status for Developers: Stay Green While You Code
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Slack shows you as away while you code because it only counts input
            inside the Slack app itself - after 30 minutes with no clicks or
            keystrokes in Slack, the desktop client flips your dot to grey, no
            matter how hard you are working in your IDE. Slackactivity fixes
            that from the cloud: it refreshes your presence every 5 minutes
            through the official Slack API during the hours you actually work,
            and it is free forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Connect Slack - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
        </header>

        {/* Why engineers get hit hardest */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why Engineers Get Hit Hardest by Auto-Away
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Every role loses the green dot occasionally. Engineering loses it
            structurally, because almost none of the job happens inside Slack.
            The deeper the work, the greyer you look:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Code className="w-10 h-10" />}
              title="Hours Inside the IDE"
              description="A two-hour refactor is two hours of keystrokes that Slack never sees. Slack measures interaction with Slack, not with your keyboard, so your editor being on fire counts as zero activity."
            />
            <FeatureCard
              icon={<Terminal className="w-10 h-10" />}
              title="Long Builds and Test Runs"
              description="A 25-minute CI pipeline, a Docker rebuild, or a database migration means you are watching a terminal, not clicking in Slack. Two of those back to back and you have crossed the 30-minute line."
            />
            <FeatureCard
              icon={<GitPullRequest className="w-10 h-10" />}
              title="Code Review in the Browser"
              description="Reading a 600-line diff on GitHub is focused, collaborative work. To Slack it is indistinguishable from having walked away from the desk for lunch."
            />
            <FeatureCard
              icon={<Headphones className="w-10 h-10" />}
              title="90-Minute Design Calls"
              description="Architecture reviews, incident calls, and pairing sessions run long. Unless the call is in a Slack huddle, Slack registers nothing - and mobile flips you to away almost immediately once the app is backgrounded."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            The timeout is not configurable. Slack offers no setting to extend
            or disable the 30-minute desktop auto-away timer on any plan, free
            or paid, and no admin toggle changes it for a workspace. Our guide
            on{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>{" "}
            walks through the exact mechanics.
          </p>
        </Section>

        {/* The real cost */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Real Cost of Being Permanently Grey
          </h2>
          <p className="text-lg text-text-700 mb-6">
            The green dot is not vanity. In a distributed engineering org it is
            a routing signal, and when it is wrong, three specific things go
            wrong with it.
          </p>
          <ol className="space-y-6 text-text-700">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">1.</span>
              <div>
                <strong className="text-lg text-text-900">
                  People stop asking you and ask someone worse
                </strong>
                <p>
                  A teammate with a question about the service you own sees a
                  grey dot, decides you are offline, and asks in a general
                  channel instead. Someone with less context answers. You find
                  out three days later in a postmortem that a wrong answer
                  shipped, and the only reason you were skipped is that Slack
                  said you were away while you were forty feet from your
                  keyboard, mid-review, on the exact file in question.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">2.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Blocking questions sit in a queue
                </strong>
                <p>
                  The opposite failure is just as expensive: someone writes the
                  message, sees grey, and decides not to send it until
                  tomorrow. A one-line unblock turns into a lost day. Multiply
                  by a team of eight across three timezones and the wrong dot
                  is quietly costing sprint velocity.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">3.</span>
              <div>
                <strong className="text-lg text-text-900">
                  &quot;Always grey&quot; reads as low engagement
                </strong>
                <p>
                  Nobody writes this down in a performance review, but in
                  remote orgs presence is the ambient signal managers and
                  peers absorb all day. The engineer who is deep in a
                  distributed-systems problem for six hours looks less
                  available than the one refreshing Slack between tasks. That
                  is a bad incentive, and it rewards exactly the shallow
                  work-pattern engineering managers say they want less of.
                </p>
              </div>
            </li>
          </ol>
        </Section>

        {/* Honest framing: DND vs presence */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Deep Work: Use DND for Focus, Presence for Accuracy
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Being straight about this matters, because the two tools solve
            opposite problems and people conflate them constantly.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<BellOff className="w-10 h-10" />}
              title="Do Not Disturb = deliberate silence"
              description="You are heads-down for the next 90 minutes and you want notifications suppressed. DND is a promise to yourself and a clear signal to the team: I will come back to this. Use it, schedule it, and defend it."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Presence automation = accurate availability"
              description="The rest of the day, the green dot should mean what people think it means: this person is at work right now. Auto-away breaks that meaning, and presence automation restores it."
            />
          </div>
          <p className="text-lg text-text-700 mb-4">
            Slackactivity is not a productivity theater tool and we are not
            going to pretend otherwise. It sets one bit - your Slack presence -
            during hours you tell it you work. It does not send messages, does
            not type, does not generate fake commits, and cannot make you look
            busy when you are not. Your work is still judged on shipped code,
            reviews, and how you show up in incidents.
          </p>
          <p className="text-lg text-text-700">
            The honest use case is narrow and real: your presence should match
            your actual working hours instead of your last click in Slack. When
            you take a real break, take it. When you go on leave, flip on
            vacation mode and go fully grey - that is the feature working
            correctly. If your goal is to appear online during hours you are
            not working, this is the wrong tool, and honestly the wrong plan.
          </p>
        </Section>

        {/* On-call, CI, and the engineer's week */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            On-Call Handoffs, CI Runs, and Multi-Workspace Contracting
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="On-call handoffs"
              description="At handoff, the incoming engineer needs to look reachable in Slack from minute one. If you picked up the pager at 09:00 and Slack still shows you grey from last night, the first page routes around you and lands on the person who just went off shift."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Long CI and batch jobs"
              description="Kicking off a 40-minute integration suite, a nightly ETL rerun, or a big migration means long stretches of watching logs. Presence stays green through all of it because the refresh runs server-side, not on your machine."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Closed laptop, remote boxes, reboots"
              description="Because it runs in the cloud on a 5-minute cron, none of this touches your presence: a closed lid, a locked screen, a reboot after a kernel update, or a day spent SSH'd into a dev box with Slack quit entirely."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Unlimited client workspaces"
              description="Contractors and consultants can connect every client workspace with its own hours, days, and timezone - one dashboard, unlimited workspaces, still free. No per-workspace fee exists because there is no paid tier at all."
            />
          </div>
          <p className="text-lg text-text-700">
            Per-workspace settings are the part engineers tend to care about
            most: start hour, end hour, days of the week, and timezone are
            configured independently for each workspace. A 10-to-6 CET main job
            and a Tuesday/Thursday client workspace on US Eastern do not fight
            each other. If you work across regions, the{" "}
            <a
              href="/use-cases/remote-workers"
              className="underline text-text-900"
            >
              remote workers page
            </a>{" "}
            covers the timezone handling in more detail.
          </p>
        </Section>

        {/* Setup */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Setup Takes About a Minute
          </h2>
          <ol className="space-y-4 text-lg text-text-700 mb-6">
            <li>
              <strong className="text-text-900">1. Sign in.</strong> Go to{" "}
              <a href="/signin" className="underline text-text-900">
                /signin
              </a>{" "}
              and click &quot;Continue with Slack&quot;. Standard Slack OAuth,
              no credit card, nothing to download.
            </li>
            <li>
              <strong className="text-text-900">2. Approve two scopes.</strong>{" "}
              <code className="text-text-900">users:write</code> to set your
              presence and <code className="text-text-900">users:read</code> to
              display your account name. That is the entire permission set - it
              cannot read messages, files, or channels, which is worth saying
              out loud to a security-minded reviewer.
            </li>
            <li>
              <strong className="text-text-900">3. Set your hours.</strong>{" "}
              Start hour, end hour, days of the week, timezone. Repeat per
              workspace if you have several.
            </li>
            <li>
              <strong className="text-text-900">4. Forget about it.</strong> A
              cloud cron calls the official Slack Web API every 5 minutes
              inside your window and stops outside it, so evenings and weekends
              stay honestly grey.
            </li>
          </ol>
          <p className="text-lg text-text-700">
            This is why it beats the local workarounds engineers usually try
            first. A <code className="text-text-900">caffeinate</code> loop or
            a mouse jiggler only works while the machine is on, awake, and
            unlocked - see the{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternative
            </a>{" "}
            breakdown and the guide on keeping{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              Slack active with your computer locked
            </a>
            . For the general mechanics of the fix, read{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              Slack auto-away prevention
            </a>
            , or see how the options stack up on the{" "}
            <a href="/compare" className="underline text-text-900">
              comparison page
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
          title="Keep Your Slack Status Honest While You Ship"
          description="Set your work hours once and let the cloud handle the rest. Unlimited workspaces, official Slack API, 100% free forever - no credit card, no trial, no paid tier."
          primaryCTA={{ text: "Continue with Slack - Free", href: "/signin" }}
          secondaryCTA={{ text: "Read the Guides", href: "/guides" }}
        />
      </SEOPageLayout>
    </>
  );
}
