import React from "react";

const ProductsAbout = ({ productsData }) => {
  if (!productsData) return null;

  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col">
        <div className="w-full mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {productsData.restTitle && <span>{productsData.restTitle}</span>}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              {productsData.highlightTitle || productsData.title}{" "}
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-5xl">
            {productsData.description}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 w-full mb-16 lg:mb-20">
          <div className="w-full max-w-lg lg:max-w-lg aspect-[4/3] rounded-2xl overflow-hidden z-10">
            <video
              src={productsData.aboutVideo}
              className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
            >
            </video>
          </div>

          <div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            data-aos="fade-left"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Features
            </h3>
            {productsData.keyPoints && productsData.keyPoints.length > 0 && (
              <ul className="flex flex-col gap-3.5 mb-10">
                {productsData.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500"></div>
                    <span className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-orange-500/30 transition-all duration-300 w-max tracking-wide flex items-center gap-3 group">
                <span>ADD TO CART</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button className="bg-white border-2 border-gray-200 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-bold py-2.5 px-8 rounded-lg transition-all duration-300 w-max tracking-wide">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
        {productsData.features && productsData.features.length > 0 && (
          <div
            className="w-full bg-gray-50 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm"
            data-aos="fade-up"
          >
            <div className="flex flex-wrap justify-center md:justify-between items-start gap-y-10 gap-x-4">
              {productsData.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center text-center w-[45%] md:w-[30%] lg:w-[15%] group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full text-orange-500 text-2xl md:text-3xl shadow-md mb-4 group-hover:-translate-y-2 transition-transform duration-300 border border-orange-50">
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

        {productsData.subProducts && productsData.subProducts.length > 0 && (
          <div className="w-full flex flex-col items-center mb-16 lg:mb-20 pt-20 border-t border-gray-100">
            <div className="text-center mb-12" data-aos="fade-up">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 uppercase tracking-wide mb-2">
                Our Products
              </h3>
              <h4 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-widest">
                {productsData.title}
              </h4>
            </div>
            <div className="flex flex-col md:flex-row justify-center pt-10 items-stretch gap-8 lg:gap-12 w-full">
              {productsData.subProducts.map((sub, index) => (
                <div
                  key={sub.id}
                  className="flex-1 flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden relative bg-gray-50">
                    <img
                      src={sub.image}
                      alt={sub.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h5 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 mb-5 tracking-wider uppercase">
                      {sub.title}
                    </h5>
                    <ul className="flex flex-col gap-3">
                      {sub.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                          <span className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
