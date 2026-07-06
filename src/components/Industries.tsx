import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const industries = [
  {
    title: "Marketing",
    description: "Campaign visuals, ad variants, and social content at the pace of a brief, not a production schedule.",
    tone: "linear-gradient(150deg, rgba(91,95,255,0.45), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Retail & E-commerce",
    description: "Catalog photography and lifestyle imagery for thousands of SKUs without a studio booking.",
    tone: "linear-gradient(150deg, rgba(0,229,255,0.35), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Architecture & Real Estate",
    description: "Concept renders and walkthroughs clients can react to before a single brick is laid.",
    tone: "linear-gradient(150deg, rgba(139,92,246,0.4), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Media & Entertainment",
    description: "Storyboards, previsualization, and short-form video for teams that iterate fast.",
    tone: "linear-gradient(150deg, rgba(91,95,255,0.25), rgba(0,229,255,0.2) 60%, rgba(27,36,38,0.92))",
  },
  {
    title: "Education",
    description: "Illustrated explainers and course visuals that would otherwise need a design queue.",
    tone: "linear-gradient(150deg, rgba(0,229,255,0.28), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Gaming",
    description: "Concept art, environment studies, and asset exploration ahead of production art.",
    tone: "linear-gradient(150deg, rgba(91,95,255,0.35), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Healthcare",
    description: "Patient education visuals and internal communication assets, generated on brand.",
    tone: "linear-gradient(150deg, rgba(0,229,255,0.32), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Finance",
    description: "Investor decks, product explainers, and campaign visuals that meet compliance review.",
    tone: "linear-gradient(150deg, rgba(139,92,246,0.32), rgba(0,229,255,0.18) 60%, rgba(27,36,38,0.92))",
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="card-lift rounded-xl border border-[var(--line)] p-5"
            >
              <div
                className="h-24 rounded-lg border border-[var(--line)]"
                style={{ backgroundImage: item.tone }}
                aria-hidden="true"
              />
              <h3 className="font-display mt-4 text-lg text-paper">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
