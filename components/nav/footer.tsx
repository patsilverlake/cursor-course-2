"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Product</h3>
            <div className="flex flex-col gap-2">
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
                href="/docs"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Documentation
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Resources</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/support"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Support
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Privacy
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Social</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-muted-foreground hover:text-foreground transition" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6 text-muted-foreground hover:text-foreground transition" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
