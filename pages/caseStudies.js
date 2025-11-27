"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * ProjectsSection.js
 *
 * - Tailwind CSS required.
 * - Uses the same uploaded image for every card:
 *   /mnt/data/02cae41e-0479-42cc-9c44-06e6f19dbfca.png
 *
 * - Features:
 *   * Top blue banner with title + description
 *   * Breadcrumb
 *   * Search input with button
 *   * Filter select controls (Sector / Capability / Country)
 *   * Grid of cards (image + beige content area + rounded corners)
 *   * Pagination controls (prev/next + page numbers)
 *
 * You can plug real data easily by replacing the SAMPLE_PROJECTS array.
 */

const IMAGE_URL = "/mnt/data/02cae41e-0479-42cc-9c44-06e6f19dbfca.png";

const SAMPLE_PROJECTS = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title:
    i % 4 === 0
      ? "Braunschweig Municipal Hospital Programme, Germany"
      : i % 4 === 1
      ? "AENA, Brazil"
      : i % 4 === 2
      ? "Khazna Data Centers, UAE"
      : "World Expo 2025 Osaka, Australia Pavilion, Japan",
  description:
    i % 4 === 0
      ? "Increasing capacity and improving productivity at Braunschweig Municipal Hospital's brownfield major investment programme."
      : i % 4 === 1
      ? "Supporting Aena to modernise and expand 11 airports across Brazil."
      : i % 4 === 2
      ? "Supporting Khazna's mission to expand world-class data capacity across the Middle East."
      : "Delivering a global platform to showcase the best of Australia to the world.",
  minutes: (i % 5) + 2,
  image: IMAGE_URL,
}));

export default function ProjectsSection() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("");
  const [capability, setCapability] = useState("");
  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  // filter + search logic (simple)
  const filtered = useMemo(() => {
    let arr = SAMPLE_PROJECTS.slice();

    // naive example filters (not connected to actual values)
    if (sector) arr = arr.filter((_, i) => (i % 3).toString() === sector);
    if (capability) arr = arr.filter((_, i) => (i % 4).toString() === capability);
    if (country) arr = arr.filter((_, i) => (i % 5).toString() === country);

    if (query && query.trim().length > 0) {
      const q = query.trim().toLowerCase();
      arr = arr.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return arr;
  }, [query, sector, capability, country]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  const resetFilters = () => {
    setSector("");
    setCapability("");
    setCountry("");
    setQuery("");
    setPage(1);
  };

  return (<>
    <main className=" mx-10 bg-white">
      {/* Top blue banner */}
      <header className="bg-[#163c72] -mb-20 text-white rounded-b-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Projects</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
            We are involved in many of the world's most impactful construction
            projects and programmes. See where our work has helped to transform
            communities.
          </p>
        </div>
      </header>

      {/* Content area */}
      <div className=" bg-white rounded-t-2xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <nav className="flex items-center gap-2">
            <a href="#" className="hover:underline text-[#0f4b7f]">
              Home
            </a>
            <span>›</span>
            <span className="text-gray-700">Outcomes</span>
          </nav>
        </div>

        {/* Search */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>

          <div className="flex gap-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#163c72] focus:border-transparent"
            />
            <button
              onClick={() => setPage(1)}
              className="bg-[#111827] text-white px-4 py-3 rounded-md text-sm flex items-center gap-2"
            >
              Search
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <hr className="mb-6" />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="text-sm font-semibold text-gray-700">FILTER BY</div>

            <select
              value={sector}
              onChange={(e) => {
                setSector(e.target.value);
                setPage(1);
              }}
              className="border rounded-md px-4 py-2 text-sm outline-none"
            >
              <option value="">Sector</option>
              <option value="0">Sector 0</option>
              <option value="1">Sector 1</option>
              <option value="2">Sector 2</option>
            </select>

            <select
              value={capability}
              onChange={(e) => {
                setCapability(e.target.value);
                setPage(1);
              }}
              className="border rounded-md px-4 py-2 text-sm outline-none"
            >
              <option value="">Capability</option>
              <option value="0">Capability 0</option>
              <option value="1">Capability 1</option>
              <option value="2">Capability 2</option>
              <option value="3">Capability 3</option>
            </select>

            <select
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setPage(1);
              }}
              className="border rounded-md px-4 py-2 text-sm outline-none"
            >
              <option value="">Country</option>
              <option value="0">Country 0</option>
              <option value="1">Country 1</option>
              <option value="2">Country 2</option>
            </select>

            <button
              onClick={resetFilters}
              className="text-sm text-[#163c72] underline ml-4"
            >
              Reset filters
            </button>
          </div>

          <div className="text-sm text-gray-700">
            Showing {Math.min((page - 1) * perPage + 1, total)}-
            {Math.min(page * perPage, total)} of {total} results
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pageItems.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-transparent hover:shadow-md transition"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#f2ebe3] p-4 md:p-5 rounded-b-2xl">
                <h3 className="font-serif text-lg md:text-lg font-semibold leading-tight mb-2">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 1v11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 21H3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{p.minutes} minutes</span>
                  </div>

                  <a
                    href="#"
                    className="text-[#0f1724] text-sm underline"
                    aria-label={`Read ${p.title}`}
                  >
                    Read
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((s) => Math.max(1, s - 1))}
            className="w-10 h-10 rounded-md border flex items-center justify-center"
            aria-label="Previous page"
          >
            ‹
          </button>

          {/* page numbers: show first 1..n with compact logic */}
          {Array.from({ length: totalPages }).map((_, i) => {
            const pnum = i + 1;
            // show first 3, last 3 and around current
            const show =
              totalPages <= 7 ||
              pnum <= 2 ||
              pnum > totalPages - 2 ||
              Math.abs(pnum - page) <= 1;
            if (!show) {
              // insert ellipsis only once for each gap (handled by returning null here)
              return (
                <span key={`gap-${i}`} className="px-2 text-gray-500">
                  {i === 2 || (i === page + 1 && totalPages > 7) ? "…" : null}
                </span>
              );
            }
            return (
              <button
                key={pnum}
                onClick={() => setPage(pnum)}
                className={`w-10 h-10 rounded-md border flex items-center justify-center ${
                  page === pnum ? "bg-[#163c72] text-white" : "bg-white"
                }`}
                aria-current={page === pnum ? "page" : undefined}
              >
                {pnum}
              </button>
            );
          })}

          <button
            onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
            className="w-10 h-10 rounded-md border flex items-center justify-center"
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      </div>
      
    </main>
<section className="w-full bg-[#f2eee7] mb-5">
      <div className="max-w-[2000px] mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT IMAGE (full height) */}
        <div className="w-full h-[420px] lg:h-[500px] xl:h-[520px] overflow-hidden">
          <img
            src="/mnt/data/d5d94ccf-a25e-4bf8-8ca8-59278f73d11b.png"
            alt="Client story image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT BOX */}
        <div className="bg-[#f2eee7] flex items-center">
          <div className="p-10 lg:p-16 xl:p-20 max-w-xl">

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Client stories
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Our clients are at the heart of everything we do.
              Together, we work across the world’s most impactful
              major projects and programmes.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-black/80 transition">
              View our client stories
            </button>

          </div>
        </div>
      </div>
    </section>
    </>

  );
}
