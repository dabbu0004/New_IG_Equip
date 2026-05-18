import React, { useEffect, useState } from "react";

const Certified = () => {
  const certifications = [
    "ISO 9001:2015",
    "CPCB Approved RECD", 
    "Make in India",
    "ICAT Approved",
    "Startup India",
    "MSME",
  ];

  const [pulseOnLoad, setPulseOnLoad] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setPulseOnLoad(false), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="w-full bg-[#fcfcfc] border-y border-gray-100 py-6 md:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6">
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold metropolis text-[#111111] whitespace-nowrap">
          Certified & Compliant
        </h3>

        {/* Badges */}
        <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-6 w-full overflow-x-auto md:overflow-visible">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`cert-badge flex items-center cursor-pointer gap-2 bg-[#e5e7eb] px-2 md:px-3 py-1 rounded-md shadow-sm hover:-translate-y-0.5 hover:shadow-md ${
                pulseOnLoad ? "cert-badge--pulse" : ""
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#f48131]"></div>
              <span className="text-[#333333] text-[11px] sm:text-xs md:text-sm whitespace-nowrap">
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