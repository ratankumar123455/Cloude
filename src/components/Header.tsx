"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="hairline-b sticky top-0 z-50 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-paper"
          onClick={() => setOpen(false)}
        >
          Suter<span className="text-generated font-semibold">tai</span>
        </Link>

        <nav className="mono-label hidden gap-7 text-[11px] text-muted lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b pb-1 transition-colors hover:text-paper ${
                  active ? "border-accent text-paper" : "border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/generate"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            Try the generator
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="mono-label flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-paper lg:hidden"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <nav className="hairline-t flex flex-col gap-1 bg-ink px-6 py-4 lg:hidden">
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
            className="mt-2 rounded-full bg-accent px-5 py-2 text-center text-sm font-medium text-ink"
          >
            Try the generator
          </Link>
        </nav>
      )}
    </header>
  );
}
