import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { blogPosts } from "../../data/BlogData"; // Adjust this import path based on your folder structure

const HomeBlogs = () => {
  // Fetch only the first 3 posts for the homepage preview
  const recentPosts = blogPosts.slice(0, 3);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20 md:py-28 font-sans border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ======================================= */}
        {/* HEADER SECTION                          */}
        {/* ======================================= */}
        <motion.div 
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
        >
          <div className="max-w-2xl">
            <span className="inline-block text-[#f48131] text-sm font-bold uppercase tracking-widest mb-3">
              Industry Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-700 leading-tight tracking-tight mb-4">
              Latest News & Updates
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
              Discover the latest trends, technological advancements, and expert insights in clean energy and industrial gas solutions.
            </p>
          </div>

          <Link to="/blogs" className="group hidden md:inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-[#111111] hover:border-[#f48131] hover:text-[#f48131] font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
            View All Articles
            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* ======================================= */}
        {/* BLOG GRID                               */}
        {/* ======================================= */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {recentPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants} className="h-full">
              <Link 
                to={`/blog/${post.slug}`} 
                className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(244,129,49,0.08)] hover:-translate-y-1.5 hover:border-orange-100 transition-all duration-300 group"
              >
                
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#111111] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-6 md:p-4">
                  <h4 className="text-xl md:text-xl font-bold text-[#111111] leading-snug mb-3 group-hover:text-[#f48131] transition-colors duration-300">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-grow line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author Meta (Bottom aligned) */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                    <img 
                      src={post.authorAvatar} 
                      alt={post.authorName} 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex items-center flex-wrap gap-2 text-sm font-medium text-gray-500">
                      <span className="text-gray-900">{post.authorName}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <motion.div 
          className="mt-10 md:hidden flex justify-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link to="/blogs" className="group inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-[#111111] hover:border-[#f48131] hover:text-[#f48131] font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-sm w-full justify-center">
            View All Articles
            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeBlogs;