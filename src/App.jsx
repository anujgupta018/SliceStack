import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./Components/User/UserForm";
import MenuPage from "./Components/Menu/MenuPage";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import { useSelector } from "react-redux";

const App = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
      {items.length > 0 && <Cart />}
    </BrowserRouter>
  );
};

export default App;
