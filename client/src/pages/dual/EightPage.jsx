import React, { useEffect, useRef } from "react";
import {
  FaTachometerAlt,
  FaCloudMeatball,
  FaTools,
  FaRobot,
  FaStopwatch,
  FaHandsHelping,
  FaBan,
  FaShieldAlt,
  FaThumbsUp,
  FaCompressAlt,
} from "react-icons/fa";

const features = [
  { icon: <FaTachometerAlt />, title: "Zero Back Pressure" },
  { icon: <FaCloudMeatball />, title: "No By-Product Generation" },
  { icon: <FaTools />, title: "Low Maintenance" },
  { icon: <FaRobot />, title: "Self-Clean Technology" },
  { icon: <FaStopwatch />, title: "Endurance Tested" },
  { icon: <FaHandsHelping />, title: "Custom Design" },
  { icon: <FaBan />, title: "No Movable Parts" },
  { icon: <FaShieldAlt />, title: "Long Device Life" },
  { icon: <FaThumbsUp />, title: "High Efficiency" },
  { icon: <FaCompressAlt />, title: "Compact Design" },
];

const EightPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll(".feature-card");
    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-red-500 to-orange-400 py-16 px-6 lg:px-20 text-center w-full"
      ref={sectionRef}
    >
      <h2 className="text-xl lg:text-5xl font-bold mb-12 text-white leading-tight">
        Features of Retrofit Emission <br /> Control Device (RECD)
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card opacity-0 transform translate-y-8 flex flex-col items-center bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="bg-gradient-to-tr from-orange-300 to-yellow-400 text-white p-4 rounded-full shadow-md mb-4 transition-transform duration-300 hover:rotate-12 hover:scale-110">
              {React.cloneElement(feature.icon, { size: 28 })}
            </div>
            <p className="text-sm font-semibold text-gray-800 text-center">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-up {
            animation: fadeUp 0.7s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default EightPage;
