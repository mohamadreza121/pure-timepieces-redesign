"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const CLOSING_WATCH_IMAGE = "/images/watches/omega-watch.webp";

export function FinalPrivateSearchCTA() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden border-t border-white/[0.07] bg-[#020202]">
      <div className="homepage-grid absolute inset-0 -z-30 opacity-25" />
      <div className="luxury-noise absolute inset-0 z-10 opacity-[0.035]" />

      {/* Closing watch image */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.08
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        viewport={{
          once: true,
          margin: "-100px"
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="absolute inset-y-0 right-0 -z-20 w-full transform-gpu sm:w-[82%] lg:w-[72%] xl:w-[68%]"
      >
        <Image
          src={CLOSING_WATCH_IMAGE}
          alt="Omega Speedmaster presented by Pure Timepieces"
          fill
          priority={false}
          sizes="(min-width: 1280px) 62vw, (min-width: 1024px) 67vw, (min-width: 640px) 82vw, 100vw"
          className="object-cover object-[58%_center]"
        />
      </motion.div>

      {/* Image grading */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/22" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#020202_0%,rgba(2,2,2,0.98)_25%,rgba(2,2,2,0.82)_43%,rgba(2,2,2,0.28)_70%,rgba(2,2,2,0.12)_100%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,2,2,0.52)_0%,transparent_30%,transparent_68%,rgba(2,2,2,0.78)_100%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_77%_48%,rgba(194,128,70,0.08),transparent_34rem)]" />

      <div className="relative z-20 flex min-h-[92svh] flex-col justify-between px-5 py-10 sm:px-6 lg:px-8 lg:py-14 xl:px-10 2xl:px-12">
        {/* Top information */}
        <div className="flex items-center justify-between">
          <p className="text-[0.64rem] uppercase tracking-[0.44em] text-white/35">
            Private search
          </p>

          <p className="hidden text-[0.62rem] uppercase tracking-[0.34em] text-white/30 md:block">
            Toronto · Available worldwide
          </p>
        </div>

        {/* Main closing statement */}
        <div className="relative max-w-[92rem] py-20">
          <motion.h2
            initial={{
              opacity: 0,
              y: 42
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: "-100px"
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-[10ch] font-display text-[clamp(5rem,10.2vw,13.5rem)] leading-[0.78] tracking-[-0.07em] text-white"
          >
            The right watch
            <br />
            rarely appears twice.
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: "-80px"
            }}
            transition={{
              duration: 0.75,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-12 grid gap-10 border-t border-white/[0.12] pt-8 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <p className="max-w-2xl text-lg leading-8 text-white/52">
              Tell us what you are searching for. We will handle the
              sourcing, verification, negotiation, and delivery privately.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dream-watch"
                className="group inline-flex items-center justify-center gap-3 border border-white/18 bg-white px-6 py-4 text-sm font-medium text-black transition duration-300 hover:bg-white/86"
              >
                Begin a private search

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/16 bg-black/40 px-6 py-4 text-sm text-white/80 backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-white/[0.05] hover:text-white"
              >
                Speak with a specialist

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom information */}
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-6 text-[0.6rem] uppercase tracking-[0.34em] text-white/28">
          <span>Pure Timepieces Co.</span>

          <span className="hidden sm:block">
            Private appointments by request
          </span>
        </div>
      </div>
    </section>
  );
}