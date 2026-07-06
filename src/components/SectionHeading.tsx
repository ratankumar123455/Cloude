export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-14 max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="mono-label text-[11px] text-accent">{eyebrow}</p>
      <p className="font-display mt-3 text-3xl text-paper sm:text-4xl">
        {title}
      </p>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </div>
  );
}
