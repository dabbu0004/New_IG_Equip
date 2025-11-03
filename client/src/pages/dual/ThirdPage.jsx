import React, { useEffect, useRef } from "react";
import NinePage from "./NinePage";

const ThirdPage = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-drop-down");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Custom Drop Animation CSS */}
      <style>
        {`
          @keyframes dropDown {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-drop-down {
            animation: dropDown 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 sm:px-6 lg:px-24 py-5 sm:py-14 overflow-hidden">
        {/* Top Heading */}
        <div
          ref={contentRef}
          className="text-center mb-8 sm:mb-12 opacity-0 transform -translate-y-12"
        >
          <h2 className="text-[18px] sm:text-3xl lg:text-5xl font-bold italic mb-4 leading-snug text-left sm:text-center">
            Cut Emissions, Not Performance.
          </h2>

          <p className="text-xs sm:text-base lg:text-xl max-w-2xl mx-auto text-white opacity-90 leading-relaxed">
            With Vayu Pure RECD, reduce harmful emissions from your diesel
            generators without compromising efficiency. Engineered for
            compliance and cleaner operation, Vayu Pure ensures powerful
            performance with a greener footprint.
          </p>
        </div>
      </div>

      {/* NinePage Component */}
      <NinePage />
    </>
  );
};

export default ThirdPage;
