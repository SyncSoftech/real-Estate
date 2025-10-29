'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Decorative Circles - Exact positioning to match design */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Circle */}
        <div 
          className="absolute border-2 border-dashed border-gray-600 rounded-full opacity-40"
          style={{
            width: '400px',
            height: '400px',
            top: '-100px',
            right: '-100px',
            animation: 'rotate 30s linear infinite'
          }}
        />
        
        {/* Bottom Left Large Circle */}
        <div 
          className="absolute border-2 border-dashed border-gray-600 rounded-full opacity-30"
          style={{
            width: '700px',
            height: '700px',
            bottom: '-200px',
            left: '-200px',
            animation: 'rotate 40s linear infinite reverse'
          }}
        />
        
        {/* Bottom Right Circle */}
        <div 
          className="absolute border-2 border-dashed border-gray-600 rounded-full opacity-25"
          style={{
            width: '300px',
            height: '300px',
            bottom: '-50px',
            right: '-50px',
            animation: 'rotate 25s linear infinite'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-20">
          <div className="inline-block">
            {/* Simple text-based logo matching the design */}
            <div className="text-3xl font-light tracking-wider">
            NAMANKAR
              <span className="inline-flex items-center mx-1">
                
              </span>
              HEARING
            </div>
            <div className="text-sm font-light tracking-[0.4em] mt-2">SERVICES</div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-16 max-w-4xl mx-auto">
          We take care of your hearing, so you won't miss a thing
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Book Now Button - Yellow */}
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-7 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Book Now
            <span className="text-sm">›</span>
          </Link>

          {/* Contact Us Button - White */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black px-7 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;