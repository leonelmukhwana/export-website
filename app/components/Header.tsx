"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";

export default function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
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

          <span className="hidden sm:block">Fresh Organic Exports 🌿</span>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="container flex items-center justify-between py-4">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-green-600">
          Wendofresh
        </h1>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* GET QUOTE BUTTON */}
        <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700 transition">
          Get Quote
        </button>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-2xl text-green-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="md:hidden bg-green-50 shadow-md absolute w-full left-0 top-full">
          <ul className="flex flex-col gap-4 p-6 text-green-700 font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <button className="w-full bg-green-600 text-white py-2 rounded-full shadow-md hover:bg-green-700 transition">
                Get Quote
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}