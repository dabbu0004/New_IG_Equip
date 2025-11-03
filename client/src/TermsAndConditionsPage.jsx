import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-white/80 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto   shadow-md rounded-xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Welcome to Inventive Gas Equipment!
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
          <p>
            By accessing this website, you agree to the terms and conditions listed here.
            “Client”, “You”, and “Your” refers to the user; “We”, “Our”, and “Us” refers to
            Inventive Gas Equipment.
          </p>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">Cookies</h2>
            <p>
              We use cookies and related tracking technologies. By accessing our site,
              you consent to this usage as outlined in our{" "}
              <a href="/privacy-policy" className="text-orange-600 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">License</h2>
            <p>
              All intellectual property rights are reserved unless stated otherwise. You
              may access this website for personal use but not for:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Republishing our material</li>
              <li>Selling or renting content</li>
              <li>Reproducing or duplicating it</li>
              <li>Redistributing content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">Hyperlinking</h2>
            <p>These organizations may link to our site without approval:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Government agencies</li>
              <li>News outlets</li>
              <li>Search engines</li>
              <li>Online directories</li>
              <li>Accredited businesses</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">iFrames</h2>
            <p>
              You must not create iFrames that alter the visual presentation of our site
              without written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Content Liability
            </h2>
            <p>
              We hold no responsibility for content that appears on your website if you
              link to us. You must ensure your content is lawful, appropriate, and does
              not infringe on third-party rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Rights We Reserve
            </h2>
            <ul className="list-disc pl-6 mt-2">
              <li>
                We may request the removal of any links to our website without reason.
              </li>
              <li>
                We can change our terms and linking policies at any time without notice.
              </li>
              <li>
                Continued linking to our site indicates agreement with these terms.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">
              Removal of Links
            </h2>
            <p>
              If you find offensive links on our website, notify us. We will consider
              requests but are not obligated to comply.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">Disclaimer</h2>
            <p>
              We exclude all warranties and conditions as allowed by law. However, this
              does not:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Limit liability for death or personal injury</li>
              <li>Exclude liability for fraud</li>
              <li>
                Limit liability in ways not permitted by applicable law
              </li>
            </ul>
            <p className="mt-2">
              We are not liable for any damage if the site or services are free of
              charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
