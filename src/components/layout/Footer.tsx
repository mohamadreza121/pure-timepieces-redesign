import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#020202] px-5 pb-8 pt-20 sm:px-6 lg:px-8 lg:pt-28 xl:px-10 2xl:px-12">
      <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
        <div>
          <Link href="/" className="inline-block font-display text-[clamp(4.8rem,9vw,12rem)] leading-[0.72] tracking-[-0.07em] text-white/92">
            PURE
            <br />
            TIMEPIECES
          </Link>
          <p className="mt-10 max-w-xl leading-8 text-white/40">
            Rare luxury watches, privately sourced, carefully authenticated, and presented for collectors in Ontario and worldwide.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2">
          <FooterColumn title="Explore" links={siteConfig.footer.quickLinks} />
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">Private contact</p>
            <div className="mt-7 space-y-4 text-sm leading-7 text-white/52">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="block transition hover:text-white">
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="block transition hover:text-white">
                {siteConfig.contact.email}
              </a>
              <p className="whitespace-pre-line">{siteConfig.contact.address}</p>
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm text-white/70 transition hover:border-white/60 hover:text-white">
              Arrange an appointment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/[0.08] pt-7 text-[0.62rem] uppercase tracking-[0.28em] text-white/23 md:flex-row">
        <p>© {new Date().getFullYear()} Pure Timepieces Co.</p>
        <p>Toronto · Aurora · Available worldwide</p>
        <p>Privacy · Terms · Authenticity</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/28">{title}</p>
      <div className="mt-7 grid gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="w-fit font-display text-3xl text-white/52 transition duration-300 hover:translate-x-1 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
