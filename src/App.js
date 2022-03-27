import Web3 from "web3";
import abiArray from "./utils/abiArray.json";
import DisasterCreateABI from "./utils/DisasterCreateABI.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesM from "./Routes";
function App() {
  const mainContractAddress = "0xE04396E5dC79E0d583e0E40cBea3bd3d2C3dC589";
  const contractAddress = "0x0bdF9a83Be459286c0E21a62ed21EE7eda69Fc23";
  (async () => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(account);
  })();

  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(abiArray, contractAddress);
  const mainContract = new web3.eth.Contract(
    DisasterCreateABI,
    mainContractAddress
  );
  console.log(contract.methods);
  (async () => {
    const admin = await contract.methods.getAdmin().call();
    console.log(admin, "DisasterContract");
  })();
  (async () => {
    const admin = await mainContract.methods.disasters(0).call();
    console.log(admin + "main COntract");
  })();

  return (
    <div className="App">
      <Navbar />
      <RoutesM />
      <Footer />
    </div>
  );
}

export default App;
