import React from "react";
import CreateNGO from "../components/Admin/CreateNGO";
import {Link} from "react-router-dom"
import Table from "../components/Admin/Table";
const Admin = () => {
  return (
    <div>
      <CreateNGO />
      <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10">
      <div className="flex justify-between mb-5">
        <Link
          class="mt-3 text-indigo-500 inline-flex items-center"
          to="/admin"
        >
          Manage Event/Disaster
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        <Link
          class="mt-3 text-indigo-500 inline-flex items-center"
          to="/admin/manage"
        >
          Manage NGO
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
        <Table />
      </div>
    </div>
  );
};

export default Admin;
