import React from "react";

const FirstPage = () => {
  return (
    <div className="w-full pt-8">
      {/* Top Banner */}
      <div className="max-w-[98%] mx-auto container bg-gradient-to-r from-red-500 to-orange-400 text-white text-center py-6 rounded-2xl">
        <h2 className="text-3xl md:text-5xl font-bold">About Us</h2>
        <p className="text-lg md:text-2xl mt-2">
          Inventive Gas Equipment Pvt. Ltd
        </p>
      </div>
      <br />

      {/* Image Section */}
      <div className="bg-white overflow-hidden">
        <img
          src="/images/image/aboutimg.webp"
          alt="Team Photo"
          className="w-full h-60 md:h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default FirstPage;
