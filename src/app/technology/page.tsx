import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Technology | Sutertai",
  description:
    "How Sutertai's generative AI technology turns text prompts into images and video.",
};

const pipeline = [
  {
    title: "Prompt understanding",
    description:
      "Your text prompt is parsed for subject, style, composition, and mood, so the generation engine knows what to render before a single pixel is created.",
  },
  {
    title: "Generative rendering",
    description:
      "A diffusion-based generative model builds the output progressively, refining a noisy starting point into a coherent image or video frame.",
  },
  {
    title: "Temporal consistency (video)",
    description:
      "For video, the engine keeps characters, style, and motion consistent across frames instead of generating each frame independently.",
  },
  {
    title: "Post-processing",
    description:
      "Outputs are upscaled and cleaned up before delivery, so what you get is ready to use without extra editing.",
  },
];

const infrastructure = [
  {
    title: "GPU-accelerated inference",
    description: "Generation runs on GPU infrastructure built for low-latency inference, so results come back in seconds.",
  },
  {
    title: "Scalable by design",
    description: "The generation pipeline is built to handle single requests and batch workloads without a different code path.",
  },
  {
    title: "API-first architecture",
    description: "Every capability available in the product is also available through the API, so you can build on top of it.",
  },
];

const responsibleUse = [
  "Automated content filtering on prompts and outputs to reduce harmful or disallowed content.",
  "Clear usage policies for what can and cannot be generated on the platform.",
  "Ongoing review of edge cases as the models and product evolve.",
];

export default function TechnologyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Technology"
        title={
          <>
            The engine behind <span className="text-generated">Sutertai</span>
          </>
        }
        description="Sutertai is built on generative AI models designed specifically for turning text into images and video — here's how the pipeline works, in plain language."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="How it works" title="From prompt to pixel" />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((item, i) => (
              <div key={item.title} className="hairline-t pt-6">
                <span className="font-display text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-lg text-paper">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Built for speed and scale"
            description="The same infrastructure that powers a single image generation on our site powers API requests from teams building on top of Sutertai."
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {infrastructure.map((item) => (
              <div key={item.title} className="border-l-2 border-accent/60 pl-5">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Responsible AI"
            title="Safety is part of the pipeline, not an afterthought"
          />
          <ul className="hairline-t">
            {responsibleUse.map((item) => (
              <li
                key={item}
                className="hairline-b flex items-start gap-3 py-5 text-sm text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Try the engine yourself"
        description="The live generator on our site runs on the same pipeline described here."
      />
    </div>
  );
}
