import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BadgeCheck, Clock3, PackageCheck, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/product/ProductGallery";
import { SpecList } from "@/components/product/SpecList";
import { products, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Watch Not Found" };
  }

  return {
    title: product.name,
    description: `${product.name} - ${product.condition}, ${product.includes}. Available from Pure Timepieces Co.`
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <section className="pt-32 pb-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ProductGallery product={product} />

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-champagne">{product.brand}</p>
            <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">{product.name}</h1>
            <p className="mt-6 text-3xl text-platinum">{product.price}</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/66">{product.description}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, label: "Authenticated" },
                { icon: PackageCheck, label: product.includes },
                { icon: BadgeCheck, label: product.condition },
                { icon: Clock3, label: product.availability }
              ].map((item) => (
                <div key={item.label} className="luxury-card rounded-2xl p-4">
                  <item.icon className="mb-3 h-5 w-5 text-champagne" />
                  <p className="text-sm text-white/76">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Ask about this watch</Button>
              <Button href="/sell-trade" variant="secondary">Trade toward it</Button>
            </div>
          </aside>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-champagne">Inspection</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">Condition report</h2>
            <p className="mt-5 text-white/64">
              Every piece is reviewed for visual condition, authenticity, included accessories, and collector value before listing.
            </p>
          </div>
          <SpecList specs={product.specs} />
        </div>
      </Container>
    </section>
  );
}
