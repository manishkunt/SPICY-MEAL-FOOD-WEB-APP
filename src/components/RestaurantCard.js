import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-64 bg-gray-200">
      <img
        className="rounded-2xl"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

//Higher Order Component

//input - RestaurantCard => RestaurantCardDistance

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-xs font-semibold bg-black hover:bg-[rgb(254,80,5)] text-white  p-2 rounded-lg">
          PROMOTED
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
