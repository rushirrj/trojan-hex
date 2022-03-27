import Web3 from "web3";
import abiArray from "./abiArray.json";
import DisasterCreateABI from "./DisasterCreateABI.json";

const mainContractAddress = "0x251Aa62d5a9f5b28aAb63C65a33FE0a22fC01832";
const contractAddress = "0xDf145A67BFE65ED59419cb3eF856E7cb0f3f7be5";

const intializeContract = (abiArray, contractAddress) => {
  const web3 = new Web3(Web3.givenProvider);
  return new web3.eth.Contract(abiArray, contractAddress);
};

const mainContract = intializeContract(DisasterCreateABI, mainContractAddress);

const contract = intializeContract(abiArray, contractAddress);

export const connectWallet = async () => {
  await window.ethereum
    .request({
      method: "eth_requestAccounts",
    })
    .then((account) => {
      console.log("Account :" + account);
      console.log("Type Disaster");
      console.log(contract.methods);
      console.log("Main");
      console.log(mainContract.methods);
    });
};
