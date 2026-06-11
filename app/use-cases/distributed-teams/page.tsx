import { Metadata } from "next";
import { CheckCircle, Globe, Layers, Users, Clock } from "lucide-react";
import {
  generateMetadata,
  seoPages,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateSoftwareApplicationStructuredData,
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

export const metadata: Metadata = generateMetadata(seoPages.distributedTeams);

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Use Cases", url: "https://slackactivity.com/use-cases" },
  {
    name: "Distributed Teams",
    url: "https://slackactivity.com/use-cases/distributed-teams",
  },
];

const faqs = [
  {
    question: "How do distributed teams manage Slack availability?",
    answer:
      "The best-performing distributed teams make availability explicit: each member's Slack status reflects their actual working hours in their own timezone. Slackactivity automates this - every team member sets their schedule once, and their presence updates automatically, so colleagues across time zones always know who's reachable.",
  },
  {
    question: "Why does Slack presence matter for teams across time zones?",
    answer:
      "In a distributed team, the green dot is the fastest signal of who can answer right now. When Slack incorrectly shows working teammates as away (after its 30-minute idle timeout), people delay messages, escalate unnecessarily, or ping the wrong person. Accurate presence removes that friction.",
  },
  {
    question: "Can each team member have their own schedule?",
    answer:
      "Yes. Every Slackactivity account is individual - each person connects their own Slack account, sets their own work hours and timezone, and manages their own presence. There's no admin setup required for the workspace.",
  },
  {
    question: "Does this work for team members in multiple Slack workspaces?",
    answer:
      "Yes. The free plan supports unlimited workspaces per person, each with its own schedule - useful for teams that work across a company workspace plus client or community workspaces.",
  },
  {
    question: "Is it secure enough for a company workspace?",
    answer:
      "Slackactivity uses Slack's official OAuth API and requests only the users.profile:write scope. It cannot read messages, files, channels, or any workspace content.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateSoftwareApplicationStructuredData(),
];

export default function DistributedTeamsPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack Status Automation for Distributed Teams
          </h1>
          <p className="text-xl text-text-600 mb-8">
            When your team spans Berlin, New York, and Singapore, the green dot
            is how work gets routed. Keep every team member&apos;s Slack
            availability accurate across time zones - automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Get Started - Free Forever
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* Problem Section */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            The Presence Problem in Global Teams
          </h2>
          <p className="text-lg text-text-700 mb-4">
            Slack marks people away after 30 idle minutes - which in a
            distributed team causes real coordination problems:
          </p>
          <ul className="space-y-3 text-text-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <span>
                An engineer deep in their IDE shows as away - so a teammate in
                another timezone holds a blocking question until tomorrow
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <span>
                Overlap hours - the most valuable hours a distributed team has
                - get wasted figuring out who&apos;s actually around
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <span>
                People doing focused work or sitting in long meetings look
                offline, creating false impressions of availability
              </span>
            </li>
          </ul>
        </Section>

        {/* Solution Section */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How Distributed Teams Use Slackactivity
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Timezone-Accurate Presence"
              description="Each team member sets work hours in their own timezone. Their Slack status reflects their real schedule - active at 9 AM in Singapore, away at 9 PM in Berlin."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Active During Real Work Hours"
              description="Status is refreshed every 5 minutes during scheduled hours, so focused work, meetings, or a locked laptop never make someone look unavailable."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Individual Setup, No Admin Needed"
              description="Each person connects their own Slack account via OAuth in two minutes. No workspace-level installation or IT approval workflow required."
            />
            <FeatureCard
              icon={<Layers className="w-10 h-10" />}
              title="Multi-Workspace Support"
              description="Team members in several workspaces - company, clients, communities - keep consistent presence in all of them from one dashboard, free."
            />
          </div>
        </Section>

        {/* Benefits Section */}
        <Section variant="highlight">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            What Your Team Gets
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-lg text-text-900">
                  Faster cross-timezone routing:
                </strong>
                <p className="text-text-700">
                  Accurate green dots mean questions go to people who can
                  actually answer now.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-lg text-text-900">
                  Clear work-life boundaries:
                </strong>
                <p className="text-text-700">
                  Status goes away automatically outside scheduled hours - no
                  more looking &quot;reachable&quot; at midnight.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-lg text-text-900">
                  Vacation mode for the whole schedule:
                </strong>
                <p className="text-text-700">
                  Date-range pauses disable automation while someone is off -
                  set once, forget it.
                </p>
              </div>
            </li>
          </ul>
        </Section>

        {/* FAQ Section */}
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-text-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Give Your Team an Accurate Green Dot"
          description="Free for every team member, unlimited workspaces. No credit card required."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "View Pricing", href: "/#pricing" }}
        />
      </SEOPageLayout>
    </>
  );
}
