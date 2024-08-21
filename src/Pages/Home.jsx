import React from "react";
import UserForm from "../Components/UserForm";
import { Routes, Route } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-purple-100">
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </div>
  );
};

export default Home;
