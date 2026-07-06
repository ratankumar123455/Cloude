import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cases = [
  {
    tag: "Marketing Agency",
    metric: "84%",
    metricLabel: "less production time",
    title: "Fieldnote Agency cut campaign turnaround from weeks to days",
    description:
      "Fieldnote replaced a chunk of its stock photography and freelance illustration spend with Sutertai's Text to Image, keeping client review cycles inside the same week as the brief.",
  },
  {
    tag: "E-commerce",
    metric: "200,000+",
    metricLabel: "product images generated",
    title: "Meridian Goods scaled catalog photography without a studio",
    description:
      "Batch generation let Meridian produce consistent lifestyle and packshot imagery across its full SKU range, with brand style locked in through saved presets.",
  },
  {
    tag: "Architecture",
    metric: "150+",
    metricLabel: "3D visualizations delivered",
    title: "Blueprint House pitches concepts before the first model is built",
    description:
      "Early-stage renders and walkthroughs that used to wait for a 3D pass now go out same-week, giving Blueprint House more shots at winning a pitch.",
  },
  {
    tag: "Media & Entertainment",
    metric: "12x",
    metricLabel: "faster video production",
    title: "Novara Studio produces more video with the same team",
    description:
      "Text to Video handles first-pass storyboarding and previsualization, so Novara's editors spend their time finishing cuts instead of starting them from scratch.",
  },
];

export default function CaseStudies() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Case studies"
          title="What teams build with Sutertai"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {cases.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="card-lift flex flex-col justify-between rounded-2xl border border-[var(--line)] p-8"
            >
              <div>
                <span className="mono-label text-[10px] text-accent">
                  {item.tag}
                </span>
                <p className="font-display mt-6 text-4xl text-generated">
                  {item.metric}
                </p>
                <p className="mono-label mt-1 text-[10px] text-muted">
                  {item.metricLabel}
                </p>
                <h3 className="font-display mt-6 text-xl leading-snug text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
