"use client";

import Link from "next/link";
import { useRef } from "react";

export default function MagneticLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onPointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = node.getBoundingClientRect();
    const mx = (event.clientX - rect.left - rect.width / 2) * 0.25;
    const my = (event.clientY - rect.top - rect.height / 2) * 0.35;
    node.style.setProperty("--mx", `${mx}px`);
    node.style.setProperty("--my", `${my}px`);
  };

  const onPointerLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--mx", "0px");
    node.style.setProperty("--my", "0px");
  };

  const base =
    "magnetic inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold";
  const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <Link
      ref={ref}
      href={href}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`${base} ${variantClass} ${className}`}
    >
      {children}
    </Link>
  );
}
