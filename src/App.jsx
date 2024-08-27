import React, { useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import UserForm from "./Components/User/UserForm";
import MenuPage from "./Components/Menu/MenuPage";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import { useSelector } from "react-redux";
import CartSection from "./Components/Cart/CartSection";

const App = () => {
  const items = useSelector((state) => state.cart.items);
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartSection />} />
      </Routes>

      {items.length > 0 && !isCartPage && <Cart />}
    </>
  );
};

export default App;
