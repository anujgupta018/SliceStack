import React, { useEffect } from "react";

const MenuPage = () => {
  const obj = {
    1: "Delicious Choices Await!",
    2: "Feast Your Eyes on Our Menu",
    3: "Satisfy Your Cravings",
    4: "Your Next Meal is Just a Tap Away",
    5: "Explore Our Flavorful Selection",
    6: "From Our Kitchen to Your Doorstep",
  };
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const heading = obj[keys[randomIndex]];
  useEffect(() => {
    const fetchRecipies = async () => {
      try {
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=30&apiKey=${apiKey} `
        );
        const data = await response.json();
        console.log(data);
        // const extractedItems = data.results.map((item) => {
        //   id: item.id,

        // });
      } catch (error) {
        console.log("Error fetching menu items", error);
      }
    };
    fetchRecipies();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl mt-7 text-bolder mx-2 ">{heading} </h2>
      </div>
      <hr className="bg-black shadow-md mt-10 w-full font-bold h-1 " />
      <div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
            alt=""
            className=""
          />
          <div>
            <h2>Pizza</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              mollitia!
            </span>
          </div>
          <div>
            <span>$16</span>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
