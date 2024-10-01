import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {
    listOfRestaurants,
    setListOfRestaurant,
    filteredRestaurant,
    setFilteredRestaurant,
    loading,
  } = useFetchData();

  console.log(listOfRestaurants);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <>
        <h1>Oops....Looks like you're offline!</h1>
        <h2>Please check your internet connection</h2>
      </>
    );

  return loading ? (
    <Shimmer />
  ) : (
    <div className="w-10/12 mx-auto">
      {/* Search and Filter Buttons */}
      <div className="filter flex items-center justify-between my-4">
        <div className="Search">
          <input
            type="text"
            className="border border-solid border-black p-2 rounded-lg"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="m-4 px-4 py-2 bg-slate-200 shadow-md shadow-slate-500 font-medium hover:bg-[rgb(254,80,5)]
             hover:text-white hover:scale-95 rounded-lg transition-all duration-300"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="mx-5 px-4 py-2 bg-slate-200 shadow-md shadow-slate-500 font-medium
             hover:bg-[rgb(254,80,5)]
             hover:text-white hover:scale-95 rounded-lg transition-all duration-300"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex-grow-0 flex-shrink-0"
          >
            {restaurant.info.sla.lastMileTravel < 1 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
