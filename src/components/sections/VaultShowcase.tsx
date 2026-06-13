"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  "Private network sourcing",
  "Reference and condition review",
  "Authentication and inspection",
  "Collector-ready presentation"
];

export function VaultShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const dialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(dialRef.current, {
        rotate: 220,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.055),transparent_34rem)]" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/35">
              The Vault
            </p>

            <h2 className="mt-5 font-display text-6xl leading-[0.9] text-white md:text-8xl">
              Luxury inventory with a private showroom feeling.
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-white/52">
              Dramatic when discovery begins, precise and effortless when it is
              time to browse.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/shop">Enter the vault</Button>
              <Button href="/dream-watch">Source a piece</Button>
            </div>
          </div>

          <div className="luxury-card relative min-h-[34rem] overflow-hidden rounded-[2.5rem] p-8">
            <div
              ref={dialRef}
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.12]"
            >
              <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-white/45" />
              <div className="absolute inset-10 rounded-full border border-white/[0.07]" />
              <div className="absolute inset-20 rounded-full border border-white/[0.05]" />
            </div>

            <div className="relative z-10 grid h-full content-between gap-5">
              <p className="font-display text-4xl text-white">Vault protocol</p>

              <div className="space-y-4 self-end">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.09] bg-black/45 p-4 backdrop-blur"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-[#080808] text-sm font-semibold text-white/70">
                      {index + 1}
                    </span>
                    <p className="text-white/68">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
