import React from "react";
import { FaBolt, FaLeaf, FaArrowUp } from "react-icons/fa";

const SecondPage = () => {
  return (
    <section className="container mx-auto max-w-7xl bg-white px-3 sm:px-6 md:px-20 py-6 sm:py-10">
      {/* Our Legacy Section */}
      <div className="relative bg-gray-600 text-white rounded-2xl p-2 sm:p-6 flex flex-row md:flex-row justify-between items-center gap-2 sm:gap-6 mb-10 shadow-md overflow-hidden">
      <div className="hidden sm:block text-left w-full md:w-auto">
  <h3 className="text-2xl font-light">Our Legacy</h3>
  <p className="text-xl text-gray-300">long-term, visionary tone</p>
</div>

        <div className="text-center">
          <p className="text-xl sm:text-5xl font-bold">900+</p>
          <p className="text-xs sm:text-xl">Happy Clients</p>
        </div>
        <div className="text-center">
          <p className="text-xl sm:text-5xl font-bold">12+</p>
          <p className="text-xs sm:text-xl">Years of Experience</p>
        </div>
        <div className="text-center">
          <p className="text-xl sm:text-5xl font-bold">100%</p>
          <p className="text-xs sm:text-xl">Customer Satisfaction</p>
        </div>

        {/* Bottom orange bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-orange-500 rounded-b-2xl"></div>
        {/* Left orange stripe */}
        <div className="absolute bottom-0 left-0 h-5 sm:h-8 w-1 sm:w-2 bg-orange-500 rounded-r-2xl"></div>
      </div>

      {/* Who We Are */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-1 sm:gap-10">
        {/* Left content */}
        <div className="mb-6 md:mb-0 w-full md:w-1/2 text-left md:text-left">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-xl font-semibold text-sm  sm:text-base mb-3">
            Who We Are-
          </div>
          <h3 className="text-xl sm:text-4xl font-light mb-1 sm:mb-2">
            IG Equipment -
          </h3>
          <p className="text-base sm:text-2xl font-light leading-snug">
            Offering Smarter Gas <br className="hidden sm:inline" />
            Solutions for a Better Future
          </p>
        </div>

        {/* Right features */}
        <div className="space-y-3  sm:space-y-6 text-sm sm:text-xl w-full md:w-1/2">
          <div className="flex items-start gap-3">
            <FaBolt className="text-orange-500 text-lg sm:text-3xl mt-1" />
            <p>
              Cut down on energy usage with advanced,<br className="hidden sm:inline" />
              proven energy-smart technologies
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaLeaf className="text-orange-500 text-lg sm:text-3xl mt-1" />
            <p>
              Enjoy zero upfront investment through our <br className="hidden sm:inline" />
              save-as-you-go payment model
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaArrowUp className="text-orange-500 text-lg sm:text-3xl mt-1" />
            <p>
              Upgrade your infrastructure with future-ready, <br className="hidden sm:inline" />
              clean energy systems
            </p>
          </div>
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-xl font-semibold text-sm sm:text-base">
            Know More About Us
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
