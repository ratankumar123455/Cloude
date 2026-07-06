import Link from "next/link";

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#features", label: "Why Sutertai" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05050a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Suter<span className="gradient-text">tai</span>
        </Link>
        <nav className="hidden gap-8 text-sm text-zinc-300 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
