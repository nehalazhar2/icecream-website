"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const trustItems = [
  { icon: "⭐", text: "5-Star Rated" },
  { icon: "🚐", text: "Fully Insured" },
  { icon: "🍦", text: "Halal Certified" },
];

export default function AboutCTA() {
  return (
    <section className="bg-[#F5C518] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#0D1B2A]">
          Sound Like The Right Fit For Your Event?
        </h2>

        <p className="mt-5 text-lg text-[#0D1B2A]/80 max-w-2xl mx-auto leading-relaxed">
          Aadam&apos;s Whippy would love to hear about your event and put together a tailored quote with no obligation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0D1B2A] px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#162a40] hover:shadow-xl hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
          >
            Get A Free Quote
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#0D1B2A] px-8 py-4 text-base font-bold text-[#0D1B2A] transition-all duration-200 hover:bg-[#0D1B2A] hover:text-white active:scale-95 w-full sm:w-auto"
          >
            View Our Services
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustItems.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 text-sm font-medium text-[#0D1B2A]/70"
            >
              <span>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
