import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export function InputField(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-champagne/55"
    />
  );
}

export function TextAreaField(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="min-h-36 w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-champagne/55"
    />
  );
}

export function SelectField({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition focus:border-champagne/55"
    >
      {children}
    </select>
  );
}
