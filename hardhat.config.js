require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// const {API_URL,PRIVATE_KEY} = process.env
// const API_URL = "";
// const PRIVATE_KEY = "";
const API_URL="https://eth-ropsten.alchemyapi.io/v2/HqdYpZhjEmCXStNeWvyMEj85JAMa3x28"
//From METAMASK .. 
const PRIVATE_KEY="4b5b9706d607a38fe7354708c92e72690138e760537721d2263cc7c61ad0f5fa"
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork : "ropsten",
  networks :{
    hardhat : {},
    ropsten : {
      url : API_URL ,
      accounts : [`0x${PRIVATE_KEY}`],
    }
  }
};
