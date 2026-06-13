"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { InputField, SelectField, TextAreaField } from "@/components/forms/FormField";

export function DreamWatchForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "dream-watch", ...payload })
    });

    setStatus(response.ok ? "success" : "error");
  }

  return (
    <form onSubmit={onSubmit} className="luxury-card mx-auto grid max-w-5xl gap-5 rounded-[2rem] p-6 md:grid-cols-2 md:p-8">
      <InputField name="name" placeholder="Full name" required />
      <InputField name="email" type="email" placeholder="Email address" required />
      <InputField name="phone" placeholder="Phone number" />
      <InputField name="brand" placeholder="Desired brand" required />
      <InputField name="model" placeholder="Model / reference" required />
      <InputField name="budget" placeholder="Budget range, e.g. $15k - $25k CAD" />
      <SelectField name="timeline" defaultValue="flexible">
        <option value="urgent">As soon as possible</option>
        <option value="30-days">Within 30 days</option>
        <option value="90-days">Within 90 days</option>
        <option value="flexible">Flexible timeline</option>
      </SelectField>
      <SelectField name="boxPapers" defaultValue="preferred">
        <option value="required">Box & papers required</option>
        <option value="preferred">Box & papers preferred</option>
        <option value="not-required">Not required</option>
      </SelectField>
      <div className="md:col-span-2">
        <TextAreaField name="message" placeholder="Dial color, year, condition, accessories, or anything specific you want." />
      </div>
      <div className="md:col-span-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Submit sourcing request"}</Button>
        {status === "success" && <p className="text-sm text-champagne">Request received. The backend stub is working.</p>}
        {status === "error" && <p className="text-sm text-red-300">Something went wrong. Check required fields.</p>}
      </div>
    </form>
  );
}
