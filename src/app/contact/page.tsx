import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Pure Timepieces Co. in Aurora, Ontario."
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Book a private conversation"
          description="Ask about inventory, selling, trading, sourcing, or arranging a private watch viewing."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="luxury-card rounded-[2rem] p-8">
            <div className="space-y-7">
              <ContactRow icon={Phone} label="Phone" value={siteConfig.contact.phone} />
              <ContactRow icon={Mail} label="Email" value={siteConfig.contact.email} />
              <ContactRow icon={MapPin} label="Address" value={siteConfig.contact.address} />
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne/10 text-champagne">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/42">{label}</p>
        <p className="mt-1 whitespace-pre-line text-white/76">{value}</p>
      </div>
    </div>
  );
}
