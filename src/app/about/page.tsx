import type { Metadata } from "next";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Pure Timepieces",
  description: "Learn about Pure Timepieces Co., a luxury watch dealer in Aurora, Ontario."
};

export default function AboutPage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Where timeless elegance meets modern sophistication"
          description="Pure Timepieces Co. is located in Aurora, Ontario and specializes in rare, exceptional, and authenticated luxury timepieces for discerning collectors."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Authenticated inventory",
              text: "Every piece is carefully vetted so buyers can purchase with confidence."
            },
            {
              icon: Sparkles,
              title: "Collector-first sourcing",
              text: "The focus is not mass-market volume. It is helping collectors access the right pieces."
            },
            {
              icon: Users,
              title: "Trusted relationships",
              text: "The brand is built on transparent communication, professional service, and long-term clients."
            }
          ].map((item) => (
            <article key={item.title} className="luxury-card rounded-[2rem] p-8">
              <item.icon className="h-8 w-8 text-champagne" />
              <h2 className="mt-8 font-display text-3xl">{item.title}</h2>
              <p className="mt-4 leading-7 text-white/62">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
