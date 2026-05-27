import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { motion } from "framer-motion";

const KeyFeatures = ({ items = [] }) => {
  const featuresData = items
    .filter(Boolean)
    .map((item, index) => {
      if (typeof item === "string") {
        return {
          id: index + 1,
          title: item,
          description: "",
          icon: <BsLightningCharge />,
        };
      }

      return {
        id: item.id || index + 1,
        title: item.title,
        description: item.description || "",
        icon: item.icon || <BsLightningCharge />,
      };
    });

  // Framer Motion animation variants for smooth staggered load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  if (!featuresData.length) return null;

  return (
    <section className="w-full bg-[#fcfcfc] py-20 md:pb-15 md:pt-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-xs font-bold text-[#f48131] uppercase tracking-widest mb-3">
            KEY FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 tracking-tight">
            Designed for Performance & Safety
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Engineered using advanced membrane technology to deliver reliable gas storage performance in demanding industrial environments.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-orange-100 hover:shadow-[0_20px_50px_rgba(244,129,49,0.15)] transition-all duration-300 ease-out group"
            >
              
              {/* Flex container to place Icon and Title side-by-side */}
              <div className="flex items-center gap-4 mb-4">
                {/* Icon Container - Using your Orange Theme */}
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-[#f48131] transition-colors duration-300">
                  <span className="text-[#f48131] text-xl group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </span>
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
              </div>

              {feature.description ? (
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {feature.description}
                </p>
              ) : null}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default KeyFeatures;