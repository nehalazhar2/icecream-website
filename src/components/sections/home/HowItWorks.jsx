"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardList, MessageCircle, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Get In Touch",
    description:
      "Fill in our simple contact form or give us a call with your event details and date.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "We'll Send A Quote",
    description:
      "We'll get back to you quickly with a tailored quote based on your event size and requirements.",
  },
  {
    number: "03",
    icon: PartyPopper,
    title: "Enjoy The Day",
    description:
      "We arrive on time, set up, and serve your guests while you enjoy the event stress-free.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#1565C0] mb-3">
            The Process
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            Booking Is As Easy As 1, 2, 3
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Booking Aadam&apos;s Whippy for your event has never been simpler.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Dashed connector line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px border-t-2 border-dashed border-blue-200 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              className="relative z-10 group"
            >
              <div className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Background number */}
                <span className="absolute top-4 right-6 text-7xl font-bold text-blue-50 select-none font-[family-name:var(--font-display)]">
                  {step.number}
                </span>

                {/* Icon circle */}
                <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1565C0] shadow-lg shadow-blue-500/20">
                  <step.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 lg:mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F5C518] px-8 py-4 text-base font-bold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-200 hover:bg-[#f0d04f] hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            Start Your Booking
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
