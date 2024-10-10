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
      <div className="w-full px-44 m-auto pb-4">
        {/* Search and Filter Buttons */}
        <div className="pt-2 pb-5  filter flex flex-col md:flex-row items-center justify-between">
          <div className=" flex flex-col md:flex-row items-center">
            <input
              type="text"
              data-testid="searchInput"
              className="border border-solid border-black p-2 rounded-lg mb-2 md:mb-0 dark:bg-black
             dark:border-gray-500 dark:border-solid placeholder-gray-500 dark:placeholder-[rgb(170,170,170)]
             text-black dark:text-white"
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
              className="my-4 mx-4 px-4 py-2 bg-slate-200 shadow-md shadow-slate-500 font-medium hover:bg-[rgb(254,80,5)]
             hover:text-white hover:scale-95 rounded-lg transition-all duration-300"
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
              className=" ml-14 px-4 py-2 bg-slate-200 shadow-md shadow-slate-500 font-medium
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
      </div>
      <div className="w-9/12 mx-auto">
        {/* Restaurant Cards */}
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <div
              className="py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
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