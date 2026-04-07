"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubscribe() {
    if (email.trim()) setDone(true);
  }

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16">
      <div className="bg-[#141414] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Copy */}
        <div className="max-w-md">
          <p className="text-[#C8F0D0] text-xs font-bold tracking-widest uppercase mb-3">
            Newsletter
          </p>
          <h3 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-3">
            Never Miss a Story
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            One curated email per week. Destinations, tips, and hidden gems —
            zero noise.
          </p>
        </div>

        {/* Input / success */}
        {done ? (
          <div className="flex items-center gap-3 text-[#C8F0D0]">
            <span className="w-8 h-8 rounded-full border border-[#C8F0D0] flex items-center justify-center text-sm">
              ✓
            </span>
            <span className="text-sm font-semibold">You&apos;re on the list!</span>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[400px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#C8F0D0]/50 transition-colors"
            />
            <button
              onClick={handleSubscribe}
              className="px-6 py-3.5 bg-[#C8F0D0] hover:bg-green-200 text-[#141414] font-extrabold text-sm rounded-full transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
