import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data/BlogData";

const BlogPage = () => {
  const mainFeatured = blogPosts.find((post) => post.isMainFeatured);
  const sideFeatured = blogPosts.filter((post) => post.isSideFeatured).slice(0, 4);
  const recentPosts = blogPosts.filter((post) => post.isRecent).slice(0, 3);

  return (
    <section className="w-full bg-white py-12 md:py-20 font-sans">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* ======================================= */}
        {/* TOP SECTION: Featured Posts             */}
        {/* ======================================= */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20">
          
          {/* Left: Main Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="w-full lg:w-[65%]"
          >
            <Link to={`/blog/${mainFeatured.slug}`} className="block relative w-full aspect-[16/9] md:aspect-[16/10] rounded-[24px] overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500">
              <img 
                src={mainFeatured.image} 
                alt={mainFeatured.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/40 bg-black/30 backdrop-blur-md text-white text-xs font-semibold tracking-wide mb-4">
                  {mainFeatured.category}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight group-hover:text-[#f48131] transition-colors duration-300">
                  {mainFeatured.title}
                </h2>
              </div>
            </Link>
          </motion.div>

          {/* Right: Other Featured Posts List */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-[35%] flex flex-col"
          >
            <h3 className="text-xl font-bold text-[#111111] mb-6">Other featured posts</h3>
            
            <div className="flex flex-col">
              {sideFeatured.map((post, index) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`} 
                  className={`flex flex-row items-center gap-5 py-4 group ${index !== sideFeatured.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-[15px] font-bold text-[#111111] leading-snug group-hover:text-[#f48131] transition-colors duration-300">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ======================================= */}
        {/* BOTTOM SECTION: Recent Posts            */}
        {/* ======================================= */}
        <div className="w-full">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#111111]">Recent Posts</h3>
            <button className="px-5 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
              All Posts
            </button>
          </div>

          {/* Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="flex flex-col group cursor-pointer h-full">
                  
                  {/* Image */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Excerpt */}
                  <h4 className="text-[22px] font-bold text-[#111111] leading-snug mb-3 group-hover:text-[#f48131] transition-colors duration-300">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author Meta */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img 
                      src={post.authorAvatar} 
                      alt={post.authorName} 
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <span className="text-gray-900">{post.authorName}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogPage;