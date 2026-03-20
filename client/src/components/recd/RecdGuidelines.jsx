import { useState, useEffect, useRef } from "react";
import { FiDownload, FiX } from "react-icons/fi";
import { FaMapPin } from "react-icons/fa";
import GuidelinesData from "../../data/GuidelinesData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecdGuidelines = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const handleOpenModal = (state) => {
    setSelectedState(state);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedState(null);
  };

  const handleDownload = (file, state, year) => {
    const link = document.createElement("a");
    link.href = file;
    const fileExtension = file.split(".").pop().toLowerCase();
    const extension = ["png", "jpg", "jpeg", "gif", "webp"].includes(
      fileExtension,
    )
      ? fileExtension
      : "pdf";

    link.download = `${state}-RECD-Guidelines-${year}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleCloseModal();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 30 });
      gsap.set(cardsRef.current, { opacity: 0, y: 40, scale: 0.95 });

      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 bg-gradient-to-br from-gray-100 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl text-gray-700 font-bold text-center mb-2">
            State Government Guidelines
          </h2>
          <p className="text-orange-600 font-medium text-base max-w-3xl mx-auto text-center mb-10">
            Explore the latest guidelines issued by various state governments
            regarding the implementation and compliance of Retrofit Emission
            Control Devices (RECD).{" "}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {GuidelinesData.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="w-fit bg-white hover:-translate-y-3 transition-all duration-300 rounded-xl shadow-lg shadow-orange-100/30 hover:shadow-2xl hover:shadow-orange-300/40 px-6 py-8 flex flex-col items-center text-center border border-orange-100 hover:border-orange-300 group"
            >
              <div className="w-20 h-20 rounded-full border-4 border-gradient-to-br border-orange-400 flex items-center justify-center mb-4 bg-orange-50 group-hover:bg-orange-100 transition duration-300 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt={`${item.state} Icon`}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2 justify-center">
                <FaMapPin className="text-orange-500 text-sm" />
                {item.state}
              </h3>

              <button
                onClick={() => handleOpenModal(item)}
                className="inline-flex cursor-pointer hover:scale-110 duration-300 transition-all items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:brightness-110 text-white text-sm font-semibold px-5 py-3 rounded-lg shadow-lg hover:shadow-orange-500/50 group-hover:gap-3"
              >
                <FiDownload size={20} />
                Download Guidelines
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedState && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-5 flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FaMapPin />
                {selectedState.state} Guidelines
              </h3>
              <button
                onClick={handleCloseModal}
                className="cursor-pointer hover:bg-white hover:text-orange-600 rounded-full p-2 transition-all hover:scale-110"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              <p className="text-gray-700 font-medium mb-4">
                Select a year to download the guidelines:
              </p>
              <div className="space-y-3">
                {selectedState.files.map((fileData, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleDownload(
                        fileData.file,
                        selectedState.state,
                        fileData.year,
                      )
                    }
                    className="cursor-pointer w-full flex items-center justify-between bg-orange-50 hover:bg-orange-100 border-2 border-orange-200 hover:border-orange-400 rounded-lg px-4 py-3 transition-all duration-200 group"
                  >
                    <span className="text-gray-800 font-medium group-hover:text-orange-700">
                      Year {fileData.year}
                    </span>
                    <FiDownload
                      size={20}
                      className="text-orange-600 group-hover:scale-125 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-orange-50 px-6 py-4 flex justify-end border-t border-orange-200">
              <button
                onClick={handleCloseModal}
                className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-orange-200 text-gray-700 hover:text-orange-700 rounded-lg transition-all font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecdGuidelines;
