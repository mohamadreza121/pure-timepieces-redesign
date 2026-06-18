"use client";

import {
  type FormEvent,
  type ReactNode,
  useState
} from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full border-0 border-b border-white/[0.14] bg-transparent px-0 pb-4 pt-3 text-lg text-white outline-none transition duration-300 placeholder:text-white/22 focus:border-white/65";

const intentOptions = [
  {
    value: "sell",
    number: "01",
    label: "Sell",
    description: "Receive a private purchase offer."
  },
  {
    value: "trade",
    number: "02",
    label: "Trade",
    description: "Apply the value toward another watch."
  },
  {
    value: "both",
    number: "03",
    label: "Open to both",
    description: "Review both purchase and trade options."
  }
];

export function SellTradeForm() {
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
          type: "sell-trade",
          ...payload
        })
      });

      if (!response.ok) {
        throw new Error("Sell or trade request failed");
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
      {/* Contact details */}
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
          label="Watch brand"
          right
        >
          <input
            name="brand"
            type="text"
            required
            placeholder="Rolex, Omega, Tudor..."
            className={inputClassName}
          />
        </Field>
      </div>

      {/* Intent selector */}
      <fieldset className="border-b border-white/[0.11] py-8">
        <legend className="flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/28">
          <span className="text-white/18">05</span>
          Preferred outcome
        </legend>

        <div className="mt-6 grid border-y border-white/[0.09] md:grid-cols-3">
          {intentOptions.map((option, index) => (
            <label
              key={option.value}
              className={[
                "group relative cursor-pointer py-6",
                index > 0
                  ? "border-t border-white/[0.08] md:border-l md:border-t-0"
                  : ""
              ].join(" ")}
            >
              <input
                type="radio"
                name="intent"
                value={option.value}
                defaultChecked={option.value === "sell"}
                className="peer sr-only"
              />

              <div className="px-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[0.58rem] tracking-[0.3em] text-white/20 transition peer-checked:text-white/65">
                    {option.number}
                  </span>

                  <span className="h-2 w-2 border border-white/20 transition duration-300 peer-checked:border-white peer-checked:bg-white" />
                </div>

                <p className="mt-5 font-display text-3xl text-white/42 transition duration-300 group-hover:text-white/72 peer-checked:text-white">
                  {option.label}
                </p>

                <p className="mt-3 max-w-xs text-sm leading-6 text-white/28 transition peer-checked:text-white/48">
                  {option.description}
                </p>
              </div>

              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white transition-transform duration-300 peer-checked:scale-x-100" />
            </label>
          ))}
        </div>
      </fieldset>

      {/* Watch details */}
      <div className="grid md:grid-cols-2">
        <Field
          number="06"
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
          number="07"
          label="Condition"
          right
        >
          <div className="relative">
            <select
              name="condition"
              defaultValue="excellent"
              className={`${inputClassName} cursor-pointer appearance-none pr-10`}
            >
              <option
                value="new"
                className="bg-[#080808] text-white"
              >
                New or unworn
              </option>

              <option
                value="excellent"
                className="bg-[#080808] text-white"
              >
                Excellent
              </option>

              <option
                value="good"
                className="bg-[#080808] text-white"
              >
                Good
              </option>

              <option
                value="fair"
                className="bg-[#080808] text-white"
              >
                Fair
              </option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          </div>
        </Field>

        <Field
          number="08"
          label="Included accessories"
        >
          <div className="relative">
            <select
              name="includes"
              defaultValue="box-papers"
              className={`${inputClassName} cursor-pointer appearance-none pr-10`}
            >
              <option
                value="box-papers"
                className="bg-[#080808] text-white"
              >
                Box and papers
              </option>

              <option
                value="box-only"
                className="bg-[#080808] text-white"
              >
                Box only
              </option>

              <option
                value="papers-only"
                className="bg-[#080808] text-white"
              >
                Papers only
              </option>

              <option
                value="watch-only"
                className="bg-[#080808] text-white"
              >
                Watch only
              </option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          </div>
        </Field>

        <Field
          number="09"
          label="Approximate year"
          right
        >
          <input
            name="year"
            type="text"
            placeholder="Purchase year or production year"
            className={inputClassName}
          />
        </Field>
      </div>

      {/* Watch history */}
      <label className="group block border-b border-white/[0.11] py-8">
        <span className="flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/28 transition group-focus-within:text-white/58">
          <span className="text-white/18">10</span>
          Watch details and history
        </span>

        <textarea
          name="message"
          rows={6}
          placeholder="Tell us about the condition, purchase history, service history, marks or wear, included accessories, and what you may want to trade toward."
          className="mt-4 min-h-[13rem] w-full resize-none border-0 bg-transparent p-0 text-xl leading-8 text-white outline-none placeholder:text-white/22"
        />
      </label>

      {/* Submission */}
      <div className="grid gap-8 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="max-w-xl text-sm leading-6 text-white/30">
            Your watch will not be publicly listed through this request. All
            information is reviewed privately by our acquisition team.
          </p>

          <div
            aria-live="polite"
            className="mt-4 min-h-6 text-sm"
          >
            {status === "success" && (
              <p className="text-white/72">
                Your watch details have been received. Our acquisition team
                will review the submission and contact you privately.
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
            ? "Submitting details..."
            : "Request private review"}

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
  children: ReactNode;
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