import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NGO from "./pages/NGO";
import Admin from "./pages/Admin";

const RoutesM = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ngo" element={<NGO />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default RoutesM;
