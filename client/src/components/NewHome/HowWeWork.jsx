import React, { useState, useEffect } from "react";

const HowWeWork = () => {
  // Step Data
  const steps = [
    {
      id: 1,
      title: "Enquiry & Site Survey",
      description: "Share requirements; we assess your site and power needs.",
      image: "https://via.placeholder.com/800x600/f8fafc/333333?text=Step+1:+Survey",
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
      id: 5,
      title: "Commissioning & Support",
      description: "Full commissioning with ongoing AMC support available.",
      image: "https://via.placeholder.com/800x600/f8fafc/333333?text=Step+5:+Support",
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  // Auto-progress animation timer
  useEffect(() => {
    if (activeStep >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setActiveStep((prev) => prev + 1);
    }, 4000); 

    return () => clearTimeout(timer);
  }, [activeStep, steps.length]);

  return (
    <section className="w-full bg-[#FFF3EB] py-14 md:py-10 overflow-hidden relative">
      
      {/* The tilted top background shape (Fixed to match image exactly)
        Triangle on the top right creates a slant that goes down from left to right.
      */}
      <div 
        className="absolute top-0 left-0 w-full h-[60px] md:h-[90px] bg-white z-0" 
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></div>
        
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-8 md:gap-20 relative z-10">
        
        {/* ======================================= */}
        {/* LEFT SIDE: Headings & Dynamic Image     */}
        {/* ======================================= */}
        <div className="w-full md:w-[45%] flex flex-col -mt-2 md:-mt-6 md:sticky md:top-24 z-10">
          <span className="text-sm font-semibold text-gray-500 mb-2 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-[3rem] font-black text-[#111111] leading-tight mb-4 md:mb-6">
            How We Work
          </h2>
        </div>

        {/* ======================================= */}
        {/* RIGHT SIDE: Perfect Match Timeline      */}
        {/* ======================================= */}
        <div className="w-full md:w-[55%] flex flex-col pt-2 md:pt-12">
          
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const isPast = activeStep > index;

            return (
              <div 
                key={step.id} 
                onClick={() => setActiveStep(index)}
                className={`flex flex-row items-stretch gap-4 md:gap-3 cursor-pointer group transition-opacity duration-300 ${
                  isActive || isPast ? "opacity-100" : "opacity-100"
                }`}
              >
                
                {/* 1. Number, Line, & Dot Column (Stacked Vertically) */}
                <div className="flex flex-col items-center w-12 md:w-16 flex-shrink-0">
                  
                  {/* Large Number */}
                  <span className="text-4xl md:text-[3rem] font-black text-[#111111] leading-none">
                    {step.id}
                  </span>
                  
                  {/* Vertical Line & Dot (Only renders if NOT the last step) */}
                  {index < steps.length - 1 && (
                    <div className="w-[1.5px] flex-grow bg-gray-400 my-2 md:my-3 relative min-h-[42px] md:min-h-[50px]">
                      
                      {/* Center Orange Dot */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#f48131]"></div>
                      
                    </div>
                  )}
                </div>

                {/* 2. Text Content Column */}
                <div className={`flex flex-col pt-1 ${index < steps.length - 1 ? "pb-4 md:pb-6" : "pb-0"}`}>
                  <h3 className="text-xl md:text-[1.35rem] font-semibold text-[#111111] mb-1 md:-mb-1 group-hover:text-[#f48131] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-800 text-sm md:text-[1.2rem] max-w-full md:max-w-[72%] font-medium leading-snug md:leading-[1.35]">
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