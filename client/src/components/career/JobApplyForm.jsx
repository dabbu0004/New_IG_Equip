import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const JobApplyForm = ({ jobTitle, onClose }) => {
  const [loading, setLoading] = useState(false);

  const uploadToTmpFiles = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://tmpfiles.org/api/v1/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      return data.data?.url || null;
    } catch (err) {
      console.error("File upload error:", err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const file = e.target.resume.files[0];
    const resumeLink = await uploadToTmpFiles(file);

    if (!resumeLink) {
      alert("Resume upload failed. Please try again.");
      setLoading(false);
      return;
    }

    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value || "N/A",
      resumeUrl: resumeLink,
      jobTitle,
    };

    emailjs
      .send(
        "service_hawndof",
        "template_e4n0izn",
        templateParams,
        "WY_Qj_U52qx43oUia"
      )
      .then(() => {
        alert("Application sent successfully!");
        onClose();
      })
      .catch((err) => {
        console.error("Email send error:", err);
        alert("Failed to send application: " + err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-0">
      <div
        className="bg-white w-full max-w-lg sm:max-w-xl p-5 sm:p-8 rounded-2xl shadow-xl relative overflow-y-auto max-h-[95vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center leading-snug">
          Apply for: <span className="text-red-500">{jobTitle}</span>
        </h2>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none text-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none text-sm"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume (PDF only)
            </label>
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-lg text-gray-700 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-600 hover:file:bg-red-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="3"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none text-sm"
              placeholder="Write a brief message (optional)"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white py-3 rounded-lg font-semibold text-sm tracking-wide hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplyForm;
