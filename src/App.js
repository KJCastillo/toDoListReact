import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import ToDo from "./components/ToDo";
import Footer from "./components/Footer";

export const App = () => {
  
    return (
     
      <div className="App ">
      <Navbar />
      <Header />
      <Body />
      <ToDo />
      <Footer />
      </div>
    );
};

export default App;
