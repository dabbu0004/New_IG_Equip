
import React from "react";

const Blog = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-400  ">
      <div className="container mx-auto">
         
        <h2 className="text-black text-[200px] font-normal relative top-80 left-32 ">Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <div className="bg-white rounded-lg p-8 flex items-center justify-center">
          </div>
          
          <div className="bg-white rounded-lg p-36">
            {/* Empty card */}
          </div>
          
          <div className="bg-white rounded-lg p-36">
            {/* Empty card */}
          </div>
          
          <div className="bg-white rounded-lg p-8">
            {/* Empty card */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;