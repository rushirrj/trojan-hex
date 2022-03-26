import Web3 from "web3";
import abiArray from "./utils/abiArray.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesM from "./Routes";
function App() {
  (async () => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(account);
  })();
  const contractAddress = "0x0bdF9a83Be459286c0E21a62ed21EE7eda69Fc23";

  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(abiArray, contractAddress);
  console.log(contract.methods);
  (async () => {
    const admin = await contract.methods.getAdmin().call();
    console.log(admin, "i was here");
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
