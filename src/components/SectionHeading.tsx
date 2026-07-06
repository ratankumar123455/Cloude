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
      className={`mb-14 max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <span className={`eyebrow-chip ${align === "center" ? "mx-auto" : ""}`}>
        <span className="dot">/</span>
        <span>{eyebrow}</span>
      </span>
      <p className="font-display mt-5 text-4xl font-medium text-paper sm:text-5xl">
        {title}
      </p>
      {description && (
        <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
