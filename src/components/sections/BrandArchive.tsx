import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brands } from "@/lib/site";

export function BrandArchive() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#030303]">
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-[0.18]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.045),transparent_34rem)]" />
      <div className="luxury-noise pointer-events-none absolute inset-0 opacity-[0.025]" />

      <div className="relative flex min-h-[100svh] flex-col justify-between pb-7 pt-24 lg:pb-8 lg:pt-24">
        <div className="flex items-center justify-between border-b border-white/[0.1] px-5 pb-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/38">
            Houses represented
          </p>

          <p className="hidden text-[0.55rem] uppercase tracking-[0.31em] text-white/24 sm:block">
            Hover to pause · Select to explore
          </p>
        </div>

        <div className="my-auto py-7">
          <div className="px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <p className="max-w-xl text-[0.58rem] uppercase tracking-[0.38em] text-white/28">
              A network without a single-brand limitation
            </p>

            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(3.3rem,min(6.2vw,8.8svh),8rem)] leading-[0.82] tracking-[-0.06em] text-white">
              The right watch can come from any great house.
            </h2>
          </div>

          <div className="brand-archive-mask mt-10 overflow-hidden border-y border-white/[0.08] py-8 lg:mt-12 lg:py-10">
            <div className="brand-archive-track flex w-max items-center">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20"
                >
                  {brands.map((brand) => (
                    <div
                      key={`${group}-${brand}`}
                      className="flex items-center gap-14 md:gap-20"
                    >
                      <Link
                        href={`/shop?brand=${encodeURIComponent(brand)}`}
                        className="group whitespace-nowrap font-display text-5xl tracking-[-0.045em] text-white/20 transition duration-500 hover:text-white/92 sm:text-6xl md:text-7xl lg:text-[6.2rem]"
                      >
                        {brand}
                      </Link>

                      <span
                        className="h-1.5 w-1.5 rounded-full bg-white/18"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-5 px-5 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8 xl:px-10 2xl:px-12">
            <p className="max-w-2xl text-base leading-7 text-white/40 xl:text-lg xl:leading-8">
              From established icons to less obvious collector references, the
              search is guided by the significance of the watch rather than a
              fixed retail catalogue.
            </p>

            <Link
              href="/dream-watch"
              className="group inline-flex w-fit items-center gap-3 border-b border-white/20 pb-2 text-sm text-white/70 transition hover:border-white/65 hover:text-white"
            >
              Start a private search
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.1] px-5 pt-4 text-[0.55rem] uppercase tracking-[0.3em] text-white/24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <span>{String(brands.length).padStart(2, "0")} manufactures</span>
          <span className="hidden sm:block">Independent access</span>
        </div>
      </div>
    </section>
  );
}
