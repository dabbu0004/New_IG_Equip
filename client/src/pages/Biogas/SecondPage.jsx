import React from 'react';
import { FaBolt, FaLeaf, FaArrowUp } from 'react-icons/fa';

const SecondPage = () => {
  return (
    <section className="container mx-auto max-w-7xl bg-white px-4 md:px-20 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
          <span className="font-extrabold italic block">Shaping the Future of Clean Energy with</span>
          <span className="text-lg sm:text-xl md:text-3xl block">
            Inventive Gas Equipment Pvt. Ltd.
            <span className="text-orange-400 text-xl sm:text-2xl md:text-3xl ml-2">•••</span>
          </span>
        </h2>
      </div>

      {/* Our Legacy Section */}
      <div className="relative bg-gray-600 text-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center mb-12 shadow-md overflow-hidden gap-6 md:gap-0 text-center md:text-left">
        <div>
          <h3 className="text-xl sm:text-2xl font-extralight">Our Legacy</h3>
          <p className="text-base sm:text-xl text-gray-300">long-term, visionary tone</p>
        </div>
        <div>
          <p className="text-4xl sm:text-5xl font-bold">900+</p>
          <p className="text-base sm:text-xl">Happy Clients</p>
        </div>
        <div>
          <p className="text-4xl sm:text-5xl font-bold">12+</p>
          <p className="text-base sm:text-xl">Year of Experience</p>
        </div>
        <div>
          <p className="text-4xl sm:text-5xl font-bold">100%</p>
          <p className="text-base sm:text-xl">Customer Satisfaction</p>
        </div>

        {/* Decorations */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 rounded-b-2xl"></div>
        <div className="absolute bottom-0 left-0 h-8 w-2 bg-orange-500 rounded-r-2xl"></div>
      </div>

      {/* Who We Are Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left */}
        <div className="mb-10 md:mb-0 w-full md:w-1/2">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 py-2 rounded-xl font-semibold mb-4 text-sm sm:text-base">
          Biogas-
          </div>
          <h3 className="text-2xl sm:text-4xl font-extralight mb-2">IG Equipment -</h3>
          <p className="text-xl sm:text-3xl font-extralight">
          Fueling Progress with <br />Biogas Technology
          </p>
        </div>

        {/* Right */}
        <div className="space-y-6 text-base sm:text-2xl w-full md:w-1/2">
          <div className="flex items-start gap-4">
            <FaBolt className="text-orange-500 text-xl sm:text-3xl mt-1" />
            <p>Cut down on energy usage with advanced, proven  energy-smart technologies</p>
          </div>
          <div className="flex items-start gap-4">
            <FaLeaf className="text-orange-500 text-xl sm:text-3xl mt-1" />
            <p>Enjoy zero upfront investment through our save-as-  you-go payment model</p>
          </div>
          <div className="flex items-start gap-4">
            <FaArrowUp className="text-orange-500 text-xl sm:text-3xl mt-1" />
            <p>Upgrade your infrastructure with future-ready, clean energy systems</p>
          </div>
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-1 rounded-xl font-semibold text-sm sm:text-base">
            Know More About Us
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
