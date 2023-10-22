import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart</h1>
        )}
        <ItemList items={cartItems} />
      </div>
      <button
        className="rounded-lg bg-black text-white p-2 m-2"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
    </div>
  );
};

export default Cart;
