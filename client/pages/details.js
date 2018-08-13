
import React, { Component } from 'react'
import { Label } from 'semantic-ui-react';
import Web3Container from '../lib/Web3Container'

class Details extends Component {
    state = {web3: null, contract: null}
    
    // static async getInitialProps(props) {  
    //     const { web3, contract, accounts } = props.query  
    
    //     console.log(web3)
    //     console.log(contract)    
    //     console.log(accounts)

    //     return  { web3, contract, accounts }
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
        return (
        <div>
            <h3>Account Details</h3>
            <Label>
                Name of Token Account: 
                <Label.Detail>{this.state.name}</Label.Detail>
            </Label>
            <p></p>
            <Label>
                Token Symbol: 
                <Label.Detail>{this.state.symbol}</Label.Detail>
            </Label>
            <p></p>
            <Label>
                Total Token Supply: 
                <Label.Detail>{this.state.totalSupply}</Label.Detail>
            </Label>
            <Label>
                Decimal Position: 
                <Label.Detail>{this.state.decimals}</Label.Detail>
            </Label>
            <p></p>
            <Label>
                User Account Address: 
                <Label.Detail>{this.state.currentAccount}</Label.Detail>
            </Label>
            <p></p>
            <Label>
                Current Account Balance: 
                <Label.Detail>{this.state.accountBalance}</Label.Detail>
            </Label>
            <p></p>
        </div>
           
        )
    }    
}

export default () => (
  
    <Web3Container
      renderLoading={() => <div>Loading Dapp Page...</div>}
      render={({ web3, contract, name, symbol, totalSupply, decimals, currentAccount, accountBalance }) => (
        <Details 
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