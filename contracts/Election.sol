pragma solidity >=0.4.22 < 0.7.0;

contract Election{
    
    struct Voter {
        uint id;
        string name; // name of the candidate
        uint vote; //vote count
    }
    
    mapping (uint => Voter) public voter;
    
    uint candidateCount;

    function Count() public view returns(uint){
        return candidateCount;
    }
    
    function createCandidate(string memory _name) public {
        candidateCount += 1;
        voter[candidateCount] = Voter(candidateCount, _name, 0);
    }

    function incrementVote (uint _id) public {
    	voter[_id].vote += 1; //get the candidate based on the id
    }
    
    
    
    
}