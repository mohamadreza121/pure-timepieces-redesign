"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";
import { ArrowDown } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";

const HERO_WATCH_IMAGE = "/images/watches/hero-watch-cropped.webp";
const HERO_ROTATING_RING = "/images/watches/m126610lv-0002_2.png";
const HERO_STATIC_DIAL = "/images/watches/m126610lv-0002_3.png";

const headlineLines = [
  "Rare Timepieces.",
  "Privately Sourced.",
  "Fully Authenticated."
];

export function Hero() {
  const [spotlight, setSpotlight] = useState({ x: 70, y: 42 });

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 95,
    damping: 24,
    mass: 0.45
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 95,
    damping: 24,
    mass: 0.45
  });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  const watchX = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const watchY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);

  const ringX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const ringY = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

  return (
    <section
      className="editorial-hero hero-spotlight relative isolate min-h-[100svh] overflow-hidden pt-28 md:pt-32"
      style={
        {
          "--spotlight-x": `${spotlight.x}%`,
          "--spotlight-y": `${spotlight.y}%`
        } as CSSProperties
      }
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;

        pointerX.set(x - 0.5);
        pointerY.set(y - 0.5);
        setSpotlight({
          x: Math.round(x * 100),
          y: Math.round(y * 100)
        });
      }}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
        setSpotlight({ x: 70, y: 42 });
      }}
    >
      <div className="hero-fine-grid absolute inset-0 -z-20 opacity-45" />
      <div className="luxury-noise absolute inset-0 -z-10 opacity-[0.035]" />

      <Container className="relative z-10 grid min-h-[calc(100svh-7rem)] max-w-none items-stretch gap-0 px-3 pb-16 sm:px-5 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:px-6 lg:pb-14 xl:px-8 2xl:px-10">
        <div className="relative z-10 min-w-0 self-end overflow-visible pb-28 sm:pb-32 lg:pb-41">
          <div className="w-full lg:w-[72vw] xl:w-[70vw] 2xl:w-[68vw]">
            <h1 className="font-display text-[clamp(6.25rem,8.6vw,12.3rem)] font-medium leading-[0.755] tracking-[-0.072em] text-white">
              {headlineLines.map((line, index) => (
                <span key={line} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={{
                      y: "112%",
                      opacity: 0,
                      filter: "blur(18px)"
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      filter: "blur(0px)"
                    }}
                    transition={{
                      duration: 1.05,
                      delay: 0.12 + index * 0.14,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={
                      index === 2
                        ? "block text-white/72 lg:whitespace-nowrap"
                        : "block text-white/95 lg:whitespace-nowrap"
                    }
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="relative z-30 min-h-[29rem] min-w-0 self-center md:min-h-[38rem] lg:min-h-[43rem]">
          <div className="hero-studio-halo absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[34rem] md:w-[34rem] lg:h-[39rem] lg:w-[39rem]" />

          <motion.div
            style={{ x: ringX, y: ringY }}
            initial={{
              opacity: 0,
              scale: 0.84,
              rotate: -8,
              filter: "blur(18px)"
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)"
            }}
            transition={{
              duration: 1.15,
              delay: 0.42,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute left-[calc(50%-12px)] top-[calc(46%-4px)] h-[43rem] w-[43rem] -translate-x-1/2 -translate-y-1/2 md:h-[50rem] md:w-[50rem] lg:top-[calc(45%-4px)] lg:h-[58rem] lg:w-[58rem] xl:h-[63rem] xl:w-[63rem]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 120,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -inset-[2px]"
            >
              <Image
                src={HERO_ROTATING_RING}
                alt=""
                fill
                sizes="(min-width: 1280px) 63rem, (min-width: 1024px) 58rem, (min-width: 768px) 50rem, 43rem"
                className="pointer-events-none select-none object-contain opacity-[0.26] brightness-[0.92] contrast-125"
              />
            </motion.div>

            <div className="absolute inset-[10.5%]">
              <Image
                src={HERO_STATIC_DIAL}
                alt=""
                fill
                sizes="(min-width: 1280px) 50rem, (min-width: 1024px) 46rem, (min-width: 768px) 40rem, 34rem"
                className="pointer-events-none select-none object-contain rotate-90 opacity-[0.12] brightness-110 contrast-125"
              />
            </div>
          </motion.div>

          <motion.div
            style={{
              rotateX,
              rotateY,
              x: watchX,
              y: watchY,
              transformPerspective: 1400
            }}
            className="absolute inset-0 z-30 flex items-center justify-center will-change-transform"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hero-watch-frame relative h-[27.5rem] w-[17rem] md:h-[35rem] md:w-[21.5rem] lg:h-[40.5rem] lg:w-[24.75rem]"
            >
              <Image
                src={HERO_WATCH_IMAGE}
                alt="Rolex Submariner featured by Pure Timepieces"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, (min-width: 768px) 46vw, 80vw"
                className="hero-watch-image object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.05,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-3 text-[0.65rem] uppercase tracking-[0.38em] text-white/36 md:flex"
      >
        <span className="relative h-8 w-8 shrink-0">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_ROTATING_RING}
              alt=""
              fill
              sizes="32px"
              className="pointer-events-none select-none object-contain opacity-[0.78]"
            />
          </motion.span>

          <span className="absolute inset-[10.5%]">
            <Image
              src={HERO_STATIC_DIAL}
              alt=""
              fill
              sizes="24px"
              className="pointer-events-none select-none object-contain rotate-90 opacity-[0.42]"
            />
          </span>
        </span>

        Scroll to explore
        <ArrowDown className="h-3.5 w-3.5 text-white/55" />
      </motion.div>
    </section>
  );
}
