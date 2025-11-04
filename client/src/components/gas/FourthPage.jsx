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
    icon: <FaIndustry className="text-orange-500 text-4xl mb-4" />,
    title: "Qualied",
    description:
      "All our factory-certified engines ensure top-tier quality, performance, and reliability.",
  },
  {
    icon: <FaHandHoldingHeart className="text-orange-500 text-4xl mb-4" />,
    title: "Accessible",
    description:
      "Gas is a clean, accessible fuel driving sustainable and eco-friendly energy solutions.",
  },
  {
    icon: <FaLeaf className="text-orange-500 text-4xl mb-4" />,
    title: "Reliable",
    description:
      "Gas is a reliable, eco-friendly energy source paving the way for a cleaner, sustainable future.",
  },
  {
    icon: <FaTrash className="text-orange-500 text-4xl mb-4" />,
    title: "Economical",
    description:
      "Gas fuel’s low cost helps reduce operating expenses, making it a smart and economical energy choice.",
  },
];

const FourthPage = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 md:px-16 py-12 relative overflow-hidden">
      {/* Background Elements */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent">
            Inventive Control System
          </h1>
          <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-300 w-48 mx-auto rounded-full"></div>
        </div>

        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16  rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
          <div className="relative md:w-1/2 hover:scale-105 transition-transform duration-300">
            <img
              src="https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-145.jpg?w=740"
              alt="Control Panel"
              className="w-full h-80 object-cover rounded-xl border-4 border-white/20"
            />
          </div>

          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <h2 className="text-4xl font-semibold  ">
                Integrated Power Solutions
              </h2>
            </div>
            <p className="text-xl leading-relaxed">
              From generating sets and transfer switches to remote monitoring
              and CHP systems, Inventive provides full-scope services with over
              15 years of gas power experience.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/20 p-3 rounded-lg text-center">
                <div className="font-bold text-yellow-200">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-white/20 p-3 rounded-lg text-center">
                <div className="font-bold text-green-200">24/7</div>
                <div className="text-sm">Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors We Serve */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-5xl font-bold italic">
              <span className="font-extrabold">Ready to Go:</span> Integrated
              Power Solutions
            </h2>
            <p className="mt-2 text-xl">
              Our innovative solutions span multiple industries. Which includes:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-black rounded-2xl p-6 text-center transition flex flex-col items-center justify-center"
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
      </div>
    </div>
  );
};

export default FourthPage;
