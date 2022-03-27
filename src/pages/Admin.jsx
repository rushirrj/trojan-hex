import React from "react";
import CreateNGO from "../components/Admin/CreateNGO";
import Table from "../components/Admin/Table";
const Admin = () => {
  return (
    <div>
      <CreateNGO />
      <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10">
        <Table />
      </div>
    </div>
  );
};

export default Admin;
