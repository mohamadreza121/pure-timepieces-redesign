import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  type LucideIcon
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pure Timepieces Co. for private watch sourcing, acquisition, valuation, selling, and trading."
};

export default function ContactPage() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`;
  const emailHref = `mailto:${siteConfig.contact.email}`;

  return (
    <main className="relative isolate overflow-hidden bg-[#030303]">
      {/* Background treatment */}
      <div className="homepage-grid pointer-events-none absolute inset-0 -z-30 opacity-25" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_34%,rgba(255,255,255,0.055),transparent_32rem)]" />

      <div className="pointer-events-none absolute right-0 top-0 -z-20 h-full w-px bg-white/[0.05]" />

      <div className="luxury-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.03]" />

      <section className="min-h-screen pt-32 md:pt-36">
        <Container className="max-w-none px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Intro */}
          <div className="border-b border-white/[0.09] pb-12 md:pb-16">
            <div className="flex items-center justify-between gap-8">
              <p className="text-[0.64rem] uppercase tracking-[0.44em] text-white/30">
                Private contact
              </p>

              <p className="hidden text-[0.62rem] uppercase tracking-[0.34em] text-white/22 md:block">
                Aurora · Toronto · Worldwide
              </p>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <h1 className="max-w-[10ch] font-display text-[clamp(5.5rem,10.6vw,14rem)] leading-[0.76] tracking-[-0.075em] text-white">
                A private
                <br />
                conversation
                <br />
                begins here.
              </h1>

              <div className="max-w-xl lg:pb-3">
                <p className="text-xl leading-9 text-white/48">
                  Ask about current inventory, private sourcing, selling,
                  trading, or arranging an appointment to view a timepiece.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-white/25" />

                  <p className="text-[0.61rem] uppercase tracking-[0.34em] text-white/28">
                    Discreetly handled
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact and form area */}
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* Contact information */}
            <aside className="border-b border-white/[0.09] py-16 lg:border-b-0 lg:border-r lg:py-24 lg:pr-12 xl:pr-20">
              <div className="lg:sticky lg:top-32">
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                  Direct channels
                </p>

                <h2 className="mt-6 max-w-lg font-display text-5xl leading-[0.92] tracking-[-0.045em] text-white md:text-6xl">
                  Speak directly with our acquisition team.
                </h2>

                <div className="mt-12 border-y border-white/[0.09]">
                  <ContactChannel
                    icon={Phone}
                    number="01"
                    label="Telephone"
                    value={siteConfig.contact.phone}
                    href={phoneHref}
                  />

                  <ContactChannel
                    icon={Mail}
                    number="02"
                    label="Email"
                    value={siteConfig.contact.email}
                    href={emailHref}
                  />

                  <ContactChannel
                    icon={MapPin}
                    number="03"
                    label="Private appointments"
                    value={siteConfig.contact.address}
                  />
                </div>

                <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/24">
                      Availability
                    </p>

                    <p className="mt-3 leading-7 text-white/48">
                      Private appointments
                      <br />
                      by request
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.58rem] uppercase tracking-[0.34em] text-white/24">
                      Response
                    </p>

                    <p className="mt-3 leading-7 text-white/48">
                      Typically within
                      <br />
                      one business day
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="py-16 lg:py-24 lg:pl-12 xl:pl-20">
              <div className="flex items-end justify-between gap-10">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">
                    Inquiry details
                  </p>

                  <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.9] tracking-[-0.05em] text-white md:text-6xl xl:text-7xl">
                    Tell us what you are looking for.
                  </h2>
                </div>

                <span className="hidden font-display text-7xl text-white/[0.055] xl:block">
                  01
                </span>
              </div>

              <div className="mt-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

type ContactChannelProps = {
  icon: LucideIcon;
  number: string;
  label: string;
  value: string;
  href?: string;
};

function ContactChannel({
  icon: Icon,
  number,
  label,
  value,
  href
}: ContactChannelProps) {
  const content = (
    <>
      <div className="flex items-start gap-5">
        <span className="pt-1 text-[0.58rem] tracking-[0.3em] text-white/20">
          {number}
        </span>

        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-white/32" />

        <div>
          <p className="text-[0.59rem] uppercase tracking-[0.32em] text-white/26">
            {label}
          </p>

          <p className="mt-3 whitespace-pre-line text-lg leading-7 text-white/72 transition duration-300 group-hover:text-white">
            {value}
          </p>
        </div>
      </div>

      {href && (
        <ArrowUpRight className="h-4 w-4 shrink-0 text-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60" />
      )}
    </>
  );

  const className =
    "group flex items-start justify-between gap-6 border-b border-white/[0.08] py-7 last:border-b-0";

  if (href) {
    return (
      <Link
        href={href}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}