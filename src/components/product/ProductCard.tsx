import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group watch-shine luxury-card block overflow-hidden rounded-[2rem] p-4 transition duration-500 hover:-translate-y-1 hover:border-champagne/35">
      <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.5rem] bg-black/45">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/70 backdrop-blur">
          {product.availability}
        </div>
      </div>
      <div className="p-3">
        <p className="text-xs uppercase tracking-[0.28em] text-champagne">{product.brand}</p>
        <h3 className="mt-3 min-h-16 font-display text-2xl leading-none text-platinum">{product.name}</h3>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <p className="text-lg text-white/86">{product.price}</p>
          <p className="text-sm text-white/45">View</p>
        </div>
      </div>
    </Link>
  );
}
