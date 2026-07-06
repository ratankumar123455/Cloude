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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05050a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Suter<span className="gradient-text">tai</span>
        </Link>

        <nav className="hidden gap-6 text-sm text-zinc-300 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-white ${
                  active ? "text-white" : ""
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
            className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Try the generator
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="glow-border flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#05050a] px-6 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5 hover:text-white ${
                pathname === item.href ? "text-white" : "text-zinc-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/generate"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-5 py-2 text-center text-sm font-medium text-black"
          >
            Try the generator
          </Link>
        </nav>
      )}
    </header>
  );
}
