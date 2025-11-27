"use client";

import { useEffect, useState } from "react";
const IMAGE = "/mnt/data/40808545-d419-4597-86e8-ad8cfe54848f.png";

export default function Variation() {
    const slides = [
    {
      id: 1,
      label: "OUTCOMES",
      title: "World Expo 2025 Osaka,\nAustralia Pavilion, Japan",
      description:
        "Delivering a global platform to showcase the best of Australia to the world.",
      image: IMAGE,
    },
    // more slides can be added here if needed
  ];

  const [idx, setIdx] = useState(0);
  const total = slides.length;

  useEffect(() => {
    // optional autoplay (comment out if not wanted)
    // const t = setInterval(() => setIdx((i) => (i + 1) % total), 7000);
    // return () => clearInterval(t);
  }, [total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const slide = slides[idx];





  const CARD_IMAGE = "/mnt/data/fd073204-4981-43f3-8f68-8e237203236b.png";

const INSIGHTS = [
  {
    id: 1,
    title: "Navigating procurement of complex labs",
    description:
      "These facilities support cutting-edge science but must do so in a way that meets safety, regulatory and biosecurity standards.",
    minutes: 7,
    date: "04 Nov 25",
    image: CARD_IMAGE,
  },
  {
    id: 2,
    title: "Can agile programme management unlock US airports?",
    description:
      "Air passenger numbers have grown since COVID, igniting new plans for airport development across the US – as traditional development is not effective.",
    minutes: 6,
    date: "24 Sept 25",
    image: CARD_IMAGE,
  },
  {
    id: 3,
    title: "China’s construction market",
    description:
      "China’s construction market is in transition, but its cost and supply chain advantage remain intact.",
    minutes: 6,
    date: "28 Aug 25",
    image: CARD_IMAGE,
  },
  {
    id: 4,
    title: "The way forward for Japan's construction industry",
    description:
      "Japan has re-entered the global spotlight as one of the most expensive construction markets, with five cities in the world’s top 15.",
    minutes: 7,
    date: "13 Aug 25",
    image: CARD_IMAGE,
  },
];



  return (<>
      <section className="w-full bg-white">
      <div className="w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: beige content */}
          <div className="bg-[#f2efe8] p-8 md:p-14 lg:p-20 xl:p-28 rounded-tr-3xl rounded-br-3xl lg:rounded-br-none lg:rounded-tl-3xl">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-[#1f2937]">
                Procurement and <br /> supply chain
              </h1>

              <p className="mt-6 text-base md:text-lg text-[#374151] leading-relaxed">
                Excelling capability, capacity and performance through
                effective procurement and supply chain management.
              </p>
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="w-full h-[360px] md:h-[420px] lg:h-auto overflow-hidden">
            <img
              src="/mnt/data/6a0616d5-01e7-49c2-b793-ab94c3891416.png"
              alt="Procurement and supply chain"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

     <section className="w-full bg-white py-12 lg:py-20">
      {/* hidden uploaded file, in case your environment transforms it */}
      <img
        src="/mnt/data/8731b599-fb3b-40c7-8368-9b74a00c0076.png"
        alt="uploaded"
        className="hidden"
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-700 mb-8">
          <nav className="flex items-center gap-2">
            <a href="#" className="text-[#1a73e8] hover:underline">
              Home
            </a>
            <span>›</span>
            <a href="#" className="text-[#1a73e8] hover:underline">
              Solutions
            </a>
            <span>›</span>
            <span className="text-gray-800">
              Procurement and supply chain
            </span>
          </nav>
        </div>

        {/* Heading 1 */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Harnessing procurement and supply chain expertise to deliver success
        </h1>

        {/* Paragraphs */}
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Today's complex procurement landscape demands agility. Globally heated
          supply chains, sustainability goals, and digital innovations present
          risks and opportunities. These must be navigated to outperform volatile
          markets and drive competitive advantage.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          With our support, clients achieve measurable results throughout the
          procurement life cycle and across their major projects and programmes.
          Clients are assured of best value in the market, improving their
          profitability, productivity, and performance.
        </p>

        {/* Heading 2 */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
          Robust processes for assuring high-performance
        </h2>

        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          We mitigate commercial and legal risks for our clients by ensuring the
          right solutions are embedded through strategy, set up and delivery.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Costs are reduced and organisational resilience realised through our
          progressive approach to procurement strategy, packaging and buying.
          Client progress in priorities such as sustainability and social value
          is accelerated.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          As the first programme manager to be recognised by the{" "}
          <a
            href="#"
            className="text-[#1a73e8] underline hover:text-[#0d5ec6]"
          >
            Chartered Institute of Procurement & Supply (CIPS)
          </a>{" "}
          for excellence in procurement processes, we have a unique global
          hands-on capability to assure our clients.
        </p>
      </div>
    </section>

<section className="w-full relative">
      {/* Background image */}
      <div className="w-full h-[520px] md:h-[640px] lg:h-[720px] relative overflow-hidden">
        <img
          src={slide.image}
          alt={slide.title.replace(/\n/g, " ")}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* content container (left) */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-end lg:items-center">
          <div className="w-full lg:w-1/2 pb-8 lg:pb-0">
            <div className="text-white max-w-xl">
              <div className="text-sm tracking-wide font-medium mb-4 opacity-90">
                {slide.label}
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
                {slide.title}
              </h1>

              <p className="mt-6 text-sm md:text-base max-w-xl leading-relaxed text-white/90">
                {slide.description}
              </p>
            </div>
          </div>

          {/* right-side controls */}
          <div className="hidden lg:flex flex-col items-end gap-6 ml-auto">
            {/* nav buttons + pager */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Previous slide"
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="text-white text-sm">
                {idx + 1} / {total}
              </div>

              <button
                aria-label="Next slide"
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* CTA button */}
            <div>
              <button
                onClick={() => (window.location.href = "/projects")}
                className="px-5 py-3 rounded-md border border-white text-white bg-transparent hover:bg-white/10 transition"
              >
                See all projects
              </button>
            </div>
          </div>
        </div>

        {/* mobile bottom controls (visible on small screens) */}
        <div className="absolute left-6 right-6 bottom-6 lg:hidden flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="text-white text-sm">{idx + 1} / {total}</div>

            <button
              onClick={next}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <button
            onClick={() => (window.location.href = "/projects")}
            className="px-4 py-2 rounded-md border border-white text-white bg-transparent"
          >
            See all projects
          </button>
        </div>
      </div>
    </section>


    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">
          Procurement and supply chain insights
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {INSIGHTS.map((item) => (
            <article
              key={item.id}
              className="rounded-xl overflow-hidden bg-white shadow-sm border border-transparent hover:shadow-md transition"
            >
              {/* Top Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 md:h-44 object-cover rounded-t-xl"
              />

              {/* Card Body */}
              <div className="bg-[#f2ebe3] p-5 rounded-b-xl">
                <h3 className="font-serif font-semibold text-lg leading-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Meta row */}
                <div className="flex items-center justify-start gap-6 text-xs text-gray-700 mt-auto">
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24">
                      <path
                        d="M12 1v11M21 21H3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {item.minutes} minutes
                  </div>

                  <div className="font-medium">{item.date}</div>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="flex justify-end mt-10">
          <button className="px-5 py-3 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
            View all related insights
          </button>
        </div>

      </div>
    </section>




      <div className="w-full bg-white">
      {/* ---------- Hero / Expert Witness ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our expert witnesses</h2>

        <div className="relative rounded-2xl overflow-hidden border border-gray-200">
          {/* Background image (uploaded file path used directly) */}
          <img
            src="/mnt/data/13820750-c936-4854-8415-0103451a35ec.png"
            alt="Expert witness hero"
            className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />

          {/* Text block (left, overlayed) */}
          <div className="absolute inset-0 flex items-end">
            <div className="p-6 md:p-10 lg:p-12 max-w-2xl">
              <div className="text-sm tracking-wide text-white/90 mb-2">Meet our</div>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight mb-4">
                Meet our quantum and delay specialists
              </h3>

              <p className="text-white/90 max-w-xl">
                We provide project advisory and expert witness services for any matters in dispute.
              </p>
            </div>
          </div>

          {/* Right-side circular arrow control */}
          <div className="absolute right-6 bottom-6 flex items-center gap-4">
            <button
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="text-white/90 text-sm">1/1</div>

            <button
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ---------- Contact block ---------- */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get in touch</h2>

        <div className="max-w-xl">
          <div className="font-serif text-xl font-semibold">Gareth Poole</div>
          <div className="text-sm text-gray-700 mb-4">Director</div>

          <ul className="space-y-3">
            <li>
              <a
                href="mailto:info@example.com"
                className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline"
              >
                {/* envelope icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
                  <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 8.5l9 6 9-6" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium">Email</span>
              </a>
            </li>

            <li>
              <a
                href="tel:+4401212623605"
                className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline"
              >
                {/* phone icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.42 2.07.9 3.02a2 2 0 0 1-.45 2.11L9.91 11.09a13.05 13.05 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.95.48 1.97.78 3.02.9A2 2 0 0 1 22 16.92z" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <span className="text-sm font-medium">+44 0121 262 3605</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* hidden additional uploaded image (so environment registers it) */}
      <img
        src="/mnt/data/4aea0afe-b729-43bf-b90a-9f3dfd188e31.png"
        alt="asset"
        className="hidden"
      />
    </div>

</>
  );
}
