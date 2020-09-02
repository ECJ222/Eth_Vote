const Election = artifacts.require("Election");

contract("Election", async (accounts) => {
	//Candidates

	it("should check total number of candidates in the election", async () => {
		let instance = await Election.deployed();
		let testcandidate = await instance.Count();

		assert.equal(testcandidate.words[0], 0);
	});
	
	//Create candidate

	it("should create a new candidate", async () => {
		//
		let instance = await Election.deployed();
		let testcreatecandidate = await instance.createCandidate('Donald Trump');
		let testcandidate = await instance.Count();

		assert.equal(testcandidate.words[0], 1);
	});
	
	//vote for a candidate

	it("should vote for a candidate", async() => {
		//
		let instance = await Election.deployed();
		let testincrementvote = await instance.incrementVote(1);
		let testvote = await instance.voter(1);
		let vote = testvote.vote.words[0]; //gets vote amount

		assert.equal(vote, 1);
	});
	
});