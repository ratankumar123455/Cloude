import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Sutertai",
  description: "Get in touch with Sutertai Private Limited.",
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj, Uttar Pradesh 211002, India",
  );

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 text-center">
        <span className="glow-border rounded-full px-4 py-1 text-xs uppercase tracking-widest text-violet-300">
          Contact
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
          Let&apos;s <span className="gradient-text">talk</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Have a project in mind, a question about Sutertai, or want to try
          our products for your team? Reach out below.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="glow-border rounded-2xl bg-white/[0.03] p-8 sm:p-10">
          <h2 className="text-xl font-semibold text-white">Send a message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-wide text-zinc-500">
              Contact person
            </p>
            <p className="mt-2 text-lg text-white">Ramesh Sharma</p>
          </div>
          <div className="rounded-2xl bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-wide text-zinc-500">Phone</p>
            <a
              href="tel:+917459887412"
              className="mt-2 block text-lg text-white hover:text-violet-300"
            >
              +91 74598 87412
            </a>
          </div>
          <div className="rounded-2xl bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-wide text-zinc-500">Address</p>
            <p className="mt-2 text-lg text-white">
              174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj,
              <br />
              Prayagraj, Uttar Pradesh 211002, India
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-violet-300 hover:underline"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
