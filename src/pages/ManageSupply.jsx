import React from "react";
import SupplyTable from "../components/NGO/SupplyTable";
import CreateSupply from "../components/NGO/CreateSupply";
const Managesupply = () => {
  return (
    <div>
      <CreateSupply />
      <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10">
        <SupplyTable />
      </div>
    </div>
  );
};

export default Managesupply;
