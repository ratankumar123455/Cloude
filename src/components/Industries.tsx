import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const industries = [
  {
    title: "Marketing",
    description: "Campaign visuals, ad variants, and social content at the pace of a brief, not a production schedule.",
  },
  {
    title: "Retail & E-commerce",
    description: "Catalog photography and lifestyle imagery for thousands of SKUs without a studio booking.",
  },
  {
    title: "Architecture & Real Estate",
    description: "Concept renders and walkthroughs clients can react to before a single brick is laid.",
  },
  {
    title: "Media & Entertainment",
    description: "Storyboards, previsualization, and short-form video for teams that iterate fast.",
  },
  {
    title: "Education",
    description: "Illustrated explainers and course visuals that would otherwise need a design queue.",
  },
  {
    title: "Gaming",
    description: "Concept art, environment studies, and asset exploration ahead of production art.",
  },
  {
    title: "Healthcare",
    description: "Patient education visuals and internal communication assets, generated on brand.",
  },
];

export default function Industries() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Industries"
          title="Built for teams that make things"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="card-lift rounded-xl border border-[var(--line)] p-6"
            >
              <h3 className="font-display text-lg text-paper">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
