import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import blogsData from "../../data/BlogsData";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AnimateAppear from "../animations/AnimateAppear";

const BlogsSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedBlogs = [...blogsData, ...blogsData, ...blogsData];

  useEffect(() => {
    setCurrentIndex(blogsData.length);
  }, []);

  const handleTransitionEnd = () => {
    if (!isTransitioning) return;

    if (currentIndex >= blogsData.length * 2) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(blogsData.length);
      }, 0);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(blogsData.length);
      }, 0);
    } else {
      setIsTransitioning(false);
    }
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const cardWidth = 100 / cardsPerView;
  const translateX = currentIndex * cardWidth;

  const handleBlogClick = (slug) => {
    navigate(`/blogs/${slug}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    };

    gsap.set(section, { opacity: 0, y: 60 });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100 px-4 md:px-6 py-6"
      style={{ opacity: 0, transform: "translateY(60px)" }}
    >
      <div className="flex max-w-7xl mx-auto flex-col p-2 rounded-4xl items-stretch">
        <AnimateAppear>
          <div className="z-10 py-2 text-center px-2">
            <h3 className="text-3xl lg:text-4xl mx-auto font-bold text-gray-700 mb-2 leading-tight">
              Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Latest Blogs</span>
              </span>
            </h3>
            <p className="max-w-4xl text-base text-gray-600 mx-auto px-2">
              Stay updated with the latest trends, insights, and stories from
              our world through our carefully curated blog posts.
            </p>
          </div>
        </AnimateAppear>

        <div className="relative px-0 md:px-8 lg:px-12 xl:px-16">
          <button
            onClick={handlePrev}
            className="absolute hidden lg:block cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-700 text-gray-700 hover:text-white p-3 rounded-full shadow-sm shadow-gray-200 transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <div className="overflow-hidden py-1">
            <div
              ref={sliderRef}
              className="flex my-6 md:my-8 lg:my-10"
              style={{
                transform: `translateX(-${translateX}%)`,
                transition: isTransitioning
                  ? "transform 0.7s ease-in-out"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div
                    onClick={() => handleBlogClick(blog.slug)}
                    className="bg-white hover:-translate-y-3 shadow-sm shadow-[#d7e7f5] cursor-pointer group transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden h-full"
                  >
                    <div className="relative h-40 sm:h-48 md:h-50 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#313d00] transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-3 sm:mb-4">
                        {blog.description}
                      </p>
                      <span className="text-gray-500 font-semibold text-xs sm:text-sm group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute hidden lg:block cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-700 text-gray-700 hover:text-white p-3 rounded-full shadow-sm shadow-gray-200 transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={() => {
            navigate("/blogs");
          }}
          className="cursor-pointer px-3 sm:px-4 py-2 hover:scale-105 text-sm sm:text-base font-normal flex items-center gap-2 w-fit mx-auto bg-linear-to-r from-blue-700 to-blue-500 hover:brightness-110 text-white rounded-xl sm:rounded-2xl transition-all duration-300"
        >
          View Others
          <HiArrowTopRightOnSquare className="text-lg sm:text-xl" />
        </button>
      </div>
    </section>
  );
};

export default BlogsSection;
