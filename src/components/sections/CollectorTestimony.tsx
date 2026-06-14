"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { reviews } from "@/lib/reviews";

export function CollectorTestimony() {
  const [active, setActive] = useState(0);
  const selectedReviews = reviews.slice(0, 5);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % selectedReviews.length);
    }, 7500);

    return () => window.clearInterval(timer);
  }, [selectedReviews.length]);

  const move = (direction: number) => {
    setActive((current) => (current + direction + selectedReviews.length) % selectedReviews.length);
  };

  return (
    <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#030303] py-28 md:py-36 lg:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_38rem)]" />

      <Container className="relative max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.28fr_0.72fr] lg:gap-20">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="text-[0.66rem] uppercase tracking-[0.44em] text-white/30">
                Collector testimony
              </p>
              <p className="mt-6 max-w-xs leading-7 text-white/40">
                Private transactions remembered for clarity, trust, and a standard of service equal to the watch itself.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous review"
                className="grid h-12 w-12 place-items-center border border-white/[0.12] text-white/55 transition hover:border-white/35 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next review"
                className="grid h-12 w-12 place-items-center border border-white/[0.12] text-white/55 transition hover:border-white/35 hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <div className="min-h-[28rem] md:min-h-[32rem]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, filter: "blur(10px)" }}
                  transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-display text-5xl leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[6.3rem]">
                    “{selectedReviews[active].text}”
                  </p>
                  <footer className="mt-10 flex flex-col justify-between gap-5 border-t border-white/[0.1] pt-6 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-sm font-medium text-white/82">{selectedReviews[active].author}</p>
                      <p className="mt-2 text-[0.62rem] uppercase tracking-[0.34em] text-white/30">
                        Verified client · Ontario
                      </p>
                    </div>
                    <p className="text-xs tracking-[0.26em] text-white/30">
                      {String(active + 1).padStart(2, "0")} / {String(selectedReviews.length).padStart(2, "0")}
                    </p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <Link
              href="/reviews"
              className="mt-8 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm text-white/70 transition hover:border-white/65 hover:text-white"
            >
              Read collector reviews
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
