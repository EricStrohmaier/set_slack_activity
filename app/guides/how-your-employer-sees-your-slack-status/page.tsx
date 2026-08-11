import { Metadata } from "next";
import {
  Eye,
  EyeOff,
  Clock,
  Smartphone,
  MousePointer,
  Users,
  BellOff,
  Server,
  Shield,
  Globe,
  Lock,
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
  title: "How Your Employer Sees Your Slack Status",
  description:
    "Your presence dot and custom status are visible to everyone. But Slack does not track mouse movement, keystrokes, or your apps - and never alerts your manager.",
  keywords: [
    "can my employer see my slack status",
    "does slack track activity",
    "does slack notify my manager when i am away",
    "does slack track mouse movement",
    "slack presence privacy",
    "what can slack admins see",
  ],
  alternates: {
    canonical:
      "https://slackactivity.com/guides/how-your-employer-sees-your-slack-status",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "How Your Employer Sees Your Slack Status",
    url: "https://slackactivity.com/guides/how-your-employer-sees-your-slack-status",
  },
];

const faqs = [
  {
    question: "Can my employer see my Slack status?",
    answer:
      "Yes. Your presence dot (green for active, gray for away) and your custom status are visible to everyone in the workspace, including your manager. That is by design - presence is a public field in Slack, not a hidden monitoring feature. Anyone can see it at any moment, but Slack does not show a history of when you were green or gray.",
  },
  {
    question: "Does Slack track my mouse movement or keystrokes?",
    answer:
      "No. Slack does not record mouse movement, keystrokes, screen contents, or which applications you have open. The Slack client only reports one thing to Slack's servers: whether you interacted with Slack itself recently. That is a single active/away signal, not activity monitoring.",
  },
  {
    question: "Does Slack notify my manager when I go away?",
    answer:
      "No. Slack sends no alert, email, or notification to anyone when your status flips from active to away. The dot simply changes color. Someone would have to be looking at your name at that moment to notice, and there is no built-in report of when it changed.",
  },
  {
    question: "What can a Slack Workspace Owner or admin see that a teammate cannot?",
    answer:
      "On paid plans, owners and admins can open the analytics dashboard, which shows per-member figures such as the last date a person was active and how many messages they posted in a period. They also control message retention, app approvals, and - under Slack's export policies - data exports. They still do not get mouse tracking, keystroke logs, or a minute-by-minute presence timeline.",
  },
  {
    question: "Can my employer read my Slack DMs?",
    answer:
      "Not casually, and not from the normal Slack interface. Standard exports cover public channel content. Access to private channels and DMs requires a higher-tier plan and, per Slack's published export policies, a legal or compliance justification and an approval process. It is a deliberate, documented step - not something a manager clicks on a whim - but it is not impossible either, so treat work Slack as work property.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "How Your Employer Sees Your Slack Status",
    "A calm, factual explainer on what your manager and Slack admins can actually see: presence, custom status, and analytics - and what Slack does not track, including mouse movement and keystrokes.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function HowYourEmployerSeesYourSlackStatusPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            How Your Employer Sees Your Slack Status
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Yes, your employer can see your Slack status: your presence dot and
            custom status are visible to everyone in the workspace, and on paid
            plans admins can view analytics such as your last active date and
            message counts. No, Slack does not track your mouse movement,
            keystrokes, or which apps you use - and it never sends your manager
            an alert when you go away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/how-it-works" variant="primary">
              See Exactly What We Access
            </CTAButton>
            <CTAButton href="/signin" variant="secondary">
              Start Free Forever
            </CTAButton>
          </div>
        </header>

        {/* What everyone can see */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Any Teammate or Manager Can See
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Everything in this list is visible to any normal member of your
            workspace - no admin rights required. None of it is secret
            surveillance; it is the ordinary Slack interface working as
            designed.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Eye className="w-10 h-10" />}
              title="Your presence dot"
              description="Green means Slack's client reported recent interaction. Gray (hollow) means away. It is a live snapshot only - Slack does not display a history of when your dot changed."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Your custom status"
              description="The emoji and text you set, plus its expiry time, appear next to your name and in your profile. If you set 'In a meeting until 3pm', everyone sees that literally."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Profile fields and local time"
              description="Name, title, photo, pronouns and any custom profile fields your workspace uses. Slack also shows your local time, derived from the timezone on your account."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Some device and huddle hints"
              description="In certain views Slack indicates that someone is active on mobile, and it shows when you are in a huddle or on a call. Neither reveals what you are doing."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            Your messages are visible too, but only in the places you would
            expect: channels the other person is also a member of. A colleague
            cannot browse your DMs, and joining a public channel later lets them
            read that channel&apos;s history - not your private conversations.
          </p>
        </Section>

        {/* What Slack does not track */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Slack Does <em>Not</em> Track
          </h2>
          <p className="text-lg text-text-700 mb-6">
            This is where most of the anxiety lives, so let&apos;s be precise.
            Slack&apos;s presence system answers exactly one question: did this
            user interact with the Slack client recently? That is the whole
            signal. From it, Slack derives a single boolean - active or away.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<MousePointer className="w-10 h-10" />}
              title="No mouse or keyboard tracking"
              description="Slack does not record cursor position, movement, scroll behaviour or keystrokes. It notices interaction inside its own window and nothing more."
            />
            <FeatureCard
              icon={<EyeOff className="w-10 h-10" />}
              title="No app or window monitoring"
              description="Slack cannot see that you spent two hours in Figma, your IDE, or a browser tab. Other apps are invisible to it - which is exactly why deep work makes you look away."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="No productivity score"
              description="There is no built-in idle-time report, no focus rating, no minute-by-minute timeline of your green dot for managers to review inside Slack."
            />
            <FeatureCard
              icon={<Lock className="w-10 h-10" />}
              title="No screen or file access"
              description="Slack does not screenshot your desktop or index files outside Slack. Content it holds is content someone put into Slack."
            />
          </div>
          <p className="text-lg text-text-700 mb-4">
            The mechanics behind the dot are blunt, and worth knowing because
            they explain most &quot;why do I look idle?&quot; moments:
          </p>
          <ul className="space-y-3 text-lg text-text-700 list-disc pl-6">
            <li>
              On desktop, Slack flips you to away after{" "}
              <strong className="text-text-900">
                30 minutes without interaction inside the Slack app
              </strong>
              . Not 30 minutes away from your computer - 30 minutes away from
              Slack specifically.
            </li>
            <li>
              On mobile, you go away{" "}
              <strong className="text-text-900">almost immediately</strong> after
              you background the app or lock your phone.
            </li>
            <li>
              Sleeping, locking, or closing your laptop stops the client
              reporting at all, so you go away shortly after.
            </li>
            <li>
              Slack offers{" "}
              <strong className="text-text-900">no setting to change</strong>{" "}
              that 30-minute timeout on any plan, free or paid.
            </li>
          </ul>
          <p className="text-lg text-text-700 mt-6">
            One honest caveat: presence is readable through Slack&apos;s API, so
            a third-party app installed in your workspace could, in principle,
            poll and log it over time. That is the app doing the logging, not
            Slack. If it matters to you, ask which apps are approved in your
            workspace - members can usually browse the installed app directory.
            Our own{" "}
            <a href="/guides/why-does-slack-show-me-as-away" className="underline text-text-900">
              guide to why Slack shows you as away
            </a>{" "}
            covers the timeout in more depth.
          </p>
        </Section>

        {/* Admins and owners */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Workspace Owners and Admins Can Actually See
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Admins genuinely have more visibility than a regular teammate. Here
            is the accurate version, without the scare stories.
          </p>
          <div className="space-y-6 text-text-700">
            <div>
              <strong className="text-lg text-text-900">
                Analytics dashboards (paid plans)
              </strong>
              <p className="text-lg">
                Slack&apos;s admin analytics shows workspace-wide figures and a
                member table with things like the date someone was last active
                and how many messages they posted in the selected period. It is
                aggregate and coarse-grained - a monthly message count, not a
                transcript, and not a log of every time your dot turned gray.
              </p>
            </div>
            <div>
              <strong className="text-lg text-text-900">
                Retention and export settings
              </strong>
              <p className="text-lg">
                Owners decide how long messages are kept. Standard exports cover
                public channel content. Access to private channels and DMs sits
                behind higher-tier plans and, per Slack&apos;s published export
                policies at the time of writing, requires a stated legal or
                compliance basis plus an approval process. It is a deliberate,
                auditable step rather than a button a curious manager clicks -
                but it exists, and pretending otherwise would be dishonest.
              </p>
            </div>
            <div>
              <strong className="text-lg text-text-900">
                App and integration approvals
              </strong>
              <p className="text-lg">
                Admins can restrict which apps get installed and see which
                permissions each one requested. If your workspace requires
                approval, an admin can look up exactly what any tool - including
                a status automation tool - is authorised to do.
              </p>
            </div>
            <div>
              <strong className="text-lg text-text-900">
                Enterprise-tier audit logs
              </strong>
              <p className="text-lg">
                Enterprise Grid organisations get audit logs of administrative
                and security events such as logins and permission changes. These
                are security records, not behavioural monitoring, and most
                workspaces are not on that tier.
              </p>
            </div>
          </div>
          <p className="text-lg text-text-700 mt-6">
            The practical takeaway: work Slack is work property, so use it that
            way. But the specific fear behind most searches - that Slack is
            silently reporting your idle minutes to your boss - is not how the
            product works.
          </p>
        </Section>

        {/* No notification */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Does Slack Notify Your Manager When You Go Away?
          </h2>
          <p className="text-lg text-text-700 mb-6">
            No. There is no notification, no email, no digest, no
            &quot;employee went idle&quot; alert. Your dot changes colour and
            that is the entire event. Slack does not surface it, does not
            timestamp it publicly, and does not push it to anyone.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<BellOff className="w-10 h-10" />}
              title="No alerts, ever"
              description="Presence changes generate no notification to managers, admins, or anyone else. Nobody is pinged when you step away for lunch."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="But perception is real"
              description="A gray dot at 2pm still reads as 'not around' to someone who glances at it - especially in remote teams where the dot is the only signal they have."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            That gap between the technical facts and the social reality is the
            actual problem. Slack&apos;s away signal is a poor proxy for whether
            you are working, yet in distributed teams it is often the proxy
            people use. If you spend your day in calls, an IDE, or a design tool,
            Slack will misreport you as idle several times a week through no
            fault of yours. Our{" "}
            <a href="/use-cases/remote-workers" className="underline text-text-900">
              guide for remote workers
            </a>{" "}
            digs into that dynamic.
          </p>
        </Section>

        {/* What you can do */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How to Keep Your Status Accurate Without Watching the Clock
          </h2>
          <p className="text-lg text-text-700 mb-6">
            If your working hours are 9 to 6, the honest representation of that
            is a green dot from 9 to 6. Three things help:
          </p>
          <ul className="space-y-4 text-lg text-text-700 list-disc pl-6 mb-6">
            <li>
              <strong className="text-text-900">
                Use a custom status for real context.
              </strong>{" "}
              &quot;Heads-down until 3&quot; or &quot;In workshops today&quot;
              tells people far more than a dot ever will, and it stops the
              guessing.
            </li>
            <li>
              <strong className="text-text-900">
                Set your timezone correctly.
              </strong>{" "}
              Slack shows colleagues your local time. A wrong timezone makes
              perfectly normal hours look like odd ones.
            </li>
            <li>
              <strong className="text-text-900">
                Automate presence for your actual work hours.
              </strong>{" "}
              This is what Slackactivity does, and it is{" "}
              <strong className="text-text-900">100% free forever</strong> - no
              credit card, no trial, no paid tier.
            </li>
          </ul>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud, not on your laptop"
              description="A 5-minute cron refreshes your presence through Slack's official Web API. Nothing is installed on your machine, so it works when the laptop is closed, asleep, or off."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Minimal, inspectable permissions"
              description="We request users:write to set presence and users:read for your account name. That is it - we cannot read your messages, files, or channels, and an admin can verify those scopes."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Your hours, your timezone"
              description="Set a start hour, end hour, and days of the week per workspace. Outside those hours you show away, exactly as you should. Vacation mode pauses everything."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Unlimited workspaces, one dashboard"
              description="Client workspaces, your own company, side projects - connect as many as you like and manage them all in one place. Still free forever."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            Because it uses the official Slack API rather than simulated input,
            there is nothing on your device for endpoint software to flag - one
            reason people move away from{" "}
            <a
              href="/solutions/slack-mouse-jiggler-alternative"
              className="underline text-text-900"
            >
              mouse jigglers
            </a>
            . If you want the mechanics end to end, read{" "}
            <a href="/how-it-works" className="underline text-text-900">
              how it works
            </a>{" "}
            or the wider{" "}
            <a
              href="/solutions/slack-auto-away-prevention"
              className="underline text-text-900"
            >
              auto-away prevention overview
            </a>
            . Setting up takes about a minute: go to{" "}
            <a href="/signin" className="underline text-text-900">
              /signin
            </a>{" "}
            and click &quot;Continue with Slack&quot;.
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
          title="Show the Hours You Actually Work"
          description="Slackactivity keeps your presence green during your configured work hours using Slack's official API. Free forever - no credit card, no trial, no paid tier."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Read More Guides", href: "/guides" }}
        />
      </SEOPageLayout>
    </>
  );
}
