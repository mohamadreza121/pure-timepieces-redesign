"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";
import { brands } from "@/lib/site";

export function ProductGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All");
  const [availability, setAvailability] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = `${product.name} ${product.brand} ${product.reference}`.toLowerCase().includes(query.toLowerCase());
      const matchesBrand = brand === "All" || product.brand === brand;
      const matchesAvailability = availability === "All" || product.availability === availability;
      return matchesQuery && matchesBrand && matchesAvailability;
    });
  }, [products, query, brand, availability]);

  return (
    <div>
      <div className="luxury-card mb-8 grid gap-4 rounded-[2rem] p-4 md:grid-cols-[1fr_220px_220px]">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search brand, model, reference..."
          className="rounded-full border border-white/10 bg-black/35 px-5 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-champagne/50"
        />
        <select
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
          className="rounded-full border border-white/10 bg-black/35 px-5 py-3 text-white outline-none focus:border-champagne/50"
        >
          <option>All</option>
          {brands.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          value={availability}
          onChange={(event) => setAvailability(event.target.value)}
          className="rounded-full border border-white/10 bg-black/35 px-5 py-3 text-white outline-none focus:border-champagne/50"
        >
          <option>All</option>
          <option>Available</option>
          <option>Out of stock</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="luxury-card rounded-[2rem] p-10 text-center text-white/58">
          No watches found. Try clearing the filters or submit a dream watch request.
        </div>
      )}
    </div>
  );
}
