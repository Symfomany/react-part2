import React, { Component } from "react";
import "./Heading.css";
import { NavLink } from "react-router-dom";

class Heading extends Component {
  render() {
    return (
      <header>
        <h3 className="title">
          Mes Amies Refactor
          {this.props.nb > 0 && (
            <span className="badge">{this.props.nb} amis</span>
          )}
          <NavLink to="/signup">Sign Up</NavLink>
        </h3>
      </header>
    );
  }
}

export default Heading;
