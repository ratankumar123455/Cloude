import Link from "next/link";

const columns = [
  {
    heading: "Products",
    links: [
      { href: "/technology#text-to-image", label: "Text to Image" },
      { href: "/technology#text-to-video", label: "Text to Video" },
      { href: "/technology#ai-studio", label: "AI Studio" },
      { href: "/generate", label: "Try the Generator" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-we-work", label: "How We Work" },
      { href: "/team", label: "Team" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/technology", label: "Documentation" },
      { href: "/pricing#faq", label: "FAQ" },
      { href: "/contact", label: "Support" },
      { href: "/contact", label: "API Access" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const socials = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="hairline-t bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg text-paper">
              Suter<span className="text-generated font-semibold">tai</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Build intelligence. Create anything. Generative AI systems for
              image and video, engineered in Prayagraj, India.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="mono-label text-[10px] text-muted transition-colors hover:text-paper"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <p className="mono-label text-[11px] text-paper">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-paper">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mono-label text-[11px] text-paper">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <p>Sutertai Private Limited</p>
              <p>
                <a href="tel:+917459887412" className="hover:text-paper">
                  +91 74598 87412
                </a>
              </p>
              <p>
                <a href="mailto:hello@sutertai.com" className="hover:text-paper">
                  hello@sutertai.com
                </a>
              </p>
              <p className="max-w-[16rem]">
                174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj,
                Uttar Pradesh 211002, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hairline-t py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Sutertai Private Limited. All rights reserved.</p>
          <p>CIN pending · Prayagraj, Uttar Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
