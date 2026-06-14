"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function FinalPrivateSearchCTA() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden border-t border-white/[0.07] bg-[#020202]">
      <div className="homepage-grid absolute inset-0 -z-30 opacity-35" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_50%,rgba(255,255,255,0.065),transparent_34rem)]" />
      <div className="luxury-noise absolute inset-0 -z-10 opacity-[0.035]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 190, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-18rem] top-1/2 -z-10 h-[48rem] w-[48rem] -translate-y-1/2 md:right-[-15rem] md:h-[62rem] md:w-[62rem] lg:right-[-10rem] lg:h-[78rem] lg:w-[78rem]"
      >
        <Image
          src="/images/watches/m126610lv-0002_2.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 78rem, (min-width: 768px) 62rem, 48rem"
          className="object-contain opacity-[0.095] grayscale"
        />
      </motion.div>

      <div className="absolute right-[-11rem] top-1/2 -z-10 h-[36rem] w-[36rem] -translate-y-1/2 md:right-[-7rem] md:h-[47rem] md:w-[47rem] lg:right-0 lg:h-[58rem] lg:w-[58rem]">
        <Image
          src="/images/watches/m126610lv-0002_3.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 58rem, (min-width: 768px) 47rem, 36rem"
          className="rotate-90 object-contain opacity-[0.055] grayscale"
        />
      </div>

      <div className="flex min-h-[92svh] flex-col justify-between px-5 py-10 sm:px-6 lg:px-8 lg:py-14 xl:px-10 2xl:px-12">
        <div className="flex items-center justify-between">
          <p className="text-[0.64rem] uppercase tracking-[0.44em] text-white/30">
            Private search
          </p>
          <p className="hidden text-[0.62rem] uppercase tracking-[0.34em] text-white/24 md:block">
            Toronto · Available worldwide
          </p>
        </div>

        <div className="relative z-10 max-w-[92rem] py-20">
          <motion.h2
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(5rem,10.2vw,13.5rem)] leading-[0.78] tracking-[-0.07em] text-white"
          >
            The right watch
            <br />
            rarely appears twice.
          </motion.h2>

          <div className="mt-12 grid gap-10 border-t border-white/[0.12] pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-lg leading-8 text-white/46">
              Tell us what you are searching for. We will handle the sourcing, verification, negotiation, and delivery privately.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dream-watch"
                className="inline-flex items-center justify-center gap-3 border border-white/18 bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-white/86"
              >
                Begin a private search
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/16 bg-black/40 px-6 py-4 text-sm text-white/80 backdrop-blur transition hover:border-white/40 hover:bg-white/[0.05] hover:text-white"
              >
                Speak with a specialist
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] pt-6 text-[0.6rem] uppercase tracking-[0.34em] text-white/24">
          <span>Pure Timepieces Co.</span>
          <span>Private appointments by request</span>
        </div>
      </div>
    </section>
  );
}
