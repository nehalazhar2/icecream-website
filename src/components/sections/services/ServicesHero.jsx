"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.15, ease: "easeOut" } },
};

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1565C0] to-[#0D47A1]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-[#F5C518]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-28 sm:pt-20 sm:pb-36 lg:pt-24 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <nav className="mb-5 text-sm text-blue-200/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Services</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white border border-white/20">
              🚐 What We Offer
            </span>

            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-white">
              Aadam&apos;s Whippy — Ice Cream Van Hire For Every Occasion
            </h1>

            <p className="mt-5 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed text-blue-100/85">
              Whether you&apos;re planning an intimate garden party or a large scale corporate event, Aadam&apos;s Whippy has a package that fits perfectly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F5C518] px-8 py-4 text-base font-bold text-gray-900 shadow-lg shadow-yellow-500/25 transition-all duration-200 hover:bg-[#f0d04f] hover:shadow-xl hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
              >
                Get A Free Quote
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
              >
                View Our Menu
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600"
                alt="Ice cream van ready for hire"
                width={560}
                height={400}
                className="rounded-2xl shadow-2xl object-cover aspect-[4/3] border-4 border-white/20"
                priority
              />
              <div className="absolute -inset-3 rounded-2xl border-2 border-white/10 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
