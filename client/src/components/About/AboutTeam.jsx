import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../data/AboutData";

const AboutTeam = () => {
  const { team } = aboutData;
  
  // Dynamically determine card size based on number of members
  // If 3 or fewer, make them larger. If more, scale them down to fit nicely.
  const memberCount = team.members.length;
  const isFewMembers = memberCount <= 3;
  
  const cardSizeClass = isFewMembers 
    ? "w-[260px] md:w-[320px]" 
    : "w-[220px] md:w-[260px]";

  return (
    <section className="w-full bg-white py-20 md:py-10 md:-mb-10 font-sans text-center">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-14 md:mb-15">
          <span className="text-xs font-bold text-[#f48131] tracking-[0.2em] uppercase mb-4 block">
            {team.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
            {team.title} <span className="text-[#f48131]">{team.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {team.description}
          </p>
        </div>

        {/* ================= TEAM MEMBERS FLEX CONTAINER ================= */}
        {/* Uses flex-wrap and justify-center to ALWAYS center items regardless of count */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 0.6 }}
          className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center items-stretch gap-8 md:gap-10 pb-8 px-4 md:px-0 scrollbar-hide snap-x snap-mandatory"
        >
          {team.members.map((member, idx) => (
            <div 
              key={idx} 
              className={`flex-shrink-0 flex flex-col items-center group cursor-pointer snap-center ${cardSizeClass}`}
            >
              
              {/* Image Wrapper (Enhanced Design) */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${member.name}'s LinkedIn profile`}
                className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-gray-50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgba(244,129,49,0.15)] group-hover:-translate-y-2 transition-all duration-500 relative block"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                
                {/* Subtle dark gradient overlay on hover for a premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Inner border to give it a crisp edge */}
                <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none"></div>
              </a>
              
              {/* Text Details */}
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#f48131] transition-colors duration-300">
                {member.name}
              </h4>
              
              <p className="text-xs md:text-sm font-bold text-gray-400 group-hover:text-gray-500 uppercase tracking-[0.15em] mt-2 transition-colors duration-300">
                {member.role}
              </p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${member.name}'s LinkedIn profile`}
                  className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0a66c2] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0a66c2] hover:shadow-md"
                >
                  {member.icon}
                </a>
              )}

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutTeam;