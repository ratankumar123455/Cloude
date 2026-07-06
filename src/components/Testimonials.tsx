import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "We stopped briefing stock photo libraries and started briefing Sutertai. The output is closer to what the client actually asked for, on the first pass.",
    name: "Aditi Rao",
    role: "Creative Director, Fieldnote Agency",
    tone: "linear-gradient(150deg, rgba(31,169,113,0.9), rgba(27,36,38,0.9))",
  },
  {
    quote:
      "The API meant our engineers could wire generation straight into our listing pipeline. It wasn't a separate tool bolted onto our workflow — it was infrastructure.",
    name: "Karan Mehta",
    role: "Founder, Meridian Goods",
    tone: "linear-gradient(150deg, rgba(52,211,199,0.85), rgba(27,36,38,0.9))",
  },
  {
    quote:
      "Client-ready renders in days instead of weeks changed how many concepts we can afford to explore before committing to one.",
    name: "Priya Nair",
    role: "Marketing Head, Blueprint House",
    tone: "linear-gradient(150deg, rgba(74,222,147,0.85), rgba(27,36,38,0.9))",
  },
  {
    quote:
      "Consistency across a few thousand generations is the hard part. Style locking is the one feature I'd fight to keep.",
    name: "Devansh Iyer",
    role: "Product Manager, Novara Studio",
    tone: "linear-gradient(150deg, rgba(31,169,113,0.6), rgba(52,211,199,0.5))",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What people say"
          title="Trusted by the teams doing the work"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 60}
              className="card-lift rounded-2xl border border-[var(--line)] p-8"
            >
              <p className="text-lg leading-relaxed text-paper">
                “{item.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm text-pure"
                  style={{ backgroundImage: item.tone }}
                  aria-hidden="true"
                >
                  {initials(item.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-paper">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
