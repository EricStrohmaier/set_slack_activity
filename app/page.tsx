import { FeatureSteps } from "@/components/landingpage/FeatureSteps";
import { Hero } from "@/components/landingpage/Hero";
import { Testimonials } from "@/components/landingpage/Testimonials";
import { DemoVideo } from "@/components/landingpage/DemoVideo";
import Pricing from "@/components/app/Pricing";
import { getUser } from "./action";
import { MiddleCTA } from "@/components/landingpage/MiddleCTA";
import { FancyContent } from "@/components/landingpage/FancyContent";
import { LiveStats } from "@/components/landingpage/LiveStats";
import { getPublicStats } from "@/lib/publicStats";
import type { Metadata } from "next";

// The homepage previously inherited the layout's bare "Slackactivity" title,
// spending the strongest on-page signal on a brand term nobody searches for.
export const metadata: Metadata = {
  title: "Keep Slack Active & Appear Online — Free Forever",
  description:
    "Stop Slack showing you as away. Slackactivity keeps your Slack status green during your work hours using the official Slack API — unlimited workspaces, free forever.",
  keywords: [
    "keep slack active",
    "how to keep slack active",
    "slack status automation",
    "appear online on slack",
    "slack auto away prevention",
    "slack presence scheduler",
    "stay active on slack",
  ],
  alternates: { canonical: "https://slackactivity.com" },
};

export default async function page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { show: boolean };
}) {
  const [user, stats] = await Promise.all([getUser(), getPublicStats()]);
  return (
    <div className="text-text">
      <Hero />
      <DemoVideo />
      {stats && <LiveStats stats={stats} />}
      <FancyContent />
      <FeatureSteps />
      <Pricing user={user} />
      <Testimonials />
      <MiddleCTA />
    </div>
  );
}
