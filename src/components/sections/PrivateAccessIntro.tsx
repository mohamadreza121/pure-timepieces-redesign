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
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.055),transparent_42rem)]" />
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="luxury-noise pointer-events-none absolute inset-0 opacity-[0.025]" />

      <Container className="relative flex min-h-[100svh] max-w-none flex-col px-5 pb-7 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-24 xl:px-10 2xl:px-12">
        <div className="flex shrink-0 items-center justify-between gap-6 border-b border-white/[0.1] pb-4">
          <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/38">
            Private access
          </p>

          <p className="hidden text-[0.55rem] uppercase tracking-[0.31em] text-white/24 sm:block">
            Acquire · Release
          </p>
        </div>

        <div className="my-auto grid items-center gap-10 py-7 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16 xl:gap-24">
          <Reveal>
            <div>
              <h2 className="max-w-[11ch] font-display text-[clamp(3.5rem,min(6.5vw,9.2svh),8.2rem)] leading-[0.8] tracking-[-0.065em] text-white">
                The collection,
                <br />
                on your terms.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/45 xl:text-lg xl:leading-8">
                A discreet acquisition experience for collectors who value
                clarity, provenance, and access before spectacle.
              </p>
            </div>
          </Reveal>

          <div className="grid border-y border-white/[0.1] md:grid-cols-2">
            {paths.map((path, index) => (
              <Reveal
                key={path.number}
                delay={index * 0.08}
              >
                <article
                  className={[
                    "group flex min-h-[22rem] flex-col justify-between p-6 md:p-8 lg:min-h-[26rem] xl:p-10",
                    index === 1
                      ? "border-t border-white/[0.08] md:border-l md:border-t-0"
                      : ""
                  ].join(" ")}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[0.58rem] tracking-[0.3em] text-white/24">
                        {path.number}
                      </span>

                      <span className="h-px w-9 bg-white/15 transition duration-300 group-hover:w-14 group-hover:bg-white/38" />
                    </div>

                    <h3 className="mt-7 font-display text-[clamp(3rem,4.5vw,5.6rem)] leading-[0.9] tracking-[-0.045em] text-white">
                      {path.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/42 xl:text-base xl:leading-7">
                      {path.description}
                    </p>
                  </div>

                  <Link
                    href={path.href}
                    className="mt-8 inline-flex w-fit items-center gap-3 border-b border-white/22 pb-2 text-sm font-medium text-white/76 transition duration-300 group-hover:border-white/70 group-hover:text-white"
                  >
                    {path.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-6 border-t border-white/[0.1] pt-4 text-[0.55rem] uppercase tracking-[0.3em] text-white/24">
          <span>Private by design</span>
          <span className="hidden sm:block">Ontario · Worldwide</span>
        </div>
      </Container>
    </section>
  );
}
