import React, { Component } from "react";
import * as loader from "./loader.gif";

class Loader extends Component {
  render() {
    return (
      <div>
        <img src={loader} />
      </div>
    );
  }
}

export default Loader;
