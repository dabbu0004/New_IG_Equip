import React, { useState } from "react";
import { saveAs } from "file-saver";

const SevenPage = () => {
  const states = [
    {
      id: 1,
      name: "Andhra Pradesh",
      icon: "/images/image/andhra.png",
      pdfs: [
        {
          label: "Notification 2023",
          pdfUrl: "/images/Andhra Pradesh/andhara.pdf",
        },
      ],
    },
    {
      id: 2,
      name: "Delhi",
      icon: "/images/image/delhi.png",
      pdfs: [
        {
          label: "Notification 2020",
          pdfUrl: "/images/Delhi PDF/Year-2020_DMRC_Contractor_Directions.pdf",
        },
        {
          label: "Notification 2021",
          pdfUrl: "/images/Delhi PDF/Year-2021_Delhi_125_RECD_DFK.pdf",
        },
        {
          label: "Notification 2023",
          pdfUrl: "/images/Delhi PDF/Year-2023_CAQM-Direction-no-73-NCR.pdf",
        },
        {
          label: "Notification 2023",
          pdfUrl:
            "/images/Delhi PDF/Year-2023_CAQM-Direction-No-77-dt.-06.10.2023-Revised-Schedule-of-Graded-Response-Action-Plan-GRAP-for-NCR.pdf",
        },
        {
          label: "Notification 2023",
          pdfUrl:
            "/images/Delhi PDF/Year-2023_CAQM-Direction-No.-71-Dated-9-Feb-2023-1.pdf",
        },
        {
          label: "Notification 2023",
          pdfUrl: "/images/Delhi PDF/Year-2023_CAQM-Direction-No.-76.pdf",
        },
      ],
    },
    {
      id: 3,
      name: "Goa",
      icon: "/images/image/goa.png",
      pdfs: [
        {
          label: "Notificatgion 2021",
          pdfUrl: "/images/Goa/Year-2021_Goa_125_RECD_DFK.pdf",
        },

        {
          label: "Notification 2023",
          pdfUrl:
            "/images/Goa/Year-2023_Goa-State-Pollution-Control-Board-Dated-28th-March-2023.pdf",
        },
      ],
    },
    {
      id: 4,
      name: "Gujrat",
      icon: "/images/image/Gujrat.png",
      pdfs: [
        {
          label: "Notification  2021",
          pdfUrl: "/images/Gujrat/Year-2021_Gujarat_125_RECD_DFK.pdf",
        },
        {
          label: "Notification 2023",
          pdfUrl: "/images/Gujrat/Year-2023-Gujarat-Circular-26-10-2023.pdf",
        },
      ],
    },
    {
      id: 5,
      name: "Haryana",
      icon: "/images/image/Haryana.png",
      pdfs: [
        {
          label: "Notification 2020",
          pdfUrl: "/images/Haryana/Year-2020_Haryana_NCR_500_RECD_DFK.pdf",
        },
      ],
    },
    {
      id: 6,
      name: "Jammu & Kashmir",
      icon: "/images/image/jk.png",
      pdfs: [
        {
          label: "Notification 2021",
          pdfUrl: "/images/J&K/J&k regulation notification.pdf",
        },
        {
          label: "Notification 2020",
          pdfUrl: "/images/J&K/Year-2021_JK_NCR_125_RECD_DFK-1.pdf",
        },
        {
          label: "Notification 2022",
          pdfUrl: "/images/J&K/Year-2021_JK_NCR_125_RECD_DFK.pdf",
        },
      ],
    },
    {
      id: 7,
      name: "Karnataka",
      icon: "/images/image/Karnataka.png",
      pdfs: [
        {
          label: "Notification 2021",
          pdfUrl: "/images/Karnataka/Year-2021_Karnataka_125_RECD_DFK.pdf",
        },
        {
          label: "Notification 2023",
          pdfUrl:
            "/images/Karnataka/Year-2023_Karnataka-Notification-25-may-2023.pdf",
        },
        {
          label: "Notification 2024",
          pdfUrl:
            "/images/Karnataka/Year-2024-Karnataka-Notification-12-jun-2024.pdf",
        },
      ],
    },
    {
      id: 8,
      name: "Kerala",
      icon: "/images/image/Kerala.png",
      pdfs: [
        {
          label: "Notification 2023",
          pdfUrl: "/images/Kerala/Kerala-SPCB-Order-Dated-15-05-2023.pdf",
        },
        {
          label: "Notification 2020",
          pdfUrl: "/images/Kerala/Year-2020_Kerala_500_RECD_DFK.pdf",
        },
      ],
    },
    {
      id: 9,
      name: "Maharashtra",
      icon: "/images/image/Maharashtra.png",
      pdfs: [
        {
          label: "Notification 2023",
          pdfUrl:
            "/images/Maharashtra/Year-2023_DG-Set-Circular-02-06-2023.pdf",
        },
      ],
    },
    {
      id: 10,
      name: "Odisha",
      icon: "/images/image/Odisha.png",
      pdfs: [
        {
          label: "Notification 2023",
          pdfUrl:
            "/images/Odisha/2023-Odisha-Circular-DG-Sets-15730-dtd.-6.10.2023-2.pdf",
        },
      ],
    },
    {
      id: 11,
      name: "Tamil Nadu",
      icon: "/images/image/Tamil-Nadu.png",
      pdfs: [
        {
          label: "Notification 2020",
          pdfUrl: "/images/Tamil Nadu/Year-2020_Tamilnadu_125_RECD_DFK.pdf",
        },
        {
          label: "Notification 2020",
          pdfUrl:
            "/images/Tamil Nadu/Year-2020_Tamilnadu_PCB_Clarification.pdf",
        },
        {
          label: "Notification 2021",
          pdfUrl: "/images/Tamil Nadu/Year-2021_Notice_Extension_RECD_DFK.pdf",
        },
        {
          label: "Notification 2023",
          pdfUrl: "/images/Tamil Nadu/Year-2021_Notice_Followup_RECD_DFK-1.pdf",
        },
        {
          label: "Notification 2023",
          pdfUrl: "/images/Tamil Nadu/Year-2022_Notice_Extension_RECD_",
        },
      ],
    },
    // ... Add other states (as in your code)
  ];

  const [selectedState, setSelectedState] = useState(null);

  const handleDownload = (stateName, pdfUrl) => {
    fetch(pdfUrl)
      .then((res) => res.blob())
      .then((blob) => {
        saveAs(blob, `${stateName} - ${pdfUrl.split("/").pop()}`);
        setSelectedState(null);
      })
      .catch(() => alert("Download failed. Please try again."));
  };

  return (
    <div className="py-14 px-4 bg-gradient-to-r from-red-500 to-orange-400 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-2xl lg:text-5xl font-extrabold text-center text-white mb-14">
          <span className="inline-block relative pb-2">
            State Government Guidelines
            <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full"></span>
          </span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {states.map((state) => (
            <div
              key={state.id}
              onClick={() => setSelectedState(state)}
              className="bg-white rounded-xl border border-orange-100 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer group p-5 flex flex-col items-center"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-orange-300 shadow-inner mb-4">
                <img
                  src={state.icon}
                  alt={`${state.name} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {state.name}
              </h3>

              <div className="relative mt-4 group">
                <button className="mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-medium rounded-full shadow-sm flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Download Guidelines</span>
                </button>
                <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-orange-700 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  Click to select PDF
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedState && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {selectedState.name} - Select PDF
            </h2>
            <ul>
              {selectedState.pdfs.map((pdf, index) => (
                <li key={index} className="mb-3">
                  <button
                    onClick={() =>
                      handleDownload(selectedState.name, pdf.pdfUrl)
                    }
                    className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-md transition"
                  >
                    {pdf.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedState(null)}
              className="mt-4 w-full px-4 py-2 border border-gray-300 hover:bg-gray-100 text-sm rounded-md transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SevenPage;

