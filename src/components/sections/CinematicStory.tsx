import Link from "next/link";
import { ArrowUpRight, Volume2 } from "lucide-react";

export function CinematicStory() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden border-y border-white/[0.07] bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/watch-detail-black.svg"
        className="absolute inset-0 h-full w-full object-cover opacity-58"
      >
        <source src="/videos/atelier-film.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.34)_52%,rgba(0,0,0,0.7)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_45%,transparent_0%,rgba(0,0,0,0.16)_40%,rgba(0,0,0,0.75)_100%)]" />
      <div className="luxury-noise absolute inset-0 opacity-[0.04]" />

      <div className="relative z-10 flex min-h-[92svh] flex-col justify-between px-5 py-10 sm:px-6 lg:px-8 lg:py-14 xl:px-10 2xl:px-12">
        <div className="flex items-center justify-between">
          <p className="text-[0.64rem] uppercase tracking-[0.44em] text-white/38">
            Editorial film · 00:34
          </p>
          <div className="flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.34em] text-white/34">
            <Volume2 className="h-3.5 w-3.5" />
            Atmosphere
          </div>
        </div>

        <div className="max-w-5xl pb-10 lg:pb-14">
          <p className="text-[0.66rem] uppercase tracking-[0.44em] text-white/40">
            Beyond ownership
          </p>
          <h2 className="mt-7 font-display text-6xl leading-[0.84] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-[9.2rem]">
            The details become
            <br />
            the legacy.
          </h2>
          <div className="mt-10 flex flex-col gap-8 border-t border-white/[0.14] pt-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-8 text-white/52 md:text-lg">
              A serious timepiece becomes meaningful when its provenance, condition,
              and character are understood—not merely displayed.
            </p>
            <Link
              href="/about"
              className="inline-flex shrink-0 items-center gap-3 border-b border-white/25 pb-2 text-sm text-white/76 transition hover:border-white hover:text-white"
            >
              Enter our world
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
