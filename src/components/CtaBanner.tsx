import Link from "next/link";

export default function CtaBanner({
  title = "Ready to turn your words into visuals?",
  description = "Try the live generator or talk to our team about integrating Sutertai into your workflow.",
  primaryHref = "/generate",
  primaryLabel = "Try the generator",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to us",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glow-border flex flex-col items-center gap-6 rounded-2xl bg-white/[0.03] p-10 text-center sm:p-14">
          <p className="text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </p>
          <p className="max-w-xl text-zinc-400">{description}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="glow-border rounded-full px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
