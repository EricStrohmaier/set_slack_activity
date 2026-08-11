import { Metadata } from "next";
import {
  Clock,
  Calendar,
  BellOff,
  Moon,
  Globe,
  Server,
  Settings,
  Smile,
  MessageSquare,
  CheckCircle,
  XCircle,
  Sun,
  Shield,
  Play,
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
  title: "Slack Set Working Hours: The Complete Guide",
  description:
    "How to set working hours in Slack: the native notification schedule, profile working hours, and the one thing Slack cannot schedule - your presence dot. Free forever fix included.",
  keywords: [
    "slack set working hours",
    "slack working hours",
    "slack work hours",
    "status scheduler for slack",
    "slack schedule status",
    "slack scheduling app",
    "slack notification schedule",
    "slack presence schedule",
  ],
  alternates: {
    canonical: "https://slackactivity.com/guides/slack-working-hours",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Slack Working Hours",
    url: "https://slackactivity.com/guides/slack-working-hours",
  },
];

const faqs = [
  {
    question: "How do I set working hours in Slack?",
    answer:
      "Slack gives you two native controls. Open Preferences, then Notifications, and set a notification schedule (Do Not Disturb) with the days and hours you want notifications delivered. Then open your profile, click Edit, and fill in the working hours field so teammates see your hours on your profile card. Neither setting touches your presence dot - Slack has no native way to schedule when you appear active.",
  },
  {
    question: "Does a Slack Do Not Disturb schedule keep me showing as active?",
    answer:
      "No. A Do Not Disturb schedule controls notification delivery only. It mutes pings outside your hours and shows a small zzz icon next to your name, but it never sets your presence to active. During your work hours your dot still turns grey after 30 minutes without interaction inside the Slack app, exactly as it would with no schedule at all.",
  },
  {
    question: "What is the difference between a status scheduler and a presence scheduler?",
    answer:
      "A status scheduler for Slack changes your custom status - the emoji and the text, set through the users.profile.set API. A presence scheduler changes the availability dot itself, through users.setPresence. They are different fields. A scheduled status of Working does not make your dot green, and Slackactivity schedules presence, not status.",
  },
  {
    question: "Can I set different working hours for different Slack workspaces?",
    answer:
      "Yes, in Slackactivity. Each connected workspace gets its own start hour, end hour, days of the week, and timezone, so a 09:00 to 17:00 Monday to Friday employer schedule and a Tuesday and Thursday afternoon client schedule can run side by side on one dashboard. You can connect unlimited workspaces, and it is free forever.",
  },
  {
    question: "Do overnight or night shift working hours work?",
    answer:
      "Yes. An overnight window such as 22:00 to 06:00 is treated as one continuous shift that crosses midnight rather than two separate blocks. The 5-minute cron keeps your presence active from the evening start hour through to the morning end hour, evaluated in the timezone you set for that workspace, so daylight saving shifts are handled for you.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slack Set Working Hours: The Complete Guide",
    "How to set working hours in Slack - the native Do Not Disturb notification schedule, profile working hours, and why neither controls your presence dot. Plus a free forever way to schedule presence per workspace.",
    "2026-08-11",
    "2026-08-11"
  ),
];

