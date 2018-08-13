import React from 'react'
import getWeb3 from './getWeb3'
import getContract from './getContract'
import contractDefinition from './contracts/FixedSupplyToken.json'

export default class Web3Container extends React.Component {
  state = { web3: null, accounts: null, contract: null };

  async componentDidMount () {
    try {
      const web3 = await getWeb3()
      const contract = await getContract(web3, contractDefinition)
      const accounts = await web3.eth.getAccounts()    
      const name = await contract.methods.name().call()
      const symbol = await contract.methods.symbol().call()
      const totalSupply = await contract.methods.totalSupply().call()
      const decimals = await contract.methods.decimals().call()
      const currentAccount = accounts[0]
      const accountBalance = await contract.methods.balanceOf(currentAccount).call()
     
      this.setState({ 
        web3, 
        contract,      
        name, 
        symbol, 
        totalSupply, 
        currentAccount, 
        decimals,
        accountBalance,  
    }); 
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.log(error)
    }
  }

  render () {
    const { web3, contract, name, symbol, totalSupply, decimals, currentAccount, accountBalance } = this.state
    return web3 && contract
      ? this.props.render({ 
        web3, 
        contract,    
        name, 
        symbol, 
        totalSupply, 
        decimals,
        currentAccount, 
        accountBalance,  
      })
      : this.props.renderLoading()
  }
}
