import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  IoSend,
  IoCheckmarkCircle,
  IoPerson,
  IoCall,
  IoMail,
  IoChatbubble,
  IoBusiness,
  IoLocationSharp,
  IoGlobeOutline
} from "react-icons/io5";
import axios from "axios";
import {
  handleError,
  handleSuccess,
  handleWarning,
} from "../components/handleUtils";

const NewContactForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    companyEmail: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.companyEmail ||
      !formData.companyName ||
      !formData.location
    ) {
      handleWarning("Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/query/Longquerypost`,
        {
          name: formData.name,
          phone: formData.phone,
          companyName: formData.companyName,
          companyEmail: formData.companyEmail,
          location: formData.location,
          message: formData.message,
        }
      );

      setFormData({
        name: "",
        phone: "",
        companyName: "",
        companyEmail: "",
        location: "",
        message: "",
      });

      handleSuccess("Your equipment inquiry has been submitted successfully!");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      handleError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      label: "Your Name*",
      name: "name",
      type: "text",
      icon: IoPerson,
      placeholder: "Enter your Full Name",
    },
    {
      label: "Phone Number*",
      name: "phone",
      type: "tel",
      icon: IoCall,
      placeholder: "+91 9876543210",
    },
    {
      label: "Company Name*",
      name: "companyName",
      type: "text",
      icon: IoBusiness,
      placeholder: "Your company name",
    },
    {
      label: "Company Email*",
      name: "companyEmail",
      type: "email",
      icon: IoMail,
      placeholder: "email@company.com",
    },
    {
      label: "Location*",
      name: "location",
      type: "text",
      icon: IoLocationSharp,
      placeholder: "City, Country",
    },
  ];

  // Restructured features array for a cleaner look
  const features = [
    {
      icon: IoCall,
      title: "Call Us",
      text: "+91 8830317796, +91 7042100426",
    },
    {
      icon: IoChatbubble,
      title: "Fast Support",
      text: "Quick response time for all inquiries",
    },
    {
      icon: IoGlobeOutline,
      title: "Global Reach",
      text: "Serving clients and industries worldwide",
    },
    {
      icon: IoLocationSharp,
      title: "Headquarters",
      text: "Plot No.21, Udyog Vihar, Ecotech-II, Greater Noida, UP 201306",
    },
  ];

  return (
    <div className="w-full min-h-screen py-12 px-4 overflow-x-hidden bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 h-full">
        
        {/* ================= LEFT SECTION (FORM) ================= */}
        <div className="w-full lg:w-1/2 max-w-lg order-2 lg:order-1">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-6 border border-gray-100">
            {submitted ? (
              <div className="text-center py-10 space-y-4 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-2">
                  <IoCheckmarkCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Message Sent!
                </h3>
                <p className="text-gray-500 font-medium">
                  Thank you! We'll connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center space-y-2 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Send us a message
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    Contact us today to discuss your requirements.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {formFields.slice(0, -1).map((field) => {
                    const IconComponent = field.icon;
                    const isFieldFilled = formData[field.name] && formData[field.name].length > 0;
                    return (
                      <div key={field.name}>
                        <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                          {field.label}
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <IconComponent
                              className={`w-4 h-4 transition-colors ${
                                focusedField === field.name || isFieldFilled ? "text-[#f48131]" : "text-gray-400 group-hover:text-gray-600"
                              }`}
                            />
                          </div>
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:bg-white focus:border-[#f48131] focus:ring-4 focus:ring-orange-50 outline-none transition-all"
                          />
                          {isFieldFilled && (
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                              <IoCheckmarkCircle className="w-4 h-4 text-green-500" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Location Field */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Location*
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <IoLocationSharp
                        className={`w-4 h-4 transition-colors ${
                          focusedField === "location" || (formData.location && formData.location.length > 0)
                            ? "text-[#f48131]" : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      />
                    </div>
                    <input
                      type="text"
                      name="location"
                      value={formData.location || ""}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("location")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="City, Country"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:bg-white focus:border-[#f48131] focus:ring-4 focus:ring-orange-50 outline-none transition-all"
                    />
                    {formData.location && formData.location.length > 0 && (
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <IoCheckmarkCircle className="w-4 h-4 text-green-500" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Additional Information
                  </label>
                  <div className="relative group">
                    <div className="absolute top-3 left-4 pointer-events-none">
                      <IoChatbubble
                        className={`w-4 h-4 transition-colors ${
                          focusedField === "message" || formData.message.length > 0
                            ? "text-[#f48131]" : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows="3"
                      placeholder="Tell us about your project..."
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:bg-white focus:border-[#f48131] focus:ring-4 focus:ring-orange-50 outline-none resize-none transition-all"
                    />
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    By submitting this, I agree to the{" "}
                    <Link to={"/privacy"} target="_blank" className="text-[#f48131] font-bold hover:underline">
                      privacy policy
                    </Link>{" "}
                    and acknowledge that my information will remain confidential and secure.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#111111] hover:bg-[#f48131] text-white font-bold text-sm px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <IoSend className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ================= RIGHT SECTION (TEXT & ICONS) ================= */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-10 order-1 lg:order-2">
          
          {/* Header Texts */}
          <div className="space-y-4">
            <span className="text-[#f48131] font-extrabold tracking-widest text-xs md:text-sm uppercase bg-orange-50 px-3 py-1 rounded-full">
              Let's Connect
            </span>
            <h1 className="text-3xl md:text-4xl  font-semibold text-[#111111] leading-[1.2] tracking-tight">
              Partner with <span className="text-[#f48131]">Inventive Gas</span> for a Sustainable Future.
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Let's power your business with clean, efficient, and future-ready energy solutions. 
              Reach out today to discuss your industrial requirements.
            </p>
          </div>

          {/* Clean, Professional Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  
                  {/* Premium Icon Container */}
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 text-[#f48131]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  {/* Text Container */}
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">{feature.text}</p>
                  </div>

                </div>
              );
            })}
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default NewContactForm;
