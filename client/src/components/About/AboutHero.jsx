import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../data/AboutData";

const AboutHero = () => {
  const { hero, endToEnd } = aboutData;

  return (
    <section className="w-full bg-[#fcfcfc] pt-28 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {hero.title1}
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-[#f48131] mb-4 leading-tight">
              {hero.title2}
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              {hero.description}
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-[#f48131] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#f48131]/90 transition-colors duration-300">
                Talk to Our Experts →
              </button>
              <button className="flex items-center gap-3 text-gray-800 font-bold hover:text-[#f48131] transition-colors">
                <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white">▶</span>
                Watch Company Video
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <img src={hero.image} alt="Team" className="w-full h-auto rounded-3xl object-cover shadow-xl" />
          </motion.div>
        </div>

        {/* End to End Solutions Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="w-full md:w-1/3"
          >
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3 block">{endToEnd.badge}</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              {endToEnd.title} <span className="text-[#f48131]">{endToEnd.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 mb-6">{endToEnd.description}</p>
            {/* Decorative dots */}
            <div className="flex gap-1.5 opacity-30">
              {[...Array(8)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f48131]"></div>)}
            </div>
          </motion.div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {endToEnd.cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#1f3b34] rounded-2xl p-8 text-white shadow-xl hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;