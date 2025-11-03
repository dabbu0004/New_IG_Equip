import React, { useState, useEffect } from "react";

const Five = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://igequipment.com/wp-content/uploads/2025/01/RECD-370x247.png",
    "https://igequipment.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-14-at-12.09.12-PM-370x247.jpeg",
    "https://igequipment.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-14-at-13.42.32_187df052.jpg",
    "https://igequipment.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-14-at-13.47.01_0e33da93-370x247.jpg",
    "https://igequipment.com/wp-content/uploads/2024/02/IMG20230915123342-1-370x247.jpg",
    "https://igequipment.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-14-at-13.44.21_7b0fcd2f-370x247.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-orange-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-lg font-bold uppercase tracking-wider text-orange-600 border-b-2 border-orange-500 inline-block pb-1 mb-4">
            explore IG Equipment services
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-900 mb-2">
            Industries We Serve
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-900">
            We deliver outcomes.
          </h1>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <div className=" pr-0 md:pr-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1 - Understand Your Data */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-600 mb-3">
                  Retrofit Emission Control Device
                </h3>
                <p className="text-gray-700">
                  The Retrofit Emission Control Device (RECD) is your ultimate
                  solution to drastically reducing harmful emissions from diesel
                  generator (DG) sets.
                </p>
              </div>

              {/* Box 2 - Maximize Savings Risk-Free */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-600 mb-3">
                  DUAL FUEL TECHNOLOGY
                </h3>
                <p className="text-gray-700">
                  We are pleased to present our innovative Dual Fuel Technology,
                  a game-changing approach that is changing the petrol equipment
                  market.
                </p>
              </div>

              {/* Box 3 - Reduce Regulatory Risk */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-600 mb-3">
                  High-Efficiency Gas Flare
                </h3>
                <p className="text-gray-700">
                  High-Efficiency Gas Flares, which are intended to upend
                  industry norms and help create a more sustainable and clean
                  future.
                </p>
              </div>

              {/* Box 4 - Simplify Energy Upgrades */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-600 mb-3">
                  Biogas Monitoring
                </h3>
                <p className="text-gray-700">
                  Our inventive gas equipment, by analyzing and monitoring
                  biogas, improves how digesters work and increases methane
                  production.
                </p>
              </div>

              {/* Box 5 - In-House R&D */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-600 mb-3">
                  Gas Genset
                </h3>
                <p className="text-gray-700">
                  Your search for a Diesel/Natural Gas Generator Set might be
                  aided by us. An eco-friendly and dependable power source is
                  our PSI GENSET (BIOGAS and Natural Gas Generators).
                </p>
              </div>

              {/* Box 6 - Call to Action */}
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                    <h3 className="text-xl font-bold text-orange-800">
                      Ready to transform your energy efficiency?
                    </h3>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="#connect"
                    className="flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors"
                  >
                    Let's Connect
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
