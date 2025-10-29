'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { MdHearing } from "react-icons/md";
import { FaEarListen } from "react-icons/fa6";
import { FaEarDeaf } from "react-icons/fa6";




export default function ServicesSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black text-white py-20 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 border-2 border-dashed border-gray-600 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 border-2 border-dashed border-gray-600 rounded-full translate-y-32 -translate-x-32" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Our Services</h2>
            <p className="text-gray-300 leading-relaxed">
              Your hearing health is as unique as you are. Before any examination, we take time to discuss 
              your overall wellness and the impact your hearing is having on you and your life day to day.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <span className="text-2xl">‹</span>
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <span className="text-2xl">›</span>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { icon: '🧽', title: 'Wax Removal', desc: 'Blocked ears can have a significant impact, so we offer same-day appointments at our central London clinic to restore your hearing back to good health.' },
            { icon: '🔬', title: 'Hearing Tests', desc: "It's never too late to give your ears the love and care they deserve. Book a hearing health consultation in our London clinic from £50." },
            { icon: <MdHearing />, title: 'Hearing Aids', desc: 'We believe in custom solutions. Every consultation is unique, so we design specific biological and technological goals for meaningful impact.' },
            { icon: '🦻', title: 'Hearing Loss Consultation', desc: 'The first and most important part of this session is to understand how the changes you have noticed are impacting you and your lifestyle. We then perform a full examination of your ears, along with two types of tests, Otoscopy and Audiometry, following this we discuss the outcome during the same appointment.' },
            { icon: <FaEarListen />, title: 'Aftercare', desc: 'Once you have been fitted with your hearing aids, your journey doesn’t end there. We are here to support you and offer extensive aftercare. This can be as simple as changing the batteries to adjusting your hearing aids, all included in the price of hearing aids.' },
            { icon: <FaEarDeaf />, title: 'Care Transfer', desc: 'If you’ve been prescribed hearing aids by another provider but need expert care, adjustments, or ongoing support, we’re here to help. Our one-off transfer service ensures your hearing aids are optimised for you, with continued maintenance for long-term hearing health.' }
          ].map((service, i) => (
            <div key={i} className="flex-shrink-0 w-[40rem] lg:w-[40rem] bg-gray-800 rounded-2xl px-5  py-2 hover:bg-gray-750 transition-colors">
              <div className="text-3xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-light mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>
              <div className="flex gap-3">
                <Link href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-600 hover:border-gray-500 text-sm transition-colors">
                  <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xs">i</span>
                  </span>
                  Learn More
                </Link>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-medium transition-colors">
                  Book Now
                  <span>›</span>  
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}