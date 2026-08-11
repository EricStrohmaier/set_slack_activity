import { Metadata } from "next";
import {
  Smile,
  Clock,
  Coffee,
  Calendar,
  Globe,
  Sun,
  Zap,
  Eye,
  Server,
  Settings,
  MessageSquare,
  Shield,
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
  title: "Funny Slack Status Ideas: 90+ Examples You Can Copy",
  description:
    "90+ copy-paste Slack status examples with emoji - funny Slack status lines for work, focus blocks, meetings, lunch, PTO, remote work and seasons, plus how to set and auto-clear one.",
  keywords: [
    "funny slack status",
    "slack status examples",
    "cool slack status",
    "funny slack status for work",
    "short funny slack status for work",
    "slack status emoji",
    "slack status ideas",
  ],
  alternates: {
    canonical: "https://slackactivity.com/guides/slack-status-ideas",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Slack Status Ideas",
    url: "https://slackactivity.com/guides/slack-status-ideas",
  },
];

const funnyStatuses = [
  { emoji: "🧟", text: "Pre-coffee, do not engage" },
  { emoji: "🔥", text: "This is fine" },
  { emoji: "🐈", text: "Being supervised by my cat" },
  { emoji: "🪫", text: "Battery at 4%" },
  { emoji: "🦆", text: "Explaining it to a rubber duck" },
  { emoji: "🤹", text: "Juggling four priorities" },
  { emoji: "🧑‍🍳", text: "Cooking something in staging" },
  { emoji: "🐌", text: "Replying at the speed of email" },
  { emoji: "🥸", text: "Pretending to understand the roadmap" },
  { emoji: "🧹", text: "Cleaning up my own mess" },
  { emoji: "🛎️", text: "Ring for slow service" },
  { emoji: "🧊", text: "Cooling off after standup" },
  { emoji: "🎣", text: "Fishing for requirements" },
  { emoji: "🚀", text: "Shipping it (probably)" },
];

const shortStatuses = [
  { emoji: "🎧", text: "Focusing" },
  { emoji: "📅", text: "Meeting" },
  { emoji: "🥪", text: "Lunch" },
  { emoji: "🌴", text: "PTO" },
  { emoji: "🤒", text: "Sick" },
  { emoji: "✈️", text: "Traveling" },
  { emoji: "🏠", text: "Remote" },
  { emoji: "🚶", text: "AFK" },
  { emoji: "🧠", text: "Thinking" },
  { emoji: "🔕", text: "Heads-down" },
  { emoji: "🌙", text: "EOD" },
  { emoji: "🔥", text: "Firefighting" },
  { emoji: "☕", text: "Caffeinating" },
  { emoji: "🧟", text: "Rebooting" },
];

const focusStatuses = [
  { emoji: "🎧", text: "Deep work - back at 2pm" },
  { emoji: "🧠", text: "Heads down until noon" },
  { emoji: "🚧", text: "Focus block, DMs after 3" },
  { emoji: "⌨️", text: "In the zone" },
  { emoji: "🔕", text: "Notifications off, back later" },
  { emoji: "📵", text: "Focus mode - urgent? Call me" },
  { emoji: "🎯", text: "One task, no context switching" },
  { emoji: "🐢", text: "Slow to reply today" },
  { emoji: "📚", text: "Reading, not typing" },
  { emoji: "⏳", text: "Writing a doc until 4pm" },
];

const meetingStatuses = [
  { emoji: "📅", text: "In a meeting" },
  { emoji: "🎥", text: "On a video call" },
  { emoji: "🗣️", text: "On a call until 11:30" },
  { emoji: "🎤", text: "Presenting - do not disturb" },
  { emoji: "👥", text: "1:1 in progress" },
  { emoji: "🧑‍💻", text: "Pairing" },
  { emoji: "🔴", text: "Live, recording in progress" },
  { emoji: "🤝", text: "With a customer" },
  { emoji: "🗓️", text: "Back-to-back until 3" },
  { emoji: "🎙️", text: "Interviewing a candidate" },
];

const breakStatuses = [
  { emoji: "🥪", text: "Lunch - back in 30" },
  { emoji: "☕", text: "Coffee run" },
  { emoji: "🍜", text: "Grabbing food, back at 1" },
  { emoji: "🚶", text: "Walking, back soon" },
  { emoji: "🧘", text: "Taking five" },
  { emoji: "🐕", text: "Walking the dog" },
  { emoji: "💧", text: "Stretching my legs" },
  { emoji: "🧺", text: "Quick errand" },
  { emoji: "🍩", text: "Snack break" },
  { emoji: "🚲", text: "School run, back by 4" },
];

