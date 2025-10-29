import React, { useState, useEffect } from 'react';

const PartnerSlider = () => {
  const [offset, setOffset] = useState(0);

  // Add your partner logos here
  const partners = [
    { name: 'Phonak', logo: '/Sliderpatner/image1.png' },
    { name: 'ReSound', logo: '/Sliderpatner/image2.png' },
    { name: 'Widex', logo: '/Sliderpatner/image3.png' },
    { name: 'Oticon', logo: '/Sliderpatner/image4.png' },
    { name: 'Starkey', logo: '/Sliderpatner/image5.png' },
    { name: 'Signia', logo: '/Sliderpatner/image6.png' },
    { name: 'Signia', logo: '/Sliderpatner/image7.png' },
    { name: 'Signia', logo: '/Sliderpatner/image8.png' },
    { name: 'Signia', logo: '/Sliderpatner/image9.png' },
    { name: 'Signia', logo: '/Sliderpatner/image10.png' },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  // Auto-scroll animation
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev - 1;
        // Reset when first set of logos fully scrolls out
        if (Math.abs(newOffset) >= (partners.length * 200)) {
          return 0;
        }
        return newOffset;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mt-14  ">
        <div className="flex items-center justify-start gap-8 mb-8">
          <p className="text-lg mt-2 font-bold text-gray-500 whitespace-nowrap">
            Partnering with:
          </p>
          
          <div className="flex-1 overflow-hidden relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div
              className="flex items-center gap-12"
              style={{
                transform: `translateX(${offset}px)`,
                transition: 'none',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: '160px' }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="text-gray-400 font-medium text-center">${partner.name}</div>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;