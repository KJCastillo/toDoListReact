import React, { Component } from "react";
import List from "./List";
import "../App.css";

const ToDo = () => {
    return (
        <div className="toDoContainer">
            <ul className="toDoList">
                <List />
            </ul>
        </div>
    )
}

export default ToDo;