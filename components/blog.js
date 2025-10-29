'use client';

import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
            ADVICE & INFORMATION
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
            Hear From Anca & The Team
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
          
          {/* Large Featured Card */}
          <div className="lg:row-span-3 relative">
            <div className="bg-gray-900 rounded-2xl overflow-hidden h-full group cursor-pointer">
              <Link
                href={{
                  pathname: '/blog/[slug]',
                  query: { slug: 'winter-ear-care' },
                }}
              >
                <div className="relative h-64 lg:h-1/2">
                  <Image
                    src="/Newimg.png"
                    alt="Family in winter"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6 text-white h-64 lg:h-1/2 flex flex-col justify-between">
                  <h3 className="text-xl font-light leading-tight mb-4">
                    Tips to Keep Your Ears Safe and Healthy This Winter Season
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors">
                    Read Blog
                    <span className="text-lg">›</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Yellow Highlight Card */}
          <div className="relative">
            <div className="bg-yellow-400 rounded-2xl p-6 h-full group cursor-pointer hover:shadow-lg transition-shadow">
              <Link
                href={{
                  pathname: '/blog/[slug]',
                  query: { slug: 'hearing-aids-technology' },
                }}
              >
                <div className="flex flex-col justify-between h-full min-h-[240px]">
                  <h3 className="text-xl font-light leading-tight text-black mb-6">
                    Hearing Aids — The Tiny Tech Millions Can't Hear Without
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-black hover:text-gray-800 transition-colors">
                    Read Blog
                    <span className="text-lg">›</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Gray Standard Card */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-6 h-full group cursor-pointer hover:shadow-md transition-shadow">
              <Link
                href={{
                  pathname: '/blog/[slug]',
                  query: { slug: 'safe-earwax-removal' },
                }}
              >
                <div className="flex flex-col justify-between h-full min-h-[240px]">
                  <h3 className="text-xl font-light leading-tight text-gray-800 mb-6">
                    The Safest Way to Remove Earwax
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    Read Blog
                    <span className="text-lg">›</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Category Card - Spans 2 columns */}
          <div className="lg:col-span-2 relative">
            <div className="bg-gray-200 rounded-2xl p-6 h-full group cursor-pointer hover:shadow-md transition-shadow">
              <Link
                href={{
                  pathname: '/blog/category/[category]',
                  query: { category: 'health-wellbeing' },
                }}
              >
                <div className="flex flex-col justify-between h-full min-h-[120px]">
                  <h3 className="text-xl font-light leading-tight text-gray-700 mb-4">
                    Hearing Health & Wellbeing Advice
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    Read Our Blog
                    <span className="text-lg">›</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;