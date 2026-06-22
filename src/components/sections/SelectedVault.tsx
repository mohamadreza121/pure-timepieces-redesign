import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/products";
import type { Product } from "@/types";

const selected = products.filter((product) => product.featured).slice(0, 3);
const featuredProduct = selected[0];
const supportingProducts = selected.slice(1, 3);

export function VaultIntroductionScene() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#080808]">
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_46%,rgba(255,255,255,0.07),transparent_30rem)]" />
      <div className="luxury-noise pointer-events-none absolute inset-0 opacity-[0.025]" />

      {featuredProduct && (
        <div className="absolute inset-y-0 right-0 w-full opacity-[0.42] lg:w-[58%]">
          <Image
            src={featuredProduct.image}
            alt=""
            fill
            quality={95}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-contain object-right p-8 sm:p-14 lg:p-16 xl:p-20"
          />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#080808_0%,rgba(8,8,8,0.98)_34%,rgba(8,8,8,0.76)_56%,rgba(8,8,8,0.18)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.48)_0%,transparent_45%,rgba(8,8,8,0.86)_100%)]" />

      <Container className="relative flex min-h-[100svh] max-w-none flex-col px-5 pb-7 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-24 xl:px-10 2xl:px-12">
        <div className="flex shrink-0 items-center justify-between gap-6 border-b border-white/[0.1] pb-4">
          <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/38">
            Current private inventory
          </p>

          <p className="hidden text-[0.55rem] uppercase tracking-[0.31em] text-white/24 sm:block">
            Scene 03 · The vault
          </p>
        </div>

        <div className="my-auto max-w-[86rem] py-8">
          <Reveal>
            <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/34">
              Authenticated · Curated · Privately offered
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(3.7rem,min(7vw,9.8svh),9rem)] leading-[0.79] tracking-[-0.068em] text-white">
              Selected from
              <br />
              the vault.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 grid max-w-4xl gap-7 border-t border-white/[0.12] pt-7 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-base leading-7 text-white/46 xl:text-lg xl:leading-8">
                Collector-worthy references presented with restraint. Every
                piece is reviewed for condition, completeness, authenticity,
                and market relevance before it enters the collection.
              </p>

              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm text-white/76 transition hover:border-white/65 hover:text-white"
              >
                Explore all inventory
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-6 border-t border-white/[0.1] pt-4 text-[0.55rem] uppercase tracking-[0.3em] text-white/24">
          <span>{String(selected.length).padStart(2, "0")} selected pieces</span>
          <span className="hidden sm:block">Availability subject to confirmation</span>
        </div>
      </Container>
    </section>
  );
}

