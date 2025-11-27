"use client";
import { useState } from "react";

export default function ProjectCarousel() {
  const slides = [
    {
      img: "https://www.turnerandtownsend.com/media/3gfjltrq/istock-2203229031.webp?width=1440&height=930&v=1dc5247e6d1b150",
      tag: "Outcomes",
      title: "Rack Centre – Phase 2.1, Nigeria",
      desc: "Delivering West Africa's largest AI-ready data centre",
    },
    {
      img: "https://www.turnerandtownsend.com/media/abvdr3fg/masterplan_figure_04.webp?width=1440&height=930&v=1dc4e3d79e821e0",
      tag: "Outcomes",
      title: "Digital Infrastructure Hub – UAE",
      desc: "Building state-of-the-art AI data infrastructure",
    },
    {
      img: "https://www.turnerandtownsend.com/media/3gacmmny/jumeirah_marsa_al_arab_kinugawa_adult_pool_marsa_views.webp?width=1440&height=930&v=1dc4ca0f7392cf0",
      tag: "Outcomes",
      title: "Global Tech Tower – Singapore",
      desc: "Asia's most advanced smart operations facility",
    },
    {
      img: "https://www.turnerandtownsend.com/media/irtl2pje/external-venue-shot-by-nick-flynn.webp?width=1440&height=930&v=1dc3f3a59c46b10",
      tag: "Outcomes",
      title: "Cloud Compute Campus – USA",
      desc: "Next-generation hyperscale data centre",
    },
    {
      img: "https://www.turnerandtownsend.com/media/pqnnlpan/rdc-site-image-016-10042025-1.webp?width=1440&height=930&v=1dc41d1924359d0",
      tag: "Outcomes",
      title: "AI Innovation Zone – India",
      desc: "Delivering future-ready technology infrastructure",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[480px] overflow-hidden rounded-lg">

      {/* Background Image */}
      <img
        src={slides[current].img}
        className="absolute inset-0 w-full h-full object-cover duration-300"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-24 left-10 text-white max-w-3xl">
        <p className="uppercase text-sm tracking-wider opacity-80 mb-1">
          {slides[current].tag}
        </p>

        <h2 className="text-4xl font-bold leading-tight">
          {slides[current].title}
        </h2>

        <p className="mt-4 text-lg font-medium opacity-90">
          {slides[current].desc}
        </p>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 text-white">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="p-3 bg-black/40 hover:bg-black/60 rounded-full"
        >
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2">
            <path d="M15 5L8 11L15 17" />
          </svg>
        </button>

        {/* Counter */}
        <span className="text-sm font-medium">
          {current + 1} / {slides.length}
        </span>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="p-3 bg-black/40 hover:bg-black/60 rounded-full"
        >
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2">
            <path d="M8 5L15 11L8 17" />
          </svg>
        </button>
      </div>

      {/* See All Projects Button */}
      <div className="absolute bottom-10 left-10">
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
          See all projects
        </button>
      </div>

    </section>
  );
}
