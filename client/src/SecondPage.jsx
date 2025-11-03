import React, { useState, useEffect } from "react";

const ClientLogo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const clients = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
    "/images/16.jpeg",
    "/images/17.jpeg",
    "/images/18.jpeg",
    "/images/19.jpeg",
    "/images/20.jpeg",
    "/images/21.jpeg",
  ];

  return (
    <div className="py-16 px-6 bg-gray-900 relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500 bg-opacity-20 text-orange-400 text-sm font-medium mb-4">
            TRUSTED BY INDUSTRY LEADERS
          </span>
          <h2 className="text-white text-center text-3xl font-bold mb-2">
            Join Our <span className="text-orange-400">Growing List</span> of
            Customers
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            See why leading companies choose our solutions for their business
            needs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 place-items-center">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="relative group transition-all duration-300 ease-in-out p-4 rounded-lg bg-gray-800 hover:bg-gray-700 border border-transparent hover:border-orange-500 w-full h-24 flex items-center justify-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className={`h-12 md:h-16 object-contain transition-all duration-300 ${
                  hoveredIndex === index
                    ? "scale-110"
                    : "grayscale hover:grayscale-0"
                }`}
              />
              {hoveredIndex === index && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-t-lg"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20">
            Become Our Next Success Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
