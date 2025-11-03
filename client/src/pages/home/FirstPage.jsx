import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FirstPage = () => {
  return (
    <>
      <div className="max-w-7xl container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-10 bg-white">
          {/* Left Section - Animated */}
          <motion.div
            className="w-full pt-12 lg:w-1/2 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Gas Gensets & Clean Energy Solutions-{" "}
            </h1>
            <h2 className="text-4xl md:text-5xl font-medium text-black mb-6">
              Inventive Gas Equipment Pvt. Ltd.{" "}
            </h2>
            <p className="text-gray-900 text-base md:text-lg mb-6">
              Inventive Gas Equipment Pvt. Ltd. (IGE) is a leader in gas
              gensets, dual-fuel kits, and emission control devices (RECD). We
              provide eco-friendly, cost-effective, and reliable power solutions
              that help industries cut costs, reduce emissions, and meet
              environmental standards.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 py-3 rounded-md text-lg font-extrabold shadow-md transition-all duration-300"
              >
                Go Gas. Grow Profits
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Section - Image with animation */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/image/blob.jpg"
              alt="Inventive Gas Equipment – Industrial Gas Genset for Clean Power"
              className="w-full max-w-md md:max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
