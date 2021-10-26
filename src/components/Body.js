import React, { Component } from "react";
import "../App.css";

const Body = ({setInputText}) => {
  //called props "setInputText" above from App.js component
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.taget.value)
  }
    return (
      <div className="body container-fluid">
        <form className="col-lg-6 offset-lg-3 pt-5">
          <div className="form-group row justify-content-center mx-sm-3 mb-2">
            <input
            onChange={inputTextHandler}
              type="input"
              className="form-control"
              placeholder="Task"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Add
          </button>
        </form>
      </div>
    );
}

export default Body;
