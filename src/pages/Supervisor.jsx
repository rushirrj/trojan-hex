import React from "react";
import CreateVolunteer from "../components/SuperVisor/CreateVolunteer";
import Table from "../components/SuperVisor/Table";

const Supervisor = () => {
  return (
    <div>
      <CreateVolunteer />
      <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10">
        <Table />
      </div>
    </div>
  );
};

export default Supervisor;
