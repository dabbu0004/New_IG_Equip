import React, { useState, useEffect, useRef } from "react";
import { faqsData } from "../../data/FaqsData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Faqs = () => {
  const [expandedId, setExpandedId] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const faqsRef = useRef([]);

  const toggleFaq = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 30 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      gsap.set(faqsRef.current, { opacity: 0, x: -30 });

      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.to(faqsRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-100 py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div
            ref={titleRef}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <FaQuestionCircle className="text-orange-500 text-3xl" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
              Frequently Asked Questions
            </h1>
          </div>
          <p ref={subtitleRef} className="text-lg text-orange-600 font-medium">
            Everything you need to know about RECD (Retrofit Emissions Control
            Device)
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqsData.map((faq, idx) => (
            <div
              key={faq.id}
              ref={(el) => (faqsRef.current[idx] = el)}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-transparent hover:border-orange-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full cursor-pointer flex justify-between items-center px-6 py-4 text-left hover:bg-orange-50 transition duration-300 group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition duration-300">
                    {expandedId === faq.id ? (
                      <FaMinus className="text-xs" />
                    ) : (
                      <FaPlus className="text-xs" />
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-700 group-hover:text-orange-600 transition duration-300 pr-4">
                    {faq.question}
                  </h3>
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expandedId === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 pt-2 border-t border-orange-100">
                  <p className="text-gray-600 md:text-base text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
