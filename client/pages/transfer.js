import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Web3Container from '../lib/Web3Container'
import TransferForm from '../components/TransferForm'

class Transfer extends Component {   
  state = {web3: null, contract: null,  currentAccount: '',   accountBalance: 0}

  // static async getInitialProps(props) {  
  //        const { web3, accounts, contract, currentAccount, accountBalance } = this.props  
    
  //        console.log("+++++++ Transfer.getInitialProps() ++++++++++++")
  //        console.log(web3)
  //        console.log(contract)    
  //        console.log(currentAccount)
  //        console.log(accountBalance)

  //       return  { web3, contract, currentAccount, accountBalance  }
  // }
  async componentDidMount () {
    const { web3, contract, name, symbol, totalSupply, decimals, currentAccount, accountBalance } = this.props

    console.log('------ Details.componentDidMount() ---------');
    console.log(web3)
    console.log(contract)    
    console.log(currentAccount)    

    this.setState({ 
        web3, 
        contract,           
        name, 
        symbol, 
        totalSupply,
        decimals,
        currentAccount, 
        accountBalance,       
    }); 
}

  render() { 
    const { web3, contract, currentAccount } = this.state
    return (      
      <Layout>
        <div>
          <Label>
                User Account Address: 
                <Label.Detail>{this.state.currentAccount}</Label.Detail>
          </Label>
          <p></p>
          <Label>
                Current Account Balance: 
                <Label.Detail>{this.state.accountBalance}</Label.Detail>
          </Label> 
        </div>
        <p></p>
        <p></p>
        <p></p>       
        <div> 
            <TransferForm web3={web3} contract={contract} currentAccount={currentAccount}/> 
        </div>
      </Layout>
    );
  }
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ web3, contract, name, symbol, totalSupply, decimals, currentAccount, accountBalance }) => (
      <Transfer
        contract={contract} 
        web3={web3} 
        name={name} 
        symbol={symbol} 
        totalSupply={totalSupply} 
        decimals={decimals}
        currentAccount={currentAccount} 
        accountBalance={accountBalance}          
      />
    )}
  />
) 