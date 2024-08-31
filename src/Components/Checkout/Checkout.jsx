import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setAddress, setNumber } from "../../redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialName = useSelector((state) => state.user.name);
  const intialPhone = useSelector((state) => state.user.phone);
  const cartItems = useSelector((state) => state.cart.items);
  const [name, setName] = useState(initialName);
  const [phone, setPhone] = useState(intialPhone);
  const [add, setAdd] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
    dispatch(setUser({ name: e.target.value }));
  };
  const handlePhone = (e) => {
    const phoneValue = e.target.value;
    setPhone(phoneValue);

    const phonePattern = /^[0-9]{10,}$/;
    if (!phonePattern.test(phoneValue)) {
      setError("Please enter a valid phone number with at least 10 digits.");
    } else {
      setError("");
      dispatch(setNumber({ phone: phoneValue }));
    }
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const handleAddress = (e) => {
    setAdd(e.target.value);
    dispatch(setAddress({ address: e.target.value }));
  };
  const handleSubmit = () => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
      navigate("/receipt");
    }, 2000);
  };
  const isFromValid = name && phone && add && !error;
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ScaleLoader color="#000000" width={7} height={50} />
        </div>
      ) : (
        <div
          data-aos="zoom-in"
          className="flex items-center justify-center flex-col mt-10 gap-8"
        >
          <h2 className="texl-xl sm:text-2xl font-semibold text-center">
            Review Your Order
          </h2>
          <h3 className="text-md mb-6">
            Complete your purchase and get ready for deliciousness!!
          </h3>
          <form className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700 w-32"
              >
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={handleName}
                className="w-full p-3 border border-purple-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="phone"
                className="text-lg font-medium text-gray-700 w-32"
              >
                Phone:
              </label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhone}
                className="w-full p-3 border border-purple-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex items-center gap-4">
              <label
                htmlFor="address"
                className="text-lg font-medium text-gray-700 w-32"
              >
                Address:
              </label>
              <input
                type="text"
                onChange={handleAddress}
                className="w-full p-3 border border-purple-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              className="bg-purple-700 text-white p-3 rounded-lg cursor-pointer hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={!isFromValid}
              onClick={handleSubmit}
            >
              Order Now for ₹{totalPrice}!
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
