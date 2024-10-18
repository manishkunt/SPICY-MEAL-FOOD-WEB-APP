import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useFetchData = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(RES_API, {
        headers: {
          "x-requested-with": "XMLHttpRequest",  // Add this header
        },
      });
      const json = await data.json();
  
      setListOfRestaurant(
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
      setFilteredRestaurant(
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return {
    listOfRestaurants,
    setListOfRestaurant,
    filteredRestaurant,
    setFilteredRestaurant,
    loading,
  };
};

export default useFetchData;
