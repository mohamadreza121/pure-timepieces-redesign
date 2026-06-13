"use client";

import { motion } from "motion/react";

export function Marquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 py-5">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: [0, -900] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="font-display text-3xl text-white/28 md:text-5xl">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
