"use client";

import {
  Children,
  type ReactNode,
  useRef
} from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue
} from "motion/react";

type HomeStackProps = {
  children: ReactNode;
  className?: string;
};

export function HomeStack({
  children,
  className = ""
}: HomeStackProps) {
  const stackRef = useRef<HTMLDivElement>(null);
  const scenes = Children.toArray(children);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"]
  });

  if (scenes.length === 0) {
    return null;
  }

  return (
    <div
      ref={stackRef}
      className={[
        "relative isolate bg-[#020202]",
        className
      ].join(" ")}
    >
      {scenes.map((scene, index) => (
        <HomeStackScene
          key={index}
          index={index}
          count={scenes.length}
          progress={scrollYProgress}
        >
          {scene}
        </HomeStackScene>
      ))}
    </div>
  );
}

type HomeStackSceneProps = {
  index: number;
  count: number;
  progress: MotionValue<number>;
  children: ReactNode;
};

function HomeStackScene({
  index,
  count,
  progress,
  children
}: HomeStackSceneProps) {
  const reduceMotion = useReducedMotion();
  const isLastScene = index === count - 1;
  const segment = 1 / Math.max(count - 1, 1);

  const start = isLastScene
    ? Math.max(0, 1 - segment)
    : Math.min(index * segment, 1);

  const end = isLastScene
    ? 1
    : Math.min(start + segment, 1);

  const scale = useTransform(
    progress,
    [start, end],
    isLastScene ? [1, 1] : [1, 0.965]
  );

  const opacity = useTransform(
    progress,
    [start, end],
    isLastScene ? [1, 1] : [1, 0.68]
  );

  const y = useTransform(
    progress,
    [start, end],
    isLastScene ? [0, 0] : [0, -18]
  );

  return (
    <motion.section
      style={
        reduceMotion
          ? {
              zIndex: index + 1
            }
          : {
              zIndex: index + 1,
              scale,
              opacity,
              y
            }
      }
      className={[
        "relative min-h-[100svh] origin-top overflow-hidden",
        "border-t border-white/[0.08] bg-[#020202]",
        "shadow-[0_-30px_100px_rgba(0,0,0,0.55)]",
        "will-change-transform",
        "lg:sticky lg:top-0 lg:h-[100svh]"
      ].join(" ")}
    >
      {children}

      <StackNavigation
        active={index}
        count={count}
      />
    </motion.section>
  );
}

type StackNavigationProps = {
  active: number;
  count: number;
};

function StackNavigation({
  active,
  count
}: StackNavigationProps) {
  return (
    <div className="pointer-events-none absolute right-6 top-1/2 z-[70] hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex xl:right-10">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-3"
        >
          <span
            className={[
              "text-[0.5rem] tracking-[0.28em] transition duration-500",
              index === active
                ? "text-white/56"
                : "text-white/16"
            ].join(" ")}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className={[
              "h-px transition-all duration-500",
              index === active
                ? "w-10 bg-white/60"
                : "w-4 bg-white/16"
            ].join(" ")}
          />
        </div>
      ))}
    </div>
  );
}
