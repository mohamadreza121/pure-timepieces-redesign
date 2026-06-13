import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer reviews for Pure Timepieces Co."
};

export default function ReviewsPage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="Verified quality and premium experience"
          description="Real buyer feedback highlighting trust, communication, authenticity, and smooth transactions."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.author} className="luxury-card rounded-[2rem] p-7">
              <p className="text-2xl text-champagne">★★★★★</p>
              <p className="mt-6 leading-8 text-white/72">“{review.text}”</p>
              <p className="mt-6 font-semibold text-platinum">{review.author}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
