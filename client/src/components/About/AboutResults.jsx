import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutData } from "../../data/AboutData";
import { FiPlus, FiMinus } from "react-icons/fi";

const AboutResults = () => {
  const { results, faq } = aboutData;
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="w-full bg-[#f8fafc] py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Top Half: Results & Process */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Stats */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3 block">{results.badge}</span>
            <h2 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
              {results.title} <span className="text-[#f48131]">{results.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 mb-10">{results.description}</p>
            
            <div className="grid grid-cols-2 gap-4">
              {results.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#1f3b34] text-white rounded-2xl p-6 flex flex-col justify-center shadow-lg hover:bg-[#24443b] transition-colors">
                  <span className="text-3xl md:text-4xl font-bold text-[#f48131] mb-2">{stat.value}</span>
                  <span className="text-sm text-gray-200">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Vertical Process */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2 relative pl-10">
            {/* Vertical Dotted Line */}
            <div className="absolute left-4 top-4 bottom-4 w-[2px] border-l-2 border-dotted border-[#f48131]/50 z-0"></div>
            
            <div className="flex flex-col gap-6 relative z-10">
              {results.process.map((step, idx) => (
                <div key={idx} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {/* Dot on the line */}
                  <div className="absolute -left-6 w-3 h-3 bg-[#f48131] rounded-full border-2 border-white -translate-x-1/2"></div>
                  
                  <div className="text-2xl text-gray-700">{step.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Half: FAQ & Contact */}
        <div className="flex flex-col lg:flex-row gap-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mt-10">
          
          {/* Left: Contact CTA */}
          <div className="w-full lg:w-1/3">
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3 block">{faq.badge}</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {faq.title} <span className="text-[#f48131]">{faq.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 mb-8 text-sm">{faq.description}</p>
            <button className="bg-[#1f3b34] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#f48131] transition-colors duration-300 w-full sm:w-auto">
              Talk to Our Experts →
            </button>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="w-full lg:w-2/3 flex flex-col gap-3">
            {faq.questions.map((item, idx) => (
              <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm md:text-base">{item.q}</span>
                  {openFaq === idx ? <FiMinus className="text-[#f48131]" /> : <FiPlus className="text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 pt-2 bg-gray-50 text-gray-600 text-sm"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutResults;