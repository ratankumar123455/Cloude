import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Sutertai",
  description:
    "Sutertai Private Limited is a generative AI company building text-to-image and text-to-video products, based in Prayagraj, India.",
};

const missionVision = [
  {
    title: "Our mission",
    description:
      "Make high-quality visual creation accessible to anyone with an idea — no camera, design software, or production budget required.",
  },
  {
    title: "Our vision",
    description:
      "A world where turning a written idea into a finished image or video takes seconds, not days, so creators and businesses can spend their time on the idea, not the production.",
  },
];

const values = [
  {
    title: "Simplicity",
    description: "If it takes more than a sentence to describe, we haven't made it simple enough yet.",
  },
  {
    title: "Speed",
    description: "Creative iteration should happen in seconds so ideas don't lose momentum.",
  },
  {
    title: "Control",
    description: "AI should assist your creative direction, not replace it.",
  },
  {
    title: "Accessibility",
    description: "Professional-quality visuals shouldn't require a professional production budget.",
  },
];

const roadmap = [
  {
    label: "Now",
    title: "Text-to-image and text-to-video generation",
    description:
      "Our core generative engine, available through the web and via API for teams building on top of it.",
  },
  {
    label: "Next",
    title: "Deeper style and character control",
    description:
      "Finer control over composition, characters, and consistency across generated frames and clips.",
  },
  {
    label: "Later",
    title: "Creator and team workflows",
    description:
      "Shared workspaces, asset libraries, and integrations that fit into existing content pipelines.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="glow-border rounded-full px-4 py-1 text-xs uppercase tracking-widest text-violet-300">
            About us
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Building the future of{" "}
            <span className="gradient-text">visual creation</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            Sutertai Private Limited is a generative AI company. We build
            text-to-image and text-to-video products that turn written
            descriptions into finished visuals.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {missionVision.map((item) => (
              <div key={item.title} className="glow-border rounded-2xl bg-white/[0.03] p-8">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="What drives us" title="The principles behind what we build" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Where we're headed" title="Our roadmap" />
          <div className="space-y-6">
            {roadmap.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-4 rounded-2xl bg-white/[0.03] p-6 sm:flex-row sm:items-start"
              >
                <span className="glow-border h-fit shrink-0 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet-300">
                  {item.label}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glow-border rounded-2xl bg-white/[0.03] p-10 sm:p-14">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-300">
              Registered and operated in India
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Sutertai Private Limited is headquartered in Prayagraj, Uttar
              Pradesh, India, building generative AI products for creators
              and businesses everywhere.
            </p>
            <p className="mt-4 text-white">
              174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj,
              Uttar Pradesh 211002, India
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            eyebrow="Our approach"
            title="AI and human creativity, working together"
            description="We don't see generative AI as a replacement for creative judgment. Sutertai is built to remove the technical and financial barriers between an idea and a finished visual — the direction is still yours."
            align="center"
          />
        </div>
      </section>

      <CtaBanner
        title="Meet the people building Sutertai"
        description="Get to know the team behind the product, or reach out directly."
        primaryHref="/team"
        primaryLabel="Meet the team"
      />
    </div>
  );
}
