import type { Metadata } from "next";
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
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Pure Timepieces",
  description:
    "Discover Pure Timepieces Co., a private luxury watch dealer based in Aurora, Ontario, serving collectors across Canada and worldwide."
};

const principles = [
  {
    number: "01",
    icon: Search,
    title: "Considered sourcing",
    text: "Our inventory is sourced through reputable independent distributors, private collectors, and long-standing industry relationships."
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Authenticity without compromise",
    text: "Every timepiece is carefully reviewed for reference consistency, condition, configuration, included accessories, and authenticity."
  },
  {
    number: "03",
    icon: Gem,
    title: "Collector-first selection",
    text: "We do not pursue mass-market volume. We focus on significant watches, compelling configurations, and pieces with lasting collector appeal."
  },
  {
    number: "04",
    icon: Handshake,
    title: "Relationships beyond transactions",
    text: "Clear communication, discretion, and long-term trust guide every purchase, sale, trade, and private search."
  }
];

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#030303]">
      {/* Cinematic hero */}
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-white/[0.08]">
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
            src="/videos/about-pure-timepieces.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 -z-20 bg-black/42" />

        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,2,2,0.96)_0%,rgba(2,2,2,0.76)_38%,rgba(2,2,2,0.25)_72%,rgba(2,2,2,0.42)_100%)]" />

        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(2,2,2,0.55)_0%,transparent_30%,transparent_60%,rgba(2,2,2,0.88)_100%)]" />

        <div className="homepage-grid pointer-events-none absolute inset-0 -z-10 opacity-20" />
        <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.04]" />

        <Container className="flex min-h-[100svh] max-w-none flex-col justify-between px-5 pb-10 pt-32 sm:px-6 lg:px-8 lg:pb-14 lg:pt-36 xl:px-10 2xl:px-12">
          <div className="flex items-center justify-between gap-8">
            <p className="text-[0.64rem] uppercase tracking-[0.44em] text-white/46">
              About Pure Timepieces
            </p>

            <p className="hidden text-[0.62rem] uppercase tracking-[0.34em] text-white/34 md:block">
              Aurora · Ontario · Worldwide
            </p>
          </div>

          <div className="max-w-[94rem] py-20">
            <p className="mb-8 max-w-xl text-[0.64rem] uppercase tracking-[0.42em] text-white/42">
              Where timeless horology meets modern private service
            </p>

            <h1 className="max-w-[10ch] font-display text-[clamp(5.5rem,10.7vw,14rem)] leading-[0.76] tracking-[-0.075em] text-white">
              Built for
              <br />
              collectors who
              <br />
              know the difference.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/56 md:text-xl md:leading-9">
              Pure Timepieces brings rare, exceptional, and authenticated
              luxury watches to collectors who value artistry, heritage,
              discretion, and enduring quality.
            </p>
          </div>

          <div className="flex items-end justify-between border-t border-white/[0.12] pt-6">
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/28">
                Founded by watch enthusiasts
              </p>

              <p className="mt-2 text-sm text-white/46">
                Serving collectors privately from Aurora, Ontario
              </p>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <span className="text-[0.58rem] uppercase tracking-[0.34em] text-white/28">
                Discover our story
              </span>

              <ArrowDown className="h-4 w-4 text-white/36" />
            </div>
          </div>
        </Container>
      </section>

      {/* Brand introduction */}
      <section className="relative border-b border-white/[0.09]">
        <div className="homepage-grid pointer-events-none absolute inset-0 -z-20 opacity-20" />
        <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" />

        <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid lg:grid-cols-[0.38fr_1fr]">
            <div className="border-b border-white/[0.09] py-16 lg:border-b-0 lg:border-r lg:py-28 lg:pr-12 xl:pr-20">
              <div className="lg:sticky lg:top-32">
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                  Our foundation
                </p>

                <div className="mt-10 flex items-start gap-4">
                  <MapPin className="mt-1 h-4 w-4 text-white/30" />

                  <div>
                    <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/22">
                      Based in
                    </p>

                    <p className="mt-3 font-display text-3xl leading-tight text-white/78">
                      Aurora,
                      <br />
                      Ontario
                    </p>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/[0.09] pt-8">
                  <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/22">
                    Serving
                  </p>

                  <p className="mt-3 leading-7 text-white/46">
                    Canada
                    <br />
                    International collectors
                    <br />
                    Private appointments
                  </p>
                </div>
              </div>
            </div>

            <div className="py-16 lg:py-28 lg:pl-12 xl:pl-20">
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                Welcome to Pure Timepieces
              </p>

              <h2 className="mt-8 max-w-[15ch] font-display text-[clamp(4rem,6.5vw,8.5rem)] leading-[0.87] tracking-[-0.055em] text-white">
                Inspired by legacy. Defined by precision.
              </h2>

              <div className="mt-12 grid gap-10 border-t border-white/[0.09] pt-10 md:grid-cols-2">
                <p className="text-lg leading-8 text-white/52">
                  Founded by passionate watch enthusiasts, Pure Timepieces was
                  created to share the world’s finest horological creations
                  with collectors who value craftsmanship, heritage, and
                  exclusivity.
                </p>

                <p className="text-lg leading-8 text-white/42">
                  Our collection brings together iconic references, modern
                  collector pieces, and carefully sourced opportunities from
                  prestigious manufactures across the luxury watch world.
                </p>
              </div>

              <blockquote className="mt-20 max-w-[20ch] border-l border-white/20 pl-8 font-display text-4xl leading-[1.02] tracking-[-0.04em] text-white/72 md:text-5xl lg:text-6xl">
                “Luxury is not defined by abundance. It is defined by the
                importance of the piece.”
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* The difference */}
      <section className="border-b border-white/[0.09]">
        <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid border-b border-white/[0.09] py-16 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:py-24">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                The Pure Timepieces difference
              </p>

              <h2 className="mt-7 max-w-[12ch] font-display text-[clamp(4.5rem,7.5vw,10rem)] leading-[0.83] tracking-[-0.06em] text-white">
                Access, expertise, and trust.
              </h2>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/42 lg:mt-0 lg:pb-2">
              Unlike traditional authorized retailers limited to a single
              network, we work across multiple trusted channels to locate
              meaningful watches and privately present them to our clients.
            </p>
          </div>

          <div>
            {principles.map((principle) => (
              <PrincipleRow
                key={principle.number}
                {...principle}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Collection editorial */}
      <section className="relative border-b border-white/[0.09]">
        <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[42rem] overflow-hidden border-b border-white/[0.09] bg-[#070707] lg:min-h-[58rem] lg:border-b-0 lg:border-r">
              <div className="homepage-grid pointer-events-none absolute inset-0 opacity-20" />

              <Image
                src="/images/watches/hero-watch-cropped.webp"
                alt="Luxury watch from the Pure Timepieces collection"
                fill
                quality={95}
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-contain p-8 md:p-14 lg:p-20"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.58)_100%)]" />

              <div className="absolute left-7 top-7 flex items-center gap-4">
                <span className="h-px w-10 bg-white/25" />

                <span className="text-[0.58rem] uppercase tracking-[0.36em] text-white/34">
                  The collection
                </span>
              </div>

              <p className="absolute bottom-8 left-8 max-w-md font-display text-4xl leading-[0.95] tracking-[-0.04em] text-white md:text-5xl">
                Rare references.
                <br />
                Enduring significance.
              </p>
            </div>

            <div className="flex flex-col justify-between py-16 lg:py-24 lg:pl-12 xl:pl-20">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                  Our collection
                </p>

                <h2 className="mt-7 max-w-[12ch] font-display text-5xl leading-[0.9] tracking-[-0.05em] text-white md:text-7xl">
                  Curated beyond brand recognition.
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-8 text-white/44">
                  From Rolex, Patek Philippe, Audemars Piguet, Omega, Tudor,
                  Cartier, IWC, and beyond, every watch is selected for more
                  than its name.
                </p>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/36">
                  Configuration, condition, scarcity, provenance, and lasting
                  relevance all contribute to whether a timepiece belongs in
                  the Pure Timepieces collection.
                </p>
              </div>

              <div className="mt-16 border-y border-white/[0.09]">
                <CollectionDetail
                  number="01"
                  label="Iconic manufactures"
                  value="Established names with lasting horological relevance"
                />

                <CollectionDetail
                  number="02"
                  label="Rare configurations"
                  value="Distinct references, dials, materials, and production variants"
                />

                <CollectionDetail
                  number="03"
                  label="Private opportunities"
                  value="Pieces sourced beyond conventional public inventory"
                />
              </div>

              <Link
                href="/shop"
                className="group mt-10 inline-flex items-center justify-between border border-white bg-white px-7 py-4 text-sm font-medium text-black transition duration-300 hover:bg-white/88"
              >
                Explore the current collection

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Promise */}
      <section className="relative">
        <div className="homepage-grid pointer-events-none absolute inset-0 -z-20 opacity-20" />

        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_48%,rgba(255,255,255,0.055),transparent_34rem)]" />

        <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" />

        <Container className="max-w-none px-5 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-36 xl:px-10 2xl:px-12">
          <div className="flex items-center justify-between">
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
              Our promise
            </p>

            <span className="hidden text-[0.58rem] uppercase tracking-[0.34em] text-white/20 md:block">
              Luxury · Legacy · Trust
            </span>
          </div>

          <h2 className="mt-10 max-w-[13ch] font-display text-[clamp(5rem,9.2vw,12.5rem)] leading-[0.79] tracking-[-0.07em] text-white">
            Trust defines
            <br />
            every transaction.
          </h2>

          <div className="mt-14 grid gap-10 border-t border-white/[0.11] pt-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-3xl text-lg leading-8 text-white/44">
              Whether you are building a collection, selling an important
              piece, trading toward your next reference, or searching for a
              meaningful gift, we provide a refined and considered experience
              from first conversation to final delivery.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dream-watch"
                className="group inline-flex items-center justify-center gap-3 border border-white bg-white px-7 py-4 text-sm font-medium text-black transition duration-300 hover:bg-white/88"
              >
                Begin a private search

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/16 bg-black/30 px-7 py-4 text-sm text-white/76 transition duration-300 hover:border-white/40 hover:bg-white/[0.04] hover:text-white"
              >
                Speak with a specialist

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

type PrincipleRowProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
};

function PrincipleRow({
  number,
  icon: Icon,
  title,
  text
}: PrincipleRowProps) {
  return (
    <article className="group grid gap-8 border-b border-white/[0.09] py-10 last:border-b-0 md:grid-cols-[4rem_0.7fr_1fr_auto] md:items-center md:py-14">
      <span className="text-[0.58rem] tracking-[0.3em] text-white/20">
        {number}
      </span>

      <div className="flex items-center gap-4">
        <Icon className="h-5 w-5 text-white/24 transition duration-300 group-hover:text-white/58" />

        <h3 className="font-display text-3xl leading-tight text-white/76 transition duration-300 group-hover:text-white md:text-4xl">
          {title}
        </h3>
      </div>

      <p className="max-w-2xl leading-7 text-white/38">
        {text}
      </p>

      <span className="hidden h-px w-10 bg-white/15 transition duration-300 group-hover:w-16 group-hover:bg-white/35 md:block" />
    </article>
  );
}

type CollectionDetailProps = {
  number: string;
  label: string;
  value: string;
};

function CollectionDetail({
  number,
  label,
  value
}: CollectionDetailProps) {
  return (
    <div className="grid gap-4 border-b border-white/[0.08] py-6 last:border-b-0 sm:grid-cols-[3rem_0.72fr_1fr] sm:items-start">
      <span className="text-[0.57rem] tracking-[0.3em] text-white/18">
        {number}
      </span>

      <p className="text-[0.58rem] uppercase tracking-[0.3em] text-white/30">
        {label}
      </p>

      <p className="leading-7 text-white/48">
        {value}
      </p>
    </div>
  );
}