import React, { Component } from "react";

class MagicButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0
    };
    this.plus = this.plus.bind(this);
    // Mon evenement plus() sera lié à la classe par le this
  }

  plus() {
    // setState: fonction qui modifie l'état de mon composant
    this.setState({
      times: this.state.times + 1
    });

    // appel de la callback présente parmis mes props
    this.props.augmenter();
  }

  render() {
    return (
      <button onClick={this.plus}>
        Augmenter mon nombre d'or ({this.state.times} fois)
      </button>
    );
  }
}

export default MagicButton;
