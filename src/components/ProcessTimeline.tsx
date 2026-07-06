import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    step: "01",
    title: "Provide your input",
    description: "Describe the shot, or drop in a reference. Sutertai reads both.",
    visual: (
      <div className="flex flex-wrap gap-2">
        {["ceramic bottle", "golden hour", "85mm", "product photo"].map((tag) => (
          <span
            key={tag}
            className="mono-label rounded-full border border-[var(--line-strong)] px-3 py-1.5 text-[10px] text-paper"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    step: "02",
    title: "Generate with AI",
    description: "The model renders a first pass in seconds, ready to review.",
    visual: (
      <div>
        <div
          className="h-24 rounded-lg"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(91,95,255,0.5), rgba(0,229,255,0.25) 60%, rgba(27,36,38,0.92))",
          }}
        />
        <div className="mt-3 flex items-center gap-2">
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <span className="block h-full w-4/5 rounded-full bg-gradient-brand" />
          </span>
          <span className="mono-label text-[9px] text-muted-2">4.2s</span>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Refine the result",
    description: "Nudge lighting, style, or composition without rewriting the prompt.",
    visual: (
      <div className="space-y-3">
        {["Lighting", "Style strength", "Camera angle"].map((label, i) => (
          <div key={label}>
            <div className="mono-label mb-1.5 flex justify-between text-[9px] text-muted-2">
              <span>{label}</span>
              <span>{[70, 45, 60][i]}%</span>
            </div>
            <span className="block h-1 overflow-hidden rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-gradient-brand"
                style={{ width: `${[70, 45, 60][i]}%` }}
              />
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    step: "04",
    title: "Export",
    description: "Production-ready output, or pipe it straight into your app via API.",
    visual: (
      <div className="flex flex-wrap gap-2">
        {["PNG · 8K", "MP4 · 4K60", "JSON via API", "PSD layers"].map((tag) => (
          <span
            key={tag}
            className="mono-label rounded-md border border-[var(--line-strong)] px-3 py-1.5 text-[10px] text-scope"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    step: "05",
    title: "Deploy",
    description: "Push the finished asset live, or wire the workflow into your pipeline via API.",
    visual: (
      <div className="flex items-center justify-between">
        <div>
          <p className="mono-label text-[9px] text-muted-2">Environment</p>
          <p className="mt-1 text-sm text-paper">Production</p>
        </div>
        <span className="flex items-center gap-2">
          <span className="status-dot" />
          <span className="mono-label text-[10px] text-scope">Live</span>
        </span>
      </div>
    ),
  },
];

export default function ProcessTimeline() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Process"
          title="From idea to finished asset in five steps"
        />
        <div className="hairline-t">
          {steps.map((item, i) => (
            <Reveal
              key={item.step}
              delay={i * 60}
              className="hairline-b grid gap-8 py-12 sm:grid-cols-[80px_1fr_1fr] sm:items-center"
            >
              <span className="font-display text-3xl text-generated">{item.step}</span>
              <div>
                <h3 className="font-display text-xl text-paper sm:text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-sm text-sm text-muted">{item.description}</p>
              </div>
              <div className="surface rounded-xl p-5">{item.visual}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
