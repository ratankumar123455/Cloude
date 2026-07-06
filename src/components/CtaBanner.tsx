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
    <section className="hairline-t py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="surface flex flex-col items-center gap-6 rounded-sm p-10 text-center sm:p-14">
          <p className="font-display text-3xl text-paper sm:text-4xl">
            {title}
          </p>
          <p className="max-w-xl text-muted">{description}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-full border border-[var(--line)] px-7 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
