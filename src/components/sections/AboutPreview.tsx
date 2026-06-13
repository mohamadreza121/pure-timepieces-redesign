import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="pb-28 pt-16">
      <Container>
        <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 md:p-14 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-champagne">Aurora, Ontario</p>
            <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
              Built for collectors who value heritage, trust, and exceptional service.
            </h2>
          </div>
          <div>
            <p className="leading-8 text-white/62">
              Pure Timepieces Co. specializes in rare and exceptional timepieces tailored for discerning collectors. The new site should make that feel obvious within the first five seconds.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="/about" variant="secondary">About us</Button>
              <Button href="/contact">Contact</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
