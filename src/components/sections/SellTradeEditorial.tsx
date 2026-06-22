"use client";

import Link from "next/link";
import { type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "motion/react";
import { Container } from "@/components/ui/Container";

const SELL_TRADE_VIDEO = "/videos/sell-trade-rolex-side.mp4";

const steps = [
  {
    number: "01",
    title: "Share the reference",
    text: "Send the model, reference, condition, and a concise set of photographs."
  },
  {
    number: "02",
    title: "Receive a private review",
    text: "We assess market context, completeness, condition, and the best route forward."
  },
  {
    number: "03",
    title: "Choose your outcome",
    text: "Accept a direct offer, explore a trade, or reposition into another timepiece."
  }
];

export function SellTradeFilmScene() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 80,
    damping: 24,
    mass: 0.5
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 80,
    damping: 24,
    mass: 0.5
  });

  const videoX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const videoY = useTransform(smoothY, [-0.5, 0.5], [-7, 7]);
  const videoScale = useTransform(smoothY, [-0.5, 0.5], [1.055, 1.03]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    pointerX.set(x - 0.5);
    pointerY.set(y - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPointer}
      className="group relative min-h-[100svh] overflow-hidden bg-[#050505]"
    >
      <motion.div
        style={{
          x: videoX,
          y: videoY,
          scale: videoScale
        }}
        className="absolute -inset-5 transform-gpu will-change-transform"
      >
        <video
          src={SELL_TRADE_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover [backface-visibility:hidden]"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-black/24" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.22)_52%,rgba(0,0,0,0.5)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.46)_0%,transparent_36%,transparent_58%,rgba(0,0,0,0.88)_100%)]" />
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-[0.16]" />
      <div className="luxury-noise pointer-events-none absolute inset-0 opacity-[0.04]" />

      <Container className="relative flex min-h-[100svh] max-w-none flex-col px-5 pb-7 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-24 xl:px-10 2xl:px-12">
        <div className="flex shrink-0 items-center justify-between gap-6 border-b border-white/[0.12] pb-4">
          <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/42">
            Private acquisition desk
          </p>

          <p className="hidden text-[0.55rem] uppercase tracking-[0.31em] text-white/28 sm:block">
            Sell · Trade · Reposition
          </p>
        </div>

        <div className="my-auto max-w-[90rem] py-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.58rem] uppercase tracking-[0.4em] text-white/40"
          >
            No public listing
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-6 max-w-[11ch] font-display text-[clamp(3.8rem,min(7.2vw,10svh),9.4rem)] leading-[0.78] tracking-[-0.068em] text-white"
          >
            No unnecessary
            <br />
            exposure.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              delay: 0.14,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-8 grid max-w-4xl gap-7 border-t border-white/[0.14] pt-7 md:grid-cols-[1fr_auto] md:items-end"
          >
            <p className="max-w-2xl text-base leading-7 text-white/52 xl:text-lg xl:leading-8">
              Your collection deserves a private market, reviewed by people who
              understand both the watch and the context around it.
            </p>

            <Link
              href="/sell-trade"
              className="group inline-flex items-center gap-3 border-b border-white/28 pb-2 text-sm text-white/78 transition hover:border-white/70 hover:text-white"
            >
              Request a valuation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-6 border-t border-white/[0.12] pt-4 text-[0.55rem] uppercase tracking-[0.3em] text-white/28">
          <span>Discreet by design</span>
          <span className="hidden sm:block">Confidential review</span>
        </div>
      </Container>
    </section>
  );
}

export function SellTradeProcessScene() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#090909]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(173,128,58,0.06),transparent_34rem)]" />
      <div className="homepage-grid pointer-events-none absolute inset-0 opacity-[0.18]" />
      <div className="luxury-noise pointer-events-none absolute inset-0 opacity-[0.025]" />

      <Container className="relative flex min-h-[100svh] max-w-none flex-col px-5 pb-7 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-24 xl:px-10 2xl:px-12">
        <div className="flex shrink-0 items-center justify-between gap-6 border-b border-white/[0.1] pb-4">
          <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/36">
            Sell or trade
          </p>

          <p className="hidden text-[0.55rem] uppercase tracking-[0.31em] text-white/24 sm:block">
            Three private steps
          </p>
        </div>

        <div className="my-auto grid items-center gap-9 py-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-9 bg-[#c7a66a]/45" />
              <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/30">
                Private market access
              </p>
            </div>

            <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(3.2rem,min(5.6vw,8svh),7rem)] leading-[0.82] tracking-[-0.06em] text-white">
              Your collection deserves a considered outcome.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/44 xl:text-lg xl:leading-8">
              Receive a discreet valuation, trade proposal, or direct purchase
              offer without committing the watch to a public listing.
            </p>
          </div>

          <div>
            <div className="border-y border-white/[0.09]">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="group grid gap-4 border-b border-white/[0.08] py-5 last:border-b-0 sm:grid-cols-[3.25rem_1fr] lg:py-6"
                >
                  <span className="pt-1 text-[0.58rem] tracking-[0.28em] text-white/24 transition group-hover:text-[#d6bd8d]/70">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl leading-[0.95] text-white/84 transition group-hover:text-white lg:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/40 xl:text-base xl:leading-7">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/sell-trade"
                className="group inline-flex items-center justify-center gap-3 border border-white bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-white/88"
              >
                Request a private valuation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <p className="max-w-[17rem] text-xs leading-5 text-white/28">
                Confidential review with no obligation to list or sell.
              </p>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-6 border-t border-white/[0.1] pt-4 text-[0.55rem] uppercase tracking-[0.3em] text-white/24">
          <span>Direct purchase · Trade proposal</span>
          <span className="hidden sm:block">No public exposure</span>
        </div>
      </Container>
    </section>
  );
}

export function SellTradeEditorial() {
  return (
    <>
      <SellTradeFilmScene />
      <SellTradeProcessScene />
    </>
  );
}
