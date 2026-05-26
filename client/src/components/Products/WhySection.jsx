import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const WhySection = ({ section }) => {
  const heading = section?.heading ;
  const points = section?.points || [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 fade-in-section">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{heading}</h2>
        <ul className="flex flex-col gap-3">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-[#f48131]">
                <FiCheckCircle className="h-4 w-4" />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhySection;
