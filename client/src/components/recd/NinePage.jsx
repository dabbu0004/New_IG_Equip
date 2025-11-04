import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NinePage = () => {
  const rightRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-right");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (rightRef.current) {
      observer.observe(rightRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/image/2.png"
            alt="Vayu Pure Device"
            className="w-[260px] lg:w-[480px] h-auto object-contain rounded-md"
          />
        </div>

        {/* Right Side Content */}
        <div
          ref={rightRef}
          className="w-full lg:w-1/2 opacity-0 transform translate-x-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">
            Retrofit Emission Control Device (RECD) – Vayu Pure by Inventive Gas
            Equipment{" "}
          </h2>

          <div className="h-[2px] w-20 bg-white mb-5 rounded-full"></div>

          <p className="text-base lg:text-lg font-medium mb-3">Certified by:</p>

          <div className="flex items-center gap-4 mb-5">
            <img
              src="/images/l1.jpeg"
              alt="ARAI"
              className="w-20 h-12 object-contain"
            />
            <img
              src="/images/l2.jpeg"
              alt="ICAT"
              className="w-20 h-12 object-contain"
            />
          </div>

          <p className="text-sm lg:text-[22px] leading-snug opacity-90 mb-6">
            At Inventive Gas Equipment (IGE), we manufacture and supply CPCB &
            ICAT certified Retrofit Emission Control Devices (RECDs) designed to
            reduce harmful diesel generator emissions by up to 99%. Our Vayu
            Pure RECD ensures compliance with government regulations while
            delivering high performance, zero back pressure, and long-lasting
            durability.
          </p>

          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-5 py-2 rounded hover:opacity-90 transition"
          >
            Get Quote Now
          </button>
        </div>
      </div>
      <style>
        {`
          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(60px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in-right {
            animation: slideInRight 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default NinePage;
