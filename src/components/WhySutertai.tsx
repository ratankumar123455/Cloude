import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    stat: "4.2s",
    title: "Generation speed",
    description:
      "Median time from prompt to first render on our production inference cluster.",
  },
  {
    stat: "SOC 2",
    title: "Enterprise ready",
    description:
      "Role-based access, audit logs, and dedicated workspaces built in from day one.",
  },
  {
    stat: "AES-256",
    title: "Security by default",
    description:
      "Assets and prompts are encrypted at rest and in transit. Nothing trains on your data without consent.",
  },
  {
    stat: "REST + SDK",
    title: "Built for developers",
    description:
      "A documented API and client libraries so generation fits directly into your existing pipeline.",
  },
  {
    stat: "100%",
    title: "Creative freedom",
    description:
      "No fixed templates. Direct style, composition, and camera the way you'd brief a creative team.",
  },
  {
    stat: "99.9%",
    title: "Uptime",
    description:
      "Auto-scaling render infrastructure across multiple regions, monitored around the clock.",
  },
];

export default function WhySutertai() {
  return (
    <section className="hairline-b section-tint py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Sutertai"
          title="Engineering, not just prompts"
          description="Serious creative work needs serious infrastructure. Here's what's underneath the studio."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="card-lift bg-ink p-8"
            >
              <p className="font-display text-3xl text-generated">
                {item.stat}
              </p>
              <h3 className="font-display mt-4 text-lg text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
