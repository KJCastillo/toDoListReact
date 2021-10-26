import React, { Component } from "react";

import "../App.css";

class Body extends Component {
  render() {
    return (
      <div classNameName="body">
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label for="input" className="sr-only">
              Task
            </label>
            <input
              type="input"
              className="form-control"
              id="input2"
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
}

export default Body;
