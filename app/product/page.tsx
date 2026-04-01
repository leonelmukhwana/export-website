"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// Import Hero

const products = [
  { id: 1, name: "Fresh Mangoes", description: "Organic handpicked mangoes ready for export.", image: "/images/slide5.jpeg" },
  { id: 2, name: "Juicy Avocado", description: "Sweet, jAvocado for global markets.", image: "/images/slide6.jpeg" },
  { id: 3, name: "Organic Avocadoes", description: "Naturally grown avocadoes, chemical-free.", image: "/images/slide7.jpeg" },
  { id: 4, name: "Premium Mangoes", description: "Ripe mangoes for international export.", image: "/images/slide8.jpeg" },
  { id: 1, name: "Fresh Mangoes", tagline: "Ripe & Juicy", image: "/images/slide8.jpeg" },
  { id: 2, name: "Juicy Avocado", tagline: "Creamy & Healthy", image: "/images/slide9.jpeg" },
  { id: 3, name: "Organic Avocadoes", tagline: "Naturally Grown", image: "/images/slide10.jpeg" },
  { id: 4, name: "Premium Mangoes", tagline: "Export Quality", image: "/images/slide11.jpeg" },

];

export default function page() {
  return (
    <div className="font-sans bg-green-50 text-gray-900">
      
  

      {/* HERO SECTION */}
    

      {/* SPACING BETWEEN HERO AND FEATURES */}
      <div className="h-32 md:h-40"></div> {/* ↑ adds premium spacing */}

      {/* FEATURES SECTION */}
      <section className="container mx-auto grid md:grid-cols-3 gap-8 px-4 md:px-0">
        {[
          { title: "Organic Certified", desc: "100% natural products grown with care.", color: "bg-green-200" },
          { title: "Global Export", desc: "Delivering freshness worldwide.", color: "bg-green-100" },
          { title: "Eco-Friendly", desc: "Sustainable farming for a better future.", color: "bg-green-300" },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg ${feature.color} cursor-pointer transition-transform`}
          >
            <div className="text-3xl text-green-700">{i === 0 ? "🌿" : i === 1 ? "🌍" : "♻️"}</div>
            <div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-20 container mx-auto px-4 md:px-0">
        <h2 className="text-center text-4xl font-extrabold text-green-700 mb-12">
          Our Export Products
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    
     

    </div>
  );
}