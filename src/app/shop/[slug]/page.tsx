import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  PackageCheck,
  ShieldCheck
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Watch Not Found"
    };
  }

  return {
    title: product.name,
    description: `${product.name}. ${product.condition}, ${product.includes}. Privately offered by Pure Timepieces Co.`
  };
}

export default async function ProductPage({
  params
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  const gallery =
    product.gallery.length > 0
      ? product.gallery
      : [product.image];

  return (
    <main className="relative isolate overflow-hidden bg-[#030303]">
      {/* Background */}
      <div className="homepage-grid pointer-events-none absolute inset-0 -z-30 opacity-20" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_18%,rgba(255,255,255,0.05),transparent_36rem)]" />

      <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" />

      <section className="min-h-screen pt-28 md:pt-32">
        <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Back navigation */}
          <div className="border-b border-white/[0.09] pb-6">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 text-[0.61rem] uppercase tracking-[0.36em] text-white/30 transition hover:text-white/70"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Return to the vault
            </Link>
          </div>

          {/* Product introduction */}
          <div className="grid gap-10 border-b border-white/[0.09] py-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <p className="text-[0.63rem] uppercase tracking-[0.4em] text-white/34">
                  {product.brand}
                </p>

                <span className="h-px w-8 bg-white/20" />

                <p className="text-[0.61rem] uppercase tracking-[0.34em] text-white/24">
                  Reference {product.reference}
                </p>
              </div>

              <h1 className="mt-8 max-w-[13ch] font-display text-[clamp(4.8rem,8.6vw,12rem)] leading-[0.79] tracking-[-0.07em] text-white">
                {product.name}
              </h1>
            </div>

            <div className="lg:pb-2 lg:text-right">
              <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/26">
                Private asking price
              </p>

              <p className="mt-3 font-display text-4xl text-white/90 md:text-5xl">
                {product.price}
              </p>

              <p
                className={
                  product.availability === "Available"
                    ? "mt-3 text-[0.59rem] uppercase tracking-[0.34em] text-white/50"
                    : "mt-3 text-[0.59rem] uppercase tracking-[0.34em] text-white/25"
                }
              >
                {product.availability}
              </p>
            </div>
          </div>

          {/* Gallery and acquisition panel */}
          <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
            {/* Editorial gallery */}
            <div className="border-b border-white/[0.09] py-10 lg:border-b-0 lg:border-r lg:pr-10 xl:pr-16">
              <div className="grid gap-px bg-white/[0.08]">
                <div className="relative min-h-[38rem] overflow-hidden bg-[#070707] md:min-h-[55rem] lg:min-h-[64rem]">
                  <div className="homepage-grid pointer-events-none absolute inset-0 opacity-20" />

                  <Image
                    src={gallery[0]}
                    alt={product.name}
                    fill
                    priority
                    quality={95}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-contain p-5 md:p-10 lg:p-12"
                  />

                  <div className="absolute left-6 top-6 text-[0.58rem] uppercase tracking-[0.34em] text-white/30 md:left-8 md:top-8">
                    Primary view
                  </div>

                  <div className="absolute bottom-6 right-6 text-[0.58rem] tracking-[0.3em] text-white/24 md:bottom-8 md:right-8">
                    01 / {String(gallery.length).padStart(2, "0")}
                  </div>
                </div>

                {gallery.length > 1 && (
                  <div className="grid gap-px bg-white/[0.08] md:grid-cols-2">
                    {gallery.slice(1).map((image, index) => (
                      <div
                        key={image}
                        className="relative aspect-square overflow-hidden bg-[#070707]"
                      >
                        <Image
                          src={image}
                          alt={`${product.name} view ${index + 2}`}
                          fill
                          quality={95}
                          sizes="(min-width: 1024px) 29vw, (min-width: 768px) 50vw, 100vw"
                          className="object-contain p-4 transition duration-[900ms] hover:scale-[1.025] md:p-7"
                        />

                        <span className="absolute bottom-5 right-5 text-[0.56rem] tracking-[0.3em] text-white/24">
                          {String(index + 2).padStart(2, "0")} /{" "}
                          {String(gallery.length).padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Acquisition panel */}
            <aside className="py-14 lg:sticky lg:top-24 lg:h-fit lg:py-16 lg:pl-10 xl:pl-16">
              <p className="text-[0.61rem] uppercase tracking-[0.4em] text-white/28">
                Private acquisition
              </p>

              <h2 className="mt-6 max-w-xl font-display text-5xl leading-[0.9] tracking-[-0.05em] text-white md:text-6xl">
                Consider the watch beyond the photograph.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/44">
                {product.description}
              </p>

              {/* Trust details */}
              <div className="mt-12 border-y border-white/[0.09]">
                <AcquisitionDetail
                  icon={ShieldCheck}
                  number="01"
                  label="Authentication"
                  value="Independently reviewed"
                />

                <AcquisitionDetail
                  icon={PackageCheck}
                  number="02"
                  label="Included"
                  value={product.includes}
                />

                <AcquisitionDetail
                  icon={BadgeCheck}
                  number="03"
                  label="Condition"
                  value={product.condition}
                />

                <AcquisitionDetail
                  icon={Clock3}
                  number="04"
                  label="Availability"
                  value={product.availability}
                />
              </div>

              {/* Actions */}
              <div className="mt-10 grid gap-3">
                <Link
                  href={`/contact?watch=${encodeURIComponent(product.name)}`}
                  className="group inline-flex items-center justify-between border border-white bg-white px-6 py-4 text-sm font-medium text-black transition duration-300 hover:bg-white/88"
                >
                  Ask about this watch

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href={`/sell-trade?tradeFor=${encodeURIComponent(product.name)}`}
                  className="group inline-flex items-center justify-between border border-white/16 bg-black/30 px-6 py-4 text-sm text-white/74 transition duration-300 hover:border-white/40 hover:bg-white/[0.04] hover:text-white"
                >
                  Trade toward this piece

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <p className="mt-7 max-w-lg text-xs leading-6 text-white/25">
                Availability is confirmed directly before any deposit,
                appointment, or acquisition arrangement is made.
              </p>
            </aside>
          </div>

          {/* Inspection report */}
          <div className="grid border-t border-white/[0.09] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-white/[0.09] py-16 lg:border-b-0 lg:border-r lg:py-24 lg:pr-12 xl:pr-20">
              <p className="text-[0.61rem] uppercase tracking-[0.4em] text-white/28">
                Inspection report
              </p>

              <h2 className="mt-6 max-w-lg font-display text-5xl leading-[0.91] tracking-[-0.05em] text-white md:text-6xl">
                Condition, reference, and provenance.
              </h2>

              <p className="mt-7 max-w-lg leading-8 text-white/40">
                Every listed watch is reviewed for visual condition,
                configuration, included accessories, reference consistency,
                and collector relevance before being presented.
              </p>

              <div className="mt-12 border-y border-white/[0.09]">
                {[
                  "Case and finishing",
                  "Dial and handset",
                  "Movement and function",
                  "Reference and serial relationships",
                  "Accessories and documentation"
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-b border-white/[0.08] py-5 last:border-b-0"
                  >
                    <span className="text-[0.57rem] tracking-[0.3em] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-white/52">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="py-16 lg:py-24 lg:pl-12 xl:pl-20">
              <div className="flex items-end justify-between gap-10">
                <div>
                  <p className="text-[0.61rem] uppercase tracking-[0.4em] text-white/28">
                    Reference details
                  </p>

                  <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.05em] text-white md:text-6xl">
                    Specifications.
                  </h2>
                </div>

                <span className="hidden font-display text-7xl text-white/[0.05] xl:block">
                  REF.
                </span>
              </div>

              <dl className="mt-12 border-y border-white/[0.09]">
                {Object.entries(product.specs).map(
                  ([label, value], index) => (
                    <div
                      key={label}
                      className="grid gap-3 border-b border-white/[0.08] py-6 last:border-b-0 sm:grid-cols-[3rem_0.65fr_1fr] sm:items-center"
                    >
                      <span className="text-[0.57rem] tracking-[0.3em] text-white/18">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <dt className="text-[0.59rem] uppercase tracking-[0.3em] text-white/28">
                        {label}
                      </dt>

                      <dd className="text-lg text-white/68">
                        {value}
                      </dd>
                    </div>
                  )
                )}
              </dl>
            </div>
          </div>

          {/* Related watches */}
          <div className="border-t border-white/[0.09] py-20 md:py-28">
            <div className="flex flex-col gap-8 border-b border-white/[0.09] pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.61rem] uppercase tracking-[0.4em] text-white/28">
                  Continue exploring
                </p>

                <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-[-0.05em] text-white md:text-7xl">
                  Other pieces from the vault.
                </h2>
              </div>

              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
              >
                View the full collection

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3">
              {relatedProducts.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/shop/${item.slug}`}
                  className={[
                    "group py-10",
                    index > 0
                      ? "border-t border-white/[0.09] md:border-l md:border-t-0 md:pl-8"
                      : "md:pr-8"
                  ].join(" ")}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#070707]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      quality={90}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-contain p-5 transition duration-[900ms] group-hover:scale-[1.035]"
                    />
                  </div>

                  <p className="mt-7 text-[0.58rem] uppercase tracking-[0.32em] text-white/28">
                    {item.brand} · Ref. {item.reference}
                  </p>

                  <h3 className="mt-4 max-w-[15ch] font-display text-3xl leading-[0.96] tracking-[-0.035em] text-white/76 transition group-hover:text-white md:text-4xl">
                    {item.name}
                  </h3>

                  <div className="mt-6 flex items-center justify-between gap-6 border-t border-white/[0.08] pt-5">
                    <p className="font-display text-2xl text-white/72">
                      {item.price}
                    </p>

                    <ArrowUpRight className="h-4 w-4 text-white/22 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

type AcquisitionDetailProps = {
  icon: typeof ShieldCheck;
  number: string;
  label: string;
  value: string;
};

function AcquisitionDetail({
  icon: Icon,
  number,
  label,
  value
}: AcquisitionDetailProps) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-white/[0.08] py-6 last:border-b-0">
      <span className="text-[0.57rem] tracking-[0.3em] text-white/18">
        {number}
      </span>

      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-white/28" />

        <p className="text-[0.58rem] uppercase tracking-[0.3em] text-white/28">
          {label}
        </p>
      </div>

      <p className="text-right text-sm text-white/62">
        {value}
      </p>
    </div>
  );
}