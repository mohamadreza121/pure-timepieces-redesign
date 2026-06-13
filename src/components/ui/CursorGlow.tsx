"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 22 });

  useEffect(() => {
    setMounted(true);
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 192);
      y.set(event.clientY - 192);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-10 hidden h-96 w-96 rounded-full bg-champagne/10 blur-3xl lg:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
