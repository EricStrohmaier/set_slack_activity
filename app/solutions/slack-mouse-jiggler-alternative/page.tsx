import { Metadata } from "next";
import { CheckCircle, Cloud, Shield, X, Zap } from "lucide-react";
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

export const metadata: Metadata = generateMetadata(
  seoPages.mouseJigglerAlternative
);

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Solutions", url: "https://slackactivity.com/solutions" },
  {
    name: "Slack Mouse Jiggler Alternative",
    url: "https://slackactivity.com/solutions/slack-mouse-jiggler-alternative",
  },
];

const faqs = [
  {
    question: "Do mouse jigglers work to keep Slack active?",
    answer:
      "Sort of - a mouse jiggler keeps your computer awake, which keeps the Slack desktop app reporting activity. But it only works while your computer is on and unlocked, it can be detected by company device monitoring, and it stops working the moment your laptop sleeps or closes. A cloud-based tool like Slackactivity keeps your Slack status active through the official Slack API instead, with nothing running on your machine.",
  },
  {
    question: "Is a mouse jiggler safe to use for work?",
    answer:
      "Hardware jigglers are invisible to software but still leave a suspicious pattern (hours of tiny mouse movements with no real input). Software jigglers can be flagged by endpoint monitoring tools installed on company devices. Slackactivity takes a different approach: it updates your Slack presence via Slack's official OAuth API, so nothing runs on your computer at all.",
  },
  {
    question: "What is the best alternative to a mouse jiggler for Slack?",
    answer:
      "A status automation tool that talks to Slack directly. Slackactivity keeps your Slack status green during your configured work hours - even when your laptop is closed, locked, or asleep. It's free, takes two minutes to set up, and uses only the official Slack API.",
  },
  {
    question: "Does Slackactivity work when my computer is off?",
    answer:
      "Yes. Because Slackactivity runs in the cloud and updates your presence through the Slack API, your status stays active even when your computer is off, asleep, or in your bag. A mouse jiggler can never do that.",
  },
  {
    question: "Is Slackactivity free?",
    answer:
      "Yes - the free plan includes unlimited Slack workspaces with automatic status updates. No credit card required.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateSoftwareApplicationStructuredData(),
];

const comparison = [
  {
    feature: "Works when laptop is closed or asleep",
    jiggler: false,
    slackactivity: true,
  },
  {
    feature: "Nothing installed or running on your machine",
    jiggler: false,
    slackactivity: true,
  },
  {
    feature: "Follows a work-hours schedule automatically",
    jiggler: false,
    slackactivity: true,
  },
  {
    feature: "Works across multiple Slack workspaces",
    jiggler: false,
    slackactivity: true,
  },
  {
    feature: "Uses the official Slack API",
    jiggler: false,
    slackactivity: true,
  },
  {
    feature: "Timezone aware",
    jiggler: false,
    slackactivity: true,
  },
];

export default function SlackMouseJigglerAlternativePage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            The Slack Mouse Jiggler Alternative That Actually Works
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Mouse jigglers keep your screen awake. Slackactivity keeps your
            Slack status green - through the official Slack API, even when your
            laptop is closed, locked, or asleep. No hardware, no software on
            your machine, free to use online.
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
            Why People Use Mouse Jigglers for Slack
          </h2>
          <p className="text-lg text-text-700 mb-4">
            Slack marks you as &quot;away&quot; after 30 minutes without
            activity. So people reach for workarounds to keep their green dot
            on:
          </p>
          <ul className="space-y-3 text-text-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Hardware mouse jigglers</strong> - a USB dongle or pad
                that physically moves your cursor
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Software mouse movers</strong> - apps that simulate
                mouse movement or key presses
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Caffeinate / Awake utilities</strong> - tools that stop
                your computer from sleeping
              </span>
            </li>
          </ul>
          <p className="text-lg text-text-700 mt-6">
            They all share the same weakness: they only work while your
            computer is on, unlocked, and running them. Close your laptop, and
            your green dot disappears.
          </p>
        </Section>

        {/* Comparison Section */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Mouse Jiggler vs. Slackactivity
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-text-200">
                  <th className="text-left py-4 pr-4 text-text-900">Feature</th>
                  <th className="text-center py-4 px-4 text-text-900">
                    Mouse Jiggler
                  </th>
                  <th className="text-center py-4 px-4 text-text-900">
                    Slackactivity
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-text-200">
                    <td className="py-4 pr-4 text-text-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.jiggler ? (
                        <CheckCircle className="w-5 h-5 text-text-800 inline" />
                      ) : (
                        <X className="w-5 h-5 text-text-400 inline" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.slackactivity ? (
                        <CheckCircle className="w-5 h-5 text-text-800 inline" />
                      ) : (
                        <X className="w-5 h-5 text-text-400 inline" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Solution Section */}
        <Section variant="highlight">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How Slackactivity Replaces Your Mouse Jiggler
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Cloud className="w-10 h-10" />}
              title="Runs in the Cloud, Not on Your Machine"
              description="Your Slack presence is refreshed every 5 minutes from our servers. Close your laptop, lock your screen, go for a walk - your status stays green."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Schedule-Based, Not Always-On"
              description="A jiggler keeps you online at 2 AM if you forget to unplug it. Slackactivity follows your work hours and timezone, so your presence looks natural."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Official Slack API Only"
              description="No simulated input, no device tricks. Slackactivity authenticates with Slack OAuth and uses only the users.profile:write permission. It can never read your messages."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="All Your Workspaces at Once"
              description="One mouse jiggler can only fool one computer. Slackactivity keeps you active across unlimited Slack workspaces - each with its own schedule."
            />
          </div>
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
          title="Retire Your Mouse Jiggler"
          description="Keep your Slack status active the smart way - free to use online, no credit card required."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "View Pricing", href: "/#pricing" }}
        />
      </SEOPageLayout>
    </>
  );
}
