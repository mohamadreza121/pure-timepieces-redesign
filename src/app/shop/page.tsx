import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop Luxury Watches",
  description: "Browse authenticated luxury watches from Rolex, Omega, Tudor, IWC, Grand Seiko, Audemars Piguet, Cartier, and more."
};

export default function ShopPage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <SectionHeading
          eyebrow="The Vault"
          title="Shop authenticated luxury watches"
          description="A curated inventory of rare, iconic, and collector-worthy pieces. Filter by brand, availability, and price range."
        />
        <ProductGrid products={products} />
      </Container>
    </section>
  );
}
