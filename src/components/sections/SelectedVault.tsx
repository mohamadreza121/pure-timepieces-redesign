import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/products";

export function SelectedVault() {
  const selected = products.filter((product) => product.featured).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#080808] py-28 md:py-36 lg:py-44">
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-35" />

      <Container className="relative max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="text-[0.66rem] uppercase tracking-[0.44em] text-white/32">
                Current private inventory
              </p>
              <h2 className="mt-6 font-display text-6xl leading-[0.88] tracking-[-0.055em] text-white sm:text-7xl lg:text-[7.7rem]">
                Selected from
                <br />
                the vault.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="max-w-md md:text-right">
              <p className="leading-8 text-white/45">
                Collector-worthy references presented with restraint. Each piece is
                reviewed for condition, completeness, and market relevance.
              </p>
              <Link
                href="/shop"
                className="mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm text-white/76 transition hover:border-white/65 hover:text-white"
              >
                Explore all inventory
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] lg:grid-cols-12">
          {selected.map((product, index) => (
            <VaultCard
              key={product.slug}
              product={product}
              featured={index === 0}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function VaultCard({
  product,
  featured,
  index
}: {
  product: (typeof products)[number];
  featured: boolean;
  index: number;
}) {
  return (
    <article
      className={
        featured
          ? "group relative min-h-[42rem] bg-[#050505] lg:col-span-7 lg:row-span-2 lg:min-h-[58rem]"
          : "group relative min-h-[29rem] bg-[#050505] lg:col-span-5 lg:min-h-[29rem]"
      }
    >
      <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-20" aria-label={product.name} />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.075),transparent_45%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
          className={
            featured
              ? "object-contain p-12 transition duration-[1200ms] ease-out group-hover:scale-[1.035] md:p-20"
              : "object-contain p-12 transition duration-[1200ms] ease-out group-hover:scale-[1.045] md:p-16"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
        <div className="vault-light-sweep absolute inset-0" />
      </div>

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6 md:p-8">
        <span className="text-[0.62rem] uppercase tracking-[0.38em] text-white/34">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[0.62rem] uppercase tracking-[0.32em] text-white/34">
          {product.availability}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 lg:p-10">
        <p className="text-[0.64rem] uppercase tracking-[0.38em] text-white/42">
          {product.brand} · Ref. {product.reference}
        </p>
        <h3
          className={
            featured
              ? "mt-4 max-w-2xl font-display text-5xl leading-[0.92] tracking-[-0.045em] text-white md:text-7xl"
              : "mt-4 max-w-lg font-display text-4xl leading-[0.94] tracking-[-0.04em] text-white md:text-5xl"
          }
        >
          {product.name.replace(`${product.brand} `, "")}
        </h3>
        <div className="mt-7 flex items-end justify-between gap-4 border-t border-white/[0.1] pt-5">
          <div>
            <p className="text-sm text-white/45">{product.condition} · {product.includes}</p>
            <p className="mt-1 text-lg text-white/84">{product.price}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-white/45 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
        </div>
      </div>
    </article>
  );
}
