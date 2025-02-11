"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-24 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
        <p className="mx-auto max-w-[700px] mt-4 text-lg text-primary-foreground/80">Join thousands of developers building amazing applications today.</p>
        <div className="mt-8">
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold"
          >
            Start Building Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
