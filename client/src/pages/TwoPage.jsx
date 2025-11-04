import React from "react";
import {
  FaBolt,
  FaSeedling,
  FaArrowAltCircleUp,
  FaCog,
  FaDollarSign,
} from "react-icons/fa";

const TwoPage = () => {
  const features = [
    {
      icon: FaBolt,
      title: "Save Up to 60% on Fuel Costs",
      description:
        "Our advanced conversion kits allow your genset to utilize up to 70% natural gas while maintaining optimal diesel performance—cutting energy expenses instantly.",
    },
    {
      icon: FaSeedling,
      title: "Reduce Carbon Emissions by 40–60%",
      description:
        "Move toward compliance with India's tightening emission standards and your sustainability goals with a cleaner combustion process.",
    },
    {
      icon: FaCog,
      title: "No Major Engine Modifications Required",
      description:
        "The retrofit design ensures a smooth, plug-and-play installation without any need for permanent engine changes.",
    },
    {
      icon: FaArrowAltCircleUp,
      title: "Reliable Power, Same Efficiency",
      description:
        "Dual fuel mode ensures 100% reliability—your genset automatically switches to full-diesel mode if gas supply drops.",
    },
    {
      icon: FaDollarSign,
      title: "Pay-As-You-Go Option",
      description:
        "Adopt cleaner technology without heavy upfront investment—our flexible, save-as-you-pay model makes it easier to go green.",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="text-center space-y-4">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-4 py-1 rounded-xl text-sm">
            Dual Fuel Kit
          </div>
          <h2 className="md:text-5xl text-3xl font-semibold text-black">
            Why Choose Inventive Gas Equipment's Dual Fuel Kits?
          </h2>
          <p className="text-2xl text-gray-700 mt-2 max-w-6xl mx-auto">
            Our dual fuel conversion kits deliver a reliable, low‑cost pathway
            to cleaner power. Designed for seamless retrofit with no major
            engine changes, they maximize fuel savings while maintaining full
            diesel reliability.
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="cursor-pointer hover:shadow-lg hover:-translate-y-2 duration-300 transition-all flex flex-col items-center text-center space-y-4 py-6 px-3 bg-gray-50 rounded-lg border-2 border-gray-200 flex-1 min-w-[300px] max-w-[400px]"
                >
                  <IconComponent className="text-orange-500 text-4xl" />
                  <div className="font-semibold text-xl">{feature.title}</div>
                  <div className="text-gray-700 text-md flex-1 flex items-center ">
                    {feature.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoPage;
