
const hardhat= require("hardhat");



async function main() {
    //get contract owner
    const [deployer] = await hardhat.ethers.getSigners();
    console.log("Deploying contracts with address:", deployer.address);

    //get contract
    const Token = await hardhat.ethers.getContractFactory("Token");

    //deploy contract
    const token = await Token.deploy();
    await token.waitForDeployment();
    console.log("Token deployed to:", token.target)
    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1)
    });