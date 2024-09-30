import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex items-center justify-between  bg-white shadow-xl mb-2">
      <div className="logo-container">
        <img
          className=" m-4 w-24 transition-transform duration-500 ease-in-out hover:scale-125"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="flex">
        <ul className="flex items-center p-4 m-4 ">
          <li className="px-4 font-medium hover:text-[rgb(254,80,5)]">
            {onlineStatus ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li className="px-4 font-medium hover:text-[rgb(254,80,5)]">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-medium hover:text-[rgb(254,80,5)]">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-medium hover:text-[rgb(254,80,5)]">
            <Link to="Contact">Contact Us</Link>
          </li>
          <li className="px-4 font-medium hover:text-[rgb(254,80,5)]">Cart</li>
          <button
            className="px-4 py-2  font-medium hover:text-white hover:bg-[rgb(254,80,5)] hover: rounded-md transition-all duration- 300"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
