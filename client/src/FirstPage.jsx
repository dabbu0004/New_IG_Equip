import React, { useState, useEffect } from "react";

const FirstPage = () => {
  // State for counter animation
  const [counts, setCounts] = useState({
    savings: 0,
    co2: 0,
    buildings: 0,
  });

  // Final values for counters
  const finalCounts = {
    savings: 30,
    co2: 25,
    buildings: 500,
  };

  // Animation duration in milliseconds
  const animationDuration = 2000;

  // Counter animation effect
  useEffect(() => {
    const startTime = Date.now();

    const updateCounters = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      setCounts({
        savings: Math.floor(progress * finalCounts.savings),
        co2: Math.floor(progress * finalCounts.co2),
        buildings: Math.floor(progress * finalCounts.buildings),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    requestAnimationFrame(updateCounters);

    return () => {
      // Cleanup if component unmounts during animation
    };
  }, []);

  return (
    <>
      <div className="max-w-full bg-[#131d34] pt-24">
        <div className="relative w-[80%] min-h-screen  overflow-hidden  mx-auto    ">
          <div className="absolute top-0 right-0 w-1/2 h-96">
            {" "}
            <div className="grid grid-cols-10 gap-4 h-full pt-32">
              {" "}
              {Array(40)
                .fill()
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-orange-400 opacity-30"
                  ></div>
                ))}{" "}
            </div>{" "}
          </div>

          {/* Main content container */}
          <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
            {/* Left side - Text content */}
            <div className="md:w-1/2 mb-10 md:mb-0 z-10">
              <h1 className="text-5xl   leading-tight mb-6 text-white font-extrabold  ">
                WE MAKE SOLUTIONS <br /> FOR THE BETTER NATURE
              </h1>

              <p className="text-xl text-white mb-8 max-w-xl">
                Inventive Gas Equipment provides safe, efficient, and reliable
                industrial gas solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center">
                  Start Saving Today
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button className="bg-white border-2 border-gray-300 hover:border-orange-600 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Learn How It Works
                </button>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">
                    {counts.savings}%
                  </p>
                  <p className="text-sm text-gray-600">
                    Average Energy Savings
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">
                    {counts.co2}k+
                  </p>
                  <p className="text-sm text-gray-600">Tons CO₂ Reduced</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">
                    {counts.buildings}+
                  </p>
                  <p className="text-sm text-gray-600">Buildings Optimized</p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2 relative md:pl-10 z-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-100 opacity-30 rounded-xl"></div>
                <img
                  src="https://igequipment.com/wp-content/uploads/2024/02/IMGL3170-1024x683.jpg"
                  alt="Industrial building with energy-efficient systems"
                  className="relative z-10 w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg z-20">
                  <p className="font-semibold">
                    Reduce energy costs by up to 40%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
