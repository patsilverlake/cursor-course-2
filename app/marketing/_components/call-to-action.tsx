"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, we would send this to an API
    console.log("Subscribing email:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="w-full py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Transform Your Workflow?</h2>
          <p className="text-xl opacity-90 mb-8">Join thousands of teams that use our platform to streamline their processes and boost productivity.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/auth/signup">
                Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>

          <div className="max-w-md mx-auto">
            <div className="text-sm mb-3 font-medium">Stay updated with our latest features and news</div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 rounded-lg p-4 flex items-center justify-center space-x-2"
              >
                <CheckCircle2 className="h-5 w-5 text-green-300" />
                <span>Thanks for subscribing!</span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex gap-3 flex-col sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none"
                />
                <Button
                  type="submit"
                  variant="secondary"
                >
                  Subscribe
                </Button>
              </form>
            )}

            <div className="mt-3 text-xs opacity-80">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy"
                className="underline"
              >
                Privacy Policy
              </Link>
              . We&apos;ll never share your email.
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 pt-10 border-t border-white/20 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {["99.9% Uptime", "SOC 2 Compliant", "GDPR Ready", "Enterprise Support"].map((item, i) => (
            <div
              key={i}
              className="text-center"
            >
              <div className="font-medium">{item}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
