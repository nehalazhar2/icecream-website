"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const blocks = [
  {
    label: "HOW IT STARTED",
    heading: "A Dream Born From A Love Of Ice Cream",
    paragraphs: [
      "Aadam\u2019s Whippy was founded with one simple mission \u2014 to bring the classic British ice cream van experience to events across the region, but with a modern twist and exceptional quality that sets us apart.",
      "What started as a single van and a passion for great soft serve has grown into one of the most trusted ice cream van hire services in the area. Every event we attend, we treat it like it\u2019s the most important booking we\u2019ve ever taken \u2014 because to our clients, it is.",
    ],
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600",
    imageAlt: "Classic ice cream van ready to serve",
    imageFirst: true,
    tilt: "rotate-1",
  },
  {
    label: "WHERE WE ARE TODAY",
    heading: "Grown On Word Of Mouth And Five Star Reviews",
    paragraphs: [
      "Today Aadam\u2019s Whippy serves hundreds of events every year \u2014 from intimate garden parties to large scale corporate functions and music festivals. Our reputation has been built entirely on the quality of our service and the happiness of our customers.",
      "We invest in the best equipment, the finest ingredients, and most importantly, in the people who represent our brand at your event. When you book with us, you\u2019re getting a team that genuinely cares about making your day special.",
    ],
    image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600",
    imageAlt: "Soft serve whippy ice cream swirl",
    imageFirst: false,
    tilt: "-rotate-1",
  },
];

export default function OurStory() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: block.imageFirst ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={!block.imageFirst ? "lg:order-2" : ""}
            >
              <Image
                src={block.image}
                alt={block.imageAlt}
                width={600}
                height={400}
                className={`rounded-2xl shadow-xl object-cover aspect-[3/2] w-full ${block.tilt}`}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: block.imageFirst ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className={!block.imageFirst ? "lg:order-1" : ""}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#1565C0] mb-3">
                {block.label}
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-gray-900 mb-5">
                {block.heading}
              </h2>
              <div className="space-y-4">
                {block.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-gray-500 text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
