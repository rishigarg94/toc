const Migrations = artifacts.require("hack");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
