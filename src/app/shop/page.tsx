import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/products";
import type { Product } from "@/types";

export const metadata: Metadata = {
  title: "Shop Luxury Watches",
  description:
    "Explore authenticated luxury watches privately offered by Pure Timepieces Co."
};

export default function ShopPage() {
  const availableProducts = products.filter(
    (product) => product.availability === "Available"
  );

  const brands = Array.from(
    new Set(products.map((product) => product.brand))
  );

  return (
    <main className="relative isolate overflow-hidden bg-[#030303]">
      {/* Background */}
      <div className="homepage-grid pointer-events-none absolute inset-0 -z-30 opacity-20" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.055),transparent_36rem)]" />

      <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" />

      <section className="min-h-screen pt-32 md:pt-36">
        <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Intro */}
          <div className="border-b border-white/[0.09] pb-12 md:pb-16">
            <div className="flex items-center justify-between gap-8">
              <p className="text-[0.64rem] uppercase tracking-[0.44em] text-white/30">
                The vault
              </p>

              <p className="hidden text-[0.62rem] uppercase tracking-[0.34em] text-white/22 md:block">
                Authenticated · Privately offered
              </p>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <h1 className="max-w-[10ch] font-display text-[clamp(5.5rem,10.7vw,14rem)] leading-[0.76] tracking-[-0.075em] text-white">
                A private
                <br />
                selection of
                <br />
                exceptional watches.
              </h1>

              <div className="max-w-xl lg:pb-3">
                <p className="text-xl leading-9 text-white/48">
                  A considered collection of modern icons, rare references,
                  and collector-worthy timepieces sourced through trusted
                  private channels.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-white/25" />

                  <p className="text-[0.61rem] uppercase tracking-[0.34em] text-white/28">
                    Every piece independently reviewed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Collection statistics */}
          <div className="grid border-b border-white/[0.09] md:grid-cols-3">
            <VaultStat
              number={String(products.length).padStart(2, "0")}
              label="Timepieces"
              text="Current private inventory"
            />

            <VaultStat
              number={String(availableProducts.length).padStart(2, "0")}
              label="Available now"
              text="Ready for private acquisition"
              bordered
            />

            <VaultStat
              number={String(brands.length).padStart(2, "0")}
              label="Manufactures"
              text={brands.join(" · ")}
              bordered
            />
          </div>

          {/* Collection heading */}
          <div className="flex flex-col gap-8 border-b border-white/[0.09] py-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                Current selection
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-[-0.05em] text-white md:text-7xl">
                Available from the vault.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/34">
              Availability may change before the website is updated. Contact
              us directly to confirm the status of a specific reference.
            </p>
          </div>

          {/* Editorial collection */}
          <div className="grid lg:grid-cols-2">
            {products.map((product, index) => (
              <VaultProduct
                key={product.slug}
                product={product}
                index={index}
              />
            ))}
          </div>

          {/* Private sourcing CTA */}
          <div className="grid gap-12 border-t border-white/[0.09] py-20 md:py-28 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                Beyond current inventory
              </p>

              <h2 className="mt-6 max-w-5xl font-display text-[clamp(4.5rem,7.5vw,10rem)] leading-[0.83] tracking-[-0.06em] text-white">
                Not every important watch reaches the public market.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/42">
                Tell us the reference you are searching for. Our private
                sourcing service extends beyond the watches currently shown
                in the vault.
              </p>
            </div>

            <Link
              href="/dream-watch"
              className="group inline-flex items-center justify-center gap-3 border border-white bg-white px-7 py-4 text-sm font-medium text-black transition duration-300 hover:bg-white/88"
            >
              Begin a private search

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

type VaultProductProps = {
  product: Product;
  index: number;
};

