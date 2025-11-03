import React from "react";

const SixPage = () => {
  return (
    // Outer full-width container
    <div className="w-full bg-gradient-to-r from-red-500 to-orange-400">
      {/* Centered inner container with max-width */}
      <div className="max-w-7xl mx-auto  py-12 px-4 flex flex-col md:flex-row items-center justify-between rounded-xl">
        {/* Left Section */}
        <div className="md:w-1/2 w-full text-white px-4 mb-10 md:mb-0">
          <h2 className="text-6xl font-semibold mb-4">Let’s Talk</h2>
          <p className="text-2xl">We are here for you! How can we help?</p>
          <img
            src="/images/image/4.png"
            alt="Vayu Pure Machine"
            className="mt-8 w-[80%] object-cover"
          />
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-[480px] bg-white rounded-2xl p-8 shadow-lg min-h-[580px]">
          <form className="space-y-4 text-black">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block font-semibold">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div className="w-full">
                <label className="block font-semibold">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block font-semibold">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div className="w-full">
                <label className="block font-semibold">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block font-semibold">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div className="w-full">
                <label className="block font-semibold">
                  Company Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold">
                Do you have any additional information to share?
              </label>
              <textarea
                className="w-full border rounded-md px-3 py-2"
                rows="3"
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm">
                I agree to the privacy policy and acknowledge that my
                information will remain confidential.
              </p>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold py-2 text-xl px-6 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SixPage;
