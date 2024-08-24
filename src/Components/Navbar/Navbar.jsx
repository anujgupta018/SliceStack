import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [name, setName] = useState("");
  const nameFrom = useSelector((state) => state.user.name);
  useEffect(() => {
    const updateName = () => {
      const savedName = localStorage.getItem("username");
      if (nameFrom) {
        setName(nameFrom);
      } else if (savedName) {
        setName(savedName);
      } else {
        setName("Guest");
      }
      console.log(savedName);
    };
    updateName();
    window.addEventListener("storage", updateName);
    return () => window.removeEventListener("storage", updateName);
  }, [nameFrom]);
  return (
    <div className="bg-purple-300 h-[70px] shadow-lg flex justify-between p-2">
      <div className="">
        <h1 className="text-3xl lg:text-2xl font-bolder mt-2 mx-2">
          SliceStack co.
        </h1>
      </div>
      {name && (
        <div className="flex gap-2 justify-center items-center">
          <span className="text-lg">{name}</span>
          <CgProfile className="text-xl mt-2" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
