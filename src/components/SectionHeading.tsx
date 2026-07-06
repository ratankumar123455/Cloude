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
      <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-300">
        {eyebrow}
      </h2>
      <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </p>
      {description && (
        <p className="mt-4 text-zinc-400">{description}</p>
      )}
    </div>
  );
}
