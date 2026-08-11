import { Metadata } from "next";
import {
  Calendar,
  Clock,
  Server,
  DollarSign,
  Shield,
  Users,
  Bell,
  Globe,
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
  title: "Statuscal Alternative? Slackactivity vs Status Calendar",
  description:
    "Status Calendar syncs your calendar into your Slack status text. Slackactivity keeps your presence dot green on a schedule, free forever. Here is which you need.",
  keywords: [
    "statuscal alternative",
    "status calendar slack alternative",
    "slack status calendar sync",
    "slack presence vs status",
    "slackactivity vs status calendar",
    "slack green dot automation",
  ],
  alternates: {
    canonical:
      "https://slackactivity.com/compare/slackactivity-vs-status-calendar",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Compare", url: "https://slackactivity.com/compare" },
  {
    name: "Slackactivity vs Status Calendar",
    url: "https://slackactivity.com/compare/slackactivity-vs-status-calendar",
  },
];

const faqs = [
  {
    question: "What is the difference between Slack presence and Slack status?",
    answer:
      "Presence is the green or grey dot next to your name - Slack's machine-generated read on whether you are available. It is set through the users.setPresence API method. Status is the emoji and short text you write yourself, like a calendar emoji plus 'In a meeting until 3pm', and it is set through users.profile.set. They are stored separately, displayed separately, and one never changes the other.",
  },
  {
    question: "Is Slackactivity a Status Calendar alternative?",
    answer:
      "Only partly, and it is worth being honest about that. Status Calendar reads your calendar and writes meeting context into your Slack status text and emoji. Slackactivity does not touch your status text at all - it keeps your presence dot green during the work hours you configure. If what you actually wanted was a green dot that survives a closed laptop, Slackactivity is the tool. If you wanted teammates to see what meeting you are in, a calendar sync tool is the tool.",
  },
  {
    question: "Can I run Status Calendar and Slackactivity at the same time?",
    answer:
      "Yes. They write to two different parts of your Slack profile, so they do not conflict or overwrite each other. A common setup is calendar sync handling your status text and emoji while Slackactivity holds your presence green from 9am to 6pm on weekdays. Slack applies both independently.",
  },
  {
    question: "Does setting a Slack custom status keep me from going away?",
    answer:
      "No. Slack's 30-minute desktop auto-away timer runs on interaction with the Slack app itself and ignores your custom status entirely. You can have a status that says 'Heads down until 4pm' and still show as away at 3:15pm. On mobile it is stricter - Slack flips you to away almost immediately after you background the app.",
  },
  {
    question: "How much does Slackactivity cost?",
    answer:
      "Nothing. Slackactivity is free forever - no credit card, no trial period, no paid tier, no usage caps on the number of Slack workspaces you connect. Sign in at /signin with Continue with Slack and set your work hours.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slackactivity vs Status Calendar: Presence vs Status, Explained",
    "Status Calendar syncs your calendar into your Slack status text and emoji. Slackactivity keeps your Slack presence dot green on a schedule. A clear, fair comparison of two different tools.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function SlackactivityVsStatusCalendarPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slackactivity vs Status Calendar: Which One Do You Actually Need?
          </h1>
          <p className="text-xl text-text-600 mb-6">
            These two tools are not competitors - they change different fields
            in Slack. Status Calendar (statuscal.com) reads your calendar and
            writes your <strong>status</strong>: the emoji and text like
            &quot;📅 In a meeting until 3pm&quot;. Slackactivity manages your{" "}
            <strong>presence</strong>: the green or grey availability dot next
            to your name, kept green on a schedule you choose, free forever.
          </p>
          <p className="text-lg text-text-700 mb-8">
            If teammates keep asking &quot;are you around?&quot; you want
            presence. If they keep interrupting you mid-meeting, you want
            calendar sync. Below is the exact technical difference, an honest
            look at what each tool is good at, and why plenty of people end up
            running both.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Try Slackactivity - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* The core distinction */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Slack Presence vs Slack Status: The Distinction Nobody Explains
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack stores two completely separate signals about you, and almost
            every confused support thread about &quot;my Slack status keeps
            going away&quot; comes from mixing them up.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Presence - the green dot"
              description="A binary value: active or away. Slack decides it for you based on interaction with the Slack app, and flips you to away after 30 minutes of desktop inactivity. Written via the users.setPresence API method. This is what Slackactivity manages."
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Status - the emoji and text"
              description="Free-form context you author yourself: an emoji, up to 100 characters of text, and an optional expiry time. Written via the users.profile.set API method. This is what calendar sync tools like Status Calendar automate."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            The practical consequence: a custom status does{" "}
            <strong>nothing</strong> to stop the away dot. You can set &quot;🎧
            Heads down until 4pm&quot; and Slack will still grey you out at
            3:15pm, because the 30-minute idle timer only watches whether you
            clicked inside Slack. Slack offers no setting to change that timeout
            on any plan, free or paid. We break the mechanics down further in{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why does Slack show me as away
            </a>
            .
          </p>
        </Section>

        {/* What Status Calendar is good at */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Status Calendar Does Well
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Calendar-to-status sync is a genuinely good idea and Status Calendar
            executes the concept cleanly. At the time of writing, statuscal.com
            connects your Google Calendar to Slack and, when an event starts,
            automatically writes a matching emoji and status message to your
            profile - then clears it when the event ends. It can also toggle
            Slack Do Not Disturb for the duration of an event, and it gives you
            Today, Tomorrow and This Week views inside Slack so you can see what
            will be broadcast before it happens. Its free plan covers one
            connected Google Calendar with emoji, message and notification
            settings; a Pro plan listed at $5 per month (or $36 billed annually)
            and marked Early Access with a waitlist adds multiple calendars,
            custom status rules based on event type or title, daily and weekly
            event summaries, and event reminders.
          </p>
          <p className="text-lg text-text-700 mb-6">
            One thing it does better than us on the team side: Status Calendar
            installs into a workspace and anyone in that workspace can then
            connect their own Google account and use it. Slackactivity is set up
            per person. If you are rolling something out to a whole team,
            that difference matters.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Where that beats anything Slackactivity does: it communicates
            <em> why</em> you are unavailable. &quot;In a 1:1 until 2:30&quot;
            is far more useful to a colleague than a grey dot with no
            explanation, and it reduces the &quot;quick question?&quot; pings
            that arrive four minutes into a customer call. If your problem is
            interruptions during meetings, a calendar sync tool solves it and
            Slackactivity does not. We would rather say that plainly than
            pretend otherwise.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Bell className="w-10 h-10" />}
              title="Context for teammates"
              description="Status text tells people what you are doing and when you will be free. Presence alone cannot express that - it is only two values, active or away."
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Event-driven, not schedule-driven"
              description="Calendar sync reacts to real events on your calendar, so it is accurate on days that do not follow your normal routine. It also means it does nothing at all if your calendar is empty."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            One label worth reading carefully: the Pro tier advertises a
            &quot;working hours&quot; setting with a default status inside and
            outside those hours. That is still the status field - the emoji and
            text - not the presence dot. It will happily show &quot;🟢
            Working&quot; as your status text while Slack simultaneously renders
            you grey and away, because those are two different values rendered
            in two different places in the Slack UI.
          </p>
        </Section>

        {/* What Slackactivity does */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Slackactivity Does
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slackactivity solves the other half of the problem: you are working,
            you are reachable, and Slack keeps telling everyone you are away
            because you spent 40 minutes in your editor instead of clicking
            around in Slack. You connect Slack once, set a start hour, an end
            hour, the days of the week and a timezone per workspace, and a cloud
            cron job refreshes your presence every 5 minutes inside that window
            using the official Slack Web API.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud, not on your laptop"
              description="Nothing is installed on your machine. The 5-minute cron runs on our servers, so your presence holds when the laptop is closed, asleep, or switched off entirely."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Per-workspace working hours"
              description="Start hour, end hour, days of week and timezone are configured separately for each workspace. Outside those hours you go away normally, which is the point - you are not pretending to be online at 2am."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Unlimited workspaces, one dashboard"
              description="Contractors and consultants can connect every client workspace with its own schedule and manage them all from a single screen. There is no workspace limit and no per-seat charge."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Minimal OAuth scopes"
              description="Slackactivity requests users:write to set presence and users:read for your account name. It cannot read your messages, files, or channels - the permissions to do so are never requested."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Vacation mode"
              description="Flip one switch and automation pauses across every connected workspace until you turn it back on. No need to unpick each schedule before you travel."
            />
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="Free forever"
              description="No credit card, no trial countdown, no paid tier waiting behind a feature you need. Every capability listed on this page is included at zero cost, permanently."
            />
          </div>
        </Section>

        {/* Side by side */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Side by Side
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-text-200">
                  <th className="py-3 pr-4 text-text-900 font-semibold">
                    What you want
                  </th>
                  <th className="py-3 pr-4 text-text-900 font-semibold">
                    Status Calendar
                  </th>
                  <th className="py-3 text-text-900 font-semibold">
                    Slackactivity
                  </th>
                </tr>
              </thead>
              <tbody className="text-text-700">
                <tr className="border-b border-text-200">
                  <td className="py-3 pr-4">Green presence dot on a schedule</td>
                  <td className="py-3 pr-4">No</td>
                  <td className="py-3">Yes - core feature</td>
                </tr>
                <tr className="border-b border-text-200">
                  <td className="py-3 pr-4">Status emoji and text from calendar</td>
                  <td className="py-3 pr-4">Yes - core feature</td>
                  <td className="py-3">No</td>
                </tr>
                <tr className="border-b border-text-200">
                  <td className="py-3 pr-4">Works with laptop closed or asleep</td>
                  <td className="py-3 pr-4">Cloud-based, yes</td>
                  <td className="py-3">Cloud-based, yes</td>
                </tr>
                <tr className="border-b border-text-200">
                  <td className="py-3 pr-4">Toggles Do Not Disturb</td>
                  <td className="py-3 pr-4">Yes</td>
                  <td className="py-3">No</td>
                </tr>
                <tr className="border-b border-text-200">
                  <td className="py-3 pr-4">Unlimited Slack workspaces</td>
                  <td className="py-3 pr-4">Not advertised</td>
                  <td className="py-3">Yes</td>
                </tr>
                <tr className="border-b border-text-200">
                  <td className="py-3 pr-4">Needs a calendar to be useful</td>
                  <td className="py-3 pr-4">Yes</td>
                  <td className="py-3">No</td>
                </tr>
                <tr className="border-b border-text-200">
                  <td className="py-3 pr-4">Installed for a whole workspace</td>
                  <td className="py-3 pr-4">Yes</td>
                  <td className="py-3">Per person</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Price</td>
                  <td className="py-3 pr-4">
                    Free plan for 1 calendar; Pro listed at $5/mo or $36/yr, at
                    the time of writing
                  </td>
                  <td className="py-3">Free forever, every feature</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-text-700 mt-6">
            Read that table as a shopping list rather than a scoreboard. Two of
            those rows describe things Status Calendar does and Slackactivity
            deliberately does not, and one describes the reverse. Neither tool is
            trying to be the other.
          </p>
        </Section>

        {/* Running both */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Running Both Together
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Because presence and status live in different API surfaces, the two
            tools cannot overwrite each other. A calendar sync app calling
            users.profile.set has no effect on the presence value, and
            Slackactivity calling users.setPresence never touches your status
            text or emoji. Running both is not a workaround - it is just how
            Slack is designed.
          </p>
          <p className="text-lg text-text-700 mb-6">
            The combined setup most people land on: calendar sync writes
            meeting context all day, and Slackactivity holds presence green from
            your start hour to your end hour on working days. Your teammates see
            a green dot that means &quot;within working hours&quot; and status
            text that means &quot;here is what I am doing right now&quot;. That
            is a far more honest picture than a dot that greys out because you
            were concentrating.
          </p>
          <p className="text-lg text-text-700">
            One caveat worth naming: if a calendar sync tool enables Slack Do
            Not Disturb during an event, notifications are suppressed and Slack
            shows a moon icon regardless of what your presence value is. That is
            expected behaviour, not a conflict. If you would rather stay
            reachable, leave the Do Not Disturb option off in your calendar
            tool.
          </p>
        </Section>

        {/* Which to pick */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Which One Should You Pick?
          </h2>
          <ul className="space-y-4 text-lg text-text-700 mb-6">
            <li>
              <strong className="text-text-900">
                Pick calendar sync if:
              </strong>{" "}
              your calendar is busy, your frustration is people pinging you
              during meetings, and you want teammates to see what you are in and
              when you are out. That is a real problem and a status tool is the
              right shape of solution for it.
            </li>
            <li>
              <strong className="text-text-900">
                Pick Slackactivity if:
              </strong>{" "}
              your frustration is the grey dot itself - deep work sessions,
              long calls in another app, a locked screen over lunch, or a
              manager who reads presence as attendance. See{" "}
              <a
                href="/solutions/slack-auto-away-prevention"
                className="underline text-text-900"
              >
                auto-away prevention
              </a>{" "}
              and the{" "}
              <a
                href="/use-cases/remote-workers"
                className="underline text-text-900"
              >
                remote workers use case
              </a>{" "}
              for the specifics.
            </li>
            <li>
              <strong className="text-text-900">Pick both if:</strong> you want
              context <em>and</em> availability. They stack cleanly, and since
              Slackactivity is free forever, adding it costs you nothing but the
              90 seconds it takes to set your hours.
            </li>
          </ul>
          <p className="text-lg text-text-700">
            More head-to-heads are collected on our{" "}
            <a href="/compare" className="underline text-text-900">
              comparison hub
            </a>
            , including the mouse jiggler and desktop-app approaches to the same
            presence problem.
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
          title="Keep the Green Dot. Keep Your Calendar Tool."
          description="Slackactivity handles Slack presence on your schedule, across unlimited workspaces, through the official Slack API. Free forever - no credit card, no trial, no paid tier."
          primaryCTA={{ text: "Continue with Slack - Free", href: "/signin" }}
          secondaryCTA={{ text: "See How It Works", href: "/how-it-works" }}
        />
      </SEOPageLayout>
    </>
  );
}
