import React from "react";
import { FaIndustry, FaHospitalSymbol, FaRecycle } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";

const industries = [
  {
    icon: <FaIndustry size={40} className="text-orange-500" />,
    title: "Manufacturing",
    description:
      "Increasing the efficiency and sustainability of production processes.",
  },
  {
    icon: <FaHospitalSymbol size={40} className="text-orange-500" />,
    title: "Healthcare",
    description:
      "Clean and reliable energy solutions for critical healthcare facilities.",
  },
  {
    icon: <GiPlantRoots size={40} className="text-orange-500" />,
    title: "Agriculture",
    description:
      "Providing efficient biogas solutions to promote sustainable farming practices.",
  },
  {
    icon: <FaRecycle size={40} className="text-orange-500" />,
    title: "Waste Management",
    description: "Transforming waste into energy with biogas technology.",
  },
];

const ThreePage = () => {
  return (
    <div className="py-16 px-6 lg:px-20 bg-gradient-to-r from-red-500 to-orange-400 text-white">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">
        Upgrade Your DG to Natural Gas and Cut <br /> Emissions Instantly
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl py-16 shadow-lg flex flex-col items-center text-center space-y-4"
          >
            {item.icon}
            <h3 className="text-2xl font-extrabold">{item.title}</h3>
            <p className="text-xl text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreePage;
