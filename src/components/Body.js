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
    <div className="min-h-screen dark:bg-black">
      <div className="w-9/12 mx-auto">
        {/* Search and Filter Buttons */}
        <div className=" filter flex flex-col md:flex-row md:justify-between items-center">
          <div className="Search flex flex-col md:flex-row items-center">
            <input
              type="text"
              className="border border-solid border-black p-2 rounded-lg mb-2 md:mb-0 dark:bg-black
             dark:border-gray-500 dark:border-solid placeholder-gray-500 dark:placeholder-[rgb(170,170,170)]
             text-black dark:text-white"
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
              className="px-4 py-2 bg-slate-200 shadow-md shadow-slate-500 font-medium
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
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <div
              className="p-4  w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              key={restaurant.info.id}
            >
              <Link to={"/restaurants/" + restaurant.info.id}>
                {restaurant.info.sla.lastMileTravel < 1 ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
