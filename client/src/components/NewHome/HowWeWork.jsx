import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HowWeWork = () => {
  // Step Data matching your exact image content
  const steps = [
    {
      id: 1,
      title: "Enquiry & Site Survey",
      description: "Share requirements; we assess your site and power needs.",
      image: "https://via.placeholder.com/800x600/f8fafc/333333?text=Step+1:+Survey", // Replace with actual image path
    },
    {
      id: 2,
      title: "Custom Solution Design",
      description: "Our engineers design the optimal gas energy system.",
      image: "https://via.placeholder.com/800x600/f8fafc/333333?text=Step+2:+Design",
    },
    {
      id: 3,
      title: "Manufacturing & Testing",
      description: "Products built to spec and rigorously tested in-house.",
      image: "https://via.placeholder.com/800x600/f8fafc/333333?text=Step+3:+Testing",
    },
    {
      id: 4,
      title: "Installation",
      description: "Expert on-site installation by our technical team.",
      image: "https://via.placeholder.com/800x600/f8fafc/333333?text=Step+4:+Installation",
    },
    {
      id: 5, // Adding the 5th step as shown in your image
      title: "Commissioning & Support",
      description: "Full commissioning with ongoing AMC support available.",
      image: "https://via.placeholder.com/800x600/f8fafc/333333?text=Step+5:+Support",
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  // Auto-progress animation timer
  useEffect(() => {
    // Stops the timer permanently when it hits the last step
    if (activeStep >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setActiveStep((prev) => prev + 1);
    }, 4000); // 4 seconds per step

    return () => clearTimeout(timer);
  }, [activeStep, steps.length]);

  return (
    <section className="w-full bg-[#FFF3EB] py-16  pt-30 md:pt-24  overflow-hidden relative">
        {/* The tilted top background shape */}
        <div className="absolute top-0 left-0 w-full md:h-[130px] h-[80px]  bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}></div>
        
      {/* Main Container - Strictly flexbox, no grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-start  gap-12 md:gap-20 relative z-10 pt-10">
        
        {/* ======================================= */}
        {/* LEFT SIDE: Headings & Dynamic Image     */}
        {/* ======================================= */}
        <div className="w-full md:w-1/2 flex flex-col md:sticky md:top-20 z-10">
          
          {/* Headings */}
          <span className="text-sm self-center font-bold text-gray-500 uppercase tracking-widest mb-2 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl self-center font-black text-[#111111] leading-tight mb-8 md:mb-10">
            How We Work
          </h2>

          {/* Image Box with Smooth Crossfade Animation */}
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* ======================================= */}
        {/* RIGHT SIDE: Interactive Timeline        */}
        {/* ======================================= */}
        <div className="w-full md:w-1/2 flex flex-col relative pt-4 md:pt-12">
          
          {/* The continuous vertical background line */}
          {/* Absolute positioned relative to the timeline column */}
          <div className="absolute left-[9px] md:left-[9px] top-[30px] md:top-[110px] bottom-[30px] w-[2px] bg-gray-200 z-0"></div>

          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const isPast = activeStep > index;

            return (
              <div 
                key={step.id} 
                // Allow users to click to jump to a step
                onClick={() => setActiveStep(index)}
                className={`flex flex-row items-start gap-3 md:gap-5 mb-8 md:mb-10 relative cursor-pointer group transition-opacity duration-300 ${
                  isActive || isPast ? "opacity-100" : "opacity-40"
                }`}
              >
                
                {/* 1. Line & Dot Column */}
                <div className="relative flex flex-col items-center mt-3 md:mt-4 w-3 z-10 translate-x-1">
                  {/* Static placeholder dot (Gray or Orange if passed) */}
                  <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${isPast ? 'bg-[#F07C3D]' : 'bg-gray-300'}`}></div>
                  
                  {/* The Magic Moving Spark (Only rendered on active step) */}
                  {isActive && (
                    <motion.div
                      layoutId="moving-spark"
                      className="absolute top-[0px] left-[0px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F07C3D] shadow-[0_0_15px_rgba(240,124,61,1)]"
                      transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    />
                  )}
                </div>

                {/* 2. Large Number */}
                <div className="w-8 md:w-12 flex-shrink-0 flex justify-center">
                  <span className={`text-3xl md:text-3xl font-black transition-colors duration-500 ${isActive ? 'text-[#111111]' : 'text-[#111111]'}`}>
                    {step.id}
                  </span>
                </div>

                {/* 3. Text Content */}
                <div className="flex flex-col pt-1 md:-pt-2">
                  <h3 className="text-xl md:text-xl font-extrabold text-[#111111] group-hover:text-[#F07C3D] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base mt-1 md:mt-1 max-w-sm md:max-w-[300px] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;