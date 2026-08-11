import { Metadata } from "next";
import {
  Briefcase,
  Users,
  Globe,
  Clock,
  Calendar,
  DollarSign,
  Moon,
  Shield,
  Server,
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
  title: "Slack for Agencies: Manage 5-15 Client Workspaces",
  description:
    "Agencies live in 5-15 client Slack workspaces, and every client judges responsiveness by the dot in theirs. Set per-client hours, timezones and vacation mode. Free forever.",
  keywords: [
    "slack for agencies multiple client workspaces",
    "agency slack workspace management",
    "consultant slack status",
    "manage client slack workspaces",
    "slack presence multiple workspaces",
    "agency slack automation",
    "slack connect client workspaces",
  ],
  alternates: { canonical: "https://slackactivity.com/use-cases/agencies" },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Use Cases", url: "https://slackactivity.com/use-cases" },
  { name: "Agencies", url: "https://slackactivity.com/use-cases/agencies" },
];

const faqs = [
  {
    question: "How do agencies keep Slack active in multiple client workspaces?",
    answer:
      "Connect each client workspace to Slackactivity once with 'Continue with Slack', then set that workspace's own working hours, days and timezone. A cloud cron refreshes your presence every 5 minutes through the official Slack API, so every client sees a green dot during the hours you actually serve them. There is no limit on the number of workspaces and it costs nothing.",
  },
  {
    question: "Is there a limit on how many client workspaces I can connect?",
    answer:
      "No. Slackactivity supports unlimited Slack workspaces on one account, whether you run 3 client accounts or 15. There is no per-workspace fee, no seat count and no paid tier - it is free forever, with no credit card required.",
  },
  {
    question: "Can I set different working hours for each client?",
    answer:
      "Yes. Working hours are stored per workspace: start hour, end hour, days of the week and timezone. A client on a Tuesday-only retainer can be scheduled for Tuesdays alone, while a five-day client stays green Monday to Friday. Each workspace runs on its own schedule independently of the others.",
  },
  {
    question: "What can Slackactivity see inside my clients' workspaces?",
    answer:
      "Nothing beyond presence. The Slack OAuth scopes requested are users:write, which sets your presence, and users:read, which reads your account name so the dashboard can label the workspace. It cannot read messages, files, channels or client data, which matters when you are asking a client's Slack admin for approval.",
  },
  {
    question: "How do I go on holiday without looking online to 12 clients?",
    answer:
      "Turn on vacation mode. It pauses presence updates so Slackactivity stops setting you active while you are away, and your dot follows normal Slack behaviour again. Turn it off when you return and every client workspace picks its own schedule back up.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Slack for Agencies: Managing 5-15 Client Workspaces",
    "How agencies keep a correct Slack presence across many client workspaces with per-client working hours, timezones, unlimited free workspaces and vacation mode.",
    "2026-08-10",
    "2026-08-10"
  ),
];

