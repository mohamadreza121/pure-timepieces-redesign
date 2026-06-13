import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/products";

export function FeaturedProducts() {
  const featured = products.filter((product) => product.featured).slice(0, 4);

  return (
    <section className="py-24">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Inventory"
            title="Recently added to the vault"
            description="A first look at collector-worthy pieces from the current Pure Timepieces inventory."
            className="mb-0"
          />
          <Button href="/shop" variant="secondary">View all watches</Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
