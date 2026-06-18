import type { Metadata } from "next";
import {
  ArrowLeftRight,
  BadgeDollarSign,
  Camera,
  ShieldCheck
} from "lucide-react";
import { SellTradeForm } from "@/components/forms/SellTradeForm";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Sell or Trade Your Watch",
  description:
    "Request a discreet private offer for your luxury watch or trade toward your next timepiece."
};

const process = [
  {
    number: "01",
    icon: Camera,
    title: "Share the details",
    text: "Provide the reference, condition, accessories, history, and a clear set of photographs."
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Private assessment",
    text: "We review authenticity indicators, condition, completeness, provenance, and current market context."
  },
  {
    number: "03",
    icon: BadgeDollarSign,
    title: "Receive an offer",
    text: "A direct purchase proposal or estimated trade value is prepared privately."
  },
  {
    number: "04",
    icon: ArrowLeftRight,
    title: "Choose the outcome",
    text: "Sell directly, apply the value toward another watch, or decline without a public listing."
  }
];

export default function SellTradePage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#030303]">
      {/* Background */}
      <div className="homepage-grid pointer-events-none absolute inset-0 -z-30 opacity-25" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_26%,rgba(255,255,255,0.055),transparent_34rem)]" />

      <div className="pointer-events-none absolute right-[30%] top-0 -z-20 h-full w-px bg-white/[0.035]" />

      <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" />

      <section className="min-h-screen pt-32 md:pt-36">
        <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Page introduction */}
          <div className="border-b border-white/[0.09] pb-12 md:pb-16">
            <div className="flex items-center justify-between gap-8">
              <p className="text-[0.64rem] uppercase tracking-[0.44em] text-white/30">
                Private acquisition
              </p>

              <p className="hidden text-[0.62rem] uppercase tracking-[0.34em] text-white/22 md:block">
                Sell · Trade · Reposition
              </p>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.38fr_0.62fr] lg:items-end">
              <h1 className="max-w-[10ch] font-display text-[clamp(5.5rem,10.6vw,14rem)] leading-[0.76] tracking-[-0.075em] text-white">
                Your watch
                <br />
                deserves a
                <br />
                private market.
              </h1>

              <div className="max-w-xl lg:pb-3">
                <p className="text-xl leading-9 text-white/48">
                  Receive a discreet purchase offer, trade proposal, or market
                  assessment without publicly listing your timepiece.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-white/25" />

                  <p className="text-[0.61rem] uppercase tracking-[0.34em] text-white/28">
                    No unnecessary exposure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process and form */}
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* Acquisition process */}
            <aside className="border-b border-white/[0.09] py-16 lg:border-b-0 lg:border-r lg:py-24 lg:pr-12 xl:pr-20">
              <div className="lg:sticky lg:top-32">
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                  The private process
                </p>

                <h2 className="mt-6 max-w-lg font-display text-5xl leading-[0.92] tracking-[-0.045em] text-white md:text-6xl">
                  A considered review, without the public listing.
                </h2>

                <p className="mt-6 max-w-lg leading-7 text-white/40">
                  We assess each timepiece individually and recommend the most
                  appropriate route based on condition, completeness, demand,
                  and your preferred outcome.
                </p>

                <div className="mt-12 border-y border-white/[0.09]">
                  {process.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.number}
                        className="group grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/[0.08] py-7 last:border-b-0"
                      >
                        <span className="pt-1 text-[0.58rem] tracking-[0.3em] text-white/20">
                          {step.number}
                        </span>

                        <div>
                          <div className="flex items-center gap-3">
                            <Icon className="h-4 w-4 text-white/28 transition duration-300 group-hover:text-white/60" />

                            <h3 className="font-display text-2xl text-white/72 transition duration-300 group-hover:text-white">
                              {step.title}
                            </h3>
                          </div>

                          <p className="mt-3 max-w-md leading-7 text-white/38">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/24">
                      Privacy
                    </p>

                    <p className="mt-3 leading-7 text-white/48">
                      No public listing
                      <br />
                      No unnecessary exposure
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/24">
                      Options
                    </p>

                    <p className="mt-3 leading-7 text-white/48">
                      Direct purchase
                      <br />
                      Trade proposal
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Watch submission form */}
            <div className="py-16 lg:py-24 lg:pl-12 xl:pl-20">
              <div className="flex items-end justify-between gap-10">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                    Watch submission
                  </p>

                  <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.9] tracking-[-0.05em] text-white md:text-6xl xl:text-7xl">
                    Tell us about the timepiece.
                  </h2>

                  <p className="mt-6 max-w-2xl leading-7 text-white/40">
                    Provide the information available today. Additional
                    photographs and documentation can be requested during the
                    private review.
                  </p>
                </div>

                <span className="hidden font-display text-7xl text-white/[0.055] xl:block">
                  01
                </span>
              </div>

              <div className="mt-12">
                <SellTradeForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}