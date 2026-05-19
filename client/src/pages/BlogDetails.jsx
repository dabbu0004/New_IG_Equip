import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { blogPosts } from "../data/BlogData";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the exact post matching the URL slug
  const post = blogPosts.find((p) => p.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
        <button onClick={() => navigate("/blogs")} className="text-[#f48131] hover:underline">Return to Blogs</button>
      </div>
    );
  }

  return (
    <article className="w-full bg-white py-16 md:py-4 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#f48131] font-semibold text-sm mb-10 transition-colors"
        >
          <FiArrowLeft className="text-lg" /> Back to all posts
        </Link>

        {/* Header Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-[#f48131] text-sm font-bold tracking-wide mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl md:w-[70%] font-black text-[#111111] leading-tight mb-8">
            {post.title}
          </h1>
          
          {/* Author Row */}
          <div className="flex items-center gap-4">
            <img src={post.authorAvatar} alt={post.authorName} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-base font-bold text-gray-900">{post.authorName}</span>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mt-0.5">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-md"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Body Content */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg prose-gray max-w-none"
        >
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
            {post.excerpt}
          </p>
          
          {/* We split by \n to render paragraphs properly from the dummy text */}
          {post.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 text-lg leading-loose mb-6">
              {paragraph}
            </p>
          ))}
        </motion.div>

      </div>
    </article>
  );
};

export default BlogDetail;