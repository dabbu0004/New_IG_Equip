import React from "react";

const FirstPage = () => {
  return (
    // Outer full-width container with white background
    <div className="w-full bg-white py-12 px-6">
      {/* Centered inner container with 80% width */}
      <div className="w-[80%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            Dual Fuel Kits for <br /> Diesel Gensets
          </h1>

          <h2 className="text-2xl font-normal text-gray-800">
            Clean Energy Starts Here!
          </h2>

          <p className="text-gray-600 text-base lg:text-lg">
            Power your business with gas gensets—cut energy <br /> costs, reduce
            your carbon footprint, and ensure <br /> 24/7 efficiency. A smart
            step toward sustainable <br /> profitability.
          </p>

          <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-lg text-xl shadow-md">
            Go Gas. Grow Profits
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/image/blob.jpg"
            alt="Diesel Genset"
            className="w-[360px] lg:w-[480px] rounded-br-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
