import { Metadata } from "next";
import { CheckCircle, AlertTriangle, Clock, Smartphone } from "lucide-react";
import {
  generateMetadata,
  seoPages,
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

export const metadata: Metadata = generateMetadata(seoPages.whyAmIAway);

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Guides", url: "https://slackactivity.com/guides" },
  {
    name: "Why Does Slack Show Me as Away?",
    url: "https://slackactivity.com/guides/why-does-slack-show-me-as-away",
  },
];

const faqs = [
  {
    question: "Why does Slack show me as away when I'm still working?",
    answer:
      "Slack only counts interaction with the Slack app itself as activity. If you're working in another window - writing code, in a video call, editing a document - Slack sees no input and flips you to away after 30 minutes. Reading messages without clicking can also fail to register as activity.",
  },
  {
    question: "How long until Slack marks you as away?",
    answer:
      "On desktop, Slack sets you to away after 30 minutes of inactivity in the app. On mobile, it happens almost immediately after you close or background the app. There is no built-in setting to change this timeout.",
  },
  {
    question: "Can I change Slack's away timeout?",
    answer:
      "No. Slack does not offer any setting to extend or disable the 30-minute auto-away timer - not even on paid plans. You can manually set yourself to active, but Slack will flip you back to away again after the next 30 idle minutes.",
  },
  {
    question: "How do I stay permanently active on Slack?",
    answer:
      "The reliable way is a status automation tool like Slackactivity. It refreshes your Slack presence every 5 minutes during your configured work hours through the official Slack API, so you stay green all day - even when your computer is locked or asleep. It's free to use online.",
  },
  {
    question: "Does Slack show away when my laptop sleeps?",
    answer:
      "Yes. As soon as your computer sleeps, locks, or loses connection, the Slack desktop app stops reporting activity and you'll show as away shortly after. Cloud-based status automation is the only method that survives laptop sleep.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateArticleStructuredData(
    "Why Does Slack Show Me as Away? (And How to Fix It)",
    "Slack marks you as away after 30 minutes of inactivity - even when you're still working. Learn why Slack changes your status to away and every way to stay online, ranked.",
    "2026-06-12",
    "2026-06-12"
  ),
];

export default function WhyDoesSlackShowMeAsAwayPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Why Does Slack Show Me as Away? (And How to Fix It)
          </h1>
          <p className="text-xl text-text-600 mb-8">
            You&apos;re at your desk, working hard - and Slack still shows that
            gray &quot;away&quot; dot. Here&apos;s exactly why Slack marks you
            as away, and every fix that exists, ranked from worst to best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/signin" variant="primary">
              Fix It Automatically - Free
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              How It Works
            </CTAButton>
          </div>
        </header>

        {/* Why it happens */}
        <Section variant="subtle">
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Why Slack Marks You as Away
          </h2>
          <p className="text-lg text-text-700 mb-6">
            Slack&apos;s presence system is simple - and strict. You show as
            away when:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="30 Minutes of Inactivity"
              description="No clicks, keystrokes, or interaction inside the Slack app for 30 minutes - even if you're actively working in other apps - and Slack flips your dot to gray."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Mobile App Backgrounded"
              description="On mobile, Slack shows you as away almost immediately after you switch apps or lock your phone. Mobile presence is far stricter than desktop."
            />
            <FeatureCard
              icon={<AlertTriangle className="w-10 h-10" />}
              title="Computer Sleeps or Locks"
              description="When your laptop sleeps, locks, or disconnects, the Slack app stops reporting activity - your status goes away shortly after, no matter what."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Working Outside Slack"
              description="Slack only counts activity inside Slack. Deep work in your IDE, a one-hour Zoom call, or writing a doc all look like 'inactivity' to Slack."
            />
          </div>
          <p className="text-lg text-text-700 mt-6">
            And no - there is no setting to change the 30-minute timeout. Not
            on free plans, not on paid plans.
          </p>
        </Section>

        {/* Fixes ranked */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Every Way to Stop Slack Showing You as Away, Ranked
          </h2>
          <ol className="space-y-6 text-text-700">
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">4.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Manually setting yourself to active
                </strong>
                <p>
                  Click your profile → &quot;Set yourself as active&quot;.
                  Works for exactly 30 minutes, then Slack flips you back.
                  You&apos;d have to do this 16 times a day.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">3.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Keeping your screen awake (caffeinate, Awake)
                </strong>
                <p>
                  Stops your computer from sleeping, but doesn&apos;t generate
                  Slack activity - you can still go away while your screen is
                  on. Burns battery, fails when the laptop is closed.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">2.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Mouse jigglers and auto-clickers
                </strong>
                <p>
                  Simulated input keeps the desktop app alive, but only while
                  your machine is on and unlocked - and monitoring software on
                  company devices can detect them. See our{" "}
                  <a
                    href="/solutions/slack-mouse-jiggler-alternative"
                    className="underline text-text-900"
                  >
                    mouse jiggler alternative comparison
                  </a>
                  .
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-text-900 mr-3">1.</span>
              <div>
                <strong className="text-lg text-text-900">
                  Slack status automation (the actual fix)
                </strong>
                <p>
                  A cloud tool like Slackactivity refreshes your presence
                  through the official Slack API every 5 minutes during your
                  work hours. Works when your laptop is closed, respects your
                  schedule and timezone, supports unlimited workspaces - and
                  the free plan covers it all.
                </p>
              </div>
            </li>
          </ol>
        </Section>

        {/* FAQ Section */}
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

        {/* CTA Section */}
        <CTASection
          title="Never Show Away on Slack Again"
          description="Set your work hours once. Slackactivity keeps your status green automatically - free to use online."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "View Pricing", href: "/#pricing" }}
        />
      </SEOPageLayout>
    </>
  );
}
