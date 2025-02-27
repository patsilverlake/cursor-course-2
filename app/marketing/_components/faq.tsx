"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all features for 14 days. No credit card required. At the end of the trial period, you can choose to subscribe to one of our plans or downgrade to the free tier."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new pricing will be applied immediately. If you downgrade, the new pricing will be applied at the beginning of your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, including Visa, Mastercard, and American Express. For annual plans, we also offer invoicing and bank transfer options. Contact our sales team for more information."
  },
  {
    question: "Is there a limit to the number of users?",
    answer: "The Free plan allows for 1 user, the Pro plan includes up to 10 users, and the Enterprise plan has unlimited users. Additional users can be added to the Pro plan for an additional fee."
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer: "Yes, we offer special pricing for non-profits, educational institutions, and startups. Please contact our sales team with verification of your status to learn more about our discount programs."
  },
  {
    question: "How secure is your platform?",
    answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and comply with SOC 2, GDPR, and other regulations. All data is stored in secure, redundant data centers, and we offer features like SSO and 2FA for enhanced security."
  },
  {
    question: "Can I export my data if I decide to cancel?",
    answer: "Yes, you can export all your data at any time, even after cancellation. We provide easy-to-use export tools that allow you to download your data in standard formats. Your data remains available for export for 30 days after account cancellation."
  },
  {
    question: "Do you provide customer support?",
    answer: "Yes, all plans include customer support. Free plans receive community support, Pro plans include email support with a 6-hour response time during business hours, and Enterprise plans include priority support with a 1-hour response time and a dedicated account manager."
  }
];

export default function Faq() {
  return (
    <section
      id="faq"
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our platform, pricing, and features.</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
