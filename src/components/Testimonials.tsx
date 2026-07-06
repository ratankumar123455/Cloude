import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "We stopped briefing stock photo libraries and started briefing Sutertai. The output is closer to what the client actually asked for, on the first pass.",
    name: "Aditi Rao",
    role: "Creative Director, Fieldnote Agency",
  },
  {
    quote:
      "The API meant our engineers could wire generation straight into our listing pipeline. It wasn't a separate tool bolted onto our workflow — it was infrastructure.",
    name: "Karan Mehta",
    role: "Founder, Meridian Goods",
  },
  {
    quote:
      "Client-ready renders in days instead of weeks changed how many concepts we can afford to explore before committing to one.",
    name: "Priya Nair",
    role: "Marketing Head, Blueprint House",
  },
  {
    quote:
      "Consistency across a few thousand generations is the hard part. Style locking is the one feature I'd fight to keep.",
    name: "Devansh Iyer",
    role: "Product Manager, Novara Studio",
  },
];

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
              <div className="mt-6">
                <p className="text-sm font-semibold text-paper">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
