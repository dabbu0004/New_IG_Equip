import React, { useState, useEffect } from "react";

const images = [
  "/images/India.png",
  "/images/India2.png",
  "/images/India3.png",
];

const Ekpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex max-w-7xl mx-auto container h-[64vh] relative overflow-hidden items-center justify-center bg-white">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Dots for Desktop */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-orange-600 scale-110"
                  : "bg-gray-400"
              } `}
            ></button>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden w-full h-[19vh] relative overflow-hidden items-center justify-center bg-white">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Dots for Mobile */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentIndex === index
                  ? "bg-orange-600 scale-110"
                  : "bg-gray-400"
              } `}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ekpage;
