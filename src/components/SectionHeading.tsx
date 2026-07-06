import Reveal from "./Reveal";

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
    <Reveal
      className={`mb-14 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <span className={`eyebrow-chip ${align === "center" ? "mx-auto" : ""}`}>
        <span className="dot">/</span>
        <span>{eyebrow}</span>
      </span>
      <p className="font-display mt-5 text-5xl font-medium text-paper sm:text-6xl">
        {title}
      </p>
      {description && (
        <p className="mt-5 text-lg text-muted sm:text-xl">{description}</p>
      )}
    </Reveal>
  );
}
