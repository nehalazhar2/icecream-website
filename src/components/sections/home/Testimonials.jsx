"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    event: "Wedding Reception",
    quote:
      "Aadam's Whippy made our wedding day complete. The van looked stunning and every single guest was raving about the ice cream. Absolutely perfect service from start to finish.",
  },
  {
    name: "James R.",
    event: "Corporate Event",
    quote:
      "Booked them for our company summer party and they were a massive hit. Professional, punctual, and the ice cream was incredible. Already planning to book again next year.",
  },
  {
    name: "Fatima K.",
    event: "Birthday Party",
    quote:
      "The kids went absolutely wild when the van pulled up. Aadam's Whippy turned an ordinary birthday party into something truly magical. Highly recommend!",
  },
  {
    name: "David T.",
    event: "School Fete",
    quote:
      "We've used Aadam's Whippy for our school fete two years running. Always reliable, always brilliant. The parents love it just as much as the children.",
  },
  {
    name: "Priya S.",
    event: "Garden Party",
    quote:
      "From booking to the last scoop, everything was seamless. The team were friendly and professional. Our guests are still talking about it weeks later.",
  },
  {
    name: "Mohammed A.",
    event: "Eid Celebration",
    quote:
      "So happy they offer halal certified products. Made our Eid celebration extra special. The whole family loved it and the van presentation was beautiful.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Testimonials() {
  return (
    <section className="bg-[#0D1B2A] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F5C518] mb-3">
            Happy Customers
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-white">
            Don&apos;t Just Take Our Word For It
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              className="rounded-2xl bg-[#1A2B3C] border border-white/5 p-6 lg:p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className="h-4 w-4 fill-[#F5C518] text-[#F5C518]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-gray-300 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1565C0] text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#F5C518]">{t.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