const oooStatuses = [
  { emoji: "🌴", text: "On PTO until Monday" },
  { emoji: "🏝️", text: "Out of office - back Aug 20" },
  { emoji: "✈️", text: "On vacation, not checking Slack" },
  { emoji: "🤒", text: "Out sick today" },
  { emoji: "🏥", text: "Appointment, back this afternoon" },
  { emoji: "👶", text: "On parental leave" },
  { emoji: "🎓", text: "At a conference this week" },
  { emoji: "📴", text: "Offline for the day" },
  { emoji: "🗓️", text: "OOO - ping my teammate" },
  { emoji: "🌙", text: "Done for the day" },
];

const remoteStatuses = [
  { emoji: "🏠", text: "Working from home" },
  { emoji: "🏢", text: "In the office today" },
  { emoji: "✈️", text: "In transit" },
  { emoji: "🚆", text: "On a train, patchy signal" },
  { emoji: "🏨", text: "Working from a hotel" },
  { emoji: "🌍", text: "On GMT+1 this week" },
  { emoji: "☕", text: "Working from a cafe" },
  { emoji: "🛜", text: "Bad wifi, replies may lag" },
  { emoji: "🚗", text: "Driving - back in an hour" },
  { emoji: "🕗", text: "Early start, offline at 3" },
];

const seasonalStatuses = [
  { emoji: "🎃", text: "Haunted by my inbox" },
  { emoji: "🦃", text: "Eating, back Monday" },
  { emoji: "🎄", text: "Out until the new year" },
  { emoji: "❄️", text: "Snow day" },
  { emoji: "🎆", text: "Out for New Year" },
  { emoji: "🌷", text: "Spring cleaning the backlog" },
  { emoji: "☀️", text: "Summer hours - offline at 3" },
  { emoji: "🏖️", text: "Summer Friday" },
  { emoji: "🍂", text: "Heads down on Q4 planning" },
  { emoji: "🎂", text: "Birthday - out today" },
  { emoji: "🧑‍🎄", text: "At the holiday party" },
  { emoji: "🧾", text: "Buried in end-of-quarter numbers" },
];

const faqs = [
  {
    question: "What is a good funny Slack status for work?",
    answer:
      "The best funny Slack status lines are short, self-deprecating and instantly readable: 🧟 Pre-coffee, do not engage; 🔥 This is fine; 🪫 Battery at 4%; 🦆 Explaining it to a rubber duck. Keep the joke about yourself rather than about a colleague, a customer or a deadline, and always pair it with the practical information people actually need, like when you will be back.",
  },
  {
    question: "What are some short Slack status examples?",
    answer:
      "One word does most of the work: 🎧 Focusing, 📅 Meeting, 🥪 Lunch, 🌴 PTO, 🚶 AFK, 🏠 Remote, 🌙 EOD, 🔥 Firefighting. Slack allows up to 100 characters of status text, but in the sidebar and on hover most people only register the emoji and the first few words, so short beats clever nearly every time.",
  },
  {
    question: "How do I set a Slack status emoji?",
    answer:
      "Click your profile picture in the top right of Slack, choose Update your status, then click the smiley icon in the status box to open the emoji picker. Pick any standard or custom workspace emoji, type your status text next to it, choose when it should clear, and save. On mobile, tap the You tab, then tap your status field to do the same thing.",
  },
  {
    question: "Does setting a Slack status make me appear online?",
    answer:
      "No. A custom status is emoji plus text and is completely separate from presence, the green or grey dot next to your name. Setting 🟢 Working does not turn your dot green, and clearing your status does not turn it grey. Presence is set automatically by Slack from your activity in the app, and flips to away after 30 minutes of no interaction on desktop.",
  },
  {
    question: "How do I make my Slack status clear automatically?",
    answer:
      "In the Update your status window, open the Clear after dropdown and pick 30 minutes, 1 hour, 4 hours, Today, This week, or a custom date and time. Slack removes the status for you when that moment arrives. Use 30 minutes or 1 hour for lunch and focus blocks, and a specific date and time for PTO so your status disappears the morning you return.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Funny Slack Status Ideas: 90+ Examples You Can Copy",
    "90+ copy-paste Slack status examples with emoji, grouped by situation - funny lines for work, focus blocks, meetings, lunch, PTO, remote work and seasons - plus how to set a status, auto-clear it, and why a status never changes your presence dot.",
    "2026-08-11",
    "2026-08-11"
  ),
];

