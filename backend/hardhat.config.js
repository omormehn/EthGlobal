require("@nomicfoundation/hardhat-toolbox");
const dotenv = require('dotenv');

dotenv.config();

const privateKey = process.env.PRIVATE_KEY
const apiKey = process.env.API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${apiKey}`,
      accounts: [`0x${privateKey}`]
    },
  },
};
