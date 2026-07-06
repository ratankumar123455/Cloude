"use client";

import { useState, type FormEvent } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--fs-gold)]">
        You&rsquo;re on the list — first bundle ships Monday.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="fs-email" className="sr-only">
        Email address
      </label>
      <input
        id="fs-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@somewhere.com"
        className="w-full rounded-full border border-[var(--fs-paper)]/30 bg-transparent px-5 py-3 text-sm text-[var(--fs-paper)] placeholder:text-[var(--fs-paper)]/50 focus:border-[var(--fs-gold)] focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-[var(--fs-gold)] px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fs-ink)] transition-opacity hover:opacity-90 cursor-pointer"
      >
        Join the subscription
      </button>
    </form>
  );
}
