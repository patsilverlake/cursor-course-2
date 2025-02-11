"use server";

import { CTA } from "@/components/marketing/cta";
import { Features } from "@/components/marketing/features";
import { Landing } from "@/components/marketing/landing";
import { SocialProof } from "@/components/marketing/social-proof";

export default async function LandingPage() {
  return (
    <main>
      <Landing />
      <Features />
      <SocialProof />
      <CTA />
    </main>
  );
}
