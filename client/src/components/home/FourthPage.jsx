import React from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaHandHoldingHeart,
  FaLeaf,
  FaTrash,
} from "react-icons/fa";

const sectors = [
  {
    icon: <FaIndustry className="text-orange-500 text-4xl mb-4" />,
    title: "Manufacturing",
    description: "Reduce costs with efficient gas gensets",
  },
  {
    icon: <FaHandHoldingHeart className="text-orange-500 text-4xl mb-4" />,
    title: "Healthcare",
    description: "Ensure uninterrupted power for critical operations",
  },
  {
    icon: <FaLeaf className="text-orange-500 text-4xl mb-4" />,
    title: "Agriculture",
    description: "Adopt sustainable biogas energy for farming.",
  },
  {
    icon: <FaTrash className="text-orange-500 text-4xl mb-4" />,
    title: "Waste Management",
    description: "Turn organic waste into renewable energy.",
  },
];

const FourthPage = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 md:px-20 py-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-5xl font-bold italic">
          Powering Industries with Reliable Gas Solutions
        </h2>
        <p className="mt-2 text-xl">
          Our innovative solutions span multiple industries. Which includes:
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {sectors.map((sector, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition flex flex-col items-center justify-center"
          >
            <div className="mb-4 text-3xl">{sector.icon}</div>
            <h3 className="text-lg md:text-2xl font-bold mb-2">
              {sector.title}
            </h3>
            <p className="text-sm md:text-xl font-extralight text-gray-700">
              {sector.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FourthPage;
