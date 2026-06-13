import { ArrowRight, Camera, ShieldCheck, WalletCards } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SellTradeCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="luxury-card rounded-[2.5rem] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-champagne">Sell / Trade</p>
              <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">Turn your current watch into your next piece.</h2>
              <p className="mt-6 leading-8 text-white/62">
                A premium valuation flow for customers who want to sell, trade, or upgrade with confidence.
              </p>
              <div className="mt-8">
                <Button href="/sell-trade">Request private offer <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { icon: Camera, title: "Upload photos", text: "Dial, case, bracelet, papers." },
                { icon: ShieldCheck, title: "Review details", text: "Reference, condition, authenticity." },
                { icon: WalletCards, title: "Receive offer", text: "Sell, trade, or source next." }
              ].map((item) => (
                <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-black/28 p-6">
                  <item.icon className="h-7 w-7 text-champagne" />
                  <h3 className="mt-8 font-display text-3xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/54">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
