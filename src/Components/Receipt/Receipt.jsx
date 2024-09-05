import React from "react";
import { useSelector } from "react-redux";
const Receipt = () => {
  const date = new Date();
  const fdate = date.toLocaleString();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  return (
    <div>
      <div className="flex justify-between mt-10">
        <h3 className="pl-4 text-xl">Order #1725102156383</h3>
        <div className="pr-10 text-2xl border-2 p-3 shadow-xl rounded-lg bg-green-200 w-[350px] text-center mx-3">
          Order Created Successfully!
        </div>
      </div>
      <div className="pl-4 mt-10 font-semibold">{fdate}</div>
      <div className="mt-10">
        {cartItems.map((pizza) => (
          <div
            key={pizza.id}
            className="border-b-2 pl-4 min-w-screen mb-5 mt-2"
          >
            <span className="font-bold">
              {pizza.name}&nbsp;x{pizza.qty}
            </span>
            <span className="pl-5">₹{pizza.price}</span>
          </div>
        ))}
      </div>
      <div className="bg-gray-400 ml-5 mr-5 h-[120px] rounded-lg shadow-lg flex items-center justify-between p-6">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Pizza Price: ₹{totalPrice}</h3>
          <h3 className="text-lg font-semibold">
            To pay on delivery: ₹{totalPrice}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
