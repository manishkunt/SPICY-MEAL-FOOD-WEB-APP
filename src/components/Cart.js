import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <EmptyCart />  // Show the EmptyCart component if cart is empty
      ) : (
        <div className="w-6/12 m-auto p-4">
          <h1 className="text-2xl font-bold text-center">Your Cart</h1>
          {/* Render cart items and clear cart button */}
          <div className="flex items-center">
            <button className="ml-auto text-xl font-bold mr-3 border-[1px] border-gray-400 py-1 px-3 rounded-sm"
              onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
          <ItemList items = {cartItems} />
        </div>
      )}
    </div>
  );
};


export default Cart;
