import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaUser,
  FaPhone,
  FaBuilding,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCommentDots,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import bgimg from "../../assets/recd.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  handleError,
  handleSuccess,
  handleWarning,
} from "../../utils/HandleUtils";

gsap.registerPlugin(ScrollTrigger);

const RecdHero = ({ city }) => {
  const formRef = useRef(null);
  const leftContentRef = useRef(null);
  const inputsRef = useRef([]);
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        leftContentRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      ).fromTo(
        formRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      );

      gsap.fromTo(
        inputsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        formRef.current.querySelector("button"),
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.2,
        },
      );
    });

    return () => ctx.revert();
  }, []);

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
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/query/longquerypost`,
        formData,
      );
      handleSuccess("Your inquiry has been submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        companyName: "",
        companyEmail: "",
        location: "",
        message: "",
      });
    } catch (err) {
      handleError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={bgimg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/70 via-orange-300/70 to-orange-200/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-2 md:px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div ref={leftContentRef} className="flex-1 text-white">
            <nav className="pt-4 pb-2 text-base">
              <ol className="flex items-center gap-2">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <span>/</span>
                <li>
                  <a
                    href="/retrofit-emission-control-device"
                    className="hover:underline"
                  >
                    Retrofit Emission Control Device
                  </a>
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-6xl max-w-xl font-semibold mb-6">
              Retrofit Emission Control Device
            </h1>

            <p className="text-base md:text-xl max-w-xl">
              Certified by CPCB & ICAT – 100% Compliance ® Guaranteed
            </p>
          </div>

          <div
            ref={formRef}
            className="flex-1 max-w-xl w-full flex justify-center"
          >
            <div className="bg-white rounded-3xl border-2 border-orange-200 shadow-2xl shadow-orange-500/20 p-8 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                Send us a message
              </h2>

              <p className="text-gray-500 text-sm text-center mt-2 mb-6">
                Contact us today to discuss your requirements.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-3">
                  <Input
                    refCallback={(el) => (inputsRef.current[0] = el)}
                    {...{
                      icon: FaUser,
                      label: "Your Name*",
                      placeholder: "Enter your Full Name",
                      name: "name",
                      value: formData.name,
                      onChange: handleChange,
                      onFocus: () => setFocusedField("name"),
                      onBlur: () => setFocusedField(null),
                      isFocused: focusedField === "name",
                      isFilled: formData.name.length > 0,
                    }}
                  />
                  <Input
                    refCallback={(el) => (inputsRef.current[1] = el)}
                    {...{
                      icon: FaPhone,
                      label: "Phone Number*",
                      placeholder: "+91 XXXXX-XXXXX",
                      name: "phone",
                      value: formData.phone,
                      onChange: handleChange,
                      onFocus: () => setFocusedField("phone"),
                      onBlur: () => setFocusedField(null),
                      isFocused: focusedField === "phone",
                      isFilled: formData.phone.length > 0,
                    }}
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <Input
                    refCallback={(el) => (inputsRef.current[2] = el)}
                    {...{
                      icon: FaBuilding,
                      label: "Company Name*",
                      placeholder: "Your company name",
                      name: "companyName",
                      value: formData.companyName,
                      onChange: handleChange,
                      onFocus: () => setFocusedField("companyName"),
                      onBlur: () => setFocusedField(null),
                      isFocused: focusedField === "companyName",
                      isFilled: formData.companyName.length > 0,
                    }}
                  />
                  <Input
                    refCallback={(el) => (inputsRef.current[3] = el)}
                    {...{
                      icon: FaEnvelope,
                      label: "Company Email*",
                      placeholder: "email@xyz.com",
                      type: "email",
                      name: "companyEmail",
                      value: formData.companyEmail,
                      onChange: handleChange,
                      onFocus: () => setFocusedField("companyEmail"),
                      onBlur: () => setFocusedField(null),
                      isFocused: focusedField === "companyEmail",
                      isFilled: formData.companyEmail.length > 0,
                    }}
                  />
                </div>

                <Input
                  refCallback={(el) => (inputsRef.current[4] = el)}
                  {...{
                    icon: FaMapMarkerAlt,
                    label: "Location*",
                    placeholder: "City, Country",
                    name: "location",
                    value: formData.location,
                    onChange: handleChange,
                    onFocus: () => setFocusedField("location"),
                    onBlur: () => setFocusedField(null),
                    isFocused: focusedField === "location",
                    isFilled: formData.location.length > 0,
                  }}
                />

                <div ref={(el) => (inputsRef.current[5] = el)}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <div className="relative">
                    <FaCommentDots
                      className={`absolute left-4 top-4 text-sm ${focusedField === "message" || formData.message.length > 0 ? "text-orange-500" : "text-gray-400"}`}
                    />
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your project..."
                      className="w-full pl-11 pr-4 py-3 text-sm bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-2xl text-white text-base md:text-lg font-semibold bg-gradient-to-r from-orange-500 via-orange-400 to-red-500"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <FaArrowUpRightFromSquare />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({
  icon: Icon,
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
  isFilled,
  refCallback,
}) => (
  <div ref={refCallback} className="flex-1">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <div className="relative">
      <Icon
        className={`absolute left-4 top-1/2 -translate-y-1/2 ${isFocused || isFilled ? "text-orange-500" : "text-gray-400"}`}
      />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 text-sm bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  </div>
);

export default RecdHero;
