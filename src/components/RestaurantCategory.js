import ItemList from "./ItemList";
import ScrollDown from "../Logos/ScrollDown.png";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
     setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div
        className="w-6/12 below-sm:w-full sm:w-full md:w-8/12 m-auto my-5  bg-white  shadow-md shadow-slate-400 rounded-sm font-bold
       text-lg p-4 dark:bg-black"
      >
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="dark:text-white ">
            {data.title} ({data.itemCards.length})
          </span>
          <img className="w-7 h-7" src={ScrollDown} />
        </div>
        {/* Accordian Body*/}

        {showItems && <ItemList items={data.itemCards}  />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
