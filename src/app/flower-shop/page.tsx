import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import FlowerShopNav from "./FlowerShopNav";
import SubscribeForm from "./SubscribeForm";
import {
  SpecimenDahlia,
  SpecimenZinnia,
  SpecimenSweetPea,
  SpecimenCosmos,
  SpecimenHydrangea,
  SpecimenSnapdragon,
  Sprig,
} from "./botanical";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--fs-font-display",
  style: ["normal", "italic"],
});

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--fs-font-body",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--fs-font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Bloom & Bramble — Seasonal Flowers, Cut to Order",
  description:
    "A dummy flower-shop concept site: seasonal, foraged bouquets hand-tied the morning they ship. Built to demo the frontend-design and ui-ux-pro-max skills.",
};

const inSeason = [
  "Dahlia",
  "Zinnia",
  "Sweet Pea",
  "Cosmos",
  "Hydrangea",
  "Snapdragon",
  "Garden Rose",
  "Scabiosa",
];

const specimens = [
  {
    no: "01",
    name: "The Dawn Cut",
    latin: "Dahlia pinnata, mixed",
    desc: "Warm crimson and apricot dahlias, cut before the heat of the day.",
    harvest: "Tue–Thu",
    price: "$58",
    Art: SpecimenDahlia,
  },
  {
    no: "02",
    name: "Meadow Edge",
    latin: "Zinnia elegans + Cosmos bipinnatus",
    desc: "Unstructured zinnia and cosmos, tied loose like they were picked on a walk.",
    harvest: "Wed–Sat",
    price: "$48",
    Art: SpecimenZinnia,
  },
  {
    no: "03",
    name: "Climbing Row",
    latin: "Lathyrus odoratus",
    desc: "Scented sweet pea from the trellis rows, bundled while still cool.",
    harvest: "Mon–Wed",
    price: "$42",
    Art: SpecimenSweetPea,
  },
  {
    no: "04",
    name: "Hedgerow",
    latin: "Hydrangea macrophylla + garden foliage",
    desc: "Full hydrangea heads with whatever foliage looked good this week.",
    harvest: "Thu–Sat",
    price: "$65",
    Art: SpecimenHydrangea,
  },
  {
    no: "05",
    name: "Border Stock",
    latin: "Antirrhinum majus",
    desc: "Tall snapdragon spires for anyone who wants height on the table.",
    harvest: "Tue–Fri",
    price: "$46",
    Art: SpecimenSnapdragon,
  },
  {
    no: "06",
    name: "The Whole Bed",
    latin: "Mixed, grower's choice",
    desc: "A bit of everything currently blooming — no two are ever quite the same.",
    harvest: "Daily",
    price: "$72",
    Art: SpecimenCosmos,
  },
];

const steps = [
  {
    no: "01",
    title: "Cut at first light",
    body: "Stems come from the field or a partner grower's beds before 7am, so nothing has spent a night in a cooler.",
  },
  {
    no: "02",
    title: "Bound by hand",
    body: "Trimmed, tied in a single knot, and wrapped in unbleached kraft — no floral foam, no plastic sleeve.",
  },
  {
    no: "03",
    title: "Out by noon",
    body: "Same-day courier inside the city; next-morning post everywhere else.",
  },
];

