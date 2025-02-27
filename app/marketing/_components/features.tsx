"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Clock, Code2, Fingerprint, Flame, Globe, LineChart, Zap } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast",
    description: "Built for performance with optimized algorithms that process your data in milliseconds."
  },
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Developer Friendly",
    description: "Comprehensive API and SDK support for all major programming languages and frameworks."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Infrastructure",
    description: "Deploy anywhere with our globally distributed network for minimal latency."
  },
  {
    icon: <Fingerprint className="h-10 w-10 text-primary" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with industry standards like SOC 2, GDPR, and HIPAA."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with comprehensive reporting and data visualization tools."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Time-Saving Automation",
    description: "Automate repetitive tasks and workflows to free up your team's valuable time."
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Predictive Intelligence",
    description: "AI-powered predictions help you make data-driven decisions for your business."
  },
  {
    icon: <Flame className="h-10 w-10 text-primary" />,
    title: "Seamless Integration",
    description: "Easily connect with your favorite tools with our extensive integration ecosystem."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-20 bg-gray-50"
    >
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything You Need, In One Place</h2>
            <p className="text-xl text-gray-600">Our comprehensive set of features powers businesses of all sizes, from startups to enterprises.</p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/features"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            <span>View all features</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
