import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FirstPage = () => {
  return (
    <div className="max-w-7xl container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
        {/* Left Section with animation */}
        <motion.div
          className="w-full lg:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Gas Genset
          </h1>
          <p className="text-gray-900 text-base md:text-lg mb-6">
            PSI GENSET delivers advanced power solutions for residential,
            <br />
            industrial, telecom, data centers, construction, and <br />
            mining—engineered for precision and reliability.
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 py-3 rounded-md text-lg font-extrabold shadow-md hover:scale-105 transition-transform duration-300">
              Go Gas. Grow Profits
            </button>
          </Link>
        </motion.div>

        {/* Right Section - Image with animation */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="https://img.freepik.com/free-photo/building-construction-work-site_23-2149184910.jpg?uid=R186885919&ga=GA1.1.2039807332.1749015706&semt=ais_hybrid&w=740"
            alt="Genset"
            className="w-full max-w-md md:max-w-lg"
          />
        </motion.div>
      </div>

      {/* Stylish Divider Section */}
      <div className="px-6 md:px-16 py-8">
        {/* Option 1: Gradient line with center dot */}
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-400 rounded-full mx-4"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
        </div>

        {/* Option 2: Uncomment any one of these for different styles */}

        {/* Double line divider */}
        {/* <div className="space-y-1">
          <div className="w-full h-px bg-gray-200"></div>
          <div className="w-full h-px bg-gray-300"></div>
        </div> */}

        {/* Dashed line */}
        {/* <div className="w-full border-t-2 border-dashed border-gray-300"></div> */}

        {/* Dotted pattern */}
        {/* <div className="flex justify-center space-x-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-300 rounded-full"></div>
          ))}
        </div> */}

        {/* Wave pattern */}
        {/* <svg className="w-full h-4" viewBox="0 0 100 4" fill="none">
          <path d="M0 2 Q25 0 50 2 T100 2" stroke="#d1d5db" strokeWidth="0.5" fill="none"/>
        </svg> */}
      </div>
    </div>
  );
};

export default FirstPage;
