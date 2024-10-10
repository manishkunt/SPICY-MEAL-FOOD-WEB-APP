import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import EmptyCart from "./EmptyCart";
import { CDN_URL, NO_IMG } from "../utils/constants"; // Ensure to import these constants

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // This will increase the quantity
  };

  return (
    <div className=" dark:bg-black min-h-screen">
      {cartItems.length === 0 ? (
        <EmptyCart /> // Show the EmptyCart component if cart is empty
      ) : (
        <div className="w-6/12 m-auto p-4">
          <h1 className="text-4xl font-bold text-center dark:text-white pt-5">Your Cart</h1>
          <div className="flex items-center">
            <button
              className="ml-auto text-xl font-bold hover:text-white  border border-gray-400 py-1 px-2 rounded-lg dark:text-white mt-14
              hover:bg-[rgb(254,80,5)] hover:border-[rgb(254,80,5)] transition duration-200 ease-in-out"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="border-white shadow-lg shadow-slate-500 rounded-md mt-10">
            {cartItems.map((item) => (
              <div
                key={item.card.info.id}
                className="flex items-center justify-between pb-4 m-2 py-2 border-gray-300 border-b-2 text-left"
              >
                {/* Display item details */}
                <div className="flex-grow-[3] my-4 mb-2 text-lg font-medium">
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
                  <span className="text-base text-slate-600 dark:text-slate-400 font-semibold">
                    Quantity: {item.quantity}
                  </span>
                </div>

                {/* Image and buttons to modify quantity */}
                <div className="flex-none w-36 h-44 ml-4">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow-[2] pb-2">
                      <img
                        className="w-full h-32 object-cover rounded-xl"
                        src={CDN_URL + item.card.info.imageId} // Ensure correct path to images
                        onError={(e) => {
                          e.target.onerror = null; // Prevents looping in case the default image fails
                          e.target.src = NO_IMG; // Specify the path to your default image
                        }}
                      />
                    </div>
                    <div className="flex-grow-[1] flex items-center justify-center">
                      <button
                        className="px-3 py-1 bg-green-500 text-white rounded-lg mr-2"
                        onClick={() => handleAddItem(item)}
                      >
                        ADD
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded-lg"
                        onClick={() => handleRemoveItem(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
