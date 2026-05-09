import React, { useState } from "react";
import { FiMapPin, FiX, FiCheckCircle, FiTool } from "react-icons/fi";

const PanIndiaMap = () => {
  // Demo Data for 10 States/Cities
  const locations = [
    {
      id: "hr",
      state: "Haryana",
      city: "Faridabad",
      top: "30%", 
      left: "35%",
      installations: 24,
      description: "Major industrial hub featuring extensive deployments of our heavy-duty gas gensets and RECD systems for manufacturing plants.",
      services: ["Gas Gensets", "Emission Control (RECD)", "AMC Support"]
    },
    {
      id: "mh",
      state: "Maharashtra",
      city: "Pune",
      top: "55%", 
      left: "28%",
      installations: 42,
      description: "Powering the automotive and manufacturing sectors with reliable dual-fuel conversion kits to significantly reduce operational costs.",
      services: ["Dual-Fuel Kits", "Turnkey Projects"]
    },
    {
      id: "gj",
      state: "Gujarat",
      city: "Ahmedabad",
      top: "45%", 
      left: "20%",
      installations: 38,
      description: "Key installations in the textile and chemical sectors, ensuring continuous power with our CPCB-approved eco-friendly setups.",
      services: ["Gas Gensets", "Biogas Solutions"]
    },
    {
      id: "ka",
      state: "Karnataka",
      city: "Bengaluru",
      top: "72%", 
      left: "33%",
      installations: 31,
      description: "Providing clean energy backup solutions for large-scale IT parks and commercial construction projects.",
      services: ["Gas Gensets", "Maintenance Services"]
    },
    {
      id: "tn",
      state: "Tamil Nadu",
      city: "Chennai",
      top: "82%", 
      left: "40%",
      installations: 27,
      description: "Supporting the heavy engineering and automobile industries with specialized emission control retrofits.",
      services: ["RECD Device", "Dual-Fuel Kits"]
    },
    {
      id: "dl",
      state: "Delhi",
      city: "New Delhi",
      top: "27%", 
      left: "34%",
      installations: 55,
      description: "Extensive deployment of emission control devices to meet strict capital region environmental compliance norms.",
      services: ["Emission Control (RECD)", "Consultation"]
    },
    {
      id: "up",
      state: "Uttar Pradesh",
      city: "Kanpur",
      top: "35%", 
      left: "45%",
      installations: 19,
      description: "Biogas conditioning and storage equipment deployed for agricultural and food processing industries.",
      services: ["Biogas Equipment", "Turnkey Projects"]
    },
    {
      id: "wb",
      state: "West Bengal",
      city: "Kolkata",
      top: "48%", 
      left: "68%",
      installations: 15,
      description: "Delivering reliable gas gensets and dual-fuel systems to support the eastern industrial corridor.",
      services: ["Gas Gensets", "Dual-Fuel Kits"]
    },
    {
      id: "ts",
      state: "Telangana",
      city: "Hyderabad",
      top: "62%", 
      left: "38%",
      installations: 22,
      description: "Powering pharmaceutical and biotech facilities with uninterrupted, clean gas energy solutions.",
      services: ["Gas Gensets", "AMC Support"]
    },
    {
      id: "rj",
      state: "Rajasthan",
      city: "Jaipur",
      top: "37%", 
      left: "25%",
      installations: 12,
      description: "Providing cost-effective power solutions for mining and regional manufacturing setups.",
      services: ["Dual-Fuel Kits", "Maintenance"]
    }
  ];

  // State to hold the currently selected location object
  const [activeLocation, setActiveLocation] = useState(null);

  const handleLocationClick = (loc) => {
    setActiveLocation(loc);
  };

  const closeDetails = () => {
    setActiveLocation(null);
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-16 md:py-18 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-[#111111] mb-4 tracking-tight">
            Crafting Success Pan India
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Explore our nationwide footprint. Click on a region below to view our specialized installations, services, and industrial impact.
          </p>
        </div>

        {/* ========================================================
            MAP AREA
            ======================================================== */}
        <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/9] bg-[#fff9f5] rounded-3xl overflow-hidden shadow-sm border border-gray-200 mb-12">
          
          {/* Map Background Image (Replace with your actual wavy map image) */}
          <img 
            src="/images/your-india-map.png" // Replace with your map image path
            alt="India Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          {/* Map Pins */}
          {locations.map((loc) => {
            const isActive = activeLocation?.id === loc.id;
            
            return (
              <div
                key={loc.id}
                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: loc.top, left: loc.left }}
                onClick={() => handleLocationClick(loc)}
              >
                {/* Ping Animation for Active Pin */}
                {isActive && (
                  <span className="absolute inset-0 flex h-full w-full">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f48131] opacity-60"></span>
                  </span>
                )}
                
                {/* Pin Icon */}
                <div className={`relative flex items-center justify-center transition-all duration-300 ${
                  isActive ? "text-[#f48131] scale-125 drop-shadow-md" : "text-gray-600 hover:text-[#f48131] hover:scale-110"
                }`}>
                  <FiMapPin className="w-6 h-6 md:w-8 md:h-8" fill={isActive ? "#fff9f5" : "white"} />
                </div>
              </div>
            );
          })}

          {/* Floating Details Window (Z-Index Overlay) */}
          {activeLocation && (
            <div className="hidden md:block absolute top-4 right-4 md:top-8 md:right-8 z-20 w-[calc(100%-2rem)] md:w-96 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-2xl p-6 transition-all duration-300 animate-in fade-in slide-in-from-right-4">
              
              <button 
                onClick={closeDetails}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 p-1.5 rounded-md transition-all duration-300 hover:scale-105"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 border border-orange-100">
                  <FiMapPin className="text-[#f48131] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                    {activeLocation.city}
                  </h3>
                  <p className="text-sm font-bold text-[#f48131] uppercase tracking-wide">
                    {activeLocation.state}
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200 mb-4"></div>

              <div className="mb-4">
                <span className="text-3xl font-black text-gray-900 mr-2">
                  {activeLocation.installations}+
                </span>
                <span className="text-sm font-semibold text-gray-500">
                  Active Installations
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed font-medium mb-5">
                {activeLocation.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <FiTool /> Key Services Deployed
                </h4>
                <ul className="flex flex-col gap-2">
                  {activeLocation.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <FiCheckCircle className="text-green-500 w-4 h-4" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        </div>

        {/* Mobile Details Card (below map so map stays visible) */}
        {activeLocation && (
          <div className="md:hidden w-full max-w-5xl mb-8 bg-white border border-gray-100 rounded-2xl shadow-lg p-5">
            <button
              onClick={closeDetails}
              className="ml-auto flex items-center justify-center bg-[#f48131] text-white px-3 py-2 rounded-md text-base font-extrabold shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <FiX className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 border border-orange-100">
                <FiMapPin className="text-[#f48131] w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-900 leading-tight">
                  {activeLocation.city}
                </h3>
                <p className="text-xs font-bold text-[#f48131] uppercase tracking-wide">
                  {activeLocation.state}
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 mb-4"></div>

            <div className="mb-4">
              <span className="text-2xl font-black text-gray-900 mr-2">
                {activeLocation.installations}+
              </span>
              <span className="text-sm font-semibold text-gray-500">
                Active Installations
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-medium mb-5">
              {activeLocation.description}
            </p>

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <FiTool /> Key Services Deployed
              </h4>
              <ul className="flex flex-col gap-2">
                {activeLocation.services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <FiCheckCircle className="text-green-500 w-4 h-4" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ========================================================
            STATE BUTTONS (LIST BELOW MAP)
            ======================================================== */}
        <div className="w-full max-w-5xl">
          <h4 className="text-center md:text-left text-lg font-bold text-gray-800 mb-6">
            Select a Region to View Details
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {locations.map((loc) => {
              const isActive = activeLocation?.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => handleLocationClick(loc)}
                  className={`inline-flex flex-col items-start justify-center p-4 rounded-md text-base font-extrabold shadow-md transition-all duration-300 will-change-transform text-left ${
                    isActive 
                      ? "bg-orange-50 text-[#f48131] border border-[#f48131] scale-105" 
                      : "bg-white text-black border  hover:shadow-xl hover:scale-105"
                  }`}
                >
                  <span className="text-base md:text-lg font-extrabold leading-tight">
                    {loc.state}
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-gray-500">
                    {loc.city}
                  </span>
                </button>
                
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PanIndiaMap;