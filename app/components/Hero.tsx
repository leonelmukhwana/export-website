"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { JSX } from "react/jsx-runtime";

type Slide = {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    tag: "Fresh Agricultural Exports",
    title: "Premium Organic Produce",
    subtitle: "exported worldwide",
    image: "/images/slide1.jpeg",
  },
  {
    id: 2,
    tag: "Farm to Global Market",
    title: "Naturally Grown Crops",
    subtitle: "trusted by importers",
    image: "/images/slide2.jpeg",
  },
  {
    id: 3,
    tag: "Healthy & Fresh",
    title: "Fruits & Vegetables",
    subtitle: "delivered globally",
    image: "/images/slide3.jpeg",
  },
  {
    id: 4,
    tag: "Sustainable Farming",
    title: "Eco-Friendly Agriculture",
    subtitle: "for a better future",
    image: "/images/slide4.jpeg",
  },
];

export default function Hero(): JSX.Element {
  return (
    <section className="relative h-[700px] md:h-[750px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        effect="fade"
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              
              {/* BACKGROUND IMAGE */}
              <Image
                src="/images/slide6.jpeg"  {/* Set your background image here */}
                alt={slide.title}
                fill
                className="object-cover brightness-75"
              />

              {/* CARD ON TOP */}
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between container mx-auto p-10">
                <div className="max-w-lg bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                  <p className="text-sm text-gray-800 mb-2">{slide.tag}</p>
                  <h1 className="text-5xl font-bold text-gray-900">{slide.title}</h1>
                  <h2 className="text-3xl font-semibold text-green-900 mb-6">{slide.subtitle}</h2>
                  <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                    Explore
                  </button>
                </div>

                {/* IMAGE CARD */}
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mt-10 md:mt-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain hover:scale-105 transition duration-500"
                    priority={slide.id === 1}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}