import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  IoSend,
  IoCheckmarkCircle,
  IoSparkles,
  IoPerson,
  IoCall,
  IoMail,
  IoChatbubble,
  IoBusiness,
  IoLocationSharp,
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

  const features = [
    {
      icon: IoCall,
      text: "+91 8830317796 , +91 7042100426",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: IoChatbubble,
      text: "Quick Response Time",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: IoLocationSharp,
      text: "Global Reach",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: IoLocationSharp,
      text: "Plot No.21, Udyog Vihar, Ecotech-II, Udyog Vihar, Greater Noida, Uttar Pradesh 201306",
      color: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-500 to-orange-400 py-6 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto md:mt-10 flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
         {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 max-w-lg">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 space-y-4 border border-white/30">
            {submitted ? (
              <div className="text-center py-6 space-y-3 flex items-center justify-center flex-col">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <IoCheckmarkCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Message Sent!
                </h3>
                <p className="text-gray-600 text-sm">
                  Thank you! We'll connect with you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Send us a message
                  </h2>
                  <p className="text-lg text-gray-600">
                    Contact us today to discuss your requirements.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formFields.slice(0, -1).map((field) => {
                    const IconComponent = field.icon;
                    const isFieldFilled =
                      formData[field.name] && formData[field.name].length > 0;
                    return (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          {field.label}{" "}
                          {field.required && (
                            <span className="text-red-500">*</span>
                          )}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <IconComponent
                              className={`w-4 h-4 ${
                                focusedField === field.name || isFieldFilled
                                  ? "text-orange-500"
                                  : "text-gray-400"
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
                            className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:border-orange-500 outline-none"
                          />
                          {isFieldFilled && (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                              <IoCheckmarkCircle className="w-4 h-4 text-green-500" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Location Field - Full Width */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Location*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <IoLocationSharp
                        className={`w-4 h-4 ${
                          focusedField === "location" ||
                          (formData.location && formData.location.length > 0)
                            ? "text-orange-500"
                            : "text-gray-400"
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
                      className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:border-orange-500 outline-none"
                    />
                    {formData.location && formData.location.length > 0 && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <IoCheckmarkCircle className="w-4 h-4 text-green-500" />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <div className="relative">
                    <div className="absolute top-2 left-3 pointer-events-none">
                      <IoChatbubble
                        className={`w-4 h-4 ${
                          focusedField === "message" ||
                          formData.message.length > 0
                            ? "text-orange-500"
                            : "text-gray-400"
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
                      className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:border-orange-500 outline-none resize-none"
                    />
                    {formData.message.length > 0 && (
                      <div className="absolute top-2 right-3">
                        <IoCheckmarkCircle className="w-4 h-4 text-green-500" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-700">
                    By Submitting this, I agree to the{" "}
                    <Link
                      to={"/privacy"}
                      target="_blank"
                      className="text-orange-600 font-semibold cursor-pointer hover:underline"
                    >
                      privacy policy
                    </Link>{" "}
                    and acknowledge that my information will remain confidential
                    and secure.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white font-bold text-base px-6 py-3 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <IoSend className="w-4 h-4" />
                      <span>Submit</span>
                     
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug sm:leading-tight">
              Partner with Inventive Gas Equipment for a Sustainable Future
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
              Let's power your business with{" "}
              <span className="font-bold">
                clean, efficient, and future-ready energy solutions.
              </span>
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3 sm:space-y-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-3 text-sm sm:text-base transition-all duration-300"
                >
                  <div
                    className={`p-2 sm:p-3 bg-gradient-to-r ${feature.color} rounded-full backdrop-blur-sm shadow-lg`}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
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
