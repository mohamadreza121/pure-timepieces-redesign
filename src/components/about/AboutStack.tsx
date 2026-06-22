"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Gem,
  Handshake,
  MapPin,
  Search,
  ShieldCheck,
  type LucideIcon
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue
} from "motion/react";
import {
  type ReactNode,
  useRef
} from "react";
import { Container } from "@/components/ui/Container";

const SCENE_COUNT = 6;

const principles = [
  {
    number: "01",
    icon: Search,
    title: "Considered sourcing",
    text: "Reputable distributors, established industry partners, private collectors, and off-market opportunities."
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Authenticity first",
    text: "Reference, condition, configuration, documentation, and authenticity are reviewed before presentation."
  },
  {
    number: "03",
    icon: Gem,
    title: "Collector-led curation",
    text: "We focus on important references and compelling configurations rather than mass-market volume."
  },
  {
    number: "04",
    icon: Handshake,
    title: "Long-term relationships",
    text: "Every acquisition, sale, trade, and private search is handled with clarity and discretion."
  }
];

const manufactures = [
  "Rolex",
  "Patek Philippe",
  "Audemars Piguet",
  "Omega",
  "Tudor",
  "Cartier",
  "IWC",
  "Grand Seiko"
];

export function AboutStack() {
  const stackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative isolate bg-[#020202]">
      <div
        ref={stackRef}
        className="relative"
      >
        {/* Scene 01 */}
        <StackScene
          index={0}
          count={SCENE_COUNT}
          progress={scrollYProgress}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/watches/omega-watch.webp"
            className="absolute inset-0 -z-30 h-full w-full object-cover"
          >
            <source
              src="/videos/authentication/case-geometry.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 -z-20 bg-black/46" />

          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,2,2,0.96)_0%,rgba(2,2,2,0.73)_42%,rgba(2,2,2,0.2)_76%,rgba(2,2,2,0.35)_100%)]" />

          <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(2,2,2,0.48)_0%,transparent_32%,transparent_60%,rgba(2,2,2,0.9)_100%)]" />

          <div className="homepage-grid pointer-events-none absolute inset-0 -z-10 opacity-20" />

          <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.04]" />

          <SceneContainer>
            <SceneTop
              eyebrow="About Pure Timepieces"
              detail="Aurora · Ontario · Worldwide"
            />

            <div className="my-auto py-6 lg:py-8">
              <p className="mb-5 text-[0.58rem] uppercase tracking-[0.38em] text-white/42 sm:text-[0.62rem]">
                Timeless horology · Modern private service
              </p>

              <h1 className="max-w-[12ch] font-display text-[clamp(3.4rem,min(6.6vw,9.3svh),8.25rem)] leading-[0.8] tracking-[-0.065em] text-white">
                Built for
                <br />
                collectors who
                <br />
                know the difference.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/58 md:text-lg md:leading-8 xl:text-xl xl:leading-9">
                Rare, exceptional, and authenticated luxury watches for
                collectors who value artistry, heritage, discretion, and
                enduring quality.
              </p>
            </div>

            <SceneBottom
              left="Founded by watch enthusiasts"
              right="Begin the story"
              icon={<ArrowDown className="h-4 w-4" />}
            />
          </SceneContainer>

          <SceneNavigation
            active={0}
            count={SCENE_COUNT}
          />
        </StackScene>

        {/* Scene 02 */}
        <StackScene
          index={1}
          count={SCENE_COUNT}
          progress={scrollYProgress}
          className="bg-[#070707]"
        >
          <div className="homepage-grid pointer-events-none absolute inset-0 -z-20 opacity-20" />

          <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" />

          <SceneContainer>
            <SceneTop
              eyebrow="Our foundation"
              detail="Scene 02"
            />

            <div className="my-auto grid items-center gap-8 py-6 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-4 w-4 text-white/30" />

                  <div>
                    <p className="text-[0.55rem] uppercase tracking-[0.32em] text-white/24">
                      Based in
                    </p>

                    <p className="mt-3 font-display text-4xl leading-[0.92] tracking-[-0.04em] text-white/80 lg:text-5xl">
                      Aurora,
                      <br />
                      Ontario
                    </p>
                  </div>
                </div>

                <div className="mt-7 max-w-md border-t border-white/[0.09] pt-6">
                  <p className="text-[0.55rem] uppercase tracking-[0.32em] text-white/24">
                    Serving
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/44 xl:text-base xl:leading-7">
                    Collectors throughout Canada
                    <br />
                    and through an international network
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.36em] text-white/28">
                  Welcome to Pure Timepieces
                </p>

                <h2 className="mt-5 max-w-[15ch] font-display text-[clamp(2.8rem,min(4.7vw,7.4svh),5.8rem)] leading-[0.88] tracking-[-0.05em] text-white">
                  Inspired by legacy.
                  <br />
                  Defined by precision.
                </h2>

                <div className="mt-6 grid gap-5 border-t border-white/[0.1] pt-5 md:grid-cols-2">
                  <p className="text-base leading-7 text-white/52 xl:text-lg xl:leading-8">
                    Founded by passionate watch enthusiasts, Pure Timepieces
                    was created to connect collectors with meaningful
                    horological creations.
                  </p>

                  <p className="text-base leading-7 text-white/38 xl:text-lg xl:leading-8">
                    We serve a community that values craftsmanship, heritage,
                    exclusivity, and the personal significance behind every
                    watch.
                  </p>
                </div>
              </div>
            </div>

            <SceneBottom
              left="Passion became purpose"
              right="Continue"
            />
          </SceneContainer>

          <SceneNavigation
            active={1}
            count={SCENE_COUNT}
          />
        </StackScene>

        {/* Scene 03 */}
        <StackScene
          index={2}
          count={SCENE_COUNT}
          progress={scrollYProgress}
          className="bg-[#040404]"
        >
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.055),transparent_34rem)]" />

          <div className="homepage-grid pointer-events-none absolute inset-0 -z-20 opacity-15" />

          <SceneContainer>
            <SceneTop
              eyebrow="The difference"
              detail="Scene 03"
            />

            <div className="my-auto py-5 lg:py-6">
              <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                <h2 className="max-w-[11ch] font-display text-[clamp(2.9rem,min(5vw,7.6svh),6.2rem)] leading-[0.85] tracking-[-0.055em] text-white">
                  Access,
                  <br />
                  expertise,
                  <br />
                  and trust.
                </h2>

                <p className="max-w-2xl text-base leading-7 text-white/42 lg:justify-self-end xl:text-lg xl:leading-8">
                  We work across established private channels rather than
                  limiting collectors to one brand, one distributor, or one
                  conventional retail network.
                </p>
              </div>

              <div className="mt-8 grid border-y border-white/[0.09] md:grid-cols-2">
                {principles.map((principle, index) => (
                  <Principle
                    key={principle.number}
                    {...principle}
                    right={index % 2 === 1}
                    bottom={index >= 2}
                  />
                ))}
              </div>
            </div>

            <SceneBottom
              left="Collector-first by design"
              right="Continue"
            />
          </SceneContainer>

          <SceneNavigation
            active={2}
            count={SCENE_COUNT}
          />
        </StackScene>

        {/* Scene 04 */}
        <StackScene
          index={3}
          count={SCENE_COUNT}
          progress={scrollYProgress}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 -z-30 h-full w-full object-cover"
          >
            <source
              src="/videos/authentication/movement.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 -z-20 bg-black/56" />

          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,2,2,0.95)_0%,rgba(2,2,2,0.76)_45%,rgba(2,2,2,0.2)_100%)]" />

          <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(2,2,2,0.42)_0%,transparent_42%,rgba(2,2,2,0.84)_100%)]" />

          <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.04]" />

          <SceneContainer>
            <SceneTop
              eyebrow="Authentication"
              detail="Scene 04"
            />

            <div className="my-auto max-w-[84rem] py-6 lg:py-8">
              <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/42">
                Examined before presentation
              </p>

              <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(3.2rem,min(5.8vw,8.5svh),7.5rem)] leading-[0.8] tracking-[-0.065em] text-white">
                Confidence begins beneath the surface.
              </h2>

              <div className="mt-7 grid max-w-4xl gap-6 border-t border-white/[0.13] pt-6 md:grid-cols-2">
                <p className="text-base leading-7 text-white/54 xl:text-lg xl:leading-8">
                  Every timepiece is reviewed for visual condition,
                  configuration, included accessories, and reference
                  consistency.
                </p>

                <p className="text-base leading-7 text-white/38 xl:text-lg xl:leading-8">
                  Case geometry, dial, handset, movement, provenance, and
                  documentation all contribute to the final assessment.
                </p>
              </div>
            </div>

            <SceneBottom
              left="Authentication without shortcuts"
              right="Continue"
            />
          </SceneContainer>

          <SceneNavigation
            active={3}
            count={SCENE_COUNT}
          />
        </StackScene>

        {/* Scene 05 */}
        <StackScene
          index={4}
          count={SCENE_COUNT}
          progress={scrollYProgress}
          className="bg-[#050505]"
        >
          <div className="absolute inset-y-0 right-0 -z-30 w-full lg:w-[58%]">
            <Image
              src="/images/watches/hero-watch-cropped.webp"
              alt="Luxury watch from the Pure Timepieces collection"
              fill
              quality={95}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain object-right p-5 md:p-10 lg:p-14"
            />
          </div>

          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.98)_34%,rgba(5,5,5,0.72)_56%,rgba(5,5,5,0.12)_100%)]" />

          <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(5,5,5,0.5)_0%,transparent_42%,rgba(5,5,5,0.82)_100%)]" />

          <div className="homepage-grid pointer-events-none absolute inset-0 -z-10 opacity-15" />

          <SceneContainer>
            <SceneTop
              eyebrow="The collection"
              detail="Scene 05"
            />

            <div className="my-auto max-w-4xl py-6 lg:py-8">
              <p className="text-[0.58rem] uppercase tracking-[0.38em] text-white/34">
                Curated beyond brand recognition
              </p>

              <h2 className="mt-6 max-w-[10ch] font-display text-[clamp(3.2rem,min(5.8vw,8.5svh),7.5rem)] leading-[0.81] tracking-[-0.06em] text-white">
                Rare references.
                <br />
                Enduring significance.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/48 xl:text-lg xl:leading-8">
                Configuration, condition, scarcity, provenance, and lasting
                relevance determine whether a watch belongs in our
                collection.
              </p>

              <div className="mt-7 flex max-w-3xl flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.12] pt-6">
                {manufactures.map((brand) => (
                  <span
                    key={brand}
                    className="text-[0.55rem] uppercase tracking-[0.3em] text-white/34"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <SceneBottom
              left="Selected with purpose"
              right="View the vault"
              href="/shop"
            />
          </SceneContainer>

          <SceneNavigation
            active={4}
            count={SCENE_COUNT}
          />
        </StackScene>

        {/* Scene 06 */}
        <StackScene
          index={5}
          count={SCENE_COUNT}
          progress={scrollYProgress}
          className="bg-[#020202]"
        >
          <div className="homepage-grid pointer-events-none absolute inset-0 -z-20 opacity-25" />

          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_45%,rgba(255,255,255,0.06),transparent_34rem)]" />

          <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.035]" />

          <SceneContainer>
            <SceneTop
              eyebrow="Our promise"
              detail="Luxury · Legacy · Trust"
            />

            <div className="my-auto py-6 lg:py-8">
              <h2 className="max-w-[12ch] font-display text-[clamp(3.4rem,min(6.2vw,8.9svh),8rem)] leading-[0.8] tracking-[-0.065em] text-white">
                Trust defines
                <br />
                every transaction.
              </h2>

              <div className="mt-8 grid gap-7 border-t border-white/[0.11] pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="max-w-3xl text-base leading-7 text-white/46 xl:text-lg xl:leading-8">
                  Whether you are building a collection, selling an important
                  piece, trading toward your next reference, or searching for
                  a meaningful gift, every step is handled with care and
                  discretion.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/dream-watch"
                    className="group inline-flex items-center justify-center gap-3 border border-white bg-white px-6 py-3.5 text-sm font-medium text-black transition duration-300 hover:bg-white/88"
                  >
                    Begin a private search

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 border border-white/16 bg-black/30 px-6 py-3.5 text-sm text-white/76 transition duration-300 hover:border-white/40 hover:bg-white/[0.04] hover:text-white"
                  >
                    Speak with a specialist

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            <SceneBottom
              left="Pure Timepieces Co."
              right="Aurora · Available worldwide"
            />
          </SceneContainer>

          <SceneNavigation
            active={5}
            count={SCENE_COUNT}
          />
        </StackScene>
      </div>
    </main>
  );
}

