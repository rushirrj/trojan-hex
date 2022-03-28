import Web3 from "web3";
import abiArray from "./abiArray.json";
import DisasterCreateABI from "./DisasterCreateABI.json";

const mainContractAddress = "0x251Aa62d5a9f5b28aAb63C65a33FE0a22fC01832";
const contractAddress = "0x2138770145401C76c2B50CE775AE4c2546F107a2";

export const intializeContract = (abiArray, contractAddress) => {
    const web3 = new Web3(Web3.givenProvider);
    return new web3.eth.Contract(abiArray, contractAddress);
};

const mainContract = intializeContract(DisasterCreateABI, mainContractAddress);

const contract = intializeContract(abiArray, contractAddress);

export const connectWallet = async(setdata) => {
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
            localStorage.setItem("account", account[0]);
            setdata({ address: account[0] });
        });
};
export const getAccountID = async() => {
    const id = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    console.log(id[0], "here");
    return id[0];
};

export const disconnectWallet = async(setdata) => {
    setdata({ address: "" });
    localStorage.removeItem("account");
};