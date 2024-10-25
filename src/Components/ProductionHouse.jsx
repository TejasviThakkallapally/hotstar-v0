import React, { useRef } from "react";
import disney from "./../assets/images/disney.png";
import pixar from "./../assets/images/pixar.png";
import marvel from "./../assets/images/marvel.png";
import starwar from "./../assets/images/starwar.png";
import nationalG from "./../assets/images/nationalG.png";

import disneyV from "./../assets/videos/disney.mp4";
import pixarV from "./../assets/videos/pixar.mp4";
import marvelV from "./../assets/videos/marvel.mp4";
import starwarsV from "./../assets/videos/star-wars.mp4";
import nationalGV from "./../assets/videos/national-geographic.mp4";
import { useNavigate } from "react-router-dom";
import { adddesc, cleardescs } from "../features/todo/descriptionSlice";
import { useDispatch } from "react-redux";

function ProductionHouse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productionHouses = [
    {
      id: 1,
      name: "DISNEY UNIVERSE",
      image: disney,
      video: disneyV,
      description:
        "Disney ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 2,
      name: "PIXAR UNIVERSE",
      image: pixar,
      video: pixarV,
      description:
        "Pixar ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 3,
      name: "MARVEL UNIVERSE",
      image: marvel,
      video: marvelV,
      description:
        "Marvel ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 4,
      name: "STARWARS UNIVERSE",
      image: starwar,
      video: starwarsV,
      description:
        "StarWars ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 5,
      name: "NATIONAL-GEOGRAPHIC",
      image: nationalG,
      video: nationalGV,
      description:
        "National-Geographic ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  // Function to handle navigation and description dispatch
  const handleNavigation = (item) => {
    const description = item.description;
    dispatch(cleardescs());
    dispatch(adddesc({ description }));
    navigate("/movieview", { state: { movie: item } });
  };

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouses.map((item) => {
        // Ref for each video
        const videoRef = useRef(null);

        // Function to play video on focus or hover
        const handleVideoPlay = () => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        };

        // Function to pause video on blur or hover out
        const handleVideoPause = () => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        };

        return (
          <div
            key={item.id}
            onClick={() => handleNavigation(item)} // Call the navigation function
            className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
            tabIndex={0} // For keyboard accessibility
            role="button" // Explicitly declare as button for screen readers
            aria-label={`View details for ${item.name}`} // For screen readers
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNavigation(item); // Call the navigation function
              }
            }}
            onMouseEnter={handleVideoPlay} // Play video on hover
            onMouseLeave={handleVideoPause} // Pause video on hover out
            onFocus={handleVideoPlay} // Play video on tab focus
            onBlur={handleVideoPause} // Pause video when focus is lost
          >
            <video
              ref={videoRef} // Using the same ref for each video element
              src={item.video}
              loop
              playsInline
              muted
              className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
            />
            <img
              src={item.image}
              className="w-full z-[1] opacity-100"
              alt={`${item.name} logo`}
            />{" "}
          </div>
        );
      })}
    </div>
  );
}

export default ProductionHouse;
