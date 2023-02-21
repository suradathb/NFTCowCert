require('@babel/register');
require('@babel/polyfill');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const providerTestnet = new HDWalletProvider({
  // privateKeys: ['b8a56e6041d2d97564fdbe342e32e8518ec1e41230d11ef3333f0bebd152a16a'],
  privateKeys: ['4054150a976e78366bfd190da4b4592dc4a5a6d94d0ef9d059c2517d05bbe365'],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'

});

const providerTestnetmumbai = new HDWalletProvider({
  // privateKeys: ['b8a56e6041d2d97564fdbe342e32e8518ec1e41230d11ef3333f0bebd152a16a'],
  privateKeys: ['e2024b93133398322d3e02b09108668571983a6b79e91f68b35a9e261c58f3a5'],
  providerOrUrl: 'https://rpc-mumbai.maticvigil.com'
});

module.exports = {
  contracts_diretory:'./contracts/',
  contracts_build_directory: './src/abis/',
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    mumbiTest: {
      provider: () => providerTestnetmumbai,
      network_id: "80001",
      port: 80001,
      // gas: 1000000,
      skipDryRun: true,
    },
    binanceTestnet: {
      provider: () => providerTestnet,
      network_id: "97",
      // gas: 1000000,
      skipDryRun: true,
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      optimizer:{
        enabled:true,
        runs:200
      },
      version:"^0.8.7",
    }
  },
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
