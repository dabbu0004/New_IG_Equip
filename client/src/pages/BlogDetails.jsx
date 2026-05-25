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

  const renderSection = (section, index) => {
    if (section.type === "heading2") {
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          {section.content}
        </h2>
      );
    }

    if (section.type === "heading3") {
      return (
        <h3 key={index} className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-3">
          {section.content}
        </h3>
      );
    }

    if (section.type === "paragraph") {
      return (
        <p key={index} className="text-gray-600 text-lg leading-loose mb-6">
          {section.content}
        </p>
      );
    }

    if (section.type === "list") {
      return (
        <ul key={index} className="list-disc pl-6 space-y-3 text-gray-600 text-lg mb-8">
          {section.items?.map((item, itemIndex) => (
            <li key={itemIndex}>
              <span className="font-semibold text-gray-900">{item.title}</span>
              {item.description ? (
                <span className="text-gray-600"> — {item.description}</span>
              ) : null}
            </li>
          ))}
        </ul>
      );
    }

    if (section.type === "table") {
      return (
        <div key={index} className="overflow-x-auto mb-10">
          <table className="w-full border border-gray-200 text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                {section.headers?.map((header, headerIndex) => (
                  <th
                    key={headerIndex}
                    className="px-4 py-3 font-semibold text-gray-800 border-b"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows?.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b last:border-b-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return null;
  };

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
      <div className="max-w-7xl md:mt-10 mx-auto px-4 sm:px-6 md:px-12">
      

        {/* Header Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-[#f48131] text-sm font-bold tracking-wide mb-6">
            {post.category || "Blog"}
          </span>
          <h1 className="text-3xl md:text-4xl md:w-[70%] font-black text-[#111111] leading-tight mb-8">
            {post.title}
          </h1>
          
          {/* Author Row */}
          <div className="flex items-center gap-4">
            <img
              src={post.authorAvatar || "/images/logo.webp"}
              alt={post.authorName || "Inventive Gas Equipment"}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold text-gray-900">
                {post.authorName || "Inventive Gas Equipment"}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mt-0.5">
                <span>{post.date || "May 2026"}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{post.readTime || "5 min read"}</span>
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
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed mb-8">
            {post.excerpt || post.description}
          </p>

          {post.content?.sections?.map((section, idx) => renderSection(section, idx))}
        </motion.div>

      </div>
    </article>
  );
};

export default BlogDetail;