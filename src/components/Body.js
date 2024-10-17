import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";
import NoResData from "./NoResData";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {
    listOfRestaurants,
    setListOfRestaurant,
    filteredRestaurant,
    setFilteredRestaurant,
    loading,
  } = useFetchData();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  const location = useLocation(); // Get the current location

  // Reset filtered restaurants when the route changes to home
  useEffect(() => {
    if (location.pathname === "/") {
      setFilteredRestaurant(listOfRestaurants); // Reset to original list
      setSearchText(""); // Optionally clear the search text
    }
  }, [location, listOfRestaurants, setFilteredRestaurant]);

  if (onlineStatus === false)
    return (
      <>
        <h1>Oops....Looks like you're offline!</h1>
        <h2>Please check your internet connection</h2>
      </>
    );

  return loading ? (
    <Shimmer />
  ) : filteredRestaurant?.length === 0 ? (
    <NoResData />
  ) : (
    <div className="min-h-screen dark:bg-black">
      <div className="w-full lg:w-9/12 sm:w-10/12 md:w-10/12 pb-4 mx-auto">
        {/* Search and Filter Buttons */}
        <div className="pt-4 pb-5 flex justify-between items-center below-sm:ml-2 below-sm:mr-2">
          <div className="flex">
            <input
              type="text"
              data-testid="searchInput"
              className="border border-solid border-black  rounded-lg  dark:bg-black
             dark:border-gray-500 dark:border-solid placeholder-gray-500 dark:placeholder-[rgb(170,170,170)]
             text-black dark:text-white below-sm:mr-2 lg:px-2 lg:py-2"
              placeholder="Search for restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const filteredRestaurant = listOfRestaurants.filter((res) => {
                    const { name, areaName, cuisines, avgRating } = res.info; // Destructure needed properties
                    const searchLower = searchText.toLowerCase();

                    // Check if search text matches any of the desired properties
                    return (
                      name.toLowerCase().includes(searchLower) ||
                      areaName.toLowerCase().includes(searchLower) ||
                      cuisines.some((cuisine) =>
                        cuisine.toLowerCase().includes(searchLower)
                      ) ||
                      (avgRating && avgRating.toString().includes(searchLower)) // Ensure avgRating is a string
                    );
                  });
                  setFilteredRestaurant(filteredRestaurant);
                }
              }}
            />
            <button
              className="below-sm:px-2 below-sm:py-1 bg-slate-200 shadow-md shadow-slate-500 font-medium hover:bg-[rgb(254,80,5)]
             hover:text-white hover:scale-95 rounded-lg transition-all duration-300 px-2 py-2 lg:ml-2 sm:ml-2 md:ml-2"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) => {
                  const { name, areaName, cuisines, avgRating } = res.info; // Destructure needed properties
                  const searchLower = searchText.toLowerCase();

                  // Check if search text matches any of the desired properties
                  return (
                    name.toLowerCase().includes(searchLower) ||
                    areaName.toLowerCase().includes(searchLower) ||
                    cuisines.some((cuisine) =>
                      cuisine.toLowerCase().includes(searchLower)
                    ) ||
                    (avgRating && avgRating.toString().includes(searchLower)) // Ensure avgRating is a string
                  );
                });
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <button
              className="below-sm:px-2 below-sm:py-1 bg-slate-200 shadow-md shadow-slate-500 font-medium
             hover:bg-[rgb(254,80,5)]
             hover:text-white hover:scale-95 rounded-lg transition-all duration-300 px-2 py-2"
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
      </div>
      <div className="lg:w-9/12 below-sm:w-full sm:w-10/12 md:w-10/12 xl:w-9/12 mx-auto">
        {/* Restaurant Cards */}
        <div className=" flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <div className="p-4 lg:px-2 md:w-1/3 lg:w-1/4" key={restaurant.info.id}>
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