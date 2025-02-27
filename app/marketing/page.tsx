"use client";

import CallToAction from "./_components/call-to-action";
import Faq from "./_components/faq";
import Features from "./_components/features";
import Hero from "./_components/hero";
import Pricing from "./_components/pricing";
import Testimonials from "./_components/testimonials";

export default function MarketingPage() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
      <CallToAction />
    </main>
  );
}
