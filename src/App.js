import React, { Component } from 'react';
import logo from './logo.svg';
import ycth from './img/ycth.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Boilerplate</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    <img src={ycth} className="ycth" alt="ycth img"/>
      </div>
    );
  }
}

export default App;
