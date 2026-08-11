import { Metadata } from "next";
import {
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  Zap,
  Shield,
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
  title: "Sync Slack Status with Google Calendar: Full Guide",
  description:
    "Slack's official Google Calendar app sets your custom status during meetings - but never your green dot. Here's how to sync both, and keep Slack active for free.",
  keywords: [
    "sync slack status with google calendar",
    "slack google calendar status",
    "slack status during meetings",
    "slack calendar sync",
    "in a meeting slack status",
    "slack presence during meetings",
  ],
  alternates: {
    canonical:
      "https://slackactivity.com/guides/sync-slack-status-with-google-calendar",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Sync Slack Status with Google Calendar",
    url: "https://slackactivity.com/guides/sync-slack-status-with-google-calendar",
  },
];

const faqs = [
  {
    question: "How do I sync my Slack status with Google Calendar?",
    answer:
      "Install the official Google Calendar app from the Slack App Directory, connect your Google account, then open the app's Home tab in Slack and turn on the setting that updates your status during events. Slack will then set a calendar emoji and 'In a meeting' text while an accepted event is running, and clear it when the event ends.",
  },
  {
    question: "Does calendar sync keep my Slack dot green during meetings?",
    answer:
      "No. Custom status (emoji plus text) and presence (the green or grey dot) are two separate systems in Slack. Calendar sync only writes your custom status. Your dot is still controlled by Slack's idle timer, which flips you to away after 30 minutes without interaction in the Slack app - so a one-hour meeting usually ends with a grey dot and an 'In a meeting' status side by side.",
  },
  {
    question: "Is Slack's Google Calendar app free?",
    answer:
      "Yes. The Google Calendar app is published by Slack, listed in the Slack App Directory, and costs nothing to install on free or paid Slack plans. Some third-party calendar-sync tools with more advanced rules charge a subscription; check their sites for current pricing.",
  },
  {
    question: "Can I change Slack's 30-minute away timeout instead?",
    answer:
      "No. Slack offers no setting to extend or disable the desktop auto-away timer on any plan, free or paid. Mobile is even stricter - it usually flips you to away within moments of backgrounding the app. The only reliable fix is presence automation that refreshes your status through the Slack API.",
  },
  {
    question: "What is the best setup for meetings and deep work?",
    answer:
      "Use both layers. Let Google Calendar sync handle context so colleagues see what you are in, and let Slackactivity handle presence so your dot stays green through your configured work hours. Slackactivity runs in the cloud on a 5-minute cron using the official Slack API, works across unlimited workspaces, and is 100% free forever with no credit card.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "How to Sync Your Slack Status with Google Calendar",
    "Slack's official Google Calendar app sets your custom status during meetings - but never your green presence dot. Here's how each option really works and how to cover both.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function SyncSlackStatusWithGoogleCalendarPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            How to Sync Your Slack Status with Google Calendar
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Install the official Google Calendar app from the Slack App
            Directory, connect your Google account, and switch on the
            &quot;update my status during events&quot; setting - Slack will then
            show a calendar emoji and &quot;In a meeting&quot; while an accepted
            event is running. What no calendar sync does, on any tool, is keep
            your presence dot green: that dot is driven by Slack&apos;s separate
            idle timer, which is a different problem with a different fix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Keep Your Dot Green - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* Option 1 */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Option 1: Slack&apos;s Official Google Calendar App
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack publishes and maintains a Google Calendar app itself. It is
            free on every Slack plan and it is the right starting point for most
            people. Setup takes about two minutes:
          </p>
          <ol className="space-y-4 text-text-700 mb-6">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">1.</span>
              <div>
                Open the Slack App Directory and search for{" "}
                <strong className="text-text-900">Google Calendar</strong>. Make
                sure the publisher is Slack itself - there are several
                third-party calendar apps with similar names.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">2.</span>
              <div>
                Click <strong className="text-text-900">Add to Slack</strong>{" "}
                and authorise the Google account whose calendar you want to use.
                Some workspaces require an admin to approve the install first.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">3.</span>
              <div>
                Open the Google Calendar app from the{" "}
                <strong className="text-text-900">Apps</strong> section of your
                Slack sidebar and go to its{" "}
                <strong className="text-text-900">Home</strong> tab, where the
                settings live.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">4.</span>
              <div>
                Turn on the option to update your Slack status during events.
                Most people also enable the Do Not Disturb option so
                notifications pause while a meeting is running.
              </div>
            </li>
          </ol>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Automatic 'In a Meeting' Status"
              description="While an accepted event is running, Slack sets a calendar emoji and meeting text on your profile, then clears it when the event ends."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Reminders and RSVPs"
              description="You get a DM before events start, can respond to invites without leaving Slack, and get one-click join links for Meet or Zoom calls."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            Known limits worth knowing before you rely on it: the app generally
            only reacts to events you have accepted, all-day events are usually
            skipped so a single day-long placeholder does not blank out your
            status, and if you manually set a custom status the app will not
            always override it. It also only ever touches status text and emoji.
          </p>
        </Section>

        {/* Option 2 */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Option 2: Dedicated Calendar-Sync Tools
          </h2>
          <p className="text-lg text-text-700 mb-6">
            If the official app is too blunt for you, a dedicated calendar-sync
            product such as Status Calendar exists precisely to add the
            controls Slack left out. To be fair to them: this is genuinely a
            category where a specialist beats the built-in app. The kind of
            control these tools add typically includes:
          </p>
          <ul className="space-y-3 text-text-700 mb-6 list-disc pl-6">
            <li>
              Rules that map event titles to specific emoji and text - a
              1:1 becomes a coffee cup, an interview becomes a headset, focus
              blocks become a no-entry sign.
            </li>
            <li>
              Syncing more than one calendar, including a personal calendar
              whose event titles you do not want broadcast to colleagues.
            </li>
            <li>
              Ignoring or including events by keyword, attendee count, or
              declined status.
            </li>
            <li>
              Setting Do Not Disturb windows that follow the calendar rather
              than a fixed schedule.
            </li>
          </ul>
          <p className="text-lg text-text-700">
            These are usually paid subscriptions, so check current pricing on
            their own site before committing. And note the more important point:
            more expressive status rules still do not change the dot. See our{" "}
            <a
              href="/compare/slackactivity-vs-status-calendar"
              className="underline text-text-900"
            >
              Slackactivity vs Status Calendar comparison
            </a>{" "}
            for how the two categories differ.
          </p>
        </Section>

        {/* The distinction */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Part Nobody Explains: Status Is Not Presence
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack has two completely independent signals on your profile, and
            calendar sync only touches one of them.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Custom Status (emoji + text)"
              description="What calendar sync writes. Anything you or an app chooses: 'In a meeting', 'Commuting', 'Heads down'. It is descriptive, and nothing enforces that it is true."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Presence (the green or grey dot)"
              description="Driven by Slack's idle timer. 30 minutes with no interaction in the desktop app flips you to grey - and mobile flips almost the moment you background the app."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            Play that out over a real meeting. You join a 60-minute call at
            10:00. Calendar sync stamps &quot;In a meeting&quot; on your profile
            - correct and useful. But you are talking, not clicking around in
            Slack, so at 10:30 Slack&apos;s idle timer fires and your dot turns
            grey. For the second half of that meeting your teammates see a grey
            dot, and grey is the signal most managers actually scan for. Worse,
            the meeting ends, the status clears, and you are left plain away
            while you are working through the follow-ups.
          </p>
          <p className="text-lg text-text-700 mb-6">
            There is no way to fix this inside Slack. Slack offers{" "}
            <strong className="text-text-900">no setting on any plan</strong>,
            free or paid, to lengthen or disable the 30-minute desktop timeout.
            Manually clicking &quot;Set yourself as active&quot; buys you
            exactly 30 more minutes. We break the mechanics down further in{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>{" "}
            and{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              keeping Slack active with your computer locked
            </a>
            .
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="What Calendar Sync Cannot Do"
              description="Change your presence dot, survive the 30-minute idle timer, or keep you visible when your laptop sleeps, locks, or closes."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="What Presence Automation Does"
              description="Refreshes your presence through Slack's official API on a schedule you set, so the dot stays green through calls, deep work, and closed laptops."
            />
          </div>
        </Section>

        {/* The combined setup */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Honest Answer: Use Both Layers
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Calendar sync and presence automation solve different halves of the
            same problem, and they do not conflict - one writes your status
            text, the other writes your presence. Run them together and your
            profile finally tells the truth: green because you are working, with
            context about what you are in.
          </p>
          <p className="text-lg text-text-700 mb-6">
            That second half is what Slackactivity does. It runs in the cloud on
            a 5-minute cron and calls the official Slack Web API
            (users.setPresence) to keep you green during the working hours you
            configure. Nothing is installed on your machine, so it keeps working
            when your laptop is closed, asleep, or switched off - which is
            exactly the scenario a mouse jiggler cannot cover.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Cloud Cron, Official API"
              description="A 5-minute job calls Slack's documented users.setPresence endpoint. No background app, no simulated input, no browser tab left open."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Your Hours, Your Timezone"
              description="Set a start hour, end hour and days of week per workspace. Outside those hours you go away normally, like a person who logs off."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Unlimited Workspaces"
              description="Client workspace, contractor workspace, community workspace - connect as many as you like and manage them from one dashboard. Vacation mode pauses everything."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Minimal OAuth Scopes"
              description="Only users:write to set presence and users:read for your account name. It cannot read your messages, files, or channels - it has no permission to."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            Compare that scope list to a calendar-sync tool, which by design
            needs read access to your calendar events. Neither is wrong; they
            simply need different permissions to do different jobs.
          </p>
          <div className="flex items-start gap-4 rounded-lg border border-accent-400 bg-background-100 p-6">
            <DollarSign className="w-10 h-10 text-text-800 shrink-0" />
            <p className="text-lg text-text-700">
              <strong className="text-text-900">
                Slackactivity is 100% free forever.
              </strong>{" "}
              No credit card, no trial that expires, no paid tier, no seat
              limit. The free-forever plan is the whole product - unlimited
              workspaces, per-workspace schedules and vacation mode included.
            </p>
          </div>
        </Section>

        {/* Setup checklist */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Full Setup Checklist (About 5 Minutes)
          </h2>
          <ol className="space-y-4 text-text-700">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">1.</span>
              <div>
                Install the official Google Calendar app in Slack and enable
                automatic status updates during events. This handles the
                &quot;what am I doing&quot; layer.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">2.</span>
              <div>
                Decide whether you want DND during meetings. It is genuinely
                useful for focused calls, but remember DND also mutes urgent
                pings.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">3.</span>
              <div>
                Go to{" "}
                <a href="/signin" className="underline text-text-900">
                  /signin
                </a>{" "}
                and click &quot;Continue with Slack&quot; to connect
                Slackactivity. This handles the presence layer - the dot.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">4.</span>
              <div>
                Set your start hour, end hour, days of week and timezone for
                each workspace you connected. Nine to five, Monday to Friday, is
                a sensible default.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">5.</span>
              <div>
                Sanity-check it: lock your laptop for 45 minutes and look at
                your profile from a colleague&apos;s account or your phone. The
                dot should still be green.
              </div>
            </li>
          </ol>
          <p className="text-lg text-text-700 mt-6">
            More on the meeting-specific case in{" "}
            <a
              href="/solutions/keep-slack-active-during-meetings"
              className="underline text-text-900"
            >
              keeping Slack active during meetings
            </a>
            , the general mechanics in{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              Slack auto-away prevention
            </a>
            , and the rest of the library in our{" "}
            <a href="/guides" className="underline text-text-900">
              guides
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
          title="Calendar Sync Handles the Text. We Handle the Dot."
          description="Connect Slack in one click, set your working hours, and stay green through every meeting - free forever, no credit card."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Compare Tools", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
