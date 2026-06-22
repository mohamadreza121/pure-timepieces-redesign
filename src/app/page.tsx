import { HomeStack } from "@/components/home/HomeStack";

import { Hero } from "@/components/sections/Hero";
import { PrivateAccessIntro } from "@/components/sections/PrivateAccessIntro";
import {
  FeaturedVaultScene,
  VaultIntroductionScene,
  VaultPairScene
} from "@/components/sections/SelectedVault";
import { BrandArchive } from "@/components/sections/BrandArchive";
import { SourcingExperience } from "@/components/sections/SourcingExperience";
import { CinematicStory } from "@/components/sections/CinematicStory";
import { AuthenticationAtelier } from "@/components/sections/AuthenticationAtelier";
import {
  SellTradeFilmScene,
  SellTradeProcessScene
} from "@/components/sections/SellTradeEditorial";
import { CollectorTestimony } from "@/components/sections/CollectorTestimony";
import {
  JournalArticlesScene,
  JournalIntroScene
} from "@/components/sections/JournalPreview";
import { FinalPrivateSearchCTA } from "@/components/sections/FinalPrivateSearchCTA";

export default function HomePage() {
  return (
    <div className="relative bg-[#020202]">
      <HomeStack>
        <Hero />
        <PrivateAccessIntro />
        <VaultIntroductionScene />
        <FeaturedVaultScene />
        <VaultPairScene />
        <BrandArchive />
      </HomeStack>

      {/* Existing custom sticky timeline remains untouched. */}
      <SourcingExperience />

      {/* Natural cinematic bridge between the two scroll chapters. */}
      <CinematicStory />

      {/* Existing 500svh authentication sequence remains untouched. */}
      <AuthenticationAtelier />

      <HomeStack>
        <SellTradeFilmScene />
        <SellTradeProcessScene />
        <CollectorTestimony />
        <JournalIntroScene />
        <JournalArticlesScene />
        <FinalPrivateSearchCTA />
      </HomeStack>
    </div>
  );
}
