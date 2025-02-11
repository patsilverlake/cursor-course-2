"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="border-b"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-bold text-2xl"
          >
            Logo
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/features"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition"
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex"
            >
              Sign In
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
