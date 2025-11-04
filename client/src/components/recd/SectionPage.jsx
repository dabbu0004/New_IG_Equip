import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SectionPage = ({ section }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (section.animation) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (Array.isArray(section.animation)) {
                if (entry.target === leftRef.current) {
                  entry.target.classList.add(section.animation[0]);
                } else if (entry.target === rightRef.current) {
                  entry.target.classList.add(section.animation[1]);
                }
              } else {
                entry.target.classList.add(section.animation);
              }
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      if (leftRef.current) observer.observe(leftRef.current);
      if (rightRef.current) observer.observe(rightRef.current);

      return () => observer.disconnect();
    }
  }, [section.animation]);

  return (
    <div
      className={`w-full ${section.gradient} text-white px-6 lg:px-24 overflow-hidden py-14`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {section.type === "image-left" ? (
          <>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={section.image}
                alt={section.imageAlt}
                className={section.imageClass}
              />
            </div>
            <div
              ref={rightRef}
              className="w-full lg:w-1/2 opacity-0 transform translate-x-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                {section.title}
              </h2>
              <div
                className={`h-[2px] ${section.dividerWidth} bg-white mb-5 rounded-full`}
              ></div>
              {section.certifiedText && (
                <p className="text-base lg:text-lg font-medium mb-3">
                  {section.certifiedText}
                </p>
              )}
              {section.certifiedBy && (
                <div className="flex items-center gap-4 mb-5">
                  {section.certifiedBy.map((cert, idx) => (
                    <img
                      key={idx}
                      src={cert.src}
                      alt={cert.alt}
                      className="w-20 h-12 object-contain"
                    />
                  ))}
                </div>
              )}
              {section.description && (
                <p className="text-sm lg:text-[22px] leading-snug opacity-90 mb-6">
                  {section.description}
                </p>
              )}
              {section.list && (
                <ul className="space-y-1 text-[17px] lg:text-[22px] leading-snug opacity-90">
                  {section.list.map((item, idx) => (
                    <li key={idx}>
                      {item.strong && <strong>{item.strong}</strong>}{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
              {section.button && (
                <button
                  onClick={() =>
                    section.button.link && navigate(section.button.link)
                  }
                  className={section.button.style}
                >
                  {section.button.text}
                </button>
              )}
            </div>
          </>
        ) : section.type === "image-right" ? (
          <>
            <div
              ref={leftRef}
              className="w-full lg:w-1/2 opacity-0 transform translate-x-[-50px]"
            >
              <h2 className="text-xl lg:text-4xl font-bold mb-2">
                {section.title}
              </h2>
              <div
                className={`h-[2px] ${section.dividerWidth} bg-white mb-6 rounded-full`}
              ></div>
              {section.list && (
                <ul className="space-y-2 text-[17px] lg:text-[22px] leading-snug opacity-90">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item.text}</li>
                  ))}
                </ul>
              )}
              {section.button && (
                <button
                  onClick={() =>
                    section.button.link && navigate(section.button.link)
                  }
                  className={section.button.style}
                >
                  {section.button.text}
                </button>
              )}
            </div>
            <div
              ref={rightRef}
              className="w-full lg:w-1/2 flex justify-center opacity-0 transform translate-x-[50px]"
            >
              <img
                src={section.image}
                alt={section.imageAlt}
                className={section.imageClass}
              />
            </div>
          </>
        ) : (
          <>
            <div
              ref={leftRef}
              className="w-full lg:w-1/2 opacity-0 transform translate-x-[-50px]"
            >
              <h2 className="text-xl lg:text-4xl font-bold mb-2">
                {section.title}
              </h2>
              <div
                className={`h-[2px] ${section.dividerWidth} bg-white mb-6 rounded-full`}
              ></div>
              {section.list && (
                <ul className="space-y-2 text-[17px] lg:text-[22px] leading-snug opacity-90">
                  {section.list.map((item, idx) => (
                    <li key={idx}>
                      {item.strong && <strong>{item.strong}</strong>}{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
              {section.button && (
                <button
                  onClick={() =>
                    section.button.link && navigate(section.button.link)
                  }
                  className={section.button.style}
                >
                  {section.button.text}
                </button>
              )}
            </div>
            <div
              ref={rightRef}
              className="w-full lg:w-1/2 flex justify-center opacity-0 transform translate-x-[50px]"
            >
              <img
                src={section.image}
                alt={section.imageAlt}
                className={section.imageClass}
              />
            </div>
          </>
        )}
      </div>
      <style>
        {`
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(60px);}
            100% { opacity: 1; transform: translateX(0);}
          }
          .slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(50px);}
            to { opacity: 1; transform: translateX(0);}
          }
          .fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
          .fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
        `}
      </style>
    </div>
  );
};

export default SectionPage;
