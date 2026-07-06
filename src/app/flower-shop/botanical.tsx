type SpecimenProps = {
  className?: string;
};

/** Hand-drawn-style line art, single stroke weight, currentColor. */

export function SpecimenDahlia({ className }: SpecimenProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M60 78 L60 132" />
      <path d="M60 100 C 48 100 40 108 34 118" />
      <path d="M60 108 C 72 110 80 118 84 126" />
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const x = 60 + Math.cos(angle) * 26;
        const y = 62 + Math.sin(angle) * 26;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="9"
            ry="15"
            transform={`rotate(${(angle * 180) / Math.PI + 90} ${x} ${y})`}
          />
        );
      })}
      <circle cx="60" cy="62" r="9" />
    </svg>
  );
}

export function SpecimenZinnia({ className }: SpecimenProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M60 82 L58 132" />
      <path d="M58 118 C 46 116 38 122 32 130" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x1 = 60 + Math.cos(angle) * 14;
        const y1 = 58 + Math.sin(angle) * 14;
        const x2 = 60 + Math.cos(angle) * 30;
        const y2 = 58 + Math.sin(angle) * 30;
        return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} />;
      })}
      <circle cx="60" cy="58" r="14" />
    </svg>
  );
}

export function SpecimenSweetPea({ className }: SpecimenProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M60 40 C 56 76 58 104 60 132" />
      <path d="M60 60 C 44 56 40 46 42 34" />
      <path d="M60 78 C 76 74 82 62 80 50" />
      <path d="M60 98 C 44 96 38 86 40 76" />
      <ellipse cx="46" cy="36" rx="10" ry="14" transform="rotate(-30 46 36)" />
      <ellipse cx="76" cy="54" rx="10" ry="14" transform="rotate(20 76 54)" />
      <ellipse cx="44" cy="78" rx="9" ry="13" transform="rotate(-25 44 78)" />
    </svg>
  );
}

export function SpecimenCosmos({ className }: SpecimenProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M60 80 L60 132" />
      <path d="M60 112 C 70 110 78 102 82 92" />
      <path d="M60 100 C 50 100 42 94 38 86" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = 60 + Math.cos(angle) * 24;
        const y = 58 + Math.sin(angle) * 24;
        return (
          <path
            key={i}
            d={`M60 58 Q ${60 + Math.cos(angle) * 14} ${
              58 + Math.sin(angle) * 14
            } ${x} ${y}`}
          />
        );
      })}
      <circle cx="60" cy="58" r="7" />
    </svg>
  );
}

export function SpecimenHydrangea({ className }: SpecimenProps) {
  const florets = Array.from({ length: 14 }).map((_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const r = 14 + (i % 3) * 5;
    return {
      x: 60 + Math.cos(angle) * r,
      y: 54 + Math.sin(angle) * r * 0.85,
    };
  });
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M60 84 L60 132" />
      <path d="M60 110 C 48 110 40 118 36 128" />
      {florets.map((f, i) => (
        <g key={i}>
          <path d={`M${f.x - 4} ${f.y} L${f.x + 4} ${f.y}`} />
          <path d={`M${f.x} ${f.y - 4} L${f.x} ${f.y + 4}`} />
        </g>
      ))}
    </svg>
  );
}

export function SpecimenSnapdragon({ className }: SpecimenProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M60 36 C 58 72 60 102 60 132" />
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 42 + i * 10;
        const side = i % 2 === 0 ? -1 : 1;
        return (
          <ellipse
            key={i}
            cx={60 + side * 8}
            cy={y}
            rx="7"
            ry="5"
            transform={`rotate(${side * 30} ${60 + side * 8} ${y})`}
          />
        );
      })}
    </svg>
  );
}

/** Simple foliage sprig used as a divider / corner ornament. */
export function Sprig({ className }: SpecimenProps) {
  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M0 20 C 60 4 140 4 200 20" />
      {Array.from({ length: 7 }).map((_, i) => {
        const x = 16 + i * 26;
        const up = i % 2 === 0;
        return (
          <path
            key={i}
            d={`M${x} 20 Q ${x + 6} ${up ? 6 : 34} ${x + 14} ${up ? 12 : 28}`}
          />
        );
      })}
    </svg>
  );
}
