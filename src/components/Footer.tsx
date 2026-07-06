import Link from "next/link";

const siteLinks = [
  { href: "/how-we-work", label: "How We Work" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/generate", label: "Try the Generator" },
];

export default function Footer() {
  return (
    <footer className="hairline-t bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 text-sm text-muted sm:grid-cols-3">
        <div>
          <p className="font-display text-lg text-paper">
            Suter<span className="text-generated font-semibold">tai</span>{" "}
            Private Limited
          </p>
          <p className="mt-3 max-w-xs">
            A generative AI company building text-to-image and text-to-video
            products for creators and businesses.
          </p>
        </div>

        <div>
          <p className="mono-label text-[11px] text-paper">Site</p>
          <ul className="mt-4 space-y-2">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-label text-[11px] text-paper">Contact</p>
          <p className="mt-4">Ramesh Sharma</p>
          <p>
            <a href="tel:+917459887412" className="hover:text-paper">
              +91 74598 87412
            </a>
          </p>
          <p className="mt-2 max-w-xs">
            174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj,
            Uttar Pradesh 211002, India
          </p>
        </div>
      </div>
      <div className="hairline-t py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Sutertai Private Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
