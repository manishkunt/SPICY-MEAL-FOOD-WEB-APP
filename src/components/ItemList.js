import { CDN_URL, NO_IMG } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between p-2 m-2 border-gray-300 border-b-2 text-left"
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
          <div className="flex-none w-36 h-36 ml-4 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={CDN_URL + item.card.info.imageId}
              onError={(e) => {
                e.target.onerror = null; // Prevents looping in case the default image fails
                e.target.src = NO_IMG; // Specify the path to your default image
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
