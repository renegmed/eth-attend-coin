import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import { Router } from '../routes';
 
export default class ApproveForm extends Component {
  state = {
    to: '',
    tokens: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const {web3, contract, currentAccount} = this.props;
    console.log("******* ApproveForm onSubmit() address ***********");
    console.log(web3);
    console.log(contract);
    console.log('+++++++ current account: ',currentAccount); 
    console.log('+++++++ to: ', this.state.to);
    console.log('+++++++ tokens: ', this.state.tokens); 
     
    this.setState({ loading: true, errorMessage: '' });

    try {
       const accounts = await web3.eth.getAccounts();
       console.log("******* ApproveForm onSubmit()  accounts[0]  ***********");
       console.log(accounts[0]);
 

      const result = await contract.methods.approve(
              this.state.to, parseInt(this.state.tokens)).send({
              from: accounts[0],
              value: ''
            });

      console.log('Success?', result)
 
      Router.replaceRoute(`/approve`);

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
          <label>Approve Transfer</label>
          
          <Input
            value={this.state.tokens}
            onChange={event => this.setState({ tokens: event.target.value })}
            label="No. of Tokens "
            labelPosition="left"
          />
          <p></p>
          <Input
            value={this.state.to}
            onChange={event => this.setState({ to: event.target.value })}
            label="Spender "
            labelPosition="left"
          />
          <p></p>
        </Form.Field>

        <Message error header="ERROR" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Approve Now
        </Button>
      </Form>
    );
  }
}
 
