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
        <p className="mono-label text-[11px] text-accent">Contact</p>
        <h1 className="font-display mt-6 text-4xl text-paper sm:text-5xl">
          Let&apos;s <span className="text-generated">talk</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Have a project in mind, a question about Sutertai, or want to try
          our products for your team? Reach out below.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="surface rounded-sm p-8 sm:p-10">
          <h2 className="font-display text-xl text-paper">Send a message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="hairline-t">
          <div className="hairline-b py-6">
            <p className="mono-label text-[11px] text-muted">Contact person</p>
            <p className="mt-2 text-lg text-paper">Ramesh Sharma</p>
          </div>
          <div className="hairline-b py-6">
            <p className="mono-label text-[11px] text-muted">Phone</p>
            <a
              href="tel:+917459887412"
              className="mt-2 block text-lg text-paper hover:text-accent"
            >
              +91 74598 87412
            </a>
          </div>
          <div className="hairline-b py-6">
            <p className="mono-label text-[11px] text-muted">Address</p>
            <p className="mt-2 text-lg text-paper">
              174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj,
              <br />
              Prayagraj, Uttar Pradesh 211002, India
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
