import React from "react";
import BlogsData from "../../data/BlogsData";

const BlogsMain = () => {
  const handleBlogClick = (slug) => {
    window.location.href = `/blogs/${slug}`;
  };

  return (
    <div className="blogs-main-container">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-5">
          Our Latest Blogs
        </h1>
        <div className="flex flex-wrap gap-6 w-full">
          {BlogsData.map((blog) => (
            <div
              key={blog.id}
              className="blog-card hover:scale-105 transition-all duration-300 group bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg w-full md:w-[calc(50%-12px)]"
              onClick={() => handleBlogClick(blog.slug)}
            >
              {/* Blog Image */}
              <div className="blog-image-container h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsMain;