function VaultProduct({
  product,
  index
}: VaultProductProps) {
  const isFeaturedLayout = index === 0 || index % 5 === 4;
  const isAvailable = product.availability === "Available";

  return (
    <article
      className={[
        "group relative border-b border-white/[0.09]",
        index % 2 === 0
          ? "lg:border-r lg:pr-8 xl:pr-12"
          : "lg:pl-8 xl:pl-12",
        isFeaturedLayout ? "lg:col-span-2 lg:border-r-0 lg:px-0" : ""
      ].join(" ")}
    >
      <Link
        href={`/shop/${product.slug}`}
        className={
          isFeaturedLayout
            ? "grid py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch lg:gap-12 xl:gap-20"
            : "flex h-full flex-col py-12"
        }
      >
        {/* Image */}
        <div
          className={[
            "relative overflow-hidden bg-[#070707]",
            isFeaturedLayout
              ? "min-h-[34rem] md:min-h-[46rem] lg:min-h-[52rem]"
              : "aspect-[4/5]"
          ].join(" ")}
        >
          <div className="homepage-grid pointer-events-none absolute inset-0 opacity-20" />

          <Image
            src={product.image}
            alt={product.name}
            fill
            quality={95}
            sizes={
              isFeaturedLayout
                ? "(min-width: 1024px) 62vw, 100vw"
                : "(min-width: 1024px) 50vw, 100vw"
            }
            className="object-contain p-5 transition duration-[900ms] ease-out group-hover:scale-[1.035] md:p-8"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(0,0,0,0.38)_100%)]" />

          <div className="absolute left-5 top-5 flex items-center gap-3 md:left-7 md:top-7">
            <span className="text-[0.57rem] tracking-[0.32em] text-white/30">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-8 bg-white/20" />

            <span className="text-[0.57rem] uppercase tracking-[0.32em] text-white/35">
              {product.brand}
            </span>
          </div>

          <div className="absolute bottom-5 right-5 md:bottom-7 md:right-7">
            <span
              className={
                isAvailable
                  ? "text-[0.57rem] uppercase tracking-[0.32em] text-white/55"
                  : "text-[0.57rem] uppercase tracking-[0.32em] text-white/28"
              }
            >
              {product.availability}
            </span>
          </div>
        </div>

        {/* Information */}
        <div
          className={
            isFeaturedLayout
              ? "flex flex-col justify-between py-10 lg:py-8"
              : "flex flex-1 flex-col justify-between pt-8"
          }
        >
          <div>
            <div className="flex items-center justify-between gap-8">
              <p className="text-[0.59rem] uppercase tracking-[0.34em] text-white/28">
                Ref. {product.reference}
              </p>

              <ArrowUpRight className="h-4 w-4 text-white/22 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
            </div>

            <h3
              className={[
                "mt-6 max-w-[13ch] font-display leading-[0.93] tracking-[-0.045em] text-white transition duration-300",
                isFeaturedLayout
                  ? "text-5xl md:text-6xl xl:text-8xl"
                  : "text-4xl md:text-5xl"
              ].join(" ")}
            >
              {product.name}
            </h3>

            <p className="mt-6 max-w-xl leading-7 text-white/38">
              {product.description}
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-2 border-y border-white/[0.09]">
              <ProductDetail
                label="Condition"
                value={product.condition}
              />

              <ProductDetail
                label="Includes"
                value={product.includes}
                bordered
              />
            </div>

            <div className="mt-7 flex items-center justify-between gap-8">
              <p className="font-display text-3xl text-white/88">
                {product.price}
              </p>

              <span className="text-[0.59rem] uppercase tracking-[0.3em] text-white/28 transition group-hover:text-white/60">
                View timepiece
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

type VaultStatProps = {
  number: string;
  label: string;
  text: string;
  bordered?: boolean;
};

function VaultStat({
  number,
  label,
  text,
  bordered = false
}: VaultStatProps) {
  return (
    <div
      className={[
        "py-10 md:px-8 md:py-12 first:pl-0 last:pr-0",
        bordered
          ? "border-t border-white/[0.08] md:border-l md:border-t-0"
          : ""
      ].join(" ")}
    >
      <p className="font-display text-5xl text-white/86">
        {number}
      </p>

      <p className="mt-4 text-[0.61rem] uppercase tracking-[0.36em] text-white/34">
        {label}
      </p>

      <p className="mt-3 max-w-sm text-sm leading-6 text-white/28">
        {text}
      </p>
    </div>
  );
}

type ProductDetailProps = {
  label: string;
  value: string;
  bordered?: boolean;
};

function ProductDetail({
  label,
  value,
  bordered = false
}: ProductDetailProps) {
  return (
    <div
      className={[
        "py-5",
        bordered ? "border-l border-white/[0.08] pl-6" : "pr-6"
      ].join(" ")}
    >
      <p className="text-[0.56rem] uppercase tracking-[0.3em] text-white/22">
        {label}
      </p>

      <p className="mt-2 text-sm text-white/58">
        {value}
      </p>
    </div>
  );
}