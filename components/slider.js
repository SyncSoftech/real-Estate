"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Behind-The-Ear (BTE)",
    description:
      "The world's most common hearing aid style. Available in standard, mini or power.",
    image: "/Slider/img1.png", // update with your image path
  },
  {
    id: 2,
    title: "Receiver-In-Canal (RIC)",
    description:
      "Small, discreet and quick to fit. Perfect for first-time hearing aid wearers.",
    image: "/Slider/img2.png",
  },
  {
    id: 3,
    title: "In-The-Ear (ITE)",
    description:
      "Custom-made hearing aids that fit completely inside the ear.",
    image: "/Slider/img3.png",
  },

  {
    id: 4,
    title: "In-The-Canal (ITC)",
    description:
      " Custom hearing aid that fits in the ear canal. Smaller portion shows in outer ear.",
    image: "/Slider/img4.png",
  },

  {
    id: 5,
    title: "Completely-In-Canal (CIC)",
    description:
      "Only the tiny removal handle of the hearing aid shows outside of the ear canal.",
    image: "/Slider/img5.png",
  }, 
  
  {
    id: 6,
    title: " Invisible (IIC) ",
    description:
      " Rest in the second bend of the ear canal where no one can see them.",
    image: "/Slider/img6.png",
  },        
];

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);

  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="w-full  mx-auto py-10 relative bg-white">
      <div className="flex flex-col items-center text-center transition-all duration-500">
        {/* Product image only */}
        <Image
          src={products[current].image}
          alt={products[current].title}
          width={300}
          height={300}
          className="rounded-lg"
        />

        {/* Title + description */}
        <h3 className="mt-8 text-lg font-semibold text-blue-700">
          {products[current].title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {products[current].description}
        </p>
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-32 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-32 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
      >
        ❯
      </button>
    </div>
  );
}




