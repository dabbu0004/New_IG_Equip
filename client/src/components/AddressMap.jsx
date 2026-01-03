import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const AddressMap = () => {
  const API_KEY = "AIzaSyCgNEq1xSPkgj-H_99kscSOQTRQnYiLHHo";

  const FULL_ADDRESS =
    "21, Udyog Vihar, Ecotech-II, Udyog Vihar, Greater Noida, Uttar Pradesh 201306";
  const encodedAddress = encodeURIComponent(FULL_ADDRESS);
  const embedSrc = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodedAddress}`;

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
          <FaMapMarkerAlt className="text-orange-600" />
          <span>Find Us Here</span>
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
          <div className="relative">
            <iframe
              src={embedSrc}
              width="100%"
              height="450"
              className="w-full h-64 md:h-[35rem]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location Map"
            ></iframe>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 px-6 py-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
              <p className="text-sm text-gray-600 text-center sm:text-left">
                {FULL_ADDRESS}
              </p>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressMap;
