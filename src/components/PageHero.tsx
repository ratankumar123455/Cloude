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
    <section className="hairline-b py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mono-label text-[11px] text-accent">{eyebrow}</p>
        <h1 className="font-display mt-6 text-4xl text-paper sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg text-muted">{description}</p>
      </div>
    </section>
  );
}
