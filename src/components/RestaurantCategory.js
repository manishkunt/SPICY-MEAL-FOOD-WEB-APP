import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {/* Header */}
      <div className=" w-6/12 m-auto my-5  bg-slate-200 shadow-md shadow-slate-500 font-bold text-lg p-4">
        <div className="flex justify-between">
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body*/}

        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
