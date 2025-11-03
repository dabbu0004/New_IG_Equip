import React, { useEffect, useRef } from "react";

const FourthPage = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const animateOnScroll = (element, animationClass) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(element);
    };

    if (leftRef.current) animateOnScroll(leftRef.current, "fade-in-left");
    if (rightRef.current) animateOnScroll(rightRef.current, "fade-in-right");
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-14 lg:px-24 overflow-hidden">
      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .fade-in-left {
            animation: fadeInLeft 0.8s ease-out forwards;
          }

          .fade-in-right {
            animation: fadeInRight 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section: Text */}
        <div
          ref={leftRef}
          className="lg:w-1/2 opacity-0 transform translate-x-[-50px]"
        >
          <h2 className="text-xl lg:text-4xl font-bold mb-2">
            Benefits of Retrofit Emission Control Device (RECD)
          </h2>

          <div className="h-[2px] w-24 bg-white mb-6 rounded-full"></div>

          <ul className="space-y-4 text-[17px] lg:text-[22px] leading-relaxed opacity-90">
            <li>
              <strong>High Efficiency:</strong> Reduces HC, CO, and PM emissions
              by over 99%.
            </li>
            <li>
              <strong>State-of-the-Art Technology:</strong> Incorporates a
              Diesel Oxidation Catalyst (DOC) with flow-through design.
            </li>
            <li>
              <strong>Proprietary Catalyst Coating:</strong> Enhanced with
              Platinum (Pt) and Palladium (Pd) for superior performance.
            </li>
            <li>
              <strong>Exothermic Reaction:</strong> Converts harmful gases into
              safer emissions while releasing heat.
            </li>
            <li>
              <strong>Seamless Integration:</strong> Designed to work perfectly
              with DPF solutions, ensuring optimal exhaust flow and back
              pressure.
            </li>
          </ul>

          <button className="mt-6 bg-white text-red-500 font-semibold px-6 py-3 rounded hover:opacity-90 transition">
            Get Quote Now
          </button>
        </div>

        {/* Right Section: Image */}
        <div
          ref={rightRef}
          className="lg:w-1/2 flex justify-center opacity-0 transform translate-x-[50px]"
        >
          <img
            src="/images/tryyy.png"
            alt="Vayu Pure Cylinder"
            className="w-[250px] h-[250px] lg:w-[500px] lg:h-[460px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
