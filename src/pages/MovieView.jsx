import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function MovieView() {
  const location = useLocation();
  const { movie } = location.state || null;
  const desc = useSelector((state) => state?.descs?.[0]);

  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="text-yellow-400 px-11">
      <h1>{movie.name} </h1>
      <br />
      <video
        src={movie.video}
        autoPlay
        loop
        muted
        className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5 border border-gray-600 p-2"
      />
      
      {/* Movie Info Section */}
      <div className="mt-4">
        <button
          onClick={toggleDropdown}
          className="bg-gray-700 text-yellow-400 py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
        >
          Movie Info
        </button>

        {/* Conditionally render description based on dropdown state */}
        {isDropdownOpen && (
          <div className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded-md">
            <p>{desc?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieView;
