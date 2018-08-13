const FixedSupplyToken = artifacts.require('./FixedSupplyToken.sol')

module.exports = function (deployer, network, accounts) {
  deployer.deploy(FixedSupplyToken).then( () => {
    console.log('Deployed FixedSupplyToken address', FixedSupplyToken.address);
    console.log('Deployed network', network);
    console.log('Deployed accounts', accounts);
  }); 
}
