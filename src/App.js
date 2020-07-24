import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);


class App extends React.Component {
  constructor(props) {
    super(props);
    
    // We declare the state as shown below
    this.state = {                           
      x: "This is x from state",    
      y: "This is y from state"
    }
  }

  render() {
    let x1 = this.state.x;
    let y1 = this.state.y;

    return (
      <div>
        <h1>{x1}</h1>
        <h2>{y1}</h2>
      </div>
    );
  }
}


export default withAuthenticator(App, true);
