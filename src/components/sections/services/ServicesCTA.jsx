"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const enquiryItems = [
  "Your event date and location",
  "Estimated number of guests",
  "Type of event",
  "Any dietary requirements",
  "Your budget (optional)",
];

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } },
};

export default function ServicesCTA() {
  return (
    <section className="bg-[#0D1B2A] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F5C518] mb-3">
              Ready To Book?
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-white mb-4">
              Not Sure Which Package Is Right For You?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Drop Aadam&apos;s Whippy a message with your event details and we&apos;ll
              recommend the perfect setup. No pressure, no obligation — just honest advice.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F5C518] px-8 py-4 text-base font-bold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-200 hover:bg-[#f0d04f] hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              Get A Free Consultation
            </Link>
          </motion.div>

          {/* Right — Info card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-2xl bg-[#1A2B3C] border border-white/5 p-7 lg:p-9">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-5">
                What To Include In Your Enquiry
              </h3>
              <ul className="space-y-3.5">
                {enquiryItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Circle className="h-2.5 w-2.5 fill-[#1565C0] text-[#1565C0] flex-shrink-0" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-gray-500 leading-relaxed">
                We aim to respond to all enquiries within 2 hours during business
                hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
