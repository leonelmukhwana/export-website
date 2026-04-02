"use client";

import { useEffect } from "react";

export default function VoiceAssistant() {
  useEffect(() => {
    const message = new SpeechSynthesisUtterance(
      "Welcome to our company, a trusted leader in the export of premium agricultural products. We specialize in delivering high quality fresh avocados and mangoes to international markets. Our commitment to excellence and reliability ensures every shipment meets global standards."
    );

    message.rate = 0.9;
    message.pitch = 1;
    message.volume = 1;

    const speak = () => {
      if (speechSynthesis.speaking) return;
      speechSynthesis.speak(message);
    };

    // Try auto play immediately
    setTimeout(speak, 1200);

    // Fallback: trigger on first interaction
    const triggerOnce = () => {
      speak();
      window.removeEventListener("click", triggerOnce);
      window.removeEventListener("scroll", triggerOnce);
    };

    window.addEventListener("click", triggerOnce);
    window.addEventListener("scroll", triggerOnce);

    return () => {
      window.removeEventListener("click", triggerOnce);
      window.removeEventListener("scroll", triggerOnce);
    };
  }, []);

  return null;
}