import { Metadata } from "next";
import {
  Moon,
  BellOff,
  Clock,
  Calendar,
  Smartphone,
  CheckCircle,
  XCircle,
  Zap,
  Shield,
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
  title: "What Does the Z Mean on Slack? (zZ Icon Explained)",
  description:
    "The zZ icon on Slack means notifications are paused - Do Not Disturb - not that someone is away. Here is what every Slack presence indicator means and how to tell them apart.",
  keywords: [
    "what does z mean on slack",
    "slack zzz icon",
    "slack z symbol",
    "slack do not disturb icon",
    "slack presence indicators",
    "slack green dot meaning",
    "slack hollow dot",
    "slack notification schedule",
  ],
  alternates: {
    canonical: "https://slackactivity.com/guides/what-does-z-mean-on-slack",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "What Does the Z Mean on Slack?",
    url: "https://slackactivity.com/guides/what-does-z-mean-on-slack",
  },
];

const faqs = [
  {
    question: "What does the Z (zZ) icon mean on Slack?",
    answer:
      "The zZ badge next to someone's name means their notifications are paused - Slack's Do Not Disturb mode. It says nothing about whether they are online. A person can show a green active dot and a zZ badge at the same time: they are at their desk, they just will not get a ping.",
  },
  {
    question: "Does the zZ icon mean someone is away or offline?",
    answer:
      "No. Away is shown by a hollow grey dot, not by zZ. Presence (active vs away) and Do Not Disturb are two independent settings in Slack. Turning on Do Not Disturb does not change your dot, and going away does not add a zZ.",
  },
  {
    question: "Why do I have a zZ on Slack when I never turned it on?",
    answer:
      "Almost always because of your notification schedule. Slack ships with a schedule that only allows notifications during set hours, so outside those hours Slack pauses notifications automatically and shows the zZ. Check Preferences, then Notifications, then Notification schedule.",
  },
  {
    question: "How do I remove the zZ from my name on Slack?",
    answer:
      "Click your profile picture and choose Resume notifications, or click the bell icon in the sidebar. If it comes back at the same time each day, edit your notification schedule under Preferences, then Notifications, and either widen the hours or set it to allow notifications every day, all day.",
  },
  {
    question: "Can someone message me while I am in Do Not Disturb?",
    answer:
      "Yes. Messages arrive normally, they just do not trigger a notification. If it is urgent the sender sees a prompt asking whether they want to notify you anyway, which overrides your Do Not Disturb for that one message.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "What Does the Z Mean on Slack? (zZ Icon Explained)",
    "The zZ icon on Slack means notifications are paused - Do Not Disturb - not that someone is away. Here is what every Slack presence indicator means and how to tell them apart.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function WhatDoesZMeanOnSlackPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            What Does the Z Mean on Slack? (zZ Icon Explained)
          </h1>
          <p className="text-xl text-text-600 mb-8">
            The zZ badge next to a name on Slack means that person has
            notifications paused - Slack&apos;s Do Not Disturb mode. It does{" "}
            <strong className="text-text-900">not</strong> mean they are away or
            offline. Presence (the green or grey dot) and Do Not Disturb (the
            zZ) are two completely separate settings, and you can have both at
            once.
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

        {/* What zZ actually is */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The zZ Badge Means &quot;Notifications Paused&quot;
          </h2>
          <p className="text-lg text-text-700 mb-6">
            When you pause notifications in Slack, a small zZ appears beside
            your name everywhere it is shown: in channel member lists, in the
            direct message sidebar, in search results, and on your profile card.
            It is a courtesy signal to teammates that a message may not reach
            you right away.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Here is what Do Not Disturb actually changes, and what it leaves
            alone:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<BellOff className="w-10 h-10" />}
              title="It silences notifications"
              description="No desktop banners, no mobile pushes, no sound. Messages still arrive in your channels and DMs - you just are not interrupted by them."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="It does not change your dot"
              description="Your presence stays exactly as it was. If you were active and green, you stay active and green with a zZ next to it. If you were away, you stay away."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="It can be overridden"
              description="Anyone who DMs you sees a note that you have notifications paused, plus a 'Notify anyway' option for genuine emergencies. Do Not Disturb is a speed bump, not a wall."
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="It runs on a schedule"
              description="Slack turns Do Not Disturb on and off automatically outside the notification hours you set - which is why the zZ often appears without you touching anything."
            />
          </div>
        </Section>

        {/* Every indicator decoded */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Every Slack Status Indicator, Decoded
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack stacks several unrelated signals in the same few pixels next
            to a name. Here is what each one actually tells you.
          </p>
          <ul className="space-y-6 text-text-700">
            <li>
              <strong className="text-lg text-text-900">
                Solid green dot - Active
              </strong>
              <p>
                Slack has seen interaction with the app recently. Slack calls
                this &quot;active&quot;, not &quot;online&quot;. It means the
                app is open and has registered input, nothing more - it is not a
                measure of whether real work is happening.
              </p>
            </li>
            <li>
              <strong className="text-lg text-text-900">
                Hollow grey dot - Away
              </strong>
              <p>
                The outlined circle is the away state. On desktop, Slack flips
                you to away after 30 minutes with no interaction inside the
                Slack app itself. On mobile it happens almost immediately once
                you background the app or lock your phone. Slack offers no
                setting to change that 30-minute timeout on any plan, free or
                paid. See{" "}
                <a
                  href="/guides/why-does-slack-show-me-as-away"
                  className="underline text-text-900"
                >
                  why Slack shows you as away
                </a>{" "}
                for the full mechanics.
              </p>
            </li>
            <li>
              <strong className="text-lg text-text-900">
                zZ badge - Do Not Disturb
              </strong>
              <p>
                Notifications are paused, either manually or by schedule. It is
                orthogonal to the dot. Green + zZ is a perfectly normal
                combination and means &quot;here, working, please do not ping
                me&quot;.
              </p>
            </li>
            <li>
              <strong className="text-lg text-text-900">
                An emoji next to the name - Custom status
              </strong>
              <p>
                A calendar emoji usually comes from a Google Calendar or Outlook
                integration writing &quot;In a meeting&quot; to your status
                automatically. A palm tree, a house, a coffee cup - these are
                Slack&apos;s built-in status presets. Hover to read the text.
                Setting a status does not by itself change your presence dot,
                though the status dialog offers a pause-notifications option
                that will add a zZ if you tick it.
              </p>
            </li>
            <li>
              <strong className="text-lg text-text-900">
                The word &quot;Away&quot; in a profile
              </strong>
              <p>
                Same thing as the hollow dot, just spelled out. Slack shows the
                text label in the profile pane and in some mobile views where a
                tiny dot would be hard to read.
              </p>
            </li>
          </ul>
        </Section>

        {/* DND vs away */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Do Not Disturb vs Away: Why People Confuse Them
          </h2>
          <p className="text-lg text-text-700 mb-6">
            The confusion is understandable. Both signals show up in the same
            place, both feel like &quot;unavailable&quot;, and both often appear
            at the same time - you step away for lunch, the dot goes hollow, and
            your lunchtime notification schedule kicks in and adds a zZ. Two
            independent systems, one moment, one visual blob.
          </p>
          <p className="text-lg text-text-700 mb-6">
            The practical difference matters for how you are read by colleagues:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="zZ = a choice you made"
              description="Do Not Disturb reads as deliberate focus time. Nobody assumes you left. It is something you or your schedule switched on, and it carries no signal about where you are."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Grey dot = an inference Slack made"
              description="Away is guessed from idle time, not declared. That is the problem: 30 minutes in an IDE, a long call in another app, or a locked laptop all look identical to 'not working' from Slack's point of view."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            That asymmetry is why the grey dot causes real friction and the zZ
            rarely does. A zZ says something true about your intent. A grey dot
            frequently says something false about your day.
          </p>
        </Section>

        {/* How to control both */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How to Control the zZ - and the Dot
          </h2>
          <h3 className="text-xl font-semibold mb-3 text-text-900">
            Turning Do Not Disturb on and off
          </h3>
          <p className="text-lg text-text-700 mb-6">
            Click the bell icon in the sidebar, or your profile picture, and
            choose how long to pause notifications - 30 minutes, an hour, a few
            hours, or until tomorrow. To clear it, pick &quot;Resume
            notifications&quot;. If the zZ reappears at the same time every
            evening, that is your notification schedule: Preferences →
            Notifications → Notification schedule. Widen the hours or set it to
            allow notifications every day, all day, and the automatic zZ stops.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-text-900">
            Keeping the green dot green
          </h3>
          <p className="text-lg text-text-700 mb-6">
            Presence is the harder one, because there is no setting for it.
            Slack gives you a manual &quot;Set yourself as active&quot; toggle,
            but it lasts exactly until the next 30 idle minutes and then flips
            back. Mouse jigglers and caffeinate-style utilities only work while
            your machine is on and unlocked, and they stop the moment you close
            the lid.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Slackactivity solves it from the other side. It runs in the cloud on
            a 5-minute cron and calls the official Slack Web API
            (users.setPresence) to keep you active during the working hours you
            configure - start hour, end hour, days of the week, in your own
            timezone. Nothing is installed on your machine, so it keeps working
            when your laptop is closed, asleep, or off. It handles unlimited
            workspaces from one dashboard, has a vacation mode for when you want
            the dot to go quiet, and it is 100% free forever - no credit card,
            no trial, no paid tier.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Official Slack API"
              description="Presence is refreshed through users.setPresence every 5 minutes. No browser extension, no simulated input, no background process on your laptop."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Minimal scopes"
              description="Slackactivity asks for users:write to set presence and users:read for your account name. It cannot read your messages, files, or channels."
            />
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="Free forever"
              description="Every feature, every workspace, no credit card and no upgrade prompt. There is no paid tier to move you onto later."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            More on the mechanics in{" "}
            <a href="/how-it-works" className="underline text-text-900">
              how it works
            </a>
            , or read{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              how to stay active with your computer locked
            </a>
            . If you have been jiggling a mouse to solve this, the{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternative
            </a>{" "}
            comparison is the one to read. There is also a{" "}
            <a href="/guides" className="underline text-text-900">
              full guide library
            </a>{" "}
            covering the rest of Slack presence.
          </p>
        </Section>

        {/* Quick reference */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Quick Reference
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="zZ + green dot"
              description="At their desk, working, notifications paused. Message them - they will see it when they next look at Slack."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="zZ + hollow dot"
              description="Notifications paused and Slack has not seen activity for 30+ minutes, or they are on mobile with the app backgrounded. May still be working elsewhere."
            />
          </div>
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
          title="Control the zZ. Stop Fighting the Grey Dot."
          description="Slackactivity keeps your Slack presence active during your work hours through the official Slack API - unlimited workspaces, vacation mode, and free forever."
          primaryCTA={{ text: "Continue with Slack - Free", href: "/signin" }}
          secondaryCTA={{ text: "Compare Alternatives", href: "/compare" }}
        />
      </SEOPageLayout>
    </>
  );
}
