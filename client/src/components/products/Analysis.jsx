import React, { useState } from "react";

import analysisGif from "./analysis.gif"; 

const analysisData = [
  {
    id: 1,
    title: "Emission Reduction Rate",
    stat: "85%+",
    shortLabel: "PM Reduction",
    description: "Our RECD systems consistently capture and reduce particulate matter by over 85%, far exceeding CPCB guidelines.",
    image: analysisGif, 
  },
  {
    id: 2,
    title: "Fuel Cost Savings",
    stat: "30%",
    shortLabel: "Diesel Saved",
    description: "By implementing our Dual Fuel Kits, industries see an average of 30% reduction in diesel consumption and operational costs.",
    image: analysisGif,
  },
  {
    id: 3,
    title: "Equipment Longevity",
    stat: "2.5x",
    shortLabel: "Life Extended",
    description: "Cleaner combustion and reduced carbon buildup extend the lifecycle of your generator sets by up to two and a half times.",
    image: analysisGif,
  },
  {
    id: 4,
    title: "Real-time Monitoring",
    stat: "24/7",
    shortLabel: "Live Tracking",
    description: "Our OCEMS integration provides round-the-clock live tracking of gaseous emissions with 99.9% uptime and accuracy.",
    image: analysisGif, 
  },
];

const Analysis = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        <div className="text-center mb-10 max-w-3xl" data-aos="fade-up">
          <span className="text-sm md:text-base font-bold text-red-500 tracking-widest uppercase mb-3 block">
            Proven Performance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Data-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Impact</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Hover over our key metrics to explore the real-world analytics and performance charts behind our environmental engineering.
          </p>
        </div>

        <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-black h-[400px] sm:h-[500px] lg:h-[650px] group" data-aos="zoom-in">
          

          {analysisData.map((item, index) => (
            <img
              key={`chart-${item.id}`}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                activeIndex === index 
                  ? "opacity-100 scale-100 z-10" 
                  : "opacity-0 scale-105 z-0"
              }`}
            />
          ))}


          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-10 lg:p-8 z-30 pointer-events-none">
            <div className="max-w-3xl backdrop-blur-md bg-white/10 border border-white/20 p-4 sm:p-8 rounded-2xl shadow-xl transform transition-all duration-500 translate-y-0">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-wide">
                {analysisData[activeIndex].title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                {analysisData[activeIndex].description}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-4 mt-6 lg:mt-8" data-aos="fade-up" data-aos-delay="200">
          {analysisData.map((item, index) => (
            <div
              key={`stat-${item.id}`}
              onMouseEnter={() => setActiveIndex(index)}
              className={`flex-1 relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8 cursor-pointer rounded-2xl transition-all duration-300 transform group ${
                activeIndex === index
                  ? "bg-white shadow-xl -translate-y-2 border-b-4 border-orange-500"
                  : "bg-white/60 shadow-sm border-b-4 border-transparent hover:bg-white hover:shadow-md"
              }`}
            >
          
              {activeIndex === index && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              )}

              <span className={`text-4xl lg:text-5xl font-black mb-2 transition-colors duration-300 ${
                activeIndex === index ? "text-orange-500" : "text-gray-400 group-hover:text-orange-300"
              }`}>
                {item.stat}
              </span>
            
              <span className={`text-sm lg:text-base font-bold uppercase tracking-wider text-center transition-colors duration-300 ${
                activeIndex === index ? "text-gray-900" : "text-gray-500"
              }`}>
                {item.shortLabel}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Analysis;