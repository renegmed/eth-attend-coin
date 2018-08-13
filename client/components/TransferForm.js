import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import { Router } from '../routes';
 
export default class TransferForm extends Component {
  state = {
    to: '',
    tokens: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const {web3, contract, currentAccount} = this.props;
    console.log("******* TransferForm onSubmit() address ***********");
    console.log(web3);
    console.log(contract);
    console.log('+++++++ current account: ',currentAccount); 
    console.log('+++++++ to: ', this.state.to);
    console.log('+++++++ tokens: ', this.state.tokens); 
    
    // const web3 = await getWeb3()     
    // console.log("******* ContributeForm onSubmit()  web3  ***********");
    // console.log(web3);
      
    // const campaign = new web3.eth.Contract(
    //   campaignDefinition.abi,
    //   address
    // )
    // console.log("******* ContributeForm onSubmit()  campaign  ***********");
    // console.log(campaign);

    this.setState({ loading: true, errorMessage: '' });

    try {
       const accounts = await web3.eth.getAccounts();
       console.log("******* ContributeForm onSubmit()  accounts[0]  ***********");
       console.log(accounts[0]);
 

      const result = await contract.methods.transferFrom(
            currentAccount, this.state.to, parseInt(this.state.tokens)).send({
              from: accounts[0],
              value: ''
            });

      console.log('Success?', result)

      Router.replaceRoute(`/transfer`);
    } catch (err) {
      console.log(err.message)
      this.setState({ errorMessage: err.message })       
    }

    this.setState({ loading: false, tokens: '', to: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>          
          <label>Tokens to Transfer</label>
          
          <Input
            value={this.state.tokens}
            onChange={event => this.setState({ tokens: event.target.value })}
            label="No. of Tokens"
            labelPosition="left"
          />
          <p></p>
          <Input
            value={this.state.to}
            onChange={event => this.setState({ to: event.target.value })}
            label="Transfer To"
            labelPosition="left"
          />
          <p></p>
        </Form.Field>

        <Message error header="ERROR" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Transfer Now
        </Button>
      </Form>
    );
  }
}
 
