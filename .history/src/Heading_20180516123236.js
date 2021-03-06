import React, { Component } from "react";
import "./Heading.css";

class Heading extends Component {
  render() {
    return (
      <header>
        <h3 className="title">
          Mes Amies {this.props.nb > 0 && <span>{this.props.nb}</span>}
        </h3>
      </header>
    );
  }
}

export default Heading;
