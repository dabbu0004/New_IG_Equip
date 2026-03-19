import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GalleryData from "../../data/GalleryData"; 

const GalleryPreview = () => {

  const [displayIndices, setDisplayIndices] = useState([0, 1, 2, 3, 4, 5]);
  const [fadingIndex, setFadingIndex] = useState(null);

  useEffect(() => {
    if (!GalleryData || GalleryData.length <= 6) return;
    let nextAvailableIndex = 6;

    const interval = setInterval(() => {
      const boxToUpdate = Math.floor(Math.random() * 6);
 
      setFadingIndex(boxToUpdate);

      setTimeout(() => {
        setDisplayIndices((prevIndices) => {
          const newIndices = [...prevIndices];
         
          newIndices[boxToUpdate] = nextAvailableIndex % GalleryData.length;
          return newIndices;
        });
    
        nextAvailableIndex++;
  
        setFadingIndex(null);
      }, 500); 
      
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-12 max-w-3xl" data-aos="fade-up">
          <span className="text-sm md:text-base font-bold text-red-500 tracking-widest uppercase mb-3 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Glimpses of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Excellence</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Explore moments that reflect our dedication, precision, and the high-quality standards we bring to every project.
          </p>
        </div>


        <div className="flex flex-wrap justify-center w-full gap-y-6 sm:gap-y-8 gap-x-4">
          {displayIndices.map((dataIndex, i) => {
            const item = GalleryData[dataIndex];

            if (!item) return null;

            return (
              <div 
                key={`box-${i}`}

                className={`w-full sm:w-[48%] lg:w-[31%] h-64 sm:h-72 lg:h-80 relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-in-out ${
                  fadingIndex === i ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
     
                <img
                  src={item.image}
                  alt={item.category || "Gallery Image"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
           
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider w-max mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category || "Gallery"}
                  </span>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 lg:mt-16" data-aos="fade-up">
          <Link 
            to="/gallery"
            className="group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl shadow-xl shadow-orange-500/20 transition-all duration-300"
          >
            <span className="tracking-wide">VIEW ALL GALLERY</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;