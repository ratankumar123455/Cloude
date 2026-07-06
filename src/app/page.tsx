import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import ImageGenerator from "@/components/ImageGenerator";
import MagneticLink from "@/components/MagneticLink";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import HeroVisual from "@/components/HeroVisual";
import Gallery from "@/components/Gallery";
import ProductShowcase from "@/components/ProductShowcase";
import WhySutertai from "@/components/WhySutertai";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechPanel from "@/components/TechPanel";
import ScaleChart from "@/components/ScaleChart";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

const heroStats = [
  { value: "50K+", label: "Assets shipped" },
  { value: "800+", label: "Teams onboard" },
  { value: "99.9%", label: "Render uptime" },
  { value: "4.9/5", label: "Studio rating" },
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
              "radial-gradient(800px circle at 15% -10%, rgba(91,95,255,0.28), transparent 60%), radial-gradient(800px circle at 90% 15%, rgba(0,229,255,0.14), transparent 55%)",
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
              <h1 className="font-display mt-6 max-w-2xl text-6xl leading-[1.02] font-medium text-paper sm:text-8xl">
                Build <span className="font-light text-muted">intelligence.</span>
                <br />
                <span className="text-generated">Create infinite possibilities.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-xl text-muted">
                Sutertai develops enterprise-grade generative AI products that
                transform text into stunning visuals, cinematic videos, and
                intelligent creative workflows.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticLink href="/generate" variant="primary">
                Start Creating
              </MagneticLink>
              <MagneticLink href="/contact" variant="secondary">
                Book Demo
              </MagneticLink>
            </Reveal>
            <Reveal delay={300} className="mt-12 grid w-full max-w-lg grid-cols-4 gap-4 border-t border-[var(--line)] pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-xl text-paper sm:text-2xl">{stat.value}</p>
                  <p className="mono-label mt-1 text-[9px] text-muted-2">{stat.label}</p>
                </div>
              ))}
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

      <ProductShowcase />

      <Gallery />
      <WhySutertai />
      <CapabilitiesGrid />
      <ProcessTimeline />
      <Industries />
      <TechPanel />
      <ScaleChart />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBanner />
    </div>
  );
}
