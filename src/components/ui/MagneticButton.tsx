"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  href,
  children,
  className
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 16 });
  const springY = useSpring(y, { stiffness: 180, damping: 16 });

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "inline-flex rounded-full border border-white/[0.14] bg-[#080808] px-8 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:border-white/25 hover:bg-[#141414]",
          className
        )}
        onMouseMove={(event) => {
          const bounds = ref.current?.getBoundingClientRect();
          if (!bounds) return;

          x.set((event.clientX - bounds.left - bounds.width / 2) * 0.18);
          y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        {children}
      </Link>
    </motion.div>
  );
}
