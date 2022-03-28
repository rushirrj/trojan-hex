import React from "react";
import abiArray from "../../utils/abiArray.json";
import { intializeContract, getAccountID } from "../../utils/connectWallet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const CreateSuperVisor = () => {
  const [inputs, setinputs] = useState({
    name: "",
    address: "",
  });
  const [supervisorM, setSupervisor] = useState([]);

  const contractAddress = "0xac60dB062094064A67d4488eB3014de45115a105";
  const contract = intializeContract(abiArray, contractAddress);
  const adminAddress = localStorage.account;
  // console.log(adminAddress, "i was here");
  const onChange = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const createSupervisor = async (address, name) => {
    const newSupervisor = await contract.methods
      .giveAccessToSupervisor(address, name)
      .send({ from: adminAddress })
      .then((res) => {
        if (res.status) {
          setSupervisor([
            ...supervisorM,
            {
              supervisorID: address,
              supervisorName: name,
            },
          ]);
        } else {
          console.log("SWW while adding supervisor");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(newSupervisor);
    setinputs({
      name: "",
      address: "",
    });
  };

  const getSupervisor = async (NGO_address) => {
    let supervisorArr = [];
    const getSize = await contract.methods
      .getSizeOffetchSupervisors(NGO_address)
      .call();

    console.log(getSize);
    //get all NGOs Via loop

    for (let i = 0; i < getSize; i++) {
      let supervisor = await contract.methods
        .fetchSupervisor(NGO_address, i)
        .call();
      console.log(supervisor);
      let supervisor_name = await contract.methods
        .getSupervisor(supervisor)
        .call();
      console.log(supervisor, supervisor_name);
      supervisorArr.push({
        supervisorID: supervisor,
        supervisorName: supervisor_name,
      });
    }
    setSupervisor(supervisorArr);
  };
  console.log(supervisorM);

  const createRequest = async (typeOfSupply, supervisor, amount) => {
    const newRequest = await contract.methods
      .createSupplyRequest(typeOfSupply, supervisor, amount)
      .send({ from: adminAddress });
    console.log(newRequest);
  };

  const sendSupplies = async (index) => {
    const initiateSupply = await contract.methods
      .sendSupplies(index)
      .call({ from: adminAddress });
  };

  // const getAllRequest = async ()
  useEffect(() => {
    getSupervisor(adminAddress);
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add SuperVisor to an Group/NGO.
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
                createSupervisor(inputs.address, inputs.name);
              }}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
      <div className="md:mx-auto md:10/12 lg:w-8/12 mb-10">
        <div className="flex justify-between mb-5">
          <Link class="mt-3 text-indigo-500 inline-flex items-center" to="/ngo">
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
                Supervisor Adddress
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {supervisorM.length > 0 ? (
              supervisorM.map((s, i) => (
                <tr key={i}>
                  <td className="px-4 py-3">{s.supervisorID}</td>
                  <td className="px-4 py-3">{s.supervisorName}</td>
                </tr>
              ))
            ) : (
              <p>Not Data Found</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CreateSuperVisor;
