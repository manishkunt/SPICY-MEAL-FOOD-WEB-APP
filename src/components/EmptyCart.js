import EmptyCartPicture from "../Logos/EmptyCartPicture.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="dark:bg-black min-h-screen">
      <div className="flex flex-col items-center">
        <img className="w-72 ml-24" src={EmptyCartPicture} />
        <h1 className="dark:text-white mt-2 font-bold text-xl">
          Your cart looks empty.
        </h1>
        <h2 className="dark:text-white">
          Please add some items from the restaurants !!!
        </h2>
        <Link to="/">
          <button className="text-white bg-[rgb(254,80,5)] hover: rounded-md px-4 py-2 mt-5">
            Go To Restaurants
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
