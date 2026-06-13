import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DreamWatchForm } from "@/components/forms/DreamWatchForm";

export const metadata: Metadata = {
  title: "Find Your Dream Watch",
  description: "Request sourcing for a rare or specific luxury watch model through Pure Timepieces Co."
};

export default function DreamWatchPage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Concierge Sourcing"
          title="Tell us the piece you are hunting"
          description="From rare Rolex references to modern collector pieces, submit your dream watch request and let Pure Timepieces source it through trusted partners."
        />
        <DreamWatchForm />
      </Container>
    </section>
  );
}
