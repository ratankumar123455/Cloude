import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const capabilities = [
  {
    tag: "Image",
    title: "Text to Image",
    description: "Photorealistic images, illustration, and product visuals.",
    tone: "linear-gradient(150deg, rgba(232,100,44,0.5), rgba(27,36,38,0.92) 70%)",
  },
  {
    tag: "Video",
    title: "Text to Video",
    description: "Short-form and cinematic video from a written script.",
    tone: "linear-gradient(150deg, rgba(143,227,176,0.4), rgba(27,36,38,0.92) 70%)",
  },
  {
    tag: "Edit",
    title: "AI Editing",
    description: "Inpainting, outpainting, and background removal, built in.",
    tone: "linear-gradient(150deg, rgba(255,131,71,0.45), rgba(27,36,38,0.92) 70%)",
  },
  {
    tag: "Resolution",
    title: "Upscaling",
    description: "Clean 4K output ready for print and broadcast.",
    tone: "linear-gradient(150deg, rgba(232,100,44,0.3), rgba(143,227,176,0.2) 60%, rgba(27,36,38,0.92))",
  },
  {
    tag: "Build",
    title: "API",
    description: "Every capability available through a documented REST API.",
    tone: "linear-gradient(150deg, rgba(143,227,176,0.25), rgba(27,36,38,0.92) 70%)",
  },
  {
    tag: "Compute",
    title: "Cloud Rendering",
    description: "Auto-scaling render capacity with no local GPU required.",
    tone: "linear-gradient(150deg, rgba(232,100,44,0.22), rgba(27,36,38,0.92) 70%)",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="hairline-b section-tint py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="Every way to create a visual, in one platform"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="card-lift rounded-2xl border border-[var(--line)] p-5"
            >
              <div
                className="h-28 rounded-lg border border-[var(--line)]"
                style={{ backgroundImage: item.tone }}
                aria-hidden="true"
              />
              <div className="mt-4 flex items-baseline justify-between">
                <span className="mono-label text-[10px] text-accent">{item.tag}</span>
              </div>
              <h3 className="font-display mt-2 text-lg text-paper">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
