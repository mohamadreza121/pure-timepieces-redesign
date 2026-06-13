import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow && <p className="mb-4 text-sm uppercase tracking-[0.4em] text-champagne">{eyebrow}</p>}
      <h2 className="font-display text-5xl leading-[0.95] text-platinum md:text-7xl">{title}</h2>
      {description && <p className="mt-6 text-base leading-8 text-white/62 md:text-lg">{description}</p>}
    </div>
  );
}
