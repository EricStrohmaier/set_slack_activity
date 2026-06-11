import { Metadata } from "next";
import { CheckCircle, Cloud, Laptop, Lock, Moon } from "lucide-react";
import {
  generateMetadata,
  seoPages,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateHowToStructuredData,
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

export const metadata: Metadata = generateMetadata(seoPages.computerLocked);

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Keep Slack Active When Your Computer Is Locked",
    url: "https://slackactivity.com/guides/keep-slack-active-computer-locked",
  },
];

const howToSteps = [
  {
    name: "Sign in to Slackactivity",
    text: "Go to slackactivity.com and sign in - it's free, no credit card required.",
  },
  {
    name: "Connect your Slack workspace",
    text: "Authorize Slackactivity with Slack's official OAuth flow. Only the users.profile:write permission is requested - your messages stay private.",
  },
  {
    name: "Set your work hours and timezone",
    text: "Define when you want to appear active. Slackactivity detects your timezone automatically.",
  },
  {
    name: "Close your laptop",
    text: "That's it. Your Slack status is refreshed from the cloud every 5 minutes during your work hours - locked screen, closed lid, or powered off doesn't matter.",
  },
];

const faqs = [
  {
    question: "Does Slack stay active when your computer is locked?",
    answer:
      "No. When you lock your screen, the Slack desktop app stops registering activity, and Slack marks you as away within 30 minutes - often sooner if the app loses connection. The only way to stay active with a locked computer is a cloud-based tool that updates your presence through the Slack API.",
  },
  {
    question: "How do I stay online on Slack with my laptop closed?",
    answer:
      "Local tricks (mouse jigglers, keep-awake apps) die when the lid closes. Slackactivity runs in the cloud and refreshes your Slack presence every 5 minutes via the official API, so your status stays green with the laptop closed, asleep, or left at home.",
  },
  {
    question: "Does keeping Slack open on my phone keep me active?",
    answer:
      "Only while the app is open and in the foreground. The moment you lock your phone or switch apps, Slack's mobile presence drops you to away - usually within a minute or two. It's not a reliable way to appear online.",
  },
  {
    question: "Is this safe for my Slack workspace?",
    answer:
      "Yes. Slackactivity uses Slack's official OAuth and only the users.profile:write scope. It cannot read messages, files, or channels, and you can disconnect a workspace at any time.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateHowToStructuredData(
    "How to Keep Slack Active When Your Computer Is Locked or Sleeping",
    "Stay online on Slack even when your laptop is closed, locked, or asleep using cloud-based status automation.",
    howToSteps
  ),
];

export default function KeepSlackActiveComputerLockedPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Keep Slack Active When Your Computer Is Locked or Sleeping
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Lock your screen, close your laptop, leave it at home - and stay
            online on Slack anyway. Here&apos;s why local tricks fail and how
            cloud-based status automation keeps your green dot on.
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
            Why Your Slack Status Dies With Your Screen
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack&apos;s desktop app reports your presence only while it&apos;s
            running and receiving input. Every one of these kills your active
            status:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Lock className="w-10 h-10" />}
              title="Locked Screen"
              description="The moment you hit Cmd/Win+L, Slack stops seeing activity. Away status follows within minutes."
            />
            <FeatureCard
              icon={<Laptop className="w-10 h-10" />}
              title="Closed Lid"
              description="Closing your laptop suspends the Slack app entirely. No app running, no presence reported."
            />
            <FeatureCard
              icon={<Moon className="w-10 h-10" />}
              title="Sleep Mode"
              description="Sleep cuts the network connection. Slack's servers mark you away as soon as your client stops checking in."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="The Common Thread"
              description="Anything that runs on your computer - jigglers, keep-awake apps, scripts - dies with it. The fix has to live somewhere else."
            />
          </div>
        </Section>

        {/* How-To Section */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            How to Stay Active With Your Computer Locked - 4 Steps
          </h2>
          <ol className="space-y-6">
            {howToSteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-background-100 text-text-900 font-bold flex items-center justify-center mr-4">
                  {index + 1}
                </span>
                <div>
                  <strong className="text-lg text-text-900">{step.name}</strong>
                  <p className="text-text-700">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Why cloud Section */}
        <Section variant="highlight">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Cloud-Based Presence: The Only Method That Survives Sleep
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Cloud className="w-10 h-10" />}
              title="Runs on Our Servers, Not Yours"
              description="Slackactivity refreshes your Slack presence every 5 minutes from the cloud. Your computer's state is irrelevant."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Schedule-Aware"
              description="You stay active during your configured work hours and go away naturally outside them - timezone detected automatically."
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
          title="Close Your Laptop. Stay Green."
          description="Free to use online - set up in two minutes, no credit card required."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "View Pricing", href: "/#pricing" }}
        />
      </SEOPageLayout>
    </>
  );
}
