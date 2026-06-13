import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function DreamWatchCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.09] bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.4)] md:p-14">
          <div className="absolute right-8 top-8 hidden h-48 w-48 rounded-full border border-white/[0.09] md:block" />
          <div className="absolute right-20 top-20 hidden h-24 w-24 rounded-full border border-white/[0.05] md:block" />

          <Search className="h-9 w-9 text-white/55" />

          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] text-white md:text-8xl">
            Can’t find the exact reference? Let us source it privately.
          </h2>

          <p className="mt-7 max-w-2xl leading-8 text-white/52">
            Share the brand, model, reference, budget, and timeline. We will
            search our network for the right piece.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/dream-watch" className="gap-2">
              <Search className="h-4 w-4" />
              Find your dream watch
            </Button>
            <Button href="/contact">Talk to Pure Timepieces</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
