import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkModeLogo from "../Logos/DarkModeLogo.png";
import UserContext from "../utils/UserContext";
import CartLogo from "../Logos/CartLogo.png";
import { useDarkMode } from "../utils/DarkModeContext"; // Import useDarkMode hook
import { useSelector } from "react-redux";
import Online from "../Logos/Online.png";
import Offline from "../Logos/Offline.png";

const Header = ({ onLoginClick }) => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { darkMode, toggleDarkMode } = useDarkMode();

  const data = useContext(UserContext);

  //console.log(data);

  //Subscribing to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div
      className="flex items-center justify-between bg-white shadow-xl
       dark:bg-black dark:border-b-[1px] dark:border-slate-800"
    >
      <div className="logo-container ">
        <img
          className=" mx-4 w-16 transition-transform duration-500 ease-in-out hover:scale-125"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="flex">
        <ul className="flex items-center p-1 m-4 dark:text-white">
          <button onClick={toggleDarkMode}>
            <img
              className="w-6 pb-1"
              src={DarkModeLogo}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            />
          </button>
          <li title="User Online">
            {onlineStatus ? (
              <img className="w-6 pb-1 ml-4" src={Online} />
            ) : (
              <span className=" ml-4">🔴</span>
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
                className="absolute inset-0 flex items-center justify-center text-black
               dark:text-white text-xs font-bold transform translate-y-1 pb-1"
              >
                {cartItems.length}
              </span>
            </Link>
            <Link className="ml-1" to="/cart">
              Cart
            </Link>
          </li>
          <button
            className="px-4 py-2 font-medium hover:text-white hover:bg-[rgb(254,80,5)] hover: rounded-md transition-all duration-300"
            onClick={onLoginClick} // Handle login click
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;