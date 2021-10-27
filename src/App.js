import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import ToDo from "./components/ToDo";
import List from "./components/List";
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
      <Body inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      {/* passing useState to component to use input to populate list*/}
      <ToDo setTodos={setTodos} todos={todos}/>
      {/* passing useState to component to use todos and update/delete list */}
      <Footer />
    </div>
  );
};

export default App;