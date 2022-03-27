import React from "react";
import { Link } from "react-router-dom";
const SupplyTable = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Link
          class="mt-3 text-indigo-500 inline-flex items-center"
          to="/ngo"
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
        <Link
          class="mt-3 text-indigo-500 inline-flex items-center"
          to="/ngo/manage"
        >
          Manage Supply
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
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
              Event/Disaster
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Address
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Date
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Place
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              View
            </th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3">Ajit NGO</td>
            <td className="px-4 py-3">
              0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
            </td>
            <td className="px-4 py-3">15/10/2010</td>
            <td className="px-4 py-3 text-lg text-gray-900">Australia</td>
            <td className="w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">RRJ NGO</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">
              0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $24
            </td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">
              Tejas PIRO Coder
            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3">
              0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $50
            </td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              Ashutosh
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              120 GB
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $72
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SupplyTable;
