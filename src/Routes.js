import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NGO from "./pages/NGO";
import Admin from "./pages/Admin";
import ManageVolunteer from "./pages/ManageVolunteer";
import ManageSupplySupervisor from "./pages/ManageSupplySupervisor";
import { Outlet } from "react-router-dom";
const RoutesM = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/ngo" element={<Outlet />}>
        <Route path="" element={<NGO />} />
      </Route>
      <Route path="/supervisor" element={<Outlet />}>
        <Route path="" element={<ManageVolunteer />} />
        <Route path="manage" element={<ManageSupplySupervisor />} />
      </Route>
    </Routes>
  );
};

export default RoutesM;
