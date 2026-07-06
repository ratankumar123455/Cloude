import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import ImageGenerator from "@/components/ImageGenerator";
import MagneticLink from "@/components/MagneticLink";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import HeroVisual from "@/components/HeroVisual";
import WhySutertai from "@/components/WhySutertai";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

const products = [
  {
    id: "text-to-image",
    tag: "Image",
    title: "Text to Image AI",
    description:
      "Ultra-realistic images, illustrations, product photography, and concept art from a single prompt — with commercial license, upscaling, and full brand consistency.",
    href: "/technology#text-to-image",
  },
  {
    id: "text-to-video",
    tag: "Video",
    title: "Text to Video AI",
    description:
      "Cinematic video generated directly from text, with consistent motion, camera movement, and voice synchronization from first frame to last.",
    href: "/technology#text-to-video",
  },
  {
    id: "ai-studio",
    tag: "Workspace",
    title: "AI Studio",
    description:
      "One workspace for image, video, editing, prompts, and assets — with an enterprise dashboard and API access when your team is ready to scale.",
    href: "/technology#ai-studio",
  },
];

const capabilities = [
  { tag: "Image", title: "Text to Image", description: "Photorealistic images, illustration, and product visuals." },
  { tag: "Video", title: "Text to Video", description: "Short-form and cinematic video from a written script." },
  { tag: "Edit", title: "AI Editing", description: "Inpainting, outpainting, and background removal, built in." },
  { tag: "Resolution", title: "Upscaling", description: "Clean 4K output ready for print and broadcast." },
  { tag: "Build", title: "API", description: "Every capability available through a documented REST API." },
  { tag: "Compute", title: "Cloud Rendering", description: "Auto-scaling render capacity with no local GPU required." },
];

const steps = [
  { step: "01", title: "Prompt", description: "Describe what you want to see, in plain language." },
  { step: "02", title: "Generate", description: "Sutertai's models render your prompt into an image or video." },
  { step: "03", title: "Edit", description: "Adjust composition, style, or motion until it matches your intent." },
  { step: "04", title: "Export", description: "Download in a format ready for your platform, at production resolution." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hairline-b relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
          style={{
            background:
              "radial-gradient(800px circle at 15% -10%, rgba(232,100,44,0.22), transparent 60%), radial-gradient(800px circle at 90% 15%, rgba(143,227,176,0.12), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-24 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col items-start">
            <Reveal>
              <span className="eyebrow-chip">
                <span className="dot">/</span>
                <span>Sutertai Private Limited — Generative AI</span>
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display mt-6 max-w-xl text-5xl leading-[1.05] font-medium text-paper sm:text-7xl">
                Build <span className="font-light text-muted">intelligence.</span>
                <br />
                <span className="text-generated">Create anything.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lg text-muted">
                Sutertai turns a written prompt into a finished image or video —
                production-grade output, built for teams that ship creative
                work every day.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticLink href="/generate" variant="primary">
                Start creating
              </MagneticLink>
              <MagneticLink href="/how-we-work" variant="secondary">
                See how it works
              </MagneticLink>
            </Reveal>
          </div>
          <Reveal delay={200} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <LogoMarquee />

      {/* Live demo */}
      <section id="generate" className="hairline-b py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Try it live"
            title="Generate an image right now"
            description="Type a prompt below to see Sutertai's text-to-image engine in action — no sign-up required."
            align="center"
          />
          <ImageGenerator />
        </div>
      </section>

      {/* Products — asymmetric contact sheet, not a uniform 3-card grid */}
      <section id="products" className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Products"
            title="Three products. One generation engine."
            description="Everything Sutertai builds runs on the same core model — tuned for image, for video, and for teams running both at scale."
          />
          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal
              delay={0}
              className="card-lift flex flex-col justify-between rounded-2xl border border-[var(--line)] p-8 lg:col-span-7 lg:row-span-2"
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="mono-label text-[10px] text-accent">
                    {products[0].tag}
                  </span>
                  <span className="mono-label text-[10px] text-muted-2">01 / 03</span>
                </div>
                <h3 className="font-display mt-4 text-3xl text-paper">
                  {products[0].title}
                </h3>
                <p className="mt-4 max-w-md text-sm text-muted">{products[0].description}</p>
              </div>
              <div
                className="mt-8 h-40 w-full rounded-xl"
                style={{
                  backgroundImage:
                    "linear-gradient(150deg, rgba(232,100,44,0.4), rgba(27,36,38,0.9) 70%)",
                }}
                aria-hidden="true"
              />
              <Link
                href={products[0].href}
                className="mt-8 text-sm font-medium text-accent hover:underline"
              >
                Explore Text to Image →
              </Link>
            </Reveal>

            {products.slice(1).map((product, i) => (
              <Reveal
                key={product.id}
                delay={(i + 1) * 80}
                className="card-lift flex flex-col justify-between rounded-2xl border border-[var(--line)] p-7 lg:col-span-5"
              >
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="mono-label text-[10px] text-accent">
                      {product.tag}
                    </span>
                    <span className="mono-label text-[10px] text-muted-2">
                      {String(i + 2).padStart(2, "0")} / 03
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-xl text-paper">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{product.description}</p>
                </div>
                <Link
                  href={product.href}
                  className="mt-6 text-sm font-medium text-accent hover:underline"
                >
                  Explore {product.title.split(" ")[0]} →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Process"
            title="From idea to finished asset in four steps"
          />
          <div className="hairline-t grid gap-x-8 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <span className="font-display text-3xl text-generated">
                  {item.step}
                </span>
                <h3 className="font-display mt-3 text-lg text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/how-we-work"
              className="text-sm font-medium text-accent hover:underline"
            >
              See the full process →
            </Link>
          </div>
        </div>
      </section>

      <WhySutertai />

      {/* AI Capabilities */}
      <section className="hairline-b section-tint py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="Every way to create a visual, in one platform"
          />
          <div className="hairline-t grid sm:grid-cols-2 lg:grid-cols-3 [&>div]:border-b [&>div]:border-[var(--line)] [&>div]:py-7 lg:[&>div:not(:nth-child(3n))]:border-r lg:[&>div:not(:nth-child(3n))]:pr-8 lg:[&>div:not(:nth-child(3n))]:border-[var(--line)]">
            {capabilities.map((item, i) => (
              <Reveal key={item.title} delay={i * 40} className="flex flex-col gap-2 lg:pl-8">
                <span className="mono-label text-[10px] text-accent">
                  {item.tag}
                </span>
                <h3 className="font-display text-xl text-paper">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Industries />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBanner />
    </div>
  );
}
