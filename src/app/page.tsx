import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import ImageGenerator from "@/components/ImageGenerator";

const capabilities = [
  {
    tag: "Image",
    title: "Text to Image",
    description:
      "Describe a scene in plain language and get a high-resolution image back in seconds.",
  },
  {
    tag: "Video",
    title: "Text to Video",
    description:
      "Turn a script or a single sentence into a short-form video clip with consistent motion and style.",
  },
  {
    tag: "Direction",
    title: "Style control",
    description:
      "Guide composition, lighting, and tone through prompts — no design software required.",
  },
  {
    tag: "Output",
    title: "Batch generation",
    description:
      "Generate multiple variations at once so you can pick the best result faster.",
  },
  {
    tag: "Build",
    title: "API access",
    description:
      "Plug Sutertai's generation engine directly into your own app or content pipeline.",
  },
  {
    tag: "Teams",
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
      <section className="hairline-b">
        <div className="mx-auto flex max-w-6xl flex-col items-start px-6 pt-24 pb-20">
          <p className="mono-label text-[11px] text-accent">
            Generative AI, from words to visuals
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] text-paper sm:text-7xl">
            Turn text into
            <br />
            <span className="text-generated">images and video</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted">
            Sutertai Private Limited builds generative AI products that turn
            a simple prompt into ready-to-use images and videos — for
            creators, marketers, and product teams.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/generate"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Try the generator
            </Link>
            <Link
              href="/how-we-work"
              className="rounded-full border border-[var(--line)] px-7 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Live demo */}
      <section id="generate" className="hairline-b py-24">
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
      <section id="products" className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="One platform"
            title="Every way to create a visual"
            description="Sutertai combines image and video generation with the controls creative teams actually need."
          />
          <div className="hairline-t grid sm:grid-cols-2 [&>div]:border-b [&>div]:border-[var(--line)] [&>div]:py-7 sm:[&>div:nth-child(2n)]:border-l sm:[&>div:nth-child(2n)]:border-[var(--line)] sm:[&>div:nth-child(2n)]:pl-8 sm:[&>div:nth-child(odd)]:pr-8">
            {capabilities.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <span className="mono-label text-[10px] text-accent">
                  {item.tag}
                </span>
                <h3 className="font-display text-xl text-paper">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Process"
            title="From idea to finished asset in four steps"
          />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="hairline-t pt-6">
                <span className="font-display text-3xl text-accent">
                  {item.step}
                </span>
                <h3 className="font-display mt-3 text-lg text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/how-we-work"
              className="text-sm font-medium text-accent hover:underline"
            >
              See the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Who it's for"
            title="Built for anyone who needs visuals, fast"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-accent/60 pl-5"
              >
                <h3 className="font-display text-lg text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
