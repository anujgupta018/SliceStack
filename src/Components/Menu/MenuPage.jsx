import React, { useEffect, useState } from "react";

const MenuPage = ({ onAddToCart }) => {
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
  useEffect(() => {
    const change = setInterval(() => {
      updateHeading();
    }, 10000);
  });
  // useEffect(() => {
  //   const fetchRecipies = async () => {
  //     try {
  //       const apiKey = import.meta.env.VITE_APP_API_KEY;
  //        const response = await fetch(
  //          `https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=1&apiKey=${apiKey} `
  //        );
  //       const data = await response.json();
  //       console.log(data);
  //       // const extractedItems = data.results.map((item) => {
  //       //   id: item.id,

  //       // });
  //     } catch (error) {
  //       console.log("Error fetching menu items", error);
  //     }
  //   };
  //   fetchRecipies();
  // }, []);
  const handleSubmit = (e) => {
    onAddToCart();
    console.log("Added to cart");
  };
  return (
    <div className="">
      <div>
        <h2 className="text-3xl mt-7 text-bolder mx-2 ">{heading} </h2>;
      </div>
      <hr className="bg-black shadow-md mt-10 my-2 w-full font-bold h-1 " />
      <div className="container border-4 flex justify-center items-center">
        <div>
          <img
            src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
            alt=""
            className="h-[100px] w-[120px] hover:cursor-grab hover:scale-110 transition-all ease-in-out duration-200 "
          />
        </div>
        <div className="mx-3">
          <h2 className="text-lg font-semibold">Pizza</h2>
          <span className="text-md italic text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            mollitia!
          </span>
          <br />
          <div className="flex justify-between mt-1">
            <span className="text-lg font-sans">$16</span>
            <button
              className="bg-purple-300 w-[100px] h-[30px] rounded-lg hover:bg-purple-400 text-gray-800"
              onClick={handleSubmit}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
