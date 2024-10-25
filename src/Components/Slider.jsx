import React, { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const SliderImages = [
    { image: "/images/img7.jpg" },
    { image: "/images/img6.jpg" },
    { image: "/images/img5.jpg" },
    { image: "/images/img8.jpg" },
    { image: "/images/img1.jpg" },
    { image: "/images/img2.jpg" },
    { image: "/images/img3.jpg" },
    { image: "/images/img4.jpg" },
  ];

  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0); // Keep track of the current image index

  const sliderLeft = () => {
    // If at the first image, go to the last image
    if (currentIndex === 0) {
      setCurrentIndex(SliderImages.length - 1);
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth; // Scroll to the last image
    } else {
      const newIndex = currentIndex - 1; // Move to the previous image
      setCurrentIndex(newIndex);
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth; // Scroll left by the width of the container
    }
  };

  const sliderRight = () => {
    // If at the last image, go to the first image
    if (currentIndex === SliderImages.length - 1) {
      setCurrentIndex(0); // Move to the first image
      sliderRef.current.scrollLeft = 0; // Scroll to the first image
    } else {
      const newIndex = currentIndex + 1; // Move to the next image
      setCurrentIndex(newIndex);
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth; // Scroll right by the width of the container
    }
  };

  // Function to handle Enter key press for accessibility
  const handleKeyDown = (event, direction) => {
    if (event.key === "Enter") {
      if (direction === "left") {
        sliderLeft(); // Move left
      } else if (direction === "right") {
        sliderRight(); // Move right
      }
    }
  };

  return (
    <div className="flex items-center object-cover mx-10">
      <style>
        {`
        .scroll-container {
          overflow-x: auto; /* Enable horizontal scrolling */
          scrollbar-width: none; /* For Firefox */
        }
        .scroll-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }
      `}
      </style>

      {/* Left Arrow Button */}
      <div
        role="button"
        tabIndex={0}
        aria-label="previousSlide"
        onClick={sliderLeft}
        onKeyDown={(event) => handleKeyDown(event, "left")}
        className="focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
      >
        <HiChevronLeft className="text-white text-4xl" />
      </div>

      {/* Slider Images */}
      <div
        className="scroll-container flex overflow-x-auto w-full py-6 mx-5"
        ref={sliderRef}
        aria-live="assertive" // Change to assertive for immediate announcement
        aria-atomic="true" // Ensure the whole text is read every time
      >
        {SliderImages.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center"
              style={{ width: "100%" }}
            >
              <img
                className="object-cover rounded-lg w-full outline outline-offset-0 hover:border-[6px]"
                style={{
                  height: window.innerHeight * 0.6,
                }}
                src={item?.image}
                alt={`Slider image ${index + 1}`}
              />
            </div>
          );
        })}
      </div>

      {/* Right Arrow Button */}
      <div
        role="button"
        tabIndex={0}
        aria-label="nextSlide"
        onClick={sliderRight}
        onKeyDown={(event) => handleKeyDown(event, "right")}
        className="focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
      >
        <HiChevronRight className="text-white text-4xl" />
      </div>

      {/* Screen reader text for announcing the current image */}
      <div
        aria-live="assertive" // Change to assertive for immediate updates
        aria-atomic="true"
        className="sr-only"
        id="image-status"
      >
        Slider {currentIndex + 1}/{SliderImages.length} image
      </div>
    </div>
  );
}

export default Slider;
