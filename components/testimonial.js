'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        'Had a great experience with Mark today. Knowledgeable, professional and very efficient. Highly recommended for comprehensive audiology!',
      name: 'Kristof Wing',
      location: 'London, England',
      image: '/Photo.jpg',
    },
    {
      id: 2,
      quote:
        'Mark and his team were fantastic from start to finish. Friendly, thorough, and explained everything clearly. Highly recommend!',
      name: 'Sarah Collins',
      location: 'Manchester, UK',
      image: '/Photo.jpg',
    },
    {
      id: 3,
      quote:
        'I was nervous about getting hearing aids, but Mark made the whole process comfortable and easy. Couldn’t be happier with the results.',
      name: 'James Thompson',
      location: 'Birmingham, UK',
      image: '/Photo.jpg',
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const previous = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background Dotted Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-1/3 w-64 h-64 border border-dotted border-gray-300 rounded-full opacity-50" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] border border-dotted border-gray-300 rounded-full opacity-40 translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
          Your Hearing Journeys
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16">
          Hear From Our Clients
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={previous}
            aria-label="Previous testimonial"
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F8B400] hover:bg-[#FFD54F] text-white rounded-full flex items-center justify-center shadow transition-transform hover:scale-110 z-10"
          >
            ‹
          </button>

          {/* Testimonial Card */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-3 w-full max-w-sm mx-auto flex flex-col justify-between transition-all hover:shadow-md duration-300 text-left">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-5 rounded-full overflow-hidden relative">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{current.name}</h3>
                <p className="text-xs text-gray-500">{current.location}</p>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm leading-relaxed mb-5">“{current.quote}”</p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              {/* Stars */}
              <div className="flex gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966h4.175c.97 0 1.371 1.24.588 1.81l-3.38 2.455 1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.347 2.355c-.784.57-1.838-.197-1.539-1.118l1.286-3.966-3.38-2.455c-.783-.57-.382-1.81.588-1.81h4.175l1.286-3.966z" />
                    </svg>
                  ))}
              </div>

              {/* Google Icon */}
              <Image
                src="/google-icon.svg"
                alt="Google"
                width={18}
                height={18}
                className="opacity-80"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F8B400] hover:bg-[#FFD54F] text-white rounded-full flex items-center justify-center shadow transition-transform hover:scale-110 z-10"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-6 h-2 bg-[#F8B400]'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
