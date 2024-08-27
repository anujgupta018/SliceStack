import React from "react";
import { useSelector } from "react-redux";
import Error from "../Error/Error";
const CartSection = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const name = useSelector((state) => state.cart.name);
  const qty = useSelector((state) => state.cart.qty);
  const price = useSelector((state) => state.cart.price);
  return (
    <div>
      <div className="flex items-center justify-center">
        Your Cart{" "}
        {cartItems.length > 0 ? (
          <div>
            <div></div>
          </div>
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
};

export default CartSection;
