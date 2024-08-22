import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./Components/User/UserForm";
import MenuPage from "./Components/Menu/MenuPage";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
