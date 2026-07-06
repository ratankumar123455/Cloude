import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
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
      <PageHero
        eyebrow="About us"
        title={
          <>
            Building the future of{" "}
            <span className="text-generated">visual creation</span>
          </>
        }
        description="Sutertai Private Limited is a generative AI company. We build text-to-image and text-to-video products that turn written descriptions into finished visuals."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-x-12 sm:grid-cols-2">
            {missionVision.map((item, i) => (
              <div
                key={item.title}
                className={`hairline-t pt-8 pb-8 sm:pb-0 ${i === 0 ? "sm:pr-12" : "sm:border-l sm:border-[var(--line)] sm:pl-12"}`}
              >
                <h3 className="font-display text-2xl text-paper">{item.title}</h3>
                <p className="mt-4 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="What drives us" title="The principles behind what we build" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div key={item.title} className="border-l-2 border-accent/60 pl-5">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Where we're headed" title="Our roadmap" />
          <div className="hairline-t">
            {roadmap.map((item) => (
              <div
                key={item.label}
                className="hairline-b flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-10"
              >
                <span className="mono-label w-20 shrink-0 text-[11px] text-accent">
                  {item.label}
                </span>
                <div>
                  <h3 className="font-display text-lg text-paper">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="surface rounded-xl p-10 sm:p-14">
            <p className="mono-label text-[11px] text-accent">
              Registered and operated in India
            </p>
            <p className="mt-4 max-w-2xl text-muted">
              Sutertai Private Limited is headquartered in Prayagraj, Uttar
              Pradesh, India, building generative AI products for creators
              and businesses everywhere.
            </p>
            <p className="mt-4 text-paper">
              174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj,
              Uttar Pradesh 211002, India
            </p>
          </div>
        </div>
      </section>

      <section className="hairline-t py-24">
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
