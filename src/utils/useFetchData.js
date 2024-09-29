import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useFetchData = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return {
    listOfRestaurants,
    setListOfRestaurant,
    filteredRestaurant,
    setFilteredRestaurant,
  };
};

export default useFetchData;
