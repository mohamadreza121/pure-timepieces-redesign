import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center pt-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-champagne">404</p>
          <h1 className="mt-6 font-display text-6xl md:text-8xl">This piece is no longer in the vault</h1>
          <p className="mt-6 text-white/62">The watch or page you are looking for could not be found.</p>
          <div className="mt-8">
            <Button href="/shop">Return to shop</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
