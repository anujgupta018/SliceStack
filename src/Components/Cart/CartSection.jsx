import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
import {
  emptyCart,
  incrementQty,
  decrementQty,
} from "../../redux/Slices/CartSlice";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartSection = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(emptyCart());
  };

  const handleIncrement = (id) => {
    dispatch(incrementQty({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQty({ id }));
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col mt-5">
        <Link to="/menu" className="mb-4 text-blue-500 hover:underline">
          Back to menu
        </Link>
        {cartItems && cartItems.length > 0 ? (
          <>
            <h2 className="text-xl sm:text-2xl mb-4">Your Cart</h2>
            <div className="w-full max-w-xl mx-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b-2 shadow-md p-4 my-2 flex justify-between items-center"
                >
                  <div className="flex-1">
                    <span className="text-lg">
                      {item.qty}x&nbsp;{item.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-right w-[80px]">
                      ₹{item.price}
                    </span>
                    <div className="flex flex-row justify-center items-center gap-2 ml-4">
                      <CiCirclePlus
                        onClick={() => handleIncrement(item.id)}
                        className="text-xl lg:text-2xl rounded-lg hover:bg-yellow-400 cursor-pointer"
                      />
                      <span className="text-lg">{item.qty}</span>
                      <CiCircleMinus
                        onClick={() => handleDecrement(item.id)}
                        className="text-xl lg:text-2xl rounded-lg hover:bg-red-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 justify-center items-center mt-4">
                <button className="bg-purple-300 p-2">Order Now</button>
                <button className="bg-yellow-200 p-2" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
};

export default CartSection;
