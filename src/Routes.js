import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NGO from "./pages/NGO";

const RoutesM = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ngo" element={<NGO />} />
    </Routes>
  );
};

export default RoutesM;
