import React from "react";

const Certified = () => {
  const certifications = [
    "ISO 9001:2015",
    "CPCB Approved RECD",
    "Make in India",
    "ICAT Approved",
    "Startup India",
    "MSME",
  ];

  return (
    <section className="w-full bg-[#fcfcfc] border-y  md:-mt-10 border-gray-100 py-6 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-12 md:ml-10  flex flex-col md:flex-row items-center gap-4 md:gap-6">
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-extrabold text-[#111111] whitespace-nowrap">
          Certified & Compliant
        </h3>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 w-full">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-2.5 bg-[#e5e7eb] px-4 py-2 rounded-md shadow-sm"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#f48131]"></div>
              <span className="text-[#333333] font-medium text-sm md:text-base">
                {cert}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certified;