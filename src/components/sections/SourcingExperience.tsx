"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";

const stages = [
  {
    number: "01",
    title: "Sourced privately",
    text: "Access built through collectors, established dealers, and off-market relationships rather than public listings alone."
  },
  {
    number: "02",
    title: "Verified independently",
    text: "Reference, condition, provenance, movement, accessories, and ownership history are reviewed before presentation."
  },
  {
    number: "03",
    title: "Delivered discreetly",
    text: "Secure payment, insured delivery, and personal guidance are handled with the privacy expected at this level."
  }
];

export function SourcingExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const progress = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActive(Math.min(stages.length - 1, Math.floor(latest * stages.length)));
  });

  return (
    <section ref={sectionRef} className="relative bg-[#080808]">
      <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 xl:gap-28">
          <div className="py-28 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:py-0">
            <div>
              <p className="text-[0.66rem] uppercase tracking-[0.44em] text-white/30">
                The sourcing experience
              </p>
              <h2 className="mt-7 max-w-3xl font-display text-6xl leading-[0.86] tracking-[-0.06em] text-white sm:text-7xl lg:text-[7.5rem]">
                Every timepiece has a history.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/44">
                We verify every part of it before the watch becomes part of yours.
              </p>

              <div className="mt-12 flex items-center gap-4">
                <span className="text-xs tracking-[0.32em] text-white/30">
                  {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
                </span>
                <div className="relative h-px w-40 overflow-hidden bg-white/[0.1]">
                  <motion.div
                    style={{ scaleX: progress, transformOrigin: "0% 50%" }}
                    className="absolute inset-0 bg-white/65"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative pb-28 lg:pb-0">
            <div className="absolute bottom-0 left-[1.35rem] top-0 hidden w-px bg-white/[0.08] lg:block" />
            {stages.map((stage, index) => (
              <article
                key={stage.number}
                className="relative flex min-h-[62vh] items-center border-t border-white/[0.08] py-20 first:border-t-0 lg:min-h-[76vh] lg:pl-24"
              >
                <motion.span
                  animate={{
                    backgroundColor: active === index ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.08)",
                    color: active === index ? "#050505" : "rgba(255,255,255,0.35)",
                    scale: active === index ? 1 : 0.82
                  }}
                  transition={{ duration: 0.45 }}
                  className="absolute left-0 top-20 hidden h-11 w-11 place-items-center rounded-full border border-white/[0.1] text-[0.62rem] tracking-[0.2em] lg:grid"
                >
                  {stage.number}
                </motion.span>

                <motion.div
                  animate={{
                    opacity: active === index ? 1 : 0.28,
                    y: active === index ? 0 : 16
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-xs uppercase tracking-[0.36em] text-white/30 lg:hidden">
                    {stage.number}
                  </p>
                  <h3 className="mt-5 max-w-3xl font-display text-5xl leading-[0.9] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                    {stage.title}
                  </h3>
                  <p className="mt-7 max-w-2xl text-base leading-8 text-white/48 md:text-lg">
                    {stage.text}
                  </p>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
