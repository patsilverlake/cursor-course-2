"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Build Something
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text"> Amazing</span>
        </h1>

        <p className="mt-6 text-xl text-muted-foreground">Start your next project with our powerful and flexible template. Everything you need to go from zero to production.</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <Button
            size="lg"
            className="font-semibold"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold"
          >
            Learn More
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
