export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-zinc-400 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">
            Suter<span className="gradient-text">tai</span> Private Limited
          </p>
          <p className="mt-2 max-w-xs">
            Generative AI for text-to-image and text-to-video creation.
          </p>
        </div>
        <div>
          <p className="font-medium text-zinc-200">Contact</p>
          <p className="mt-2">Ramesh Sharma</p>
          <p>
            <a href="tel:+917459887412" className="hover:text-white">
              +91 74598 87412
            </a>
          </p>
          <p className="mt-2 max-w-xs">
            174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj,
            Uttar Pradesh 211002, India
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Sutertai Private Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
