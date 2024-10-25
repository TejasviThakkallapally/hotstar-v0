import { useNavigate } from "react-router-dom";
import { clearauths } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import logo from "./../assets/images/logo.png";
import HeaderItem from "./HeaderItem";
import { CiSettings } from "react-icons/ci";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
  HiEllipsisHorizontal,
} from "react-icons/hi2";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "FAVOURITE", icon: HiStar },
    { name: "Account Preferences", icon: CiSettings },
    
  ];

  const handleNavigation = (itemName) => {
    navigate(
      `/${
        itemName.toLowerCase() === "home"
          ? ""
          : itemName.toLowerCase().replace(" ", "")
      }`
    );
  };

  return (
    <div className="flex items-center justify-between p-4" role="banner">
      <div className="flex gap-8 items-center sm:flex">
        <img
          src={logo}
          alt="Disney Logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div
          role="navigation"
          aria-label="primary"
          className="hidden md:flex gap-8"
        >
          {menu.map((item) => (
            <span
              key={item.name}
              onClick={() => handleNavigation(item.name)} // Call the navigation function
              tabIndex={0}
              role="button"
              aria-label={`Navigate to ${item.name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleNavigation(item.name); // Call the navigation function
                }
              }} // Handle keyboard events
            >
              <HeaderItem name={item.name} Icon={item.icon} />
            </span>
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map((item, index) => (
            <span
              key={item.name}
              onClick={() => handleNavigation(item.name)} // Call the navigation function
              tabIndex={0}
              role="button"
              aria-label={` ${item.name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleNavigation(item.name); // Call the navigation function
                }
              }} // Handle keyboard events
            >
              {index < 4 && <HeaderItem name="" Icon={item.icon} />}
            </span>
          ))}
          <div
            className="md:hidden"
            onClick={() => setToggle(!toggle)}
            tabIndex={0}
            role="button"
            aria-label="More options"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setToggle(!toggle); // Toggle the dropdown
              }
            }} // Handle keyboard events
          >
            <HeaderItem name="" Icon={HiEllipsisHorizontal} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-800 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 3 && (
                      <span
                        key={item.name}
                        onClick={() => handleNavigation(item.name)} // Call the navigation function
                        tabIndex={0}
                        role="button"
                        aria-label={`Navigate to ${item.name}`}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleNavigation(item.name); // Call the navigation function
                          }
                        }} // Handle keyboard events
                      >
                        <HeaderItem name={item.name} Icon={item.icon} />
                      </span>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <span
        onClick={() => {
          dispatch(clearauths());
          navigate("/login");
        }}
        tabIndex={0}
        role="button"
        aria-label="Go to login"
        onKeyDown={(e) =>
          e.key === "Enter" && (dispatch(clearauths()), navigate("/login"))
        } // Handle keyboard events
      >
        <img
          src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Prescription02&hatColor=Heather&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=Angry&mouthType=Twinkle&skinColor=Tanned"
          className="w-[45px] rounded-full"
          alt="User Avatar"
        />
      </span>
    </div>
  );
}

export default Header;
