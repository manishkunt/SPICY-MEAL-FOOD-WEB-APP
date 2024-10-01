import { CDN_URL } from "../utils/constants";
import Rating from "../Logos/Rating.png";
import LocationLogo from "../Logos/LocationLogo.png";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    areaName,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className=" h-[295px] w-[240px]  hover:scale-95 transition-transform duration-300 relative">
      {" "}
      {/* Added relative */}
      {props.isPromoted && (
        <label
          className="absolute top-2 -left-1 text-xs font-semibold bg-[rgb(237,69,109)] hover:bg-[rgb(241,92,82)]
         text-white p-2 rounded-lg z-10"
        >
          {" "}
          {/* Added z-10 to keep it on top */}
          PROMOTED
        </label>
      )}
      <div className="h-[162px] w-full">
        <img
          className="h-full w-full rounded-2xl object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="mx-3">
        <h3 className="font-bold pt-2 text-lg truncate">{name}</h3>
        <div className="flex items-center">
          <img className="w-5 h-5" src={Rating} />
          <h4 className="ml-1 text-lg  font-medium">{avgRating} •</h4>
          <h4 className="ml-1 text-lg  font-semibold">
            {sla.deliveryTime} mins
          </h4>
        </div>
        <h4 className="text-custom-text font-medium truncate">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-custom-text font-medium truncate">{areaName}</h4>
      </div>
    </div>
  );
};

// Higher Order Component remains the same
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return <RestaurantCard {...props} isPromoted={true} />; // Pass isPromoted prop
  };
};

export default RestaurantCard;
