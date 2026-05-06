import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeHero = () => {
  const carouselImages = [
    "/images/image/NewHomeHero.png",
    "/images/image/NewHomeHero.png",
    "/images/image/NewHomeHero.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [carouselImages.length]);

  return (
    <>
      <div className="max-w-7xl container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10 py-10 bg-white">
          {/* Left Section - Animated */}
          <motion.div
            className="w-full pt-12 lg:w-1/2 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Top Badge */}
            <span className="inline-block bg-[#e5e7eb] text-gray-800 px-4 py-1.5 rounded text-sm md:text-base font-medium mb-4">
              India's Leading Gas Energy Solutions Provider
            </span>
          <h1 className="text-4xl md:text-[3rem]  font-extrabold text-[#333333] leading-[1.1] tracking-tight mb-6">
              Power Your Industry <br className="hidden md:block" />
              with Clean Gas <span className="text-[#f48131]">Energy</span>
            </h1>

            <p className="text-gray-900 text-base md:text-lg mb-6">
              Inventive Gas Equipment Pvt. Ltd. (IGE) is a leader in gas
              gensets, dual-fuel kits, and emission control devices (RECD). We
              provide eco-friendly, cost-effective, and reliable power solutions
              that help industries cut costs, reduce emissions, and meet
              environmental standards.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-400 to-red-500  text-white px-6 py-4 rounded-md text-xl font-extrabold shadow-md transition-all duration-300"
              >
             Explor Products
              </motion.button>  
            </Link>
          </motion.div>

          {/* Right Section - Image with animation */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center mb-10 lg:mb-0"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              key={currentImageIndex}
              src={carouselImages[currentImageIndex]}
              alt="Inventive Gas Equipment – Industrial Gas Genset for Clean Power"
              className="w-full max-w-md md:max-w-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Pagination Dots */}
            <div className="mt-6 flex gap-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex
                      ? "bg-[#f48131]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
