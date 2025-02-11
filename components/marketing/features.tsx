"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Lock } from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-10 h-10" />,
    title: "Modern Tech Stack",
    description: "Built with Next.js, TypeScript, and Tailwind CSS for maximum developer productivity"
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "Enterprise Security",
    description: "Bank-grade security with built-in authentication and authorization"
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "AI-Powered",
    description: "Leverage the latest AI technologies to supercharge your application"
  }
];

export function Features() {
  return (
    <div className="py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
