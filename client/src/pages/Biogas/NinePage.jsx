import React from "react";

const biogasInstruments = [
  {
    title: "Online Biogas Analyzer",
    description:
      "Continuously monitors CH4, CO2, H2S, O2, and optionally H2 and CO in real-time for stable digester performance.",
    image: "/images/biogas1.jpg",
  },
  {
    title: "Raw Biogas Analyzer",
    description:
      "Analyzes untreated biogas at the source, providing CH4, CO2, and H2S concentration metrics for process adjustment.",
    image: "/images/biogas2.jpg",
  },
  {
    title: "Portable Biogas Analyzer",
    description:
      "Handheld and mobile device for on-site gas testing—ideal for quick diagnostics and multi-point monitoring.",
    image: "/images/biogas3.jpg",
  },
  {
    title: "Gas Flow Meter",
    description:
      "Measures volumetric flow of gas with low maintenance and high precision, helping monitor production rates.",
    image: "/images/biogas4.jpg",
  },
  {
    title: "Gas Detector",
    description:
      "Alerts for gas leaks and high concentration levels. Ensures safety in plant operations and compliance.",
    image: "/images/biogas5.jpg",
  },
];

const NinePage = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 to-orange-400 py-16 px-4 font-[Inter]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Types of Biogas Monitoring Instruments
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto text-lg">
            Monitor gas quality, ensure safety, and optimize energy generation
            with these advanced tools.
          </p>
        </div>

        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3  place-items-center">
          {biogasInstruments.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-[360px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12">
          {biogasInstruments.slice(3).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-[320px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NinePage;
