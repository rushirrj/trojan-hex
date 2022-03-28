import React from "react";
import { useState, useEffect } from "react";
import abiArray from "../../utils/abiArray.json";
import { getAccountID, intializeContract } from "../../utils/connectWallet";
import { Link } from "react-router-dom";
const CreateVolunteer = () => {
  const [inputs, setinputs] = useState({
    name: "",
    address: "",
  });

  let getId;

  const [adminAddress, setAdminAddress] = useState(localStorage.account);
  const [volunters, setVolunters] = useState([]);
  const [requests, setRequests] = useState([]);
  const contractAddress = "0xac60dB062094064A67d4488eB3014de45115a105";
  const contract = intializeContract(abiArray, contractAddress);
  console.log(adminAddress);

  const onChange = (e) => {
    // console.log
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };

  //form create volunteer
  const createVolunteer = async (address, name) => {
    await contract.methods
      .appointVolunteers(address, name)
      .send({ from: adminAddress })
      .then((res) => {
        console.log(res);
        if (res.status) {
          setVolunters([
            ...volunters,
            {
              volunteerID: address,
              volunteerName: name,
              volunteerHours: 0,
            },
          ]);
        } else {
          console.log("Something went wrong while creating volunteer");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(adminAddress);
  const getAllVolunteers = async (Supervisor_address) => {
    const getSize = await contract.methods
      .getSizeOffetchVolunteers(Supervisor_address)
      .call();
    let volunteersArr = [];
    for (let i = 0; i < getSize; i++) {
      let volunteer = await contract.methods
        .fetchVolunteers(Supervisor_address, i)
        .call();
      console.log(volunteer);
      let volunteer_name = await contract.methods
        .getVolunteers(volunteer)
        .call();
      console.log(volunteer_name);
      let vhrs = await contract.methods
        .volunteerWorkHours(adminAddress, volunteer)
        .call();
      console.log(vhrs);
      volunteersArr.push({
        volunteerID: volunteer,
        volunteerName: volunteer_name,
        volunteerHours: vhrs,
      });
    }
    setVolunters(volunteersArr);
  };
  useEffect(() => {
    getAllVolunteers(adminAddress);
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Volunteer to Group/NGO.
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={inputs.address}
                onChange={(e) => onChange(e)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name}
                onChange={(e) => onChange(e)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={() => {
                createVolunteer(inputs.address, inputs.name);
              }}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
      <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10">
        <div className="flex justify-between mb-3">
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
                Volunteer Name
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Volunteer Address
              </th>
              <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                Volunteer Hours
              </th>
            </tr>
          </thead>
          <tbody>
            {volunters.length > 0 ? (
              volunters.map((v) => (
                <tr>
                  <td className="px-4 py-3">{v.volunteerName}</td>
                  <td className="px-4 py-3">{v.volunteerID}</td>
                  <td className="px-4 py-3">{v.volunteerHours}</td>
                </tr>
              ))
            ) : (
              <p>No Data Found</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CreateVolunteer;
