import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

import {
  addToCart,
  incrementQty,
  decrementQty,
  clearCart,
} from "../../redux/Slices/CartSlice";
const MenuPage = ({ onAddToCart }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const obj = {
    1: "Delicious Choices Await!",
    2: "Feast Your Eyes on Our Menu",
    3: "Satisfy Your Cravings",
    4: "Your Next Meal is Just a Tap Away",
    5: "Explore Our Flavorful Selection",
    6: "From Our Kitchen to Your Doorstep",
  };
  const keys = Object.keys(obj);
  const [heading, setHeading] = useState(obj[keys[0]]);
  const updateHeading = () => {
    const randomIndex = Math.floor(Math.random() * keys.length);
    setHeading(obj[keys[randomIndex]]);
  };
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    const change = setInterval(() => {
      updateHeading();
    }, 10000);
    return () => clearInterval(change);
  }, []);
  useEffect(() => {
    const fetchRecipies = async () => {
      try {
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        const response = await fetch(
          `https://api.spoonacular.com/food/products/search?query=pizza&number=5&apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log(data.products);
        setFoodData(data.products);
      } catch (error) {
        console.log("Error fetching menu items", error);
      }
    };
    fetchRecipies();
  }, []);
  const handleSubmit = (e) => {
    onAddToCart();
    console.log("Added to cart");
  };
  return (
    <div className="">
      <div>
        <h2 className="text-3xl mt-7 text-bolder mx-2 ">{heading} </h2>
      </div>
      <hr className="bg-black shadow-md mt-10 my-2 w-full font-bold h-1 " />
      <div className="container border-4 flex justify-center items-center">
        {foodData.map((pizza) => {
          const itemInCart = items.find((item) => item.id === pizza.id);
          return (
            <div key={pizza.id} className="m-4">
              <div>
                <img
                  src={pizza.image}
                  alt={pizza.title}
                  className="h-[100px] w-[120px] hover:cursor-grab hover:scale-110 transition-all ease-in-out duration-200"
                />
              </div>
              <div className="mx-3">
                <h2 className="text-lg font-semibold">{pizza.title}</h2>
                <span className="text-md italic text-gray-700">
                  {pizza.description
                    ? pizza.description.slice(0, 60) + "..."
                    : "No description available."}
                </span>
                <br />
                <div className="flex justify-between mt-1">
                  <span className="text-lg font-sans">
                    ${pizza.price ? pizza.price : "N/A"}
                  </span>
                  {itemInCart ? (
                    <div className="flex gap-6 items-center">
                      <div className="mt-1 flex gap-4 text-xl my-1 items-center">
                        <CiCirclePlus className="text-xl lg:text-2xl rounded-lg hover:bg-yellow-400 cursor-pointer" />
                        <span className="text-lg">{itemInCart.quantity}</span>
                        <CiCircleMinus className="text-xl lg:text-2xl rounded-lg hover:bg-red-400 cursor-pointer" />
                      </div>
                      <div>
                        <MdOutlineDeleteOutline className="text-xl hover:bg-red-600 cursor-pointer" />
                      </div>
                    </div>
                  ) : (
                    <button
                      className="bg-purple-300 w-[100px] h-[30px] mt-2 rounded-lg hover:bg-purple-400 text-gray-800"
                      onClick={() => handleSubmit(pizza)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
