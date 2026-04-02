"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: "✅", text: "5-Star Rated" },
  { icon: "🎪", text: "100+ Events" },
  { icon: "🚐", text: "Fully Insured" },
  { icon: "🍦", text: "Halal Friendly" },
];

const floatingBadges = [
  { label: "⭐ 5.0 Rating", position: "top-0 left-0", rotate: "-3deg", delay: 0 },
  { label: "🎉 Weddings", position: "top-0 right-0", rotate: "3deg", delay: 0.5 },
  { label: "🏢 Corporate", position: "bottom-8 left-1/2 -translate-x-1/2", rotate: "-2deg", delay: 1 },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1565C0] to-[#0D47A1]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 h-72 w-72 rounded-full bg-[#F5C518]/10 blur-3xl" />
        <div className="absolute top-1/4 right-1/3 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            {/* Badge pill */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white border border-white/20">
                🍦 Available for Bookings
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 font-[family-name:var(--font-display)] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight text-white"
            >
              The Sweetest
              <br />
              Addition To Your
              <br />
              <span className="text-[#F5C518]">Event</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl leading-relaxed text-blue-100/90"
            >
              Aadam&apos;s Whippy brings premium soft serve ice cream van hire to weddings, corporate events, festivals, and private parties. We bring the smiles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F5C518] px-8 py-4 text-base font-bold text-gray-900 shadow-lg shadow-yellow-500/25 transition-all duration-200 hover:bg-[#f0d04f] hover:shadow-xl hover:shadow-yellow-500/30 hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
              >
                Book Your Van
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
              >
                See Our Services
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3"
            >
              {trustBadges.map((badge, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 text-sm text-blue-100/80 font-medium"
                >
                  <span>{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >
            {/* Yellow glow behind image */}
            <div className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#F5C518]/20 blur-3xl" />

            {/* Hero image — whippy soft serve cone */}
            <div className="relative animate-float">
              <Image
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600"
                alt="Colourful soft serve whippy ice cream cone"
                width={480}
                height={560}
                className="relative z-10 h-[280px] w-[240px] sm:h-[360px] sm:w-[300px] lg:h-[420px] lg:w-[350px] object-cover rounded-3xl drop-shadow-2xl border-4 border-white/20"
                priority
              />
            </div>

            {/* Floating badges */}
            {floatingBadges.map((badge, i) => (
              <div
                key={i}
                className={`absolute ${badge.position} z-20 animate-float-slow`}
                style={{
                  "--float-rotate": badge.rotate,
                  animationDelay: `${badge.delay}s`,
                }}
              >
                <div className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow-lg shadow-black/10">
                  {badge.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 fill-white"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
