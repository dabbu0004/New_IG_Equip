import React from "react";

const SubProducts = ({ productsData }) => {
  if (!productsData || !productsData.subProducts || productsData.subProducts.length === 0) {
    return null;
  }

  return (
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
  );
};

export default SubProducts;