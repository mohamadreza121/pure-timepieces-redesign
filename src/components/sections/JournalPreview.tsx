import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const articles = [
  {
    number: "01",
    category: "Collecting",
    title: "What ‘full set’ actually means—and when it matters.",
    excerpt:
      "Boxes and papers influence value, but completeness is only one part of a serious condition and provenance review.",
    href: "/about"
  },
  {
    number: "02",
    category: "Market Notes",
    title: "The difference between rare and merely expensive.",
    excerpt:
      "Production, configuration, condition, demand, and provenance create scarcity in very different ways.",
    href: "/about"
  },
  {
    number: "03",
    category: "Guidance",
    title: "How collectors evaluate condition before price.",
    excerpt:
      "Edges, geometry, dial integrity, bracelet condition, and service history often tell the real story first.",
    href: "/about"
  }
];

export function JournalIntroScene() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#080808]">
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-[0.24]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(255,255,255,0.055),transparent_35rem)]" />
      <div className="luxury-noise pointer-events-none absolute inset-0 opacity-[0.025]" />

      <Container className="relative flex min-h-[100svh] max-w-none flex-col px-5 pb-7 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-24 xl:px-10 2xl:px-12">
        <div className="flex shrink-0 items-center justify-between gap-6 border-b border-white/[0.1] pb-4">
          <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/36">
            Notes for collectors
          </p>

          <p className="hidden text-[0.55rem] uppercase tracking-[0.31em] text-white/24 sm:block">
            Market context · Ownership guidance
          </p>
        </div>

        <div className="my-auto grid items-end gap-10 py-8 lg:grid-cols-[1fr_0.48fr]">
          <Reveal>
            <h2 className="max-w-[11ch] font-display text-[clamp(3.8rem,min(7.3vw,10svh),9.4rem)] leading-[0.78] tracking-[-0.068em] text-white">
              Perspective
              <br />
              before purchase.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-l border-white/[0.12] pl-7 lg:pb-2">
              <p className="text-base leading-7 text-white/44 xl:text-lg xl:leading-8">
                The details that distinguish a considered acquisition from an
                impulsive one—explained with the collector in mind.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <span className="h-px w-10 bg-white/25" />
                <span className="text-[0.56rem] uppercase tracking-[0.32em] text-white/28">
                  Three current notes
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-6 border-t border-white/[0.1] pt-4 text-[0.55rem] uppercase tracking-[0.3em] text-white/24">
          <span>Knowledge before acquisition</span>
          <span className="hidden sm:block">Continue to the journal</span>
        </div>
      </Container>
    </section>
  );
}

export function JournalArticlesScene() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-[0.16]" />
      <div className="luxury-noise pointer-events-none absolute inset-0 opacity-[0.025]" />

      <Container className="relative flex min-h-[100svh] max-w-none flex-col px-5 pb-7 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-24 xl:px-10 2xl:px-12">
        <div className="flex shrink-0 items-end justify-between gap-8 border-b border-white/[0.1] pb-5">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/34">
              Collector journal
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.8rem,4.8vw,5.7rem)] leading-[0.88] tracking-[-0.05em] text-white">
              Three ideas worth carrying forward.
            </h2>
          </div>

          <span className="hidden text-[0.55rem] uppercase tracking-[0.3em] text-white/22 md:block">
            01—03
          </span>
        </div>

        <div className="my-auto border-y border-white/[0.1]">
          {articles.map((article, index) => (
            <Reveal
              key={article.number}
              delay={index * 0.06}
            >
              <article className="group relative grid gap-4 border-b border-white/[0.08] py-5 last:border-b-0 md:grid-cols-[4rem_0.55fr_1.15fr_0.95fr_auto] md:items-center lg:py-6">
                <Link
                  href={article.href}
                  className="absolute inset-0 z-10"
                  aria-label={article.title}
                />

                <span className="text-[0.56rem] tracking-[0.28em] text-white/24">
                  {article.number}
                </span>

                <p className="text-[0.56rem] uppercase tracking-[0.31em] text-white/32">
                  {article.category}
                </p>

                <h3 className="font-display text-2xl leading-[0.96] tracking-[-0.03em] text-white/82 transition group-hover:text-white lg:text-3xl xl:text-4xl">
                  {article.title}
                </h3>

                <p className="max-w-lg text-sm leading-6 text-white/36 xl:text-base xl:leading-7">
                  {article.excerpt}
                </p>

                <ArrowUpRight className="h-5 w-5 text-white/28 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="flex shrink-0 items-center justify-between gap-6 border-t border-white/[0.1] pt-4 text-[0.55rem] uppercase tracking-[0.3em] text-white/24">
          <span>Collect with context</span>
          <span className="hidden sm:block">More editorial notes coming soon</span>
        </div>
      </Container>
    </section>
  );
}

export function JournalPreview() {
  return (
    <>
      <JournalIntroScene />
      <JournalArticlesScene />
    </>
  );
}
