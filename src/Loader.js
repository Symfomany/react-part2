import React, { Component } from "react";
import * as loader from "./loader.gif";
import "./Loader.css";
class Loader extends Component {
  render() {
    return (
      <div>
        <img id="loader" src={loader} alt="Loading..." />
      </div>
    );
  }
}

export default Loader;
