"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "motion/react";
import { Container } from "@/components/ui/Container";

const NAVBAR_HEIGHT = 80;

const checks = [
  {
    key: "case",
    number: "01",
    title: "Case & geometry",
    text: "Proportions, finishing, engravings, crown guards, crystal, and signs of previous refinishing are reviewed.",
    video: "/videos/authentication/case-geometry.mp4"
  },
  {
    key: "dial",
    number: "02",
    title: "Dial & handset",
    text: "Typography, lume, alignment, printing, hands, date aperture, and period correctness are inspected.",
    video: "/videos/authentication/dial-handset.mp4"
  },
  {
    key: "movement",
    number: "03",
    title: "Movement",
    text: "Calibre architecture, serial relationships, function, winding, setting, and performance are considered.",
    video: "/videos/authentication/movement.mp4"
  },
  {
    key: "provenance",
    number: "04",
    title: "Provenance",
    text: "Reference, serial information, ownership details, accessories, service history, and included documentation are assessed.",
    video: "/videos/authentication/provenance.mp4"
  }
] as const;

const markerPositions = [
  "left-[8%] top-[16%]",
  "right-[7%] top-[29%]",
  "left-[10%] bottom-[20%]",
  "right-[8%] bottom-[14%]"
];

export function AuthenticationAtelier() {
  const [active, setActive] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const activeStepRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80px", "end end"]
  });

  const activateStep = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(checks.length - 1, index));

    if (activeStepRef.current === nextIndex) return;

    activeStepRef.current = nextIndex;
    setActive(nextIndex);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = Math.max(0, Math.min(0.999999, latest));

    const nextIndex = Math.floor(progress * checks.length);

    activateStep(nextIndex);
  });

  const scrollToStep = (index: number) => {
    const section = sectionRef.current;

    if (!section) return;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    const stickyViewportHeight =
      window.innerHeight - NAVBAR_HEIGHT;

    const scrollableDistance =
      section.offsetHeight - stickyViewportHeight;

    const stepPosition =
      (index + 0.5) / checks.length;

    window.scrollTo({
      top:
        sectionTop -
        NAVBAR_HEIGHT +
        scrollableDistance * stepPosition,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === active) {
        void video.play().catch(() => {
          // Muted autoplay can still be blocked in some browser states.
        });
      } else {
        video.pause();
      }
    });
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[500svh] bg-[#050505]"
    >
      <div className="sticky top-20 h-[calc(100dvh-5rem)] overflow-hidden bg-[#050505]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_50%,rgba(255,255,255,0.06),transparent_32rem)]" />

        <Container className="relative flex h-full max-w-none items-center px-5 py-4 sm:px-6 lg:px-8 lg:py-6 xl:px-10 2xl:px-12">
          <div className="grid w-full gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center xl:gap-20">
            {/* Interactive footage panel */}
            <div className="relative h-[calc(100dvh-8rem)] min-h-0 max-h-[52rem] overflow-hidden border border-white/[0.075] bg-[#080808]">
              {/* Videos stay mounted so switching is immediate */}
              <div className="absolute inset-0">
                {checks.map((check, index) => (
                  <motion.div
                    key={check.key}
                    initial={false}
                    animate={{
                      opacity: active === index ? 1 : 0,
                      scale: active === index ? 1 : 1.012
                    }}
                    transition={{
                      opacity: {
                        duration: 0.38,
                        ease: [0.22, 1, 0.36, 1]
                      },
                      scale: {
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }}
                    className="absolute inset-0 transform-gpu will-change-[opacity,transform]"
                    style={{
                      pointerEvents:
                        active === index ? "auto" : "none"
                    }}
                  >
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      src={check.video}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-hidden="true"
                      className="h-full w-full object-cover [backface-visibility:hidden]"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Cinematic grading overlays */}
              <div className="pointer-events-none absolute inset-0 bg-black/20" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.28)_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.34)_0%,transparent_32%,transparent_68%,rgba(0,0,0,0.62)_100%)]" />

              <div className="homepage-grid pointer-events-none absolute inset-0 opacity-20" />

              {/* Active footage title */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={checks[active].key}
                  initial={{
                    opacity: 0,
                    y: 8
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -6
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="absolute left-6 top-6 z-20 md:left-8 md:top-8"
                >
                  <p className="text-[0.58rem] uppercase tracking-[0.4em] text-white/45">
                    Authentication detail
                  </p>

                  <div className="mt-3 flex items-center gap-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-black/30 text-[0.58rem] tracking-[0.16em] text-white backdrop-blur-md">
                      {checks[active].number}
                    </span>

                    <p className="font-display text-2xl text-white md:text-3xl">
                      {checks[active].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Interactive markers */}
              <div className="absolute inset-0">
                {checks.map((check, index) => (
                  <button
                    key={check.key}
                    type="button"
                    aria-label={`Show ${check.title} inspection footage`}
                    aria-pressed={active === index}
                    onMouseEnter={() => activateStep(index)}
                    onFocus={() => activateStep(index)}
                    onClick={() => scrollToStep(index)}
                    className={`group absolute ${markerPositions[index]} z-20 flex items-center gap-3 text-left`}
                  >
                    <span
                      className={
                        active === index
                          ? "grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white text-[0.62rem] tracking-[0.18em] text-black shadow-[0_0_35px_rgba(255,255,255,0.16)] transition duration-300"
                          : "grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/45 text-[0.62rem] tracking-[0.18em] text-white/55 backdrop-blur-md transition duration-300 group-hover:border-white/50 group-hover:text-white"
                      }
                    >
                      {check.number}
                    </span>

                    <span
                      className={
                        active === index
                          ? "hidden text-[0.62rem] uppercase tracking-[0.32em] text-white/80 md:block"
                          : "hidden text-[0.62rem] uppercase tracking-[0.32em] text-white/32 transition group-hover:text-white/65 md:block"
                      }
                    >
                      {check.title}
                    </span>
                  </button>
                ))}
              </div>

              <div className="absolute bottom-6 left-6 z-20 text-[0.58rem] uppercase tracking-[0.38em] text-white/35 md:bottom-8 md:left-8">
                Interactive inspection footage
              </div>

              <div className="absolute bottom-6 right-6 z-20 text-[0.58rem] tracking-[0.3em] text-white/28 md:bottom-8 md:right-8">
                {checks[active].number} / 04
              </div>
            </div>

            {/* Editorial content */}
            <div className="min-w-0">
              <p className="text-[0.66rem] uppercase tracking-[0.44em] text-white/30">
                Authentication atelier
              </p>

              <h2 className="mt-5 max-w-3xl font-display text-[clamp(3.9rem,5.8vw,6.6rem)] leading-[0.86] tracking-[-0.06em] text-white">
                Confidence is built beneath the surface.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/44 xl:text-lg xl:leading-8">
                Authentication is not a badge added at the end. It is a
                layered process that informs whether a watch should be
                offered at all.
              </p>

              <div className="mt-6 border-y border-white/[0.09]">
                {checks.map((check, index) => (
                  <button
                    key={check.key}
                    type="button"
                    aria-expanded={active === index}
                    onMouseEnter={() => activateStep(index)}
                    onFocus={() => activateStep(index)}
                    onClick={() => scrollToStep(index)}
                    className="block w-full border-b border-white/[0.08] py-3 text-left last:border-b-0 xl:py-4"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-5">
                        <span
                          className={
                            active === index
                              ? "text-[0.64rem] tracking-[0.28em] text-white/72 transition"
                              : "text-[0.64rem] tracking-[0.28em] text-white/28 transition"
                          }
                        >
                          {check.number}
                        </span>

                        <h3
                          className={
                            active === index
                              ? "font-display text-3xl text-white transition xl:text-4xl"
                              : "font-display text-3xl text-white/38 transition xl:text-4xl"
                          }
                        >
                          {check.title}
                        </h3>
                      </div>

                      <span className="text-xl text-white/28">
                        {active === index ? "—" : "+"}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {active === index && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            gridTemplateRows: "0fr"
                          }}
                          animate={{
                            opacity: 1,
                            gridTemplateRows: "1fr"
                          }}
                          exit={{
                            opacity: 0,
                            gridTemplateRows: "0fr"
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="grid"
                        >
                          <div className="overflow-hidden">
                            <p className="ml-0 mt-3 max-w-xl text-sm leading-6 text-white/46 md:ml-[3.9rem] xl:text-base xl:leading-7">
                              {check.text}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}