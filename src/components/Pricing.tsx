import MagneticLink from "./MagneticLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For exploring what Sutertai can generate.",
    features: [
      "50 image generations / month",
      "Standard resolution output",
      "Community prompt library",
      "Personal watermark on exports",
    ],
    cta: "Start free",
    href: "/generate",
    featured: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For creators and small teams shipping regularly.",
    features: [
      "2,000 image generations / month",
      "200 video generations / month",
      "4K upscaling and commercial license",
      "Brand style presets",
      "Priority render queue",
    ],
    cta: "Start Pro trial",
    href: "/generate",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual contract",
    description: "For studios and companies running production at scale.",
    features: [
      "Unlimited generation volume",
      "Dedicated rendering capacity",
      "API access and SSO",
      "Enterprise dashboard and audit logs",
      "Dedicated success engineer",
    ],
    cta: "Talk to sales",
    href: "/contact",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your output"
          description="Start free. Upgrade when your team needs more volume, resolution, or control."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 80}
              className={`flex flex-col rounded-2xl p-8 ${
                tier.featured
                  ? "border border-[var(--violet)] bg-[var(--surface)]"
                  : "card-lift border border-[var(--line)]"
              }`}
            >
              {tier.featured && (
                <span className="mono-label mb-4 w-fit rounded-full bg-gradient-brand px-3 py-1 text-[10px] text-pure">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl text-paper">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl text-paper">
                  {tier.price}
                </span>
                <span className="text-sm text-muted">{tier.period}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-muted">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-accent">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <MagneticLink
                href={tier.href}
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {tier.cta}
              </MagneticLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
