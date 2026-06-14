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
import { Reveal } from "@/components/ui/Reveal";

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

export function SellTradeEditorial() {
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

  const videoX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const videoY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);
  const videoScale = useTransform(
    smoothY,
    [-0.5, 0.5],
    [1.045, 1.025]
  );


  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - bounds.left) / bounds.width;

    const y =
      (event.clientY - bounds.top) / bounds.height;

    pointerX.set(x - 0.5);
    pointerY.set(y - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-[#090909] py-28 md:py-36 lg:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(173,128,58,0.06),transparent_34rem)]" />

      <Container className="relative max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid overflow-hidden border border-white/[0.08] bg-[#050505] lg:grid-cols-2">
          <Reveal>
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={resetPointer}
              className="group relative min-h-[42rem] overflow-hidden bg-[#050505] lg:min-h-[58rem]"
            >
              <motion.div
                style={{
                  x: videoX,
                  y: videoY,
                  scale: videoScale
                }}
                className="absolute -inset-4 transform-gpu will-change-transform"
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

              <div className="pointer-events-none absolute inset-0 bg-black/18" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.03)_48%,rgba(0,0,0,0.42)_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_32%,transparent_56%,rgba(0,0,0,0.82)_100%)]" />

              <div className="pointer-events-none absolute inset-5 z-10 border border-white/[0.055] md:inset-7" />

              <div className="pointer-events-none absolute left-7 top-7 z-20 hidden items-center gap-4 md:flex">
                <span className="h-px w-10 bg-white/25" />

                <span className="text-[0.58rem] uppercase tracking-[0.4em] text-white/42">
                  Private valuation study
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 p-7 md:p-10 lg:p-12">
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/40">
                  Private acquisition desk
                </p>

                <p className="mt-4 max-w-lg font-display text-4xl leading-[0.95] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
                  No public listing. No unnecessary exposure.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-12 bg-white/30" />

                  <span className="text-[0.58rem] uppercase tracking-[0.35em] text-white/40">
                    Discreet by design
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Editorial content */}
          <div className="flex flex-col justify-between bg-[#050505] p-7 md:p-10 lg:p-12 xl:p-16">
            <Reveal delay={0.08}>
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-9 bg-[#c7a66a]/45" />

                  <p className="text-[0.66rem] uppercase tracking-[0.44em] text-white/30">
                    Sell or trade
                  </p>
                </div>

                <h2 className="mt-7 max-w-3xl font-display text-6xl leading-[0.86] tracking-[-0.06em] text-white sm:text-7xl xl:text-[7.4rem]">
                  Your collection deserves a private market.
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-8 text-white/44">
                  Receive a discreet valuation, trade proposal, or direct
                  purchase offer from a team that understands both the
                  watch and its market.
                </p>
              </div>
            </Reveal>

            <div className="mt-16">
              <div className="border-y border-white/[0.09]">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="group grid gap-4 border-b border-white/[0.08] py-6 last:border-b-0 md:grid-cols-[3rem_1fr]"
                  >
                    <span className="pt-1 text-[0.62rem] tracking-[0.28em] text-white/27 transition duration-300 group-hover:text-[#d6bd8d]/70">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-display text-3xl text-white/86 transition duration-300 group-hover:text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-lg leading-7 text-white/42">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/sell-trade"
                  className="group inline-flex items-center gap-3 border border-white/[0.15] bg-black px-6 py-4 text-sm text-white/82 transition duration-300 hover:border-[#c7a66a]/55 hover:bg-[#c7a66a]/[0.06] hover:text-white"
                >
                  Request a private valuation

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <p className="max-w-[15rem] text-xs leading-5 text-white/28">
                  Confidential review with no obligation to list or sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}