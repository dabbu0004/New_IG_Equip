import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const AddressMap = () => {
  const googleMapsLink = "https://maps.app.goo.gl/Z9dNjBp2PKNe9XHNA";

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl  lg:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
          <FaMapMarkerAlt className="text-orange-600" />
          <span>Find Us Here</span>
        </h2>
      </div>

      {/* Centered Map Container */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
          {/* Map Iframe */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8969405097865!2d77.20406931508236!3d28.613925282429745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683329b71%3A0x1bae22c481068f59!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1636789012345!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="w-full h-64 md:h-[35rem]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IG Equipment Location Map"
            ></iframe>
          </div>

          {/* Map Footer with Quick Action */}
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 px-6 py-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
              <p className="text-sm text-gray-600 text-center sm:text-left">
                Click and explore our location on the map
              </p>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 text-center hover:shadow-lg transform hover:-translate-y-0.5"
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
