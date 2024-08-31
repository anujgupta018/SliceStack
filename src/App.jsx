import React, { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import UserForm from "./Components/User/UserForm";
import MenuPage from "./Components/Menu/MenuPage";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import { useSelector } from "react-redux";
import CartSection from "./Components/Cart/CartSection";
import Checkout from "./Components/Checkout/Checkout";
import Receipt from "./Components/Receipt/Receipt";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const items = useSelector((state) => state.cart.items);
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  const isCheckout = location.pathname === "/checkout";
  const isReceipt = location.pathname === "/receipt";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartSection />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>

      {items.length > 0 && !isCartPage && !isCheckout && !isReceipt && <Cart />}
    </>
  );
};

export default App;
