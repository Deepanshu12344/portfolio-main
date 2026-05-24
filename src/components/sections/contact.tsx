"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    });
    setLoading(false);
    setMessage(res.ok ? "Message sent successfully." : "Something went wrong.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24">
      <h3 className="text-3xl font-bold text-slate-100">Contact</h3>
      <p className="mt-2 text-slate-300">Email: deepanshu@example.com | Pune, India</p>
      <form onSubmit={onSubmit} className="mt-8 grid gap-3 md:max-w-xl">
        <input required name="name" placeholder="Your name" className="rounded-xl border border-slate-700 bg-slate-900/60 p-3 text-slate-100 outline-none focus:border-cyan-300" />
        <input required type="email" name="email" placeholder="Email address" className="rounded-xl border border-slate-700 bg-slate-900/60 p-3 text-slate-100 outline-none focus:border-cyan-300" />
        <textarea required name="message" rows={5} placeholder="Message" className="rounded-xl border border-slate-700 bg-slate-900/60 p-3 text-slate-100 outline-none focus:border-cyan-300" />
        <Button type="submit" className="w-fit">{loading ? "Sending..." : "Send Message"}</Button>
        {message && <p className="text-sm text-slate-300">{message}</p>}
      </form>
      <div className="mt-8 flex gap-4 text-slate-300">
        <a href="https://github.com/Deepanshu12344" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/deepanshu-sharma-164057250/" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
}

