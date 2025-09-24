module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Ganache host
      port: 7545,            // Ganache GUI uses 7545, CLI uses 8545
      network_id: "*",
      gas: 5000000       // Match any network id
    },
  },

  compilers: {
    solc: {
      version: "0.8.21",    // Match your compiler version
    }
  }
};
