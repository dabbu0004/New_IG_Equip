import React, { useEffect, useRef } from "react";

const Gallery = () => {
  const images = [
    "/images/image/41.webp",
    "/images/image/42.webp",
    "/images/image/43.webp",
    "/images/image/44.webp",
    "/images/image/45.webp",
    "/images/image/46.webp",
    "/images/image/47.webp",
    "/images/image/48.webp",
    "/images/image/49.webp",
    "/images/image/50.webp",
    "/images/image/51.webp",
    "/images/image/52.webp",
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const scrollAmount = container.offsetWidth;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 5
      ) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-400 py-14 px-4 md:px-12 lg:px-20">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-wide drop-shadow-md">
          Project Gallery
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-5 scroll-smooth hide-scrollbar px-1 sm:px-2"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-[48%] md:w-[30%] lg:w-[22%] h-52 sm:h-60 md:h-64 bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
