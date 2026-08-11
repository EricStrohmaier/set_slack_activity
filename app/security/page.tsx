import { Metadata } from "next";
import {
  AlertTriangle,
  CheckCircle,
  Eye,
  Lock,
  Server,
  Shield,
  Trash2,
  XCircle,
} from "lucide-react";
import {
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
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
  title: "Security & Privacy — What Slackactivity Can and Cannot See",
  description:
    "Exactly which Slack permissions Slackactivity requests, what it stores, what it can never access, what your IT department can see, and how to delete everything in one click.",
  keywords: [
    "slackactivity security",
    "slack status tool privacy",
    "is slack presence automation safe",
    "slack oauth permissions",
    "can slack apps read my messages",
    "slack app data privacy",
  ],
  alternates: { canonical: "https://slackactivity.com/security" },
};

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Security & Privacy", url: "https://slackactivity.com/security" },
];

const faqs = [
  {
    question: "Can Slackactivity read my Slack messages?",
    answer:
      "No. Reading messages requires scopes such as channels:history, groups:history or search:read. Slackactivity does not request any of them, so the permission simply is not there — this is enforced by Slack, not by our good intentions. You can see the exact list on Slack's authorisation screen before you approve anything, and again afterwards in your workspace's app settings.",
  },
  {
    question: "What does Slackactivity actually store?",
    answer:
      "Your Slack access token, your Slack user and team ids, the workspace name, your email and display name if Slack provides them, your schedule (start hour, end hour, working days, timezone), and one small row every 5 minutes recording whether the scheduler set you active or away. That activity log is what powers the charts in your dashboard. No message content is ever received or stored, because we cannot read it.",
  },
  {
    question: "Why do you store my Slack token at all?",
    answer:
      "Because the whole product is a scheduler that runs while you are not there. To set your presence at 09:00 on Tuesday, the server needs a credential it can use at 09:00 on Tuesday. Any tool that keeps working with your laptop closed necessarily holds a token — one that claims otherwise is either using a browser extension on your machine or is not being precise. You can revoke it instantly from Slack, without involving us.",
  },
  {
    question: "Will my IT department or workspace admin see this?",
    answer:
      "Yes, and you should assume so. Slackactivity appears in your workspace's list of installed and authorised apps, along with the scopes you granted. Depending on your workspace settings, an admin may need to approve it before you can connect at all. We deliberately request the smallest scope set that works so that what an admin sees is as boring as possible.",
  },
  {
    question: "How do I delete my data?",
    answer:
      "Deleting a workspace in the dashboard removes its token, its settings and its entire activity history immediately — the history is removed by a database cascade, not a scheduled job. You can also revoke Slackactivity from Slack's own app management screen at any time, which invalidates the token from Slack's side regardless of what we do.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
];

export default function SecurityPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold text-text-900 md:text-5xl">
            Security &amp; Privacy
          </h1>
          <p className="mb-8 text-xl text-text-600">
            Slackactivity requests three Slack permissions, and none of them can
            read a message. It can set your availability, read your own name and
            read your own email address. That is the entire surface. This page
            spells out what is stored, what your admin can see, and how to
            remove all of it.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/signin" variant="primary">
              Get Started - Free Forever
            </CTAButton>
            <CTAButton href="/features" variant="secondary">
              See the features
            </CTAButton>
          </div>
        </header>

        <Section variant="subtle">
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            What it can and cannot access
          </h2>
          <p className="mb-6 text-lg text-text-700">
            Slackactivity connects with a user token and{" "}
            <strong className="text-text-900">no bot token at all</strong>. It
            requests exactly three scopes:
          </p>
          <div className="mb-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-background-100">
                  <th className="border-b border-text-200 p-4 font-semibold text-text-900">
                    Scope
                  </th>
                  <th className="border-b border-text-200 p-4 font-semibold text-text-900">
                    What it allows
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-text-200 p-4 font-mono text-sm text-text-900">
                    users:write
                  </td>
                  <td className="border-b border-text-200 p-4 text-text-700">
                    Set your own presence to active or away. This is the entire
                    product.
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-text-200 p-4 font-mono text-sm text-text-900">
                    users:read
                  </td>
                  <td className="border-b border-text-200 p-4 text-text-700">
                    Read your own profile, so the dashboard can show your name
                    and default your schedule to your Slack timezone.
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-text-200 p-4 font-mono text-sm text-text-900">
                    users:read.email
                  </td>
                  <td className="border-b border-text-200 p-4 text-text-700">
                    Read your own email address, used to identify your account
                    across workspaces. Optional — if your workspace withholds
                    it, everything still works.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="Cannot read messages"
              description="No channels:history, groups:history, im:history or search:read. Message content is unreachable — not withheld by policy, but absent from the grant Slack issued."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="Cannot read files or channels"
              description="No files:read and no channel listing scopes. Slackactivity does not know what channels you are in, let alone what is in them."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="Cannot post as you"
              description="No chat:write. It cannot send a message, react, or reply on your behalf in any channel or DM."
            />
            <FeatureCard
              icon={<XCircle className="w-10 h-10" />}
              title="Cannot touch other people"
              description="Every call is scoped to your own account. It cannot read or change any other member's presence, profile or settings."
            />
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            What is stored
          </h2>
          <p className="mb-6 text-lg text-text-700">
            The honest version, field by field. Everything below exists because
            a scheduler that runs while you are asleep needs it:
          </p>
          <ul className="mb-6 space-y-3 text-lg text-text-700">
            <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
              <span>
                <strong className="text-text-900">
                  Your Slack access token.
                </strong>{" "}
                Required to call Slack on the schedule you set. Revocable by you
                at any time from Slack&apos;s own app settings.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
              <span>
                <strong className="text-text-900">
                  Workspace and account identifiers.
                </strong>{" "}
                Your Slack team id, workspace name and your Slack user id, so
                signing in again reconnects you to the right account.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
              <span>
                <strong className="text-text-900">
                  Your email, name and avatar
                </strong>{" "}
                — whatever Slack returns, used to identify your account and show
                who is signed in.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
              <span>
                <strong className="text-text-900">Your schedule.</strong> Start
                hour, end hour, working days and timezone, per workspace.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 shrink-0" />
              <span>
                <strong className="text-text-900">An activity log.</strong> One
                row every 5 minutes per active workspace recording whether the
                scheduler set you active or away, and any API errors. This is
                what the charts in your dashboard are built from.
              </span>
            </li>
          </ul>
          <div className="rounded-lg border-l-4 border-accent-400 bg-background-100 p-6">
            <p className="flex items-start text-lg text-text-700">
              <Shield className="mr-3 mt-1 h-6 w-6 shrink-0" />
              <span>
                No message content, file content, channel names or other
                members&apos; data is stored, because none of it is ever
                received in the first place. Your data is not sold, and it is
                not shared with advertisers.
              </span>
            </p>
          </div>
        </Section>

        <Section variant="subtle">
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            How it is protected
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<Lock className="w-10 h-10" />}
              title="Encrypted in transit"
              description="All traffic between your browser, our servers and Slack runs over TLS, with HSTS enabled so browsers refuse to downgrade to plain HTTP."
            />
            <FeatureCard
              icon={<Server className="w-10 h-10" />}
              title="Least-privilege by design"
              description="No bot token is requested, so there is no workspace-wide credential to leak. The user token can do exactly the three things listed above and nothing else."
            />
            <FeatureCard
              icon={<Eye className="w-10 h-10" />}
              title="Session cookies"
              description="Sign-in uses an HttpOnly, Secure, SameSite cookie that JavaScript cannot read, signed so it cannot be forged or edited client-side."
            />
            <FeatureCard
              icon={<AlertTriangle className="w-10 h-10" />}
              title="Dead tokens are dropped"
              description="If Slack reports a token as revoked or invalid, that workspace is deactivated automatically and the scheduler stops calling it, rather than retrying a dead credential forever."
            />
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Before you connect any presence tool
          </h2>
          <p className="mb-6 text-lg text-text-700">
            Worth asking of us and of every alternative. The answers should be
            easy to find on any tool&apos;s own site:
          </p>
          <ol className="space-y-4 text-lg text-text-700">
            <li>
              <strong className="text-text-900">
                1. Which exact scopes does it request?
              </strong>{" "}
              Slack shows you this on the authorisation screen. If a presence
              tool asks for message history, close the tab.
            </li>
            <li>
              <strong className="text-text-900">
                2. Does it need a bot token?
              </strong>{" "}
              A bot token is a workspace-level credential. Presence automation
              does not need one — Slackactivity requests none.
            </li>
            <li>
              <strong className="text-text-900">
                3. Does it install anything?
              </strong>{" "}
              Browser extensions and desktop utilities have far broader reach
              over your machine than a server-side OAuth integration does.
            </li>
            <li>
              <strong className="text-text-900">
                4. Can you delete everything yourself?
              </strong>{" "}
              You should not have to email anyone. Deleting a workspace here
              removes its token and history in one click.
            </li>
            <li>
              <strong className="text-text-900">
                5. What will your admin see?
              </strong>{" "}
              Assume they can see it, and pick a tool whose permission list you
              are comfortable explaining.
            </li>
          </ol>
        </Section>

        <Section variant="subtle">
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            What your IT department sees
          </h2>
          <p className="mb-6 text-lg text-text-700">
            Slackactivity appears in your workspace&apos;s installed apps list,
            attributed to you, with the three scopes above shown next to it.
            Many organisations require admin approval before a member can
            authorise any app, in which case you will not be able to connect
            until an admin says yes.
          </p>
          <p className="text-lg text-text-700">
            We think that is the right way round, and it is why the permission
            set is kept deliberately small and boring. Separately, whether
            automating your presence is appropriate is a question about your
            employer&apos;s policies rather than about Slack&apos;s technical
            rules —{" "}
            <a
              href="/guides/how-your-employer-sees-your-slack-status"
              className="underline text-text-900"
            >
              how your employer sees your Slack status
            </a>{" "}
            covers what is actually visible to them.
          </p>
        </Section>

        <Section>
          <h2 className="mb-6 text-3xl font-bold text-text-900">
            Deleting your data
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<Trash2 className="w-10 h-10" />}
              title="Delete a workspace"
              description="One click in the dashboard removes that workspace's token, settings and full activity history. The history is deleted by a database cascade at the same moment, not queued for later."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Revoke from Slack"
              description="You can remove Slackactivity from your workspace's app settings at any time. That invalidates the token at Slack's end immediately, independently of anything we do."
            />
          </div>
          <p className="mt-6 text-lg text-text-700">
            Full details are in the{" "}
            <a href="/privacy-policy" className="underline text-text-900">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="underline text-text-900">
              terms
            </a>
            . If something here is unclear or you need a specific answer for a
            security review,{" "}
            <a href="/contact" className="underline text-text-900">
              get in touch
            </a>
            .
          </p>
        </Section>

        <Section variant="highlight">
          <h2 className="mb-8 text-3xl font-bold text-text-900">
            Security &amp; privacy FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Section>

        <CTASection
          title="Three permissions. None of them read a thing."
          description="Connect Slack, set your hours, and keep your presence accurate. Free forever, and removable in one click."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "See all features", href: "/features" }}
        />
      </SEOPageLayout>
    </>
  );
}
