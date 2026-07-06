"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const items = [
  {
    name: "Diffusion rendering",
    detail:
      "A diffusion-based generative model builds each output progressively, refining a noisy starting point into a coherent frame.",
    specs: [
      { k: "Latency", v: "4.2s median" },
      { k: "Resolution", v: "up to 8K" },
    ],
  },
  {
    name: "Temporal consistency",
    detail:
      "For video, the engine keeps characters, style, and motion consistent across frames instead of generating each one independently.",
    specs: [
      { k: "Frame rate", v: "up to 60fps" },
      { k: "Max length", v: "3 min / clip" },
    ],
  },
  {
    name: "Prompt understanding",
    detail:
      "Subject, style, composition, and mood are parsed before a single pixel renders, so structure is set before generation starts.",
    specs: [
      { k: "Languages", v: "12 supported" },
      { k: "Context", v: "500 tokens" },
    ],
  },
  {
    name: "GPU-accelerated inference",
    detail:
      "Generation runs on infrastructure built for low-latency inference, scaling from a single request to batch workloads on the same path.",
    specs: [
      { k: "Uptime", v: "99.9%" },
      { k: "Regions", v: "4 active" },
    ],
  },
  {
    name: "Content safety filtering",
    detail:
      "Automated filtering runs on both prompts and outputs to reduce harmful or disallowed content before it ever reaches a user.",
    specs: [
      { k: "Coverage", v: "prompt + output" },
      { k: "Review", v: "continuous" },
    ],
  },
];

export default function TechPanel() {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Technology" title="Advanced AI, explained plainly" />
        <Reveal className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] lg:grid-cols-[280px_1fr]">
          <div className="bg-[var(--ink)] p-2">
            {items.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className={`block w-full rounded-lg px-4 py-3.5 text-left text-sm transition-colors ${
                  active === i
                    ? "bg-[var(--surface)] text-paper"
                    : "text-muted hover:bg-[var(--surface)]/60 hover:text-paper"
                }`}
              >
                <span className="mono-label mr-2 text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.name}
              </button>
            ))}
          </div>
          <div className="bg-[var(--ink)] p-8 sm:p-10">
            <h3 className="font-display text-2xl text-paper">{current.name}</h3>
            <p className="mt-4 max-w-lg text-sm text-muted">{current.detail}</p>
            <div className="mt-8 flex gap-8 border-t border-[var(--line)] pt-6">
              {current.specs.map((spec) => (
                <div key={spec.k}>
                  <p className="mono-label text-[9px] text-muted-2">{spec.k}</p>
                  <p className="font-display mt-1 text-lg text-generated">{spec.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
