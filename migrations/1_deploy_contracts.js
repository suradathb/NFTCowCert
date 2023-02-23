const Cowcoin = artifacts.require("CowCoin");

module.exports = function (deployer) {
  deployer.deploy(Cowcoin);
};
