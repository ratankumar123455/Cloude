"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MagneticLink from "./MagneticLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Products" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="hairline-b sticky top-0 z-50 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-paper"
          onClick={() => setOpen(false)}
        >
          Suter<span className="text-generated font-semibold">tai</span>
        </Link>

        <nav className="mono-label hidden gap-6 text-[11px] text-muted xl:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b pb-1 transition-colors hover:text-paper ${
                  active ? "border-indigo text-paper" : "border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <MagneticLink href="/generate" variant="primary" className="!px-5 !py-2 !text-xs">
            Start creating
          </MagneticLink>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="mono-label flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-paper xl:hidden"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <nav className="hairline-t flex flex-col gap-1 bg-ink px-6 py-4 xl:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`mono-label rounded-lg px-3 py-2 text-xs transition-colors hover:bg-white/5 hover:text-paper ${
                pathname === item.href ? "text-paper" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/generate"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold"
          >
            Start creating
          </Link>
        </nav>
      )}
    </header>
  );
}
