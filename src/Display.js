import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Nombre d'or"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>Nombre: {this.props.nombre}</p>
      </div>
    );
  }
}

export default Display;
