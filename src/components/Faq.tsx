import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "What exactly does Sutertai generate?",
    a: "Images and video from natural-language prompts — product photography, concept art, marketing visuals, illustrations, architecture renders, and short-form video with motion, camera movement, and voice synchronization.",
  },
  {
    q: "Do I own the rights to what I generate?",
    a: "Yes. Paid plans include a commercial license for everything you generate. You can use outputs in client work, advertising, and products without attribution.",
  },
  {
    q: "Can I control the style of the output?",
    a: "Yes. You can guide composition, lighting, camera angle, and art direction through your prompt, and save brand presets so every generation stays consistent with your visual identity.",
  },
  {
    q: "How is Sutertai different from a general-purpose image model?",
    a: "Sutertai is built around production workflows — batch generation, brand consistency, team workspaces, and an API — rather than a single-prompt playground.",
  },
  {
    q: "What resolution can I export at?",
    a: "Standard plans export at high resolution; Pro and Enterprise plans include 4K upscaling for both images and video.",
  },
  {
    q: "Is there an API?",
    a: "Yes. Pro and Enterprise plans include REST API access and client SDKs so you can plug generation directly into your own application or content pipeline.",
  },
  {
    q: "How does team collaboration work?",
    a: "Team workspaces keep prompts, brand presets, and generated assets organized and shared, with role-based access on Enterprise plans.",
  },
  {
    q: "What happens to my prompts and generated assets?",
    a: "Your data is encrypted at rest and in transit. We do not use your prompts or outputs to train shared models unless you explicitly opt in.",
  },
  {
    q: "Can I cancel or change plans at any time?",
    a: "Yes. You can upgrade, downgrade, or cancel from your account at any time — changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Do you offer support for enterprise deployments?",
    a: "Enterprise plans include a dedicated success engineer, custom rendering capacity, and support for SSO and audit logging.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="hairline-b py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          align="center"
        />
        <div className="hairline-t">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i * 30, 200)} as="details" className="group hairline-b py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-display text-base text-paper sm:text-lg">
                  {item.q}
                </span>
                <span className="mono-label shrink-0 text-lg text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm text-muted">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