export default function FlowerShopPage() {
  const year = new Date().getFullYear();

  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[var(--fs-paper)] text-[var(--fs-ink)]`}
      style={
        {
          "--fs-paper": "#EFF1E3",
          "--fs-card": "#F8F7EE",
          "--fs-ink": "#21301D",
          "--fs-moss": "#55704A",
          "--fs-berry": "#7C2C4B",
          "--fs-gold": "#B4893C",
          "--fs-line": "#CBD0B8",
          fontFamily: "var(--fs-font-body)",
        } as CSSProperties
      }
    >
      <style>{`
        #top .font-display { font-family: var(--fs-font-display); }
        #top .font-mono { font-family: var(--fs-font-mono); }
      `}</style>

      <FlowerShopNav />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--fs-berry)]">
            Field notes — week 27, July
          </p>
          <h1 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-[var(--fs-ink)] sm:text-5xl md:text-6xl">
            Flowers that still look like they grew somewhere.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--fs-moss)] sm:text-lg">
            Bloom &amp; Bramble cuts, forages, and hand-ties every order the
            same morning it ships. No cold storage, no floral foam, no two
            bundles alike.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#index"
              className="rounded-full bg-[var(--fs-berry)] px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[var(--fs-paper)] transition-opacity hover:opacity-90"
            >
              Browse this week&rsquo;s index
            </a>
            <a
              href="#process"
              className="rounded-full border border-[var(--fs-ink)]/20 px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[var(--fs-ink)] transition-colors hover:border-[var(--fs-ink)]/40"
            >
              See how it&rsquo;s gathered
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative border border-[var(--fs-line)] bg-[var(--fs-card)] p-8">
            <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-[var(--fs-moss)]/40" />
            <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-[var(--fs-moss)]/40" />
            <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-[var(--fs-moss)]/40" />
            <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-[var(--fs-moss)]/40" />
            <SpecimenDahlia className="mx-auto h-64 w-auto text-[var(--fs-ink)]" />
            <div className="mt-6 flex items-baseline justify-between border-t border-dashed border-[var(--fs-line)] pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fs-moss)]">
              <span>No. 00 — Field Sample</span>
              <span>Dahlia pinnata</span>
            </div>
          </div>
        </div>
      </section>

      {/* This week's bloom */}
      <section id="this-week" className="scroll-mt-20 border-y border-[var(--fs-line)] bg-[var(--fs-card)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fs-moss)]">
            In season this week
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {inSeason.map((bloom, i) => (
              <li
                key={bloom}
                className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.1em] text-[var(--fs-ink)]"
              >
                {bloom}
                {i < inSeason.length - 1 && (
                  <span className="text-[var(--fs-gold)]" aria-hidden>
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specimen index */}
      <section id="index" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--fs-berry)]">
            The specimen index
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
            Six bundles, catalogued this week.
          </h2>
          <p className="mt-4 text-[var(--fs-moss)]">
            Everything below is limited to what was actually cut this week —
            once a harvest window closes, that specimen is retired until
            it&rsquo;s back in season.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-[var(--fs-line)] bg-[var(--fs-line)] sm:grid-cols-2 lg:grid-cols-3">
          {specimens.map(({ no, name, latin, desc, harvest, price, Art }) => (
            <article
              key={no}
              className="flex flex-col bg-[var(--fs-card)] p-6"
            >
              <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fs-moss)]">
                <span>No. {no}</span>
                <span>{harvest}</span>
              </div>
              <Art className="mx-auto my-6 h-32 w-auto text-[var(--fs-ink)]" />
              <h3 className="font-display text-xl">{name}</h3>
              <p className="mt-1 font-display italic text-sm text-[var(--fs-moss)]">
                {latin}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fs-ink)]/80">
                {desc}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-[var(--fs-line)] pt-4">
                <span className="font-mono text-sm text-[var(--fs-ink)]">
                  {price}
                </span>
                <button
                  type="button"
                  className="cursor-pointer rounded-full border border-[var(--fs-ink)]/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors hover:border-[var(--fs-berry)] hover:text-[var(--fs-berry)]"
                >
                  Reserve
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20 border-t border-[var(--fs-line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--fs-berry)]">
            How it&rsquo;s gathered
          </p>
          <h2 className="font-display mt-4 max-w-lg text-3xl tracking-tight sm:text-4xl">
            Three steps, same as every morning.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.no}>
                <span className="font-display text-4xl text-[var(--fs-gold)]">
                  {step.no}
                </span>
                <h3 className="font-display mt-3 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fs-moss)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press quote */}
      <section className="border-t border-[var(--fs-line)] bg-[var(--fs-card)]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Sprig className="mx-auto h-6 w-40 text-[var(--fs-moss)]/60" />
          <blockquote className="font-display mt-8 text-2xl italic leading-snug tracking-tight sm:text-3xl">
            &ldquo;The only flower order I&rsquo;ve gotten that still had dirt
            on the stems — in the best way.&rdquo;
          </blockquote>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-[var(--fs-moss)]">
            Río Fields, Kestrel Weekly
          </p>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="bg-[var(--fs-ink)] text-[var(--fs-paper)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--fs-gold)]">
              A standing order
            </p>
            <h2 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
              Get whatever&rsquo;s in season, every week.
            </h2>
            <p className="mt-4 text-[var(--fs-paper)]/70">
              The weekly subscription skips the index entirely — we send
              whichever specimen is at its best, no picking required.
            </p>
          </div>
          <SubscribeForm />
        </div>
      </section>

      {/* Footer / Visit */}
      <footer id="visit" className="scroll-mt-20 border-t border-[var(--fs-line)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-display text-xl">
              Bloom <span className="text-[var(--fs-berry)]">&amp;</span>{" "}
              Bramble
            </p>
            <p className="mt-3 text-sm text-[var(--fs-moss)]">
              A small-batch flower studio. Cut, gathered, and tied to order.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fs-moss)]">
              Visit
            </p>
            <address className="mt-3 space-y-1 text-sm not-italic text-[var(--fs-ink)]/80">
              <p>214 Hollow Lane</p>
              <p>Riverside District</p>
              <p>Tue–Sat, 8am–4pm</p>
            </address>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fs-moss)]">
              Shop
            </p>
            <ul className="mt-3 space-y-1 text-sm text-[var(--fs-ink)]/80">
              <li>
                <a href="#index" className="transition-colors hover:text-[var(--fs-berry)]">
                  This week&rsquo;s index
                </a>
              </li>
              <li>
                <a href="#process" className="transition-colors hover:text-[var(--fs-berry)]">
                  Our process
                </a>
              </li>
              <li>
                <a href="#this-week" className="transition-colors hover:text-[var(--fs-berry)]">
                  What&rsquo;s in season
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fs-moss)]">
              Follow
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--fs-line)] transition-colors hover:border-[var(--fs-berry)] hover:text-[var(--fs-berry)]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--fs-line)] transition-colors hover:border-[var(--fs-berry)] hover:text-[var(--fs-berry)]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M8 20 L11 8" />
                  <path d="M9.5 13.5 C 9 10 11.5 8 14 8.5 C 17 9 17.5 13.5 15.5 15.5 C 14 17 11.5 16 11.5 13.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--fs-line)] px-6 py-6">
          <p className="mx-auto max-w-6xl text-center font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fs-moss)]">
            © {year}
            {" "}
            Bloom &amp; Bramble — a dummy concept site, not a real shop
          </p>
        </div>
      </footer>
    </div>
  );
}
