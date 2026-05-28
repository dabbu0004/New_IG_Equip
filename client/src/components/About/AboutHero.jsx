import React, { useEffect, useRef } from "react";
import { aboutData } from "../../data/AboutData";
import { FaPlay } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const aboutHero = aboutData;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Intro Text Animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: titleRef.current, start: "top 85%" } }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: titleRef.current, start: "top 85%" } }
      );

      // 2. Cards Stagger Animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current[0], start: "top 85%" }
        }
      );

      // 3. Image Composition Animation
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: imagesRef.current, start: "top 80%" } }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <div ref={sectionRef} className="w-full font-sans bg-white pb-24">
      
      {/* ================= TOP BANNER ================= */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-80"
          style={{ backgroundImage: `url(${aboutHero.bannerImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Banner Title */}
        <h1 className="relative z-10 text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          {aboutHero.pageTitle}
        </h1>
      </section>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28">
        
        {/* Intro Row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-20">
          
          {/* Left: Titles */}
          <div ref={titleRef} className="w-full lg:w-5/12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f48131]"></span>
              <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                {aboutHero.badge}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#f48131]"></span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              <span className="text-[#f48131]">{aboutHero.introTitleHighlight}</span> <br />
              {aboutHero.introTitleNormal} <br />
              {aboutHero.introTitleBottom}
            </h2>
          </div>

          {/* Right: Descriptions */}
          <div ref={textRef} className="w-full lg:w-7/12 flex flex-col md:flex-row gap-6 lg:gap-10 text-gray-500 font-medium leading-relaxed pt-2">
            <p className="flex-1 text-sm md:text-base">{aboutHero.description1}</p>
            <p className="flex-1 text-sm md:text-base">{aboutHero.description2}</p>
          </div>
        </div>

        {/* Feature Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {aboutHero.features.map((feature, idx) => (
            <div 
              key={feature.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="flex items-center gap-5 p-6 md:p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-50 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Icon Circle (Matches image: middle is black, outer are theme color) */}
              <div className={`w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center text-white shadow-md ${
                feature.isDarkIcon ? 'bg-[#111111]' : 'bg-[#f48131]'
              }`}>
                {feature.icon}
              </div>
              
              {/* Text */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Composition Row */}
        <div ref={imagesRef} className="relative w-full pb-10 md:pb-24">
          {/* Main Background Image */}
          <div className="w-full md:w-[80%] rounded-[2rem] overflow-hidden shadow-xl">
            <img 
              src={aboutHero.images.main} 
              alt="Our Team" 
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>

          {/* Overlapping Video Thumbnail */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[45%] bg-white p-1 md:p-2 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src={aboutHero.images.videoThumb} 
                alt="Video Thumbnail" 
                className="w-full h-[200px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-[#f48131] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(244,129,49,0.5)] group-hover:scale-110 transition-transform duration-300 pl-1">
                <FaPlay className="text-xl md:text-2xl" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutHero;