"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Fully Insured & Certified",
    description:
      "All our vans are fully insured, food hygiene certified and our staff are professionally trained.",
  },
  {
    title: "Flexible Packages",
    description:
      "From pay-per-scoop to fully inclusive packages. We work around your budget and guest numbers.",
  },
  {
    title: "Halal Friendly Options",
    description:
      "All our products are halal certified, making us the perfect choice for all communities and events.",
  },
  {
    title: "Punctual & Professional",
    description:
      "We show up on time, every time. Your event timeline is our priority.",
  },
];

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const reasonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function WhyUs() {
  return (
    <section className="bg-[#F0F4FF] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Image stack */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Decorative offset image — soft serve cone */}
            <div className="absolute -top-4 right-0 lg:right-8 w-36 sm:w-48 z-0">
              <Image
                src="https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=300"
                alt="Soft serve whippy ice cream cone"
                width={300}
                height={200}
                className="rounded-xl border-4 border-white shadow-md object-cover aspect-[3/2]"
              />
            </div>

            {/* Main image — ice cream van serving */}
            <div className="relative z-10 mt-16 sm:mt-12">
              <Image
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600"
                alt="Ice cream van at an event"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover aspect-[3/2] w-full"
              />

              {/* Stats card overlay */}
              <div className="absolute -bottom-5 -left-2 sm:left-4 z-20 rounded-xl bg-white px-5 py-3 shadow-lg">
                <p className="text-sm font-bold text-[#1565C0]">
                  🎉 500+ Happy Customers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Content */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#1565C0] mb-3">
              Why Choose Us
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-gray-900 mb-4">
              We Don&apos;t Just Serve Ice Cream. We Create Memories.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Aadam&apos;s Whippy has been delighting guests at events across the
              region. We combine premium soft serve ice cream with professional
              service and a van presentation that gets everyone excited.
            </p>

            {/* Reason rows */}
            <div className="space-y-5">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  variants={reasonVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex gap-4"
                >
                  <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1565C0]">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-gray-900">
                      {reason.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#1565C0] px-7 py-3 text-sm font-bold text-[#1565C0] transition-all duration-200 hover:bg-[#1565C0] hover:text-white active:scale-95"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
