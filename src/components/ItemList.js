import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL, NO_IMG } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between pb-4 m-2 py-2 border-gray-300 border-b-2 text-left"
        >
          {/* First Child Div: Takes 3 times the space */}
          <div className=" flex-grow-[3] my-4 mb-2 text-lg font-medium">
            <span className="dark:text-white">{item.card.info.name}</span>
            <li className="list-none dark:text-white">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </li>
            <p className="text-custom-text my-4 font-mono text-sm dark:text-[rgb(170,170,170)]">
              {item.card.info.description}
            </p>
          </div>

          {/* Second Child Div: Takes normal space */}
          <div className="flex-none w-36 h-44 ml-4">
            <div className="flex flex-col h-full">
              <div className="flex-grow-[2] pb-2">
                <img
                  className="w-full h-32 object-cover rounded-xl"
                  src={CDN_URL + item.card.info.imageId}
                  onError={(e) => {
                    e.target.onerror = null; // Prevents looping in case the default image fails
                    e.target.src = NO_IMG; // Specify the path to your default image
                  }}
                />
              </div>
              <div className="flex-grow-[1] flex items-center justify-center">
                <button
                  className="px-10 py-2 bg-white rounded-lg border-[1px] border-slate-300 shadow-lg
                 text-green-600 font-extrabold"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
