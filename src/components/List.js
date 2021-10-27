import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const List = ({text, todo, todos, setTodos}) => {
    //pass the prop text below to use it in the ToDo component
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
        //filter out if id does not match, then it removes it
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <div className="list container-fluid">
      <div className="row">
        <li className={`col-10 listItem list-unstyled list-group-item-info d-inline-block pt-2 m-1 ${todo.completed ? "completed" : ""}`}>
          <h4>{text}</h4>
        </li>
        <button type="submit" className="complete-btn btn-primary m-2 mb-2" onClick={completeHandler}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button type="submit" className="trash-btn btn-primary m-2 mb-2" onClick={deleteHandler}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default List;