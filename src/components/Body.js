import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";
import { useState, useEffect } from "react";

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

  console.log("Body Rendered", listOfRestaurants);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <>
        <h1>Oops....Looks like you're offline !</h1>
        <h2>Please check your internet connection</h2>
      </>
    );
  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="Search">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-300 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              //Filter the restaurants cards and update the UI
              // searchText
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
            className="px-4 py-2 bg-orange-300 rounded-lg"
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
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              /** if the restaurant is under 1.5 kms near you then the restaurant is prmoted**/
              restaurant.info.sla.lastMileTravel < 1 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
