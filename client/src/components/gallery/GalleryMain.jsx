import React, { useState, useEffect, useRef, useCallback } from "react";
import GalleryData from "../../data/GalleryData";

const GalleryMain = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedImages, setDisplayedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const observer = useRef();

  const IMAGES_PER_BATCH = 9;

  const categories = [
    "All",
    "Exhibition",
    "Team",
    "Installation",
    "Achievements & Awards",
  ];

  const getFilteredData = useCallback(() => {
    return activeCategory === "All"
      ? GalleryData
      : GalleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const filteredData = getFilteredData();
    const initialBatch = filteredData.slice(0, IMAGES_PER_BATCH);

    setDisplayedImages(initialBatch);
    setCurrentPage(0);
    setHasMore(filteredData.length > IMAGES_PER_BATCH);
  }, [activeCategory, getFilteredData]);

  const loadMoreImages = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      const filteredData = getFilteredData();
      const nextPage = currentPage + 1;
      const startIndex = nextPage * IMAGES_PER_BATCH;
      const endIndex = startIndex + IMAGES_PER_BATCH;

      const newImages = filteredData.slice(startIndex, endIndex);

      if (newImages.length > 0) {
        setDisplayedImages((prev) => [...prev, ...newImages]);
        setCurrentPage(nextPage);
        setHasMore(endIndex < filteredData.length);
      } else {
        setHasMore(false);
      }

      setLoading(false);
    }, 500);
  }, [loading, hasMore, currentPage, getFilteredData]);

  const lastImageElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreImages();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMoreImages]
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Story in Photos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moments that reflect our dedication.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {displayedImages.map((item, index) => (
            <div
              key={`${item.category}-${index}`}
              ref={
                index === displayedImages.length - 1
                  ? lastImageElementRef
                  : null
              }
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                flex: "1 1 600px",
                maxWidth: "400px",
                minWidth: "300px",
              }}
            >
              <div className="aspect-w-4 aspect-h-3 w-full h-64">
                <img
                  src={item.image}
                  alt={`${item.category} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-3">
                  <span className="inline-block text-white px-3 py-1 rounded-md text-lg font-medium mb-2">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loading && (
          <div className="flex justify-center py-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
              <p className="text-gray-600 font-medium">
                Loading more images...
              </p>
            </div>
          </div>
        )}
        {displayedImages.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No images found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryMain;
