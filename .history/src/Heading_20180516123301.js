import React, { Component } from "react";
import "./Heading.css";

class Heading extends Component {
  render() {
    return (
      <header>
        <h3 className="title">
          Mes Amies // Refactor
          {this.props.nb > 0 && <span class="badge">{this.props.nb}</span>}
        </h3>
      </header>
    );
  }
}

export default Heading;
