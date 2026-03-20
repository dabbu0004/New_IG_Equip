import React from "react";

const ProductsAbout = ({ productsData }) => {
  if (!productsData) return null;

  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
          
    
          <div 
            className="w-full lg:w-1/2 relative flex justify-center items-center py-8 lg:py-12" 
            data-aos="fade-right"
          >
   
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90%] bg-gradient-to-tr from-orange-100 to-red-50 rounded-3xl -z-10 transform -rotate-6 transition-transform hover:rotate-0 duration-500"></div>
            
            <img
              src={productsData.bannerImage}
              alt={productsData.title}
              className="w-full max-w-sm lg:max-w-lg h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 z-10"
            />
          </div>

   
          <div 
            className="w-full lg:w-1/2 flex flex-col justify-center" 
            data-aos="fade-left"
          >
         
            <span className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-2">
              Product Overview
            </span>


            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 text-transparent bg-clip-text">
                {productsData.highlightTitle || productsData.title}{" "}
              </span>
              {productsData.restTitle && (
                <span>{productsData.restTitle}</span>
              )}
            </h2>

            <div className="mb-10">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
                {productsData.description}
              </p>
            </div>

            <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-500 text-white font-bold py-3.5 px-10 rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-300 w-max tracking-wide flex items-center gap-3 group">
              <span>ADD TO CART</span>
     
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>


        {productsData.features && productsData.features.length > 0 && (
          <div 
            className="w-full mt-10 lg:mt-20 bg-gray-50 border border-gray-100 rounded-3xl p-4 sm:p-6 shadow-sm"
            data-aos="fade-up"
          >
            <div className="flex flex-wrap justify-center sm:justify-between items-start gap-y-10 gap-x-4">
              {productsData.features.map((feature) => (
                <div 
                  key={feature.id} 
        
                  className="flex flex-col items-center text-center w-[45%] sm:w-[30%] lg:w-[15%] group"
                >
           
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-full text-orange-500 text-2xl sm:text-3xl shadow-md mb-4 group-hover:-translate-y-2 transition-transform duration-300 border border-orange-50">
                    {feature.icon}
                  </div>
                  
             
                  <span className="font-bold text-gray-800 text-sm md:text-base leading-snug">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductsAbout;