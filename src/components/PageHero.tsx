export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="hairline-b section-tint relative py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="eyebrow-chip">
          <span className="dot" aria-hidden="true" />
          <span className="mono-label text-[10px] text-paper">{eyebrow}</span>
        </span>
        <h1 className="font-display mt-6 text-5xl font-medium text-paper sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg text-muted">{description}</p>
      </div>
    </section>
  );
}
