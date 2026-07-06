import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sutertai Private Limited collects, uses, and protects your data.",
};

const sections = [
  {
    title: "1. What we collect",
    body: "Account details you provide (name, email, company), prompts and assets you generate, and standard technical data such as device and log information needed to operate the service.",
  },
  {
    title: "2. How we use it",
    body: "To provide and improve the generation service, respond to support requests, and secure the platform against abuse. We do not sell your data.",
  },
  {
    title: "3. Model training",
    body: "We do not use your private prompts or generated assets to train shared models unless you explicitly opt in.",
  },
  {
    title: "4. Storage and security",
    body: "Assets and prompts are encrypted at rest and in transit. Access to production systems is restricted and logged.",
  },
  {
    title: "5. Your rights",
    body: "You can request export or deletion of your account data at any time by contacting hello@sutertai.com.",
  },
  {
    title: "6. Changes to this policy",
    body: "We'll post any material changes to this page and, where required, notify account holders directly.",
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated January 2026. This policy describes how Sutertai Private Limited handles your information."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="hairline-t">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={Math.min(i * 30, 150)} className="hairline-b py-8">
                <h2 className="font-display text-xl text-paper">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{section.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Questions about this policy can be sent to{" "}
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
