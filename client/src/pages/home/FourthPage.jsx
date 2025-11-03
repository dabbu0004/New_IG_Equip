import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaHandHoldingHeart, FaLeaf, FaTrash } from 'react-icons/fa';

const sectors = [
  {
    icon: <FaIndustry className="text-orange-500 text-4xl mb-4" />,
    title: 'Manufacturing',
    description: 'Increasing the efficiency and sustainability of production processes.',
  },
  {
    icon: <FaHandHoldingHeart className="text-orange-500 text-4xl mb-4" />,
    title: 'Healthcare',
    description: 'Clean and reliable energy solutions for critical healthcare facilities.',
  },
  {
    icon: <FaLeaf className="text-orange-500 text-4xl mb-4" />,
    title: 'Agriculture',
    description: 'Providing efficient biogas solutions to promote sustainable farming practices.',
  },
  {
    icon: <FaTrash className="text-orange-500 text-4xl mb-4" />,
    title: 'Waste Management',
    description: 'Transforming waste into energy with biogas technology.',
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
          <span className="font-extrabold">Sectors We Serve:</span> Customized Solutions for All
        </h2>
        <p className="mt-2 text-xl">Our innovative solutions span multiple industries. Which includes:</p>
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
            <h3 className="text-lg md:text-2xl font-bold mb-2">{sector.title}</h3>
            <p className="text-sm md:text-xl font-extralight text-gray-700">{sector.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FourthPage;
