import React from "react";
import {
  FaIndustry,
  FaHandHoldingHeart,
  FaLeaf,
  FaTrash,
} from "react-icons/fa";
import { motion } from "framer-motion";

const sectors = [
  {
    icon: <FaIndustry className="text-orange-500 text-4xl mb-3" />,
    title: "Qualified",
    description:
      "All our factory-certified engines ensure top-tier quality, performance, and reliability.",
  },
  {
    icon: <FaHandHoldingHeart className="text-orange-500 text-4xl mb-3" />,
    title: "Accessible",
    description:
      "Gas is a clean, accessible fuel driving sustainable and eco-friendly energy solutions.",
  },
  {
    icon: <FaLeaf className="text-orange-500 text-4xl mb-3" />,
    title: "Reliable",
    description:
      "Gas is a reliable, eco-friendly energy source paving the way for a cleaner, sustainable future.",
  },
  {
    icon: <FaTrash className="text-orange-500 text-4xl mb-3" />,
    title: "Economical",
    description:
      "Gas fuel’s low cost helps reduce operating expenses, making it a smart and economical energy choice.",
  },
];

const FourthPage = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 md:px-16 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Inventive Control System</h1>
          <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-300 w-32 mx-auto rounded-full"></div>
        </div>

        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-145.jpg?w=740"
              alt="Control Panel"
              className="w-full h-80 object-cover rounded-xl border-4 border-white/20 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Integrated Power Solutions
            </h2>
            <p className="text-lg leading-relaxed">
              From generating sets and transfer switches to remote monitoring and CHP systems, Inventive provides full-scope services with over 15 years of gas power experience.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/20 p-4 rounded-lg text-center">
                <div className="font-bold text-yellow-200 text-2xl">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg text-center">
                <div className="font-bold text-green-200 text-2xl">24/7</div>
                <div className="text-sm">Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors Section */}
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-bold italic">
              <span className="font-extrabold">Ready to Go:</span> Integrated Power Solutions
            </h2>
            <p className="mt-2 text-lg">
              Our innovative solutions span multiple industries, including:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-black rounded-xl px-5 py-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="mb-3">{sector.icon}</div>
                <h3 className="text-lg font-bold mb-1">{sector.title}</h3>
                <p className="text-sm text-gray-700">{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FourthPage;
