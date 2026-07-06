import type { Metadata } from "next";
import ImageGenerator from "@/components/ImageGenerator";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Try the Generator",
  description:
    "Generate an image from a text prompt using Sutertai's generative AI engine.",
};

export default function GeneratePage() {
  return (
    <div>
      <PageHero
        eyebrow="Live demo"
        title={
          <>
            Text to <span className="text-generated">Image</span>
          </>
        }
        description="Type a description below and Sutertai's generative AI engine will render it into an image — the same technology behind our text-to-image product."
      />
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <ImageGenerator />
          </Reveal>
          <p className="mt-8 text-center text-xs text-muted">
            Text-to-video generation is part of our full product. Reach out via
            the{" "}
            <a href="/contact" className="text-accent hover:underline">
              contact page
            </a>{" "}
            to learn more.
          </p>
        </div>
      </section>
    </div>
  );
}
