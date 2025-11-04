// src/components/FivePage.jsx

import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Retrofit Emission Control Device",
    description:
      "In a time of rising environmental concerns, Vayu Pure RECD stands out. This advanced device cuts harmful emissions from diesel generators, ensuring compliance and cleaner operations—without sacrificing performance.",
  },
  {
    title: "Dual Fuel Kit",
    description:
      "Embrace the future of fuel with our Dual Fuel Technology—a smart system that burns diesel and natural gas together to boost efficiency and cut operating costs.",
  },
  {
    title: "Gas Gen Set",
    description:
      "We manufacture Gas Gensets for clean, reliable power. Our PSI Gensets run on biogas or natural gas, delivering consistent performance with lower emissions—perfect for industries aiming to meet sustainability goals responsibly.",
  },
];

const dropIn = {
  hidden: { opacity: 0, y: -30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const FivePage = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white py-24 px-6 md:px-20">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-white font-bold text-lg md:text-xl   bg-gradient-to-r from-red-600 to-orange-300 inline-block px-4 py-2 rounded-md">
          Our Products
        </h2>
        <p className="text-3xl mt-2">
          Comprehensive Solutions for <br />
          Diverse Industries
        </p>
      </div>

      {/* Cards with drop animation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white text-black p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={dropIn}
          >
            <h3 className="text-4xl font-bold mb-3">{product.title}</h3>
            <p className="text-2xl mb-6">{product.description}</p>
            <button className="text-orange-600 font-semibold hover:underline flex items-center">
              Know More <span className="ml-2">➤➤➤</span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-red-600 to-orange-400 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default FivePage;
