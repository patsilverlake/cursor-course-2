"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none" />

      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-purple-500/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Workflow with Powerful Automation
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our platform helps teams streamline processes, eliminate repetitive tasks, and focus on what matters most. Join thousands of satisfied customers today.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                asChild
              >
                <Link href="/auth/signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium text-gray-600">{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium">Trusted by 5,000+ teams</div>
                <div className="text-xs text-gray-500">Join our growing community</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <div className="w-full h-full p-6 flex flex-col">
                  <div className="h-8 flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 h-4 w-40 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex-1 mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100"></div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100"></div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100"></div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 md:mt-28 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {["Acme Corp", "Globex", "Initech", "Umbrella"].map((company, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
            >
              <div className="text-xl font-semibold text-gray-400">{company}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
