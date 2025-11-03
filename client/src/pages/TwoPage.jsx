import React from "react";
import { FaBolt, FaSeedling, FaArrowAltCircleUp } from "react-icons/fa";

const TwoPage = () => {
  return (
    // Outer full-width white background
    <div className="w-full bg-white py-12 px-6">

      {/* Centered inner container with max width */}
      <div className="max-w-7xl mx-auto flex flex-col gap-0">

        {/* Top Section: Text + Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          
          {/* Left Text Block */}
          <div className="lg:w-1/2 space-y-4">
            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-4 py-1 rounded-xl text-sm">
              Dual Fuel Kit
            </div>
            <h2 className="text-4xl font-semibold text-black ">
              IG Equipment –<br />
              Switch Diesel Gensets to <br /> Gas with Dual Fuel Kits – Go <br /> Cleaner, Go Smarter!
            </h2>
          </div>

          {/* Right Icon List */}
          <div className="lg:w-1/2 space-y-4 text-2xl">
            <div className="flex items-start gap-3">
              <FaBolt className="text-orange-500 text-xl mt-1" />
              <p className="text-gray-700">
                Cut down on energy usage with advanced, proven <br /> energy-smart technologies
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaSeedling className="text-orange-500 text-xl mt-1" />
              <p className="text-gray-700">
                Enjoy zero upfront investment through our save-as <br /> - you-go payment model
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaArrowAltCircleUp className="text-orange-500 text-xl mt-1" />
              <p className="text-gray-700">
                Upgrade your infrastructure with future-ready, <br /> clean energy systems
              </p>
            </div>

            <button className="mt-4 bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-6 py-2 rounded-xl text-lg shadow-md">
              Query Now
            </button>
          </div>
      
        </div>
               {/* Bottom Image Section */}
               <div className="  ">
               <img
  src="/images/image/lgao.png"
  alt="Dual Fuel Kit Pipeline"
  className="w-full max-w-[1500px] h-[300px] object-cover mx-auto"
/>

        </div>

     
      </div>
    </div>
  );
};

export default TwoPage;
