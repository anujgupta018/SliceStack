import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const openCart = () => {
    navigate("/cart");
    // console.log("Open cart");
  };
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="fixed bottom-0 left-0 bg-purple-300 flex flex-row justify-between items-center w-full h-[50px] transition-transform ease-in-out duration-200">
      <div className="flex overflow-x-auto mx-2 space-x-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <span className="text-sm">{item.qty},&nbsp;</span>
            <span className="text-sm">{item.name.slice(0, 15)}...</span>
          </div>
        ))}
      </div>
      <div className="p-3">
        <button
          className="pr-4 rounded-lg p-1 hover:bg-purple-700 text-gray-600 hover:text-gray-200"
          onClick={openCart}
        >
          Open Cart→
        </button>
      </div>
    </div>
  );
};

export default Cart;