type StackSceneProps = {
  index: number;
  count: number;
  progress: MotionValue<number>;
  children: ReactNode;
  className?: string;
};

function StackScene({
  index,
  count,
  progress,
  children,
  className = ""
}: StackSceneProps) {
  const reduceMotion = useReducedMotion();

  const segment = 1 / Math.max(count - 1, 1);
  const isLastScene = index === count - 1;

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
        "relative min-h-[100svh] origin-top overflow-hidden border-t border-white/[0.08]",
        "shadow-[0_-30px_100px_rgba(0,0,0,0.55)] will-change-transform",
        "lg:sticky lg:top-0 lg:h-[100svh]",
        className
      ].join(" ")}
    >
      {children}
    </motion.section>
  );
}

function SceneContainer({
  children
}: {
  children: ReactNode;
}) {
  return (
    <Container
      className={[
        "relative z-10 flex min-h-[100svh] max-w-none flex-col",
        "px-5 pb-6 pt-20 sm:px-6",
        "lg:h-[100svh] lg:min-h-0 lg:overflow-y-auto",
        "lg:px-8 lg:pb-7 lg:pt-20",
        "xl:px-10 2xl:px-12",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      ].join(" ")}
    >
      {children}
    </Container>
  );
}

type SceneTopProps = {
  eyebrow: string;
  detail: string;
};

