var PortalNetworkToken = artifacts.require("./PortalNetworkToken.sol");
var NameRegex = artifacts.require("./NameRegex.sol");
var ProtocolRegex = artifacts.require("./ProtocolRegex.sol");

module.exports = async (deployer) => {
  // Deploy Universal Registry 
  // Deploy Universal Registrar 
  deployer.deploy(NameRegex);
  deployer.deploy(ProtocolRegex);

  /*
   * @param PRTAccrudAddr
   * @param UniversalRegistrarAddr
   */ 
  deployer.deploy(PortalNetworkToken, '0x000000000000000000000000000000000000dead', '0x0000000000000000000000000000000000000000');

};