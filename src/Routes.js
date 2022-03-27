import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ManageNGO from "./pages/ManageNGO";
import Admin from "./pages/Admin";
import Event from "./pages/Event";
import ManageVolunteer from "./pages/ManageVolunteer";
import ManageSupplySupervisor from "./pages/ManageSupplySupervisor";
import { Outlet } from "react-router-dom";
import Managesupply from "./pages/ManageSupply";
const RoutesM = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Outlet />}>
        <Route path="" element={<Event />} />
        <Route path="manage" element={<Admin />} />
      </Route>
      <Route path="/ngo" element={<Outlet />}>
        <Route path="" element={<ManageNGO />} />
        <Route path="manage" element={<Managesupply />} />
      </Route>
      <Route path="/supervisor" element={<Outlet />}>
        <Route path="" element={<ManageVolunteer />} />
        <Route path="manage" element={<ManageSupplySupervisor />} />
      </Route>
    </Routes>
  );
};

export default RoutesM;
