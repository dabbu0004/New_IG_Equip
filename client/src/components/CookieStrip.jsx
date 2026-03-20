import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    
    if (!cookieAccepted) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 500); 
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-[100] bg-white border-t-4 border-orange-500 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-600 text-sm md:text-base text-center md:text-left flex-1">
          <p className="font-bold text-gray-900 mb-1.5 text-base md:text-lg">
            We value your privacy
          </p>
          <p className="leading-relaxed">
            This website uses cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our{" "}
            <Link 
              to="/privacy-policy" 
              className="text-orange-500 hover:text-orange-600 font-semibold underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link 
              to="/terms-and-conditions" 
              className="text-orange-500 hover:text-orange-600 font-semibold underline underline-offset-4 transition-colors"
            >
              Terms & Conditions
            </Link>.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 w-full md:w-auto flex-shrink-0">
          <Link
            to="/privacy-policy"
            onClick={() => setIsVisible(false)} 
            className="px-5 py-2.5 md:px-6 md:py-2.5 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors duration-300 whitespace-nowrap text-sm md:text-base flex items-center justify-center"
          >
            Learn More
          </Link>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 md:px-6 md:py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md shadow-orange-500/20 whitespace-nowrap text-sm md:text-base flex items-center justify-center"
          >
            Accept All
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CookieStrip;