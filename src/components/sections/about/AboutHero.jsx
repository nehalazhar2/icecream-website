"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedStat({ target, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = Math.ceil(target / (1200 / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
        {count}+
      </p>
      <p className="mt-1 text-sm text-blue-200">{label}</p>
    </div>
  );
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.15, ease: "easeOut" } },
};

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1565C0] to-[#0D47A1]">
      {/* Background blurs */}
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
            {/* Breadcrumb */}
            <nav className="mb-5 text-sm text-blue-200/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About</span>
            </nav>

            {/* Pill */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white border border-white/20">
              🍦 Our Story
            </span>

            {/* Heading */}
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-white">
              The Family Behind Aadam&apos;s Whippy
            </h1>

            {/* Subtext */}
            <p className="mt-5 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed text-blue-100/85">
              Aadam&apos;s Whippy isn&apos;t just an ice cream business. It&apos;s a passion project built on bringing genuine joy to every event we attend.
            </p>

            {/* Stats */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-10">
              <AnimatedStat target={500} label="Happy Customers" />
              <AnimatedStat target={100} label="Events Served" />
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
                src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600"
                alt="Ice cream van serving soft serve whippy"
                width={560}
                height={400}
                className="rounded-2xl shadow-2xl object-cover aspect-[4/3] border-4 border-white/20"
                priority
              />
              {/* Decorative frame offset */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-white/10 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
