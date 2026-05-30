import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../data/AboutData";

const EndToEndSolutions = () => {
  const { engineered } = aboutData;

  return (
    <section className="w-full bg-[#f8fafc] py-20 font-sans border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="w-full md:w-5/12"
        >
          <span className="text-xs font-bold text-[#f48131] tracking-widest uppercase mb-3 block">{engineered.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-snug">
            {engineered.title.split(' ').slice(0, 2).join(' ')} <br/>
            {engineered.title.split(' ').slice(2).join(' ')}
          </h2>

          <div className="flex flex-col gap-8">
            {engineered.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="w-full md:w-7/12 relative"
        >
         <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[500px]">
            {/* Removed the grayscale classes and dark overlay to show original colors */}
            <img src={engineered.image} alt="Industrial" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          
          {/* Floating Circle Badge */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-white/50">
            <span className="text-4xl font-extrabold text-[#f48131] mb-1">{engineered.yearsExperience}</span>
            <span className="text-xs font-bold text-gray-800 text-center uppercase tracking-wider">Years of<br/>Excellence</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EndToEndSolutions;