import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../../assets/industries/img1.webp";
import img2 from "../../assets/industries/img2.webp";
import img3 from "../../assets/industries/img3.webp";
import img4 from "../../assets/industries/img4.webp";
import img5 from "../../assets/industries/img5.webp";
import img6 from "../../assets/industries/img6.webp";
import {
  FaCity,
  FaSchool,
  FaHospital,
  FaBuilding,
  FaHardHat,
  FaIndustry,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const splitWords = (text) =>
  text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden">
      <span className="inline-block word">{word}&nbsp;</span>
    </span>
  ));

const RecdApplications = () => {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const applications = [
    {
      title: "Residential Societies & Smart Cities",
      image: img1,
      icon: FaCity,
    },
    { title: "Educational Institutions", image: img2, icon: FaSchool },
    { title: "Healthcare Facilities", image: img3, icon: FaHospital },
    { title: "Commercial Buildings & IT Parks", image: img4, icon: FaBuilding },
    {
      title: "Construction Sites & Infrastructure Projects",
      image: img5,
      icon: FaHardHat,
    },
    { title: "Industrial Plants & Warehouses", image: img6, icon: FaIndustry },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, subtitleRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      cardsRef.current.forEach((card) => {
        const img = card.querySelector("img");
        const words = card.querySelectorAll(".word");
        const icon = card.querySelector(".icon");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
        )
          .fromTo(
            img,
            { scale: 1.15 },
            {
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4",
          )
          .fromTo(
            icon,
            { scale: 0.6, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "back.out(1.7)",
            },
            "-=0.4",
          )
          .fromTo(
            words,
            { y: "120%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.35,
              stagger: 0.03,
              ease: "power2.out",
            },
            "-=0.3",
          );

        const hover = gsap.to(card, {
          y: -10,
          duration: 0.25,
          ease: "power2.out",
          paused: true,
        });

        const imgZoom = gsap.to(img, {
          scale: 1.08,
          duration: 0.4,
          ease: "power2.out",
          paused: true,
        });

        card.addEventListener("mouseenter", () => {
          hover.play();
          imgZoom.play();
        });

        card.addEventListener("mouseleave", () => {
          hover.reverse();
          imgZoom.reverse();
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gradient-to-br from-white via-orange-50 to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl max-w-3xl mx-auto font-semibold text-gray-900 mb-4"
          >
            Applications of <span className="text-orange-500">Retrofit Emission Control Devices</span> (RECD)
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg text-orange-500 font-medium max-w-2xl mx-auto"
          >
            Transforming air quality across diverse environments
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-10">
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="relative rounded-2xl overflow-hidden bg-white shadow-lg"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md">
                    <Icon className="icon text-orange-500 text-2xl" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-white text-xl font-semibold leading-snug">
                      {splitWords(app.title)}
                    </h3>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecdApplications;
