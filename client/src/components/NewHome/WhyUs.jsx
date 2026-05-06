import React, { useState } from "react";

const WhyUs = () => {
  // State to track which accordion item is open (default to 0 so the first one is open)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    // If clicking the currently open item, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  // Accordion Data
  const features = [
    {
      title: "CPCB-Approved Products",
      description: "All RECD systems are certified by the Central Pollution Control Board, ensuring full regulatory compliance."
    },
    {
      title: "Turnkey Project Capability",
      description: "From consultation to installation and commissioning — we handle end-to-end gas-to-power project delivery."
    },
    {
      title: "Pan-India Service Network",
      description: "Dedicated after-sales support and service teams across major industrial hubs in India."
    },
    {
      title: "Significant Cost Savings",
      description: "Our dual-fuel and gas genset solutions consistently deliver 30-40% reduction in fuel costs versus diesel-only setups."
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-10 overflow-hidden">
      {/* Container - strictly using flex, responsive with md: */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-stretch gap-12 md:gap-5">
        
        {/* Left Side: Premium Image Container (Made significantly bigger) */}
        <div className="w-full md:w-[70%] flex justify-center items-center relative py-4 md:py-6 group/image">
          {/* Decorative Offset Background Shape */}
          <div className="absolute inset-0 bg-gradient-to-tr  transform -rotate-3 scale-100 transition-transform duration-700 hover:rotate-0"></div>
          <div className="relative z-10 w-[650px] h-[600px] overflow-hidden rounded-2xl shadow-2xl border-1 border-white min-h-[350px]">
            <img
              src="/images/WhyUsPic.jpeg" // Replace with your actual image path
              alt="Inventive Gas Equipment Team"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Content & Modern Accordion */}
        <div className="w-full md:w-1/2 flex flex-col md:-mt-15 justify-center">
          
          {/* Headings */}
          <span className="text-sm md:text-base font-extrabold text-[#f48131] uppercase tracking-widest mb-2 block">
            Why Inventive?
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-[#111111] leading-tight mb-4">
            Built on Expertise
          </h2>

          {/* Accordion Wrapper - Separated Cards Style */}
          <div className="w-full flex flex-col gap-4 md:gap-5">
            
            {features.map((feature, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  onClick={() => toggleAccordion(index)}
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                  // Hover effects applied here: scaling, shadow, and border color change
                  className={`flex flex-col  border-2 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen 
                      ? "border-[#f48131] shadow-[0_8px_30px_rgb(244,129,49,0.15)] scale-[1.02]" 
                      : "border-gray-100 hover:border-[#f48131]/50 hover:shadow-lg hover:scale-[1.015] hover:bg-orange-50/20"
                  }`}
                >
                  {/* Accordion Header */}
                  <div className="flex flex-row items-center justify-between p-5 md:p-4  w-full text-left outline-none">
                    <h3 className={`text-lg md:text-xl font-extrabold transition-colors duration-300 ${isOpen ? "text-[#f48131]" : "text-[#111111]"}`}>
                      {feature.title}
                    </h3>
                    
                    {/* Circle Arrow Icon */}
                    <div className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 ${isOpen ? "bg-[#f48131] text-white rotate-180" : "bg-gray-100 text-gray-500 rotate-0"}`}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="w-4 h-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* {!isOpen && (
                    <p
                      className="px-5 md:px-6 pb- text-gray-600 text-sm md:text-base font-medium leading-relaxed"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {feature.description}
                    </p>
                  )} */}

                  {/* Accordion Content (Smooth Expansion) */}
                  <div 
                    className={`transition-all duration-500 ease-in-out flex flex-col ${
                      isOpen ? "max-h-[300px] opacity-100 px-5 md:px-6 pb-5 md:pb-3" : "max-h-0 opacity-0 px-5 md:px-6 pb-0"
                    }`}
                  >
                    {/* Divider line covering ~85% of the column width */}
                    <div className="w-[85%] h-[2px] bg-gradient-to-r from-gray-100 to-transparent mb-4"></div> 
                    
                    {/* Description spanning full width */}
                    <p className="text-gray-600 text-sm md:text-base md:-mt-2 font-medium leading-relaxed w-full">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;