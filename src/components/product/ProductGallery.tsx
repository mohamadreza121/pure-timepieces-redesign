import Image from "next/image";
import { Product } from "@/types";

export function ProductGallery({ product }: { product: Product }) {
  const gallery = product.gallery.length > 0 ? product.gallery : [product.image, product.image, product.image];

  return (
    <div className="grid gap-4">
      <div className="luxury-card relative aspect-[1/1.05] overflow-hidden rounded-[2.3rem] p-4">
        <Image src={product.image} alt={product.name} fill priority className="object-cover" />
        <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/52 p-4 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.28em] text-champagne">Pure Timepieces inspection</p>
          <p className="mt-2 text-white/70">High-resolution gallery placeholder. Replace with real watch photography.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {gallery.slice(0, 3).map((image, index) => (
          <div key={`${image}-${index}`} className="relative aspect-square overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5">
            <Image src={image} alt={`${product.name} detail ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
