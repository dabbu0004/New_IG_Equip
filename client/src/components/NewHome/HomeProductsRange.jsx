import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import homeProductsRangeData from "../../data/HomeProductsRangeData";

const HomeProductRange = () => {
  const productsButtonRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const button = productsButtonRef.current;

    if (!button) return undefined;

    const handleEnter = () => {
      gsap.to(button, { scale: 1.1, y: -3, duration: 0.12, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(button, { scale: 1, y: 0, duration: 0.12, ease: "power2.out" });
    };

    const handleDown = () => {
      gsap.to(button, { scale: 0.98, duration: 0.08, ease: "power2.out" });
    };

    const handleUp = () => {
      gsap.to(button, { scale: 1.1, duration: 0.08, ease: "power2.out" });
    };

    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);
    button.addEventListener("mousedown", handleDown);
    button.addEventListener("mouseup", handleUp);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
      button.removeEventListener("mousedown", handleDown);
      button.removeEventListener("mouseup", handleUp);
    };
  }, []);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
        return;
      }
      if (window.innerWidth < 1280) {
        setCardsPerView(2);
        return;
      }
      setCardsPerView(4);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handlePrevClick = () => {
    if (currentIndex === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    if (currentIndex >= products.length - cardsPerView) return;
    setDirection(1);
    setCurrentIndex((prev) => Math.min(products.length - cardsPerView, prev + 1));
  };

  const products = homeProductsRangeData;

  const isMobileView = cardsPerView === 1;
  const visibleProducts = isMobileView
    ? products
    : products.slice(currentIndex, currentIndex + cardsPerView);
  const gridClass = cardsPerView === 1 ? "grid-cols-1" : cardsPerView === 2 ? "grid-cols-2" : "grid-cols-4";

  return (
    <section className="w-full bg-gray-50  py-16 md:py-15 md:pb-10 overflow-x-hidden overflow-y-visible relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl flex flex-col items-center text-center md:items-start md:text-left">
            <span className="text-gray-600 font-semibold self-center md:self-start text-md tracking-tight block mb-2">
              Our Product Range
            </span>
            <h2 className="text-4xl md:text-5xl self-center md:self-start font-bold tracking-tight  text-gray-700 mb-3">
              Core Solutions
            </h2>
            <p className="text-gray-600 md:w-[80%]  text-base md:text-lg max-w-2xl">
              End-to-end gas energy products engineered for reliability and fuel efficiency.
            </p>
          </div>
          
          <Link
            ref={productsButtonRef}
            to="/products"
            className="inline-flex items-center justify-center bg-[#f48131] hover:bg-[#e06d1f] text-white px-8 py-3.5 rounded-md text-lg font-bold shadow-md transition-colors duration-300"
           >
            View All Products
          </Link>
        </div>

        {/* Product Grid / Slider Track */}
        <div className="relative w-full group">
          
          {/* Left Arrow Button */}
          <motion.button 
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute -left-4 xl:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-md bg-[#f48131] text-white shadow-md transition-all duration-300 z-10 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-xl"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </motion.button>

          {/* Right Arrow Button */}
          <motion.button 
            onClick={handleNextClick}
            disabled={currentIndex >= products.length - cardsPerView}
            className="hidden md:flex absolute -right-4 xl:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-md bg-[#f48131] text-white shadow-md transition-all duration-300 z-10 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-xl"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>

          {/* Swipe-like Grid Transition */}
          <div className="overflow-x-hidden overflow-y-visible py-2">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${currentIndex}-${cardsPerView}`}
                className={`grid ${gridClass} gap-4 md:gap-3`}
                initial={{ opacity: 0.7, x: direction === 1 ? 90 : -90 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.7, x: direction === 1 ? -90 : 90 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {visibleProducts.map((product) => (
                  <motion.div 
                    key={product.id} 
                    className="flex flex-col bg-white rounded-2xl overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-transparent hover:border-gray-100 transform transition-transform hover:scale-[1.03] origin-center"
                  >
                {/* Image Container */}
                <div className="w-full aspect-[4/3]  overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="block absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-3 md:pb-6">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    {product.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-700  md:-mt-1 mb-3">
                    {product.title}
                  </h4>
                  <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed md:-mt-1 mb-3 flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <Link 
                    to={product.link} 
                    className="inline-flex items-center gap-2 text-[#333333] font-bold text-sm md:text-md hover:text-[#f48131] transition-colors mt-auto w-max"
                  >
                    Learn More 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-[#f48131]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeProductRange;