"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phone = "254729622244";
  const message = encodeURIComponent(
    "Hello, I'm interested in your export products. Can you share pricing and MOQ?"
  );

  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg z-50 flex items-center gap-2 transition-all duration-300"
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden md:inline font-medium">
        Chat with us instantly
      </span>
    </a>
  );
};

export default WhatsAppButton;