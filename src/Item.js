import React, { Component } from "react";

import "./Item.css";
class Item extends Component {
  constructor(props) {
    super(props);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <li className="list-group-item">
        <img
          className="img-fluid img-thumbnail"
          src={this.props.user.picture.thumbnail}
        />
        {this.capitalizeFirstLetter(this.props.user.name.title)}{" "}
        {this.capitalizeFirstLetter(this.props.user.name.first)}{" "}
        {this.capitalizeFirstLetter(this.props.user.name.last)}
      </li>
    );
  }
}

export default Item;
