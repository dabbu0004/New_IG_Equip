import React from "react";

const PrivacyPage = () => {
  return (
    <div className="bg-white  py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto shadow-md rounded-xl p-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">
          Last Updated: (add date here)
        </p>

        <div className="space-y-8 leading-relaxed text-[15px]">
          <p>
            This privacy policy outlines how Inventive Gas Equipment collects,
            uses, and discloses your information. It also highlights your rights
            and the protections afforded to you under relevant laws.
          </p>

          <p>
            By accessing our website or using our services, you consent to the
            collection and usage of your information as described here. We use
            this data to improve and deliver our services efficiently.
          </p>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Collection of Data
            </h2>

            <h3 className="font-medium">Personal Data</h3>
            <ul className="list-disc pl-6 mt-1">
              <li>Email ID</li>
              <li>First and Last Name</li>
              <li>Contact Number</li>
              <li>Residential Address</li>
              <li>Usage Data</li>
            </ul>

            <h3 className="font-medium mt-4">Usage Data</h3>
            <ul className="list-disc pl-6">
              <li>IP Address</li>
              <li>Browser Type and Version</li>
              <li>Visited Webpages</li>
              <li>Time Spent and Date of Visits</li>
              <li>Mobile Device Info and OS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold border-b pb-1 mb-3">
              Tracking Technologies and Cookies
            </h3>
            <p>
              We use cookies and tracking technologies to enhance your
              experience and analyze behavior. These include:
            </p>
            <ul className="list-disc pl-6 mt-1">
              <li>Cookies or Browser Cookies</li>
              <li>Web Beacons (pixel tags, clear gifs)</li>
            </ul>

            <p className="mt-2 font-semibold">Session Cookies:</p>
            <ul className="list-disc pl-6">
              <li>Enable website services</li>
              <li>Authenticate users</li>
              <li>Prevent fraudulent activity</li>
            </ul>

            <p className="mt-2 font-semibold">Persistent Cookies:</p>
            <ul className="list-disc pl-6">
              <li>Remember user preferences</li>
              <li>Save login details</li>
              <li>Personalize user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Usage of Data
            </h2>
            <ul className="list-disc pl-6">
              <li>To deliver and maintain our services</li>
              <li>For account management and user registration</li>
              <li>To fulfill product/service purchases</li>
              <li>To communicate via SMS, email, or phone</li>
              <li>For updates, news, or promotional info</li>
              <li>To handle support or feedback requests</li>
              <li>For business transitions (e.g., mergers)</li>
              <li>For analytics, marketing, and product improvement</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Sharing of Data
            </h2>
            <ul className="list-disc pl-6">
              <li>With service providers for analytics or communication</li>
              <li>During business transfers or acquisitions</li>
              <li>With affiliates or joint ventures</li>
              <li>With partners for product delivery</li>
              <li>With your consent for specific purposes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Retention of Your Data
            </h2>
            <p>
              We retain your data as long as necessary for operational and legal
              purposes. Usage data is retained temporarily unless needed for
              security or functionality enhancements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Transfer of Your Data
            </h2>
            <p>
              Your information may be stored or transferred to systems outside
              your country or region. We ensure appropriate measures are taken
              to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Deletion of Data
            </h2>
            <p>
              You may request us to modify or delete your personal information
              at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Disclosure of Data
            </h2>
            <ul className="list-disc pl-6">
              <li>In case of business transactions</li>
              <li>When requested by law enforcement</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Links on Our Website
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their content or privacy practices. Please review
              their policies separately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this policy occasionally. Changes will be reflected
              with a new “Last Updated” date at the top of this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Contact Us
            </h2>
            <p>
              Have questions? Email us at{" "}
              <a
                href="mailto:info@igequipment.com"
                className="text-orange-600 underline"
              >
                info@igequipment.com
              </a>{" "}
              or request a callback via{" "}
              <a
                href="https://igequipment.com/contact/"
                className="text-orange-600 underline"
              >
                https://igequipment.com/contact/
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
