import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import ToDo from "./components/ToDo";
import Footer from "./components/Footer";

export const App = () => {
  const [inputText, setInputText] = useState("");
  // useState made here in order to use in all components, place in tags below and use props in corresponding components
  // quotes used because we are expecting text as input
  const [todos, setTodos] = useState([]);
  // array used because we are expecting an array of objects, in this case a list of to do's
  return (
    <div className="App ">
      <Navbar />
      <Header />
      <Body setInputText={setInputText} />
      <ToDo />
      <Footer />
    </div>
  );
};

export default App;
