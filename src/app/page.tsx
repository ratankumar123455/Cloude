import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import ImageGenerator from "@/components/ImageGenerator";

const capabilities = [
  {
    title: "Text to Image",
    description:
      "Describe a scene in plain language and get a high-resolution image back in seconds.",
  },
  {
    title: "Text to Video",
    description:
      "Turn a script or a single sentence into a short-form video clip with consistent motion and style.",
  },
  {
    title: "Style control",
    description:
      "Guide composition, lighting, and tone through prompts — no design software required.",
  },
  {
    title: "Batch generation",
    description:
      "Generate multiple variations at once so you can pick the best result faster.",
  },
  {
    title: "API access",
    description:
      "Plug Sutertai's generation engine directly into your own app or content pipeline.",
  },
  {
    title: "Team workspaces",
    description:
      "Keep prompts, styles, and generated assets organized and shared across your team.",
  },
];

const steps = [
  {
    step: "01",
    title: "Describe your idea",
    description: "Write what you want to see, in plain language.",
  },
  {
    step: "02",
    title: "Generate with AI",
    description: "Sutertai's models render your prompt into an image or video.",
  },
  {
    step: "03",
    title: "Refine the result",
    description: "Adjust the prompt or regenerate until it matches your vision.",
  },
  {
    step: "04",
    title: "Export and use",
    description: "Download your asset in a format ready for your platform.",
  },
];

const audiences = [
  {
    title: "Marketing teams",
    description: "Produce campaign visuals and short video ads without a production crew.",
  },
  {
    title: "Content creators",
    description: "Generate thumbnails, illustrations, and clips for social and video platforms.",
  },
  {
    title: "E-commerce brands",
    description: "Create product imagery and promotional visuals at scale.",
  },
  {
    title: "Startups and founders",
    description: "Get professional-looking visuals for decks, landing pages, and launches fast.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(167,139,250,0.18),_transparent_60%)]" />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-20 text-center">
          <span className="glow-border rounded-full px-4 py-1 text-xs uppercase tracking-widest text-violet-300">
            Generative AI, from words to visuals
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Turn text into
            <span className="gradient-text"> images and video</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Sutertai Private Limited builds generative AI products that turn
            a simple prompt into ready-to-use images and videos — for
            creators, marketers, and product teams.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/generate"
              className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Try the generator
            </Link>
            <Link
              href="/how-we-work"
              className="glow-border rounded-full px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Live demo */}
      <section id="generate" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Try it live"
            title="Generate an image right now"
            description="Type a prompt below to see Sutertai's text-to-image engine in action — no sign-up required."
            align="center"
          />
          <ImageGenerator />
        </div>
      </section>

      {/* Capabilities */}
      <section id="products" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="One platform"
            title="Every way to create a visual"
            description="Sutertai combines image and video generation with the controls creative teams actually need."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Process"
            title="From idea to finished asset in four steps"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
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
          <div className="mt-10 text-center">
            <Link
              href="/how-we-work"
              className="text-sm font-medium text-violet-300 hover:underline"
            >
              See the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Who it's for"
            title="Built for anyone who needs visuals, fast"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
