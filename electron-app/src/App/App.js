import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor () {
    super();

    this.state = {
      status: "Waiting for Express response"
    };

    this.initState = this.state;

    this.serverStatusOnClick = this.serverStatusOnClick.bind(this);
    this.resetStatusOnClick = this.resetStatusOnClick.bind(this);
  }

  setStatus(statusString) {
    this.setState({
      status: statusString
    });
  }

  getStatus() {
    return this.state.status;
  }

  serverStatusOnClick () {
    axios.get("http://localhost:8080/Test")
      .then(response => this.setStatus(response.data));
  }

  resetStatusOnClick () {
    this.setState(this.initState);
  }

  render() {
    return (
      <div className="App">
      
      <button className='button' onClick={this.serverStatusOnClick}>
        Get server status
      </button>
      <br /><br />
      <button className='button' onClick={this.resetStatusOnClick}>
        Reset server status
      </button>

      <p>
        Status: {this.getStatus()}
      </p>
      
      </div>
    );
  }
}

export default App;
