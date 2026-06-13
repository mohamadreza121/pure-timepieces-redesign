import { Hero } from "@/components/sections/Hero";
import { PrivateAccessCTA } from "@/components/sections/PrivateAccessCTA";
import { BrandRail } from "@/components/sections/BrandRail";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { VaultShowcase } from "@/components/sections/VaultShowcase";
import { SellTradeCTA } from "@/components/sections/SellTradeCTA";
import { DreamWatchCTA } from "@/components/sections/DreamWatchCTA";
import { AuthenticationProcess } from "@/components/sections/AuthenticationProcess";
import { ReviewWall } from "@/components/sections/ReviewWall";
import { AboutPreview } from "@/components/sections/AboutPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PrivateAccessCTA />
      <BrandRail />
      <FeaturedProducts />
      <VaultShowcase />
      <SellTradeCTA />
      <DreamWatchCTA />
      <AuthenticationProcess />
      <ReviewWall />
      <AboutPreview />
    </>
  );
}
