import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogsData from "../../data/BlogsData";

const EachBlogs = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = BlogsData.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-4 text-black">Blog Not Found</h1>
        <p className="text-gray-600 mb-6">
          The blog you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/blogs")}
          className="cursor-pointer hover:scale-105 transition-all duration-300 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/blogs")}
        className="mb-6 text-orange-600 hover:text-orange-700 flex items-center gap-2 transition-colors duration-300"
      >
        ← Back to Blogs
      </button>

      <div className="mb-8">
        <h1 className="text-2xl md:text-5xl font-bold mb-6 text-black leading-tight">
          {blog.title}
        </h1>

        <div className="w-full h-96 overflow-hidden rounded-xl mb-3 shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="bg-orange-50 p-6 rounded-lg mb-8">
          <p className="text-gray-800 text-md md:text-xl leading-relaxed font-medium">
            {blog.description}
          </p>
        </div>
      </div>

      <div className="prose max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">
          {blog.content.sections.map((section, index) => {
            switch (section.type) {
              case "heading2":
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg px-1 shadow-sm "
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-black pb-2">
                      {section.content}
                    </h2>
                  </div>
                );

              case "heading3":
                return (
                  <div
                    key={index}
                    className="rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-1 flex items-center">
                      <span className="bg-orange-500 rounded-full"></span>
                      {section.content}
                    </h3>
                  </div>
                );

              case "paragraph":
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                  >
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                );

              case "list":
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm border border-gray-200"
                  >
                    <div className="flex flex-col gap-4">
                      {section.items.map((item, itemIndex) => {
                        return (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {itemIndex + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-black mb-1">
                                {item.title}
                              </h4>
                              <p className="text-gray-800">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default EachBlogs;
