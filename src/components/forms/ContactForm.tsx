"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { InputField, SelectField, TextAreaField } from "@/components/forms/FormField";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "contact", ...payload })
    });

    setStatus(response.ok ? "success" : "error");
  }

  return (
    <form onSubmit={onSubmit} className="luxury-card grid gap-5 rounded-[2rem] p-6 md:grid-cols-2 md:p-8">
      <InputField name="name" placeholder="Full name" required />
      <InputField name="email" type="email" placeholder="Email address" required />
      <InputField name="phone" placeholder="Phone number" />
      <SelectField name="topic" defaultValue="inventory">
        <option value="inventory">Inventory question</option>
        <option value="appointment">Book appointment</option>
        <option value="sell-trade">Sell / trade</option>
        <option value="source">Source a watch</option>
      </SelectField>
      <div className="md:col-span-2">
        <TextAreaField name="message" placeholder="How can Pure Timepieces help?" required />
      </div>
      <div className="md:col-span-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send message"}</Button>
        {status === "success" && <p className="text-sm text-champagne">Message received. The backend stub is working.</p>}
        {status === "error" && <p className="text-sm text-red-300">Something went wrong. Check required fields.</p>}
      </div>
    </form>
  );
}
