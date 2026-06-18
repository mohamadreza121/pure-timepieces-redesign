"use client";

import { type FormEvent, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full border-0 border-b border-white/[0.14] bg-transparent px-0 pb-4 pt-3 text-lg text-white outline-none transition duration-300 placeholder:text-white/22 focus:border-white/65";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("loading");

    try {
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "contact",
          ...payload
        })
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border-t border-white/[0.11]"
    >
      <div className="grid md:grid-cols-2">
        {/* Name */}
        <label className="group relative border-b border-white/[0.08] py-8 md:border-r md:pr-8">
          <span className="flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/28 transition group-focus-within:text-white/58">
            <span className="text-white/18">01</span>
            Full name
          </span>

          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClassName}
          />
        </label>

        {/* Email */}
        <label className="group relative border-b border-white/[0.08] py-8 md:pl-8">
          <span className="flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/28 transition group-focus-within:text-white/58">
            <span className="text-white/18">02</span>
            Email address
          </span>

          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClassName}
          />
        </label>

        {/* Phone */}
        <label className="group relative border-b border-white/[0.08] py-8 md:border-r md:pr-8">
          <span className="flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/28 transition group-focus-within:text-white/58">
            <span className="text-white/18">03</span>
            Phone number
          </span>

          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 000 000 0000"
            className={inputClassName}
          />
        </label>

        {/* Topic */}
        <label className="group relative border-b border-white/[0.08] py-8 md:pl-8">
          <span className="flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/28 transition group-focus-within:text-white/58">
            <span className="text-white/18">04</span>
            Nature of inquiry
          </span>

          <div className="relative">
            <select
              name="topic"
              defaultValue="inventory"
              className={`${inputClassName} cursor-pointer appearance-none pr-10`}
            >
              <option
                value="inventory"
                className="bg-[#080808] text-white"
              >
                Inventory question
              </option>

              <option
                value="appointment"
                className="bg-[#080808] text-white"
              >
                Arrange a private appointment
              </option>

              <option
                value="sell-trade"
                className="bg-[#080808] text-white"
              >
                Sell or trade a timepiece
              </option>

              <option
                value="source"
                className="bg-[#080808] text-white"
              >
                Begin a private search
              </option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          </div>
        </label>
      </div>

      {/* Message */}
      <label className="group block border-b border-white/[0.11] py-8">
        <span className="flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/28 transition group-focus-within:text-white/58">
          <span className="text-white/18">05</span>
          Your message
        </span>

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about the watch, reference, collection, or appointment you have in mind."
          className="mt-4 min-h-[11rem] w-full resize-none border-0 bg-transparent p-0 text-xl leading-8 text-white outline-none placeholder:text-white/22"
        />
      </label>

      {/* Submission area */}
      <div className="grid gap-8 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="max-w-xl text-sm leading-6 text-white/30">
            Your inquiry is handled privately. Information submitted through
            this form is used only to respond to your request.
          </p>

          <div
            aria-live="polite"
            className="mt-4 min-h-6 text-sm"
          >
            {status === "success" && (
              <p className="text-white/72">
                Your message has been received. A specialist will contact you
                shortly.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-300/80">
                The message could not be sent. Please review the information
                and try again.
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex min-w-[14rem] items-center justify-center gap-3 border border-white bg-white px-7 py-4 text-sm font-medium text-black transition duration-300 hover:bg-white/88 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Sending inquiry..." : "Send private inquiry"}

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}