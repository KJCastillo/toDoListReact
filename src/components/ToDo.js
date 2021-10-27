import React, { Component } from "react";
import List from "./List";
import "../App.css";

const ToDo = ({ todos, setTodos }) => {
  //called props "todos" and "setTodos" above from App.js to use in List.js
  return (
    <div className="toDoContainer">
      <ul className="toDoList">
        {todos.map((todo) => (
          <List
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
          // take text from List component to map out (todo.text because that's that calls back the text in the useState array)
          // take setTodos and todos from App.js to pass down to List.js to be able to modify state
          // take todo to be able to delete
        ))}
        {/* from each to do from the state that we have, render out a to do component */}
      </ul>
    </div>
  );
};

export default ToDo;
