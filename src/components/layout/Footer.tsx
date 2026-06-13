import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="font-display text-3xl text-platinum">Pure Timepieces</Link>
            <p className="mt-5 max-w-md leading-7 text-white/56">
              Rare luxury watches, privately sourced, authenticated, and presented for collectors in Aurora, Ontario and across Canada.
            </p>
          </div>

          <FooterColumn title="Quick Links" links={siteConfig.footer.quickLinks} />
          <FooterColumn title="Collections" links={siteConfig.footer.collections} />

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-champagne">Connect</h3>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/58">
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
              <p className="whitespace-pre-line">{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/42 md:flex-row">
          <p>© {new Date().getFullYear()} Pure Timepieces Co. All rights reserved.</p>
          <p>Built for performance, trust, and cinematic luxury ecommerce.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-[0.3em] text-champagne">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm text-white/58">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-champagne">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
