import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./Display";
import MagicButton from "./MagicButton";
// importer la classe Diplay (exportée) depuis le fichier Display

class App extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 0
    };

    this.augmenter = this.augmenter.bind(this);
  }

  augmenter() {
    this.setState({
      nombre: this.state.nombre + 1
    });
  }

  render() {
    return (
      <div className="App">
        <Display nombre={this.state.nombre} />
        <MagicButton augmenter={this.augmenter} />
        <MagicButton augmenter={this.augmenter} />
        <MagicButton augmenter={this.augmenter} />
      </div>
    );
  }
}

export default App;
