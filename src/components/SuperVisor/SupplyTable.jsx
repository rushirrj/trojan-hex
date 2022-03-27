import React from "react";
import { Link } from "react-router-dom";
const Supplytable = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Maintain Volunteer</a>
            <a className="mr-5 hover:text-gray-900">Manage Supply</a>
          </nav>
        </div>
      </header>
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Manage Supplies for given Group/NGO.
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep.
        </p>
      </div>
      <div className="flex justify-between mb-3 w-full">
        <Link
          class="mt-3 text-indigo-500 inline-flex items-center"
          to="/supervisor"
        >
          Manage Volunteer
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
          to="/supervisor/manage"
        >
          Manage Supplies
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
              Type
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Address
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Amount
            </th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
              Accept
            </th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
              Reject
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3">Ajit NGO</td>
            <td className="px-4 py-3">
              0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
            </td>
            <td className="px-4 py-3 text-lg text-gray-900">Free</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">
                Accept
              </button>
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <button class="flex mx-auto mt-16 text-white bg-red-600 border-0 px-8 focus:outline-none hover:bg-red-800 rounded text-lg">
                Reject
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">RRJ NGO</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">
              0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $24
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">
                Accept
              </button>
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <button class="flex mx-auto mt-16 text-white bg-red-600 border-0 px-8 focus:outline-none hover:bg-red-800 rounded text-lg">
                Reject
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">
              Tejas PIRO Coder
            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3">
              0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
            </td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $50
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">
                Accept
              </button>
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <button class="flex mx-auto mt-16 text-white bg-red-600 border-0 px-8 focus:outline-none hover:bg-red-800 rounded text-lg">
                Reject
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              Ashutosh
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              0xe3B3f5ace203d5659eEb0133dec972921ca9bB21
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $72
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">
                Accept
              </button>
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <button class="flex mx-auto mt-16 text-white bg-red-600 border-0 px-8 focus:outline-none hover:bg-red-800 rounded text-lg">
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Supplytable;
