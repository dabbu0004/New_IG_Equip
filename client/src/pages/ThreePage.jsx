import React from "react";
import { FaIndustry, FaHospitalSymbol, FaRecycle } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const ThreePage = () => {
  const navigate = useNavigate();
  const industries = [
    {
      icon: FaIndustry,
      title: "Manufacturing",
      description: "Enhance energy efficiency in high-demand operations.",
    },
    {
      icon: FaHospitalSymbol,
      title: "Healthcare",
      description:
        "Ensure clean, reliable backup power for critical facilities.",
    },
    {
      icon: GiPlantRoots,
      title: "Agriculture",
      description:
        "Enable sustainable farming with efficient biogas utilization.",
    },
    {
      icon: FaRecycle,
      title: "Waste Management",
      description: "Turn waste into energy using biogas conversion systems.",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-5xl font-semibold text-black">
            Upgrade Your Diesel Generator to a Dual Fuel System Today
          </h2>
          <p className="text-gray-700 mt-2 max-w-5xl mx-auto text-xl">
            Transform your genset into a future-ready power unit. Inventive Gas
            Equipment's retrofit solutions are compatible with a wide range of
            genset models (15 kVA to 1000 kVA) and comply with CPCB emission
            norms.
          </p>
        </div>

        {/* Industries Section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-center mb-4 text-black">
            Industries Benefiting from Dual Fuel Kits:
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="cursor-pointer hover:shadow-lg hover:-translate-y-2 duration-300 transition-all flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg border-2 border-gray-200 flex-1"
                >
                  <IconComponent className="text-orange-500 text-4xl" />
                  <div className="font-semibold text-xl">{industry.title}</div>
                  <div className="text-gray-700 text-sm flex-1 flex items-center">
                    {industry.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-md hover:shadow-lg transition-shadow"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreePage;
