"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { JSX } from "react/jsx-runtime";

export default function About(): JSX.Element {
  const cards = [
    {
      title: "Our Mission",
      description:
        "To provide the world with fresh, 100% organic agricultural products from Kenya, grown sustainably and delivered with care.",
      color: "bg-green-200",
      icon: "🌿",
    },
    {
      title: "Our Vision",
      description:
        "To be the leading exporter of premium Kenyan produce, known for quality, sustainability, and global trust.",
      color: "bg-green-300",
      icon: "🌍",
    },
    {
      title: "Our Values",
      description:
        "Sustainability, Integrity, Quality, and Passion drive everything we do at Wendofresh Exporters.",
      color: "bg-green-100",
      icon: "💚",
    },
  ];

  return (
    <section className="bg-green-50 py-20">
      {/* SECTION HEADER */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-0">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/2 h-96 rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/slide6.jpeg"
            alt="Organic Products"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 max-w-xl"
        >
          <h2 className="text-4xl font-extrabold text-green-700">About Wendofresh Exporters</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Wendofresh Exporters Ltd is a proudly Kenyan company, delivering the finest organic agricultural products from the heart of Muranga to the global market. Our passion for sustainable farming and premium quality produce ensures our customers receive nothing but the best. From farm to table, we combine tradition and modern practices to bring freshness across borders.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every fruit, vegetable, and product we export reflects our commitment to excellence, sustainability, and the rich natural bounty of Kenya.
          </p>
        </motion.div>
      </div>

      {/* FLEX CARDS */}
      <div className="container mx-auto grid md:grid-cols-3 gap-8 mt-16 px-4 md:px-0">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`flex flex-col items-center text-center p-6 rounded-3xl shadow-xl cursor-pointer ${card.color}`}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}