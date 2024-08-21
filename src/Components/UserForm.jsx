import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/Slices/UserSlice";
import { ScaleLoader } from "react-spinners";
const UserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch(setUser({ name, phone }));
      setLoading(false);
      navigate("/menu");
    }, 2000);
  };
  return (
    <div className="flex justify-center items-center p-3 mt-20 rounded-md">
      {loading ? (
        <div className="flex justify-center mt-20 mb-2">
          <ScaleLoader color="#0c0b0b" width={7} height={50} />
        </div>
      ) : (
        <div className="flex justify-center items-center p-3 mt-20 rounded-md ">
          <div className="flex flex-col justify-center items-center mt-5 gap-8">
            <h1 className="text-2xl font-bold">Hey Welcome to SliceStack👋</h1>
            <h3 className="text-xl text-yellow-700 font-bold ">
              Please begin our journey with us telling your name and your Phone
              number
            </h3>
            <div className="flex flex-col justify-center gap-8">
              <div className="flex flex-row gap-4">
                <label className="text-xl text-black ">Name:</label>
                <input
                  type="text"
                  required
                  value={name}
                  placeholder="Enter your name"
                  className="border p-1"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-4">
                <label className="text-xl text-black">Phone no:</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  placeholder="Phone no"
                  onChange={(e) => setPhone(e.target.value)}
                  className="border p-1"
                />
              </div>
              <button
                to="/menu"
                className="bg-purple-400 p-2 rounded-md hover:bg-purple-600 hover:text-gray-300"
                onClick={handleSubmit}
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
