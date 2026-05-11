import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const HomeHero = () => {
  const carouselImages = [
    "/images/image/FinalHero.png",
    "/images/image/FinalHero.png",
    "/images/image/FinalHero.png",
   
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroButtonRef = useRef(null);

  useEffect(() => {
    const button = heroButtonRef.current;

    if (!button) return undefined;

    const handleEnter = () => {
      gsap.to(button, { scale: 1.04, y: -2, duration: 0.25, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(button, { scale: 1, y: 0, duration: 0.25, ease: "power2.out" });
    };

    const handleDown = () => {
      gsap.to(button, { scale: 0.98, duration: 0.12, ease: "power2.out" });
    };

    const handleUp = () => {
      gsap.to(button, { scale: 1.04, duration: 0.12, ease: "power2.out" });
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
        <div className="flex flex-col-reverse lg:flex-row  md:mb-20 items-center md:justify-between px-6 md:px-10 py-10 bg-white">
          {/* Left Section - Animated */}
          <div
            className="w-full pt-12 lg:w-1/2 text-center md:text-left flex flex-col items-center md:items-start"
          >
            {/* Top Badge */}
            <span className="inline-block bg-gray-200 text-gray-900 px-2 py-1 font-bold rounded text-sm md:text-sm font-medium mb-4 metropolis">
              India's Leading Gas Energy Solutions Provider
            </span>
          <h1 className="text-4xl md:text-[2.5rem] md:-ml-5 self-center font-extrabold text-gray-900  tracking-tight mb-8 ">
              Power Your Industry <br className="hidden md:block" />
              with Clean Gas <span className="text-[#f48131]">Energy</span>
            </h1>

            <p className="text-gray-700 metropolis text-base md:text-lg mb-8">
           Manufacturers of Gas Gensets, Dual-Fuel Kits, and RECD systems. Reliable, eco-friendly, and cost-saving energy solutions for industrial India.
            </p>
            <Link
              ref={heroButtonRef}
              to="/contact"
              className="inline-flex items-center justify-center bg-[#f48131] text-white px-8 py-4 rounded-xl text-base md:text-2xl  shadow-md transition-all duration-300 will-change-transform hover:shadow-xl hover:scale-105 mx-auto md:mx-0"
            >
              Explore Products
            </Link>
          </div>

          {/* Right Section - Image with animation */}
          <div
            className="w-full md:w-[70%] flex flex-col items-center mb-10 lg:mb-0"
          >
            <img
              key={currentImageIndex}
              src={carouselImages[currentImageIndex]}
              alt="Inventive Gas Equipment – Industrial Gas Genset for Clean Power"
              className="w-full max-w-md md:max-w-6xl"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
