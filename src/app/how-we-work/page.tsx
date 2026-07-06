import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "How Sutertai turns a text prompt into a finished image or video, step by step.",
};

const detailedSteps = [
  {
    step: "01",
    title: "Describe your idea",
    description:
      "Start with a plain-language description of what you want — a scene, a product shot, a short story for a video. You don't need design or animation experience, just a clear description of the outcome.",
  },
  {
    step: "02",
    title: "Sutertai interprets the prompt",
    description:
      "Our models parse the prompt for subject, style, composition, and mood, then map it onto a generation plan — a single frame for images, or a sequence of shots for video.",
  },
  {
    step: "03",
    title: "Generate and preview",
    description:
      "The engine renders your result in seconds. For images, you get a finished frame; for video, you get a short clip with consistent characters, motion, and pacing across the sequence.",
  },
  {
    step: "04",
    title: "Refine and export",
    description:
      "Not quite right? Adjust the prompt and regenerate, or request variations. Once you're happy with the result, export it in a format ready for your website, app, or campaign.",
  },
  {
    step: "05",
    title: "Deploy or integrate",
    description:
      "Publish the finished asset directly, or wire generation into your own pipeline through the API — the same workflow, running unattended.",
  },
];

const imageWorkflow = [
  "Write a description of the subject, setting, and style you want.",
  "Choose an aspect ratio suited to your use case — square for social, widescreen for banners, portrait for stories.",
  "Generate multiple variations at once and pick the strongest result.",
  "Download in a ready-to-use image format.",
];

const videoWorkflow = [
  "Provide a script, storyline, or a single descriptive sentence.",
  "Sutertai breaks the idea into a sequence of shots, keeping characters and style consistent across frames.",
  "Preview the generated clip and adjust pacing or style through the prompt.",
  "Export the finished clip for reels, ads, or product demos.",
];

export default function HowWeWorkPage() {
  return (
    <div>
      <PageHero
        eyebrow="How we work"
        title={
          <>
            How <span className="text-generated">Sutertai</span> works
          </>
        }
        description="From a written idea to a finished image or video, here's what happens behind the scenes when you use Sutertai."
      />

      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="The process" title="Five steps, start to finish" />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {detailedSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 60} className="hairline-t pt-6">
                <span className="font-display text-3xl text-generated">
                  {item.step}
                </span>
                <h3 className="font-display mt-3 text-lg text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-b py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2">
          <Reveal className="card-lift rounded-2xl border border-[var(--line)] p-8">
            <h3 className="font-display text-2xl text-paper">Image workflow</h3>
            <ol className="mt-6 space-y-4">
              {imageWorkflow.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="font-display text-accent">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={80} className="card-lift rounded-2xl border border-[var(--line)] p-8">
            <h3 className="font-display text-2xl text-paper">Video workflow</h3>
            <ol className="mt-6 space-y-4">
              {videoWorkflow.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="font-display text-accent">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="hairline-b py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Quality and control"
            title="You stay in control of the result"
            description="Every generation is a starting point you can refine. Sutertai is built so you can iterate quickly — regenerate, adjust the prompt, or try a different style — until the output matches what you had in mind."
            align="center"
          />
        </div>
      </section>

      <CtaBanner
        title="See it for yourself"
        description="Try the live text-to-image generator, or get in touch to discuss text-to-video for your team."
      />
    </div>
  );
}
