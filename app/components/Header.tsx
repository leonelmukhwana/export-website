"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { JSX } from "react/jsx-runtime";

export default function Header(): JSX.Element {
  return (
    <header className="bg-white shadow-sm">
      
      {/* TOP BAR */}
      <div className="bg-green-600 text-white text-sm py-2">
        <div className="container flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> +254791 903 507
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope /> info@wendofresh.com
            </span>
          </div>

          <span>Fresh Organic Exports 🌿</span>
        </div>
      </div>

      {/* NAV */}
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold text-green-600">
          Wendofresh
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700">
          Get Quote
        </button>
      </div>
    </header>
  );
}