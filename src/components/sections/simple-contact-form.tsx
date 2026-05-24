"use client";

import { useState } from "react";

export function SimpleContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.currentTarget);
    const body = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setLoading(false);
    if (res.ok) {
      setStatus("Message sent.");
      e.currentTarget.reset();
    } else {
      setStatus("Failed to send.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-200">Name</label>
        <input
          name="name"
          required
          placeholder="Jane Smith"
          className="w-full rounded-sm border border-zinc-900 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 outline-none placeholder:text-zinc-600"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-200">Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="jane@framer.com"
          className="w-full rounded-sm border border-zinc-900 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 outline-none placeholder:text-zinc-600"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-200">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Send a message"
          className="w-full rounded-sm border border-zinc-900 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 outline-none placeholder:text-zinc-600"
        />
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" className="rounded-sm bg-zinc-200 px-5 py-2 text-xs font-medium text-black">
          {loading ? "Sending..." : "Submit"}
        </button>
        {status ? <p className="text-sm text-zinc-400">{status}</p> : null}
      </div>
    </form>
  );
}

