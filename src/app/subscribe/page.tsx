"use client";
import { useState } from "react";
const API = process.env.NEXT_PUBLIC_API_BASE || "";

export default function SubscribePage() {
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (new FormData(e.currentTarget).get("email") || "").toString();
    try {
      const res = await fetch(`${API}/api/subscribe`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source: "subscribe_page" }),
      });
      const json = await res.json();
      setMsg(json.ok ? "Thanks! You're on the list." : json.error || "Error.");
      if (json.ok) (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setMsg("Network error.");
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-bold">Join the Circle</h2>
        <p className="mt-1 text-sm text-slate-400">Get updates & be first when the browser build unlocks.</p>
        <form onSubmit={onSubmit} className="mt-6 grid gap-3 md:grid-cols-[1fr_auto]">
          <input required type="email" name="email" placeholder="you@domain.com"
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"/>
          <input type="text" name="nickname" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="ts" value={Date.now()} />
          <button className="rounded-xl bg-orange-500 px-5 py-3 font-semibold hover:bg-orange-400 transition">Subscribe</button>
        </form>
        {msg && <div className="mt-3 text-sm text-emerald-400">{msg}</div>}
        <div className="mt-3 text-xs text-slate-500">We only use your email for project updates. Unsubscribe anytime.</div>
      </div>
    </section>
  );
}