export function FeaturedVaultScene() {
  if (!featuredProduct) {
    return null;
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-[0.22]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_34%_46%,rgba(255,255,255,0.07),transparent_30rem)]" />

      <Container className="relative grid min-h-[100svh] max-w-none px-0 lg:grid-cols-[1.15fr_0.85fr]">
        <Link
          href={`/shop/${featuredProduct.slug}`}
          className="group relative min-h-[52svh] overflow-hidden border-b border-white/[0.08] bg-[#070707] lg:min-h-[100svh] lg:border-b-0 lg:border-r"
          aria-label={featuredProduct.name}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.085),transparent_45%)]" />

          <Image
            src={featuredProduct.image}
            alt={featuredProduct.name}
            fill
            priority={false}
            quality={95}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-contain p-8 transition duration-[1200ms] ease-out group-hover:scale-[1.035] sm:p-14 lg:p-16 xl:p-20"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/78 via-black/5 to-transparent" />
          <div className="vault-light-sweep absolute inset-0" />

          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6 pt-24 sm:p-8 sm:pt-24 lg:p-10 lg:pt-24">
            <span className="text-[0.58rem] uppercase tracking-[0.35em] text-white/36">
              01 · Featured reference
            </span>
            <span className="text-[0.58rem] uppercase tracking-[0.32em] text-white/42">
              {featuredProduct.availability}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
            <p className="text-[0.58rem] uppercase tracking-[0.36em] text-white/40">
              {featuredProduct.brand} · Ref. {featuredProduct.reference}
            </p>
          </div>
        </Link>

        <div className="flex min-h-[48svh] flex-col justify-between px-5 pb-7 pt-10 sm:px-6 lg:min-h-[100svh] lg:px-10 lg:pb-8 lg:pt-24 xl:px-14 2xl:px-16">
          <div className="flex items-center justify-between gap-6 border-b border-white/[0.1] pb-4">
            <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/34">
              Selected reference
            </p>
            <ArrowUpRight className="h-4 w-4 text-white/24" />
          </div>

          <div className="my-auto py-7">
            <Reveal>
              <h2 className="max-w-[10ch] font-display text-[clamp(3.2rem,min(5vw,7.5svh),6.7rem)] leading-[0.84] tracking-[-0.055em] text-white">
                {featuredProduct.name.replace(`${featuredProduct.brand} `, "")}
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/44 xl:text-lg xl:leading-8">
                {featuredProduct.description}
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 border-y border-white/[0.09]">
              <ProductFact label="Condition" value={featuredProduct.condition} />
              <ProductFact label="Includes" value={featuredProduct.includes} bordered />
              <ProductFact label="Reference" value={featuredProduct.reference} />
              <ProductFact label="Price" value={featuredProduct.price} bordered />
            </div>
          </div>

          <Link
            href={`/shop/${featuredProduct.slug}`}
            className="group flex shrink-0 items-center justify-between border border-white bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-white/88"
          >
            View this timepiece
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function VaultPairScene() {
  if (supportingProducts.length === 0) {
    return null;
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#080808]">
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-[0.24]" />

      <Container className="relative flex min-h-[100svh] max-w-none flex-col px-5 pb-7 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-24 xl:px-10 2xl:px-12">
        <div className="flex shrink-0 items-end justify-between gap-8 border-b border-white/[0.1] pb-5">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/34">
              Further selections
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.8rem,4.8vw,5.6rem)] leading-[0.88] tracking-[-0.05em] text-white">
              Two more from the vault.
            </h2>
          </div>

          <Link
            href="/shop"
            className="group hidden items-center gap-3 text-sm text-white/48 transition hover:text-white md:inline-flex"
          >
            View full collection
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="my-auto grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] lg:grid-cols-2">
          {supportingProducts.map((product, index) => (
            <CompactVaultCard
              key={product.slug}
              product={product}
              index={index + 2}
            />
          ))}
        </div>

        <div className="flex shrink-0 items-center justify-between gap-6 border-t border-white/[0.1] pt-4 text-[0.55rem] uppercase tracking-[0.3em] text-white/24">
          <span>Authenticated inventory</span>
          <span className="hidden sm:block">Private acquisition available</span>
        </div>
      </Container>
    </section>
  );
}

function ProductFact({
  label,
  value,
  bordered = false
}: {
  label: string;
  value: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={[
        "py-5",
        bordered ? "border-l border-white/[0.08] pl-6" : "pr-6"
      ].join(" ")}
    >
      <p className="text-[0.54rem] uppercase tracking-[0.3em] text-white/22">
        {label}
      </p>
      <p className="mt-2 text-sm text-white/62">{value}</p>
    </div>
  );
}

function CompactVaultCard({
  product,
  index
}: {
  product: Product;
  index: number;
}) {
  return (
    <article className="group relative min-h-[29rem] overflow-hidden bg-[#050505] sm:min-h-[34rem] lg:min-h-[54svh]">
      <Link
        href={`/shop/${product.slug}`}
        className="absolute inset-0 z-20"
        aria-label={product.name}
      />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.075),transparent_45%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          quality={95}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-8 transition duration-[1200ms] ease-out group-hover:scale-[1.04] sm:p-12 lg:p-14"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
        <div className="vault-light-sweep absolute inset-0" />
      </div>

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6">
        <span className="text-[0.56rem] tracking-[0.3em] text-white/30">
          {String(index).padStart(2, "0")}
        </span>
        <span className="text-[0.56rem] uppercase tracking-[0.3em] text-white/34">
          {product.availability}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
        <p className="text-[0.56rem] uppercase tracking-[0.34em] text-white/38">
          {product.brand} · Ref. {product.reference}
        </p>
        <h3 className="mt-3 max-w-[14ch] font-display text-[clamp(2.5rem,3.5vw,4.5rem)] leading-[0.9] tracking-[-0.04em] text-white">
          {product.name.replace(`${product.brand} `, "")}
        </h3>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/[0.1] pt-4">
          <div>
            <p className="text-xs text-white/40">
              {product.condition} · {product.includes}
            </p>
            <p className="mt-1 font-display text-2xl text-white/84">
              {product.price}
            </p>
          </div>

          <ArrowUpRight className="h-5 w-5 text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
        </div>
      </div>
    </article>
  );
}
