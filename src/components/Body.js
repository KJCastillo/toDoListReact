import React, { Component } from "react";
import "../App.css";

const Body = ({ setInputText, inputText, todos, setTodos }) => {
  //called props "setInputText" above from App.js component
  //called props "todos" and "setTods" above from App.js component
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.taget.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    //stops from refreshing page
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
      // spread syntax used to pass if anyting is already in the list
    ]);
    setInputText("");
    // setInputText('') resets state after submit
  };
  return (
    <div className="body container-fluid">
      <form className="col-lg-6 offset-lg-3 pt-5">
        <div className="form-group row justify-content-center mx-sm-3 mb-2">
          <input
            value={inputText}
            //updates UI after submit to match state (clears the input after submit)
            onChange={inputTextHandler}
            type="input"
            className="form-control"
            placeholder="Task"
          />
        </div>
        <button
          type="submit"
          onClick={submitTodoHandler}
          className="btn btn-primary mb-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Body;
