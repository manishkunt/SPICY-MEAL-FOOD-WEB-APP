import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkModeLogo from "../Logos/DarkModeLogo.png";
import UserContext from "../utils/UserContext";
import CartLogo from "../Logos/CartLogo.png";
import { useDarkMode } from "../utils/DarkModeContext";
import { useSelector } from "react-redux";
import Online from "../Logos/Online.png";
import Offline from "../Logos/Offline.png";
import { HiMenu, HiX } from "react-icons/hi"; // Menu and close icons

const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div
      className="flex items-center justify-between bg-white shadow-xl dark:bg-black dark:border-b-[1px] dark:border-slate-800"
    >
      {/* Left: Logo */}
      <div className="logo-container">
        <img
          className="mx-4 w-16 transition-transform duration-500 ease-in-out hover:scale-125 sm:w-8 md:w-8 lg:w-14 below-sm:w-8"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>

      {/* Middle: Navigation for desktop */}
      <div className="hidden lg:flex">
        <ul className="flex items-center p-1 m-4 dark:text-white">
          <button onClick={toggleDarkMode}>
            <img
              className="w-6 pb-1"
              src={DarkModeLogo}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              alt="Dark Mode"
            />
          </button>
          <li title="User Online">
            {onlineStatus ? (
              <img className="w-6 pb-1 ml-4" src={Online} alt="Online" />
            ) : (
              <span className="ml-4">🔴</span>
            )}
          </li>
          <li
            className="pr-4 font-medium text-base hover:text-[rgb(254,80,5)]"
            title="User Online"
          >
            {onlineStatus ? "Online" : "Offline"}
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
          <li className="px-4 font-medium hover:text-[rgb(254,80,5)] relative flex items-center">
            <Link to="/cart" className="inline-block relative pb-0">
              <img className="w-6 pb-1" src={CartLogo} alt="Cart Logo " />
              <span
                className="absolute inset-0 flex items-center justify-center text-black dark:text-white text-xs font-bold transform translate-y-1 pb-1"
              >
                {cartItems.length}
              </span>
            </Link>
            <Link className="ml-1" to="/cart">
              Cart
            </Link>
          </li>
          <button
            className="px-4 py-2 font-medium hover:text-white hover:bg-[rgb(254,80,5)] rounded-md transition-all duration-300"
            onClick={onLoginClick}
          >
            Login
          </button>
        </ul>
      </div>

      {/* Mobile and tablet: Dark mode, Home, Cart, Hamburger, and Login */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleDarkMode}>
          <img
            className="w-6 mr-4"
            src={DarkModeLogo}
            alt="Dark Mode"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          />
        </button>
        <Link to="/" className="mr-4">
          <span className="font-medium dark:text-white hover:text-[rgb(254,80,5)] dark:hover:text-[rgb(254,80,5)]">
            Home</span>
        </Link>
        <Link to="/cart" className="relative mr-4 flex items-center">
          <img className="w-6 pb-1" src={CartLogo} alt="Cart Logo" />
          <span
            className="absolute inset-0 flex items-center justify-center text-black dark:text-white text-xs
             font-bold transform translate-y-1 pb-1"
          >
            {cartItems.length}
          </span>
        </Link>
        {/* Login Button */}
        <button
          className="px-1 py-0 font-medium hover:text-white hover:bg-[rgb(254,80,5)] rounded-md transition-all
           duration-300 mr-4 dark:text-white"
          onClick={onLoginClick}
        >
          Login
        </button>
        {/* Hamburger Menu */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mr-4">
          {isMenuOpen ? (
            <HiX className="w-8 h-8 dark:text-white hover:text-[rgb(254,80,5)] dark:hover:text-[rgb(254,80,5)]" />
          ) : (
            <HiMenu className="w-8 h-8 dark:text-white hover:text-[rgb(254,80,5)] dark:hover:text-[rgb(254,80,5)]" />
          )}
        </button>
      </div>

      {/* Dropdown menu for mobile/tablet */}
      {isMenuOpen && (
        <div className="lg:hidden absolute right-0 mt-44 w-28 bg-white shadow-lg z-50 dark:bg-slate-800 rounded-sm">
          <ul className="flex flex-col items-center">
            <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-slate-800 text-black dark:text-white
             font-semibold hover:text-[rgb(254,80,5)] dark:hover:text-[rgb(254,80,5)]">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-slate-800 text-black dark:text-white
             font-semibold hover:text-[rgb(254,80,5)] dark:hover:text-[rgb(254,80,5)]">
              <Link to="Contact">Contact Us</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-slate-800 flex items-center text-black dark:text-white font-semibold hover:text-[rgb(254,80,5)]">
              {onlineStatus ? (
                <img className="w-6 inline-block" src={Online} alt="Online" />
              ) : (
                <span className="inline-block">🔴</span>
              )}
              <span className="ml-2">{onlineStatus ? "Online" : "Offline"}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
