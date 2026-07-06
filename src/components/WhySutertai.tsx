import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const secondary = [
  {
    stat: "SOC 2",
    title: "Enterprise ready",
    description: "Role-based access, audit logs, and dedicated workspaces built in from day one.",
  },
  {
    stat: "AES-256",
    title: "Security by default",
    description: "Assets and prompts are encrypted at rest and in transit, always.",
  },
];

const supporting = [
  {
    stat: "REST + SDK",
    title: "Built for developers",
    description: "A documented API and client libraries so generation fits directly into your pipeline.",
  },
  {
    stat: "100%",
    title: "Creative freedom",
    description: "No fixed templates — direct style, composition, and camera the way you'd brief a team.",
  },
  {
    stat: "99.9%",
    title: "Uptime",
    description: "Auto-scaling render infrastructure across multiple regions, monitored around the clock.",
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

        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="card-lift flex flex-col justify-between rounded-2xl border border-[var(--line)] p-8 lg:col-span-5 lg:row-span-2">
            <div>
              <span className="mono-label text-[10px] text-accent">Generation speed</span>
              <h3 className="font-display mt-3 text-2xl text-paper">
                Renders as fast as you iterate
              </h3>
              <p className="mt-3 max-w-xs text-sm text-muted">
                Median time from prompt to first render on our production
                inference cluster.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div
                className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
                style={{
                  background:
                    "conic-gradient(var(--signal) 0deg 305deg, rgba(242,240,233,0.08) 305deg 360deg)",
                }}
              >
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[var(--ink)]">
                  <span className="font-display text-2xl text-generated">4.2s</span>
                </div>
              </div>
              <p className="mono-label text-[10px] text-muted-2">
                85% of requests
                <br />
                render under 5s
              </p>
            </div>
          </Reveal>

          {secondary.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i + 1) * 60}
              className="card-lift rounded-2xl border border-[var(--line)] p-7 lg:col-span-7"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <span className="mono-label text-[10px] text-accent">{item.stat}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}

          {supporting.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i + 3) * 60}
              className="card-lift rounded-2xl border border-[var(--line)] p-7 lg:col-span-4"
            >
              <p className="font-display text-2xl text-generated">{item.stat}</p>
              <h3 className="font-display mt-3 text-lg text-paper">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
