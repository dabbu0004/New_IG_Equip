import React, { useState } from "react";
import { motion } from "framer-motion";

const WhyUs = () => {
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

  // Initialize state so ALL items are true (open) by default
  const [openStates, setOpenStates] = useState(features.map(() => true));

  const toggleAccordion = (index) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-10 overflow-hidden">
      {/* Container - strictly using flex, responsive with md: */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-stretch gap-6 md:gap-5">
        
        {/* Left Side: Premium Image Container (Kept Exactly As You Provided) */}
        <div className="w-full md:w-[60%] flex justify-center items-center relative py-0 md:py-6 group/image">
          {/* Decorative Offset Background Shape (responsive, no negative margins) */}
          <div className="relative z-10 w-full max-w-[560px] aspect-[4/3] md:aspect-auto md:h-[520px] overflow-hidden rounded-2xl shadow-2xl border border-white">
            <img
              src="/images/WhyUsPic.jpeg" // Replace with your actual image path
              alt="Inventive Gas Equipment Team"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Content & Exact Image Match Accordion */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left md:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          {/* Headings */}
          <span className="text-sm md:text-lg font-semibold text-[#111111] tracking-widest mb-1 block text-center md:text-left metropolis">
            Why Inventive?
          </span>
          <h2 className="text-3xl md:text-5xl self-center md:self-start font-bold  text-gray-700 leading-[1.05] mb-3 metropolis">
            Built on <br className="hidden md:block" /> Expertise
          </h2>

          {/* Accordion Wrapper - Exact Separate Card Match */}
          <div className="w-full flex flex-col gap-2">
            
            {features.map((feature, index) => {
              const isOpen = openStates[index];

              return (
                <div 
                  key={index} 
                  className="flex flex-col bg-[#f9ede5] rounded-[0.5rem] overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Header */}
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="flex flex-col w-full text-left outline-none cursor-pointer px-3 pt-2 pb-1"
                  >
                    <div className="flex flex-row items-center justify-between w-full mb-0">
                      <h3 className="text-[1.1rem] md:text-[20px] font-semibold text-[#111111]">
                        {feature.title}
                      </h3>
                      
                      {/* Circle Arrow Icon */}
                      <div className="flex-shrink-0 ml-4">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className={`w-[1.4rem] h-[1.4rem] text-[#111111] transition-transform duration-300 ${isOpen ? "rotate-0" : "-rotate-90"}`}
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <polyline points="8 12 12 16 16 12"></polyline>
                        </svg>
                      </div>
                    </div>

                    {/* Exact Thin Divider Line Under Title */}
                    <div className="w-full h-[1px] bg-[#333333] opacity-70"></div>
                  </button>

                  {/* Accordion Content (Smooth Expansion) */}
                  <div 
                    className={`transition-all duration-500 ease-in-out flex flex-col ${
                      isOpen ? "max-h-[300px] opacity-100 px-3 pb-1" : "max-h-0 opacity-0 px-2 pb-0"
                    }`}
                  >
                    <p className="text-[#111111] md:-mt-1 text-sm md:text-[1rem] font-medium leading-relaxed w-full pt-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyUs;