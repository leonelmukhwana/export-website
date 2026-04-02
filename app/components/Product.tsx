import { motion } from "framer-motion";
import Image from "next/image";
import { JSX } from "react/jsx-runtime";

export default function Products(): JSX.Element {
  const products = [
  { id: 1, name: "Fresh Mangoes", description: "Organic handpicked mangoes ready for export.", image: "/images/slide5.jpeg" },
  { id: 2, name: "Mild Avocado", description: "Sweet, Avocado for global markets.", image: "/images/slide6.jpeg" },
  { id: 3, name: "Organic Avocadoes", description: "Naturally grown avocadoes, chemical-free.", image: "/images/slide7.jpeg" },
  { id: 4, name: "Premium Mangoes", description: "Ripe mangoes for international export.", image: "/images/slide8.jpeg" },
  { id: 1, name: "Fresh Mangoes", description: "Ripe & Juicy", image: "/images/slide8.jpeg" },
  { id: 2, name: "Premium Mangoes", description: "Export Quality", image: "/images/slide9.jpeg" },
  { id: 3, name: "Organic and Creamy Avocadoes", tagline: "Naturally Grown", image: "/images/slide10.jpeg" },
  { id: 4, name: "Buttery Avocadoes", dscription: "Creamy in Nature", image: "/images/slide11.jpeg" },

];
  return (
   <section className="py-24 bg-gradient-to-b from-green-50 to-white">
  <div className="container mx-auto px-4 md:px-0">
    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-green-800 mb-16">
      Our Export Products
    </h2>

    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-green-200/40 via-white to-green-300/30 hover:scale-[1.03] transition-all duration-300"
        >
          {/* Inner Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">

            {/* Image */}
            <div className="relative h-60 flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-green-700 transition">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Optional CTA */}
              <button className="mt-3 text-sm font-semibold text-green-700 hover:text-green-900 transition">
                View Details →
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}