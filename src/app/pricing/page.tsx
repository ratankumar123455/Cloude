import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Sutertai pricing — start free, upgrade to Pro for volume and 4K output, or talk to us about Enterprise deployments.",
};

export default function PricingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple plans, <span className="text-generated">built to scale</span>
          </>
        }
        description="No hidden generation costs. No credits that expire before you use them. Pick a plan and start creating."
      />
      <Pricing />
      <Faq />
      <CtaBanner />
    </div>
  );
}
