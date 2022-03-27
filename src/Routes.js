import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NGO from "./pages/NGO";
import Admin from "./pages/Admin";
import Supervisor from "./pages/Supervisor";

const RoutesM = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ngo" element={<NGO />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/supervisor" element={<Supervisor />} />
    </Routes>
  );
};

export default RoutesM;
