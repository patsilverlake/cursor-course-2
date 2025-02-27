"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director at TechCorp",
    quote: "This platform has completely transformed how our marketing team collaborates. We've seen a 40% increase in productivity since implementing it.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "David Chen",
    title: "Product Manager at Innovatech",
    quote: "The automation features have saved us countless hours of manual work. The ROI has been incredible, and the support team is always responsive.",
    rating: 5,
    avatar: "DC"
  },
  {
    name: "Emily Rodriguez",
    title: "CTO at StartupX",
    quote: "As a growing startup, we needed a solution that could scale with us. This platform has been perfect, and the pricing model is very fair.",
    rating: 4,
    avatar: "ER"
  },
  {
    name: "Michael Thompson",
    title: "Operations Lead at Enterprise Co.",
    quote: "After trying multiple solutions, we finally found one that meets all our complex requirements. The customization options are particularly impressive.",
    rating: 5,
    avatar: "MT"
  },
  {
    name: "Olivia Park",
    title: "Design Team Lead at Creative Inc.",
    quote: "The intuitive interface has made adoption across our design team seamless. We're now able to focus more on creative work and less on process.",
    rating: 5,
    avatar: "OP"
  },
  {
    name: "James Wilson",
    title: "COO at Global Services Ltd.",
    quote: "The enterprise features have helped us maintain compliance while improving efficiency. Implementation was smoother than expected.",
    rating: 4,
    avatar: "JW"
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-20 bg-gray-50"
    >
      <div className="container px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Loved by Businesses Worldwide</h2>
          <p className="text-xl text-gray-600">Don&apos;t just take our word for it — hear what our customers have to say about their experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-medium text-lg">{testimonial.avatar}</div>
                  <div className="ml-4">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className={j < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</blockquote>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 mx-auto max-w-4xl text-center bg-white rounded-xl p-8 shadow-md border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-2">4.9 out of 5 stars</h3>
          <p className="text-gray-600">Based on 500+ reviews from satisfied customers across G2, Capterra, and Trustpilot</p>
        </motion.div>
      </div>
    </section>
  );
}
