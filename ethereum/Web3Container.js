import React from 'react'
import getWeb3 from './getWeb3'
import getFixedSupplyToken from './getFixedSupplyToken'
import fixedSupplyTokenDefinition from '../lib/contracts/FixedSupplyToken.json'

export default class Web3Container extends React.Component {
  state = { web3: null, contract: null, accounts: null };

  async componentDidMount () {
    try {
      const web3 = await getWeb3()
      console.log("------- Web3Container componentDidMount() web3 ----------");
      console.log(web3);

      const accounts = await web3.eth.getAccounts()
      
      console.log(`---- Web3Container componentDidMount() accounts from web3.eth.getAccounts() ----`);
      console.log(accounts);
    
      const fixedSupplyToken = await getFixedSupplyToken(web3, fixedSupplyTokenDefinition)
      this.setState({ web3, contract, accounts })

    } catch (error) {
      alert(
        `Failed to load web3, or campaignFactory. Check console for details.`
      )
      console.log(error)
    }
  }

  render () {     
    const { web3, contract, accounts } = this.state
    return web3 && fixedSupplyToken
      ? this.props.render({ web3, contract, accounts })
      : this.props.renderLoading()
  }
}
