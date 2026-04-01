"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { JSX } from "react/jsx-runtime";

export default function Partners(): JSX.Element {
  const partners = [
    {
      name: "FreshKenya Ltd",
      country: "Kenya",
      logo: "/images/partner1.png",
    },
    {
      name: "GlobalFruits Inc",
      country: "USA",
      logo: "/images/partner2.png",
    },
    {
      name: "Organic World",
      country: "Germany",
      logo: "/images/partner3.png",
    },
    {
      name: "Tropical Exports",
      country: "Netherlands",
      logo: "/images/partner4.png",
    },
    {
      name: "GreenHarvest Ltd",
      country: "Kenya",
      logo: "/images/partner5.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* SECTION HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-extrabold text-green-700 mb-12"
        >
          Our Partners
        </motion.h2>

        {/* PARTNER CARDS */}
        <div className="grid md:grid-cols-5 gap-8 items-center justify-center">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="bg-green-50 p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-3xl transition-transform"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.country}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}