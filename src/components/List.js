import React, { Component } from "react";
import "../App.css";

const List = () => {
    return (
        <div className="list">
            <li className="listItem">Test test</li>
            <button><i className="fas fa-check"></i></button>
            <button><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default List;