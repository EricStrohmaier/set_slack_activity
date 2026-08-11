import { Metadata } from "next";
import {
  Headphones,
  Clock,
  Globe,
  Calendar,
  Moon,
  Users,
  Server,
  Shield,
  Briefcase,
  Coffee,
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
  title: "Slack Status for Customer Support Teams",
  description:
    "Keep support agents green on Slack during their shift. Map coverage windows to working hours per workspace, survive Zendesk deep work, and hand off cleanly across regions. Free forever.",
  keywords: [
    "slack status for customer support teams",
    "support team slack availability",
    "shift coverage slack",
    "slack presence support agents",
    "customer support slack status automation",
    "on-call slack status",
  ],
  alternates: {
    canonical: "https://slackactivity.com/use-cases/customer-support-teams",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Use Cases", url: "https://slackactivity.com/use-cases" },
  {
    name: "Customer Support Teams",
    url: "https://slackactivity.com/use-cases/customer-support-teams",
  },
];

const faqs = [
  {
    question: "Why do support agents show as away on Slack while working?",
    answer:
      "Because Slack only counts activity inside the Slack app. An agent spending 45 minutes in Zendesk, Intercom, Front, or a screen-share with a customer generates zero Slack input, so Slack's 30-minute desktop idle timer expires and flips them to away. On mobile it is worse: backgrounding the app marks you away almost immediately. Slack offers no setting to change that timeout on any plan, free or paid.",
  },
  {
    question: "How do I map Slack status to a support shift?",
    answer:
      "In Slackactivity you set a start hour, an end hour, the days of the week, and a timezone for each connected workspace. A 07:00-15:00 Europe/Dublin shift and a 14:00-22:00 America/New_York shift each stay green only inside their own window. Outside the window nothing runs, so an off-shift agent stays gray and does not get pinged as if they were covering the queue.",
  },
  {
    question: "Can one agent cover several client workspaces on different schedules?",
    answer:
      "Yes. Slackactivity supports unlimited Slack workspaces, and working hours are configured per workspace rather than globally. A support agency can keep an agent green 09:00-13:00 in Client A's Slack and 13:00-17:00 in Client B's Slack from the same dashboard, with no overlap and no extra cost.",
  },
  {
    question: "Does this work for overnight and weekend on-call rotations?",
    answer:
      "It works for any window you configure, including weekend-only days and late-evening hours, and it runs in the cloud so it does not need the on-call laptop to be awake. It is a presence tool, not a pager: it will not wake anyone up or route alerts. Keep PagerDuty, Opsgenie, or your Slack alert channel for actual escalation.",
  },
  {
    question: "How much does Slackactivity cost for a support team?",
    answer:
      "Nothing. Slackactivity is 100% free forever for every agent, every workspace, and every shift schedule. There is no credit card, no trial clock, no seat count, and no paid tier to upgrade to. Each agent signs in at /signin with Continue with Slack and configures their own hours.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slack Status for Customer Support Teams: Shift Coverage That Actually Shows Up",
    "Support teams are judged on perceived responsiveness. Learn why agents deep in Zendesk look away on Slack, how to map shift coverage windows to working hours, and how to handle regional handoffs and on-call rotations.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function CustomerSupportTeamsPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack Status for Customer Support Teams
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Support agents look &quot;away&quot; on Slack because Slack only
            counts activity inside Slack - so an agent 40 minutes deep in a
            Zendesk ticket or a customer screen-share trips the 30-minute idle
            timer and goes gray mid-shift. Slackactivity fixes that by keeping
            each agent&apos;s presence green through the official Slack API for
            exactly the hours of their shift, per workspace, in their own
            timezone - and it is free forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Cover Your Shift - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* The problem */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why Support Agents Go Gray Mid-Shift
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Support is the one function in the company where perceived
            availability is part of the job. Sales wants to know if someone can
            take an escalation. Engineering wants to know who to ask about a bug
            report. A CSM about to promise a customer a same-day answer looks at
            the roster, sees three gray dots, and assumes nobody is on. The dot
            is doing work that the schedule should be doing.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Headphones className="w-10 h-10" />}
              title="The helpdesk is not Slack"
              description="Zendesk, Intercom, Front, HubSpot, Jira Service Management - agents spend most of the shift in a browser tab that is not Slack. Slack sees no keystrokes and starts the idle countdown."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="30 minutes is one hard ticket"
              description="Slack's desktop auto-away fires after 30 minutes of no interaction in the app. One gnarly refund investigation or a single long call clears that bar easily."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Mobile is even stricter"
              description="Agents checking the queue from a phone flip to away almost immediately after backgrounding the app - so the roster looks empty during commutes and coverage gaps."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="There is no setting for it"
              description="Slack does not expose a way to lengthen or disable the auto-away timeout on any plan, free or Enterprise Grid. Manually clicking 'set yourself as active' buys you 30 more minutes, then it resets."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            If you want the background mechanics,{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why does Slack show me as away
            </a>{" "}
            walks through the presence rules in detail.
          </p>
        </Section>

        {/* Shift coverage */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Map Coverage Windows to Working Hours
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Support runs on shifts, and Slackactivity is configured the same way.
            For each connected workspace you set a start hour, an end hour, the
            days of the week, and a timezone. A cloud cron checks every 5 minutes
            and calls the official Slack{" "}
            <code className="px-1 rounded bg-background-100 text-text-900">
              users.setPresence
            </code>{" "}
            endpoint to keep you active inside that window - and only inside it.
          </p>
          <p className="text-lg text-text-700 mb-6">
            That last part matters more for support than for most teams. A green
            dot outside your shift is not a feature, it is a liability: it
            invites pings you are not being paid to answer and it makes the
            roster useless for everyone else. Three concrete setups:
          </p>
          <div className="space-y-6 text-text-700">
            <div className="border border-text-200 rounded-lg p-6 bg-white">
              <strong className="text-lg text-text-900">
                Early shift, Dublin
              </strong>
              <p>
                07:00-15:00, Monday to Friday, Europe/Dublin. The agent is green
                for the EMEA morning rush and goes gray at 15:00 sharp, even if
                Slack is still open on their desktop while they finish notes.
              </p>
            </div>
            <div className="border border-text-200 rounded-lg p-6 bg-white">
              <strong className="text-lg text-text-900">
                Late shift, New York
              </strong>
              <p>
                14:00-22:00, Monday to Friday, America/New_York. Covers the US
                afternoon and the tail of the day. Nobody has to remember to flip
                their status on at 14:00 or off at 22:00 - the schedule owns it.
              </p>
            </div>
            <div className="border border-text-200 rounded-lg p-6 bg-white">
              <strong className="text-lg text-text-900">
                Weekend-only coverage
              </strong>
              <p>
                10:00-18:00, Saturday and Sunday only. The weekend agent is the
                only green dot in the workspace, which is exactly the signal you
                want: it tells the rest of the company who is on without anyone
                asking in #general.
              </p>
            </div>
          </div>
          <p className="text-lg text-text-700 mt-6">
            Because the cron runs in the cloud, the schedule holds when the
            laptop is closed, asleep, or off - useful when an agent works from a
            locked machine, steps away for a break, or is between the office and
            home. See{" "}
            <a
              href="/guides/keep-slack-active-computer-locked"
              className="underline text-text-900"
            >
              keeping Slack active with your computer locked
            </a>{" "}
            for the mechanics.
          </p>
        </Section>

        {/* Handoffs */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Follow-the-Sun Handoffs Without the Guesswork
          </h2>
          <p className="text-lg text-text-700 mb-6">
            A distributed support org usually runs three overlapping bands -
            APAC, EMEA, Americas - with a 30 to 60 minute handover at each seam.
            The handover is where things break: the outgoing region is finishing
            escalation notes, the incoming region is still logging in, and
            anyone outside support has no idea which band is live.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="The dot becomes the roster"
              description="When every agent's presence tracks their real shift window, the member list is a live coverage map. No more 'is anyone on EMEA right now?' in a channel."
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Overlap is deliberate"
              description="Set the outgoing shift to end 30 minutes after the incoming one starts and the handover window is visibly staffed by both regions - without anyone toggling anything."
            />
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud, not on a laptop"
              description="A 5-minute cron on our servers refreshes presence. Nothing is installed on the agent's machine, so a mid-handover reboot or a flaky hotel wifi does not blank the roster."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Night rotations are just another window"
              description="A 22:00-06:00 on-call window is configured the same way as a day shift. The on-call engineer or agent reads as available to the people who might need them."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            One honest caveat on on-call: presence is a signal, not an alerting
            system. Slackactivity will show that someone is on rotation; it will
            not page them, escalate, or enforce an SLA. Keep your pager tooling.
            The same distributed-team patterns apply to non-support functions
            too - see{" "}
            <a
              href="/use-cases/remote-workers"
              className="underline text-text-900"
            >
              Slackactivity for remote workers
            </a>
            .
          </p>
        </Section>

        {/* Agencies and PTO */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Outsourced Support, Multiple Client Slacks, and PTO
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Support agencies and BPOs have a harder version of this problem: one
            agent sits in four or five client workspaces, each with its own
            contracted coverage hours, and each client judges responsiveness by
            what they see in their own Slack.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Working hours in Slackactivity are stored per workspace, not per
            account, and the number of workspaces is unlimited. So the same agent
            can be green 09:00-13:00 in Client A&apos;s Slack, 13:00-17:00 in
            Client B&apos;s, and Tuesday and Thursday only in Client C&apos;s -
            all from one dashboard, all reflecting the hours actually being
            billed. When a client is dropped, disconnect that workspace and the
            schedule goes with it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Briefcase className="w-10 h-10" />}
              title="Unlimited workspaces, one dashboard"
              description="Connect as many client Slacks as you support. Each gets its own start hour, end hour, days, and timezone. There is no per-workspace charge because there are no charges."
            />
            <FeatureCard
              icon={<Coffee className="w-10 h-10" />}
              title="Vacation mode for PTO"
              description="Going on leave? Flip vacation mode on and the schedule pauses everywhere, so you read as away for the whole break. Turn it off the morning you are back - no rebuilding your shift settings."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            Vacation mode is deliberately blunt for a reason: in support, a green
            dot on someone who is genuinely on a beach is worse than no dot at
            all. Somebody assigns them a P1, nothing happens for six hours, and
            the coverage model loses credibility.
          </p>
        </Section>

        {/* Trust and access */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Slackactivity Can and Cannot See
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Support conversations contain customer data, so this question comes
            up early in any security review. Slackactivity connects through
            standard Slack OAuth and requests two scopes:{" "}
            <code className="px-1 rounded bg-background-100 text-text-900">
              users:write
            </code>{" "}
            to set your presence, and{" "}
            <code className="px-1 rounded bg-background-100 text-text-900">
              users:read
            </code>{" "}
            to display your account name in the dashboard. That is the whole
            list.
          </p>
          <p className="text-lg text-text-700 mb-6">
            Those scopes do not grant access to messages, channels, DMs, or
            files - not in a support channel, not in a customer-shared Slack
            Connect channel, not anywhere. There is no browser extension, no
            desktop agent, and no simulated input, which also means nothing for a
            managed-device policy to flag the way a hardware jiggler or
            auto-clicker would. Compare the approaches on{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              Slack auto-away prevention
            </a>{" "}
            and the{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jiggler alternative
            </a>
            , or see how we stack up on{" "}
            <a href="/compare" className="underline text-text-900">
              the comparison page
            </a>
            .
          </p>
          <p className="text-lg text-text-700">
            And the pricing question, since support leads always ask it before
            rolling something out to a team: Slackactivity is 100% free forever.
            No credit card, no trial that expires, no per-agent seat price, no
            paid tier holding the useful features hostage. Every agent signs in
            themselves at{" "}
            <a href="/signin" className="underline text-text-900">
              /signin
            </a>{" "}
            with &quot;Continue with Slack&quot; and sets their own hours.
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
          title="Let the Shift Schedule Own the Green Dot"
          description="Set each workspace's coverage window once. Slackactivity keeps your agents green through their shift and gray after it - free forever, for every agent and every workspace."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Read the Guides", href: "/guides" }}
        />
      </SEOPageLayout>
    </>
  );
}
