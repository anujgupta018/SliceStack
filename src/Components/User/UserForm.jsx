import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setNumber } from "../../redux/Slices/UserSlice";
import { ScaleLoader } from "react-spinners";
const UserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phonePattern = /^[0-9]{10,}$/;
    if (!phonePattern.test(phone)) {
      setError("Please enter a valid phone number with at least 10 digits.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("username", name);
      dispatch(setUser({ name }));
      dispatch(setNumber({ phone }));
      setLoading(false);
      navigate("/menu");
    }, 2000);
  };
  return (
    <div className="bg-purple-100 flex justify-center items-center min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center">
          <ScaleLoader color="#000000" width={7} height={50} />
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
            Hey Welcome to SliceStack👋
          </h1>
          <h3 className="block text-gray-700 text-lg mb-2">
            Please begin your journey with us telling your name and your Phone
            number
          </h3>
          <form className="flex flex-col gap-6">
            <div>
              <label className="block text-gray-700 text-lg mb-2 ">Name:</label>
              <input
                type="text"
                required
                value={name}
                placeholder="Enter your name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg mb-2">Phone</label>
              <input
                type="tel"
                required
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {name && phone && (
              <button
                className="bg-purple-700 text-white p-3 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={handleSubmit}
              >
                Enter
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default UserForm;
