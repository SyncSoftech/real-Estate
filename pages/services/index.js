"use client";

import { useEffect, useMemo, useState } from "react";




const IMG = "/mnt/data/b560d3f2-8c7c-4780-bc4a-fa59c9775c5c.png";

const CAPABILITIES = [
  {
    title: "Asset management",
    desc: "Supporting the management of built or future assets to help realise value.",
    image: IMG,
  },
  {
    title: "Building consultancy",
    desc: "Unlocking hidden value, discovering savings and safeguarding real estate assets.",
    image: IMG,
  },
  {
    title: "Controls and performance",
    desc: "Setting up projects and programmes that ensure rigorous control and drive optimal performance.",
    image: IMG,
  },
  {
    title: "Cost and commercial management",
    desc: "Enhancing commercial performance on major projects and programmes to deliver sustainable value.",
    image: IMG,
  },
  {
    title: "Digital",
    desc: "Driving performance across projects and programmes through digital, data and technology.",
    image: IMG,
  },
  {
    title: "Procurement and supply chain",
    desc: "Excelling capability, capacity and performance through effective procurement and supply chain management.",
    image: IMG,
  },
  {
    title: "Programme advisory",
    desc: "Making major projects and programmes investible and set up for high performance.",
    image: IMG,
  },
  {
    title: "Project management",
    desc: "Assuring project success with robust controls, systems and processes.",
    image: IMG,
  },
  {
    title: "Sustainability",
    desc: "Delivering sustainable change by accelerating the journey to net zero.",
    image: IMG,
  },
];

export default function Services() {
 

  
 const IMG = "/mnt/data/0e3f1666-3214-4252-99bf-8cb779f19844.png";

  const projects = [
    { title: "The Elizabeth Line, UK", image: IMG },
    { title: "Salesforce Tower Sydney, Australia", image: IMG },
    { title: "Shell Real Estate decarbonisation, global", image: IMG },
  ];
 

  return (<>
    <main className=" mx-10 bg-white">
      {/* Top blue banner */}
      <header className="bg-[#163c72] -mb-20 text-white rounded-b-2xl pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Services</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
            We are involved in many of the world's most impactful construction
            projects and programmes. See where our work has helped to transform
            communities.
          </p>
        </div>
      </header>

      {/* Content area */}
      <div className=" bg-white rounded-t-2xl mx-auto px-6 py-8">


 <main className="min-h-screen bg-white text-[#0f1724]">
      {/* Breadcrumb + top heading & copy */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <nav className="text-sm text-[#0f4b7f] mb-6">
          <a className="hover:underline" href="#">Home</a>
          <span className="mx-3">›</span>
          <span>About us</span>
        </nav>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-6">
          We transform together
        </h1>

        <div className="space-y-4 text-lg leading-relaxed text-gray-800 max-w-4xl">
          <p>
            Transformation is about rethinking what's possible and delivering projects that shape a better future.
          </p>
          <p>
            Great projects don't just happen. They're built on bold ideas, collaboration and a <a href="#" className="text-[#0f4b7f] underline">shared purpose</a>.
          </p>
          <p>
            By working closely with our clients and partners, we deliver projects and programmes that drive businesses forward, help improve people's lives and safeguard the planet.
          </p>
          <p>
            Our expertise spans real estate, infrastructure, energy and natural resources – the segments that define how we live, work and connect. From delivering resilient cities to advancing clean energy, we approach every challenge with the same goal – to make a meaningful and lasting impact.
          </p>
          <p>
            With over 22,000 experts across more than 60 countries, we bring unmatched talent and insight to every project, combining deep local knowledge with a global perspective.
          </p>
        </div>
      </div>

     
<section className="w-full bg-[#f3efe7] py-10 md:py-14">
      {/* Hidden image so your environment registers uploaded asset */}
      <img
        src="/mnt/data/d6ddf2b5-74ca-4920-8a64-f86b9f5ed429.png"
        alt="uploaded"
        className="hidden"
      />

      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Our programmatic approach
        </h2>

        <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
          We drive exceptional outcomes for clients on the world’s most
          demanding projects and programmes by applying our insight, innovation,
          learning and data. Our programmatic approach means performance and
          value are optimised at every stage.
        </p>

        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          Harnessing the potential of digital, driving productivity and
          performance, building resilience and embedding action on
          decarbonisation are all at the heart of what we do.
        </p>
      </div>
    </section>








    </main>

        </div>
        

        <section className="w-full bg-white py-10 md:py-14">
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
          Our capabilities
        </h2>

        {/* 3×3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              {/* Top Image */}
              <div className="h-36 md:h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Section */}
              <div className="p-5 bg-[#f2ebe3] rounded-b-xl">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Register uploaded image for Next runtime */}
      <img
        src="/mnt/data/b560d3f2-8c7c-4780-bc4a-fa59c9775c5c.png"
        alt="hidden"
        className="hidden"
      />
    </section>
      
    </main>


 
    <section className="w-full bg-white py-12 md:py-16">

      {/* register uploaded image */}
      <img src={IMG} alt="" className="hidden" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold">
          Our projects
        </h2>

        <p className="text-gray-700 mt-2 mb-8 text-sm md:text-base">
          Find out more about the outcomes we’ve delivered for<br className="hidden md:block" /> clients.
        </p>

        {/* Cards Row */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">

          {/* Card 1 */}
          <div className="w-full sm:w-1/3">
            <div className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition h-72 md:h-80">
              <img src={projects[0].image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute left-4 right-4 bottom-4">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight">{projects[0].title}</h3>
                <div className="mt-3 flex justify-end">
                  <div className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5l8 7-8 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (Center, lifted) */}
          <div className="w-full sm:w-1/3 sm:-mt-6">
            <div className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition h-80 md:h-96">
              <img src={projects[1].image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute left-4 right-4 bottom-4">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight">{projects[1].title}</h3>
                <div className="mt-3 flex justify-end">
                  <div className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5l8 7-8 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/3">
            <div className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition h-72 md:h-80">
              <img src={projects[2].image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute left-4 right-4 bottom-4">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight">{projects[2].title}</h3>
                <div className="mt-3 flex justify-end">
                  <div className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5l8 7-8 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Button */}
        <div className="flex justify-end mt-8">
          <button className="px-4 py-2 text-sm rounded-md border border-gray-400 hover:bg-gray-50 transition">
            See all projects
          </button>
        </div>

      </div>
    </section>

    </>

  );
}
