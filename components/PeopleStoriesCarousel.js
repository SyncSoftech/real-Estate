"use client";

import { useState, useEffect, useRef } from "react";

/**
 * PeopleStoriesCarousel.js
 *
 * - Uses Tailwind CSS classes; tweak spacing/typography tokens if needed.
 * - Uses your uploaded image file path as src (your environment will transform the local path to a URL).
 * - Autoplay + manual nav + keyboard left/right support.
 */

const STORIES = [
  {
    id: 1,
    name: "Katie Denack",
    role: "Senior Project Manager, Australia",
    quote:
      "I enjoy working for a company that is involved in some of the most significant, challenging projects that make a difference to people’s lives.",
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Daniel-Ginn-Website-scaled-e1761411935637.jpg",
    jobsText: "265 jobs in 42 locations",
  },
  {
    id: 2,
    name: "Owen Martinez",
    role: "Principal Consultant, UK",
    quote:
      "Working here has given me opportunities to grow technically and lead high-impact work across multiple regions.",
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg",
    jobsText: "320 jobs in 30 locations",
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "Design Lead, Canada",
    quote:
      "Great people, meaningful work and the chance to build things that actually change communities for the better.",
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1.jpeg",
    jobsText: "180 jobs in 22 locations",
  },
  {
    id: 4,
    name: "Aisha Khan",
    role: "Design Lead, Canada",
    quote:
      "Great people, meaningful work and the chance to build things that actually change communities for the better.",
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/sabahat-1.jpg",
    jobsText: "180 jobs in 22 locations",
  },
  {
    id: 5,
    name: "Aisha Khan",
    role: "Design Lead, Canada",
    quote:
      "Great people, meaningful work and the chance to build things that actually change communities for the better.",
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/fe54640e-78e5-4aff-90f8-2cb87b24433a-e1761904596669.jpg",
    jobsText: "180 jobs in 22 locations",
  },
  // Add more story objects as needed
];

export default function PeopleStoriesCarousel() {
  const [index, setIndex] = useState(0);
  const total = STORIES.length;
  const autoplayRef = useRef(null);

  useEffect(() => {
    // autoplay every 6s
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);

    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearInterval(autoplayRef.current);
      window.removeEventListener("keydown", onKey);
    };
  }, [total]);

  const prev = () => {
    clearInterval(autoplayRef.current);
    setIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    clearInterval(autoplayRef.current);
    setIndex((i) => (i + 1) % total);
  };

  const story = STORIES[index];

  return (
    <section className="w-full bg-white">
      <div className="  grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        {/* LEFT: image */}
        <div className="relative overflow-hidden">
          <img
            src={story.image}
            alt={`${story.name} portrait`}
            className="w-full h-full object-cover"
            style={{ minHeight: 520 }}
          />
        </div>

        {/* RIGHT: card */}
        <div className="relative bg-[#f2ece5] lg:-ml-10 p-10 md:p-16 flex flex-col justify-between rounded-tl-3xl rounded-bl-3xl">
          {/* top badge (jobs pill) */}
         
         

          {/* quote block */}
          <div className="mt-6 md:mt-12">
            {/* big quote marks */}
            <div className="text-6xl md:text-7xl font-bold text-[#333] leading-none mb-4">“</div>

            <blockquote className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed max-w-[640px]">
              {story.quote}
            </blockquote>

            <div className="mt-6">
              <div className="text-lg font-semibold text-[#0f1724]">
                {story.name}
              </div>
              <div className="text-sm text-gray-600 mt-1">{story.role}</div>
            </div>
          </div>

          {/* navigation / controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center bg-white hover:shadow"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="text-sm text-gray-700">
                {index + 1} / {total}
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center bg-white hover:shadow"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div>
              <button
                className="px-6 py-3 border border-gray-700 rounded-md bg-white hover:bg-gray-100 text-sm font-medium"
                onClick={() => {
                  // navigate to stories listing - replace with your route
                  window.location.href = "/people-stories";
                }}
              >
                Explore our people stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
