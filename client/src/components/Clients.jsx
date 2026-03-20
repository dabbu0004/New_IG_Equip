import React from "react";
import Marquee from "react-fast-marquee";
import ClientsData from "../data/ClientsData";

const Clients = () => {
  const allClients = ClientsData ? ClientsData.flat() : [];

  if (!allClients || allClients.length === 0) return null;

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50 border-y border-gray-100 overflow-hidden flex flex-col items-center">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center mb-16 md:mb-20 max-w-3xl flex flex-col items-center" data-aos="fade-up">
        <span className="text-sm md:text-base font-bold text-red-500 tracking-widest uppercase mb-3 block">
          Our Valued Partners
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Industry Leaders</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          We are proud to collaborate with top-tier organizations and enterprises, delivering reliable and innovative environmental solutions.
          Below is a non-exhaustive list of clients we've had the pleasure of serving.
        </p>
      </div>

      <div className="w-full relative py-6 bg-gray-50 shadow-inner border-y border-gray-50">
        <Marquee 
          gradient={false} 
          speed={50} 
          pauseOnHover={true}
          className="flex items-center overflow-hidden" 
        >
          {allClients.map((client, index) => (
            <div 
              key={`ticker-logo-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-20 md:h-24 mx-8 md:mx-12 group cursor-pointer"
            >
              <img
                src={client.logo}
                alt={`Partner ${index + 1}`}
                className="w-auto h-full max-w-[120px] md:max-w-[150px] lg:max-w-[170px] object-contain grayscale opacity-60 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
};

export default Clients;