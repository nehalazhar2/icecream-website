"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We\u2019re proud to serve our local community and give back wherever we can. Ice cream brings people together and that\u2019s exactly what we\u2019re here for.",
  },
  {
    icon: Award,
    title: "Quality Always",
    description:
      "We never cut corners on ingredients or presentation. Every scoop is served with pride and every van leaves our depot spotless.",
  },
  {
    icon: Users,
    title: "Inclusive By Nature",
    description:
      "From halal certified products to vegan and dietary options, everyone deserves a treat regardless of their background or requirements.",
  },
  {
    icon: Clock,
    title: "Reliability You Can Count On",
    description:
      "We know your event depends on us showing up. We have never missed a booking and we never plan to.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Values() {
  return (
    <section className="bg-[#F0F4FF] py-20 sm:py-24 lg:py-28">
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
            What Drives Us
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Everything Aadam&apos;s Whippy does is guided by these four principles.
          </p>
        </motion.div>

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              className="rounded-2xl bg-white p-7 lg:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1565C0] shadow-lg shadow-blue-500/20">
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
