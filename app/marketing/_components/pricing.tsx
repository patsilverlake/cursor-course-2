"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "For individuals and small teams getting started.",
    features: ["Up to 3 projects", "Basic analytics", "24-hour support response time", "1 team member", "5GB storage"],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: { monthly: 29, yearly: 290 },
    description: "For growing teams that need more power and flexibility.",
    features: ["Unlimited projects", "Advanced analytics", "6-hour support response time", "10 team members", "50GB storage", "Custom domains", "Advanced integrations"],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    description: "For large organizations with complex requirements.",
    features: ["Everything in Pro", "Unlimited team members", "1TB storage", "1-hour support response time", "Dedicated account manager", "Custom contract", "Enterprise SSO", "Advanced security features"],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="w-full py-20"
    >
      <div className="container px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that works best for you and your team. All plans include a 14-day free trial.</p>

          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 text-sm font-medium ${!isYearly ? "text-primary" : "text-gray-500"}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              aria-label="Toggle between monthly and yearly billing"
            />
            <span className={`ml-3 text-sm font-medium ${isYearly ? "text-primary" : "text-gray-500"}`}>
              Yearly <span className="text-green-500 font-medium">(Save 17%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`rounded-xl border ${plan.popular ? "border-primary shadow-lg" : "border-gray-200 shadow-sm"} overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.popular && <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">Most Popular</div>}

              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                    <span className="text-gray-500 ml-2">/{isYearly ? "year" : "month"}</span>
                  </div>
                  {isYearly && plan.price.yearly > 0 && <div className="text-sm text-gray-500 mt-1">${plan.price.monthly}/mo when billed monthly</div>}
                </div>

                <Button
                  className="w-full mb-6"
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.name === "Enterprise" ? "/contact" : "/auth/signup"}>{plan.cta}</Link>
                </Button>

                <div className="space-y-3">
                  <div className="text-sm font-medium">Includes:</div>
                  {plan.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex"
                    >
                      <Check className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gray-50 border border-gray-100 rounded-xl p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Need a custom plan?</h3>
              <p className="text-gray-600 mb-4 md:mb-0">Contact our sales team for custom pricing tailored to your specific requirements.</p>
            </div>
            <div className="md:ml-6">
              <Button
                size="lg"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            All prices are in USD and don&apos;t include taxes which may apply.
            <br />
            By subscribing, you agree to our{" "}
            <Link
              href="/terms"
              className="underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
