"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "💒",
    title: "Weddings",
    description:
      "Make your special day even sweeter. Our beautifully presented van is the perfect romantic treat for your guests.",
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    description:
      "Boost team morale and impress clients. A unique ice cream experience that gets people talking.",
  },
  {
    icon: "🎪",
    title: "Festivals & Fairs",
    description:
      "High volume, high energy. We handle large crowds with ease and keep the queues moving.",
  },
  {
    icon: "🎂",
    title: "Birthday Parties",
    description:
      "The ultimate birthday surprise. Kids and adults alike go crazy for a real whippy ice cream van.",
  },
  {
    icon: "🏫",
    title: "School Events",
    description:
      "Sports days, fetes, and end of term celebrations. Safe, fun and always a crowd pleaser.",
  },
  {
    icon: "🎊",
    title: "Private Parties",
    description:
      "Garden parties, anniversaries, christenings — any celebration deserves a scoop of happiness.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#1565C0] mb-3">
            What We Offer
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            Perfect For Every Occasion
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            From intimate garden parties to large corporate events, Aadam&apos;s Whippy brings joy to every gathering.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 lg:p-8 shadow-sm hover:shadow-xl hover:border-blue-100 transition-shadow duration-300"
            >
              {/* Icon circle */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Learn more link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1565C0] transition-all duration-200 group-hover:gap-2.5"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 lg:mt-16 text-center"
        >
          <p className="text-gray-500 mb-5">
            Don&apos;t see your event type? We cater for everything.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#1565C0] px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:bg-[#1256a3] hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
