import { Metadata } from "next";
import { CheckCircle, Globe, Palmtree, Plane, Clock } from "lucide-react";
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

export const metadata: Metadata = generateMetadata(seoPages.digitalNomads);

const breadcrumbItems = [
  { name: "Home", url: "https://slackactivity.com" },
  { name: "Use Cases", url: "https://slackactivity.com/use-cases" },
  {
    name: "Digital Nomads",
    url: "https://slackactivity.com/use-cases/digital-nomads",
  },
];

const faqs = [
  {
    question: "How do digital nomads stay active on Slack across time zones?",
    answer:
      "The challenge is appearing available during your team's or clients' working hours, not your local ones. Slackactivity lets you schedule your Slack presence in any timezone - so you can be active during US East Coast hours while living in Bali, without staying glued to your laptop.",
  },
  {
    question: "Will my Slack status reveal that I'm traveling?",
    answer:
      "Slack presence itself doesn't show location, but irregular online patterns can raise questions. With scheduled status automation, your green dot follows the same consistent work-hours pattern regardless of where you actually are.",
  },
  {
    question: "Does it work with bad or intermittent Wi-Fi?",
    answer:
      "Yes - that's the point. Slackactivity runs in the cloud, not on your device. Your Slack status stays active during scheduled hours even if your laptop is offline, in your backpack, or on a plane.",
  },
  {
    question: "Can I manage multiple client workspaces while traveling?",
    answer:
      "Yes. The free plan supports unlimited Slack workspaces, each with its own schedule. Set US hours for one client and European hours for another, all from one dashboard.",
  },
  {
    question: "What happens when I change time zones?",
    answer:
      "Your schedules are timezone-aware. Keep your availability pinned to your clients' time zones and they never notice you moved - or shift your schedule to your new local time in a couple of clicks.",
  },
];

const structuredData = [
  generateBreadcrumbStructuredData(breadcrumbItems),
  generateFAQStructuredData(faqs),
  generateSoftwareApplicationStructuredData(),
];

export default function DigitalNomadsPage() {
  return (
    <>
      <MultipleStructuredData dataArray={structuredData} />

      <SEOPageLayout>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-900">
            Slack Status Automation for Digital Nomads
          </h1>
          <p className="text-xl text-text-600 mb-8">
            Work from Lisbon, Bali, or Buenos Aires - and still show up green
            during your clients&apos; office hours. Timezone-aware Slack
            presence that travels better than you do.
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
            The Nomad&apos;s Slack Problem
          </h2>
          <p className="text-lg text-text-700 mb-4">
            Working while traveling means your real schedule rarely matches
            your team&apos;s expectations:
          </p>
          <ul className="space-y-3 text-text-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <span>
                Your client&apos;s 9-to-5 is your 3 PM to 11 PM - or the middle
                of the night
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <span>
                Café Wi-Fi drops, your laptop sleeps in a hostel locker, and
                Slack flips you to away during &quot;work hours&quot;
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-text-800 mr-3 mt-1 flex-shrink-0" />
              <span>
                Erratic online patterns make clients wonder if you&apos;re
                really working - even when you deliver on time
              </span>
            </li>
          </ul>
        </Section>

        {/* Solution Section */}
        <Section>
          <h2 className="text-3xl font-bold mb-6 text-text-900">
            Built for Work-From-Anywhere
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Pin Your Presence to Any Timezone"
              description="Schedule your active hours in your client's timezone, not your current one. Move countries; your green dot doesn't flinch."
            />
            <FeatureCard
              icon={<Plane className="w-10 h-10" />}
              title="Works Offline, In Transit, Anywhere"
              description="Cloud-based status updates every 5 minutes - your Slack stays active while you're on a flight, a ferry, or a beach with no signal."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Different Hours per Workspace"
              description="US client mornings, EU client afternoons - each workspace gets its own schedule. Unlimited workspaces on the free plan."
            />
            <FeatureCard
              icon={<Palmtree className="w-10 h-10" />}
              title="Vacation Mode"
              description="Actually taking time off? Pause everything for a date range with one click and go away properly."
            />
          </div>
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
          title="Work From Anywhere. Appear Everywhere."
          description="Free to use online - unlimited workspaces, timezone-aware schedules, no credit card."
          primaryCTA={{ text: "Get Started - Free Forever", href: "/signin" }}
          secondaryCTA={{ text: "View Pricing", href: "/#pricing" }}
        />
      </SEOPageLayout>
    </>
  );
}
