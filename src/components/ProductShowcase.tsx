"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const products = [
  {
    tag: "Image",
    title: "Text to Image AI",
    description: "Photorealistic images, illustration, and product visuals from a single prompt.",
    features: ["Photorealistic output", "Multiple art styles", "Commercial license", "Batch generation"],
  },
  {
    tag: "Video",
    title: "Text to Video AI",
    description: "Cinematic video generated directly from text, with consistent motion and style.",
    features: ["Motion synthesis", "Camera control", "Voice sync", "4K export"],
  },
  {
    tag: "Edit",
    title: "AI Image & Video Editing",
    description: "Inpainting, outpainting, and background removal — for stills and for motion.",
    features: ["Inpainting & outpainting", "Background removal", "Style transfer", "Frame-accurate edits"],
  },
  {
    tag: "Workspace",
    title: "Prompt Studio",
    description: "A workspace for prompts, brand presets, and generated assets.",
    features: ["Prompt library", "Brand templates", "Asset management", "Team workspaces"],
  },
  {
    tag: "Build",
    title: "AI API Platform",
    description: "Every capability in the product, available as a documented REST API.",
    features: ["REST + SDKs", "Webhooks", "Rate-limit free tiers", "Enterprise SSO"],
  },
];

export default function ProductShowcase() {
  const [open, setOpen] = useState(0);

  return (
    <section id="products" className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Products"
          title="One engine. Every way to create."
          description="Everything Sutertai builds runs on the same core model — tuned for image, for video, and for teams running both at scale."
        />
        <div className="grid gap-3">
          {products.map((product, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={product.title} delay={i * 40}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`card-lift w-full rounded-2xl border p-6 text-left transition-colors sm:p-8 ${
                    isOpen ? "border-[var(--signal)]" : "border-[var(--line)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-baseline gap-4">
                      <span className="mono-label text-[10px] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl text-paper sm:text-2xl">
                        {product.title}
                      </h3>
                    </div>
                    <span
                      className={`font-display text-xl text-accent transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <div className="mt-6 grid gap-6 border-t border-[var(--line)] pt-6 sm:grid-cols-[1fr_1fr]">
                      <p className="max-w-md text-sm text-muted">{product.description}</p>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
