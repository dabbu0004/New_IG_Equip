import React from "react";

const ProductHero = ({ productsData }) => {
  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${productsData.bannerImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg mb-4">
          {productsData.title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white text-center drop-shadow-md max-w-3xl">
          {productsData.description}
        </p>
      </div>
    </div>
  );
};

export default ProductHero;