export default function SlackWorkingHoursPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack Set Working Hours: The Complete Guide
          </h1>
          <p className="text-xl text-text-600 mb-8">
            In Slack, set working hours in two places: a{" "}
            <strong>notification schedule</strong> (Do Not Disturb), which
            silences pings outside the days and hours you pick, and the{" "}
            <strong>working hours field on your profile</strong>, which tells
            teammates when you are normally around. Neither one controls your
            presence dot - Slack has no native way to schedule when you appear
            active, so your green dot still turns grey 30 minutes after you stop
            clicking inside the app, right in the middle of your working hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Schedule Your Hours - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
        </header>

        {/* Native options */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Slack Natively Offers for Work Hours
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack does have work hours features. They are just narrower than
            most people assume, and it is worth being precise about what each
            one actually does before reaching for a third-party tool.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-text-900">
            1. Notification schedule (Do Not Disturb)
          </h3>
          <p className="text-lg text-text-700 mb-6">
            Go to <strong>Preferences &rarr; Notifications &rarr; Notification
            schedule</strong> and set the window in which notifications are
            allowed through - every day, weekdays, or a custom per-day schedule,
            for example 09:00 to 17:00, Monday to Friday. Outside it Slack holds
            your notifications and shows a zzz icon beside your name. You can
            also trigger it ad hoc with{" "}
            <code className="px-1 border border-text-200 rounded">
              /dnd 2 hours
            </code>
            . This is a <strong>notification</strong> control: it does not make
            you appear active during the window, or offline outside it.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-text-900">
            2. Working hours on your Slack profile
          </h3>
          <p className="text-lg text-text-700 mb-6">
            Click your avatar, choose <strong>Profile</strong>, then{" "}
            <strong>Edit</strong>, and fill in the working hours and timezone
            fields. This surfaces on your profile card and as a hint when someone
            messages you at 23:00 your time. It is documentation for humans -
            useful, polite, entirely passive, and with no effect on your
            availability dot.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-text-900">
            3. Scheduled send and reminders
          </h3>
          <p className="text-lg text-text-700 mb-6">
            The clock icon beside the send button schedules a message for later,
            and{" "}
            <code className="px-1 border border-text-200 rounded">
              /remind me at 9am
            </code>{" "}
            does the same for your own follow-ups. Message timing, not presence.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<BellOff className="w-10 h-10" />}
              title="Notification schedule"
              description="Controls when notifications are delivered. Mutes pings outside your hours. Has zero effect on whether your dot is green or grey."
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Profile working hours"
              description="A human-readable field on your profile card. Teammates can read it. Slack does not act on it in any automated way."
            />
            <FeatureCard
              icon={<MessageSquare className="w-10 h-10" />}
              title="Schedule send"
              description="Delays a message until a chosen time. Great etiquette across timezones, but it is about messages, not your availability."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="Presence schedule"
              description="Does not exist natively. There is no setting on Free, Pro, Business+, or Enterprise Grid that keeps your dot green during a chosen window."
            />
          </div>
        </Section>

        {/* Status scheduler vs presence */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Status Scheduler for Slack vs. Presence Scheduling
          </h2>
          <p className="text-lg text-text-700 mb-6">
            A lot of searches for a <strong>status scheduler for Slack</strong>{" "}
            or a <strong>Slack scheduling app</strong> are really two different
            requests wearing the same words. Slack keeps two separate fields
            next to your name, and mixing them up is the single most common
            reason a tool disappoints people.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Smile className="w-10 h-10" />}
              title="Status (emoji + text)"
              description="Set manually or through the users.profile.set API. Things like a coffee cup and In a meeting. A status scheduler rotates this on a timetable. It never changes your dot."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Presence (the dot)"
              description="Active or away, set through the users.setPresence API. This is the green or grey circle colleagues actually scan when they wonder whether you are working. Slackactivity schedules this one."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            So if you want your status to read &quot;Deep work&quot; from 09:00
            to 12:00 and &quot;Available&quot; after lunch, you want a Slack
            schedule status tool. If you want to <em>look available</em> across
            your whole working day without babysitting the app, you want a
            presence scheduler - because a beautifully scheduled status sitting
            next to a grey dot still reads as offline. Our guide on{" "}
            <a
              href="/guides/how-to-appear-online-on-slack"
              className="underline text-text-900"
            >
              how to appear online on Slack
            </a>{" "}
            goes deeper on the distinction.
          </p>
        </Section>

        {/* The gap */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Gap: Slack Work Hours Do Not Govern Your Dot
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Here is the mechanic underneath all of this. Slack&apos;s desktop
            app flips your presence from active to away after{" "}
            <strong>30 consecutive minutes</strong> with no mouse, keyboard, or
            window interaction inside Slack itself. Not 30 minutes away from your
            computer - 30 minutes without touching the Slack window. On mobile
            it is far stricter: background the app or lock the phone and you go
            away almost immediately. There is{" "}
            <strong>no setting on any Slack plan</strong>, and no workspace admin
            control, that changes that timer.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Which means the working hours you carefully configured are invisible
            to the availability system. A 09:00 to 17:00 notification schedule
            does not tell Slack &quot;keep me active from 09:00 to 17:00&quot;.
            It tells Slack &quot;deliver notifications from 09:00 to
            17:00&quot;. Spend two hours in an IDE, a Figma file, or a Zoom call
            and you turn grey at minute 30, mid-shift, while doing exactly the
            work you are paid for -{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>{" "}
            plus{" "}
            <a
              href="/guides/when-does-slack-go-inactive"
              className="underline text-text-900"
            >
              when Slack goes inactive
            </a>{" "}
            break the timers down in full.
          </p>
          <p className="text-lg text-text-700">
            The gap, stated plainly: Slack lets you schedule{" "}
            <strong>notifications</strong> and schedule{" "}
            <strong>messages</strong>, and lets you write your hours on your
            profile. It does not let you schedule{" "}
            <strong>presence</strong>. That is the hole Slackactivity fills, and
            it fills it free forever.
          </p>
        </Section>

        {/* How to set it up */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How to Set Slack Working Hours That Actually Hold
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slackactivity runs in the cloud on a 5-minute cron and calls the
            official Slack Web API method{" "}
            <code className="px-1 border border-text-200 rounded">
              users.setPresence
            </code>{" "}
            during the hours you configure. Nothing installs on your machine, so
            nothing depends on your machine being awake - the lid can be closed
            and your dot stays green until your end hour. Setup takes about two
            minutes:
          </p>
          <ol className="space-y-4 text-lg text-text-700 mb-8 list-decimal pl-6">
            <li>
              Go to{" "}
              <a href="/signin" className="underline text-text-900">
                /signin
              </a>{" "}
              and click <strong>Continue with Slack</strong>. Slack&apos;s own
              OAuth screen shows you exactly what is being requested.
            </li>
            <li>
              Pick the workspace to connect. The requested scopes are minimal -
              enough to set your own presence and profile, and nothing that can
              read your messages, files, or channels.
            </li>
            <li>
              Set your <strong>start hour</strong> and{" "}
              <strong>end hour</strong> for that workspace. Whole hours, in your
              own terms: 09 to 17, 08 to 16, 13 to 21.
            </li>
            <li>
              Choose your <strong>days of the week</strong>. Monday to Friday is
              the default; a four-day week or a Tuesday, Thursday, Saturday
              pattern is a couple of clicks.
            </li>
            <li>
              Set the <strong>timezone</strong> for that workspace. This is what
              the schedule is evaluated against, so daylight saving is handled
              for you.
            </li>
            <li>
              Repeat for every other workspace. There is no cap - connect
              unlimited workspaces on one dashboard, each with its own schedule.
            </li>
            <li>
              Flip on <strong>vacation mode</strong> when you are off. It pauses
              everything without deleting your configuration, and you switch it
              back when you return.
            </li>
          </ol>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud"
              description="A 5-minute cron refreshes presence from Slack's own API. Laptop closed, asleep, or off makes no difference to the dot."
            />
            <FeatureCard
              icon={<Settings className="w-10 h-10" />}
              title="Per-workspace schedules"
              description="Start hour, end hour, days, and timezone are configured separately for every workspace you connect. Unlimited workspaces."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Minimal scopes"
              description="It cannot read your messages, files, or channels. The only thing it touches is your own presence during your own hours."
            />
            <FeatureCard
              icon={<Play className="w-10 h-10" />}
              title="Free forever"
              description="No trial countdown, no credit card, no paid tier waiting behind the feature you need. 100% free, permanently."
            />
          </div>
        </Section>

        {/* Worked example */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            A Worked Example: Two Workspaces, Two Schedules
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Take a designer in Vienna with a salaried job and one retained
            client. Two Slack workspaces, two very different sets of work hours,
            one dashboard.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Workspace A - employer"
              description="Timezone Europe/Vienna, 09:00 to 17:00, Monday to Friday. The dot goes green a few minutes past nine and drops at five. Weekends stay grey."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Workspace B - client"
              description="Timezone America/New_York, 13:00 to 17:00, Tuesday and Thursday only. Green during the contracted afternoons, invisible the rest of the week."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            The two schedules run independently. On a Tuesday she is green in
            the employer workspace from 09:00 Vienna time and green in the client
            workspace from 13:00 New York time (19:00 Vienna), which is precisely
            the overlap she is being paid for. On a Wednesday the client
            workspace stays grey all day, which is also correct: presence that is
            green when you are not working is not a feature, it is noise, and it
            quietly trains people to ignore your dot.
          </p>
          <p className="text-lg text-text-700">
            That is the part worth stressing: scheduling presence properly makes
            the dot <em>more</em> honest, not less. Your availability tracks the
            hours you actually committed to, instead of tracking whether you
            happened to click a Slack channel in the last half hour. If your dot
            is currently stuck the other way around,{" "}
            <a
              href="/guides/slack-stuck-on-away"
              className="underline text-text-900"
            >
              Slack stuck on away
            </a>{" "}
            covers the manual override that traps most people.
          </p>
        </Section>

        {/* Overnight windows */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Night Shifts and Overnight Working Hours
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Plenty of Slack work hours do not fit inside a single calendar day.
            Support rotations, NOC and on-call shifts, offshore teams covering a
            head office in another hemisphere, and anyone deliberately working
            22:00 to 06:00 all need a window that crosses midnight.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Overnight windows"
              description="A start hour later than the end hour - 22 to 06 - is read as one continuous shift crossing midnight, not as two broken fragments."
            />
            <FeatureCard
              icon={<Sun className="w-10 h-10" />}
              title="Timezone-anchored"
              description="The window is evaluated in the timezone you set for that workspace, so a shift stays put when clocks change for daylight saving."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            Set 22 as the start hour and 06 as the end hour and the cron keeps
            your presence active straight through the night, ending at six in the
            morning. Day selection follows the day the shift{" "}
            <em>starts</em> on, so a Friday night shift running to Saturday
            morning is a Friday selection. If your rotation genuinely alternates
            week by week, the practical move is to update the hours when the
            rotation flips, or park the workspace in vacation mode during your
            off week.
          </p>
          <p className="text-lg text-text-700">
            This matters more for night workers than anyone else: overnight is
            exactly when a locked laptop or a sleeping machine takes your dot
            grey, and a cloud cron does not get tired at 03:00. It is the same
            reason{" "}
            <a
              href="/use-cases/remote-workers"
              className="underline text-text-900"
            >
              remote workers
            </a>{" "}
            hit the presence problem harder than office staff do.
          </p>
        </Section>

        {/* Choosing a tool */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Choosing a Slack Scheduling App
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Three things separate a scheduling tool that survives real use from
            one you abandon in a fortnight. First,{" "}
            <strong>where it runs</strong>: anything local - mouse jigglers, auto
            clickers, keep-awake utilities, a browser tab you must leave open -
            stops the moment you close the lid. Second,{" "}
            <strong>which field it sets</strong>: confirm it schedules presence
            through{" "}
            <code className="px-1 border border-text-200 rounded">
              users.setPresence
            </code>{" "}
            and not just a custom status. Third,{" "}
            <strong>what it can read</strong>: a presence tool has no business
            requesting message, file, or channel scopes.
          </p>
          <p className="text-lg text-text-700">
            Slackactivity is deliberately narrow on all three: cloud cron,
            presence only, minimal scopes - and 100% free forever, with no paid
            tier to upgrade to. Read{" "}
            <a href="/how-it-works" className="underline text-text-900">
              how it works
            </a>
            , see the{" "}
            <a href="/compare" className="underline text-text-900">
              comparison
            </a>{" "}
            against the alternatives, or browse the rest of the{" "}
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
          title="Set Your Working Hours Once, Then Forget Them"
          description="Slackactivity keeps your Slack presence green through the official API during the hours, days, and timezone you choose - per workspace, with the lid closed. Unlimited workspaces, free forever."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Compare Alternatives", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
