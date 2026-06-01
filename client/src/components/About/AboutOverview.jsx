import React, { useRef, useState, useEffect } from "react";
import { aboutData } from "../../data/AboutData";

import { FaPlay, FaPause } from "react-icons/fa";
import { 
  FiSettings, 
  FiVolume2, 
  FiMaximize, 
  FiChevronRight, 
  FiDroplet 
} from "react-icons/fi";
import { 
  MdOutlineFactory, 
  MdOutlineLocalFireDepartment 
} from "react-icons/md";
import { 
  BsDatabase, 
  BsCloudHaze2, 
  BsBuildings 
} from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";

const AboutOverview = () => {
  const aboutOverview = aboutData;

  // Formatting the title to make "Pvt. Ltd." orange as shown in the design
  const formatTitle = (title) => {
    const parts = title.split("Pvt. Ltd.");
    if (parts.length > 1) {
      return (
        <>
          {parts[0]} <span className="text-[#f48131]">Pvt. Ltd.</span>{parts[1]}
        </>
      );
    }
    return title;
  };

  // Mapping the capabilities array to specific titles and icons for the cards
  const expertiseCards = [
    { 
      title: "RECD Systems", 
      desc: aboutOverview.capabilities[0] || "RECD systems for diesel generator emission control", 
      icon: <MdOutlineFactory className="text-xl" /> 
    },
    { 
      title: "Double Membrane Gas Holders", 
      desc: aboutOverview.capabilities[1] || "Double membrane biogas gas holders", 
      icon: <BsDatabase className="text-xl" /> 
    },
    { 
      title: "H2S Removal Systems", 
      desc: aboutOverview.capabilities[2] || "H2S removal systems (scrubbers)", 
      icon: <BsCloudHaze2 className="text-xl" /> 
    },
    { 
      title: "Gas Dehumidification Systems", 
      desc: aboutOverview.capabilities[3] || "Gas dehumidification systems", 
      icon: <FiDroplet className="text-xl" /> 
    },
    { 
      title: "Flare Systems", 
      desc: aboutOverview.capabilities[4] || "Flare systems for safe gas handling", 
      icon: <MdOutlineLocalFireDepartment className="text-xl" /> 
    },
    { 
      title: "Plant Equipment for CBG", 
      desc: aboutOverview.capabilities[5] || "Balance of plant equipment for CBG facilities", 
      icon: <BsBuildings className="text-xl" /> 
    },
  ];

  return (
    <section className="w-full bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:pt-15 md:pb-8">
        
        {/* ================= TOP SECTION: Text & Video ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-12">
          
          {/* Left Text Column */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <span className="text-[#f48131] text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                About Inventive Gas Pvt. Ltd.
              </span>
              <div className="w-12 h-[1px] bg-[#f48131]/40 ml-4"></div>
            </div>
            
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-[1.2] mb-6 tracking-tight">
              {formatTitle(aboutOverview.companyIntroTitle)}
            </h2>
            
            <p className="text-gray-600 leading-[1.8] text-[15px] md:text-base font-medium mb-5">
              {aboutOverview.companyIntroText}
            </p>
            <p className="text-gray-600 leading-[1.8] text-[15px] md:text-base font-medium">
              {aboutOverview.companyIntroText2}
            </p>
          </div>

          {/* Right Video Player Mockup */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group bg-black">
            <VideoPlayer />
          </div>
        </div>

        {/* ================= BOTTOM SECTION: Expertise Grid ================= */}
        <div className="bg-[#fdfaf8] border border-[#f5efe9] rounded-3xl p-6 md:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          
          {/* Header Row */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full border border-dashed border-[#f48131] bg-white flex items-center justify-center text-[#f48131] mr-4 shadow-sm">
              <FiSettings className="text-xl" />
            </div>
            <h3 className="text-[#f48131] font-bold text-sm tracking-[0.15em] uppercase">
              {aboutOverview.capabilitiesTitle}
            </h3>
            <div className="flex-1 h-[1px] bg-[#f48131]/20 ml-6 hidden sm:block"></div>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertiseCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-5 md:p-6 flex items-center gap-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
              >
                {/* Icon Circle */}
                <div className="w-[3.25rem] h-[3.25rem] rounded-full bg-[#fff4eb] flex-shrink-0 flex items-center justify-center text-[#f48131] border border-[#ffecd9]">
                  {card.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h4 className="text-gray-900 font-bold text-[15px] mb-1 group-hover:text-[#f48131] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium line-clamp-2 pr-2">
                    {card.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="text-[#f48131] flex-shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <FiChevronRight className="text-lg" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

function VideoPlayer() {
  const videoRef = useRef(null);
  const timeoutRef = useRef(null); // Ref to hold the timer ID
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.loop = true;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
    setIsPlaying(!v.paused);
  }, []);

  const togglePlay = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    // Clear any existing timer so it doesn't accidentally hide the button while paused
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!v.paused) {
      v.pause();
      setIsPlaying(false);
      setShowPlayButton(true); // Always visible when paused
    } else {
      v.muted = false; // Unmute on user interaction
      v.play();
      setIsPlaying(true);
      setShowPlayButton(true); // Show briefly when started

      // Hide after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setShowPlayButton(false);
      }, 2000);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src="/images/About/AboutVid1.mp4"
        className="w-full h-[360px] md:h-[480px] object-cover cursor-pointer"
        onClick={togglePlay}
      />

      {/* Full overlay to ensure clicking anywhere on the video toggles play/pause */}
      <div 
        className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 cursor-pointer"
        onClick={togglePlay}
      ></div>

      <div className="absolute top-4 left-4 bg-[#1f2128]/90 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg pointer-events-none">
        <HiOutlineDocumentText className="text-base" />
        Company Overview
      </div>

      <div className="absolute top-4 right-4 text-white/90 p-2 cursor-pointer hover:bg-white/10 rounded-full transition-colors z-10">
        <BiDotsVerticalRounded className="text-xl" />
      </div>

      {/* Center Play/Pause Control (Uses opacity for smooth fading) */}
      <div 
        className={`absolute inset-0 m-auto w-[88px] h-[88px] flex items-center justify-center pointer-events-none transition-opacity duration-500 ${
          (showPlayButton || !isPlaying) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full"></div>
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="relative w-16 h-16 bg-[#f48131] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(244,129,49,0.4)] pointer-events-auto hover:scale-105 transition-transform"
        >
          {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl pl-1" />}
        </button>
      </div>
    </>
  );
}

export default AboutOverview;