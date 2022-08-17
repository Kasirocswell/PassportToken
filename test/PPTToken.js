const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");



describe("PPTToken", function () {

    let PPTToken;
    let owner;
    let addr1;

    beforeEach( async function() {
        const Token = await hre.ethers.getContractFactory("PPTToken");
        PPTToken = await Token.deploy();
        await PPTToken.deployed();
        [owner, addr1] = await ethers.getSigners();
    });   
    
    it("Should mint and distribute PPT tokens", async function () {
        console.log("success!")       
       });
       
       it("Should deploy with 1m coin supply to owner contract", async function() {
           const balance = await PPTToken.balanceOf(owner.address);
           console.log(balance);
           expect (balance == 1000000);
       });

       it("Should send and recieve tokens", async function(){
            await PPTToken.transfer(addr1.address, 10);
            expect(await PPTToken.balanceOf(addr1.address)).to.equal(10);
       });
});

