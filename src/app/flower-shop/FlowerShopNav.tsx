"use client";

import { useState } from "react";

const navItems = [
  { href: "#index", label: "Shop" },
  { href: "#this-week", label: "This Week" },
  { href: "#process", label: "Process" },
  { href: "#visit", label: "Visit" },
];

export default function FlowerShopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--fs-line)] bg-[var(--fs-paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl tracking-tight text-[var(--fs-ink)]">
          Bloom <span className="text-[var(--fs-berry)]">&amp;</span> Bramble
        </a>

        <nav className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--fs-moss)] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--fs-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#index"
          className="hidden rounded-full bg-[var(--fs-berry)] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fs-paper)] transition-opacity hover:opacity-90 md:inline-block"
        >
          Order for today
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--fs-line)] text-[var(--fs-ink)] md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M5 5 L19 19 M19 5 L5 19" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--fs-line)] px-6 py-4 font-mono text-xs uppercase tracking-[0.14em] text-[var(--fs-moss)] md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-[var(--fs-ink)]/5 hover:text-[var(--fs-ink)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#index"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[var(--fs-berry)] px-5 py-2.5 text-center text-[var(--fs-paper)]"
          >
            Order for today
          </a>
        </nav>
      )}
    </header>
  );
}
