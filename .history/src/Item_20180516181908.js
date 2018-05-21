import React, { Component } from "react";

import "./Item.css";
class Item extends Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <li className="list-group-item">
        <img
          className="img-fluid img-thumbnail"
          src={this.props.user.avatar}
          alt="Avatar"
        />
        {this.capitalizeFirstLetter(this.props.user.title)}{" "}
        {this.capitalizeFirstLetter(this.props.user.name)}{" "}
        <i className="material-icons">arrow_forward_ios</i>
        <i
          onClick={e => this.props.favorite(this.props.user)}
          className="material-icons"
        >
          star_border
        </i>
      </li>
    );
  }
}

export default Item;
