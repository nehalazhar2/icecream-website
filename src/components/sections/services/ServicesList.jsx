"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    label: "\ud83d\udc92 WEDDINGS",
    heading: "The Sweetest Wedding Addition",
    description:
      "Your wedding day deserves something truly memorable. Our beautifully presented ice cream van creates a magical moment your guests will talk about for years. We work closely with couples to ensure our service fits seamlessly into your day.",
    features: [
      "Bespoke menu boards to match your theme",
      "Uniformed professional staff",
      "Flexible timing to fit your schedule",
      "Vegan and dietary options available",
      "Full public liability insurance",
    ],
    image: "https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=600",
    imageAlt: "Whippy soft serve ice cream cone at a wedding",
    cta: "Enquire About Weddings",
    imageFirst: true,
  },
  {
    label: "\ud83c\udfe2 CORPORATE EVENTS",
    heading: "Boost Morale. Impress Clients.",
    description:
      "Nothing breaks the ice at a corporate event quite like an ice cream van. Whether it\u2019s a summer staff party, a product launch, or a client appreciation day, Aadam\u2019s Whippy delivers a unique experience that gets people talking and smiling.",
    features: [
      "Branded menu boards with your company logo",
      "Indoor and outdoor setup available",
      "Suitable for 50 to 5000+ guests",
      "Invoicing available for business accounts",
      "Last minute bookings accommodated where possible",
    ],
    image: "https://images.unsplash.com/photo-1514849302-984523450cf4?w=600",
    imageAlt: "Colourful ice cream van at a corporate event",
    cta: "Enquire About Corporate",
    imageFirst: false,
  },
  {
    label: "\ud83c\udfaa FESTIVALS & FAIRS",
    heading: "High Energy. High Volume.",
    description:
      "We have extensive experience serving large crowds at festivals, fairs and public events. Our efficient service keeps queues moving and customers happy. We\u2019re fully equipped to handle high demand while maintaining the quality and presentation we\u2019re known for.",
    features: [
      "High volume serving capability",
      "Generator powered \u2014 no mains required",
      "Multiple staff for busy periods",
      "Cash and card payments accepted",
      "Full food hygiene certification",
    ],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600",
    imageAlt: "Soft serve ice cream cones at a festival",
    cta: "Enquire About Festivals",
    imageFirst: true,
  },
  {
    label: "\ud83c\udf82 BIRTHDAY PARTIES",
    heading: "The Ultimate Party Surprise",
    description:
      "Imagine the look on their face when an ice cream van pulls up at their party. Whether it\u2019s a child\u2019s birthday or a milestone adult celebration, Aadam\u2019s Whippy creates a moment of pure joy that makes your party truly unforgettable.",
    features: [
      "Surprise arrival option available",
      "Custom birthday message on menu board",
      "Children\u2019s friendly flavours and toppings",
      "Suitable for all ages",
      "Flexible 1\u20133 hour hire slots",
    ],
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600",
    imageAlt: "Ice cream scoops with toppings for a birthday party",
    cta: "Enquire About Parties",
    imageFirst: false,
  },
  {
    label: "\ud83c\udfeb SCHOOL EVENTS",
    heading: "A Treat The Whole School Will Love",
    description:
      "Sports days, summer fetes, end of term celebrations \u2014 school events are made extra special with an Aadam\u2019s Whippy visit. We understand the importance of safety and reliability when working around children and we take both extremely seriously.",
    features: [
      "DBS checked staff",
      "Allergen information clearly displayed",
      "Nut-free options available",
      "Fast serving to manage large numbers",
      "Competitive pricing for schools and charities",
    ],
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=600",
    imageAlt: "Child holding a whippy ice cream cone",
    cta: "Enquire About School Events",
    imageFirst: true,
  },
  {
    label: "\ud83c\udf8a PRIVATE PARTIES",
    heading: "Any Celebration. Any Size.",
    description:
      "Garden parties, anniversaries, christenings, gender reveals, Eid celebrations \u2014 whatever you\u2019re planning, we\u2019d love to be part of it. No event is too small or too large. We bring the same level of care and professionalism to every single booking.",
    features: [
      "Minimum 1 hour hire available",
      "Halal certified products as standard",
      "Flexible payment options",
      "Friendly and approachable team",
      "Fully insured for private property visits",
    ],
    image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600",
    imageAlt: "Ice cream waffle cone treat at a private party",
    cta: "Enquire About Private Parties",
    imageFirst: false,
  },
];

const featureVariant = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function ServicesList() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-0">
          {services.map((service, si) => (
            <div key={service.label}>
              {/* Divider between blocks */}
              {si > 0 && (
                <div className="border-t border-gray-100 my-16 lg:my-20" />
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Image */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: service.imageFirst ? -40 : 40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={!service.imageFirst ? "lg:order-2" : ""}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={450}
                    className="rounded-2xl shadow-lg object-cover aspect-[4/3] w-full"
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: service.imageFirst ? 40 : -40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className={!service.imageFirst ? "lg:order-1" : ""}
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#1565C0] mb-3">
                    {service.label}
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl leading-tight text-gray-900 mb-4">
                    {service.heading}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-7">
                    {service.features.map((feat, fi) => (
                      <motion.li
                        key={fi}
                        variants={featureVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={fi}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle className="h-5 w-5 text-[#1565C0] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          {feat}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#1565C0] px-7 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:bg-[#1256a3] hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                  >
                    {service.cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
