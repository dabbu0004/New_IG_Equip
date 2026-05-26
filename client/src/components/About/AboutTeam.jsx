import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../data/AboutData";

const AboutTeam = () => {
  const { team } = aboutData;

  return (
    <section className="w-full bg-white py-20 font-sans text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3 block">{team.badge}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {team.title} <span className="text-[#f48131]">{team.titleHighlight}</span>
        </h2>
        <p className="text-gray-500 mb-12">{team.description}</p>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex overflow-x-auto md:grid md:grid-cols-5 gap-6 pb-6 scrollbar-hide"
        >
          {team.members.map((member, idx) => (
            <div key={idx} className="min-w-[200px] flex-shrink-0 flex flex-col items-center group">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;