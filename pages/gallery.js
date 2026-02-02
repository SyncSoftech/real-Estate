

"use client";
import { useEffect, useState, useRef } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const itemRefs = useRef({});
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const filtersRef = useRef(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Denmark", label: "Denmark" },
    { id: "Mauritius", label: "Mauritius" },
    { id: "Sweden", label: "Sweden" },
    { id: "UnitedKingdom", label: "United Kingdom" },
  ];

  const galleryItems = [
    { id: 1, category: 'Denmark', image: '/gallery/Denmark.webp', location: 'Denmark' },
    { id: 2, category: 'Denmark', image: '/gallery/Denmark1.webp', location: 'Denmark' },
    { id: 3, category: 'Mauritius', image: '/gallery/Mauritius.webp', location: 'Mauritius' },
    { id: 4, category: 'Mauritius', image: '/gallery/Mauritius1.webp', location: 'Mauritius' },
    { id: 5, category: 'Mauritius', image: '/gallery/Mauritius2.webp', location: 'Mauritius' },
    { id: 6, category: 'Mauritius', image: '/gallery/Mauritius3.webp', location: 'Mauritius' },
    { id: 7, category: 'Mauritius', image: '/gallery/Mauritius4.webp', location: 'Mauritius' },
    { id: 8, category: 'Sweden', image: '/gallery/Swedon.webp', location: 'Sweden' },
    { id: 9, category: 'Sweden', image: '/gallery/Swedon1.webp', location: 'Sweden' },
    { id: 10, category: 'UnitedKingdom', image: '/gallery/UnitedKingdom.webp', location: 'United Kingdom' },
    { id: 11, category: 'UnitedKingdom', image: '/gallery/UnitedKingdom1.webp', location: 'United Kingdom' },
    { id: 12, category: 'UnitedKingdom', image: '/gallery/UnitedKingdom2.webp', location: 'United Kingdom' },
    { id: 13, category: 'UnitedKingdom', image: '/gallery/UnitedKingdom3.webp', location: 'United Kingdom' },
  ];

  // Filter items
  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const displayedItems = filteredItems.slice(startIdx, startIdx + itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  // Intersection Observer for header, search, and filters
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            if (entry.target === searchRef.current) setSearchVisible(true);
            if (entry.target === filtersRef.current) setFiltersVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (searchRef.current) observer.observe(searchRef.current);
    if (filtersRef.current) observer.observe(filtersRef.current);

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute("data-item-id");
            if (itemId) {
              setVisibleItems((prev) => new Set([...prev, itemId]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    Object.values(itemRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [displayedItems]);

  // Reset visible items when page changes
  useEffect(() => {
    setVisibleItems(new Set());
  }, [currentPage, selectedCategory, searchTerm]);

  const openLightbox = (src, alt) => {
    setLightboxSrc(src);
    setLightboxAlt(alt || "Project image");
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#bac6c7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          }`}
        >
          <h1 className="text-5xl font-bold text-[#123e6a] mb-4">Our Gallery</h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Explore our portfolio of transformative projects across sectors and geographies.
          </p>
        </div>

        {/* Search Bar */}
        <div
          ref={searchRef}
          className={`mb-8 max-w-md mx-auto relative transition-all duration-1000 delay-200 ${
            searchVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <input
            type="text"
            placeholder="Search by location..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(0);
            }}
            className="w-full pl-4 pr-4 py-3 bg-white border border-[#d4ccc4] rounded-lg text-[#123e6a] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#08a3e0]"
          />
        </div>

        {/* Category Filter */}
        <div
          ref={filtersRef}
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            filtersVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-500 ${
                selectedCategory === cat.id
                  ? "bg-[#08a3e0] text-white"
                  : "bg-white text-[#123e6a] border border-[#d4ccc4] hover:border-[#08a3e0]"
              }`}
              style={{
                transitionDelay: filtersVisible ? `${400 + idx * 50}ms` : "0ms",
                opacity: filtersVisible ? 1 : 0,
                transform: filtersVisible ? "scale(1)" : "scale(0.8)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {displayedItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (itemRefs.current[item.id] = el)}
                  data-item-id={item.id}
                  className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${
                    visibleItems.has(String(item.id))
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: visibleItems.has(String(item.id))
                      ? `${index * 100}ms`
                      : "0ms",
                  }}
                >
                  {/* Image */}
                  <div
                    className="cursor-pointer"
                    onClick={() => openLightbox(item.image, item.title)}
                  >
                    <img
                      src={item.image}
                      alt={item.location}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Location overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className={`text-2xl font-bold text-white drop-shadow-lg transition-all duration-700 ${
                        visibleItems.has(String(item.id))
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-8"
                      }`}
                      style={{
                        transitionDelay: visibleItems.has(String(item.id))
                          ? `${index * 100 + 300}ms`
                          : "0ms",
                      }}
                    >
                      {item.location}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={handlePrevPage}
                  className="px-6 py-2 bg-white text-[#123e6a] border border-[#d4ccc4] rounded-full font-medium hover:border-[#08a3e0] transition-all"
                >
                  Prev
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      className={`w-10 h-10 rounded-full font-semibold transition-all ${
                        currentPage === idx
                          ? "bg-[#08a3e0] text-white"
                          : "bg-white text-[#123e6a] border border-[#d4ccc4] hover:border-[#08a3e0]"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNextPage}
                  className="px-6 py-2 bg-white text-[#123e6a] border border-[#d4ccc4] rounded-full font-medium hover:border-[#08a3e0] transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-[#666]">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-lg font-medium hover:text-[#08a3e0] transition-colors"
            >
              Close
            </button>
            <img
              src={lightboxSrc}
              alt={lightboxAlt}
              className="max-w-full max-h-[90vh] mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}