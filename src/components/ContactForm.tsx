"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "917459887412";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi Sutertai, my name is ${name || "—"}.\n\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-zinc-300">
          Your name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 p-3 text-sm text-white placeholder:text-zinc-500 focus:border-violet-400 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
          placeholder="Tell us about your project or question"
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 p-3 text-sm text-white placeholder:text-zinc-500 focus:border-violet-400 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 sm:self-start"
      >
        Send via WhatsApp
      </button>
      <p className="text-xs text-zinc-500">
        This opens WhatsApp with your message pre-filled to +91 74598 87412.
      </p>
    </form>
  );
}