export default function AgenciesPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack for Agencies: Managing 5-15 Client Workspaces
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Agencies keep Slack presence correct across every client workspace
            by connecting each one to Slackactivity and giving it its own
            working hours, days and timezone - a cloud job then refreshes your
            presence every 5 minutes through the official Slack API. Unlimited
            workspaces are included, and Slackactivity is free forever with no
            credit card and no paid tier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Connect Your Client Workspaces - Free
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* The problem */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Every Client Judges You by the Dot in Their Workspace
          </h2>
          <p className="text-lg text-text-700 mb-6">
            A typical agency account manager sits in five to fifteen client
            Slacks. Nobody at Client C can see that you spent the morning heads
            down in Client A&apos;s workspace shipping their campaign. All they
            see is a gray dot next to your name and the small, quiet thought:
            &quot;are they still working on us?&quot;
          </p>
          <p className="text-lg text-text-700 mb-6">
            That perception problem is structural, not a discipline problem.
            Slack&apos;s desktop app flips you to away after 30 minutes with no
            interaction inside Slack itself, and on mobile you go away almost
            immediately once the app is backgrounded. Slack offers no setting to
            change that timeout on any plan, free or paid. So a workspace you
            only open twice a week will show gray for most of the week, even
            during hours the client is paying for.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Briefcase className="w-10 h-10" />}
              title="Context switching is invisible"
              description="Deep work for one client reads as absence to the other twelve. Slack presence is per-workspace and has no idea you are busy elsewhere."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="30 minutes is short"
              description="Half an hour in Figma, a client call, or a strategy doc is enough for the desktop app to mark you away in every workspace you did not touch."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Timezones stack up"
              description="A London agency with a New York client and a Sydney client has three working days on one calendar. One global schedule cannot represent that."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Retainers are not all 9-5"
              description="A client buying Tuesdays should see you on Tuesdays - and should not see you looking idle in their Slack on the four days they did not buy."
            />
          </div>
        </Section>

        {/* Per-client schedules */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Per-Client Working Hours, Not One Global Setting
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Working hours in Slackactivity live on the workspace, not on your
            account. For each connected client you choose a start hour, an end
            hour, the days of the week, and the timezone the schedule runs in.
            Outside that window, Slackactivity simply does nothing and your
            presence behaves the way Slack normally would.
          </p>
          <p className="text-lg text-text-700 mb-6">
            That gives you a presence footprint that matches the contract:
          </p>
          <ul className="space-y-4 text-lg text-text-700 mb-6 list-disc pl-6">
            <li>
              <strong className="text-text-900">
                The Tuesday-only retainer.
              </strong>{" "}
              Days of week: Tuesday. Hours: 09:00-17:00 in the client&apos;s
              timezone. You look present exactly on the day they bought, and
              genuinely away the rest of the week - which is honest and, in
              practice, protects your evenings from scope creep.
            </li>
            <li>
              <strong className="text-text-900">The overseas client.</strong>{" "}
              Set the workspace timezone to theirs rather than yours. If you
              cover 08:00-12:00 New York time from Berlin, the schedule is
              stored against New York and does not drift when daylight saving
              changes on one side of the Atlantic.
            </li>
            <li>
              <strong className="text-text-900">
                The anchor client on a five-day retainer.
              </strong>{" "}
              Monday to Friday, full hours, your own timezone. This is the
              workspace where a gray dot costs you the most, and it is the one
              that benefits most from a schedule that never forgets.
            </li>
            <li>
              <strong className="text-text-900">The late support window.</strong>{" "}
              Overnight windows are supported, so a 22:00-06:00 on-call rotation
              for one client does not force every other workspace onto the same
              hours.
            </li>
          </ul>
          <p className="text-lg text-text-700">
            For the mechanics of why the dot behaves the way it does, see{" "}
            <a
              href="/guides/why-does-slack-show-me-as-away"
              className="underline text-text-900"
            >
              why Slack shows you as away
            </a>{" "}
            and our guide to{" "}
            <a
              href="/guides/manage-multiple-slack-workspaces"
              className="underline text-text-900"
            >
              managing multiple Slack workspaces
            </a>
            .
          </p>
        </Section>

        {/* Unlimited workspaces, free */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Unlimited Client Workspaces, at No Cost
          </h2>
          <p className="text-lg text-text-700 mb-6">
            This is the part that matters most to an agency: there is no
            workspace limit and no bill. Connect three clients or fifteen,
            add two more next quarter, drop one when the retainer ends -
            Slackactivity is 100% free forever. No credit card, no trial that
            expires, no paid tier waiting behind the third workspace.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<DollarSign className="w-10 h-10" />}
              title="Free forever, per workspace and per person"
              description="Nothing meters. Adding a new client workspace costs nothing, so onboarding a client never needs a procurement conversation."
            />
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Runs in the cloud"
              description="A 5-minute cron calls the Slack Web API. Nothing is installed on your machine, so it keeps working with the laptop closed, asleep or off."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Minimal OAuth scopes"
              description="users:write to set presence and users:read for your account name. It cannot read messages, files or channels in any client workspace."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="One dashboard"
              description="Every client workspace in a single list, each with its own schedule, so you can see and change your whole presence footprint in one screen."
            />
          </div>
          <p className="text-lg text-text-700">
            The scope question comes up constantly in agency work, because a
            client&apos;s Slack admin has to approve the install. The honest
            answer is short: presence in, presence out. Slackactivity cannot
            read a single message in your client&apos;s workspace, which is
            usually the end of the security review.
          </p>
        </Section>

        {/* Setup walkthrough */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How an Agency Sets This Up
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Budget about ten minutes for the first workspace and under a minute
            for each one after it.
          </p>
          <ol className="space-y-6 text-text-700">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">1.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Group your clients by schedule first
                </strong>
                <p>
                  Before you connect anything, sketch your client list into
                  three or four groups: full-week retainers in your timezone,
                  fixed-day retainers, clients in another timezone, and
                  project-based clients with a defined end date. Clients in the
                  same group get identical hours, which turns a fifteen-client
                  setup into four decisions rather than fifteen.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">2.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Sign in and connect your first workspace
                </strong>
                <p>
                  Go to{" "}
                  <a href="/signin" className="underline text-text-900">
                    /signin
                  </a>{" "}
                  and click &quot;Continue with Slack&quot;. Pick the client
                  workspace in Slack&apos;s account switcher and approve the two
                  scopes. Start with your own agency workspace if you want to
                  watch the behaviour for a day before involving clients.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">3.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Set that workspace&apos;s hours, days and timezone
                </strong>
                <p>
                  Apply the group you assigned in step 1. Set the timezone to
                  the client&apos;s, not yours, whenever the retainer is written
                  in their local hours.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">4.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Repeat for every client workspace
                </strong>
                <p>
                  Connect each one the same way. There is no cap and no cost per
                  workspace, so connect all of them rather than triaging which
                  clients &quot;deserve&quot; automation.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">5.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Check the dashboard the next morning
                </strong>
                <p>
                  The cron runs every 5 minutes, so within the first scheduled
                  window each workspace should be green. Adjust any hours that
                  do not match reality - a retainer that really starts at 10:00
                  should say 10:00.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">6.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Revisit when the roster changes
                </strong>
                <p>
                  New client: connect and assign a group. Retainer ends:
                  disconnect that workspace. Client moves from two days a week
                  to four: change the days on that workspace only.
                </p>
              </div>
            </li>
          </ol>
        </Section>

        {/* Vacation mode + team notes */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Vacation Mode Across Every Client at Once
          </h2>
          <p className="text-lg text-text-700 mb-6">
            The moment an agency schedule stops being useful is the week you are
            away. Looking permanently green to twelve clients while you are on a
            beach is worse than looking gray - it invites messages, and it makes
            the automation feel dishonest. Vacation mode is the switch for that:
            flip it on and Slackactivity stops setting your presence, so your
            dot goes back to reflecting real Slack behaviour everywhere. Flip it
            off when you land and every workspace resumes its own schedule.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="One switch, every workspace"
              description="No need to visit twelve client Slacks to set a status. Vacation mode covers your whole connected roster."
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Schedules survive the break"
              description="Your per-client hours are untouched while you are away, so there is nothing to rebuild when you get back."
            />
          </div>
          <p className="text-lg text-text-700">
            One nuance worth getting right: if you hold an account inside the
            client&apos;s workspace as a member or multi-channel guest, that
            account has its own presence dot and needs its own connection. If
            you work with a client purely through Slack Connect from your own
            agency workspace, the presence they see comes from your home
            workspace account - so keeping that one workspace on schedule covers
            every Slack Connect channel at once. Most agencies end up with a mix
            of both, which is exactly why the unlimited-workspace, free-forever
            model is the right shape for this job.
          </p>
        </Section>

        {/* Related */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Related Reading for Client-Facing Work
          </h2>
          <ul className="space-y-3 text-lg text-text-700 list-disc pl-6">
            <li>
              <a
                href="/use-cases/freelancers-consultants"
                className="underline text-text-900"
              >
                Slack for freelancers and consultants
              </a>{" "}
              - the solo version of this setup, usually three to five clients.
            </li>
            <li>
              <a
                href="/guides/keep-slack-active-computer-locked"
                className="underline text-text-900"
              >
                Keeping Slack active while your computer is locked
              </a>{" "}
              - why cloud presence survives a closed laptop between client
              meetings.
            </li>
            <li>
              <a
                href="/solutions/slack-mouse-jiggler-alternative"
                className="underline text-text-900"
              >
                The mouse jiggler alternative
              </a>{" "}
              - jigglers only touch one machine, which does nothing for
              per-workspace schedules.
            </li>
            <li>
              <a href="/compare" className="underline text-text-900">
                How Slackactivity compares
              </a>{" "}
              - side-by-side with the other options, including the ones that
              charge.
            </li>
          </ul>
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
          title="Every Client Workspace, On Its Own Schedule"
          description="Connect unlimited client Slacks, give each one the hours the retainer actually covers, and pause everything with vacation mode. Free forever - no credit card, no paid tier."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "Read the Guides", href: "/guides" }}
        />
      </SEOPageLayout>
    </>
  );
}
