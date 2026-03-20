import React from "react";

const ProductHero = ({ productsData }) => {
  const isVideo = productsData?.bannerVideo || productsData?.bannerImage?.includes('.mp4');

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden flex justify-center">
      {isVideo ? (
        <video
          src={productsData.bannerVideo || productsData.bannerImage}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      ) : (
        <div
          className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${productsData?.bannerImage}')`,
          }}
        ></div>
      )}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
        <h1 
          data-aos="fade-up"
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center drop-shadow-xl mb-4 leading-tight"
        >
          {productsData?.title}
        </h1>
        
        <p 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="text-base md:text-xl lg:text-2xl text-gray-200 text-center drop-shadow-md max-w-3xl"
        >
          {productsData?.description}
        </p>
      </div>
      
    </div>
  );
};

export default ProductHero;