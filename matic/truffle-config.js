const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".mn").toString().trim();

module.exports = {
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      websockets: true,
      gasPrice: 1000000000,
      defaultEtherBalance: 9999
    },
    mumbai: {
      provider: new HDWalletProvider(
        mnemonic,
        `https://rpc-mumbai.maticvigil.com/v1/1907f9b7c80fe27df8b7e71673d67dd52eb53aba`
      ),
      network_id: 80001,
      gasPrice: 1000000000
    },
  },

  mocha: {
    timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.7.4",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "istanbul"
      }
    }
  }
};
