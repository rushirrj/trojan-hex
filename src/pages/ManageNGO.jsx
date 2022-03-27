import React from "react";
import NGOTable from "../components/NGO/NGOTable";
import CreateSuperVisor from "../components/NGO/CreateSuperVisor";
const Managengo = () => {
  return (
    <div>
      <CreateSuperVisor />
      <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10">
        <NGOTable />
      </div>
    </div>
  );
};

export default Managengo;
