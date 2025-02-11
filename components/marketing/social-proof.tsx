"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Company 1", logo: "/logos/1.svg" },
  { name: "Company 2", logo: "/logos/2.svg" },
  { name: "Company 3", logo: "/logos/3.svg" },
  { name: "Company 4", logo: "/logos/4.svg" }
];

export function SocialProof() {
  return (
    <div className="py-12 border-y">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-lg text-muted-foreground mb-8"
        >
          Trusted by leading companies worldwide
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-40 h-12"
            >
              <Image
                src={logo.logo}
                alt={logo.name}
                fill
                className="object-contain filter grayscale"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