export default function SlackStatusIdeasPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Funny Slack Status Ideas: 90+ Examples You Can Copy
          </h1>
          <p className="text-xl text-text-600 mb-8">
            A funny Slack status is a custom emoji plus a short line of text -
            think 🧟 Pre-coffee, do not engage or 🔥 This is fine - that you set
            from your profile picture in the top right of Slack. Below are 90+
            copy-paste Slack status examples grouped by situation: focus time,
            meetings, lunch, PTO, remote work, short one-word lines and seasonal
            picks, plus how to set one, how to make it clear itself, and the one
            thing a status will never do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Keep Your Green Dot Green - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
        </header>

        {/* Funny */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Funny Slack Status Ideas for Work
          </h2>
          <p className="text-lg text-text-700 mb-6">
            A funny Slack status for work has to clear a low bar and a high bar
            at the same time: it should make someone smile, and it should still
            tell them something useful. The safest formula is a joke aimed at
            yourself, followed by a fact. &quot;🔥 This is fine&quot; is funnier
            when it is followed by &quot;back at 3&quot;. Here are 14 that land
            in most workplaces.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-text-700">
            {funnyStatuses.map((s) => (
              <li key={s.text} className="flex items-start gap-3">
                <span className="text-xl leading-6">{s.emoji}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-text-700 mt-6">
            Two things to avoid. First, don&apos;t make the joke about someone
            else - a status is visible to the whole workspace, including the
            person you were teasing and anyone browsing your profile six months
            later. Second, don&apos;t let a funny line replace an actually
            urgent detail. If you are on call, &quot;🧟 Pre-coffee, do not
            engage&quot; reads as unavailable to a colleague who genuinely needs
            you.
          </p>
        </Section>

        {/* Short */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Short Funny Slack Status Ideas for Work
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack allows up to 100 characters of status text, but that is far
            more room than you need. In the member list, in a hover card and on
            a phone screen, most people register the emoji and the first two or
            three words and nothing else. A short funny Slack status for work
            works harder than a paragraph. These are all one word:
          </p>
          <ul className="grid sm:grid-cols-3 gap-x-8 gap-y-3 text-text-700">
            {shortStatuses.map((s) => (
              <li key={s.text} className="flex items-start gap-3">
                <span className="text-xl leading-6">{s.emoji}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-text-700 mt-6">
            If you want to keep it short but still answer the obvious follow-up
            question, add a time and nothing more: &quot;🎧 Focusing until
            2&quot;, &quot;🥪 Lunch, back 1:30&quot;, &quot;🌴 PTO til
            Monday&quot;. Three extra words removes an entire round trip of
            &quot;hey, when are you free?&quot;.
          </p>
        </Section>

        {/* Focus + meetings */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Slack Status Examples for Focus Time and Meetings
          </h2>
          <p className="text-lg text-text-700 mb-6">
            These are the two statuses you will use most often, and the two that
            genuinely change how people treat your inbox. A focus status buys
            you an hour of nobody expecting an instant reply; a meeting status
            explains a silence before anyone has to wonder about it.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
            <Zap className="w-5 h-5" /> Focus and deep work
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-text-700 mb-8">
            {focusStatuses.map((s) => (
              <li key={s.text} className="flex items-start gap-3">
                <span className="text-xl leading-6">{s.emoji}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
            <Calendar className="w-5 h-5" /> In a meeting or on a call
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-text-700">
            {meetingStatuses.map((s) => (
              <li key={s.text} className="flex items-start gap-3">
                <span className="text-xl leading-6">{s.emoji}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-text-700 mt-6">
            Meeting statuses are the easiest ones to automate. Slack&apos;s
            Google Calendar and Outlook Calendar apps can set your status for
            you whenever an event starts and clear it when the event ends, which
            saves you the two clicks and, more importantly, saves you from
            leaving &quot;📅 In a meeting&quot; up for three hours after the
            meeting finished. Our guide on{" "}
            <a
              href="/guides/sync-slack-status-with-google-calendar"
              className="underline text-text-900"
            >
              syncing your Slack status with Google Calendar
            </a>{" "}
            walks through the setup.
          </p>
        </Section>

        {/* Lunch + OOO */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Slack Status Examples for Lunch, Breaks and Time Off
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Every status in this group answers one question: when are you back?
            Put the answer in the text. &quot;Lunch&quot; is fine;
            &quot;Lunch - back in 30&quot; is better, and it costs you four
            characters.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
            <Coffee className="w-5 h-5" /> Lunch and short breaks
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-text-700 mb-8">
            {breakStatuses.map((s) => (
              <li key={s.text} className="flex items-start gap-3">
                <span className="text-xl leading-6">{s.emoji}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
            <Sun className="w-5 h-5" /> Out of office, PTO and sick days
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-text-700">
            {oooStatuses.map((s) => (
              <li key={s.text} className="flex items-start gap-3">
                <span className="text-xl leading-6">{s.emoji}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-text-700 mt-6">
            For anything longer than a day, include a return date and a name to
            contact instead of you. &quot;🏝️ Out of office - back Aug 20, ask
            Priya&quot; is one line and it prevents a week of stalled threads. If
            your workspace uses the 🌴 or 🤒 emoji as a convention for time off,
            follow it - a status is only as useful as the shared shorthand
            behind it.
          </p>
        </Section>

        {/* Remote + seasonal */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Cool Slack Status Ideas for Remote Work, Travel and Seasons
          </h2>
          <p className="text-lg text-text-700 mb-6">
            A cool Slack status on a distributed team is usually just an honest
            one. Time zones, patchy hotel wifi and a school run are all
            invisible to the rest of your workspace unless you say so, and one
            line of status text prevents a lot of quiet assumptions about why
            you went quiet.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
            <Globe className="w-5 h-5" /> Remote work and travel
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-text-700 mb-8">
            {remoteStatuses.map((s) => (
              <li key={s.text} className="flex items-start gap-3">
                <span className="text-xl leading-6">{s.emoji}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-4 text-text-900 flex items-center gap-2">
            <Smile className="w-5 h-5" /> Seasonal and holiday statuses
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-text-700">
            {seasonalStatuses.map((s) => (
              <li key={s.text} className="flex items-start gap-3">
                <span className="text-xl leading-6">{s.emoji}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-text-700 mt-6">
            Seasonal statuses are the one category worth setting an expiry on,
            because nothing looks more abandoned than a 🎃 status in March. If
            you work across time zones a lot, the timezone line is the single
            most valuable status you can set - see why in our guide for{" "}
            <a
              href="/use-cases/remote-workers"
              className="underline text-text-900"
            >
              remote workers
            </a>
            .
          </p>
        </Section>

        {/* How to set */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How to Set a Slack Status and Make It Auto-Clear
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Setting a status takes about ten seconds and the steps are the same
            on every plan:
          </p>
          <ol className="space-y-3 text-lg text-text-700 mb-8 list-decimal pl-6">
            <li>
              Click your <strong>profile picture</strong> in the top right of
              Slack.
            </li>
            <li>
              Choose <strong>Update your status</strong>. Slack shows a handful
              of preset suggestions - in a meeting, commuting, out sick,
              vacationing, working remotely - which your workspace admins can
              customise.
            </li>
            <li>
              Click the smiley icon to open the emoji picker and choose your{" "}
              <strong>Slack status emoji</strong>, then type your text next to
              it (up to 100 characters).
            </li>
            <li>
              Open the <strong>Clear after</strong> dropdown and pick
              Don&apos;t clear, 30 minutes, 1 hour, 4 hours, Today, This week,
              or a custom date and time.
            </li>
            <li>
              Hit <strong>Save</strong>. On mobile, the same screen lives under
              the <strong>You</strong> tab.
            </li>
          </ol>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Always set an expiry"
              description="30 minutes for lunch, 1 hour for a focus block, a specific date and time for PTO. A stale status is worse than no status - people stop trusting it entirely."
            />
            <FeatureCard
              icon={<Smile className="w-10 h-10" />}
              title="Pick the emoji first"
              description="The emoji is the part people actually read in a crowded channel list. Use your workspace's existing conventions where they exist, and standard emoji where they do not."
            />
            <FeatureCard
              icon={<Settings className="w-10 h-10" />}
              title="Custom emoji count too"
              description="Any custom emoji uploaded to your workspace can be used in a status. They render as a plain colon-code to anyone outside that workspace, so keep them internal."
            />
            <FeatureCard
              icon={<MessageSquare className="w-10 h-10" />}
              title="It shows up next to your name"
              description="Your status emoji appears beside your name in channels, DMs and the member list, with the full text on hover or in your profile pane."
            />
          </div>
          <p className="text-lg text-text-700">
            One more detail worth knowing: the emoji you choose is not just
            decoration to Slack. Setting the vacation or sick emoji that your
            workspace uses in the <em>Pause notifications</em> flow can be
            paired with Do Not Disturb, so your status and your notification
            settings tell the same story. For the meaning of every symbol that
            can appear next to a Slack name, see{" "}
            <a
              href="/guides/slack-status-icons-explained"
              className="underline text-text-900"
            >
              Slack status icons explained
            </a>
            .
          </p>
        </Section>

        {/* The distinction + product bridge */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Your Slack Status Does Not Control the Green Dot
          </h2>
          <p className="text-lg text-text-700 mb-6">
            This is the single most common misunderstanding about Slack
            statuses, and it is worth being precise about. Slack has two
            separate systems sitting next to your name, and they do not talk to
            each other.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Smile className="w-10 h-10" />}
              title="Custom status (emoji + text)"
              description="Everything on this page. You set it manually, it stays exactly as you left it until it expires, and it changes nothing else about your account."
            />
            <FeatureCard
              icon={<Eye className="w-10 h-10" />}
              title="Presence (the green or grey dot)"
              description="Set automatically by Slack from your activity in the app. Filled green means active, hollow grey means away. There is no text box for this one."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            So a status of 🟢 &quot;Working&quot; will not make your dot green,
            and 🎧 &quot;Deep work&quot; will not stop it going grey. Presence
            runs on its own timer: the Slack desktop app flips you to away after{" "}
            <strong>30 minutes</strong> with no interaction inside Slack itself,
            and mobile flips almost immediately once you background the app.
            Working hard in another window counts for nothing, and there is no
            setting on any Slack plan - free or paid - to change that timer. The{" "}
            <a
              href="/guides/when-does-slack-go-inactive"
              className="underline text-text-900"
            >
              exact away timers
            </a>{" "}
            and{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>{" "}
            cover the mechanics in full.
          </p>
          <p className="text-lg text-text-700 mb-6">
            If what you actually wanted was the dot, that is the problem
            Slackactivity solves. It runs in the cloud on a 5-minute cron and
            calls the official Slack Web API method{" "}
            <code className="px-1 border border-text-200 rounded">
              users.setPresence
            </code>{" "}
            during the working hours you configure, so your presence stays green
            with the laptop closed, asleep or off. Nothing installs on your
            machine and nothing simulates mouse movement.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud"
              description="A 5-minute cron refreshes your presence through Slack's own API. Your laptop can be shut in a bag - the dot stays green."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Your hours, your timezone"
              description="Start hour, end hour and days of the week per workspace, plus vacation mode. Unlimited workspaces on one dashboard."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Minimal OAuth scopes"
              description="It can update your own presence and nothing else. It cannot read your messages, files or channels - the permissions simply are not requested."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="100% free forever"
              description="No trial, no credit card, no paid tier and no upgrade prompt. Sign in with Slack, set your hours, done."
            />
          </div>
          <p className="text-lg text-text-700">
            Set your status by hand for the human context - the lunch, the
            meeting, the joke - and let the dot look after itself. Getting
            started is one screen: go to{" "}
            <a href="/signin" className="underline text-text-900">
              /signin
            </a>{" "}
            and click &quot;Continue with Slack&quot;. If you want the mechanics
            first, read{" "}
            <a href="/how-it-works" className="underline text-text-900">
              how it works
            </a>
            , see the other ways people try to{" "}
            <a
              href="/guides/how-to-appear-online-on-slack"
              className="underline text-text-900"
            >
              appear online on Slack
            </a>
            , or browse the rest of the{" "}
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
          title="Statuses Are Manual. Your Green Dot Doesn't Have to Be."
          description="Slackactivity keeps your Slack presence green through the official Slack API during the hours you choose - unlimited workspaces, laptop closed, 100% free forever."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Compare Alternatives", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
