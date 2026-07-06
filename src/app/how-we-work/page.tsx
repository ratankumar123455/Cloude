import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "How We Work | Sutertai",
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
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            How <span className="gradient-text">Sutertai</span> works
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            From a written idea to a finished image or video, here&apos;s
            what happens behind the scenes when you use Sutertai.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="The process" title="Four steps, start to finish" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {detailedSteps.map((item) => (
              <div key={item.step} className="glow-border rounded-2xl bg-white/[0.03] p-6">
                <span className="text-sm font-semibold text-violet-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/[0.03] p-8">
            <h3 className="text-2xl font-semibold text-white">Image workflow</h3>
            <ol className="mt-6 space-y-4">
              {imageWorkflow.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-300">
                  <span className="font-semibold text-violet-300">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl bg-white/[0.03] p-8">
            <h3 className="text-2xl font-semibold text-white">Video workflow</h3>
            <ol className="mt-6 space-y-4">
              {videoWorkflow.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-300">
                  <span className="font-semibold text-violet-300">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
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
