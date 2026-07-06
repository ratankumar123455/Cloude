const products = [
  {
    title: "Text to Image",
    description:
      "Describe a scene in plain language and get high-resolution, production-ready images in seconds. Fine-tune style, composition, and lighting with simple prompts.",
    points: [
      "Photorealistic and stylized rendering",
      "Custom aspect ratios for social, print, and web",
      "Batch generation for rapid iteration",
    ],
  },
  {
    title: "Text to Video",
    description:
      "Turn a script or a single sentence into short-form video clips. Sutertai handles scene continuity, motion, and pacing so you can focus on the story.",
    points: [
      "Multi-shot scene generation from a single prompt",
      "Consistent characters and style across frames",
      "Export-ready formats for reels, ads, and product demos",
    ],
  },
];

const features = [
  {
    title: "Built for speed",
    description:
      "Generate images and video clips in seconds, not hours, so your team can iterate faster and ship more creative work.",
  },
  {
    title: "Fine-grained control",
    description:
      "Guide style, composition, and tone with prompts and reference inputs, without needing a design or animation background.",
  },
  {
    title: "API-first",
    description:
      "Integrate Sutertai's generation engine directly into your product, app, or content pipeline with a simple API.",
  },
  {
    title: "Made for teams",
    description:
      "Share projects, reuse styles, and keep every generated asset organized in one workspace.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(167,139,250,0.18),_transparent_60%)]" />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-20 text-center">
          <span className="glow-border rounded-full px-4 py-1 text-xs uppercase tracking-widest text-violet-300">
            Generative AI, from words to visuals
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Turn text into
            <span className="gradient-text"> images and video</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Sutertai Private Limited builds generative AI products that turn
            a simple prompt into ready-to-use images and videos — for
            creators, marketers, and product teams.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Explore products
            </a>
            <a
              href="#contact"
              className="glow-border rounded-full px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-300">
              Our products
            </h2>
            <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Two engines, one goal: turn your words into visuals.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.title}
                className="glow-border rounded-2xl bg-white/[0.03] p-8"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {product.title}
                </h3>
                <p className="mt-4 text-zinc-400">{product.description}</p>
                <ul className="mt-6 space-y-2">
                  {product.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-sky-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-300">
              Why Sutertai
            </h2>
            <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Generative AI that fits into how you already work.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-300">
              About us
            </h2>
            <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Sutertai Private Limited
            </p>
          </div>
          <div className="text-zinc-400">
            <p>
              Sutertai is a generative AI company focused on making visual
              creation effortless. Our text-to-image and text-to-video
              models help creators, marketers, and businesses generate
              high-quality visuals directly from written descriptions —
              cutting down the time and cost of traditional content
              production.
            </p>
            <p className="mt-4">
              We are based in Prayagraj, Uttar Pradesh, India, and are
              building for creators and teams everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glow-border rounded-2xl bg-white/[0.03] p-10 sm:p-14">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-300">
                  Get in touch
                </h2>
                <p className="mt-3 text-3xl font-semibold text-white">
                  Let&apos;s build something visual.
                </p>
                <p className="mt-4 text-zinc-400">
                  Have a project in mind, or want to try Sutertai for your
                  team? Reach out and we&apos;ll get back to you.
                </p>
              </div>
              <div className="space-y-4 text-zinc-300">
                <div>
                  <p className="text-sm uppercase tracking-wide text-zinc-500">
                    Contact person
                  </p>
                  <p className="mt-1 text-lg text-white">Ramesh Sharma</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-zinc-500">
                    Phone
                  </p>
                  <a
                    href="tel:+917459887412"
                    className="mt-1 block text-lg text-white hover:text-violet-300"
                  >
                    +91 74598 87412
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-zinc-500">
                    Address
                  </p>
                  <p className="mt-1 text-lg text-white">
                    174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj,
                    <br />
                    Prayagraj, Uttar Pradesh 211002, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
