import { Hero } from "@/components/sections/Hero";
import { PrivateAccessIntro } from "@/components/sections/PrivateAccessIntro";
import { SelectedVault } from "@/components/sections/SelectedVault";
import { BrandArchive } from "@/components/sections/BrandArchive";
import { SourcingExperience } from "@/components/sections/SourcingExperience";
import { CinematicStory } from "@/components/sections/CinematicStory";
import { AuthenticationAtelier } from "@/components/sections/AuthenticationAtelier";
import { SellTradeEditorial } from "@/components/sections/SellTradeEditorial";
import { CollectorTestimony } from "@/components/sections/CollectorTestimony";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { FinalPrivateSearchCTA } from "@/components/sections/FinalPrivateSearchCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PrivateAccessIntro />
      <SelectedVault />
      <BrandArchive />
      <SourcingExperience />
      <CinematicStory />
      <AuthenticationAtelier />
      <SellTradeEditorial />
      <CollectorTestimony />
      <JournalPreview />
      <FinalPrivateSearchCTA />
    </>
  );
}
