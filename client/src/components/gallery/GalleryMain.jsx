import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  IoClose,
  IoChevronBack,
  IoChevronForward,
  IoEye,
} from "react-icons/io5";
import GalleryData from "../../data/GalleryData";

// Skeleton component for loading state
const ImageSkeleton = () => (
  <div
    className="animate-pulse bg-gray-200 rounded-lg"
    style={{
      flex: "1 1 600px",
      maxWidth: "400px",
      minWidth: "300px",
      height: "256px",
    }}
  >
    <div className="w-full h-full bg-gray-300 rounded-lg"></div>
  </div>
);

// Optimized image component with lazy loading
const GalleryImage = React.memo(
  ({ item, index, onClick, isLast, lastImageRef }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = useCallback(() => {
      setImageLoaded(true);
    }, []);

    const handleImageError = useCallback(() => {
      setImageError(true);
      setImageLoaded(true);
    }, []);

    return (
      <div
        ref={isLast ? lastImageRef : null}
        className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        style={{
          flex: "1 1 600px",
          maxWidth: "400px",
          minWidth: "300px",
        }}
        onClick={() => onClick(index)}
      >
        <div className="aspect-w-4 aspect-h-3 w-full h-96 relative">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
          )}

          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              <div className="text-center">
                <IoEye className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Image unavailable</p>
              </div>
            </div>
          ) : (
            <img
              src={item.image}
              alt={`${item.category} ${index + 1}`}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? "opacity-100 group-hover:scale-105" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={handleImageError}
              decoding="async"
            />
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute bottom-4 left-4">
            <span className="inline-block text-white px-3 py-1 rounded-md text-sm font-medium bg-black/30 backdrop-blur-sm">
              {item.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <IoEye className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const GalleryMain = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedImages, setDisplayedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const observer = useRef();
  const loadingTimeoutRef = useRef();
  const preloadTimeoutRef = useRef();

  const IMAGES_PER_BATCH = 12; // Increased for better performance
  const PRELOAD_AHEAD = 3; // Preload next 3 images

  const categories = [
    "All",
    "Exhibition",
    "Team",
    "Installation",
    "Achievements & Awards",
  ];

  // Memoize filtered data
  const filteredData = useMemo(() => {
    return activeCategory === "All"
      ? GalleryData
      : GalleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Preload images function
  const preloadImages = useCallback(
    (images) => {
      images.forEach((item, index) => {
        if (!preloadedImages.has(item.image)) {
          const img = new Image();
          img.src = item.image;
          img.onload = () => {
            setPreloadedImages((prev) => new Set([...prev, item.image]));
          };
        }
      });
    },
    [preloadedImages]
  );

  // Initialize gallery
  useEffect(() => {
    setInitialLoading(true);

    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }

    // Simulate minimal loading time for smooth transition
    loadingTimeoutRef.current = setTimeout(() => {
      const initialBatch = filteredData.slice(0, IMAGES_PER_BATCH);

      setDisplayedImages(initialBatch);
      setCurrentPage(0);
      setHasMore(filteredData.length > IMAGES_PER_BATCH);
      setInitialLoading(false);

      // Preload initial images
      preloadImages(initialBatch);

      // Preload next batch if available
      if (filteredData.length > IMAGES_PER_BATCH) {
        const nextBatch = filteredData.slice(
          IMAGES_PER_BATCH,
          IMAGES_PER_BATCH * 2
        );
        preloadTimeoutRef.current = setTimeout(() => {
          preloadImages(nextBatch);
        }, 1000);
      }
    }, 100);

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      if (preloadTimeoutRef.current) {
        clearTimeout(preloadTimeoutRef.current);
      }
    };
  }, [activeCategory, filteredData, preloadImages]);

  // Optimized load more function
  const loadMoreImages = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Use requestAnimationFrame for smooth loading
    requestAnimationFrame(() => {
      const nextPage = currentPage + 1;
      const startIndex = nextPage * IMAGES_PER_BATCH;
      const endIndex = startIndex + IMAGES_PER_BATCH;

      const newImages = filteredData.slice(startIndex, endIndex);

      if (newImages.length > 0) {
        setDisplayedImages((prev) => [...prev, ...newImages]);
        setCurrentPage(nextPage);
        setHasMore(endIndex < filteredData.length);

        // Preload the new images
        preloadImages(newImages);

        // Preload next batch
        if (endIndex < filteredData.length) {
          const nextBatch = filteredData.slice(
            endIndex,
            endIndex + IMAGES_PER_BATCH
          );
          setTimeout(() => preloadImages(nextBatch), 500);
        }
      } else {
        setHasMore(false);
      }

      setTimeout(() => setLoading(false), 200);
    });
  }, [loading, hasMore, currentPage, filteredData, preloadImages]);

  // Optimized intersection observer
  const lastImageElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            loadMoreImages();
          }
        },
        {
          rootMargin: "100px", // Start loading before element is visible
          threshold: 0.1,
        }
      );

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMoreImages]
  );

  // Modal functions with preloading
  const openModal = useCallback(
    (index) => {
      setSelectedImageIndex(index);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";

      // Preload adjacent images for smooth navigation
      const preloadIndices = [index - 1, index + 1].filter(
        (i) => i >= 0 && i < displayedImages.length
      );

      preloadIndices.forEach((i) => {
        if (
          displayedImages[i] &&
          !preloadedImages.has(displayedImages[i].image)
        ) {
          const img = new Image();
          img.src = displayedImages[i].image;
        }
      });
    },
    [displayedImages, preloadedImages]
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
    document.body.style.overflow = "unset";
  }, []);

  const goToNext = useCallback(() => {
    if (selectedImageIndex < displayedImages.length - 1) {
      const nextIndex = selectedImageIndex + 1;
      setSelectedImageIndex(nextIndex);

      // Preload next image
      if (nextIndex + 1 < displayedImages.length) {
        const img = new Image();
        img.src = displayedImages[nextIndex + 1].image;
      }
    }
  }, [selectedImageIndex, displayedImages]);

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex > 0) {
      const prevIndex = selectedImageIndex - 1;
      setSelectedImageIndex(prevIndex);

      // Preload previous image
      if (prevIndex - 1 >= 0) {
        const img = new Image();
        img.src = displayedImages[prevIndex - 1].image;
      }
    }
  }, [selectedImageIndex, displayedImages]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        default:
          break;
      }
    },
    [isModalOpen, closeModal, goToNext, goToPrevious]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200 hover:border-orange-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap gap-6 justify-center">
          {initialLoading
            ? // Show skeletons during initial load
              Array.from({ length: IMAGES_PER_BATCH }).map((_, index) => (
                <ImageSkeleton key={`skeleton-${index}`} />
              ))
            : displayedImages.map((item, index) => (
                <GalleryImage
                  key={`${item.category}-${index}-${activeCategory}`}
                  item={item}
                  index={index}
                  onClick={openModal}
                  isLast={index === displayedImages.length - 1}
                  lastImageRef={lastImageElementRef}
                />
              ))}
        </div>

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center py-8">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-orange-600 border-t-transparent"></div>
              <p className="text-gray-600">Loading more images...</p>
            </div>
          </div>
        )}

        {/* No images message */}
        {!initialLoading && displayedImages.length === 0 && (
          <div className="text-center py-12">
            <IoEye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              No images found for this category.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="relative max-w-6xl max-h-screen w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <IoClose className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {selectedImageIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-orange-600/80 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <IoChevronBack className="w-6 h-6" />
              </button>
            )}

            {selectedImageIndex < displayedImages.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-orange-600/80 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <IoChevronForward className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <div className="relative flex items-center justify-center w-full h-full">
              <img
                src={displayedImages[selectedImageIndex].image}
                alt={`${displayedImages[selectedImageIndex].category} ${
                  selectedImageIndex + 1
                }`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-300"
                loading="eager"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full">
                <p className="text-lg font-medium text-center">
                  {displayedImages[selectedImageIndex].category}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryMain;
