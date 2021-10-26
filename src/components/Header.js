import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="App-header pt-4">
        <img src={logo} className="App-logo " alt="logo" />
        <h2>React To Do List</h2>
      </div>
    );
  }
}

export default Header;
