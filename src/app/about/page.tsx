import type { Metadata } from "next";
import { AboutStack } from "@/components/about/AboutStack";

export const metadata: Metadata = {
  title: "About Pure Timepieces",
  description:
    "Discover Pure Timepieces Co., a private luxury watch dealer based in Aurora, Ontario, serving collectors across Canada and worldwide."
};

export default function AboutPage() {
  return <AboutStack />;
}