import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about buying, selling, trading, and sourcing luxury watches."
};

const faqs = [
  {
    question: "Are the watches authentic?",
    answer: "Every listed timepiece is reviewed for authenticity, condition, and included accessories before being offered for sale."
  },
  {
    question: "Can I trade my current watch?",
    answer: "Yes. Submit your watch details through the Sell & Trade form and Pure Timepieces can review it for a private offer or trade value."
  },
  {
    question: "Can you source a specific model?",
    answer: "Yes. Use the Dream Watch form to request a specific brand, model, reference, budget, and timeline."
  },
  {
    question: "Where is Pure Timepieces located?",
    answer: "Pure Timepieces Co. is located in Aurora, Ontario. Contact the team to arrange a private appointment."
  }
];

export default function FAQsPage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Customer Care"
          title="Questions before you buy, sell, or trade"
          description="Clear answers for luxury watch buyers and sellers."
        />
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="luxury-card group rounded-3xl p-6">
              <summary className="cursor-pointer list-none font-display text-2xl text-platinum">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-white/64">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
