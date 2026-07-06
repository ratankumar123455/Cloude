import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MagneticLink from "@/components/MagneticLink";

export const metadata: Metadata = {
  title: "Products & Technology",
  description:
    "Text to Image, Text to Video, and AI Studio — the generative AI products behind Sutertai, and the pipeline that powers them.",
};

const products = [
  {
    id: "text-to-image",
    tag: "Image",
    title: "Text to Image AI",
    description:
      "Ultra-realistic images, illustrations, product photography, concept art, marketing assets, fashion visuals, architecture renders, anime, logos, advertisements, and digital artwork — from a single prompt.",
    features: [
      "Photorealistic outputs",
      "Multiple art styles",
      "High-resolution generation",
      "Commercial license",
      "Background removal",
      "Upscaling",
      "Inpainting & outpainting",
      "AI editing",
      "Brand style consistency",
      "Batch generation",
    ],
  },
  {
    id: "text-to-video",
    tag: "Video",
    title: "Text to Video AI",
    description:
      "Cinematic video generated directly from text — for product commercials, marketing, storytelling, and social content, with consistent motion and style from the first frame to the last.",
    features: [
      "AI video generation",
      "Motion synthesis",
      "Camera movement",
      "Character animation",
      "Multi-scene generation",
      "Voice synchronization & lip sync",
      "4K export",
      "Video editing",
    ],
  },
  {
    id: "ai-studio",
    tag: "Workspace",
    title: "AI Studio",
    description:
      "One workspace for every AI creation — where individual generations become a repeatable production pipeline for a team.",
    features: [
      "Image & video generator",
      "AI editing",
      "Prompt library",
      "Asset management",
      "Brand templates",
      "Cloud rendering",
      "API access",
      "Enterprise dashboard",
    ],
  },
];

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
        eyebrow="Products & Technology"
        title={
          <>
            Every way to create with <span className="text-generated">Sutertai</span>
          </>
        }
        description="Three products, one generation engine — built specifically for turning language into finished visual and video assets."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8">
            {products.map((product, i) => (
              <Reveal
                key={product.id}
                id={product.id}
                delay={i * 60}
                className="card-lift scroll-mt-24 rounded-2xl border border-[var(--line)] p-8 sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
                  <div>
                    <span className="mono-label text-[11px] text-accent">
                      {product.tag}
                    </span>
                    <h2 className="font-display mt-3 text-2xl text-paper sm:text-3xl">
                      {product.title}
                    </h2>
                    <p className="mt-4 max-w-lg text-muted">
                      {product.description}
                    </p>
                    <div className="mt-8">
                      <MagneticLink href="/generate" variant="secondary">
                        Try it
                      </MagneticLink>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-3 self-start text-sm text-muted">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t py-24">
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
