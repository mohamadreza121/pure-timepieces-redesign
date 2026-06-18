"use client";

import { type FormEvent, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full border-0 border-b border-white/[0.14] bg-transparent px-0 pb-4 pt-3 text-lg text-white outline-none transition duration-300 placeholder:text-white/22 focus:border-white/65";

export function DreamWatchForm() {
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
          type: "dream-watch",
          ...payload
        })
      });

      if (!response.ok) {
        throw new Error("Dream watch request failed");
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
      {/* Personal details */}
      <div className="grid md:grid-cols-2">
        <Field
          number="01"
          label="Full name"
        >
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClassName}
          />
        </Field>

        <Field
          number="02"
          label="Email address"
          right
        >
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClassName}
          />
        </Field>

        <Field
          number="03"
          label="Phone number"
        >
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 000 000 0000"
            className={inputClassName}
          />
        </Field>

        <Field
          number="04"
          label="Desired brand"
          right
        >
          <input
            name="brand"
            type="text"
            required
            placeholder="Rolex, Patek Philippe, Cartier..."
            className={inputClassName}
          />
        </Field>
      </div>

      {/* Watch details */}
      <div className="grid md:grid-cols-2">
        <Field
          number="05"
          label="Model or reference"
        >
          <input
            name="model"
            type="text"
            required
            placeholder="Model name or reference number"
            className={inputClassName}
          />
        </Field>

        <Field
          number="06"
          label="Budget"
          right
        >
          <input
            name="budget"
            type="text"
            placeholder="$15,000 – $25,000 CAD"
            className={inputClassName}
          />
        </Field>

        <Field
          number="07"
          label="Preferred timeline"
        >
          <div className="relative">
            <select
              name="timeline"
              defaultValue="flexible"
              className={`${inputClassName} cursor-pointer appearance-none pr-10`}
            >
              <option
                value="urgent"
                className="bg-[#080808] text-white"
              >
                As soon as possible
              </option>

              <option
                value="30-days"
                className="bg-[#080808] text-white"
              >
                Within 30 days
              </option>

              <option
                value="90-days"
                className="bg-[#080808] text-white"
              >
                Within 90 days
              </option>

              <option
                value="flexible"
                className="bg-[#080808] text-white"
              >
                Flexible timeline
              </option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          </div>
        </Field>

        <Field
          number="08"
          label="Box and papers"
          right
        >
          <div className="relative">
            <select
              name="boxPapers"
              defaultValue="preferred"
              className={`${inputClassName} cursor-pointer appearance-none pr-10`}
            >
              <option
                value="required"
                className="bg-[#080808] text-white"
              >
                Box and papers required
              </option>

              <option
                value="preferred"
                className="bg-[#080808] text-white"
              >
                Box and papers preferred
              </option>

              <option
                value="not-required"
                className="bg-[#080808] text-white"
              >
                Not required
              </option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          </div>
        </Field>
      </div>

      {/* Additional preferences */}
      <label className="group block border-b border-white/[0.11] py-8">
        <span className="flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/28 transition group-focus-within:text-white/58">
          <span className="text-white/18">09</span>
          Additional preferences
        </span>

        <textarea
          name="message"
          rows={6}
          placeholder="Dial colour, year, condition, bracelet, accessories, provenance, or any specific details that matter to you."
          className="mt-4 min-h-[13rem] w-full resize-none border-0 bg-transparent p-0 text-xl leading-8 text-white outline-none placeholder:text-white/22"
        />
      </label>

      {/* Submission */}
      <div className="grid gap-8 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="max-w-xl text-sm leading-6 text-white/30">
            Your request remains private. We use the information only to
            identify suitable opportunities and contact you regarding your
            search.
          </p>

          <div
            aria-live="polite"
            className="mt-4 min-h-6 text-sm"
          >
            {status === "success" && (
              <p className="text-white/72">
                Your private search request has been received. A specialist
                will review it and contact you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-300/80">
                The request could not be submitted. Please review the
                information and try again.
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex min-w-[15rem] items-center justify-center gap-3 border border-white bg-white px-7 py-4 text-sm font-medium text-black transition duration-300 hover:bg-white/88 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading"
            ? "Submitting request..."
            : "Begin private search"}

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  number: string;
  label: string;
  right?: boolean;
  children: React.ReactNode;
};

function Field({
  number,
  label,
  right = false,
  children
}: FieldProps) {
  return (
    <label
      className={[
        "group relative border-b border-white/[0.08] py-8",
        right ? "md:pl-8" : "md:border-r md:pr-8"
      ].join(" ")}
    >
      <span className="flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/28 transition group-focus-within:text-white/58">
        <span className="text-white/18">{number}</span>
        {label}
      </span>

      {children}
    </label>
  );
}