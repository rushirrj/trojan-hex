import React from "react";
import { useState } from "react";
import abiArray from '../../utils/abiArray.json';
import { intializeContract } from "../../utils/connectWallet";
const CreateNGO = () => {

  const contractAddress = '0x2c3bC0015567C7139F7A1BEC0254aEBFCeA4fBaa';
  const contract = intializeContract(abiArray, contractAddress);
  const adminAddress = '0xabE45d16e0390b9611098a2A58d25484D75d6F6E';

  const [inputs, setinputs] = useState({
    name: "",
    address: ""
  });

  const onChange = (e) =>{
    setinputs({...inputs, [e.target.name]: e.target.value})
  }

  const createNGO = async () =>{
    console.log(inputs.name, inputs.address);
    

    const createNewNgo = await contract.methods.giveAccessToNGO(inputs.address, inputs.name).send({from : adminAddress});
    console.log(createNewNgo);
    setinputs({
      name: "",
      address: ""
    })
  }
  //Print all NGOs 
  //get size of NGO array
  //address => array of NGO
  const getNGO = async () => {
    
    

    const getSize = await contract.methods.getSizeOffetchNGO().call();

    console.log(getSize);
     //get all NGOs Via loop
     
    for(let i = 0; i < getSize; i++){
      let NGO = await contract.methods.fetchNGO(adminAddress, i).call();
      let NGO_Name = await contract.methods.getNGO(NGO).call();
      
      console.log(NGO, NGO_Name);
    }
    
  }

  //address => array of request(struct)
  const getRequest = async () =>{   
    const getSize = await contract.methods.getSizeOffetchRequests().call();
    console.log(getSize);
    for(let i = 0; i < getSize; i++){
      let request = await contract.methods.requests(adminAddress, i).call();
      console.log(request);
    }
  }
  

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Add NGO or Group to an event.
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
              value = {inputs.address}
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
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={createNGO}>
            Submit
          </button>
          <button  className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={getNGO}>
            get ngo
          </button>
          <button  className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={getRequest}>
            get request
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateNGO;
