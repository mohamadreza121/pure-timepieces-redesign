import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const paths = [
  {
    number: "01",
    title: "Acquire",
    description:
      "Explore authenticated pieces selected for condition, provenance, and collector appeal.",
    href: "/shop",
    label: "View collection"
  },
  {
    number: "02",
    title: "Release",
    description:
      "Request a discreet valuation for a timepiece you would like to sell or trade.",
    href: "/sell-trade",
    label: "Sell or trade"
  }
];

export function PrivateAccessCTA() {
  return (
    <section className="relative border-y border-white/[0.06] bg-[#070707] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_38rem)]" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/35">
              Private access
            </p>
            <h2 className="mt-5 max-w-xl font-display text-5xl leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
              The collection, on your terms.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {paths.map((path) => (
              <article
                key={path.number}
                className="border-t border-white/[0.1] pt-6"
              >
                <span className="text-xs tracking-[0.28em] text-white/28">
                  {path.number}
                </span>
                <h3 className="mt-7 font-display text-4xl text-white">
                  {path.title}
                </h3>
                <p className="mt-4 min-h-24 max-w-sm leading-7 text-white/48">
                  {path.description}
                </p>
                <Button href={path.href} size="lg" className="mt-8 gap-2">
                  {path.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
