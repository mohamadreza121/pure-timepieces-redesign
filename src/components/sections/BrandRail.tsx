"use client";

import { motion } from "motion/react";

const brands = [
  { name: "PANERAI", logo: "/images/brands/panerai.svg", scale: "scale-110" },
  { name: "IWC", logo: "/images/brands/iwc.svg", scale: "scale-125" },
  { name: "ROLEX", logo: "/images/brands/rolex.svg", scale: "scale-125" },
  {
    name: "AUDEMARS PIGUET",
    logo: "/images/brands/audemars-piguet.svg",
    scale: "scale-110"
  },
  { name: "OMEGA", logo: "/images/brands/omega.svg", scale: "scale-125" },
  { name: "CARTIER", logo: "/images/brands/cartier.svg", scale: "scale-150" },
  { name: "TUDOR", logo: "/images/brands/tudor.svg", scale: "scale-125" },
  { name: "HUBLOT", logo: "/images/brands/hublot.svg", scale: "scale-100" }
];

const brandLoop = [...brands, ...brands, ...brands];

export function BrandRail() {
  return (
    <section
      aria-label="Watch brands available through Pure Timepieces"
      className="brand-rail-mask overflow-hidden border-b border-white/[0.06] bg-[#050505] py-9"
    >
      <motion.div
        className="brand-marquee flex w-max items-center"
        aria-hidden="true"
      >
        {brandLoop.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="mx-10 flex h-16 w-44 shrink-0 items-center justify-center opacity-42 transition duration-500 hover:opacity-90"
          >
            <img
              src={brand.logo}
              alt=""
              className={`h-11 w-36 object-contain grayscale invert transition duration-500 hover:scale-105 ${brand.scale}`}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
