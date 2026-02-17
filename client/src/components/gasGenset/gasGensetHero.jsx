import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gasGensetImage from "../../assets/gasGenset.webp";

const FirstPage = () => {
  return (
    <div className="max-w-7xl container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
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
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={gasGensetImage}
            alt="Gas Genset"
            className="w-full rounded-br-3xl rounded-tl-3xl shadow-lg"
          />
        </motion.div>
      </div>

      <div className="px-6 md:px-16 py-8">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-400 rounded-full mx-4"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
