import React, { Component } from "react";
import logo from "./logo.svg";
import ycth from "./img/ycth.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export const App = () => {
  
    return (
     
      <div className="App">
      <Navbar />
      <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={ycth} className="ycth" alt="ycth img" />
      </div>
    );
};

export default App;
