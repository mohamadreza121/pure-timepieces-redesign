import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/lib/reviews";

export function ReviewWall() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="Premium experience, transparent process"
          description="The old site already has strong review content. The redesign turns it into a high-trust conversion section."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review) => (
            <article key={review.author} className="luxury-card rounded-[2rem] p-7">
              <p className="text-xl text-champagne">★★★★★</p>
              <p className="mt-5 line-clamp-6 leading-7 text-white/66">“{review.text}”</p>
              <p className="mt-6 font-semibold text-platinum">{review.author}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
