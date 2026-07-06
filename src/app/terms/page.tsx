import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of Sutertai's generative AI products.",
};

const sections = [
  {
    title: "1. Using the service",
    body: "You must be authorized to act on behalf of your organization and comply with our usage policies when generating content on the platform.",
  },
  {
    title: "2. Ownership of generated content",
    body: "Subject to your plan's license, you own the rights to images and video you generate and may use them commercially, including in client and advertising work.",
  },
  {
    title: "3. Acceptable use",
    body: "You may not use Sutertai to generate content that is illegal, infringing, or intended to deceive, harass, or harm others. We reserve the right to filter or remove content that violates this policy.",
  },
  {
    title: "4. Subscriptions and billing",
    body: "Paid plans renew automatically at the end of each billing cycle unless cancelled beforehand. Downgrades and cancellations take effect at the start of the next cycle.",
  },
  {
    title: "5. Service availability",
    body: "We target 99.9% uptime for the generation service but do not guarantee uninterrupted availability. Scheduled maintenance will be communicated in advance where possible.",
  },
  {
    title: "6. Limitation of liability",
    body: "Sutertai Private Limited is not liable for indirect or consequential damages arising from use of the service, to the extent permitted by applicable law.",
  },
  {
    title: "7. Governing law",
    body: "These terms are governed by the laws of India, with courts in Prayagraj, Uttar Pradesh having jurisdiction over disputes.",
  },
];

export default function TermsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated January 2026. These terms govern your use of Sutertai's products."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="hairline-t">
            {sections.map((section) => (
              <div key={section.title} className="hairline-b py-8">
                <h2 className="font-display text-xl text-paper">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{section.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Questions about these terms can be sent to{" "}
            <a href="mailto:hello@sutertai.com" className="text-accent hover:underline">
              hello@sutertai.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
