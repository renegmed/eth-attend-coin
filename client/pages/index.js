import React, { Component } from 'react';
import Layout from '../components/Layout';
import Details from './details'

export default class HomePage extends Component {   
  
  render() { 
    return (
      <Layout>
          <Details />       
      </Layout>
    );
  }
}
 