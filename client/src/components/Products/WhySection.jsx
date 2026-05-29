import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSettings, FiTool, FiCheckCircle, FiShield } from "react-icons/fi";

const WhySection = ({ section }) => {
  // Keeps track of which card is currently highlighted (default is the first one)
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const navigate = useNavigate();

  const heading = section?.heading || "Why Choose Us?";
  const description =
    section?.description ||
    "Our commitment to your energy needs goes beyond just supplying equipment. Discover the unique benefits that set us apart and ensure you have the best experience on your operational journey.";

  const cards = useMemo(() => {
    if (section?.cards?.length) {
      return section.cards;
    }

    return [
      {
        icon: "settings",
        title: "Customized\nSolutions",
        desc: "We offer tailored engineering designs to meet your unique operational needs. Whether you need custom sizing, specific utility layouts, or retrofit kits."
      },
      {
        icon: "tool",
        title: "Proven\nExecution",
        desc: "We understand that every project is unique. Our team has successfully delivered large-scale infrastructure projects with excellence and on-time performance."
      },
      {
        icon: "check",
        title: "Complete\nIntegration",
        desc: "Our expertise goes beyond standard manufacturing. We handle complete biogas system integration from initial concept to final on-site commissioning."
      },
      {
        icon: "shield",
        title: "Reliable\nSupport",
        desc: "Our services go beyond the installation. We offer dedicated 24/7 maintenance and support ensuring uninterrupted performance and long-term reliability."
      }
    ];
  }, [section]);

  const renderIcon = (iconKey) => {
    switch (iconKey) {
      case "tool":
        return <FiTool className="w-5 h-5 md:w-6 md:h-6" />;
      case "check":
        return <FiCheckCircle className="w-5 h-5 md:w-6 md:h-6" />;
      case "shield":
        return <FiShield className="w-5 h-5 md:w-6 md:h-6" />;
      case "settings":
      default:
        return <FiSettings className="w-5 h-5 md:w-6 md:h-6" />;
    }
  };

  return (
    <section className="w-full bg-[#f9f8f6] py-12 md:py-16 px-4 sm:px-6 md:px-12 font-sans border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER ROW ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-3 md:mb-4 tracking-tight">
              {heading}
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
              {description}
            </p>
          </div>
          
          <button 
            onClick={() => navigate('/contact')}
            className="bg-[#f48131] hover:bg-[#e06d1f] text-white px-6 py-3 rounded-full text-sm md:text-base font-bold transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((card, idx) => {
            const isActive = hoveredIndex === idx;

            return (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`p-6 rounded-3xl flex flex-col transition-all duration-500 cursor-pointer border ${
                  isActive 
                    ? "bg-[#111111] text-white shadow-xl border-[#111111] scale-[1.02]" 
                    : "bg-[#f2eee8] text-[#111111] border-transparent hover:bg-[#ebe5dd]"
                }`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="flex items-center justify-start">
                    <div className={`transition-colors duration-500 ${isActive ? "text-[#f48131]" : "text-[#111111]"}`}>
                      {renderIcon(card.icon)}
                    </div>
                  </div>
                </div>

                {/* Title (Handling line breaks) */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight whitespace-pre-line">
                  {card.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 flex-grow font-medium transition-colors duration-500 ${
                  isActive ? "text-gray-400" : "text-gray-600"
                }`}>
                  {card.desc}
                </p>

                {/* Card Button */}
                <button 
                  onClick={() => navigate('/about')}
                  className={`w-max px-5 py-2 rounded-full font-bold text-xs transition-all duration-300 ${
                  isActive 
                    ? "bg-[#f48131] text-white hover:bg-[#e06d1f]" 
                    : "bg-[#f48131] text-white hover:bg-[#e06d1f]"
                }`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhySection;