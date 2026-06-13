"use client";

import { motion } from "motion/react";
import { BadgeCheck, FileCheck, ScanLine, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { icon: ScanLine, title: "Visual inspection", text: "Case, dial, bracelet, crystal, clasp, and signs of wear are reviewed." },
  { icon: FileCheck, title: "Reference check", text: "Reference, accessories, box, and papers are documented when included." },
  { icon: ShieldCheck, title: "Authentication", text: "Each listed piece is vetted before being presented to buyers." },
  { icon: BadgeCheck, title: "Ready to collect", text: "The final listing is built around transparency, condition, and trust." }
];

export function AuthenticationProcess() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Trust System"
          title="A premium watch site must sell confidence first"
          description="For luxury watches, the animation gets attention — but authenticity, condition, and clear process close the sale."
          centered
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.65 }}
              className="luxury-card rounded-[2rem] p-7"
            >
              <step.icon className="h-8 w-8 text-champagne" />
              <h3 className="mt-10 font-display text-3xl">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/56">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
