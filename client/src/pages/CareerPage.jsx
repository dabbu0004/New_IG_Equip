import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import JobApplyForm from "../components/career/JobApplyForm";
import JobApplySearchBar from "../components/career/JobApplySearchBar";

const jobs = [
  {
    title: "Female Accountant",
    location: "Ecotech II, Greater Noida",
    experience: "2–4 Years",
    summary:
      "We are looking for a dedicated and detail-oriented Accountant to join our growing team. The ideal candidate should have hands-on experience in accounting and finance operations, with proficiency in Tally, GST filings, and inventory management.",
    responsibilities: [
      "Maintain accurate accounting records and day-to-day financial entries.",
      "Generate and manage E-way bills and E-invoices.",
      "Proficiently work on Tally (ERP 9 or Prime) for all accounting entries.",
      "Manage inventory records and stock reconciliation.",
      "Assist in GST return filing (GSTR-1, GSTR-3B, etc.) and ensure compliance.",
    ],
    requirements: [
      "Bachelor’s degree in Commerce or related field (B.Com / M.Com preferred)",
      "2–4 years of relevant experience in accounting roles",
      "Proficient in Tally, MS Excel, and other accounting software",
      "Strong understanding of GST, TDS, and taxation",
    ],
    contact: {
      email: "hema@igequipment.com",
      phone: "9311068571",
    },
  },
  {
    title: "Sales Manager",
    location: "Bangalore & Gujarat",
    experience: "3+ years in B2B sales (preferably diesel/gas gensets)",
    summary:
      "Lead our sales team by creating strategies, driving revenue, and building long-term B2B relationships.",
    responsibilities: [
      "Develop and execute sales strategies",
      "Generate and manage B2B leads",
      "Build and maintain client relationships",
      "Present reports to senior management",
      "Analyse market trends",
    ],
    requirements: [
      "3+ years experience in sales (diesel/gas gensets preferred)",
      "Proven ability to close B2B leads",
      "Excellent communication & negotiation skills",
      "Goal-driven, strategic thinker",
    ],
  },
  {
    title: "CAD Designer",
    location: "Greater Noida",
    experience: "Creative CAD designer with 3D visualization skills",
    summary:
      "Bring concepts to life with visually stunning 3D models. Work closely with engineering & product teams.",
    responsibilities: [
      "Create detailed 2D/3D CAD models",
      "Collaborate with engineering and product teams",
      "Ensure design feasibility and functionality",
    ],
    requirements: [
      "Proficient in AutoCAD, SolidWorks or similar",
      "Strong visualization and creativity",
      "Degree/diploma in mechanical/design field",
    ],
  },
];

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Helmet>
        <title>
          Careers at Inventive Gas Equipment | Build a Future with Innovation
        </title>
        <meta
          name="description"
          content="Join the team at Inventive Gas Equipment — a workplace where innovation meets purpose.
Explore career opportunities and grow with India’s leader in clean energy solutions."
        />
      </Helmet>

      <div className="bg-white text-gray-800 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-500 to-orange-400 text-white text-center py-16 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            🚀 We’re Hiring!
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90">
            Join our growing team and make a difference. Explore our open roles
            and apply today!
          </p>
        </section>
        <JobApplySearchBar />

        {/* Job Listings */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-gray-900 text-center sm:text-left">
            Open Positions
          </h2>

          <div className="space-y-8 sm:space-y-10">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full inline-flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        {job.location}
                      </span>
                      {job.experience && (
                        <span className="bg-gray-100 px-3 py-1 rounded-full inline-flex items-center">
                          <FaBriefcase className="mr-1" />
                          {job.experience}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job.title)}
                    className="w-full sm:w-auto mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium text-sm transition"
                  >
                    Apply Now <FaEnvelope className="inline ml-2" />
                  </button>
                </div>

                <p className="mt-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {job.summary}
                </p>

                {job.responsibilities?.length > 0 && (
                  <>
                    <h4 className="mt-5 font-semibold text-sm sm:text-base text-gray-800">
                      🔧 Responsibilities
                    </h4>
                    <ul className="list-disc pl-5 sm:pl-6 text-sm text-gray-700 mt-2 space-y-1">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {job.requirements?.length > 0 && (
                  <>
                    <h4 className="mt-4 font-semibold text-sm sm:text-base text-gray-800">
                      🎯 Requirements
                    </h4>
                    <ul className="list-disc pl-5 sm:pl-6 text-sm text-gray-700 mt-2 space-y-1">
                      {job.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {job.contact && (
                  <div className="mt-5 text-sm text-gray-700">
                    <p>
                      📧 <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${job.contact.email}`}
                        className="text-blue-600"
                      >
                        {job.contact.email}
                      </a>
                    </p>
                    <p>
                      📱 <strong>Phone:</strong>{" "}
                      <a
                        href={`tel:${job.contact.phone}`}
                        className="text-blue-600"
                      >
                        {job.contact.phone}
                      </a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Apply Form Modal */}
        {selectedJob && (
          <JobApplyForm
            jobTitle={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}
      </div>
    </>
  );
};

export default CareerPage;
