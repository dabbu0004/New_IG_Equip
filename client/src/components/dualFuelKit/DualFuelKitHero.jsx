import React from "react";
import { useNavigate } from "react-router-dom";
import dualFuelKitImage from "../../assets/dualFuelKit.webp";

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-12 px-6">
      <div className="w-[80%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 space-y-2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            Dual Fuel Kits for Diesel Gensets – Switch to Smart, Clean Energy
          </h1>

          <p className="text-gray-600 text-base lg:text-lg">
            Inventive Gas Equipment’s Dual Fuel Kits for Diesel Gensets empower
            industries to transform their existing diesel-powered systems into
            efficient, eco-friendly dual fuel gensets that operate on a mix of
            natural gas and diesel. The result? Lower operational costs,
            drastically reduced emissions, and uninterrupted performance.
            <br />
            Whether you manage a manufacturing plant, hospital, farm, or
            waste-to-energy project—our kits ensure your power source works
            harder for your business and the planet.
          </p>

          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-lg text-xl shadow-md"
          >
            Go Gas. Grow Profits
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={dualFuelKitImage}
            alt="Dual Fuel Kit"
            className="w-[360px] lg:w-full rounded-br-3xl rounded-tl-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
