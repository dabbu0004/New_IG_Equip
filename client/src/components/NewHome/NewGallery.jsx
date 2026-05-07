import React from "react";

const NewGallery = () => {
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

  // Duplicate the array to create a seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-24 overflow-hidden border-t border-gray-100">
      
      {/* --- Smooth CSS Marquee Animation --- */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          /* Pause the animation when a user hovers to let them look at an image */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Header Section */}
        <div>
          <span className="text-sm md:text-base font-extrabold text-[#f48131] uppercase tracking-widest mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
            Project Gallery
          </h2>
        </div>
        
        {/* Optional Context Text */}
        <p className="text-gray-600 text-base md:text-lg max-w-md font-medium pb-1">
          A glimpse into our successful installations and manufacturing excellence across India.
        </p>
      </div>

      {/* Infinite Scrolling Gallery Track */}
      <div className="relative w-full">
        {/* Subtle gradient fades on the left and right edges for a professional look */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-6 px-3">
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-200"
            >
              {/* Image with zoom effect */}
              <img
                src={src}
                alt={`Project feature ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Premium Glassmorphism Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-[#f48131] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewGallery;