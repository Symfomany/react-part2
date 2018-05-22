import React, { Component } from "react";
import "./Heading.css";
import { Link } from "react-router-dom";

class Heading extends Component {
  render() {
    return (
      <header>
        <h3 className="title">
          Mes Amies Refactor
          {this.props.nb > 0 && (
            <span className="badge">{this.props.nb} amis</span>
          )}
          <Link to="/signup">Sign Up</Link>
        </h3>
      </header>
    );
  }
}

export default Heading;
