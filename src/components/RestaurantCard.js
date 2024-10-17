import { CDN_URL } from "../utils/constants";
import Rating from "../Logos/Rating.png";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, areaName, cuisines, avgRating, sla } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className=" h-[295px] w-[240px] below-sm:w-[200px] below-sm:h-[270px] hover:scale-95 transition-transform
       duration-300 relative hover:shadow-md hover:rounded-2xl md:mr-16"
    >
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
      <div className="h-[162px] below-sm:h-[145px] w-full">
        <img
          className="h-full w-full rounded-2xl object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="mx-3">
        <h3 className="font-bold pt-2 text-lg truncate dark:text-white">
          {name}
        </h3>
        <div className="flex items-center dark:text-white">
          <img className="w-5 h-5" src={Rating} />
          <h4 className="ml-1 text-lg  font-medium">{avgRating} •</h4>
          <h4 className="ml-1 text-lg  font-semibold">
            {sla.deliveryTime} mins
          </h4>
        </div>
        <h4 className="text-custom-text font-medium truncate dark:text-[rgb(170,170,170)]">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-custom-text font-medium truncate dark:text-[rgb(170,170,170)]">
          {areaName}
        </h4>
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