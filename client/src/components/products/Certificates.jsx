import React, { useState, useEffect } from "react";
// Import your actual certificate images here:
import c1 from "../../assets/certificates/c1.jpg";
import c2 from "../../assets/certificates/c2.jpg";
import c3 from "../../assets/certificates/c3.png";
import c4 from "../../assets/certificates/c4.jpg";

// Dummy data - replace the images with your imported assets
const certificateData = [
  { id: 1, title: "ISO 9001:2015", image: c1 },
  { id: 2, title: "Authorized Dealer", image: c2 },
  { id: 3, title: "CPCB Approved", image: c3 },
  { id: 4, title: "Safety Standard", image: c4 },
];

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const totalCerts = certificateData.length;

  // Auto-play functionality
  useEffect(() => {
    // Pause auto-play if the modal is open
    if (isModalOpen) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalCerts);
    }, 3500); // Changes every 3.5 seconds

    return () => clearInterval(interval);
  }, [isModalOpen, totalCerts]);

  // Handle clicking a certificate
  const handleCertClick = (index, cert) => {
    if (index === activeIndex) {
      // If it's the center one, open the modal
      setSelectedCert(cert);
      setIsModalOpen(true);
    } else {
      // If it's a side one, bring it to the center
      setActiveIndex(index);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Slight delay before clearing the image to let the modal close smoothly
    setTimeout(() => setSelectedCert(null), 200); 
  };

  // Helper function to determine the CSS classes based on the certificate's position
  const getPositionClasses = (index) => {
    // Center Item
    if (index === activeIndex) {
      return "left-1/2 -translate-x-1/2 z-30 scale-100 opacity-100 blur-none cursor-zoom-in shadow-2xl shadow-orange-500/20";
    }
    // Left Item
    if (index === (activeIndex - 1 + totalCerts) % totalCerts) {
      return "left-0 sm:left-1/4 -translate-x-1/2 z-10 scale-75 opacity-60 blur-[3px] cursor-pointer hidden sm:block shadow-lg hover:opacity-80 transition-opacity";
    }
    // Right Item
    if (index === (activeIndex + 1) % totalCerts) {
      return "left-full sm:left-3/4 -translate-x-1/2 z-10 scale-75 opacity-60 blur-[3px] cursor-pointer hidden sm:block shadow-lg hover:opacity-80 transition-opacity";
    }
    // Hidden Items (Behind)
    return "left-1/2 -translate-x-1/2 z-0 scale-50 opacity-0 blur-md pointer-events-none";
  };

  return (
    <>
      <section className="w-full py-16 lg:py-15 bg-gradient-to-b from-orange-50/50 to-white overflow-hidden">
        {/* 7xl Container - Flexbox Only */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          {/* Trust-Building Header */}
          <div className="text-center mb-12 lg:mb-16 max-w-3xl flex flex-col items-center" data-aos="fade-up">
            <span className="text-sm md:text-base font-bold text-red-500 tracking-widest uppercase mb-3 block">
              Certifications
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Honours & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Global Compliance</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Independently validated credentials demonstrating our unwavering commitment to safety, performance, and unmatched quality.
            </p>
          </div>

          <div className="w-full relative flex pt-10 pb-10">
            {/* Carousel Track - Reduced height so it doesn't take up too much vertical space */}
            <div className="relative w-full h-[220px] sm:h-[300px] flex justify-center items-center">
              {certificateData.map((cert, index) => (
                <div
                  key={cert.id}
                  onClick={() => handleCertClick(index, cert)}
                  // REDUCED WIDTHS HERE: w-[180px] sm:w-[240px] md:w-[320px]
                  className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out w-[280px] sm:w-[240px] md:w-[320px] bg-white p-2 rounded-md border border-gray-100 ${getPositionClasses(index)}`}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain rounded"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile swipe hint */}
          <p className="mt-4 text-sm text-gray-400 sm:hidden animate-pulse">
            Tap the center image to view full screen
          </p>

        </div>
      </section>

      {/* Full Screen Modal with Tailwind-only transitions */}
      {isModalOpen && selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 transition-opacity duration-300"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white hover:text-orange-500 transition-colors z-[101]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div 
            className="relative max-w-7xl w-full flex flex-col items-center justify-center transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              // FORCED LARGER SIZE HERE: min-h-[60vh] md:min-h-[80vh]
              className="w-auto max-w-[95vw] min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] max-h-[85vh] object-contain rounded-lg shadow-2xl ring-4 ring-white/10 bg-white/5"
            />
            <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-lg">
              {selectedCert.title}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;