import { Metadata } from "next";
import {
  CheckCircle,
  XCircle,
  Moon,
  Smartphone,
  Coffee,
  Clock,
  Headphones,
  Calendar,
  Eye,
  Server,
  DollarSign,
  Shield,
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
  title: "Slack Statuses Explained: Every Icon, Dot and Symbol",
  description:
    "Slack statuses explained: what the green dot, hollow grey circle, zZ moon, phone icon and custom emoji each mean — plus how to set your own Slack status in seconds.",
  keywords: [
    "slack status",
    "slack statuses",
    "slack status meanings",
    "slack status icons",
    "slack status icons meaning",
    "slack status symbols meaning",
    "slack green dot meaning",
    "slack hollow circle",
    "slack presence icons",
    "slack away icon",
    "slack zz icon",
    "slack phone icon next to name",
    "how to set slack status",
  ],
  alternates: {
    canonical: "https://slackactivity.com/guides/slack-status-icons-explained",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Slack Statuses Explained",
    url: "https://slackactivity.com/guides/slack-status-icons-explained",
  },
];

const faqs = [
  {
    question: "What does the green dot mean on Slack?",
    answer:
      "A solid green dot means Slack presence is set to active: you have at least one Slack client connected and Slack has seen activity from you in the last 30 minutes. It does not mean you are at your desk, reading messages, or available - it only means a connected client reported recent input.",
  },
  {
    question: "What does the hollow circle mean on Slack?",
    answer:
      "The hollow (outlined, grey) circle means away. It appears when you have had no interaction inside the Slack app for 30 minutes on desktop, when you background or close the mobile app, when your computer sleeps or locks, or when you manually choose 'Set yourself as away'. Slack does not distinguish between automatic away and manual away - both draw the same empty circle.",
  },
  {
    question: "What is the zZ icon next to someone's name in Slack?",
    answer:
      "The zZ symbol means Do Not Disturb - notifications are paused, either by that person's notification schedule or because they snoozed notifications manually. DND is separate from presence: someone can be green and zZ at the same time, which means they are active in Slack but have muted their notifications.",
  },
  {
    question: "Why is there a phone icon next to a name in Slack?",
    answer:
      "The small phone icon means that person is currently active on the Slack mobile app only, with no desktop client connected. It is a hint that they are likely away from their computer and may only see short messages, so long threads or file requests are better saved for later.",
  },
  {
    question: "What is the difference between Slack presence and Slack status?",
    answer:
      "Presence is the automatic dot (green = active, hollow = away) that Slack calculates from your client connections and activity - you cannot type it yourself. Status is the manual emoji and text you set, like a taco emoji with 'Lunch' or a calendar emoji with 'In a meeting'. Presence is what teammates and managers glance at; status is the context you add on top of it.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slack Statuses Explained: Every Icon, Dot and Symbol",
    "A complete reference to every Slack presence and status indicator - the solid green dot, hollow grey circle, zZ do not disturb moon, mobile phone icon, huddle headphones and custom status emoji - and what each one tells your teammates.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function SlackStatusIconsExplainedPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack Statuses Explained: Every Icon, Dot and Symbol
          </h1>
          <p className="text-xl text-text-600 mb-8">
            In Slack, a solid green dot means active, a hollow grey circle means
            away, a zZ symbol means Do Not Disturb, and a small phone icon means
            the person is on mobile only. Everything else you see next to a name
            - a taco, a calendar, a pair of headphones - is a custom or
            automatic status, which is a completely different system from the
            presence dot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Stay Green Automatically - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* Presence icons */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Presence Icons (Automatic - You Don&apos;t Control These)
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Presence is the small shape next to your avatar and name. Slack
            calculates it from your connected clients, not from your intentions.
            There are only two presence states in Slack&apos;s data model -
            active and away - plus a handful of badges layered on top.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Solid green dot - Active"
              description="At least one Slack client is connected and has registered interaction within the last 30 minutes. It says nothing about whether the person is reading messages, at their desk, or free to talk."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="Hollow grey circle - Away"
              description="No Slack interaction for 30 minutes on desktop, the mobile app was backgrounded, the machine slept or locked, or the person manually set themselves away. Slack draws the same empty circle for all of these."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="zZ symbol - Do Not Disturb"
              description="Notifications are paused, either by a notification schedule or a manual snooze. DND is independent of presence: a person can show green and zZ at once, meaning active but not being pinged."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Phone icon - Mobile only"
              description="Slack marks the member as active on mobile with no desktop client connected. Useful signal: they can reply to a one-liner, but probably cannot open a spreadsheet or join a screen share."
            />
            <FeatureCard
              icon={<Headphones className="w-10 h-10" />}
              title="Headphones - In a huddle"
              description="A headphones badge appears while someone is in a Slack huddle. It disappears the moment the huddle ends, so it is a live signal rather than something anyone sets by hand."
            />
            <FeatureCard
              icon={<Eye className="w-10 h-10" />}
              title="No dot at all"
              description="Presence is hidden for deactivated accounts, most Slack Connect members in other organisations, and apps or bots, which carry an APP label instead of a presence indicator."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            The dot is deliberately binary. Slack shows no &quot;last seen&quot;
            timestamp, no idle-for-two-hours label, and no away reason. That is
            why the hollow circle carries so much weight - it is the only signal
            most people ever see, and it cannot tell the difference between
            &quot;on a two-hour customer call&quot; and &quot;gone for the
            day&quot;.
          </p>
        </Section>

        {/* Status icons */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Status Icons (Manual - You Choose These)
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Status is the emoji plus short text that sits to the right of your
            name. Hovering shows the full text, and it can be set to expire
            after 30 minutes, an hour, today, this week, or never. Common ones
            your workspace has probably standardised on:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Calendar emoji - In a meeting"
              description="Often set automatically if a member connects Google Calendar or Outlook to Slack. It clears itself when the calendar event ends, which is why it sometimes lingers after a meeting runs long."
            />
            <FeatureCard
              icon={<Coffee className="w-10 h-10" />}
              title="Coffee or taco emoji - Break or lunch"
              description="Pure convention, not a Slack feature. Nothing about it changes your presence dot, your notifications, or whether messages reach you."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Palm tree or plane - Out of office"
              description="A courtesy signal for holidays and travel. Slack does not auto-reply on your behalf unless a workflow or app is configured to do it."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Clock emoji - Working different hours"
              description="Common on distributed teams. Pair it with a Slack notification schedule so the zZ badge actually matches the hours in your status text."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            The important thing: <strong>a custom status never changes your
            presence dot</strong>. You can write &quot;heads down until 5&quot;
            and still show a hollow grey circle, and you can show a solid green
            dot with no status text at all. They are two independent fields on
            your profile.
          </p>
        </Section>

        {/* How to set a status */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How to Set Your Slack Status
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Setting a Slack status takes about five seconds, and it is the same
            on every platform:
          </p>
          <ol className="space-y-4 text-lg text-text-700 mb-6">
            <li>
              <strong className="text-text-900">1. Open your profile.</strong>{" "}
              On desktop, click your profile picture in the top-right corner. On
              mobile, tap the <em>You</em> tab at the bottom of the screen.
            </li>
            <li>
              <strong className="text-text-900">
                2. Click &quot;Update your status&quot;.
              </strong>{" "}
              Slack offers a few defaults - In a meeting, Commuting, Out sick,
              Vacationing, Working remotely - or you can type your own.
            </li>
            <li>
              <strong className="text-text-900">
                3. Pick an emoji and write your text.
              </strong>{" "}
              Status text can be up to 100 characters. The emoji is what
              teammates actually notice in a crowded channel list.
            </li>
            <li>
              <strong className="text-text-900">
                4. Set it to clear automatically.
              </strong>{" "}
              Use the &quot;Clear after&quot; dropdown - 30 minutes, 1 hour,
              4 hours, today, this week, or a custom time. This is the step most
              people skip, which is why half a team is permanently &quot;In a
              meeting&quot;.
            </li>
          </ol>
          <p className="text-lg text-text-700">
            Stuck for wording? We collected{" "}
            <a
              href="/guides/slack-status-ideas"
              className="underline text-text-900"
            >
              dozens of Slack status ideas and examples
            </a>{" "}
            you can copy straight in. And remember the limitation above: no
            status text you type will turn your presence dot green - only
            activity does that.
          </p>
        </Section>

        {/* Presence vs status */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Presence Is Automatic, Status Is Manual - and Only Presence Gets
            Glanced At
          </h2>
          <p className="text-lg text-text-700 mb-4">
            Ask anyone how they check whether a colleague is around and they
            will describe the same two-second ritual: open the DM list, scan for
            green dots. Nobody hovers over emoji to read status text. The dot is
            rendered in every channel member list, every DM row, every mention,
            and every search result - status text is not.
          </p>
          <p className="text-lg text-text-700 mb-4">
            That asymmetry is the whole problem with Slack presence. The dot is
            the most-read signal in the app, and it is generated by the crudest
            possible rule: has this person clicked inside the Slack window in
            the last 30 minutes? Write code for 45 minutes, sit through an hour
            of Zoom, review a design doc, take a call on your phone - Slack
            registers none of it and flips you to a hollow circle. We break down
            the full mechanics in{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why does Slack show me as away
            </a>
            .
          </p>
          <p className="text-lg text-text-700">
            There is also no setting anywhere in Slack to change the 30-minute
            timeout. Not in preferences, not in workspace admin, not on any paid
            plan. Mobile is stricter still: background the app or lock your
            phone and your dot goes hollow almost immediately. And presence is
            cached, so a change can take a minute or two to appear for
            teammates - which is why manually clicking &quot;Set yourself as
            active&quot; feels unreliable even when it worked.
          </p>
        </Section>

        {/* How to read them */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Each Icon Actually Tells a Teammate
          </h2>
          <ul className="space-y-5 text-text-700 text-lg">
            <li>
              <strong className="text-text-900">Green dot:</strong> a Slack
              client is awake and someone touched it recently. Reasonable to
              send a quick question. Not a promise of a reply.
            </li>
            <li>
              <strong className="text-text-900">
                Hollow circle during working hours:
              </strong>{" "}
              genuinely ambiguous. It could mean deep work, a long call, a
              locked laptop, or an early finish. Most people read it
              pessimistically, which is exactly why it costs focused workers
              credibility.
            </li>
            <li>
              <strong className="text-text-900">Green dot plus zZ:</strong> at
              their desk, notifications muted. Post in the channel, do not
              expect a ping to land. Use the &quot;notify anyway&quot; option
              only for something genuinely urgent.
            </li>
            <li>
              <strong className="text-text-900">Phone icon:</strong> on mobile,
              probably walking, commuting, or between meetings. Keep it to one
              short message.
            </li>
            <li>
              <strong className="text-text-900">
                Headphones plus green dot:
              </strong>{" "}
              in a huddle right now. Ask to join rather than starting a parallel
              thread.
            </li>
          </ul>
          <p className="text-lg text-text-700 mt-6">
            None of these are perfect signals, and healthy teams treat them as
            hints rather than attendance records. But the dot is what people
            see, and on distributed teams it quietly becomes the default proxy
            for &quot;is this person working?&quot; - which is why{" "}
            <a href="/use-cases/remote-workers" className="underline text-text-900">
              remote workers
            </a>{" "}
            care about it far more than office-based colleagues do.
          </p>
        </Section>

        {/* Keeping the dot accurate */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Keeping the Green Dot Accurate During Your Real Working Hours
          </h2>
          <p className="text-lg text-text-700 mb-6">
            If your dot goes hollow while you are still working, the honest fix
            is to make presence reflect your actual schedule instead of your
            mouse movements. That is what Slackactivity does - and it is 100%
            free forever, with no credit card, no trial, and no paid tier.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud, not on your laptop"
              description="A cron job refreshes your presence every 5 minutes from our servers. Nothing is installed on your machine, so it keeps working with the lid closed, the laptop asleep, or the computer off entirely."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Official Slack API, minimal scopes"
              description="It calls users.setPresence through Slack's official Web API, with users:write to set presence and users:read for your account name. It cannot read your messages, files, or channels."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Your hours, your timezone, your days"
              description="Set a start hour, an end hour, and the days of the week per workspace. Outside those hours the dot goes hollow like it should - and vacation mode pauses everything while you are off."
            />
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="Unlimited workspaces, zero cost"
              description="Connect as many Slack workspaces as you like from one dashboard. Free forever - there is no upgrade prompt waiting for you later."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            Compare that with the alternatives in our{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              auto-away prevention guide
            </a>
            , see what happens{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              when your computer is locked
            </a>
            , or browse the rest of our{" "}
            <a href="/guides" className="underline text-text-900">
              Slack guides
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
          title="Make Your Green Dot Match Your Actual Hours"
          description="Connect Slack, set your work hours, and Slackactivity keeps your presence green through the official Slack API. Free forever - no credit card, no trial, no paid tier."
          primaryCTA={{ text: "Continue with Slack - Free", href: "/signin" }}
          secondaryCTA={{ text: "See How It Works", href: "/how-it-works" }}
        />
      </SEOPageLayout>
    </>
  );
}
