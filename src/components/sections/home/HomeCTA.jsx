"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const trustItems = [
  { icon: "🔒", text: "Secure Booking" },
  { icon: "✅", text: "No Hidden Fees" },
  { icon: "🎪", text: "100+ Events Served" },
];

export default function HomeCTA() {
  return (
    <section className="bg-[#F5C518] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-tight text-[#0D1B2A]"
        >
          Ready To Book Aadam&apos;s Whippy?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-lg text-[#0D1B2A]/80 max-w-2xl mx-auto leading-relaxed"
        >
          Join hundreds of happy customers who chose Aadam&apos;s Whippy for
          their special occasions. Limited dates available — book early to avoid
          disappointment.
        </motion.p>

        {/* Urgency line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-base font-semibold text-[#0D1B2A]"
        >
          📅 Booking fast for Summer 2025 — secure your date today
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0D1B2A] px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#162a40] hover:shadow-xl hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
          >
            Book Your Van Now
          </Link>
          <Link
            href="tel:+447XXXXXXXXX"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#0D1B2A] px-8 py-4 text-base font-bold text-[#0D1B2A] transition-all duration-200 hover:bg-[#0D1B2A] hover:text-white active:scale-95 w-full sm:w-auto"
          >
            Call Us Direct
          </Link>
        </motion.div>

        {/* Trust items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {trustItems.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 text-sm font-medium text-[#0D1B2A]/70"
            >
              <span>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
