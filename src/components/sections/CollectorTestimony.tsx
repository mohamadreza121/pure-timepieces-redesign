"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { reviews } from "@/lib/reviews";

export function CollectorTestimony() {
  const [active, setActive] = useState(0);
  const selectedReviews = reviews.slice(0, 5);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) =>
        (current + 1) % selectedReviews.length
      );
    }, 7500);

    return () => window.clearInterval(timer);
  }, [selectedReviews.length]);

  const move = (direction: number) => {
    setActive((current) =>
      (current + direction + selectedReviews.length) %
      selectedReviews.length
    );
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#030303]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_56%_48%,rgba(255,255,255,0.045),transparent_38rem)]" />
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-[0.16]" />
      <div className="luxury-noise pointer-events-none absolute inset-0 opacity-[0.025]" />

      <Container className="relative flex min-h-[100svh] max-w-none flex-col px-5 pb-7 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-24 xl:px-10 2xl:px-12">
        <div className="flex shrink-0 items-center justify-between gap-6 border-b border-white/[0.1] pb-4">
          <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/36">
            Collector testimony
          </p>

          <p className="hidden text-[0.55rem] uppercase tracking-[0.31em] text-white/24 sm:block">
            Verified clients · Ontario
          </p>
        </div>

        <div className="my-auto grid items-center gap-9 py-6 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16 xl:gap-24">
          <div className="flex flex-col gap-8">
            <p className="max-w-sm text-base leading-7 text-white/40 xl:text-lg xl:leading-8">
              Private transactions remembered for clarity, trust, and a
              standard of service equal to the watch itself.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous review"
                className="grid h-11 w-11 place-items-center border border-white/[0.12] text-white/55 transition hover:border-white/35 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next review"
                className="grid h-11 w-11 place-items-center border border-white/[0.12] text-white/55 transition hover:border-white/35 hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[0.56rem] tracking-[0.28em] text-white/30">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(selectedReviews.length).padStart(2, "0")}
              </span>
              <span className="h-px w-20 bg-white/[0.12]" />
            </div>
          </div>

          <div className="min-h-[25rem] lg:min-h-[30rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{
                  opacity: 0,
                  y: 24,
                  filter: "blur(9px)"
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)"
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: "blur(9px)"
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <p className="max-w-[20ch] font-display text-[clamp(2.8rem,min(5vw,7.3svh),6.2rem)] leading-[0.91] tracking-[-0.045em] text-white">
                  “{selectedReviews[active].text}”
                </p>

                <footer className="mt-8 flex flex-col justify-between gap-5 border-t border-white/[0.1] pt-5 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-sm font-medium text-white/82">
                      {selectedReviews[active].author}
                    </p>
                    <p className="mt-2 text-[0.56rem] uppercase tracking-[0.32em] text-white/28">
                      Pure Timepieces client
                    </p>
                  </div>

                  <p className="text-sm tracking-[0.22em] text-white/34">
                    ★★★★★
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <Link
              href="/reviews"
              className="group mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm text-white/70 transition hover:border-white/65 hover:text-white"
            >
              Read collector reviews
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-6 border-t border-white/[0.1] pt-4 text-[0.55rem] uppercase tracking-[0.3em] text-white/24">
          <span>Trust through experience</span>
          <span className="hidden sm:block">Clear · Professional · Private</span>
        </div>
      </Container>
    </section>
  );
}
