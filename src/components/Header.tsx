"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MagneticLink from "./MagneticLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const megaMenuProducts = [
  { name: "Text to Image AI", href: "/technology#text-to-image", description: "Prompts to production-ready imagery." },
  { name: "Text to Video AI", href: "/technology#text-to-video", description: "Cinematic video from a written script." },
  { name: "AI Image Editing", href: "/technology", description: "Inpainting, outpainting, background removal." },
  { name: "AI Video Editing", href: "/technology", description: "Trim, extend, and restyle generated clips." },
  { name: "AI Upscaler", href: "/technology", description: "Clean 4K–8K output for print and broadcast." },
  { name: "Prompt Studio", href: "/technology#ai-studio", description: "A workspace for prompts, presets, and assets." },
  { name: "AI API Platform", href: "/technology#ai-studio", description: "Every capability, available as an API." },
  { name: "Enterprise AI Solutions", href: "/pricing", description: "Dedicated capacity, SSO, and support." },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              className={`border-b pb-1 transition-colors hover:text-paper ${
                pathname === "/technology" ? "border-indigo text-paper" : "border-transparent"
              }`}
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              Products
            </button>
            {menuOpen && (
              <div className="glass-panel absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-1">
                  {megaMenuProducts.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg p-3 transition-colors hover:bg-white/5"
                    >
                      <p className="text-xs font-semibold normal-case tracking-normal text-paper">
                        {product.name}
                      </p>
                      <p className="mt-1 text-[11px] normal-case tracking-normal text-muted">
                        {product.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
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
            Start Creating
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
          <Link
            href="/technology"
            onClick={() => setOpen(false)}
            className={`mono-label rounded-lg px-3 py-2 text-xs transition-colors hover:bg-white/5 hover:text-paper ${
              pathname === "/technology" ? "text-paper" : "text-muted"
            }`}
          >
            Products
          </Link>
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
            Start Creating
          </Link>
        </nav>
      )}
    </header>
  );
}
