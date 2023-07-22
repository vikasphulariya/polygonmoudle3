import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// https://github.com/projectsophon/hardhat-circom
import "hardhat-circom";
// circuits
// require("dotenv").config();
import 'dotenv/config'
import circuits = require('./circuits.config.json')

// set env var to the root of the project
process.env.vikas = __dirname;

// tasks
import "./tasks/newcircuit.ts"

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  defaultNetwork: "rospten",
  networks: {
     hardhat: {},
     rospten: { 
         url: "https://eth-goerli.g.alchemy.com/v2/822oQpZ5OrMUvLi2iGTTHHCuL0yABhe_",
         accounts: [`${process.env.PRIVATE_KEY}`],
        },
    },
  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./circuits",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "powersOfTau28_hez_final_12.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};

export default config;
