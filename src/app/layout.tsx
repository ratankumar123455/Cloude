import type { Metadata } from "next";
import { Fraunces, Manrope, Space_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = "https://www.sutertai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sutertai — Build Intelligence. Create Anything.",
    template: "%s | Sutertai",
  },
  description:
    "Sutertai builds generative AI systems for image and video creation. Photorealistic text-to-image, cinematic text-to-video, and a single studio to run production at scale.",
  keywords: [
    "Sutertai",
    "generative AI",
    "text to image AI",
    "text to video AI",
    "AI image generator",
    "AI video generator",
    "AI studio",
    "AI for marketing teams",
    "enterprise generative AI",
  ],
  authors: [{ name: "Sutertai Private Limited" }],
  creator: "Sutertai Private Limited",
  openGraph: {
    title: "Sutertai — Build Intelligence. Create Anything.",
    description:
      "Photorealistic text-to-image, cinematic text-to-video, and one studio to run creative production at scale.",
    url: siteUrl,
    siteName: "Sutertai",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutertai — Build Intelligence. Create Anything.",
    description:
      "Photorealistic text-to-image, cinematic text-to-video, and one studio to run creative production at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sutertai Private Limited",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Ramesh Sharma",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    postalCode: "211002",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7459887412",
    contactType: "sales",
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sutertai AI Studio",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <div className="noise-layer" aria-hidden="true" />
        <CursorGlow />
        <ScrollProgress />
        <div className="relative z-10 flex min-h-full flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
