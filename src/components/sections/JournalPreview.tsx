import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const articles = [
  {
    number: "01",
    category: "Collecting",
    title: "What ‘full set’ actually means—and when it matters.",
    excerpt: "Boxes and papers influence value, but completeness is only one part of a serious condition and provenance review.",
    href: "/about"
  },
  {
    number: "02",
    category: "Market Notes",
    title: "The difference between rare and merely expensive.",
    excerpt: "Production, configuration, condition, demand, and provenance create scarcity in very different ways.",
    href: "/about"
  },
  {
    number: "03",
    category: "Guidance",
    title: "How collectors evaluate condition before price.",
    excerpt: "Edges, geometry, dial integrity, bracelet condition, and service history often tell the real story first.",
    href: "/about"
  }
];

export function JournalPreview() {
  return (
    <section className="bg-[#080808] py-28 md:py-36 lg:py-44">
      <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="text-[0.66rem] uppercase tracking-[0.44em] text-white/30">
                Notes for collectors
              </p>
              <h2 className="mt-6 font-display text-6xl leading-[0.88] tracking-[-0.055em] text-white sm:text-7xl lg:text-[7.5rem]">
                Perspective before purchase.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md leading-8 text-white/42 md:text-right">
              Market context, ownership guidance, and the details that distinguish a considered acquisition from an impulsive one.
            </p>
          </Reveal>
        </div>

        <div className="border-y border-white/[0.1]">
          {articles.map((article, index) => (
            <Reveal key={article.number} delay={index * 0.06}>
              <article className="group relative grid gap-6 border-b border-white/[0.08] py-8 last:border-b-0 md:grid-cols-[5rem_0.75fr_1.25fr_1fr_auto] md:items-center md:py-10">
                <Link href={article.href} className="absolute inset-0 z-10" aria-label={article.title} />
                <span className="text-[0.62rem] tracking-[0.28em] text-white/25">{article.number}</span>
                <p className="text-[0.62rem] uppercase tracking-[0.34em] text-white/35">{article.category}</p>
                <h3 className="font-display text-3xl leading-[0.98] tracking-[-0.035em] text-white/82 transition duration-300 group-hover:text-white md:text-4xl lg:text-5xl">
                  {article.title}
                </h3>
                <p className="max-w-lg leading-7 text-white/38">{article.excerpt}</p>
                <ArrowUpRight className="h-5 w-5 text-white/30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
