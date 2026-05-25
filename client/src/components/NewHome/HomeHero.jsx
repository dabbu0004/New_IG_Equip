import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import homeHeroSlides from "../../data/HomeHeroData";

const HomeHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = homeHeroSlides;

  // Auto-slide interval
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Slightly faster cycle for new title/image changes

    return () => clearInterval(intervalId);
  }, [slides.length, isPaused]);

  const activeSlide = slides[currentImageIndex] || slides[0] || {};

  return (
    <section className="w-full bg-gradient-to-br from-[#f48131]/20   to-[#f48131]/10 pt-10 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* ========================================= */}
        {/* LEFT SECTION - TEXT DATA (Animated)       */}
        {/* ========================================= */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left min-h-[320px] justify-center md:-mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex} // Key forces re-animation when slide changes
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center md:items-start"
            >
              {/* Dynamic Badge */}
              {activeSlide.badge && (
                <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-md text-sm md:text-base mb-4">
                  {activeSlide.badge}
                </span>
              )}

              {/* Dynamic Title */}
              <h1 className="text-3xl md:text-[2.5rem] font-semibold text-[#303234] leading-[1.12] mb-4">
                {activeSlide.title}
                {activeSlide.titleBreak && <br className="hidden md:block" />}
                <span className="block">
                  {activeSlide.subtitle}{" "}
                  <span className="text-[#f48131]">{activeSlide.highlight}</span>
                </span>
              </h1>

              {/* Dynamic Description */}
              {activeSlide.description && (
                <p className="text-gray-700 text-sm md:text-base mb-5 max-w-lg">
                  {activeSlide.description}
                </p>
              )}

              {/* Dynamic Button */}
              {activeSlide.buttonText && activeSlide.buttonLink && (
                <Link to={activeSlide.buttonLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="inline-flex items-center justify-center bg-[#f48131] hover:bg-[#e06d1f] text-white px-8 py-3.5 rounded-md text-lg font-bold shadow-md transition-colors duration-300"
                  >
                    {activeSlide.buttonText}
                  </motion.button>
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================= */}
        {/* RIGHT SECTION - IMAGE (Animated)          */}
        {/* ========================================= */}
        <div className="w-full md:w-[60%] flex flex-col items-center min-h-[350px] justify-center relative">
          <div
            className="relative w-full flex items-center justify-center h-[340px] md:h-[460px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              {activeSlide.image && (
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.02, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute w-full max-w-lg md:max-w-xl rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden group"
                >
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.imageAlt || "Inventive Gas Equipment"}
                    className="w-full h-[280px] md:h-[360px] object-contain transition-transform duration-300 ease-out scale-[1.03] group-hover:scale-[1.08]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          {slides.length > 1 && (
            <div className="mt-8 flex gap-3 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-[#f48131] w-8" : "bg-gray-300 w-2.5 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default HomeHero;