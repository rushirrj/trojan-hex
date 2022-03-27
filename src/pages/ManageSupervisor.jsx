import React from "react";
import CreateVolunteer from "../components/SuperVisor/CreateVolunteer";
import VTable from "../components/SuperVisor/VTable";

const ManageSupervisor = () => {
  return (
    <div>
      <CreateVolunteer />
      <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10">
        <VTable />
      </div>
    </div>
  );
};

export default ManageSupervisor;
