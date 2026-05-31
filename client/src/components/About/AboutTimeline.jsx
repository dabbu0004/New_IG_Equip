import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { aboutData } from "../../data/AboutData";
import AboutCompanyNumber from "./AboutCompanyNumber";
import { MdSwipe } from "react-icons/md";

const AboutTimeline = () => {
  const { timeline } = aboutData;
  const timelineRef = useRef(null);
  const trackRef = useRef(null);
  
  const controls = useAnimation();
  const panControls = useAnimation();
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 });
  
  const [maxPan, setMaxPan] = useState(0);

  // Calculate the maximum scrollable distance based on screen size and content width
  useEffect(() => {
    const calculateWidth = () => {
      if (trackRef.current && timelineRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth = timelineRef.current.offsetWidth;
        // Calculate leftover width to pan, add a bit of padding at the end
        const panDistance = trackWidth - containerWidth > 0 ? (trackWidth - containerWidth) + 80 : 0;
        setMaxPan(panDistance);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, [timeline.events]);

  // Handle the Animation Sequence
  useEffect(() => {
    if (isInView) {
      // 1. Draw the line and pop the dots
      controls.start("visible").then(() => {
        // 2. Auto-pan slowly to the newest year (2026)
        if (maxPan > 0) {
          panControls.start({
            x: -maxPan,
            transition: { duration: 5.5, ease: "easeInOut", delay: 0.5 }
          });
        }
      });
    }
  }, [isInView, maxPan, controls, panControls]);

  // Framer Motion Variants
  const eventVariants = {
    hidden: (offset) => ({ opacity: 0, y: offset, filter: "blur(4px)" }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" }
    })
  };

  const dotVariants = {
    hidden: { scale: 0, backgroundColor: "#ffffff", boxShadow: "0 0 0 rgba(244,129,49,0)" },
    visible: (index) => ({
      scale: 1,
      backgroundColor: "#f48131",
      boxShadow: "0 0 20px rgba(244,129,49,0.7)",
      transition: { duration: 0.4, delay: index * 0.15 + 0.1 }
    })
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 3.5, ease: "easeInOut" } }
  };

  return (
    <section ref={timelineRef} className="w-full bg-[#fcfcfc] pt-12 md:pt-20 font-sans overflow-hidden border-t border-gray-100">
      <AboutCompanyNumber />
      {/* Header Section */}
      <div className="text-center mb-8 px-1">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          {timeline.title}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
          {timeline.description}
        </p>
      </div>

      {/* Swipe Indicator (Fades out after a few seconds) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, delay: 6 }}
        className="flex items-center justify-center gap-2 text-[#f48131] text-sm font-bold uppercase tracking-widest mb-4"
      >
        <MdSwipe className="text-lg" />
        Drag to Explore
      </motion.div>

      {/* Draggable Timeline Container */}
      <div 
        className="relative w-full cursor-grab active:cursor-grabbing pb-5 pt-1"
        style={{
          // Fade effect on the left and right edges for a premium look
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "-webkit-linear-gradient(left, transparent, black 5%, black 95%, transparent)"
        }}
      >
        <motion.div
          ref={trackRef}
          drag="x"
          // Restrict dragging so it doesn't fly off the screen
          dragConstraints={{ left: -maxPan, right: 0 }}
          dragElastic={0.1}
          animate={panControls}
          className="relative flex items-center min-w-max h-72 md:h-80 px-10 md:px-[10vw]"
        >
          
          {/* Base Gray Horizontal Line */}
          <div className="absolute left-10 right-10 h-[2px] bg-gray-200 top-1/2 -translate-y-1/2"></div>
          
          {/* Animated Glowing Orange Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={controls}
            className="absolute left-10 right-10 h-[3px] top-1/2 -translate-y-1/2 origin-left"
            style={{ backgroundColor: "#f48131", boxShadow: "0 0 16px rgba(244, 129, 49, 0.6)" }}
          ></motion.div>

          {/* Timeline Events Mapping */}
          <div className="relative flex gap-12 md:gap-24 w-full">
            {timeline.events.map((event, idx) => (
              <motion.div 
                key={idx} 
                custom={idx}
                variants={eventVariants}
                initial="hidden"
                animate={controls}
                className="relative flex flex-col items-center w-52 md:w-60 text-center flex-shrink-0"
              >
                
                {/* Center Node Dot */}
                <motion.div
                  custom={idx}
                  variants={dotVariants}
                  initial="hidden"
                  animate={controls}
                  className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 border-[3px] border-white bg-[#f48131] z-10 rounded-full"
                ></motion.div>

                {/* Vertical Connector Lines */}
                <div className={`absolute left-1/2 w-[2px] h-10 bg-gray-200 ${event.position === "top" ? "bottom-1/2" : "top-1/2"}`}></div>

                {/* Alternating Content (Top / Bottom) */}
                {event.position === "bottom" ? (
                  <>
                    <span className="absolute bottom-[calc(50%+24px)] text-3xl font-black text-gray-900 tracking-tight">{event.year}</span>
                    <span className="absolute top-[calc(50%+24px)] text-[13px] md:text-sm text-gray-500 px-2 font-medium leading-relaxed bg-white/80 p-2 rounded-lg backdrop-blur-sm">{event.text}</span>
                  </>
                ) : (
                  <>
                    <span className="absolute bottom-[calc(50%+24px)] text-[13px] md:text-sm text-gray-500 px-2 font-medium leading-relaxed bg-white/80 p-2 rounded-lg backdrop-blur-sm">{event.text}</span>
                    <span className="absolute top-[calc(50%+24px)] text-3xl font-black text-gray-900 tracking-tight">{event.year}</span>
                  </>
                )}

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      
    </section>
  );
};

export default AboutTimeline;