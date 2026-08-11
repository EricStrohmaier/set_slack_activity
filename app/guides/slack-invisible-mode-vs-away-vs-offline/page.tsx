import { Metadata } from "next";
import {
  EyeOff,
  Moon,
  Clock,
  XCircle,
  CheckCircle,
  Smartphone,
  BellOff,
  Users,
  Globe,
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
  title: "Slack Invisible Mode vs Away vs Offline Explained",
  description:
    "Slack has no true invisible or appear offline mode. Here's what away, offline, Do Not Disturb and deactivated actually look like to your coworkers, and how to control your dot.",
  keywords: [
    "slack invisible mode",
    "slack away vs offline",
    "can you be invisible on slack",
    "slack appear offline",
    "slack presence status",
    "slack do not disturb vs away",
    "how to set slack to away",
    "slack green dot meaning",
  ],
  alternates: {
    canonical:
      "https://slackactivity.com/guides/slack-invisible-mode-vs-away-vs-offline",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Invisible vs Away vs Offline",
    url: "https://slackactivity.com/guides/slack-invisible-mode-vs-away-vs-offline",
  },
];

const faqs = [
  {
    question: "Can you be invisible on Slack?",
    answer:
      "No. Slack has no invisible or appear offline mode like Microsoft Teams or Discord. The only thing you can do is set yourself to away, which replaces the solid green dot with a hollow gray one. Your name, profile and messages stay fully visible to everyone in the workspace, and people can still DM you.",
  },
  {
    question: "What is the difference between away and offline on Slack?",
    answer:
      "There is no separate offline state. Slack's presence system has exactly two values - active and away - and the API confirms it: users.getPresence only ever returns 'active' or 'away'. Quitting Slack, closing your laptop or losing internet all produce the same result as clicking 'Set yourself as away': a hollow gray dot.",
  },
  {
    question: "Does Do Not Disturb hide me on Slack?",
    answer:
      "No. Do Not Disturb pauses your notifications, it does not hide your presence. You can be green and in DND at the same time. Colleagues see a small paused-notifications marker next to your name, and when they message you Slack warns them that your notifications are paused and offers to notify you anyway.",
  },
  {
    question: "Can colleagues tell if I manually set myself to away?",
    answer:
      "Not directly. Slack shows the same hollow gray dot whether you set away manually or Slack set it for you after 30 minutes of inactivity. There is no badge that says 'manually away'. That said, patterns are visible - going gray at 2pm every day while your commits and messages keep flowing tells its own story.",
  },
  {
    question: "How do I stay green on Slack instead of hiding?",
    answer:
      "Slackactivity refreshes your Slack presence every 5 minutes from the cloud using the official Slack API during the work hours you configure, so you stay active even when your laptop is closed or asleep. It supports unlimited workspaces, has a vacation mode, and is 100% free forever - no credit card, no trial, no paid tier.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slack Invisible Mode vs Away vs Offline: What Each Status Really Means",
    "Slack has no true invisible or appear offline mode. Here's what away, offline, Do Not Disturb and deactivated actually look like to your coworkers, and how to control your dot.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function SlackInvisibleModeVsAwayVsOfflinePage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack Invisible Mode vs Away vs Offline: What Each Status Really
            Means
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Slack has no invisible mode and no &quot;appear offline&quot;
            option - not on free plans, not on paid ones. The closest thing is
            manually setting yourself to away, which swaps your solid green dot
            for a hollow gray one; you stay fully visible in the member list,
            searchable, and reachable by DM. Below: exactly what away, offline,
            Do Not Disturb and a deactivated account look like to your
            colleagues, and what to do if your real problem is the opposite one
            - going gray while you&apos;re still working.
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

        {/* The short answer */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why Slack Has No Invisible Mode
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Teams has &quot;Appear offline&quot;. Discord has
            &quot;Invisible&quot;. Slack deliberately has neither, and the
            reason is baked into the data model: Slack presence is a boolean.
            The official Web API method{" "}
            <code className="px-1 rounded bg-background-100">
              users.getPresence
            </code>{" "}
            returns exactly one of two values -{" "}
            <strong className="text-text-900">active</strong> or{" "}
            <strong className="text-text-900">away</strong>. There is no third
            state for &quot;here but hidden&quot; because there is nowhere to
            store it.
          </p>
          <p className="text-lg text-text-700 mb-6">
            That has a practical consequence people are often surprised by:
            quitting Slack entirely does not remove you from the workspace. Your
            profile, your name in every channel and your DM history stay exactly
            where they were. All that changes is the shape of one small dot next
            to your name. Slack is a workplace tool built around the assumption
            that colleagues can see whether you&apos;re around - hiding
            completely was never a design goal.
          </p>
          <p className="text-lg text-text-700">
            So if you searched for &quot;Slack invisible mode&quot; hoping for a
            toggle, the honest answer is that it does not exist, and no
            third-party app can create it either. What you can control is which
            of the two states you&apos;re in, and when.
          </p>
        </Section>

        {/* The four states */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Four States People Confuse - and What Each Looks Like
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack layers three separate systems on top of each other: presence
            (active/away), notification schedule (Do Not Disturb), and account
            state (active/deactivated). Custom status emoji are a fourth,
            entirely cosmetic layer. Here is what your coworkers actually see
            for each.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Active - solid green dot"
              description="You have interacted with a Slack client in the last 30 minutes, or a tool is refreshing your presence through the API. Colleagues read this as 'available now' and are far more likely to ask a quick question than to write a long email."
            />
            <FeatureCard
              icon={<EyeOff className="w-10 h-10" />}
              title="Away - hollow gray dot"
              description="The closest Slack gets to invisible. Set manually or applied automatically after inactivity. You remain in every channel and member list, DMs still arrive, and notifications still fire on your phone unless DND is on."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Do Not Disturb - notifications paused"
              description="A schedule or snooze that mutes your notifications. It does not hide you: you can be green and in DND simultaneously. Slack shows a paused-notifications marker by your name and warns senders before they message you."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="Deactivated - no dot at all"
              description="The only true 'offline' in Slack, and it is not self-service. A workspace admin deactivates an account when someone leaves; the name shows as a deactivated account and cannot post. Not something to use for an afternoon of focus."
            />
          </div>
          <p className="text-lg text-text-700 mb-4">
            Two clarifications worth internalising:
          </p>
          <ul className="space-y-4 text-lg text-text-700 list-disc pl-6">
            <li>
              <strong className="text-text-900">
                A custom status is not a presence change.
              </strong>{" "}
              Setting a palm-tree emoji and &quot;On vacation until Monday&quot;
              is genuinely useful context, but your dot keeps behaving exactly
              as before. Plenty of people set a vacation status, leave Slack
              open on a desktop at home, and stay green all week.
            </li>
            <li>
              <strong className="text-text-900">
                Away does not mute anything.
              </strong>{" "}
              This is the single most common mix-up. If you go away to get
              through a deep-work block, your phone will still buzz for every
              mention. Away is a signal to humans; Do Not Disturb is the switch
              that actually stops notifications.
            </li>
          </ul>
        </Section>

        {/* How to set away */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How to Set Yourself to Away (the Nearest Thing to Appear Offline)
          </h2>
          <ol className="space-y-4 text-lg text-text-700 mb-6">
            <li>
              <strong className="text-text-900">1.</strong> Click your profile
              picture in the top-right corner of Slack.
            </li>
            <li>
              <strong className="text-text-900">2.</strong> Choose{" "}
              <strong className="text-text-900">
                &quot;Set yourself as away&quot;
              </strong>
              . Your dot turns hollow immediately, for everyone, in every
              client.
            </li>
            <li>
              <strong className="text-text-900">3.</strong> To come back, open
              the same menu and pick{" "}
              <strong className="text-text-900">
                &quot;Set yourself as active&quot;
              </strong>
              .
            </li>
          </ol>
          <p className="text-lg text-text-700 mb-6">
            Manual away is sticky in one direction only. Once you set it, Slack
            keeps you gray until you switch back - it will not quietly flip you
            to green because you started typing. Manual{" "}
            <em>active</em>, by contrast, is not sticky at all: the auto-away
            timer starts again the moment you stop touching Slack, which is why
            the &quot;set myself active&quot; trick fails as a way to stay
            green. If you want the mechanics of that timer,{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              our guide to why Slack shows you as away
            </a>{" "}
            breaks it down.
          </p>
          <p className="text-lg text-text-700">
            One thing manual away does not do: hide the fact that you&apos;re
            reading. Message read receipts do not exist in Slack, but typing
            indicators, emoji reactions and thread replies all still work while
            you&apos;re gray. Going away then reacting to a message thirty
            seconds later is a fairly loud tell.
          </p>
        </Section>

        {/* Automatic presence */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            When Slack Changes Your Status For You
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Most of the time nobody chooses your presence - Slack does, using
            rules you cannot configure.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="30 minutes on desktop"
              description="No clicks or keystrokes inside the Slack desktop app for 30 minutes and you flip to away, even if you spent those 30 minutes in an IDE, a Zoom call or a Google Doc. Slack counts activity in Slack only."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Almost instantly on mobile"
              description="Background the Slack mobile app or lock your phone and your presence drops to away within moments. Mobile is far stricter than desktop, which is why phone-only users look permanently gray."
            />
            <FeatureCard
              icon={<BellOff className="w-10 h-10" />}
              title="Sleep, lock, or disconnect"
              description="A sleeping laptop, a locked screen or a dropped connection all stop the client reporting activity. There is no grace period that keeps you green through a lunch break."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="No setting to change it"
              description="Slack offers no control over the 30-minute timeout on any plan - free, Pro, Business+ or Enterprise Grid. Admins cannot change it either. It is a fixed product behaviour."
            />
          </div>
          <p className="text-lg text-text-700">
            This is why so many people arrive at this page from the opposite
            direction. They were not looking for invisible mode at all - they
            were trying to work out why they look idle to their manager during a
            two-hour design review. See{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              keeping Slack active while your computer is locked
            </a>{" "}
            and{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              auto-away prevention
            </a>{" "}
            for the fixes that actually hold.
          </p>
        </Section>

        {/* The opposite need */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            If Your Real Problem Is Staying Green
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Presence is a crude signal, but people read it anyway - especially
            in distributed teams where the dot is the only ambient evidence that
            a colleague exists. If you would rather be reliably active during
            your working hours than reliably gray, that is a scheduling problem,
            not a hiding problem.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Runs in the cloud, not on your laptop"
              description="A 5-minute cron calls the official Slack Web API method users.setPresence for you. Nothing is installed on your machine, so it keeps working with the lid closed, the laptop asleep, or the machine off entirely."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Your hours, your timezone"
              description="Set a start hour, end hour and days of the week per workspace, in your own timezone. Outside those hours nothing happens and you go gray like anyone else - which is the point."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Unlimited workspaces, one dashboard"
              description="Contractors and agency folk often sit in five or six Slacks. Connect as many as you like, give each its own schedule, and flip on vacation mode when you are genuinely off."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Minimal OAuth scopes"
              description="Slackactivity requests users:write to set your presence and users:read for your account name. It cannot read your messages, files or channels - the scopes simply do not permit it."
            />
          </div>
          <p className="text-lg text-text-700 mb-6">
            Slackactivity is{" "}
            <strong className="text-text-900">100% free forever</strong>. No
            credit card, no trial period, no paid tier waiting at the end, no
            per-workspace fee. Sign-up is one step: go to{" "}
            <a href="/signin" className="underline text-text-900">
              the sign-in page
            </a>{" "}
            and click &quot;Continue with Slack&quot;.
          </p>
          <p className="text-lg text-text-700">
            More context on why any of this matters:{" "}
            <a href="/use-cases/remote-workers" className="underline text-text-900">
              how remote workers use presence
            </a>
            , the full{" "}
            <a href="/guides" className="underline text-text-900">
              guides library
            </a>
            , or{" "}
            <a href="/how-it-works" className="underline text-text-900">
              how the 5-minute refresh works
            </a>{" "}
            under the hood.
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
          title="Control Your Dot Instead of Fighting It"
          description="Slack will not give you invisible mode - but you can decide exactly when you look active. Set your hours once and Slackactivity handles the rest. Free forever, no credit card."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "See How It Works", href: "/how-it-works" }}
        />
      </SEOPageLayout>
    </>
  );
}
