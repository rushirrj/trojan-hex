import React from "react";
import abiArray from '../../utils/abiArray.json';
import { intializeContract } from "../../utils/connectWallet";
import { useState } from "react";
const CreateSuperVisor = () => {
    const [inputs, setinputs] = useState({
      name: "",
      address: ""
    });

    const contractAddress = '0x2c3bC0015567C7139F7A1BEC0254aEBFCeA4fBaa';
    const contract = intializeContract(abiArray, contractAddress);
    const adminAddress = '0xabE45d16e0390b9611098a2A58d25484D75d6F6E';

    const onChange = (e) =>{
      setinputs({...inputs, [e.target.name]: e.target.value})
    }

    const createSupervisor = async(address, name) =>{
      const newSupervisor = await contract.methods.giveAccessToSupervisor(address, name).send({from: adminAddress});
      console.log(newSupervisor); 
      setinputs({
        name: "",
        address: ""
      })
    }
    
    const getSupervisor = async (NGO_address) => {
      
      const getSize = await contract.methods.getSizeOffetchSupervisors().call();

      console.log(getSize);
       //get all NGOs Via loop
      
      for(let i = 0; i < getSize; i++){
        let supervisor = await contract.methods.fetchSupervisor(NGO_address, i).call();
        let supervisor_name = await contract.methods.getSupervisor(supervisor).call();
        
        console.log(supervisor, supervisor_name);
      }
      
    }

    const createRequest = async (typeOfSupply, supervisor, amount) => {
        const newRequest = await contract.methods.createSupplyRequest(typeOfSupply, supervisor, amount).send({from: adminAddress});
        console.log(newRequest);
    }

    const sendSupplies = async (index) =>{
        const initiateSupply = await contract.methods.sendSupplies(index).call({from: adminAddress});
    }
    

  
  return (
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
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
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
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateSuperVisor;
