"use client";

import { useState } from "react";

const EXAMPLE_PROMPTS = [
  "A neon-lit cyberpunk street market at night, rain reflections, cinematic",
  "Minimalist product photo of a ceramic coffee cup on a marble table, soft light",
  "A futuristic city skyline at sunrise, ultra-detailed digital art",
];

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setImageUrl(data.imageUrl);
      }
    } catch {
      setError("Couldn't reach the generation service. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glow-border rounded-2xl bg-white/[0.03] p-6 sm:p-10">
      <form onSubmit={handleGenerate} className="flex flex-col gap-4">
        <label htmlFor="prompt" className="text-sm font-medium text-zinc-300">
          Describe the image you want
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={3}
          maxLength={500}
          placeholder="e.g. A cozy reading nook by a rainy window, warm light, illustration style"
          className="w-full resize-none rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-white placeholder:text-zinc-500 focus:border-violet-400 focus:outline-none"
        />

        <div className="flex flex-wrap gap-2">
          {EXAMPLE_PROMPTS.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => setPrompt(example)}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-violet-400 hover:text-white"
            >
              {example}
            </button>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:self-start"
        >
          {loading ? "Generating…" : "Generate image"}
        </button>
      </form>

      <div className="mt-8 flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-white/10 bg-black/30 p-4">
        {loading && (
          <p className="text-sm text-zinc-400">
            Rendering your image, this usually takes a few seconds…
          </p>
        )}
        {!loading && error && (
          <p className="max-w-sm text-center text-sm text-rose-400">{error}</p>
        )}
        {!loading && !error && imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={prompt}
            className="max-h-[420px] w-auto rounded-lg"
          />
        )}
        {!loading && !error && !imageUrl && (
          <p className="text-sm text-zinc-500">
            Your generated image will appear here.
          </p>
        )}
      </div>
    </div>
  );
}
