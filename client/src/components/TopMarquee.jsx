import React from "react";

const TopMarquee = () => {
  const regulations = [
    "Stricter restrictions on Diesel Generators—operations allowed only for essential or emergency services.",
    "Mandatory use of Emission Control Devices or Dual-Fuel/Alternative-Fuel systems for all permitted DG usage.",
    "Increased monitoring of industrial emissions with mandatory compliance checks.",
    "Ban on construction and demolition activities that generate high dust levels (except essential projects).",
    "Enhanced road dust and air-quality management through mechanical sweeping and water sprinkling.",
    "Restrictions on certain industrial operations using polluting fuels.",
    "Faster enforcement—non-compliance may lead to penalties, shutdowns, or legal action.",
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200 overflow-hidden">
      <div className="flex animate-marquee">
        {regulations.map((regulation, index) => (
          <span
            key={index}
            className="text-red-700 text-md font-semibold px-8 py-1 inline-block whitespace-nowrap"
          >
            {regulation}
          </span>
        ))}
        {regulations.map((regulation, index) => (
          <span
            key={`duplicate-${index}`}
            className="text-red-700 text-md font-semibold px-8 py-1 inline-block whitespace-nowrap"
          >
            {regulation}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 50s linear infinite;
          will-change: transform;
          display: flex;
          width: fit-content;
        }

        /* Responsive animation speed */
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default TopMarquee;
