import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../data/AboutData";

const AboutTimeline = () => {
  const { timeline } = aboutData;

  return (
    <section className="w-full bg-[#fcfcfc] py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Stats */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-32 mb-20 text-center">
          {timeline.stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{timeline.title}</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">{timeline.description}</p>
        </div>

        {/* Exact Horizontal Timeline */}
        <div className="relative w-full h-64 md:h-80 flex items-center overflow-x-auto scrollbar-hide pb-10">
          {/* Main Horizontal Line */}
          <div className="absolute left-0 right-0 h-[2px] bg-gray-300 top-1/2 transform -translate-y-1/2 min-w-[800px]"></div>

          <div className="relative flex justify-between w-full min-w-[800px] px-4">
            {timeline.events.map((event, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: event.position === "bottom" ? 20 : -20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col items-center w-48 text-center"
              >
                {/* Node Dot */}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#111111] border-2 border-[#111111] bg-white z-10 rounded-sm"></div>

                {/* Alternating Content */}
                {event.position === "bottom" ? (
                  <>
                    <span className="absolute bottom-[calc(50%+20px)] text-2xl font-bold text-gray-900">{event.year}</span>
                    <span className="absolute top-[calc(50%+20px)] text-xs text-gray-500 px-2 leading-relaxed">{event.text}</span>
                  </>
                ) : (
                  <>
                    <span className="absolute bottom-[calc(50%+20px)] text-xs text-gray-500 px-2 leading-relaxed">{event.text}</span>
                    <span className="absolute top-[calc(50%+20px)] text-2xl font-bold text-gray-900">{event.year}</span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTimeline;