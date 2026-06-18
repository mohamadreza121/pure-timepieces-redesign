import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { reviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Client reviews and private collector experiences with Pure Timepieces Co."
};

export default function ReviewsPage() {
  const featuredReview = reviews[0];
  const remainingReviews = reviews.slice(1);

  return (
    <main className="relative isolate overflow-hidden bg-[#030303]">
      {/* Background treatment */}
      <div className="homepage-grid pointer-events-none absolute inset-0 -z-30 opacity-25" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.055),transparent_34rem)]" />

      <div className="pointer-events-none absolute left-[33%] top-0 -z-20 hidden h-full w-px bg-white/[0.035] lg:block" />

      <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" />

      <section className="min-h-screen pt-32 md:pt-36">
        <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Page introduction */}
          <div className="border-b border-white/[0.09] pb-12 md:pb-16">
            <div className="flex items-center justify-between gap-8">
              <p className="text-[0.64rem] uppercase tracking-[0.44em] text-white/30">
                Client testimony
              </p>

              <p className="hidden text-[0.62rem] uppercase tracking-[0.34em] text-white/22 md:block">
                Trust · Communication · Authenticity
              </p>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <h1 className="max-w-[10ch] font-display text-[clamp(5.5rem,10.6vw,14rem)] leading-[0.76] tracking-[-0.075em] text-white">
                Trust is earned
                <br />
                through every
                <br />
                transaction.
              </h1>

              <div className="max-w-xl lg:pb-3">
                <p className="text-xl leading-9 text-white/48">
                  Experiences shared by buyers, sellers, and collectors who
                  trusted Pure Timepieces with an important acquisition.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-white/25" />

                  <p className="text-[0.61rem] uppercase tracking-[0.34em] text-white/28">
                    Relationships before transactions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Review summary */}
          <div className="grid border-b border-white/[0.09] md:grid-cols-3">
            <ReviewPrinciple
              number="01"
              label="Communication"
              text="Clear, direct guidance throughout each acquisition or sale."
            />

            <ReviewPrinciple
              number="02"
              label="Confidence"
              text="Every timepiece is represented with transparency and care."
              bordered
            />

            <ReviewPrinciple
              number="03"
              label="Discretion"
              text="Private service designed around the collector and the watch."
              bordered
            />
          </div>

          {/* Featured review */}
          {featuredReview && (
            <article className="relative border-b border-white/[0.09] py-20 md:py-28 lg:py-36">
              <Quote className="absolute right-0 top-16 h-24 w-24 text-white/[0.035] md:h-40 md:w-40 lg:top-24" />

              <div className="grid gap-12 lg:grid-cols-[0.32fr_1fr]">
                <div>
                  <p className="text-[0.61rem] uppercase tracking-[0.4em] text-white/26">
                    Featured experience
                  </p>

                  <p className="mt-6 text-[0.62rem] tracking-[0.28em] text-white/38">
                    01 / {String(reviews.length).padStart(2, "0")}
                  </p>

                  <div
                    aria-label="Five-star review"
                    className="mt-8 flex gap-1 text-sm tracking-[0.24em] text-white/52"
                  >
                    <span>★★★★★</span>
                  </div>
                </div>

                <div className="relative z-10">
                  <blockquote className="max-w-[19ch] font-display text-[clamp(3.5rem,6vw,8.5rem)] leading-[0.91] tracking-[-0.055em] text-white">
                    “{featuredReview.text}”
                  </blockquote>

                  <div className="mt-12 flex items-center gap-5 border-t border-white/[0.1] pt-6">
                    <span className="h-px w-12 bg-white/30" />

                    <div>
                      <p className="font-display text-2xl text-white/82">
                        {featuredReview.author}
                      </p>

                      <p className="mt-1 text-[0.58rem] uppercase tracking-[0.34em] text-white/25">
                        Pure Timepieces client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Remaining reviews */}
          {remainingReviews.length > 0 && (
            <div className="grid lg:grid-cols-2">
              {remainingReviews.map((review, index) => (
                <article
                  key={`${review.author}-${index}`}
                  className={[
                    "group relative flex min-h-[32rem] flex-col justify-between border-b border-white/[0.09] py-12",
                    index % 2 === 0
                      ? "lg:border-r lg:pr-12 xl:pr-20"
                      : "lg:pl-12 xl:pl-20"
                  ].join(" ")}
                >
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <p className="text-[0.6rem] tracking-[0.3em] text-white/22">
                        {String(index + 2).padStart(2, "0")} /{" "}
                        {String(reviews.length).padStart(2, "0")}
                      </p>

                      <Quote className="h-7 w-7 text-white/[0.08] transition duration-300 group-hover:text-white/[0.15]" />
                    </div>

                    <div
                      aria-label="Five-star review"
                      className="mt-10 text-sm tracking-[0.24em] text-white/42"
                    >
                      ★★★★★
                    </div>

                    <blockquote className="mt-8 max-w-[22ch] font-display text-4xl leading-[1.02] tracking-[-0.035em] text-white/72 transition duration-300 group-hover:text-white md:text-5xl">
                      “{review.text}”
                    </blockquote>
                  </div>

                  <div className="mt-14 border-t border-white/[0.08] pt-6">
                    <p className="font-display text-2xl text-white/80">
                      {review.author}
                    </p>

                    <p className="mt-2 text-[0.58rem] uppercase tracking-[0.34em] text-white/23">
                      Private client
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Google reviews transition area */}
          <div className="grid border-b border-white/[0.09] border-t border-white/[0.09] py-16 md:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                Independent feedback
              </p>

              <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
                Every relationship contributes to our reputation.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/42">
                Verified Google reviews will appear here as the review
                integration is connected to the website.
              </p>
            </div>

            <div className="mt-10 lg:mt-0 lg:pl-16">
              <div className="border-l border-white/[0.1] pl-6">
                <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/24">
                  Review source
                </p>

                <p className="mt-3 font-display text-3xl text-white/72">
                  Google Business
                </p>

                <p className="mt-2 text-sm leading-6 text-white/30">
                  Live integration coming next
                </p>
              </div>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                Begin your experience
              </p>

              <h2 className="mt-6 max-w-5xl font-display text-[clamp(4.5rem,7.2vw,9.5rem)] leading-[0.84] tracking-[-0.06em] text-white">
                The next story could be yours.
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-3 border border-white bg-white px-7 py-4 text-sm font-medium text-black transition duration-300 hover:bg-white/88"
              >
                Explore the collection

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

type ReviewPrincipleProps = {
  number: string;
  label: string;
  text: string;
  bordered?: boolean;
};

function ReviewPrinciple({
  number,
  label,
  text,
  bordered = false
}: ReviewPrincipleProps) {
  return (
    <div
      className={[
        "py-9 md:px-8 md:py-12 first:pl-0 last:pr-0",
        bordered
          ? "border-t border-white/[0.08] md:border-l md:border-t-0"
          : ""
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-6">
        <span className="text-[0.58rem] tracking-[0.3em] text-white/20">
          {number}
        </span>

        <span className="h-px w-8 bg-white/15" />
      </div>

      <p className="mt-7 font-display text-3xl text-white/78">
        {label}
      </p>

      <p className="mt-3 max-w-sm leading-7 text-white/36">
        {text}
      </p>
    </div>
  );
}