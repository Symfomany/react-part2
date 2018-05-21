import React, { Component } from "react";
import Item from "./Item";
import "./Liste.css";

class Heading extends Component {
  render() {
    return (
      <header>
        <h3 className="title">Mes Amies</h3>
      </header>
    );
  }
}

export default Heading;