function SceneTop({
  eyebrow,
  detail
}: SceneTopProps) {
  return (
    <div className="flex shrink-0 items-center justify-between gap-6 border-b border-white/[0.1] pb-4">
      <p className="text-[0.56rem] uppercase tracking-[0.36em] text-white/38 sm:text-[0.6rem]">
        {eyebrow}
      </p>

      <p className="hidden text-[0.54rem] uppercase tracking-[0.3em] text-white/24 sm:block">
        {detail}
      </p>
    </div>
  );
}

type SceneBottomProps = {
  left: string;
  right: string;
  href?: string;
  icon?: ReactNode;
};

function SceneBottom({
  left,
  right,
  href,
  icon
}: SceneBottomProps) {
  const rightContent = (
    <>
      <span>{right}</span>

      {icon ??
        (href ? (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        ) : null)}
    </>
  );

  return (
    <div className="flex shrink-0 flex-col gap-3 border-t border-white/[0.1] pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <p className="text-[0.54rem] uppercase tracking-[0.3em] text-white/26 sm:text-[0.58rem]">
        {left}
      </p>

      {href ? (
        <Link
          href={href}
          className="group flex items-center gap-3 text-[0.54rem] uppercase tracking-[0.3em] text-white/38 transition hover:text-white sm:text-[0.58rem]"
        >
          {rightContent}
        </Link>
      ) : (
        <div className="flex items-center gap-3 text-[0.54rem] uppercase tracking-[0.3em] text-white/26 sm:text-[0.58rem]">
          {rightContent}
        </div>
      )}
    </div>
  );
}

type PrincipleProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
  right?: boolean;
  bottom?: boolean;
};

function Principle({
  number,
  icon: Icon,
  title,
  text,
  right = false,
  bottom = false
}: PrincipleProps) {
  return (
    <article
      className={[
        "group p-5 md:p-6 lg:p-7",
        right
          ? "md:border-l md:border-white/[0.08]"
          : "",
        bottom
          ? "border-t border-white/[0.08]"
          : ""
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <span className="text-[0.54rem] tracking-[0.28em] text-white/20">
          {number}
        </span>

        <Icon className="h-4 w-4 text-white/24 transition duration-300 group-hover:text-white/58" />
      </div>

      <h3 className="mt-4 font-display text-2xl leading-[0.96] tracking-[-0.03em] text-white/78 transition group-hover:text-white lg:text-3xl">
        {title}
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-white/36">
        {text}
      </p>
    </article>
  );
}

type SceneNavigationProps = {
  active: number;
  count: number;
};

function SceneNavigation({
  active,
  count
}: SceneNavigationProps) {
  return (
    <div className="pointer-events-none absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex xl:right-10">
      {Array.from({
        length: count
      }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-3"
        >
          <span
            className={[
              "text-[0.5rem] tracking-[0.28em] transition",
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