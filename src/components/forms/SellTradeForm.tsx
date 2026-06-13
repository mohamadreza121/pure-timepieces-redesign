"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { InputField, SelectField, TextAreaField } from "@/components/forms/FormField";

export function SellTradeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "sell-trade", ...payload })
    });

    setStatus(response.ok ? "success" : "error");
  }

  return (
    <form onSubmit={onSubmit} className="luxury-card mx-auto grid max-w-5xl gap-5 rounded-[2rem] p-6 md:grid-cols-2 md:p-8">
      <InputField name="name" placeholder="Full name" required />
      <InputField name="email" type="email" placeholder="Email address" required />
      <InputField name="phone" placeholder="Phone number" />
      <SelectField name="intent" defaultValue="sell">
        <option value="sell">I want to sell</option>
        <option value="trade">I want to trade</option>
        <option value="both">Open to both</option>
      </SelectField>
      <InputField name="brand" placeholder="Brand, e.g. Rolex" required />
      <InputField name="model" placeholder="Model / reference number" required />
      <SelectField name="condition" defaultValue="excellent">
        <option value="new">New / unworn</option>
        <option value="excellent">Excellent</option>
        <option value="good">Good</option>
        <option value="fair">Fair</option>
      </SelectField>
      <SelectField name="includes" defaultValue="box-papers">
        <option value="box-papers">Box & papers</option>
        <option value="box-only">Box only</option>
        <option value="papers-only">Papers only</option>
        <option value="watch-only">Watch only</option>
      </SelectField>
      <div className="md:col-span-2">
        <TextAreaField name="message" placeholder="Tell us about the watch, condition, purchase history, and what you want to trade toward." />
      </div>
      <div className="md:col-span-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Submit watch details"}</Button>
        {status === "success" && <p className="text-sm text-champagne">Request received. The backend stub is working.</p>}
        {status === "error" && <p className="text-sm text-red-300">Something went wrong. Check required fields.</p>}
      </div>
    </form>
  );
}
