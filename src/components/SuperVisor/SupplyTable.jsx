import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAccountID, intializeContract } from "../../utils/connectWallet";
import abiArray from "../../utils/abiArray.json";

const Supplytable = () => {
  const [adminAddress, setAdminAddress] = useState(localStorage.account);
  const [requests, setRequests] = useState([]);
  const contractAddress = "0xac60dB062094064A67d4488eB3014de45115a105";
  const contract = intializeContract(abiArray, contractAddress);
  useEffect(() => {
    getRequest(adminAddress);
  }, []);
  const getRequest = async (ngoAddress) => {
    let requestarr = [];
    //update address
    const getSize = await contract.methods
      .getSizeOffetchRequests(ngoAddress)
      .call();
    console.log(getSize);
    for (let i = 0; i < getSize; i++) {
      console.log(getSize, "CAME TILL HERE");
      let request = await contract.methods.requests(ngoAddress, i).call();
      console.log(request);
      if (request.requestState === "0")
        requestarr.push({ ...request, state: "Created", index: i });
      else if (request.requestState === "1")
        requestarr.push({ ...request, state: "Dispatched", index: i });
      else if (request.requestState === "2")
        requestarr.push({ ...request, state: "Successful", index: i });
    }
    setRequests(requestarr);
  };
  const receiveSuppliesFromNgo = async (indexOfSupply, ngoAddress) => {
    await contract.methods
      .receiveSupples(ngoAddress, indexOfSupply)
      .send({ from: adminAddress })
      .then((res) => {
        console.log(res);
        if (res.status) {
          location.reload();
        } else {
          console.log("something went wrong while updating state of request");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(requests);
  return (
    <div>
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
              Supervisor
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
              Type
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Quantity
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              State
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Accept
            </th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((r) => (
              <tr key={r.index}>
                <td className="px-4 py-3">{r.supervisor}</td>
                <td className="px-4 py-3 text-lg text-gray-900">
                  {r.supplyType}
                </td>
                <td className="px-4 py-3">{r.amount}</td>
                <td className="px-4 py-3">{r.state}</td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                  {r.requestState !== 2 ? (
                    <button
                      onClick={() => {
                        receiveSuppliesFromNgo(r.index, adminAddress);
                      }}
                      class="flex mx-auto mt-16 text-white bg-green-500 border-0 px-8 focus:outline-none hover:bg-green-800 rounded text-lg"
                    >
                      Accept
                    </button>
                  ) : (
                    <button
                      disabled
                      class="flex mx-auto mt-16 text-white bg-green-500 border-0 px-8 focus:outline-none hover:bg-green-800 rounded text-lg"
                    >
                      Successfull
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <p></p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Supplytable;
