import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor () {
    super();

    this.state = {
      username: ''
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get("http://localhost:8080/test")
      .then(response => console.log("response: " + response.data));
  }

  render() {
    return (
      <div className="App">
      
      <button className='button' onClick={this.handleClick}>
        Nappi
      </button>
      
      </div>
    );
  }
}

export default App;
