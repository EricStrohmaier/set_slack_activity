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
