require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;
const API_KEY = process.env.MAINNET_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  networks: {
    mainnet: {
      url: API_KEY,
      accounts: [PRIVATE_KEY]
    }
  }
};
