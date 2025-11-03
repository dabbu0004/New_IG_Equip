import React from "react";

const powerRatings = [
  "50 kVA", "62.5 kVA", "75 kVA", "100 kVA", "125 kVA", "160 kVA",
  "180 kVA", "200 kVA", "250 kVA", "320 kVA", "400 kVA", "500 kVA",
 
];

const SixPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12  rounded-xl ">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Emission Control Device Manufacturer in India
          </span>
          <div className="mt-2 text-2xl text-gray-700">Choose the right emission control device for DG Set</div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500 rounded-full"></div>
        </h2>
      </div>
      
      <div className="bg-white p-6 rounded-lg  mb-8">
        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          Moreover, the Eo Energy RECD aligns perfectly with the guidelines set forth by the National Green Tribunal and Central Pollution Control Board. These pollution control devices can boost the reduction efficiency by more than 90% for Hydrocarbons (HC), Particulate Matter (PM), and Carbon Monoxide (CO).
        </p>
        
        <p className="font-semibold text-xl text-gray-700 mb-6 flex items-center justify-center">
          <span className="mr-2 text-orange-500">✓</span>
          Here check the list of pollution control equipment for Genset based on its size & power output.
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {powerRatings.map((rating, index) => (
          <button
            key={index}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-2 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1 flex items-center justify-center"
          >
            <span>{rating}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SixPage;