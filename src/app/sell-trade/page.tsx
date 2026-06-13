import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SellTradeForm } from "@/components/forms/SellTradeForm";

export const metadata: Metadata = {
  title: "Sell or Trade Your Watch",
  description: "Request a private offer for your luxury watch or trade toward your next timepiece."
};

export default function SellTradePage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Private Offer"
          title="Sell or trade your luxury watch with confidence"
          description="Upload your watch details, reference number, condition, and accessories. Pure Timepieces will review and follow up with a private offer."
        />
        <SellTradeForm />
      </Container>
    </section>
  );
}
