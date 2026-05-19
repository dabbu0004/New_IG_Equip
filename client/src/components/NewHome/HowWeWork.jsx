import React from "react";
import { FiClipboard, FiEdit3, FiSettings, FiTool, FiHeadphones, FiAward } from "react-icons/fi";

const HowWeWork = () => {
  // Step Data matching the new image exactly, including specific icons
  const steps = [
    {
      id: 1,
      title: "Enquiry & Site Survey",
      description: "Share requirements; we assess your site and power needs.",
      icon: <FiClipboard className="w-6 h-6 md:w-7 md:h-7 text-[#111111]" />,
    },
    {
      id: 2,
      title: "Custom Solution Design",
      description: "Our engineers design the optimal gas energy system.",
      icon: <FiEdit3 className="w-6 h-6 md:w-7 md:h-7 text-[#111111]" />,
    },
    {
      id: 3,
      title: "Manufacturing & Testing",
      description: "Products built to spec and rigorously tested in-house.",
      icon: <FiSettings className="w-6 h-6 md:w-7 md:h-7 text-[#111111]" />,
    },
    {
      id: 4,
      title: "Installation",
      description: "Expert on-site installation by our technical team.",
      icon: <FiTool className="w-6 h-6 md:w-7 md:h-7 text-[#111111]" />,
    },
    {
      id: 5,
      title: "Commissioning & Support",
      description: "Full commissioning with ongoing AMC support available.",
      icon: <FiHeadphones className="w-6 h-6 md:w-7 md:h-7 text-[#111111]" />,
    }
  ];

  return (
    <section className="w-full bg-[#fafafa] py-16 md:py-24 overflow-hidden relative flex items-center">
      
      {/* ======================================= */}
      {/* LEFT SIDE: Giant Semi-Circle Background */}
      {/* ======================================= */}
      <div className="absolute top-0 left-0 w-full md:w-[45%] h-[400px] md:h-full bg-[#fff6f0] rounded-b-full md:rounded-b-none md:rounded-r-full shadow-sm z-0 transform md:-translate-x-10"></div>
        
      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 relative z-10">
        
        {/* ======================================= */}
        {/* LEFT SIDE: Text Content & Badge         */}
        {/* ======================================= */}
        <div className="w-full md:w-[40%] flex flex-col pt-10 md:pt-20">
          
          <span className="text-xs font-bold text-[#f48131] uppercase tracking-widest mb-3">
            OUR PROCESS
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight mb-4 tracking-tight">
            How We Work
          </h2>
          
          {/* Thick Orange Underline */}
          <div className="w-16 h-1.5 bg-[#f48131] mb-6"></div>

          <p className="text-gray-700 text-base md:text-md font-medium leading-relaxed max-w-sm mb-8">
            A streamlined process designed to deliver reliable gas energy solutions from concept to commissioning.
          </p>

          {/* Quality Badge Match */}
          <div className="flex items-center gap-4 bg-[#fff0e6] p-4 pr-8 rounded-xl w-max shadow-sm border border-orange-50/50">
            <FiAward className="w-10 h-10 text-[#f48131] flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-[#111111] font-bold text-sm md:text-base">Quality • Safety • Reliability</span>
              <span className="text-gray-500 text-xs md:text-sm font-medium">At every step</span>
            </div>
          </div>
        </div>

        {/* ======================================= */}
        {/* RIGHT SIDE: Horizontal Cards Timeline   */}
        {/* ======================================= */}
        <div className="w-full md:w-[60%] flex flex-col relative py-4">
          
          {/* Continuous Vertical Orange Line */}
          {/* Hidden on very small mobile, shown on slightly larger screens and up */}
          <div className="hidden sm:block absolute left-[11px] top-12 bottom-12 w-[2px] bg-[#f48131] z-0"></div>

          <div className="flex flex-col gap-5 md:gap-3 w-full relative z-10">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="flex flex-row items-center gap-6 group cursor-default"
              >
                
                {/* 1. Timeline Dot (Hidden on tiny mobile to save space) */}
                <div className="hidden sm:flex flex-col items-center justify-center w-6 h-6 bg-[#fafafa] rounded-full z-10 flex-shrink-0">
                  <div className="w-3 h-3 bg-[#f48131] rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#f48131]"></div>
                </div>

                {/* 2. Content Card (Exact Image Match + Hover Effects) */}
                <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-8 bg-white p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-[#f48131]/30 hover:shadow-[0_8px_30px_rgba(244,129,49,0.12)] hover:-translate-y-1 transition-all duration-300 w-full">
                  
                  <div className="flex items-center gap-5 md:gap-8 w-full sm:w-auto">
                    {/* Icon with Peach Background */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#fff6f0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f48131] group-hover:text-white transition-colors duration-300">
                      {/* React.cloneElement used to swap icon color on hover cleanly */}
                      {React.cloneElement(step.icon, { className: `w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 group-hover:text-white ${step.icon.props.className}` })}
                    </div>

                    {/* Number */}
                    <span className="text-3xl md:text-4xl font-bold text-[#f48131] flex-shrink-0">
                      {/* Add leading zero */}
                      {step.id < 10 ? `0${step.id}` : step.id}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col pt-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#111122] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-[0.95rem] font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;