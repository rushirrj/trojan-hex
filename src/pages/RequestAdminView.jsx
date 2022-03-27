import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import abiArray from "../utils/abiArray.json";
import { intializeContract } from "../utils/connectWallet";
import { Link, useSearchParams } from "react-router-dom";
const Requestadminview = ({ ngo }) => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [ngoName, setNgoName] = useState("");
  const navigate = useNavigate();
  const contractAddress = "0x2c3bC0015567C7139F7A1BEC0254aEBFCeA4fBaa";
  const contract = intializeContract(abiArray, contractAddress);
  const NGO_Name = async () => {
    return await contract.methods.getNGO(id).call();
  };
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    getRequest();
  }, []);
  const getRequest = async () => {
    let requestarr = [];
    const getSize = await contract.methods.getSizeOffetchRequests().call();
    console.log(getSize);
    for (let i = 0; i < getSize; i++) {
      let request = await contract.methods.requests(id, i).call();
      console.log(request.requestState);
      console.log(typeof request.requestState);
      if (request.requestState === "0") {
        requestarr.push({ ...request, state: "Created" });
      } else if (request.requestState === "1") {
        requestarr.push({ ...request, state: "Dispatched" });
      } else if (request.requestState === "2") {
        requestarr.push({ ...request, state: "Successful" });
      }
    }
    setRequests(requestarr);
  };
  return (
    <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10 my-10">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Supplies for selected NGO : {name}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep.
        </p>
      </div>
      <div className="flex justify-between mb-3 w-full">
        <div
          class="mt-3 text-indigo-500 inline-flex items-center"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
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
        </div>
        <p></p>
      </div>
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
              Supervisor
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Type
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Quantity/Amount
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Request State
            </th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((r, i) => (
              <tr key={i}>
                <td className="px-4 py-3">{r.supervisor}</td>
                <td className="px-4 py-3">{r.supplyType}</td>
                <td className="px-4 py-3">{r.amount}</td>
                <td className="px-4 py-3">{r?.state}</td>
              </tr>
            ))
          ) : (
            <p className="flex items-center justify-center text-lg text-black">
              No Data Found
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Requestadminview;
