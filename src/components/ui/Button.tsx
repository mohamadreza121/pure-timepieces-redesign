import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const monochromeButton =
  "border-white/[0.14] bg-[#080808] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/25 hover:bg-[#141414] hover:text-white";

const variants = {
  primary: monochromeButton,
  secondary: monochromeButton,
  ghost: monochromeButton
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base"
};

export function Button({
  children,
  href,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  onClick
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
