import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./Components/UserForm";
import MenuPage from "./Components/Menu/MenuPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
