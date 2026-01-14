import React from "react";
import facilityImg from "../../assets/gallery/img6.webp";

const Service4 = () => {
  const points = [
    "CPCB-compliant OCEMS solutions.",
    "End-to-end support: design, supply & installation.",
    "High-accuracy analyzers & sensors.",
    "Seamless DAHS & server connectivity.",
    "Reliable after-sales, calibration & AMC support.",
  ];

  return (
    <section className="relative w-full py-10 bg-gray-50">
      <div className="relative container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
              Why Inventive Gas Equipment?
            </h2>

            <ul className="space-y-4 text-lg md:text-xl text-gray-700">
              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-700 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-3xl">
              <div className="absolute -inset-3 rounded-3xl opacity-40 " />
              <img
                src={facilityImg}
                alt="Inventive Gas Equipment Facility"
                className="relative rounded-3xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service4;
