import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const paths = [
  {
    number: "01",
    title: "Acquire",
    description:
      "Explore authenticated pieces selected for condition, provenance, and lasting collector appeal.",
    href: "/shop",
    label: "View the collection"
  },
  {
    number: "02",
    title: "Release",
    description:
      "Request a discreet valuation for a timepiece you would like to sell, trade, or reposition.",
    href: "/sell-trade",
    label: "Sell or trade"
  }
];

export function PrivateAccessIntro() {
  return (
    <section className="relative border-y border-white/[0.065] bg-[#050505] py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.055),transparent_42rem)]" />

      <Container className="relative max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-[0.66rem] uppercase tracking-[0.44em] text-white/34">
                Private access
              </p>
              <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[0.9] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl xl:text-[6.8rem]">
                The collection,
                <br />
                on your terms.
              </h2>
              <p className="mt-8 max-w-lg text-base leading-8 text-white/45 md:text-lg">
                A discreet acquisition experience for collectors who value clarity,
                provenance, and access before spectacle.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-2 md:gap-8">
            {paths.map((path, index) => (
              <Reveal key={path.number} delay={index * 0.08}>
                <article className="group border-t border-white/[0.12] pt-6">
                  <span className="text-xs tracking-[0.3em] text-white/27">
                    {path.number}
                  </span>
                  <h3 className="mt-10 font-display text-5xl tracking-[-0.035em] text-white md:text-6xl">
                    {path.title}
                  </h3>
                  <p className="mt-5 min-h-28 max-w-md leading-8 text-white/46">
                    {path.description}
                  </p>
                  <Link
                    href={path.href}
                    className="mt-10 inline-flex items-center gap-3 border-b border-white/22 pb-2 text-sm font-medium text-white/78 transition duration-300 group-hover:border-white/70 group-hover:text-white"
                  >
                    {path.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
