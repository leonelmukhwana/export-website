"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { JSX } from "react/jsx-runtime";

export default function Partners(): JSX.Element {
  const partners = [
    {
      name: "FResh Produce Consortium(FPC)",
      country: "Kenya",
      logo: "/images/fpc.jpg",
    },
    {
      name: "Horticultural Crops Directorate (HCD)",
      country: "Kenya",
      logo: "/images/afa.png",
    },
    {
      name: "Kenya Plant Health Inspectorate Service(KEPHIS)",
      country: "Kenya",
      logo: "/images/kephis.webp",
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
        <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
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