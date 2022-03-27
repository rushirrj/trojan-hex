import React from "react";
import CreateEvent from "../components/Admin/CreateEvent";
import EventTable from "../components/Admin/EventTable";
const Event = () => {
  return (
    <div>
      <CreateEvent />
      <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10">
        <EventTable />
      </div>
    </div>
  );
};

export default Event;
