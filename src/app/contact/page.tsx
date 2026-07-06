import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sutertai Private Limited.",
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj, Uttar Pradesh 211002, India",
  );

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="text-generated">talk</span>
          </>
        }
        description="Have a project in mind, a question about Sutertai, or want to try our products for your team? Reach out below."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal className="surface rounded-2xl p-8 sm:p-10">
              <h2 className="font-display text-xl text-paper">Send a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={100} className="hairline-t">
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
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
