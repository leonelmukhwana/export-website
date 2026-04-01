import { JSX } from "react/jsx-runtime";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container grid md:grid-cols-3 gap-8">
        
        {/* COMPANY INFO */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-green-400">
            Wendofresh Exporters
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We specialize in exporting fresh, organic agricultural
            products to global markets with quality and reliability.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/about" className="hover:text-green-400">About</a></li>
            <li><a href="/products" className="hover:text-green-400">Products</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-400">
            Physical Address
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Wendofresh Exporters Ltd,<br />
            Aviation, off old north airport road.<br />
            P.O Box 60, Kandara,<br />
            Muranga
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2026 Wendofresh Exporters Ltd. All rights reserved.
      </div>
    </footer>
  );
}