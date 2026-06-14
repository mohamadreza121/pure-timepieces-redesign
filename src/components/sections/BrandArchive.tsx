import Link from "next/link";
import { brands } from "@/lib/site";

export function BrandArchive() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#030303] py-24 md:py-32">
      <div className="mb-12 flex items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <p className="text-[0.64rem] uppercase tracking-[0.44em] text-white/30">
          Houses represented
        </p>
        <p className="hidden text-xs text-white/25 md:block">Hover to pause · Select to explore</p>
      </div>

      <div className="brand-archive-mask overflow-hidden">
        <div className="brand-archive-track flex w-max items-center">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24">
              {brands.map((brand, index) => (
                <div key={`${group}-${brand}`} className="flex items-center gap-16 md:gap-24">
                  <Link
                    href={`/shop?brand=${encodeURIComponent(brand)}`}
                    className="group whitespace-nowrap font-display text-5xl tracking-[-0.04em] text-white/20 transition duration-500 hover:text-white/92 sm:text-6xl md:text-7xl lg:text-[6.5rem]"
                  >
                    {brand}
                  </Link>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/18" aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
