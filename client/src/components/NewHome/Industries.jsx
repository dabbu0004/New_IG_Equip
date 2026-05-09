import React from "react";
import { TbCrane, TbBarrel } from "react-icons/tb";
import { PiFactoryLight, PiHospitalLight, PiTestTubeLight } from "react-icons/pi";
import { IoWaterOutline } from "react-icons/io5";
import { LuWheat, LuCupSoda } from "react-icons/lu";

const Industries = () => {
  // Industry Data Array mapped to match your image exactly
  const industries = [
    {
      id: 1,
      name: "Manufacturing",
      icon: <PiFactoryLight className="text-[2rem] md:text-5xl text-gray-800" />,
    },
    {
      id: 2,
      name: "Sugar & Agro",
      // Adding the subtle gold/green accent color to the wheat
      icon: <LuWheat className="text-[2rem] md:text-5xl text-[#d4af37]" />,
    },
    {
      id: 3,
      name: "Construction",
      icon: <TbCrane className="text-[2rem] md:text-5xl text-gray-800" />,
    },
    {
      id: 4,
      name: "Water Treatment",
      // Adding the light blue accent color to the water drop
      icon: <IoWaterOutline className="text-[2rem] md:text-5xl text-[#60a5fa]" />,
    },
    {
      id: 5,
      name: "Hospital",
      icon: <PiHospitalLight className="text-[2rem] md:text-5xl text-gray-800" />,
    },
    {
      id: 6,
      name: "Food & Beverage",
      icon: <LuCupSoda className="text-[2rem] md:text-5xl text-gray-800" />,
    },
    {
      id: 7,
      name: "Oil & Gas",
      icon: <TbBarrel className="text-[2rem] md:text-5xl text-gray-800" />,
    },
    {
      id: 8,
      name: "Chemical",
      icon: <PiTestTubeLight className="text-[2rem] md:text-5xl text-gray-800" />,
    },
  ];

  return (
    <section className="w-full bg-[#fafafa] py-16 md:py-18 overflow-hidden">
      {/* Container constraints */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left mb-10 md:mb-14">
          <span className="text-sm font-semibold text-gray-600 mb-1 md:mb-2">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#111111] mb-3 md:mb-4 tracking-tight">
            Industries
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl font-medium">
            Our solutions power a wide range of industrial sectors across India.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-6 ">
          
          {industries.map((industry) => (
            <div 
              key={industry.id}
              className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl p-5 md:p-6  transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:border-gray-300 cursor-pointer group"
            >
              {/* Icon Container with subtle scaling on hover */}
              <div className="mb-4 md:mb-5 transition-transform duration-300 group-hover:scale-110">
                {industry.icon}
              </div>
              
              {/* Industry Name */}
              <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center">
                {industry.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Industries;