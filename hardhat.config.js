require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const POLYGON_RPC_URL = `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
const POLYGON_MUMBAI_RPC_URL = `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`;
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: POLYGON_RPC_URL
      },
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    mumbai: {
      url: POLYGON_MUMBAI_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 80001,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
    player: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
      },
      {
        version: "0.8.18",
      },
    ],
  },
  mocha: {
    timeout: 500000,
  },
};