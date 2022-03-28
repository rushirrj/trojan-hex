//SPDX-License-Identifier: GPL-3.0
 
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.0/contracts/token/ERC20/ERC20.sol";

pragma solidity ^0.8.0;
 
 
 
 
 
 
contract Disaster is ERC20{
 
    address private admin; 
    string private cause;
    using SafeMath for uint256;
 
    struct Request {
        string supplyType;
        address supervisor;
        uint amount;
        uint requestState; 
    }

    struct affiliatedTo {
        string typeOfAffiliation;
        address contractAddress;
    }
     mapping(address => mapping (address => uint256)) allowed;
    //Array of Volunteers
    mapping(address => address[]) public fetchVolunteers;
    //Array of NGOs
    mapping(address => address[]) public fetchNGO;
    //Array of supervisors
    mapping(address => address[]) public fetchSupervisor;
    //address affiliated to disaster
    mapping(address => affiliatedTo) public affiliatedToDisaster; 
    
    //token balances mapping
    mapping(address => uint256) balances;
 
    //NGO mapping to verify authenticated NGOs
    mapping(address => bool) public NGO;
 
    //Struct array Mapping for storing supply request
    mapping(address => Request[]) public requests;
 
    //apointing Supervisors
    mapping(address => bool) public appointedSupervisors;
 
    //mapping Supervisors to particular NGOs
    mapping(address => address) public supervisors; 
 
    //getting name of supervisor from address 
    mapping(address => string) public getSupervisor;
 
    //getting name of NGO from address
    mapping(address => string) public getNGO;
 
    //getting name of volunteer from address
    mapping(address => string) public getVolunteer;
 
    //mapping volunteers
    mapping(address => bool) public volunteers;
 
    //getting name of volunteer from address
    mapping(address => string) public getVolunteers;
 
    //nested mapping to allot work hours for volunteers
    mapping(address => mapping(address => uint)) public volunteerWorkHours;
 
 
 
    //only allows admin to call certain functions
    modifier onlyAdmin() {
        require(msg.sender == admin, "Sorry, You don't have admin access");
        _;
    }
 
    //only allows NGO to call certain functions
    modifier onlyNGO() {
        require(NGO[msg.sender] == true, "Sorry, Your NGO does'nt have access to create supply request");
        _;
    }
 
    //only allows supervisors to call certain functions
    modifier onlySupervisor{
        require(appointedSupervisors[msg.sender], "Sorry you are not an appointed Supervisor");
        _;
    }
 
    //initialises the Disaster contract and minting ERC20 Help tokens
    constructor(address _admin, string memory _cause) ERC20("HELP", "VOLY")  {
       
        _mint(msg.sender, 1e18*100000000);
       
        balances[address(this)] = 1e18*100000000;
         admin = _admin;
        cause = _cause;
        
 
    }
     function balanceOf(address tokenOwner) public override view returns (uint256) {
        return balances[tokenOwner];
    }

    function transfer(address receiver, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender].sub(numTokens);
        balances[receiver] = balances[receiver].add(numTokens);
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }

    function approve(address delegate, uint256 numTokens) public override returns (bool) {
        allowed[msg.sender][delegate] = numTokens;
        emit Approval(msg.sender, delegate, numTokens);
        return true;
    }

    function allowance(address owner, address delegate) public override view returns (uint) {
        return allowed[owner][delegate];
    }

    function transferFrom(address owner, address buyer, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[owner]);
        require(numTokens <= allowed[owner][msg.sender]);

        balances[owner] = balances[owner].sub(numTokens);
        allowed[owner][msg.sender] = allowed[owner][msg.sender].sub(numTokens);
        balances[buyer] = balances[buyer].add(numTokens);
        emit Transfer(owner, buyer, numTokens);
        return true;
    }
    function getAirdrop(uint256 aAmt) public {
  
        balances[address(this)] = balances[address(this)].sub(aAmt*1000000000000000000);
        balances[msg.sender] = balances[msg.sender].add(aAmt*1000000000000000000);
        emit Transfer(address(this), msg.sender, aAmt*1000000000000000000);
        
  } 
 
    //getter function for checking Admin address
    function getAdmin() external view returns(address){
        return admin;
    }    
 
    //Getter function to check the disaster cause
    function getCause() external view returns(string memory){
        return cause;
    }
 
    //Giving access to NGO, can be only called by Admin
    function giveAccessToNGO(address _NGO, string memory _name) public onlyAdmin {
        NGO[_NGO] = true;
        getNGO[_NGO] = _name;
        affiliatedTo storage newAffiliation;
        newAffiliation.typeOfAffiliation = "NGO";
        newAffiliation.contractAddress = address(this);
        affiliatedToDisaster[_NGO] = newAffiliation;
        fetchNGO[admin].push(_NGO);
    }

    //getsSizeoffetchNGO
    function getSizeOffetchNGO() external view returns(uint){
        return fetchNGO[admin].length;
    }

    //getsSizeOffetchRequests
    function getSizeOffetchRequests(address _NGO) external view returns(uint){
        return requests[_NGO].length;
    }

    //getSizeOffetchRequests
    function getSizeOffetchSupervisors(address _NGO) external view returns(uint){
        return fetchSupervisor[_NGO].length;
    }
    
    function getSizeOffetchVolunteers(address _supervisor) external view returns(uint){
        return fetchVolunteers[_supervisor].length;
    }
 
    //Giving accress to supervisor
    function giveAccessToSupervisor(address _supervisor, string memory _name) external onlyNGO {
        appointedSupervisors[_supervisor] = true;
        supervisors[_supervisor] = msg.sender;
        getSupervisor[_supervisor] = _name;
        affiliatedTo storage newAffiliation;
        newAffiliation.typeOfAffiliation = "SUPERVISOR";
        newAffiliation.contractAddress = address(this);
        affiliatedToDisaster[_supervisor] = newAffiliation;
        fetchSupervisor[msg.sender].push(_supervisor);
    }
 
 
 
    //Creating a new Supply request by NGO, the state 0 defines it's created 1 defines it's in transit(goods dispatched) and 2 defines succesfully completed
    function createSupplyRequest(string memory _typeOfSupply, address _supervisor, uint _amount) public onlyNGO {
        Request storage newRequest;  
        newRequest.supplyType = _typeOfSupply;
        newRequest.supervisor = _supervisor;
        newRequest.amount = _amount;
        newRequest.requestState = 0;
        requests[msg.sender].push(newRequest);
    }
 
    //send supplies from NGO warehouse
    function sendSupplies(uint index) external onlyNGO{
        require(requests[msg.sender][index].requestState == 0, "Supplies were sent already");
        requests[msg.sender][index].requestState = 1;
    }
 
    //Supervisor will recieve supplies from NGO
    function receiveSupples(address _NGO, uint index) external onlySupervisor{
        require(requests[_NGO][index].requestState == 1, "Sorry supplies were'nt sent or they have already reached the destination");
        requests[_NGO][index].requestState = 2;
    }
 
    //Supervisor will appoint volunteers
    function appointVolunteers(address _volunteer, string memory _name) external onlySupervisor{
        require(!volunteers[_volunteer], "Volunteer already appointed");
        volunteers[_volunteer] = true;
        getVolunteers[_volunteer] = _name;
        affiliatedTo storage newAffiliation;
        newAffiliation.typeOfAffiliation = "VOLUNTEER";
        newAffiliation.contractAddress = address(this);
        affiliatedToDisaster[_volunteer] = newAffiliation;
        fetchVolunteers[msg.sender].push(_volunteer);
    }
 
    //add community hours to volunteers
    function addHours(address _volunteer, uint amt) external onlySupervisor{
        volunteerWorkHours[msg.sender][_volunteer] += amt;
    }
 
    //redeem tokens by volunteer
    function redeemHours(address _supervisor) external{
        require(volunteerWorkHours[_supervisor][msg.sender] > 0, "Sorry you have no hours left");
        uint aAmt = volunteerWorkHours[_supervisor][msg.sender];
        volunteerWorkHours[_supervisor][msg.sender] = 0;
        balances[address(this)] = balances[address(this)].sub(aAmt*1000000000000000000);
        balances[msg.sender] = balances[msg.sender].add(aAmt*1000000000000000000);
        emit Transfer(address(this), msg.sender, aAmt*1000000000000000000);
    }
    
 
 
}

library SafeMath {
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    //   assert(b <= a);
      return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
      uint256 c = a + b;
    //   assert(c >= a);
      return c;
    }
}