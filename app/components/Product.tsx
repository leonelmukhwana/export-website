import Image from "next/image";
import { JSX } from "react/jsx-runtime";

export default function Products(): JSX.Element {
  const products = [
    {
      id: 1,
      name: "Fresh Avocados",
      description: "Organic and handpicked avocados, ready for export.",
      image: "/images/slide11.jpeg",
    },
    {
      id: 2,
      name: "Juicy Mangoes",
      description: "Handpicked juicy oranges, perfect for export worldwide.",
      image: "/images/slide10.jpeg",
    },
    {
      id: 3,
      name: "Organic Avocado",
      description: "Grown without chemicals, ideal for global markets.",
      image: "/images/slide8.jpeg",
    },
    {
      id: 4,
      name: "Premium Mangoes",
      description: "Fresh, ripe mangoes ready for international shipping.",
      image: "/images/slide6.jpeg",
    },
  ];

  return (
    <section className="bg-green-50 py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-green-600 mb-12">
          Our Export Products
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-40">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}