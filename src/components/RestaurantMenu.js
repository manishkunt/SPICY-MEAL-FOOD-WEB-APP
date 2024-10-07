import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState();

  const { resId } = useParams();


  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  return (
    <div className="text-center p-12 dark:bg-black">
      <h1 className="font-bold text-2xl dark:text-white">{name}</h1>
      <p className="font-bold pt-3 text-lg dark:text-white">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordians*/}
      {categories.map((category, index) => (
        // controlled componenent
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
